# Nidoran Line - Poison Heal / Toxic Boost Implementation Changelog

## Overview
Completely redesigned both Nidoran evolution lines with a **poison-based asymmetric split**:
- **Female Line (Nidorina/Nidoqueen):** Special Defense tanks with **Poison Heal** (heals when poisoned)
- **Male Line (Nidorino/Nidoking):** Physical attackers with **Toxic Boost** (1.5× Attack when poisoned)

Both lines are designed around using **Toxic Orb** to self-poison for massive benefits.

---

## FEMALE LINE: Nidoqueen & Nidorina

### Philosophy
Nidoqueen is a **special defense wall** that thrives when poisoned. With Poison Heal, she heals 1/8 HP per turn instead of taking damage, making her nearly unkillable.

### Nidorina Changes

**Stats:** `85/50/70/60/75/75` (BST: 415) - **NO CHANGES** from previous

**Abilities (src/data/pokemon/species_info/gen_1_families.h:4408):**
- Ability 1: Poison Point (unchanged)
- Ability 2: Poison Point (unchanged)
- Hidden: **Poison Heal** ← CHANGED from Poison Point

**Learnset:** Kept special attack focus from previous implementation (Toxic Spikes, Venoshock, coverage moves)

---

### Nidoqueen Changes

**Stats (src/data/pokemon/species_info/gen_1_families.h:4463-4468):**

| Stat | Previous | New | Change |
|------|----------|-----|--------|
| HP | 105 | **105** | No change |
| Attack | 70 | **70** | No change |
| Defense | 95 | **95** | No change |
| Speed | 70 | **70** | No change |
| Sp. Attack | 105 | **85** | -20 |
| Sp. Defense | 100 | **120** | +20 |
| **BST** | **545** | **545** | **No change** |

**Rationale:**
- Shifted 20 points from SpA to SpD
- Now a **special defense specialist** with 120 SpD
- Still has 85 SpA for decent offensive presence
- 105/95/120 bulk makes her an elite tank

**Abilities (src/data/pokemon/species_info/gen_1_families.h:4487):**
- Ability 1: **Poison Heal** ← CHANGED from Poison Point (CORE ABILITY!)
- Ability 2: **Poison Point** ← CHANGED from Poison Point (same)
- Hidden: Sheer Force (unchanged)

**Learnset (src/data/pokemon/level_up_learnsets/gen_1.h:482-497):**

| Level | Move | Type | Power | Effect |
|-------|------|------|-------|--------|
| 1 | **Earth Power** | Ground | 90 | Evolution move, STAB |
| 1 | **Sludge Bomb** | Poison | 90 | Evolution move, STAB |
| 1 | Toxic | Poison | - | Inherited |
| 1 | Venoshock | Poison | 65 | Inherited |
| 16 | **Protect** | Normal | - | Stall for healing |
| 20 | **Recover** | Normal | - | 50% HP instant heal |
| 24 | Ice Beam | Ice | 90 | Coverage |
| 28 | **Stealth Rock** | Rock | - | Hazard setting |
| 32 | Sludge Wave | Poison | 95 | Upgraded STAB |
| 36 | Earth Power | Ground | 90 | STAB |
| 40 | **Rest** | Psychic | - | Full heal |
| 44 | Thunderbolt | Electric | 90 | Coverage |
| 48 | Toxic | Poison | - | Poison opponents |

**Key Additions:**
- **Protect** (Lv 16) - stall turns for Poison Heal
- **Recover** (Lv 20) - instant 50% HP heal
- **Stealth Rock** (Lv 28) - hazard setting
- **Rest** (Lv 40) - full heal option

---

### Nidoqueen Core Strategy

**Setup:**
1. Hold **Toxic Orb**
2. Turn 1: Toxic Orb activates → Nidoqueen is poisoned
3. **Poison Heal triggers:** Instead of taking damage, heal **~13 HP per turn**!

**Every Turn After:**
- Heal 13 HP/turn passively (1/8 of 105 HP)
- Tank hits with 105/95/120 bulk
- Fire back with Earth Power (135 power STAB), Sludge Wave (142.5 power STAB)
- Use **Protect** to stall extra healing turns
- Use **Recover** for instant 52 HP heal
- Use **Rest** for full 105 HP heal

**Healing Calculations:**
- Poison Heal: 1/8 × 105 HP = **~13 HP/turn**
- Recover: 50% × 105 HP = **52 HP instant**
- Rest: 100% × 105 HP = **105 HP full heal**
- **Total sustain:** Nearly unkillable

**Damage Output:**
- Earth Power: 90 × 1.5 (STAB) = 135 power
- Sludge Wave: 95 × 1.5 (STAB) = 142.5 power
- With 85 SpA: Still hits decently hard

---

## MALE LINE: Nidoking & Nidorino

### Philosophy
Nidoking is a **physical wallbreaker** that gets stronger when poisoned. With Toxic Boost, his Attack jumps from 120 to **180** (50% boost!).

### Nidoking Changes

**Stats (src/data/pokemon/species_info/gen_1_families.h:4686-4691):**

| Stat | Previous | New | Change |
|------|----------|-----|--------|
| HP | 81 | **90** | +9 |
| Attack | 102 | **120** | +18 |
| Defense | 77 | **85** | +8 |
| Speed | 85 | **95** | +10 |
| Sp. Attack | 85 | **65** | -20 |
| Sp. Defense | 75 | **90** | +15 |
| **BST** | **505** | **545** | **+40** |

**With Toxic Boost Active:**
- Effective Attack: **180** (120 × 1.5)
- Effective BST: **605**

**Rationale:**
- Now a **physical attacker** with 120 base Attack
- 95 Speed outspeeds most mid-game threats
- When poisoned: 120 Atk → **180 Atk** = legendary-tier damage

**Abilities (src/data/pokemon/species_info/gen_1_families.h:4710):**
- Ability 1: **Toxic Boost** ← CHANGED from Poison Point (CORE ABILITY!)
- Ability 2: **Rivalry** (unchanged)
- Hidden: **Sheer Force** (unchanged)

**Learnset (src/data/pokemon/level_up_learnsets/gen_1.h:524-538):**

| Level | Move | Type | Power | Category | Effect |
|-------|------|------|-------|----------|--------|
| 1 | **Earthquake** | Ground | 100 | Physical | Evolution move, STAB |
| 1 | **Gunk Shot** | Poison | 120 | Physical | Evolution move, STAB |
| 1 | Poison Jab | Poison | 80 | Physical | Inherited |
| 1 | Double Kick | Fighting | 30×2 | Physical | Inherited |
| 20 | **Fire Punch** | Fire | 75 | Physical | Coverage |
| 24 | **Ice Punch** | Ice | 75 | Physical | Coverage |
| 28 | **Thunder Punch** | Electric | 75 | Physical | Coverage |
| 32 | **Megahorn** | Bug | 120 | Physical | Coverage nuke |
| 36 | **Stone Edge** | Rock | 100 | Physical | Coverage, high crit |
| 40 | **Superpower** | Fighting | 120 | Physical | Coverage nuke |
| 44 | **Aqua Tail** | Water | 90 | Physical | Coverage |
| 48 | **Dragon Tail** | Dragon | 60 | Physical | Forces switch |

**Key Additions:**
- **Earthquake & Gunk Shot** upon evolution - STAB nukes
- **Fire/Ice/Thunder Punch** - elemental coverage
- **Megahorn** - 120 power Bug coverage
- **Stone Edge** - 100 power Rock coverage
- **Superpower** - 120 power Fighting coverage
- **Aqua Tail** - Water coverage
- **Dragon Tail** - pivot move

---

### Nidoking Core Strategy

**Setup:**
1. Hold **Toxic Orb**
2. Turn 1: Toxic Orb activates → Nidoking is poisoned
3. **Toxic Boost triggers:** 120 Attack → **180 Attack** (+50%!)

**Turn 2+ Sweep:**
- Hit with **180 effective Attack**
- Gunk Shot: 120 power × 1.5 (STAB) = 180 power
- Earthquake: 100 power × 1.5 (STAB) = 150 power
- Coverage: Megahorn (120), Superpower (120), Stone Edge (100)
- Elemental punches: Fire/Ice/Thunder (75 each)
- 95 Speed outspeeds most threats

**Damage Calculations (with Toxic Boost):**
- **Effective Attack: 180** (120 × 1.5)
- Gunk Shot: 180 power STAB = **DEVASTATING**
- Earthquake: 150 power STAB = **MASSIVE**
- Megahorn: 120 power = **INSANE**
- Superpower: 120 power = **CRUSHING**

**Trade-off:**
- Loses 1/8 HP per turn (~12 HP with 90 HP)
- **Worth it:** 50% Attack boost is MASSIVE
- Can finish battles quickly with 180 Attack

---

## Ability Mechanics

### Poison Heal (Nidoqueen)
**Effect:** Heals 1/8 max HP per turn when poisoned (instead of taking damage)
**Item:** Toxic Orb (self-poison after 1 turn)
**Benefit:** +13 HP/turn with 105 HP
**Strategy:** Become unkillable tank with permanent healing

### Toxic Boost (Nidoking)
**Effect:** Attack is increased by 50% when poisoned
**Item:** Toxic Orb (self-poison after 1 turn)
**Benefit:** 120 Atk → 180 Atk (+60 points!)
**Trade-off:** -12 HP/turn, but worth it for massive damage
**Strategy:** Get poisoned, sweep with legendary-tier Attack

---

## Gender Split Comparison

| Aspect | Nidoqueen (Female) | Nidoking (Male) |
|--------|-------------------|-----------------|
| **Role** | Special Defense Tank | Physical Wallbreaker |
| **Core Ability** | Poison Heal (heal 13 HP/turn) | Toxic Boost (180 Atk) |
| **HP** | 105 | 90 |
| **Attack** | 70 | 120 → **180** |
| **Defense** | 95 | 85 |
| **Speed** | 70 (slow tank) | 95 (fast sweeper) |
| **Sp. Attack** | 85 | 65 |
| **Sp. Defense** | **120** | 90 |
| **Item** | Toxic Orb | Toxic Orb |
| **Sustain** | +13 HP/turn | -12 HP/turn |
| **Coverage** | Special (Earth/Ice/Electric) | Physical (Punches/Megahorn) |
| **Playstyle** | Tank, heal, outlast | Get poisoned, sweep hard |

---

## Files Modified

1. **src/data/pokemon/species_info/gen_1_families.h**
   - Line 4408: Nidorina abilities (hidden: Poison Heal)
   - Line 4463-4468: Nidoqueen stats (85 SpA, 120 SpD)
   - Line 4487: Nidoqueen abilities (primary: Poison Heal)
   - Line 4686-4691: Nidoking stats (90/120/85/95/65/90)
   - Line 4710: Nidoking abilities (primary: Toxic Boost)

2. **src/data/pokemon/level_up_learnsets/gen_1.h**
   - Line 482-497: Nidoqueen learnset (defensive moves added)
   - Line 524-538: Nidoking learnset (physical moves + punches)

---

## Sample Sets

### Nidoqueen Build: Poison Heal Tank
**Ability:** Poison Heal
**Item:** Toxic Orb
**EVs:** 252 HP / 252 SpD / 4 Def
**Nature:** Calm (+SpD, -Atk)
**Moves:**
- Stealth Rock (hazards)
- Earth Power (STAB)
- Ice Beam (coverage)
- Recover (healing)

**Strategy:**
1. Toxic Orb poisons you → heal 13 HP/turn
2. Set Stealth Rock
3. Tank hits with 105/95/120 bulk
4. Fire back with Earth Power/Ice Beam
5. Recover when low
6. Never die

### Nidoking Build: Toxic Boost Sweeper
**Ability:** Toxic Boost
**Item:** Toxic Orb
**EVs:** 252 Atk / 4 Def / 252 Spe
**Nature:** Jolly (+Spe, -SpA)
**Moves:**
- Gunk Shot (Poison STAB nuke)
- Earthquake (Ground STAB)
- Megahorn / Superpower (coverage)
- Ice Punch / Stone Edge (coverage)

**Strategy:**
1. Toxic Orb poisons you → 180 Attack!
2. Sweep with Gunk Shot (180 power STAB)
3. Earthquake for Ground STAB
4. Coverage for everything else
5. 95 Speed outspeeds most threats
6. Win fast before poison damage adds up

---

## Testing Checklist

- [ ] Nidoqueen Poison Heal activates correctly (heals instead of damages)
- [ ] Nidoqueen heals ~13 HP per turn when poisoned
- [ ] Nidoqueen learns Recover, Protect, Stealth Rock, Rest
- [ ] Nidoqueen stats display correctly (105/70/95/70/85/120)
- [ ] Nidorina's hidden ability is Poison Heal
- [ ] Nidoking Toxic Boost activates correctly (1.5× Attack when poisoned)
- [ ] Nidoking's Attack becomes 180 when poisoned
- [ ] Nidoking learns Earthquake & Gunk Shot upon evolution
- [ ] Nidoking learns Fire/Ice/Thunder Punch, Megahorn, Superpower
- [ ] Nidoking stats display correctly (90/120/85/95/65/90)
- [ ] Toxic Orb self-poisons after 1 turn
- [ ] Both lines benefit from poison status

---

## Balance Notes

### Nidoqueen
- **Strengths:** Unkillable tank, passive healing, great SpD, hazard setter
- **Weaknesses:** Slow, relies on Toxic Orb, can be overwhelmed by strong physical attackers
- **Counters:** Psychic types, strong Water types, Pokemon with Mold Breaker

### Nidoking
- **Strengths:** Massive damage (180 Atk), great coverage, good speed
- **Weaknesses:** Takes poison damage, low special bulk, needs Toxic Orb
- **Counters:** Bulky Water types, faster Pokemon, priority moves

---

## Team Synergies

### Nidoqueen Synergies:
- **Pairs with:** Physical attackers (she tanks special hits), Grass types (she handles Fire/Steel)
- **Role:** Special wall, Stealth Rock setter, status absorber
- **Benefits from:** Toxic Spikes setters (auto-poison), Wish support

### Nidoking Synergies:
- **Pairs with:** Special attackers (he's physical), defensive pivots, fast sweepers
- **Role:** Physical wallbreaker, late-game cleaner
- **Benefits from:** Toxic Spikes setters (auto-poison), screens (Light Screen/Reflect)

---

## Success Metrics

**Players Should Feel:**
- Nidoqueen is an unkillable wall that loves being poisoned
- Nidoking is a powerhouse that trades HP for devastating damage
- Toxic Orb is a must-have item for both
- Gender choice matters - defensive Queen vs offensive King
- Both are equally viable, just different roles
- Poison is a BUFF, not a debuff!

**Players Should NOT Feel:**
- One is strictly better than the other
- Confused about which gender to choose
- Limited by movepool or coverage
- Frustrated by poison damage (it's worth it!)

---

## Implementation Status

✅ **Nidoqueen Stats** - Adjusted (85 SpA, 120 SpD)
✅ **Nidoqueen Abilities** - Updated (Poison Heal primary)
✅ **Nidoqueen Learnset** - Defensive moves added
✅ **Nidorina Hidden Ability** - Changed to Poison Heal
✅ **Nidoking Stats** - Completely rebalanced (90/120/85/95/65/90)
✅ **Nidoking Abilities** - Updated (Toxic Boost primary)
✅ **Nidoking Learnset** - Physical attacker focus with punches

**Next Steps:**
- Test in-game to verify mechanics work correctly
- Balance check against other Poison/Ground types
- Ensure Toxic Orb is available to players early enough
