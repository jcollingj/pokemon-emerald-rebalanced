# Mudkip - Rebalance Notes

## Design Philosophy
Mudkip is being transformed into a **rain-based defensive tank** with a significantly buffed Rain Dish ability. This creates a unique tanking identity for a starter Pokemon - an unkillable wall that thrives in rain.

## Stat Changes

**HP:**
- Vanilla: 50
- Rebalanced: **85** (+35)
- Rationale: Tank needs bulk to survive and maximize Rain Dish healing

**Defense:**
- Vanilla: 50
- Rebalanced: **75** (+25)
- Rationale: Physical wall capability, synergizes with Rain Dish's Defense boost

**Special Defense:**
- Vanilla: 50
- Rebalanced: **70** (+20)
- Rationale: Mixed defensive wall

**Attack:**
- Vanilla: 70
- Rebalanced: **60** (-10)
- Rationale: Still has offensive presence, but focus is on tanking

**Special Attack:**
- Vanilla: 50
- Rebalanced: **40** (-10)
- Rationale: Not a special attacker

**Speed:**
- Vanilla: 40
- Rebalanced: **30** (-10)
- Rationale: Tanks don't need speed, can take hits and outlast opponents

**Total BST: 420** (up from 310)

## Ability Changes

**Primary Ability:**
- Vanilla: Torrent
- Rebalanced: **Rain Dish** (ability 1)
- Rationale: Core identity as rain tank with passive healing and defense boost

**Hidden Ability:**
- Keep: **Damp** (or consider **Storm Drain** for water immunity + SpA boost)

## Buffed Rain Dish Ability

**NEW Rain Dish Effects:**
1. **Healing: 1/8 max HP per turn** in rain (doubled from vanilla's 1/16)
2. **Defense Boost: +50% Defense** while rain is active (1.5x multiplier)

**Why This Matters:**
- 85 HP Mudkip heals **~10 HP per turn** in rain
- 75 Defense becomes **~112 effective Defense** in rain
- Creates a true tank identity that synergizes with stats

## Moveset Changes

**Complete Learnset (IMPLEMENTED):**
- **Level 1:** Tackle, Growl (basic moves)
- **Level 6:** Mud-Slap (early Ground coverage, accuracy drop)
- **Level 8:** Water Gun (early STAB)
- **Level 10:** Protect (EARLY defensive utility - stall for healing)
- **Level 12:** Rain Dance (activates Rain Dish healing + Defense boost!)
- **Level 14:** Aqua Ring (passive healing - stacks with Rain Dish!)
- **Level 16:** Whirlpool (trapping move, chip damage)
- **Level 20:** Curse (+1 Atk/+1 Def/-1 Speed - PERFECT for tank!)
- **Level 24:** Dive (invulnerability turn + STAB damage)
- **Level 28:** Mud Shot (Ground STAB, lowers opponent Speed)
- **Level 32:** Amnesia (+2 Special Defense - become mixed wall)
- **Level 36:** Muddy Water (powerful Water STAB, accuracy drop)
- **Level 40:** Scald (80 power + 30% burn chance - amazing for tank!)
- **Level 44:** Earthquake (devastating Ground STAB)
- **Level 48:** Hydro Pump (late-game nuke option)

**Early Power Spike (Levels 8-14):**
- Level 10: Protect for defensive stalling
- Level 12: Rain Dance to activate Rain Dish (healing + Defense boost)
- Level 14: Aqua Ring for DOUBLE healing (Rain Dish 1/8 + Aqua Ring 1/16 = ~18 HP/turn!)
- Sets up unkillable tank strategy immediately

## Core Strategy

**The Rain Fortress:**
1. **Turn 1:** Rain Dance (activates Rain Dish)
   - Rain Dish healing: ~10 HP/turn (1/8 of 85 HP)
   - Defense boost: 75 → ~112 effective Defense
2. **Turn 2:** Aqua Ring (adds passive healing)
   - COMBINED HEALING: ~18 HP per turn! (Rain Dish + Aqua Ring)
3. **Turn 3:** Curse (+1 Def/+1 Atk, -1 Speed doesn't matter)
   - Now healing 18 HP/turn with boosted defenses
4. **Turn 4+:** Attack with Scald/Muddy Water or set up Amnesia
   - Protect to stall for extra healing turns
   - Whirlpool to trap and chip
   - Dive for invulnerability + healing

**Advanced Setup:**
- Rain Dance → Aqua Ring → Curse → Amnesia → Scald spam
- Healing 18+ HP/turn while nearly unkillable
- Scald's 30% burn chance reduces enemy Attack even more
- Curse + boosted Defense + Rain Dish = unstoppable physical wall

**Why This Works:**
- 85/75/70 bulk is exceptional for a starter
- DOUBLE healing (Rain Dish + Aqua Ring) = ~21% max HP per turn!
- +50% Defense in rain + Curse + potential burns = layered defense
- High HP maximizes percentage-based healing
- Curse negates low Speed stat while boosting Atk/Def
- Rain Dance accessible at level 12, full combo ready by level 32

## Competitive Niche
- Early-game rain tank (available as starter!)
- Synergizes with rain team strategies (Poliwag, Surskit)
- Defensive pivot that outlasts opponents
- Unique rain-based tank identity
- Starter Pokemon that remains viable throughout game

## Strategic Synergies

**Rain Team Synergy:**
- Pairs with Poliwag (Swift Swim rain sweeper)
- Pairs with Surskit (Swift Swim + Tail Glow sweeper)
- Sets up Rain Dance for entire team
- Tanks while teammates sweep

**Battle Flow:**
- Turn 1: Rain Dance
- Every turn after: Heal 10 HP, tank hits with boosted Defense
- Chip damage with Water moves
- Outlast opponent through sustain

## Matchup Analysis
- **Strong vs:** Physical attackers, Fire types, Ground types, Rock types
- **Weak vs:** Grass types (4x weakness), strong special attackers
- **Role:** Rain tank, defensive wall, team support (Rain Dance)

## Flavor Fit
- Pokedex says Mudkip "powerfully lifts large boulders" → physical tank!
- Mud Fish Pokemon → lives in water, benefits from rain
- Defensive stats match flavor text
- Rain Dish transforms it into the ultimate water-dwelling tank

## Evolution Consideration
- Marshtomp and Swampert should continue this tank identity
- Consider keeping Rain Dish or transitioning abilities
- Ground typing on evolution adds to tank role (only Electric weakness)
- Evolution stats should maintain high HP/Defense focus

## Success Metrics

**Player Should Feel:**
- Mudkip is unkillable in rain
- Excited to build rain teams around starter
- Strategic choices around when to use Rain Dance
- Confident taking Mudkip into late-game battles

**Player Should NOT Feel:**
- Mudkip is too slow or weak offensively (60 Attack is still decent)
- Rain Dish is a passive/boring ability (Defense boost makes it active!)
- Forced to abandon Mudkip for "better" Pokemon later

---

## Summary of ALL Changes Implemented

### **Stats (src/data/pokemon/species_info/gen_3_families.h:625-630)**
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **85** | +35 |
| Attack | 70 | **60** | -10 |
| Defense | 50 | **75** | +25 |
| Speed | 40 | **30** | -10 |
| Sp. Attack | 50 | **40** | -10 |
| Sp. Defense | 50 | **70** | +20 |
| **Total BST** | **310** | **420** | **+110** |

### **Ability (src/data/pokemon/species_info/gen_3_families.h:640)**
- Primary: Torrent → **Rain Dish** (buffed version)
- Hidden: Damp (unchanged)

### **Rain Dish Ability Buffs (src/battle_util.c)**
1. **Healing:** 1/16 → **1/8 max HP per turn** (line 4260)
2. **Defense Boost:** +50% Defense in rain (lines 8974-8981)

### **Moveset (src/data/pokemon/level_up_learnsets/gen_3.h:5488-5506)**
Complete rebalance with focus on tank utility and synergy:
- Added: Protect (10), Rain Dance (12), Aqua Ring (14), Curse (20), Dive (24), Amnesia (32), Scald (40), Earthquake (44)
- Moved earlier: Whirlpool (33→16), Protect (37→10)
- Kept: Tackle, Growl, Mud-Slap, Water Gun, Mud Shot, Muddy Water, Hydro Pump
- Removed: Bide, Foresight, Mud Sport, Take Down, Endeavor

### **Key Synergies**
- Rain Dance + Rain Dish = 10 HP/turn + 112 effective Defense
- Rain Dish + Aqua Ring = 18 HP/turn combined healing
- Curse = +Def/+Atk with irrelevant Speed drop
- Scald = damage + 30% burn (further reduces enemy Attack)
- Whirlpool + Protect + healing = trap and outlast strategy
