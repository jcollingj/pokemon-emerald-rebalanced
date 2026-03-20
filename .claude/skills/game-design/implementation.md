# Implementation Workflow

When designing a chunk, follow this order:

## Step 1: Plan the Chunk
- Define the area boundaries and level range
- List all Pokemon that will be available
- Identify the gym leader's theme and team

## Step 2: Design Pokemon Builds
For each new Pokemon in the chunk, create a design doc at `docs/game-design/{pokemon-name}.md` with:
- Design philosophy (1-2 sentences on the build identity)
- Stat changes table (vanilla vs rebalanced)
- Ability changes with rationale
- Full learnset with level progression
- Core strategy explanation
- Team synergy notes
- Matchup analysis
- Implementation notes (exact file locations and code changes)

Use existing design docs as templates: `beedrill.md`, `squirtle.md`

## Step 3: Design Encounters & Trainers
- Set wild encounter tables for each route
- Design trainer teams using available Pokemon
- Place items and tools
- Plan Boss Pokemon encounters (see [Boss Pokemon Battles](boss-pokemon.md))

## Step 4: Implement in Code
Key files for implementation:
- **Stats & Abilities:** `src/data/pokemon/species_info/gen_1_families.h` (and other gen files)
- **Learnsets:** `src/data/pokemon/level_up_learnsets/gen_1.h` (and other gen files)
- **Move data:** `src/data/moves_info.h`
- **Wild encounters:** `src/data/wild_encounters.json`
- **Trainer teams:** `src/data/trainer_parties.h`
- **Boss Pokemon scripts:** Map script files in `data/maps/{MapName}/scripts.inc`
- **Boss flags:** `include/constants/flags.h`

## Step 5: Build & Test
```bash
make -j$(nproc)        # Build the ROM
./update-openemu.sh    # Deploy to OpenEmu for testing
```

## Progress Tracking

Track completion in `docs/game-design/progress-tracker.md`:
- Design doc status per Pokemon
- Code implementation status
- Build verification status
- Boss Pokemon encounter status
