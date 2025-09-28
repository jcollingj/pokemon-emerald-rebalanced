# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

This is a Pokemon Emerald ROM hack base built on pokeemerald-expansion. Use these commands for development:

**Building the ROM:**
- `make -j$(nproc)` - Standard parallel build (recommended)
- `make debug` - Build with debug symbols for debugging
- `make LTO=1` - Build with link-time optimization (slower build, faster ROM)
- `make` - Basic single-threaded build

**Testing:**
- `make check` - Run the test suite using mgba-rom-test-hydra
- Tests are located in `/test/` directory
- Test configuration is in `/include/config/test.h`

**Development Tools:**
- `make tools` - Build all custom tools (required before first build)
- `make tidy` - Clean build artifacts while keeping tools
- `make clean` - Full clean including tools

**Running a Single Test:**
```bash
# Run a specific test file
make check TESTS="test/battle/ability/aerilate.c"
# Run tests matching a pattern
make check TESTS="test/battle/ability/*.c"
```

## Architecture Overview

This codebase is a comprehensive GBA game development framework, not just a simple ROM hack. It provides a complete toolkit for creating Pokemon games.

### Core Systems

**Configuration System (`/include/config/`):**
The project uses a modular configuration system where features can be toggled:
- `config/battle.h` - Battle mechanics and formulas
- `config/debug.h` - Debug features and cheats
- `config/item.h` - Item behavior settings
- `config/pokemon.h` - Pokemon availability and generation features
- `config/overworld.h` - Overworld mechanics
- `config/test.h` - Test-specific configurations

**Battle Engine (`/src/battle_*.c`):**
The battle system is highly modular with separate files for:
- Battle controllers (player, opponent, AI)
- Move effects and ability implementations
- Damage calculation and type effectiveness
- Battle scripts and animations
- AI decision making with multiple difficulty levels

**Data Organization:**
- `/src/` - Core C source code (battle engine, overworld, menus)
- `/data/` - Game data in various formats:
  - `/data/pokemon/` - Species data, base stats, learnsets
  - `/data/battle_scripts/` - Battle effect scripts
  - `/data/maps/` - Map layouts and scripts
  - `/data/graphics/` - Sprite and tileset references
- `/graphics/` - Raw image assets (PNG format)
- `/sound/` - Audio assets and music

### Custom Toolchain

The project includes 20+ custom tools in `/tools/` that process various game assets:
- `gbagfx` - Converts PNG images to GBA graphics format
- `mapjson` - Processes map data from JSON
- `jsonproc` - Template-based JSON processor for data tables
- `mid2agb` - Converts MIDI files to GBA audio format
- `scaninc` - Dependency scanner for incremental builds
- `mgba-rom-test-hydra` - Advanced ROM testing framework

### Build Pipeline

1. Tools are compiled first (`make tools`)
2. Graphics are converted from PNG to GBA format
3. Data files (JSON, text) are processed into C arrays
4. C/Assembly sources are compiled with arm-none-eabi-gcc
5. Everything is linked according to `ld_script_modern.ld`
6. Final ROM header is fixed with `gbafix`

### Testing Framework

The project has a sophisticated testing system using mGBA emulator:
- Tests run actual ROM code in an emulator
- Battle mechanics can be tested with precise scenarios
- AI behavior validation
- Move and ability testing with expected outcomes
- Located in `/test/` with subdirectories for different systems

### Memory Management

The GBA has strict memory limitations that the code carefully manages:
- EWRAM (256KB) - External work RAM for large data
- IWRAM (32KB) - Internal work RAM for performance-critical code
- ROM (up to 32MB) - Game code and assets
- Custom linker script manages section placement

## Development Practices

**Asset Processing:**
- All graphics must be PNG format in `/graphics/`
- Maps are edited as JSON in `/data/maps/`
- Pokemon data uses structured formats in `/data/pokemon/`
- Audio files go through MIDI conversion pipeline

**Code Style:**
- C89/C99 hybrid style
- Extensive use of macros for data definition
- Separate header files in `/include/` for declarations
- Modular file organization by system

**Debugging:**
- Debug menu accessible via `config/debug.h`
- mgba-qt provides debugging interface
- `make debug` builds include symbol information
- Test suite validates changes haven't broken mechanics

## OpenEmu Integration

**Updating ROM in OpenEmu:**
After building the ROM with `make`, use the provided script to update OpenEmu:
```bash
./update-openemu.sh
```

This copies the built ROM to OpenEmu's library location while preserving save states. The ROM is stored at:
- `~/Library/Application Support/OpenEmu/Game Library/roms/Game Boy Advance/pokeemerald.gba`

Save states are kept in:
- `~/Library/Application Support/OpenEmu/Save States/GameBoy Advance/pokeemerald/`