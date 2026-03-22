---
name: Makuhita / Hariyama
dex_number: 296
status: designed
ability: Iron Fist
role: Iron Fist Elemental Brawler
evolution_line: [Makuhita, Hariyama]
---

# Makuhita / Hariyama — Rebalance Notes

## Build Identity

Hariyama is a slow, bulky Fighting type that uses **Iron Fist** to turn the full suite of elemental punches into 90 effective BP attacks, with **Mach Punch** priority to compensate for 50 Speed. It's the "hit everything hard from the front" brawler — not fast, not fragile, just heavy and relentless.

## Design Philosophy

Makuhita appears in Rusturf Tunnel at L10-11, making it the first Fighting type the player encounters. It evolves at the vanilla L24. Before evolution, Makuhita needs enough firepower and utility to justify training — Mach Punch at L8 and Fire Punch at L12 give it real punch coverage well before evolution.

Hariyama's niche vs Breloom:
- **Breloom** = Technician + frail (60 HP) + Grass/Fighting, weak multi-hit
- **Hariyama** = Iron Fist + bulky (144 HP) + pure Fighting, strong elemental punches + Focus Punch nuke

They both use Mach Punch priority, but the payoff and play style are completely different.

## Stat Changes

### Makuhita

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 72 | **80** | +8 |
| Atk | 60 | **70** | +10 |
| Def | 30 | **45** | +15 |
| SpA | 20 | 20 | — |
| SpD | 30 | **40** | +10 |
| Spe | 25 | 25 | — |
| **BST** | **237** | **280** | **+43** |

**Rationale:** Makuhita exists from L10-24 in-game. The Def/SpD buffs let it take hits well enough to be fun before evolution. Atk boost makes Mach Punch and Fire Punch feel real at those levels.

### Hariyama

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 144 | 144 | — |
| Atk | 120 | **125** | +5 |
| Def | 60 | **65** | +5 |
| SpA | 40 | 40 | — |
| SpD | 60 | **65** | +5 |
| Spe | 50 | 50 | — |
| **BST** | **474** | **489** | **+15** |

**Rationale:** Hariyama's vanilla BST is already solid. Minor buffs across the board. Speed stays at 50 — Mach Punch priority is the intended solution. The 144 HP is the identity; don't dilute it.

## Ability Changes

**Ability 1:** Iron Fist — 1.2x damage on punching moves. Core identity — shapes the entire learnset.
**Ability 2:** Thick Fat — halves Ice and Fire damage. Classic Hariyama defensive option, fits the tank theme.
**Hidden:** Sheer Force — drops secondary effects for 1.3x damage. Alternative power option for triples stacking on Iron Fist punches.

## Learnset

### Makuhita (evolves L24)

| Level | Move | BP | Type | Iron Fist? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Tackle | 40 | Normal | No | Starter move |
| 1 | Focus Energy | — | Normal | — | Crit rate setup |
| 4 | Fake Out | 40 | Normal | No | Priority flinch + early STAB |
| 8 | **Mach Punch** | 40 | Fighting | **Yes (48), +1 priority** | Build turns on — Iron Fist priority STAB |
| 12 | **Fire Punch** | 75 | Fighting | **Yes (90)** | First elemental punch, coverage |
| 16 | Bulk Up | — | Fighting | — | Setup move, boosts Atk + Def |
| 21 | **Drain Punch** | 75 | Fighting | **Yes (90) + drain** | Sustain punch, build feels complete |

### Hariyama (from L24)

| Level | Move | BP | Type | Iron Fist? | Purpose |
|-------|------|----|------|-----------|---------|
| 24 | Force Palm | 60 | Fighting | No | Evolution reward — Fighting STAB + 30% paralysis |
| 27 | **Ice Punch** | 75 | Fighting | **Yes (90)** | Coverage vs Flying/Dragon/Grass |
| 33 | **Thunder Punch** | 75 | Electric | **Yes (90)** | Coverage vs Water/Flying |
| 36 | Knock Off | 65 | Dark | No | Utility — removes items |
| 42 | Close Combat | 120 | Fighting | No | Nuke option — no Iron Fist but raw power |
| 48 | **Focus Punch** | 150 | Fighting | **Yes (180)** | Endgame nuke — must not be hit this turn |

## The Math

With 125 Atk + Iron Fist (1.2x):
- **Mach Punch:** 40 × 1.2 = **48 eff, +1 priority** — always goes first
- **Fire Punch:** 75 × 1.2 = **90 eff** + 10% burn
- **Ice Punch:** 75 × 1.2 = **90 eff** + 10% freeze
- **Thunder Punch:** 75 × 1.2 = **90 eff** + 30% paralysis
- **Drain Punch:** 75 × 1.2 = **90 eff** + 50% HP restore
- **Focus Punch:** 150 × 1.2 = **180 eff** — requires no damage this turn

With Choice Band stacked: Drain Punch hits 90 × 1.5 = **135 eff BP + drain**. That's tanking while dealing massive damage.

With Life Orb stacked: Iron Fist 1.2 × Life Orb 1.3 = **1.56x total multiplier** on all punches.

## Core Strategy

1. Lead with **Mach Punch** for priority damage — bypass 50 Speed entirely
2. Use **Drain Punch** to sustain HP while dealing 90 effective BP + Choice Band power
3. Elemental punches (Fire/Ice/Thunder) provide coverage on everything Drain Punch doesn't hit
4. **Focus Punch** on a predicted switch or after a sub — 180 effective BP nuke
5. Bulk Up turn → Mach Punch to clean up weakened threats

## Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Choice Band** | Drain Punch + CB = 135 eff BP + drain — tank hits and deal massive damage simultaneously |
| #2 | **Life Orb** | 1.56x total multiplier on all punches, can switch moves. Best for coverage-heavy sets |
| #3 | **Assault Vest** | Covers the SpD weakness; 144 HP + AV = legitimately hard to kill specially |

## Team Synergy

- Pairs with fast sweepers who appreciate Mach Punch chip damage to finish things off
- Covers Rock types that threaten Wingull/Taillow
- Knock Off support removes Eviolites and defensive items from opponents
- Paralysis from Thunder Punch helps slower teammates outspeed

## Matchup Analysis

**Strong vs:** Normal, Dark, Rock, Steel, Ice (2× Iron Fist + type), Fighting
**Weak vs:** Psychic (4× threat), Flying (2×), Fairy
**Key threat:** Psychic types — Hariyama has no Psychic coverage and gets 2HKO'd by most Psychic moves despite 144 HP. Ghost types wall Mach Punch and Drain Punch.
