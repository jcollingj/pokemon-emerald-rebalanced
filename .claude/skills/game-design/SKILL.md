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

## Design Modules

Each area of game design has its own detailed reference:

- **[Pokemon Design Framework](pokemon-design.md)** - Build identity, stat guidelines, learnset schedule, build archetypes
- **[Routes & Progression](routes-and-progression.md)** - Chunk-based design, encounter rules, progression principles, item distribution
- **[Boss Pokemon Battles](boss-pokemon.md)** - Overleveled scripted encounters that reward a weaker version of the defeated Pokemon
- **[Trainer Design](trainer-design.md)** - Route trainers, gym leaders, team composition rules
- **[Implementation Workflow](implementation.md)** - Step-by-step process from design to code, key file locations, testing

## Quick Start

1. Pick a chunk to work on (see [Routes & Progression](routes-and-progression.md))
2. Design Pokemon builds (see [Pokemon Design](pokemon-design.md))
3. Plan encounters, trainers, and boss battles (see [Routes](routes-and-progression.md), [Trainers](trainer-design.md), [Bosses](boss-pokemon.md))
4. Implement and test (see [Implementation](implementation.md))

## Design Doc Location

All Pokemon design docs live at `docs/game-design/{pokemon-name}.md`. Use existing docs like `beedrill.md` or `squirtle.md` as templates.
