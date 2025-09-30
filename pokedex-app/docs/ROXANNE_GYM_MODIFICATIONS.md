# Roxanne's Gym - Custom Modifications

This document tracks all custom balance changes and modifications for Roxanne's first gym battle, designed around a sandstorm weather team theme.

## Overview

Roxanne's gym is transformed into a **sandstorm-themed** challenge featuring fossil Pokémon and Rock-types that synergize with weather effects. The battle is designed to be challenging but fair for new players while showcasing unique mechanics.

---

## Pokémon Modifications

### 1. **Nosepass** (Roxanne's Ace)

**Type Change**: Rock → **Rock/Electric**

**Base Stat Changes**:
- HP: 30 → **50** (+20)
- Attack: 45 → **20** (-25)
- Special Attack: 45 → **90** (+45)
- Total BST: 365 → **415** (+50)

**Ability**: Sand Force (already has this as hidden ability)
- Boosts Rock/Ground/Steel move power by 30% in sandstorm

**Design Notes**:
- Nosepass becomes a special attacking tank that thrives in sandstorm
- Rock/Electric typing provides unique coverage
- With Sand Force active, Power Gem gets 1.3x boost (80 BP → 104 effective)
- Thunderbolt covers Water/Flying types that counter Rock

**Endgame Moveset**:
- Power Gem (STAB, boosted by Sand Force)
- Thunderbolt (Electric STAB)
- Earth Power (boosted by Sand Force, hits Electric types)
- Flash Cannon (boosted by Sand Force, coverage)

**Status**: ✅ Implemented in ROM

---

### 2. **Larvitar** (Sandstorm Setter - Lead Pokémon)

**Ability Change**:
- Hidden Ability: Sand Veil → **Sand Stream**

**Rationale**:
- Larvitar automatically summons sandstorm on entry as the lead
- This allows Roxanne's entire team to benefit from sandstorm synergies
- Thematically fitting as Larvitar's evolution (Tyranitar) has Sand Stream in later gens

**Status**: ✅ Implemented in ROM

---

### 3. **Geodude** (Evasion Tank)

**Learnset Changes**:
- Level 8: Defense Curl (moved from 11)
- Level 12: **Rollout** (NEW)
- Level 25: **Magnitude** (NEW)
- Level 36: **Rock Polish** (NEW)

**Ability**: Sand Veil (standard)
- **Modified**: 40% evasion boost in sandstorm (up from 20%)

**Roxanne's Geodude Item**: Wide Lens
- Ensures Rollout has 100% accuracy despite opponent evasion

**Status**:
- Learnset: ✅ Implemented
- Sand Veil modification: ⏳ Pending implementation
- Item assignment: ⏳ Pending implementation

---

## Move Modifications

### 1. **Rollout** - Custom Enhancement

**New Effect**: Boosts user's evasion by 1 stage on each successful hit

**Rationale**:
- Makes Rollout a snowball move that becomes harder to stop
- Synergizes with Geodude's Sand Veil ability
- Turn 1: Normal hit chance
- Turn 2: +1 evasion (33% to miss)
- Turn 3: +2 evasion (50% to miss)
- Turn 4: +3 evasion (60% to miss)
- Turn 5: +4 evasion (66.7% to miss)

**Balance**:
- Can still be stopped by status moves, type-resists, or guaranteed hits
- Player can counter with Wide Lens, Lock-On, or special attacking

**Status**: ⏳ Pending ROM implementation

**File Location**: `src/battle_script_commands.c` or `src/data/battle_moves.h`

---

### 2. **Defense Curl** - Custom Enhancement

**New Effect**: Boosts Defense +1 and Speed +1 (instead of just Defense +2)

**Rationale**:
- Makes Defense Curl a viable setup move beyond Rollout combo
- Allows Geodude to boost speed while preparing for Rollout
- Doesn't stack Defense as high, keeping it balanced

**Status**: ⏳ Pending ROM implementation

**File Location**: `src/battle_script_commands.c` or `src/data/battle_moves.h`

---

## Ability Modifications

### 1. **Sand Veil** - Evasion Buff

**Current Effect**: +20% evasion in sandstorm (accuracy becomes 80%)

**Modified Effect**: +40% evasion in sandstorm (accuracy becomes 60%)

**Rationale**:
- Makes sandstorm evasion a legitimate strategy
- Combos with Rollout's evasion boosts for extreme dodging
- Fits the "sandstorm makes it hard to see" flavor
- First gym players won't have accuracy-boosting items/moves

**Status**: ⏳ Pending ROM implementation

**File Location**: `src/battle_util.c` (accuracy calculation section)

---

## Roxanne's Team Composition

### Final Team (6 Pokémon, Levels 10-15):

1. **Larvitar** @ Smooth Rock (Lv. 10)
   - Ability: Sand Stream
   - Role: Auto-sandstorm lead

2. **Geodude** @ Wide Lens (Lv. 11)
   - Ability: Sand Veil (40% evasion)
   - Moveset: Defense Curl / Rollout / Rock Throw / Tackle
   - Role: Evasion tank

3. **Omanyte** (Gen 1 fossil) @ Oran Berry (Lv. 12)
   - Ability: Shell Armor / Swift Swim
   - Role: Water-type tank

4. **Lileep** (Gen 3 fossil) @ Sitrus Berry (Lv. 13)
   - Ability: Storm Drain
   - Role: Special attacker, Water immunity

5. **Anorith** (Gen 3 fossil) @ Focus Sash (Lv. 13)
   - Ability: Battle Armor
   - Role: Fast physical attacker

6. **Nosepass** (Ace) @ Chesto Berry (Lv. 15)
   - Ability: Sand Force
   - Moveset: Power Gem / Thunderbolt / Thunder Wave / Rest
   - Role: Special attacking ace with Sand Force boost

---

## Implementation Checklist

### Completed ✅
- [x] Nosepass base stat changes
- [x] Nosepass type change to Rock/Electric
- [x] Larvitar Sand Stream ability
- [x] Geodude learnset updates
- [x] Created modification tracking document

### Pending Implementation ⏳
- [ ] Sand Veil 40% evasion modification
- [ ] Rollout evasion boost effect
- [ ] Defense Curl speed boost effect
- [ ] Roxanne trainer battle team setup
- [ ] Item assignments (Wide Lens, Smooth Rock, etc.)
- [ ] Anorith enhancement research

### Needs Design 📝
- [ ] Aerodactyl inclusion/modifications (if used)
- [ ] Anorith ability/move enhancements

---

## Technical Notes

### Code Files to Modify:

1. **Ability Effects** (`src/battle_util.c`):
   - Search for `ABILITY_SAND_VEIL`
   - Modify accuracy calculation from 80% to 60%

2. **Move Effects** (`src/battle_script_commands.c` or `src/data/battle_moves.h`):
   - Rollout: Add `SET_STAT_CHANGE(STAT_EVASION, 1, FALSE)` after damage
   - Defense Curl: Modify stat change to affect both Defense and Speed

3. **Trainer Data** (`src/data/trainers.party`):
   - Update TRAINER_ROXANNE_1 with new team

---

## Design Philosophy

**Goal**: Create a memorable first gym that:
1. Teaches weather mechanics early
2. Introduces evasion strategies
3. Rewards strategic play over pure level grinding
4. Showcases unique type combinations (Rock/Electric Nosepass)
5. Uses fossil Pokémon thematically

**Balance**: Overpowered for a first gym, but counterable with:
- Type advantages (Water, Grass, Fighting, Ground)
- Status moves (Thunder Wave, Will-O-Wisp)
- Accuracy-boosting items/moves
- Special Defense walls

---

*Last Updated*: 2025-09-29
*Status*: Partial implementation - Pokémon stats/types done, move/ability mechanics pending