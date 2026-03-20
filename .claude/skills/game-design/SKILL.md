---
name: game-design
description: Design and implement Pokemon rebalancing for Pokemon Emerald Rebalanced. Use when designing Pokemon builds, planning route encounters, creating trainer teams, adjusting learnsets/abilities/stats, or planning game progression chunks.
---

# Pokemon Emerald Rebalanced - Game Design System

This skill orchestrates the full game design workflow: designing Pokemon builds, planning routes and encounters, creating trainer teams, and implementing changes in code.

## Core Design Philosophy

Every Pokemon should be competitively viable with a clear strategic identity. The game should be hard through strategy, not grinding. Players should constantly discover cool new tools.

### The Three Pillars

1. **Every Pokemon Has a Build** - A clear ability + moveset + stat synergy that makes it uniquely effective
2. **Strategic Difficulty** - Level caps, competitive trainer teams, no grinding required
3. **Abundance Over Scarcity** - Competitive items early, lots of EXP, many Pokemon options

## Pokemon Design Framework

### What Makes a Good Build

Every Pokemon needs:
- **A defining ability** that shapes its entire strategy (e.g., Beedrill + Merciless, Blastoise + Mega Launcher)
- **Moveset synergy** with that ability (e.g., poison moves for Merciless, pulse moves for Mega Launcher)
- **A competitive niche** - what does this Pokemon do that others don't?
- **Team synergy** - how does it complement other Pokemon? (weather, pivoting, hazards, status)
- **Item synergy** - what held item makes this build shine? (Scope Lens for crit builds, Choice items for power, etc.)

### Stat Adjustment Guidelines

- Buff weak Pokemon to competitive levels, don't nerf strong ones
- Stats should reinforce the build identity (fast sweepers get speed, tanks get bulk)
- BST increases are fine - this is a rebalance, not vanilla
- Early-game Pokemon should remain viable throughout

### Learnset Schedule

Standard level-up progression for learning moves:

| Level Range | What They Learn | Purpose |
|-------------|----------------|---------|
| 1-7 | Basic STAB, utility | Starting toolkit |
| 8-14 | **2-3 strong competitive moves** | Early power spike (CRITICAL) |
| 16 | First evolution typically | Power jump |
| 21 | Mid-tier move | Growing strength |
| 25 | Strong coverage or setup move | Mid-game relevance |
| 30+ | Signature/powerful moves | Late-game identity |
| 36+ | Final evolution moves | Endgame power |

**Key Rule:** By level 14, every Pokemon MUST have at least 2 moves that play into its build identity. This is what makes them immediately fun to use.

## Route & Progression Design

### Design in Chunks

Work is organized into **chunks** - a segment of the game from one milestone to the next:

```
Chunk = [Previous Milestone] → [Routes/Areas] → [Next Milestone]
Example: Game Start → Route 101-104, Petalburg Woods → First Gym (Roxanne)
```

### What a Chunk Includes

For each chunk, design:

1. **Wild Encounters** - What Pokemon appear, at what levels, and where
2. **Pokemon Builds** - Full design docs for every new Pokemon in this chunk
3. **Trainer Teams** - Every trainer's team, movesets, and levels
4. **Available Items** - Competitive items found in this chunk
5. **Level Cap** - Maximum player level for this chunk
6. **Key Tools** - Rods, TMs, items that unlock new strategies
7. **Gym Leader** - Full competitive 6-Pokemon team with strategy

### Encounter Design Rules

- Pokemon in an area should offer diverse types and strategies
- Old Rod available before first gym (water types for gym counter-play)
- Trainers use Pokemon from their surrounding area (with rare exceptions)
- Players should have multiple viable counter-strategies for each gym

### Progression Principles

- Make competitive items available as early as possible
- Players should constantly find exciting new Pokemon and tools
- Every route should introduce at least one Pokemon with a cool new build
- EXP should be abundant - no grinding needed
- Level caps enforce strategy over brute force

## Trainer Design

### Route Trainers
- 3-6 Pokemon per trainer, even on early routes
- Competitive movesets that use ability synergies
- Pokemon drawn from surrounding area encounters
- Should feel like mini-puzzles to solve

### Gym Leaders
- Full 6 Pokemon teams
- Weather/terrain/team strategies
- Abilities that synergize with their team theme
- May have access to moves/items the player doesn't yet
- Multiple viable counter-strategies must exist

### Example Gym Design (First Gym - Roxanne)
- **Theme:** Sandstorm
- **Lead:** Larvitar with Sand Stream
- **Strategy:** 6 Pokemon all benefiting from sandstorm
- **Player Counters:** Rain teams (Swift Swim + Rain Dance), Poison stall, Water STAB, Fighting coverage

## Implementation Workflow

When designing a chunk, follow this order:

### Step 1: Plan the Chunk
- Define the area boundaries and level range
- List all Pokemon that will be available
- Identify the gym leader's theme and team

### Step 2: Design Pokemon Builds
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

### Step 3: Design Encounters & Trainers
- Set wild encounter tables for each route
- Design trainer teams using available Pokemon
- Place items and tools

### Step 4: Implement in Code
Key files for implementation:
- **Stats & Abilities:** `src/data/pokemon/species_info/gen_1_families.h` (and other gen files)
- **Learnsets:** `src/data/pokemon/level_up_learnsets/gen_1.h` (and other gen files)
- **Move data:** `src/data/moves_info.h`
- **Wild encounters:** `src/data/wild_encounters.json`
- **Trainer teams:** `src/data/trainer_parties.h`

### Step 5: Build & Test
```bash
make -j$(nproc)        # Build the ROM
./update-openemu.sh    # Deploy to OpenEmu for testing
```

## Progress Tracking

Track completion in `docs/game-design/progress-tracker.md`:
- Design doc status per Pokemon
- Code implementation status
- Build verification status

## Design Doc Quick Reference

### Existing Build Archetypes (for inspiration)
- **Beedrill** - Merciless crit sweeper (poison → guaranteed crits → multi-hit devastation)
- **Blastoise** - Mega Launcher pulse specialist (pulse moves get 1.5x, perfect type coverage)
- **Poliwag** - Swift Swim rain sweeper
- **Surskit** - Flip Turn rain pivot
- **Tentacruel** - Whirlpool trapper (design target)
- **Zigzagoon** - Belly Drum setup sweeper

### Build Identity Templates
Think of each Pokemon as having a "class":

| Class | Ability Focus | Example |
|-------|--------------|---------|
| Crit Sweeper | Merciless/Sniper/Super Luck | Beedrill |
| Pulse Mage | Mega Launcher | Blastoise |
| Rain Sweeper | Swift Swim | Poliwag |
| Pivot | Flip Turn/U-Turn + utility | Surskit |
| Trapper | Arena Trap/Shadow Tag/Whirlpool | Tentacruel |
| Setup Sweeper | Speed Boost/Moxie + setup moves | Zigzagoon |
| Wall/Stall | Regenerator/Poison Heal | Toxapex |
| Weather Setter | Sand Stream/Drizzle | Larvitar |
| Support | Screens/Hazards/Healing | Various |

### Competitive Items to Distribute Early
- Scope Lens (crit builds)
- Choice Band/Specs/Scarf
- Life Orb
- Leftovers
- Focus Sash
- Loaded Dice (multi-hit builds)
- Eviolite (pre-evolution builds)
- Weather rocks (rain/sand extenders)
