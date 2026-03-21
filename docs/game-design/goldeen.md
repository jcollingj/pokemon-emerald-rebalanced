---
name: Goldeen
dex_number: 118
status: designed
ability: Lancer (custom)
role: Horn Specialist Physical Attacker
ideal_items: Life Orb, Choice Band, Mystic Water
evolution_line: [Goldeen, Seaking]
---

# Goldeen / Seaking - Rebalance Notes

## Design Philosophy
Seaking is a horn specialist whose custom ability **Lancer** boosts all piercing/horn moves by 1.3x. Its entire learnset is horn- and spike-based: Megahorn, Smart Strike, Horn Leech, Poison Jab, Waterfall (the fish that swims up waterfalls horn-first). Where Raticate has fangs for every type, Seaking has horns -- but with a critical difference: Horn Leech gives it sustain. Seaking is a bulky physical Water attacker that heals as it hits.

This is the "every move benefits" pattern (same as Blastoise/Mega Launcher and Raticate/Strong Jaw) but on a bulkier, slower body with built-in recovery. The fantasy: "I impale everything and heal doing it."

## Why Not the Other Abilities?

### Option A: Sheer Force (Rejected)
Sheer Force boosts moves with secondary effects by 1.3x and removes the secondary effect. This works with Waterfall (flinch), Poison Jab (poison), Ice Beam (freeze), etc. But it's *generic* -- it doesn't shape the learnset in a unique way. Any physical Water type could run Sheer Force. It doesn't make you think "Seaking" when you see it. It also strips the flinch from Waterfall, which feels bad thematically for the waterfall fish.

### Option B: Lightning Rod Rework (Rejected)
Lightning Rod on a Water type is conceptually cool -- immune to your own weakness! But Lightning Rod gives +1 SpA, which is useless on physical Seaking. We could rework it to give +1 Atk, but that falls into the "reactive +1 when hit by X" trap from our design principles. The ability doesn't shape what moves you pick. You just passively get a boost when the opponent happens to use an Electric move. It's a defensive perk, not a build identity.

### Option C: Lancer (custom) (Recommended)
A custom ability that boosts piercing/horn/spike moves by 1.3x. This is the same design pattern as Strong Jaw (biting moves x1.5) but slightly lower multiplier (1.3x) because Seaking has better bulk and sustain than Raticate. The ability shapes the entire learnset -- every move needs to be a horn/piercing move. And it makes Horn Leech (which heals 50% of damage dealt) into the signature sustain tool: hit hard AND heal.

**Qualifying moves for Lancer:** Horn Attack, Horn Leech, Megahorn, Smart Strike, Poison Jab, Drill Run, Waterfall (piercing through water horn-first), Peck, Fury Attack, Horn Drill.

## Ability Changes

- **Ability 1: Lancer** (custom) -- Piercing/horn moves deal 1.3x damage. Core identity.
- **Ability 2: Swift Swim** -- Double Speed in rain. Alternative rain sweeper build.
- **Hidden: Lightning Rod** -- Immune to Electric, +1 SpA. Niche defensive option (still useful for switching into Electric moves even if SpA boost is wasted).

## Stat Changes

### Goldeen (evolves at 33 -> lower to 28)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 45 | **50** | +5 |
| Atk | 67 | **72** | +5 |
| Def | 60 | 60 | - |
| SpA | 35 | 35 | - |
| SpD | 50 | **55** | +5 |
| Spe | 63 | 63 | - |
| **BST** | **320** | **335** | **+15** |

Decent physical bulk for a pre-evo. Atk is good enough that Lancer-boosted moves feel rewarding early.

### Seaking

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 80 | **90** | +10 |
| Atk | 92 | **100** | +8 |
| Def | 65 | **75** | +10 |
| SpA | 65 | 55 | -10 |
| SpD | 80 | **85** | +5 |
| Spe | 68 | 68 | - |
| **BST** | **450** | **473** | **+23** |

The stat story: 90 HP / 75 Def / 85 SpD is genuinely bulky for a mid-game Water type. 100 Atk is solid -- not Fearow explosive, but with Lancer boosting everything, effective power is high. 68 Speed is mediocre, which is intentional: Seaking wins through sustain (Horn Leech healing), not speed. SpA drops because Seaking has zero use for it.

## Learnset

### Goldeen (evolves at 28)

| Level | Move | BP | Type | Lancer? | Purpose |
|-------|------|----|------|---------|---------|
| 1 | Peck | 35 | Flying | **Yes -> 45** | Basic STAB (horn peck) |
| 1 | Tail Whip | -- | Normal | -- | Utility |
| 8 | **Horn Attack** | 65 | Normal | **Yes -> 84** | First real horn move. Build turns on. |
| 12 | **Waterfall** | 80 | Water | **Yes -> 104, STAB -> 156** | Water STAB. The iconic Goldeen move. 30% flinch preserved. |
| 16 | Aqua Ring | -- | Water | -- | Passive healing, stacks with Horn Leech sustain |
| 21 | **Poison Jab** | 80 | Poison | **Yes -> 104** | Coverage for Grass/Fairy |
| 27 | **Horn Leech** | 75 | Grass | **Yes -> 97** | Signature sustain move. Heals 50% of damage dealt. |

### Seaking (evolves at 28)

| Level | Move | BP | Type | Lancer? | Purpose |
|-------|------|----|------|---------|---------|
| 28 | **Smart Strike** | 70 | Steel | **Yes -> 91** | Evolution reward. Never misses. Steel coverage for Fairy/Ice/Rock. |
| 33 | **Drill Run** | 80 | Ground | **Yes -> 104** | Coverage for Electric/Fire/Steel/Poison |
| 36 | Swords Dance | -- | Normal | -- | Setup option. Turns Seaking from sustained attacker into sweeper threat. |
| 40 | **Megahorn** | 120 | Bug | **Yes -> 156** | The big nuke. Bug coverage for Psychic/Dark/Grass. |
| 44 | Agility | -- | Normal | -- | Speed fix for late game. |
| 48 | **Horn Drill** | OHKO | Normal | -- | Desperation OHKO. Seaking's classic signature. |

## The Math

With 100 Atk + Lancer (1.3x on horn/piercing moves):

| Move | BP | Lancer | STAB | Effective | Notes |
|------|----|--------|------|-----------|-------|
| **Waterfall** | 80 | x1.3 = 104 | x1.5 | **156** | 30% flinch, reliable |
| **Megahorn** | 120 | x1.3 = 156 | -- | **156** | Same power as STAB Waterfall! |
| **Horn Leech** | 75 | x1.3 = 97 | -- | **97** | Heals **48 HP** per hit (50% of damage). Sustain engine. |
| **Drill Run** | 80 | x1.3 = 104 | -- | **104** | Ground coverage |
| **Poison Jab** | 80 | x1.3 = 104 | -- | **104** | Grass/Fairy coverage |
| **Smart Strike** | 70 | x1.3 = 91 | -- | **91** | Never misses |
| **Horn Attack** | 65 | x1.3 = 84 | -- | **84** | Early game staple |

**The Horn Leech sustain loop:**
- 100 Atk, 97 effective BP Horn Leech
- Against a neutral target, this deals ~30-40% of their HP
- Seaking heals 50% of that = 15-20% of Seaking's max HP per turn
- Combined with Aqua Ring (1/16 per turn), Seaking heals ~20-25% per turn while attacking
- With 90 HP / 75 Def / 85 SpD, Seaking takes ~20-30% from neutral hits
- Result: Seaking outheals moderate damage while hitting back hard

**Choice Band Waterfall:** 156 effective BP off 150 Atk (100 x 1.5 Band). 2HKOs most neutral targets.

**Swords Dance Megahorn:** After +2, 200 effective Atk x 156 BP Megahorn. OHKOs most things that don't resist Bug.

**Coverage logic:**
- Water (Waterfall) for Fire/Ground/Rock
- Bug (Megahorn) for Psychic/Dark/Grass
- Ground (Drill Run) for Electric/Steel/Poison/Fire
- Poison (Poison Jab) for Grass/Fairy
- Steel (Smart Strike) for Ice/Rock/Fairy
- Grass (Horn Leech) for Water/Ground/Rock + sustain
- Between all horn moves, Seaking hits every type for at least neutral damage

**Optimal 4-move sets:**
- **Sustain Tank:** Waterfall / Horn Leech / Poison Jab / Megahorn
- **Setup Sweeper:** Waterfall / Swords Dance / Megahorn / Drill Run
- **Choice Band:** Waterfall / Megahorn / Drill Run / Smart Strike

## Ideal Items

1. **Life Orb** -- 1.3x on everything + flexible moveset. Horn Leech partially offsets Life Orb recoil (heals ~15% while Life Orb costs 10%). This is the signature interaction: Seaking is the rare Life Orb user that sustains through the recoil cost. Waterfall becomes 156 x 1.3 = 202 effective.

2. **Choice Band** -- 100 Atk x 1.5 = 150 effective. Waterfall at 156 effective BP off 150 Atk. Pure power, no setup. Pick the right horn for the matchup.

3. **Mystic Water** -- 1.2x Water moves. Waterfall: 80 x 1.3 (Lancer) x 1.2 (Mystic Water) x 1.5 (STAB) = 187 effective. Dedicated to Water damage while keeping moveset flexibility.

## Core Strategy

### The Sustain Lancer
1. Seaking switches in -- bulky enough to take a hit (90/75/85)
2. Waterfall for STAB damage + flinch chance, or pick the right horn for coverage
3. When HP gets low, Horn Leech to heal back up
4. Aqua Ring for passive sustain on top
5. Seaking outlasts opponents through sustained damage + healing
6. Late game: Swords Dance if you get a free turn, then Megahorn/Waterfall to sweep

### The Life Orb Sustain Trick
Life Orb costs 10% HP per attack. Horn Leech heals ~15-20% per hit. Seaking is one of the few Pokemon that can run Life Orb and *gain* HP on Horn Leech turns. Alternate between Waterfall (big damage, lose 10% HP) and Horn Leech (coverage + heal back) to stay healthy while keeping Life Orb's 1.3x boost.

### When to Use Seaking
- **Mid-game tank:** Bulky enough to take hits, hits back hard with boosted horns
- **Sustain war:** Horn Leech + Aqua Ring = outlasts defensive Pokemon
- **Coverage attacker:** 6 types of horn moves cover everything
- **Anti-Grass:** Poison Jab and Megahorn both destroy Grass types that would normally wall Water
- **NOT a speed demon.** 68 Speed means faster threats can pressure it. Seaking wins by surviving, not outspeeding.

## Seaking vs Other Water Types

| | Azumarill | Swampert | Seaking |
|---|-----------|----------|---------|
| **Role** | Belly Drum wallbreaker | Rain fortress tank | Sustain horn specialist |
| **Ability** | Huge Power (2x Atk) | Rain Dish (rain heal + Def) | Lancer (1.3x horns) |
| **Atk** | 110 effective | 110 | 100 |
| **Speed** | 50 (slow) | 60 (slow) | 68 (slow-medium) |
| **Bulk** | 110/85/85 (very bulky) | 100/110/110 (fortress) | 90/75/85 (solid) |
| **Sustain** | None (all-in) | Rain Dish + Aqua Ring | Horn Leech + Aqua Ring |
| **Coverage** | Water/Fairy/Fighting/Ice | Water/Ground + rain | Water/Bug/Ground/Poison/Steel/Grass |
| **Fantasy** | "I set up and destroy" | "I never die in rain" | "I impale everything and heal doing it" |

Each Water type plays completely differently. Azumarill is all-in burst. Swampert is rain-dependent fortress. Seaking is self-sufficient sustained offense with the widest coverage.

## Team Synergy

- Pairs well with Pelipper rain teams -- Swift Swim alt ability doubles Speed in rain, and even with Lancer, rain-boosted Waterfall is massive
- Covers Psychic/Dark types that threaten Breloom (Megahorn)
- Horn Leech covers Water/Ground types that resist Pikachu
- Poison Jab handles Fairy/Grass types
- Doesn't need team support to function -- self-sufficient sustain makes it easy to slot in
- Appreciates Stealth Rock support to secure KOs its Lancer hits barely miss

## Matchup Analysis

**Strong vs:** Fire (Waterfall), Ground (Waterfall/Horn Leech), Rock (Waterfall/Drill Run), Psychic (Megahorn), Dark (Megahorn), Grass (Poison Jab/Megahorn), Fairy (Poison Jab/Smart Strike), Ice (Smart Strike)
**Weak vs:** Bulky Water types that resist Waterfall AND take Horn Leech neutrally. Fast Electric types (68 Speed means Seaking often takes the hit). Flying types with high Defense.
**Key vulnerability:** Speed. 68 is mediocre. Seaking compensates with bulk and healing, but a fast super-effective hit still hurts. Agility at L44 helps late game but costs a moveslot.

## Implementation Notes

### Custom Ability: Lancer
- Effect: Piercing/horn moves deal 1.3x damage
- Affected moves: Horn Attack, Horn Leech, Megahorn, Smart Strike, Poison Jab, Drill Run, Waterfall, Peck, Fury Attack, Horn Drill (for the OHKO roll? or just the accuracy), Throat Chop (jabbing), Aerial Ace (slashing counts?). Final list TBD during implementation.
- Implementation: Same pattern as Strong Jaw -- check move flag, apply multiplier in damage calc.
- Need to add a FLAG_PIERCING or similar move flag to tag qualifying moves.

### Evolution Level Change
- Vanilla: Goldeen evolves at 33
- Rebalanced: Goldeen evolves at 28
- Reason: 33 is too late for a Route 102 catch. By level 33, the player is past Flannery (4th gym). Evolving at 28 means Seaking comes online around Norman (5th gym), which is appropriate for a Good Rod catch.
