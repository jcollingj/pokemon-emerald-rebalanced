# Zigzagoon - Belly Drum Build Design

## Overview

Zigzagoon has been redesigned as an early-game high-risk, high-reward sweeper built around the **Belly Drum** strategy. This redesign exemplifies the game's core philosophy: making every Pokemon viable through creative ability synergies and strategic depth.

## Design Philosophy

**Goal:** Create a memorable, challenging early-game encounter that teaches players about setup sweepers, priority moves, and counterplay strategies.

**Theme:** Scrappy underdog raccoon that refuses to stay down - high risk, high reward gameplay that feels powerful when executed correctly but has clear counterplay options.

## Stat Changes

### New Base Stats
```
HP:      38 → 50  (+12)
Attack:  30 → 50  (+20)
Defense: 41 → 45  (+4)
Sp.Atk:  30 → 30  (unchanged)
Sp.Def:  41 → 45  (+4)
Speed:   60 → 45  (-15)
---
Total: 240 → 265 BST
```

### Rationale
- **HP +12**: Essential for surviving Belly Drum (loses 50% HP). With 50 HP, Zigzagoon can take one hit with Pickup's Multiscale effect and still have enough HP to use Belly Drum.
- **Attack +20**: Makes the Belly Drum payoff worthwhile. Base 50 Attack becomes ~300 with +6 boost.
- **Speed -15**: Lowered from 60 to 45 to balance the design. After Belly Drum's +1 Speed boost, effective speed is ~67, which outspeeds most early-game Pokemon but not everything.
- **Defenses +4**: Minor bulk improvements to help survive the initial hit.

## Ability Redesign

### Pickup (Enhanced)

**Original Effect:**
- Out of battle: Picks up items after battle

**NEW Combat Effect:**
- When **not holding an item** and at **full HP**: Takes half damage from attacks (Multiscale effect)
- Out-of-battle pickup functionality remains unchanged

**Implementation:** `src/battle_util.c:9244-9251`

**Synergy:**
- Enables Belly Drum setup by tanking the first hit
- Encourages "no item" playstyle for maximum effectiveness
- Thematically appropriate: "Empty paws are ready to defend and scavenge"

### Ability Lineup
1. **Pickup (Enhanced)** - Primary ability, enables Belly Drum strategy
2. **Quick Feet** - Alternative speed-focused strategy when statused
3. **Guts (Hidden)** - Alternative attack-focused strategy, prevents burn crippling

**Implementation:** `src/data/pokemon/species_info/gen_3_families.h:1099`

## Move Changes

### Belly Drum Enhancement

**Original Effect:**
- Maximize Attack (+6 stages)
- Lose 50% of max HP

**NEW Effect:**
- Maximize Attack (+6 stages)
- Raise Speed (+1 stage)
- Lose 50% of max HP

**Rationale:**
- Makes Zigzagoon a true setup sweeper, not just a slow glass cannon
- Speed boost compensates for lowered base Speed stat
- Creates a unique niche among Belly Drum users

**Implementation:** `data/battle_scripts_1.s:4234-4241`

### Level-Up Learnset Redesign

**Old Learnset:**
```
Lv 1:  Tackle, Growl
Lv 5:  Tail Whip
Lv 9:  Headbutt
Lv 13: Sand Attack
Lv 17: Odor Sleuth
Lv 21: Mud Sport
Lv 25: Pin Missile
Lv 29: Covet
Lv 33: Flail
Lv 37: Rest
Lv 41: Belly Drum ← TOO LATE!
```

**New Learnset:**
```
Lv 1:  Tackle, Growl
Lv 4:  Sand Attack         (utility early)
Lv 7:  Quick Attack        (priority for sweeping)
Lv 10: Covet               (STAB + utility)
Lv 13: Headbutt            (main STAB move)
Lv 14: Belly Drum          ⭐ THE SETUP MOVE
Lv 17: Pin Missile         (coverage)
Lv 20: Take Down           (stronger STAB)
Lv 24: Facade              (status synergy)
Lv 28: Rest                (emergency healing)
Lv 32: Thrash              (high-risk STAB)
Lv 36: Extreme Speed       (highest priority)
Lv 40: Double-Edge         (strongest STAB)
```

**Key Changes:**
- **Belly Drum moved to Level 14** - Aligns with design philosophy of "2 competitive moves by level 14"
- **Quick Attack at Level 7** - Priority move essential for sweeping after setup
- **Headbutt at Level 13** - Strong STAB move learned right before Belly Drum
- **Progressive power curve** - Moves get stronger as Zigzagoon levels up

**Implementation:** `src/data/pokemon/level_up_learnsets/gen_1.h:5097`

## Strategy Guide

### The Core Strategy

**Turn 1 - Setup Phase:**
1. Enter battle with **no item equipped** (Pickup Multiscale active)
2. Opponent attacks → 50% damage reduction from Pickup
3. Zigzagoon survives with ~25-30 HP
4. Use Belly Drum:
   - Attack: 50 → ~300 (+6 stages)
   - Speed: 45 → ~67 (+1 stage)
   - HP: 25-30 → 5-10 HP

**Turn 2+ - Sweep Phase:**
- Spam **Quick Attack** (priority 1) - Always goes first, massive damage
- Use **Headbutt** for neutral targets with max Attack
- Use **Pin Missile** for Rock/Ground coverage
- Clean up weakened opponents before they can revenge kill

### Example Early Route Battle

**Youngster Joey's Zigzagoon (Level 8)**
- Moves: Tackle, Quick Attack, Headbutt, Belly Drum
- No item equipped
- Ability: Pickup

**Turn 1:**
```
Player's Poochyena uses Tackle (12 damage expected)
→ Pickup activates: 50% reduction → 6 damage
→ Zigzagoon at 44/50 HP

Zigzagoon uses Belly Drum:
→ Attack +6 (maxed)
→ Speed +1
→ HP -25 → Zigzagoon at 19/50 HP
```

**Turn 2:**
```
Zigzagoon uses Quick Attack (priority 1)
→ Base 40 power + maxed Attack + STAB
→ ~45 damage to Poochyena

Player must:
- Use own priority move (Quick Attack)
- Switch to faster Pokemon
- Switch to resist Normal-type
- Accept the loss and learn from it
```

## Counterplay Options

### Hard Counters
- **Fighting-types** - Resist Normal moves, super-effective attacks
- **Rock-types** - High defense, resist Normal
- **Steel-types** - Resist Normal, high defense
- **Ghost-types** - Immune to Normal-type moves

### Soft Counters
- **Priority Moves** - Mach Punch, Aqua Jet, Bullet Punch revenge kill
- **Status Moves** - Paralysis halves speed, Burn halves attack (unless Guts)
- **Strong Attackers** - Can OHKO before Pickup activates or after Belly Drum
- **Faster Pokemon** - Outspeed even after +1 Speed boost

### Strategy Counters
- **Multi-hit Moves** - Break through Pickup's damage reduction
- **Entry Hazards** - Chip damage prevents full-HP Pickup activation
- **Intimidate** - Lowers Attack, reduces Belly Drum effectiveness
- **Taunt** - Prevents Belly Drum setup entirely

## Balance Analysis

### Strengths
✅ Devastating when setup succeeds
✅ Teaches players about setup sweepers
✅ Forces strategic thinking from opponents
✅ Makes early routes memorable and challenging
✅ Multiple build options (Pickup/Quick Feet/Guts)

### Weaknesses
❌ Extremely fragile after Belly Drum (5-10 HP)
❌ Requires no item to maximize Pickup effectiveness
❌ Can be OHKO'd by strong attackers
❌ Vulnerable to priority moves
❌ Needs specific conditions (full HP, no item, successful setup)
❌ Walled by Fighting/Rock/Steel/Ghost types
❌ Weak to status effects (unless Guts ability)

### Appropriate Power Level
- **Early Game (Lv 5-15):** SCARY - Can sweep unprepared teams
- **Mid Game (Lv 16-30):** GOOD - Still viable with proper setup
- **Late Game (Lv 31+):** NICHE - Outclassed by stronger sweepers

**Conclusion:** Perfectly balanced for its intended role as an early-game threat that teaches players important battle mechanics.

## Educational Value

This design teaches players about:

1. **Setup Sweepers** - The risk/reward of boosting moves
2. **Priority Moves** - Importance of speed control and revenge killing
3. **Ability Synergies** - How abilities enable specific strategies
4. **Counterplay** - Multiple ways to counter a threatening strategy
5. **Type Matchups** - Ghost immunity, Fighting effectiveness
6. **Resource Management** - The trade-off of not using held items
7. **Team Building** - Need for diverse Pokemon to handle threats

## Thematic Consistency

**Zigzagoon as the "Scrappy Underdog":**
- Weak base stats buffed to competitive levels ✓
- Creative ability making it viable ✓
- High-risk, high-reward gameplay ✓
- Memorable and challenging ✓
- Clear counterplay options ✓
- Teaches important battle concepts ✓

## Implementation Files

All changes have been implemented in the following files:

1. **Pickup Ability Enhancement**
   - `src/battle_util.c:9244` - Added Multiscale effect when itemless

2. **Belly Drum Speed Boost**
   - `data/battle_scripts_1.s:4234` - Added Speed +1 stage boost

3. **Base Stats**
   - `src/data/pokemon/species_info/gen_3_families.h:1081` - Updated stats

4. **Abilities**
   - `src/data/pokemon/species_info/gen_3_families.h:1099` - Changed to Pickup/Quick Feet/Guts

5. **Level-Up Learnset**
   - `src/data/pokemon/level_up_learnsets/gen_1.h:5097` - Complete learnset overhaul

## Future Considerations

### Potential Adjustments
- Monitor win rates in early-game trainer battles
- Adjust Speed boost if too oppressive (+1 vs +2)
- Consider adding Extreme Speed earlier if late-game viability needed
- May need to adjust trainer AI to better handle Belly Drum users

### Evolution Line
Linoone should receive similar attention to maintain viability throughout the game.

## Success Metrics

**Player Should Feel:**
- ✅ Challenged by early-game Zigzagoon trainers
- ✅ Excited to catch and use Zigzagoon themselves
- ✅ Rewarded for strategic setup and play
- ✅ Satisfied when successfully countering Belly Drum

**Player Should NOT Feel:**
- ❌ Helpless or without counterplay options
- ❌ That Zigzagoon is broken or unfair
- ❌ Forced to use specific Pokemon to counter it
- ❌ That the strategy is too complicated

---

**Design Status:** ✅ IMPLEMENTED
**Last Updated:** 2025-10-09
**Designer Notes:** This redesign perfectly embodies our "Every Pokemon Is Viable" pillar while creating memorable early-game encounters.
