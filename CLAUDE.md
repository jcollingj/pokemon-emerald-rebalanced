# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## On Session Start

**Always check GitHub issues first.** At the start of every session, run:
```bash
gh issue list --repo jcollingj/pokemon-emerald-rebalanced --label pokedesign --state open
```
Find issues that need work — design, implementation, or review. The goal is to close all open issues. Prioritize issues that are ready to implement over ones that still need design.

## Segment Workflow

We work segment by segment through the game. Each segment follows a **design-first, then implement** approach:

1. **Delineate the segment** — Define routes, towns, caves. Create a segment design doc.
2. **Design the gym leader** — Full 6-Pokemon team with strategy, items, abilities.
3. **Design all Pokemon** — Every encounter, fishing, surfing, and trainer Pokemon gets a design doc.
4. **Design held items** — What items are findable in this segment? TMs, competitive items, etc.
5. **Design all trainers** — Every trainer gets a 3-6 Pokemon team from the local area.
6. **Review & approve** — Jacob reviews all designs. Iterate on feedback.
7. **Implement** — Only after ALL designs are approved. Batch implement via @claude.

**During design phase: markdown output only. No code changes.**
**During implementation phase: code changes, must build successfully.**

## Implementation Principles

### MECE Issues (Mutually Exclusive, Collectively Exhaustive)
Implementation issues must be non-overlapping (no two issues touch the same file) and collectively cover everything. This allows parallel execution without merge conflicts.

### Atomic Commits
**One Pokemon evolution line per issue. One thing per commit.**

- Each issue implements exactly **1 evolution line** (e.g., "implement Zubat/Golbat/Crobat")
- Stats, abilities, AND learnset for that line — all in one issue since they're one logical unit
- **Run in parallel** when they touch different files
- **Run sequentially** when they touch the same file
- Trainer issues: **1 trainer per issue** or group by route if they're in the same file
- Items/encounters: **1 issue per file changed**

### Example good breakdown:
- `implement: Zubat/Golbat/Crobat stats + abilities + learnset` (1 line, ~3 min)
- `implement: Sableye stats + abilities + learnset` (1 Pokemon, ~2 min)
- `implement: Trainer Takao (Dewford Gym)` (1 trainer, ~2 min)

### Example bad breakdown:
- `implement: All Gen 2 stats` (11 Pokemon, too many)
- `implement: Zubat stats` then separate `implement: Zubat learnset` (split one logical unit across issues)

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

## Development Philosophy

**Test-Driven Development (TDD):**
- Write failing tests first, then implement to make them pass
- Prioritize testing logic upfront before writing implementation code
- Tests should verify behavior, not implementation details

**Tooling & Scripts:**
- Use **bun** for all scripting and tooling — not Python
- Write TypeScript with proper types (interfaces, type aliases, exported types)
- Tests use `bun:test` (built-in test runner)
- One-off inline scripts: `bun -e "import { ... } from './path'; ..."`
- Always import and use types from shared modules — don't duplicate type definitions
- Run `bun test <file>` to verify before committing

**Session Flushing:**
At the end of a work session (or when asked to "flush"), persist all active threads so future conversations can pick up where we left off:
1. Update `memory/project_design_progress.md` with current state — what's done, what's in progress, what's next
2. Update any stale memory files that no longer reflect reality
3. Ensure all design docs and cards are written to disk (not just discussed)
4. Run `bun tools/pokedex/pokedex.ts stats` to capture the current count
5. Note any open questions or decisions that need to be made next session

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