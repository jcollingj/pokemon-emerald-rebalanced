# Nidoqueen & Nidorina - Implementation Changelog

## Overview
Implemented the female Nidoran evolution line as **special attackers** focused on the **Toxic Spikes + Venoshock** combo. Both Pokemon now have Poison Point as their primary ability and learn special attack moves exclusively.

---

## NIDORINA Changes

### Stats (src/data/pokemon/species_info/gen_1_families.h:4392-4397)

| Stat | Before | After | Change |
|------|--------|-------|--------|
| HP | 70 | **85** | +15 |
| Attack | 62 | **50** | -12 |
| Defense | 67 | **70** | +3 |
| Speed | 56 | **60** | +4 |
| Sp. Attack | 55 | **75** | +20 |
| Sp. Defense | 55 | **75** | +20 |
| **BST** | **365** | **415** | **+50** |

**Rationale:** Shifted to special attacker with increased bulk to survive setting up Toxic Spikes.

### Abilities (src/data/pokemon/species_info/gen_1_families.h:4408)

**Before:**
- Ability 1: Poison Point
- Ability 2: Rivalry
- Hidden: Hustle

**After:**
- Ability 1: **Poison Point**
- Ability 2: **Poison Point**
- Hidden: **Poison Point**

**Rationale:** Poison Point synergizes perfectly with Toxic Spikes/Venoshock strategy - even contact attackers get poisoned, then Venoshock doubles in power.

### Learnset (src/data/pokemon/level_up_learnsets/gen_1.h:464-480)

**Complete Rebalance - Special Attack Focus:**

| Level | Move | Power | Type | Effect |
|-------|------|-------|------|--------|
| 1 | Tackle | 40 | Normal | Basic attack |
| 1 | Growl | - | Normal | Lower Attack |
| 6 | **Poison Sting** | 15 | Poison | 30% poison |
| 8 | **Acid** | 40 | Poison | 10% SpD drop |
| 10 | **Toxic Spikes** | - | Poison | **Hazard setter!** |
| 12 | **Toxic** | - | Poison | Guaranteed poison |
| 14 | **Venoshock** | 65/130 | Poison | **Doubles vs poisoned!** |
| 18 | Sludge | 65 | Poison | 30% poison |
| 22 | **Earth Power** | 90 | Ground | 10% SpD drop |
| 26 | **Sludge Bomb** | 90 | Poison | 30% poison |
| 30 | **Shadow Ball** | 80 | Ghost | 20% SpD drop |
| 34 | **Ice Beam** | 90 | Ice | 10% freeze |
| 38 | **Thunderbolt** | 90 | Electric | 10% para |
| 42 | **Flamethrower** | 90 | Fire | 10% burn |

**Key Moves Removed:**
- Scratch, Double Kick, Tail Whip, Bite, Fury Swipes (all physical)

**Key Moves Added:**
- Toxic Spikes (Lv 10) - Core setup move
- Venoshock (Lv 14) - Core damage move (doubles to 130 vs poisoned!)
- Earth Power, Ice Beam, Thunderbolt, Flamethrower (special coverage)

---

## NIDOQUEEN Changes

### Stats (src/data/pokemon/species_info/gen_1_families.h:4463-4468)

| Stat | Before | After | Change |
|------|--------|-------|--------|
| HP | 90 | **105** | +15 |
| Attack | 92 | **70** | -22 |
| Defense | 87 | **95** | +8 |
| Speed | 76 | **70** | -6 |
| Sp. Attack | 75 | **105** | +30 |
| Sp. Defense | 85 | **100** | +15 |
| **BST** | **505** | **545** | **+40** |

**Rationale:** Nidoqueen becomes a bulky special tank with high HP and excellent SpA for devastating Venoshock spam.

### Abilities (src/data/pokemon/species_info/gen_1_families.h:4487)

**Before:**
- Ability 1: Poison Point
- Ability 2: Rivalry
- Hidden: Sheer Force

**After:**
- Ability 1: **Poison Point**
- Ability 2: **Poison Point**
- Hidden: **Sheer Force** (unchanged)

**Rationale:**
- Poison Point synergizes with Toxic Spikes/Venoshock (contact moves poison, then Venoshock doubles)
- Sheer Force alternative for coverage-focused builds (1.3× power + Life Orb with no recoil!)

### Learnset (src/data/pokemon/level_up_learnsets/gen_1.h:482-498)

**Complete Rebalance - Special Attack Focus:**

| Level | Move | Power | Type | Effect |
|-------|------|-------|------|--------|
| 1 | **Earth Power** | 90 | Ground | **Evolution move! STAB** |
| 1 | **Sludge Bomb** | 90 | Poison | **Evolution move! STAB** |
| 1 | Tackle | 40 | Normal | Basic |
| 1 | Growl | - | Normal | Inherited |
| 1 | Poison Sting | 15 | Poison | Inherited |
| 1 | Acid | 40 | Poison | Inherited |
| 20 | **Surf** | 90 | Water | Coverage |
| 24 | **Ice Beam** | 90 | Ice | Coverage |
| 28 | **Thunderbolt** | 90 | Electric | Coverage |
| 32 | **Flamethrower** | 90 | Fire | Coverage |
| 36 | **Shadow Ball** | 80 | Ghost | Coverage |
| 40 | **Sludge Wave** | 95 | Poison | Upgraded STAB |
| 44 | **Focus Blast** | 120 | Fighting | Coverage nuke |
| 48 | **Fire Blast** | 110 | Fire | Coverage nuke |

**Key Moves Removed:**
- Scratch, Double Kick, Tail Whip, Body Slam (all physical)

**Key Moves Added:**
- Earth Power (evolution) - STAB Ground special
- Sludge Bomb (evolution) - STAB Poison special
- Surf, Ice Beam, Thunderbolt, Flamethrower, Shadow Ball, Sludge Wave, Focus Blast, Fire Blast (special coverage)

**Evolution Bonus:**
Upon using Moon Stone on Nidorina, Nidoqueen immediately learns:
1. **Earth Power** (90 power Ground special STAB)
2. **Sludge Bomb** (90 power Poison special STAB)

---

## Core Strategy

### Toxic Spikes + Venoshock Combo

**Turn 1-2:**
1. Nidorina/Nidoqueen uses **Toxic Spikes**
2. All enemies that switch in are **automatically poisoned**
3. Use **Venoshock** → 65 × 2 (poisoned) × 1.5 (STAB) = **195 effective power!**

**Every Turn After:**
- Opponent switches → new Pokemon poisoned by Toxic Spikes
- Spam Venoshock → 195 effective power
- If hit by contact move → Poison Point activates → more Venoshock targets!

### Example Battle Flow:
```
Turn 1: Toxic Spikes (opponent poisoned)
Turn 2: Venoshock → 195 effective power
Turn 3: Opponent switches → new Pokemon poisoned
Turn 4: Venoshock → 195 effective power
Turn 5: Opponent uses contact move → Poison Point activates
Turn 6: Venoshock → 195 effective power on freshly poisoned target
```

### Damage Calculations:

**Venoshock (vs Poisoned):**
- Base: 65 × 2 (poisoned) = 130 power
- With STAB: 130 × 1.5 = **195 effective power**
- With Nidoqueen's 105 SpA: Massive damage!
- **Better than most 120 power moves!**

**Sheer Force + Life Orb (Alternative Build):**
- Earth Power: 90 × 1.3 (Sheer) × 1.3 (Life Orb) × 1.5 (STAB) = **228 effective power, NO RECOIL!**
- Ice Beam: 90 × 1.3 × 1.3 = **152 effective power**
- Fire Blast: 110 × 1.3 × 1.3 = **186 effective power**

---

## Competitive Viability

### Nidorina (Pre-Evolution)
- **Role:** Toxic Spikes setter, Venoshock spammer
- **Stats:** 85/50/70/60/75/75 (BST: 415)
- **Ability:** Poison Point
- **Strengths:** Early Toxic Spikes (Lv 10), Venoshock (Lv 14), good bulk
- **Weaknesses:** Lower stats than evolution

### Nidoqueen (Final Evolution)
- **Role:** Bulky special tank, Venoshock nuker, coverage monster
- **Stats:** 105/70/95/70/105/100 (BST: 545)
- **Ability:** Poison Point / Sheer Force (hidden)
- **Strengths:**
  - Elite bulk (105 HP, 95 Def, 100 SpD)
  - High SpA (105) for devastating Venoshock/coverage
  - Toxic Spikes + Venoshock = 195 power STAB
  - Sheer Force + Life Orb = no recoil coverage spam
- **Weaknesses:** Water, Psychic, Ice, Ground types

---

## Files Modified

1. **src/data/pokemon/species_info/gen_1_families.h**
   - Line 4392-4397: Nidorina stats updated
   - Line 4408: Nidorina abilities updated (all Poison Point)
   - Line 4463-4468: Nidoqueen stats updated
   - Line 4487: Nidoqueen abilities updated (Poison Point primary)

2. **src/data/pokemon/level_up_learnsets/gen_1.h**
   - Line 464-480: Nidorina learnset completely rebalanced
   - Line 482-498: Nidoqueen learnset completely rebalanced

---

## Testing Checklist

- [ ] Nidorina stats display correctly in-game
- [ ] Nidorina learns Toxic Spikes at level 10
- [ ] Nidorina learns Venoshock at level 14
- [ ] Venoshock doubles in power vs poisoned targets
- [ ] Poison Point activates on contact moves
- [ ] Moon Stone evolution to Nidoqueen works
- [ ] Nidoqueen learns Earth Power + Sludge Bomb upon evolution
- [ ] Nidoqueen stats display correctly (105 HP, 105 SpA)
- [ ] Sheer Force + Life Orb combo works (no recoil)
- [ ] Coverage moves (Ice Beam, Thunderbolt, etc.) function correctly

---

## Build Recommendations

### Nidoqueen Build 1: Toxic Spikes Spammer
**Ability:** Poison Point
**Item:** Black Sludge / Leftovers
**Moves:**
- Toxic Spikes
- Venoshock (195 effective vs poisoned)
- Earth Power (Ground STAB)
- Ice Beam (coverage)

**Strategy:** Set Toxic Spikes, tank hits, spam Venoshock on poisoned targets.

### Nidoqueen Build 2: Sheer Force Wallbreaker
**Ability:** Sheer Force (hidden)
**Item:** Life Orb
**Moves:**
- Earth Power (228 effective, no recoil!)
- Sludge Wave (241 effective, no recoil!)
- Ice Beam (152 effective, no recoil!)
- Flamethrower/Thunderbolt (coverage)

**Strategy:** Hit hard with boosted coverage moves, no Life Orb recoil thanks to Sheer Force.

---

## Implementation Status

✅ **Nidorina Stats** - Updated (85/50/70/60/75/75)
✅ **Nidorina Abilities** - Updated (all Poison Point)
✅ **Nidorina Learnset** - Fully rebalanced (Toxic Spikes + Venoshock focus)
✅ **Nidoqueen Stats** - Updated (105/70/95/70/105/100)
✅ **Nidoqueen Abilities** - Updated (Poison Point + Sheer Force)
✅ **Nidoqueen Learnset** - Fully rebalanced (special attack coverage)

**Next Steps:**
- Test in-game to verify all changes work correctly
- Consider implementing Nidoking (male line) as physical attacker counterpart
- Balance check against other Poison/Ground types in the game
