# Pokemon Rebalance Progress Tracker

This document tracks the progress of Pokemon rebalancing efforts for Pokemon Emerald Rebalanced.

## Status Legend

- ✅ **Completed** - Design doc finished AND implemented in code
- 📝 **Design Complete** - Design doc finished, needs code implementation
- 🚧 **In Progress** - Currently being designed/implemented
- 📋 **To Do** - Needs design and implementation

---

## Completed Pokemon ✅

These Pokemon have both design documentation and code implementation complete:

### Early Game Pokemon
- [ ] Beedrill (design doc complete, verify code)
- [ ] Poliwag (design doc complete, verify code)
- [ ] Surskit (design doc complete, verify code)
- [ ] Poochyena (design doc complete, verify code)
- [ ] Wurmple (design doc complete, verify code)
- [ ] Lotad (design doc complete, verify code)
- [ ] Taillow (design doc complete, verify code)

### Starter Pokemon
- [x] **Squirtle Line** - Mega Launcher pulse-move specialist (COMPLETED)
  - Abilities: All forms use Mega Launcher (ability 1)
  - Stats: Squirtle (60/48/65/65/70/43), Wartortle (75/63/85/85/90/58), Blastoise (92/83/105/110/112/78)
  - Learnsets: Full pulse move coverage (Water Pulse, Aura Sphere, Dragon Pulse, Dark Pulse, Origin Pulse, Hydro Cannon)
  - Game mechanics: Origin Pulse and Hydro Cannon confirmed as pulse moves
  - Build tested: ✓ Successful (Oct 29, 2025)
- [ ] Treecko (design doc complete, verify code)
- [ ] Torchic (design doc complete, verify code)
- [ ] Mudkip (design doc complete, verify code)

### Special Cases
- [ ] Pikachu (design doc complete, verify code)
- [ ] Nidoran Line (design doc complete, verify code)
- [ ] Toxapex (design doc complete, verify code)

---

## Design Complete 📝

These Pokemon have finished design docs but need code implementation verified:

*(No Pokemon currently in this section)*

---

## In Progress 🚧

These Pokemon are currently being worked on:

*(No Pokemon currently in this section)*

---

## To Do 📋

These Pokemon need design documentation and implementation:

### Water-Type Pokemon (Priority: Early Game Encounters)
- [ ] **Tentacool** - Water/Poison pivot with Rain Dish ability
- [ ] **Chinchou** - Water/Electric defensive pivot
- [ ] **Corsola** - Bulky Water/Rock wall
- [ ] **Relicanth** - Ancient Water/Rock tank

### Notes
- **Tentacool Priority**: Needed for early Old Rod encounters, rain team synergy
- **Water Types Focus**: Expanding early-game water diversity for first gym counter-strategies

---

## Design Philosophy Checklist

When designing a Pokemon rebalance, ensure it addresses:

- [ ] **Strategic niche** - What unique role does this Pokemon fill?
- [ ] **Ability synergy** - Does the ability create interesting gameplay?
- [ ] **Early power spike** - Does it learn 2+ good moves by level 14?
- [ ] **Type diversity** - Does it add type coverage options?
- [ ] **Evolution path** - Does the evolution maintain or evolve the strategy?
- [ ] **Team synergy** - How does it fit with rain/poison/sandstorm strategies?
- [ ] **Viability curve** - Can it remain competitive throughout the game?

---

## Quick Reference: Design Doc Template Location

New Pokemon design docs should follow the format in existing files:
- `/docs/game-design/{pokemon-name}.md`
- See `beedrill.md`, `poliwag.md`, or `surskit.md` for reference template

---

## Current Focus Areas

1. **Early Water Pokemon** - Expanding Old Rod encounters for Route 104/early routes
2. **Rain Team Synergy** - Building out rain-based strategies (Swift Swim, Rain Dish)
3. **First Gym Counters** - Ensuring viable water/poison options for sandstorm gym
