---
name: Nidoran
dex_number: 29
status: implemented
ability: Poison Heal / Toxic Boost
role: Poison Tank / Poison Sweeper
evolution_line: [Nidoran♀, Nidorina, Nidoqueen, Nidoran♂, Nidorino, Nidoking]
---

# Nidoran Evolution Line - Design Recommendations (REVISED)

## Design Philosophy

The Nidoran line features a **poison-based asymmetric split**:

### **Female Line (Nidorina/Nidoqueen) - Poison Heal Tank**
- **Role:** Special Defense wall that thrives when poisoned
- **Core Mechanic:** Poison Heal ability (heals 1/8 HP per turn when poisoned)
- **Stat Focus:** HP, Special Defense, Defense
- **Strategy:** Use Toxic Orb to self-poison → heal 1/8 HP every turn → become unkillable wall

### **Male Line (Nidorino/Nidoking) - Toxic Boost Attacker**
- **Role:** Physical attacker that gets stronger when poisoned
- **Core Mechanic:** Toxic Boost ability (1.5× Attack when poisoned)
- **Stat Focus:** Attack, Speed
- **Strategy:** Use Toxic Orb to self-poison → gain 1.5× Attack boost → hit like a truck

---

## FEMALE LINE: Nidorina (Defensive Pre-Evolution)

### Current Status
**Base Stats:**
- HP: 85, Attack: 50, Defense: 70, Speed: 60, SpA: 75, SpD: 75
- **BST: 415** (already updated)

### Recommended Stats (Keep Current)
- HP: **85** (good bulk)
- Attack: **50** (not needed)
- Defense: **70** (decent)
- Speed: **60** (slow tank)
- Sp. Attack: **75** (moderate special offense)
- Sp. Defense: **75** (decent special bulk)
- **BST: 415**

**Ability:**
- Ability 1: **Poison Point** (30% poison on contact)
- Ability 2: **Poison Point**
- Hidden: **Poison Heal** (heals 1/8 HP when poisoned - preview of evolution!)

**Learnset (Keep special attack focus):**
- Lv 10: Toxic Spikes
- Lv 12: Toxic
- Lv 14: Venoshock
- Lv 22: Earth Power
- Lv 26: Sludge Bomb
- Plus coverage moves (Ice Beam, Thunderbolt, Flamethrower)

---

## FEMALE LINE: Nidoqueen (Special Defense Tank)

### Recommended Stats (REVISED)

**Stat Adjustments:**
- HP: 105 → **105** (keep - excellent bulk)
- Attack: 70 → **70** (keep - not needed)
- Defense: 95 → **95** (keep - good physical bulk)
- Speed: 70 → **70** (keep - slow tank)
- Sp. Attack: 105 → **85** (-20, still decent for coverage)
- Sp. Defense: 100 → **120** (+20, MAIN DEFENSIVE STAT)
- **New BST: 545**

**Rationale:** Nidoqueen becomes a special defense wall with incredible HP and SpD, can still hit decently with 85 SpA.

**Type:** Poison/Ground (immune to Electric, resists Rock/Poison/Bug/Fighting)

**Ability:**
- Ability 1: **Poison Heal** (heals 1/8 max HP per turn when poisoned - CORE ABILITY!)
- Ability 2: **Poison Point** (alternative for contact poison)
- Hidden: **Sheer Force** (coverage option)

**Rationale:**
- **Poison Heal** is the star - hold Toxic Orb, get poisoned, heal 1/8 HP every turn!
- With 105 HP, that's ~13 HP healed per turn
- Combined with 95 Def / 120 SpD = nearly unkillable wall

**New Learnset (Special Defense Tank):**
- Lv 1: Earth Power, Sludge Bomb (evolution moves)
- Lv 1: Toxic, Venoshock (inherited)
- Lv 16: **Protect** (stall turns for healing)
- Lv 20: **Recover** (instant 50% HP heal)
- Lv 24: Ice Beam (coverage)
- Lv 28: **Stealth Rock** (hazard setting)
- Lv 32: Sludge Wave (Poison STAB)
- Lv 36: Earth Power (Ground STAB)
- Lv 40: **Rest** (full heal + sleep)
- Lv 44: Thunderbolt (coverage)
- Lv 48: **Toxic** (poison opponents)

### Core Strategy - Poison Heal Tank

**Turn 1 Setup:**
1. Hold **Toxic Orb** (poisons holder after 1 turn)
2. Turn 1: Toxic Orb activates → Nidoqueen is poisoned
3. **Poison Heal activates** → Instead of taking damage, heal 1/8 HP per turn (~13 HP)

**Every Turn After:**
- Heal 13 HP per turn
- Tank hits with 105/95/120 bulk
- Fire back with Earth Power, Sludge Wave, Ice Beam (85 SpA is still decent)
- Use Protect to stall extra healing turns
- Use Recover for instant 50% HP heal
- Use Rest for full heal (sleep doesn't matter when you're unkillable)

**Why This Works:**
- **105 HP / 95 Def / 120 SpD** = elite mixed bulk
- **Poison Heal + Toxic Orb** = permanent 1/8 HP healing every turn
- **13 HP/turn** healing is INSANE sustain
- **85 SpA** is still enough to do damage with STAB moves
- Poison/Ground typing gives great resistances
- Can set Stealth Rock for team support

**Damage Calculations:**
- Earth Power: 90 × 1.5 (STAB) = **135 effective power** (still hits hard!)
- Sludge Wave: 95 × 1.5 (STAB) = **142.5 effective power**
- With 85 SpA, these moves are solid

**Healing Calculations:**
- Poison Heal: 1/8 × 105 HP = **~13 HP per turn**
- Recover: 50% × 105 HP = **52 HP instant heal**
- Rest: 100% × 105 HP = **105 HP full heal**

### Sample Sets

**Set 1: Poison Heal Wall (RECOMMENDED)**
**Ability:** Poison Heal
**Item:** Toxic Orb
**Moves:**
- Toxic / Stealth Rock (utility)
- Earth Power (STAB)
- Ice Beam (coverage)
- Recover / Protect (healing/stalling)

**Set 2: Defensive Pivot**
**Ability:** Poison Heal
**Item:** Toxic Orb
**Moves:**
- Stealth Rock (hazards)
- Earth Power (STAB)
- Sludge Wave (STAB)
- Recover (healing)

---

## MALE LINE: Nidorino (Physical Attacker Pre-Evolution)

### Recommended Stats

**Stat Adjustments:**
- HP: 61 → **70** (+9)
- Attack: 72 → **85** (+13, MAIN STAT)
- Defense: 57 → **65** (+8)
- Speed: 65 → **75** (+10)
- Sp. Attack: 55 → **45** (-10, not needed)
- Sp. Defense: 55 → **65** (+10)
- **New BST: 405** (+40)

**Ability:**
- Ability 1: **Poison Point** (30% poison on contact)
- Ability 2: **Rivalry** (1.25× vs same gender)
- Hidden: **Toxic Boost** (1.5× Attack when poisoned - preview of evolution!)

**New Learnset (Physical Focus):**
- Lv 1: Tackle, Leer
- Lv 6: Horn Attack (65 power Normal)
- Lv 10: **Poison Sting** (15 power Poison physical)
- Lv 12: **Double Kick** (30×2 Fighting)
- Lv 14: **Poison Jab** (80 power Poison STAB)
- Lv 18: Bite (60 power Dark)
- Lv 22: **Bulldoze** (60 power Ground)
- Lv 26: **Crunch** (80 power Dark)
- Lv 30: **Drill Run** (80 power Ground, high crit)
- Lv 34: **Megahorn** (120 power Bug)
- Lv 38: **Poison Tail** (50 power Poison, high crit, 10% poison)
- Lv 42: **Gunk Shot** (120 power Poison, 80% acc)

---

## MALE LINE: Nidoking (Physical Wallbreaker)

### Recommended Stats (REVISED)

**Stat Adjustments:**
- HP: 81 → **90** (+9)
- Attack: 102 → **120** (+18, MAIN STAT)
- Defense: 77 → **85** (+8)
- Speed: 85 → **95** (+10)
- Sp. Attack: 85 → **65** (-20, not needed)
- Sp. Defense: 75 → **90** (+15)
- **New BST: 545** (+40)

**Rationale:** Nidoking becomes a powerful physical attacker with high Attack and good Speed.

**Type:** Poison/Ground (immune to Electric, resists Rock/Poison/Bug/Fighting)

**Ability:**
- Ability 1: **Toxic Boost** (1.5× Attack when poisoned - CORE ABILITY!)
- Ability 2: **Rivalry** (1.25× vs same gender)
- Hidden: **Sheer Force** (alternative for coverage moves)

**Rationale:**
- **Toxic Boost** is the star - hold Toxic Orb, get poisoned, 120 Atk → **180 effective Attack!**
- With 180 effective Attack, Nidoking hits harder than most legendaries
- 95 Speed outspeeds most threats
- Sheer Force alternative for non-Toxic Boost builds

**New Learnset (Physical Attacker):**
Upon evolution from Nidorino, learns:
- **Earthquake** (100 power Ground physical STAB)
- **Gunk Shot** (120 power Poison physical STAB)

Level-up moves:
- Lv 1: Earthquake, Gunk Shot (evolution)
- Lv 1: Poison Jab, Double Kick (inherited)
- Lv 20: **Fire Punch** (75 power Fire)
- Lv 24: **Ice Punch** (75 power Ice)
- Lv 28: **Thunder Punch** (75 power Electric)
- Lv 32: **Megahorn** (120 power Bug)
- Lv 36: **Stone Edge** (100 power Rock, high crit)
- Lv 40: **Superpower** (120 power Fighting)
- Lv 44: **Aqua Tail** (90 power Water)
- Lv 48: **Dragon Tail** (60 power Dragon, forces switch)

### Core Strategy - Toxic Boost Wallbreaker

**Turn 1 Setup:**
1. Hold **Toxic Orb** (poisons holder after 1 turn)
2. Turn 1: Switch in or tank a hit
3. Toxic Orb activates → Nidoking is poisoned
4. **Toxic Boost activates** → 120 Attack → **180 effective Attack!**

**Turn 2+ Sweep:**
- Hit with 180 effective Attack (50% boost!)
- Gunk Shot: 120 power × 180 Atk = DEVASTATING
- Earthquake: 100 power × 180 Atk = MASSIVE
- Coverage punches hit incredibly hard
- 95 Speed outspeeds most threats

**Why This Works:**
- **120 base Attack → 180 with Toxic Boost** = insane power
- **95 Speed** outspeeds base 90 tier (most mid-game threats)
- **Toxic Orb** activates Toxic Boost immediately
- Takes 1/8 HP damage per turn (12 HP with 90 HP) - worth it for 50% Attack boost!
- Coverage options: Poison/Ground/Fire/Ice/Electric/Rock/Fighting/Bug/Water/Dragon

**Damage Calculations (with Toxic Boost):**
- **Effective Attack: 120 × 1.5 = 180**
- Gunk Shot: 120 × 1.5 (STAB) = 180 power × 180 Atk = **NUKE**
- Earthquake: 100 × 1.5 (STAB) = 150 power × 180 Atk = **MASSIVE**
- Megahorn: 120 power × 180 Atk = **DEVASTATING**
- Superpower: 120 power × 180 Atk = **INSANE**

**Life Orb Alternative (Sheer Force):**
- Sheer Force + Life Orb = 1.69× damage, no recoil
- Fire/Ice/Thunder Punch: 75 × 1.3 × 1.3 = 127 effective power
- But Toxic Boost is generally better for raw power

### Sample Sets

**Set 1: Toxic Boost Sweeper (RECOMMENDED)**
**Ability:** Toxic Boost
**Item:** Toxic Orb
**Moves:**
- Gunk Shot (Poison STAB nuke)
- Earthquake (Ground STAB)
- Megahorn / Superpower (coverage)
- Ice Punch / Stone Edge (coverage)

**Strategy:** Get poisoned, sweep with 180 effective Attack.

**Set 2: Sheer Force Wallbreaker**
**Ability:** Sheer Force (hidden)
**Item:** Life Orb
**Moves:**
- Gunk Shot (no Sheer Force boost, but STAB)
- Earthquake (STAB)
- Fire Punch / Ice Punch / Thunder Punch (all Sheer Force boosted!)
- Superpower (Sheer Force boosted)

**Strategy:** Hit hard with coverage, no Life Orb recoil.

---

## Ability Comparison

### Poison Heal (Nidoqueen)
**Effect:** Heals 1/8 max HP per turn when poisoned (instead of taking damage)
**With 105 HP:** ~13 HP healed per turn
**Item:** Toxic Orb (poisons self after 1 turn)
**Strategy:** Become unkillable tank with permanent healing

### Toxic Boost (Nidoking)
**Effect:** Attack is increased by 50% when poisoned
**With 120 Attack:** 120 → 180 effective Attack (+60!)
**Item:** Toxic Orb (poisons self after 1 turn)
**Strategy:** Trade 1/8 HP per turn for massive damage boost
**Worth It?** YES! 12 HP/turn is nothing compared to 50% Attack boost

---

## Gender Split Comparison

| Aspect | Nidoqueen (Female) | Nidoking (Male) |
|--------|-------------------|-----------------|
| **Role** | Special Defense Tank | Physical Wallbreaker |
| **Core Ability** | Poison Heal (heal 13 HP/turn) | Toxic Boost (180 Atk) |
| **Stat Focus** | HP (105), SpD (120) | Atk (120→180), Speed (95) |
| **Playstyle** | Tank hits, heal, outlast | Get poisoned, sweep hard |
| **Item** | Toxic Orb (for healing) | Toxic Orb (for Attack boost) |
| **Coverage** | Special (Earth/Ice/Electric) | Physical (Punches/Megahorn) |
| **Speed** | 70 (slow tank) | 95 (fast sweeper) |
| **Sustain** | +13 HP/turn (Poison Heal) | -12 HP/turn (poison damage) |

---

## Stat Comparison Summary

### Nidoqueen (Special Defense Tank)
| Stat | Final Value |
|------|-------------|
| HP | **105** |
| Attack | 70 |
| Defense | 95 |
| Speed | 70 |
| Sp. Attack | **85** |
| Sp. Defense | **120** |
| **BST** | **545** |

### Nidoking (Physical Wallbreaker)
| Stat | Final Value | With Toxic Boost |
|------|-------------|------------------|
| HP | 90 | 90 |
| Attack | **120** | **180** |
| Defense | 85 | 85 |
| Speed | **95** | 95 |
| Sp. Attack | 65 | 65 |
| Sp. Defense | 90 | 90 |
| **BST** | **545** | **605** (effective) |

---

## Core Combos Summary

### Nidoqueen: Poison Heal Tank
**Setup:**
1. Hold Toxic Orb
2. Turn 1: Toxic Orb activates → poisoned
3. Poison Heal: Heal 13 HP per turn (instead of taking damage!)
4. Tank hits with 105/95/120 bulk
5. Fire back with Earth Power (135 power), Sludge Wave (142.5 power)
6. Use Protect to stall, Recover for instant heal
7. Never die!

**Sustain:**
- Passive: +13 HP/turn (Poison Heal)
- Recover: +52 HP instant
- Rest: +105 HP full heal
- Total sustain: Unkillable

### Nidoking: Toxic Boost Attacker
**Setup:**
1. Hold Toxic Orb
2. Turn 1: Toxic Orb activates → poisoned
3. Toxic Boost: 120 Atk → **180 Atk** (+50%!)
4. Sweep with Gunk Shot (180 power STAB), Earthquake (150 power STAB)
5. Coverage: Megahorn, Superpower, Fire/Ice/Thunder Punch
6. 95 Speed outspeeds most threats

**Damage:**
- Gunk Shot: 180 Atk × 180 power (STAB) = **DEVASTATING**
- Earthquake: 180 Atk × 150 power (STAB) = **MASSIVE**
- Cost: -12 HP/turn (worth it!)

---

## Evolution Timing

**When to Evolve:**
- Evolve around **Level 25-30** when Moon Stone is available
- Both evolutions gain signature abilities (Poison Heal / Toxic Boost)
- Immediate power spikes upon evolution

---

## Team Synergies

### Nidoqueen Synergies:
- **Pairs with:** Physical attackers (she tanks special hits), Grass types (she handles Fire/Steel/Poison)
- **Role:** Special wall, Stealth Rock setter, status absorber
- **Counters:** Poison types can't poison her (she wants it!), Fire/Steel types (Earth Power)

### Nidoking Synergies:
- **Pairs with:** Special attackers (he's physical), fast sweepers, Toxic Spikes setters (auto-poison!)
- **Role:** Physical wallbreaker, late-game cleaner
- **Counters:** Ground types (Earthquake), Steel types (Earthquake/Superpower)

---

## Success Metrics

**Player Should Feel:**
- Nidoqueen is an unkillable wall that loves being poisoned
- Nidoking is a powerhouse that trades HP for devastating damage
- Toxic Orb is a MUST-HAVE item for both
- Gender choice matters - defensive Queen vs offensive King
- Both are equally viable, just different roles

**Player Should NOT Feel:**
- One is strictly better than the other
- Poison is a bad status (it's a BUFF for both!)
- Limited by movepool or coverage
- Forced to use specific items (though Toxic Orb is optimal)

---

## Status
- 📋 Redesigned with Poison Heal/Toxic Boost focus
- 🛡️ Nidoqueen = Special Defense tank (Poison Heal)
- ⚔️ Nidoking = Physical attacker (Toxic Boost)
- 🧪 Both use Toxic Orb for opposite effects
- ✅ Stat distributions finalized
- 🔄 Ready for implementation
