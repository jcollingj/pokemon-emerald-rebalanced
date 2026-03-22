---
name: Crawdaunt
dex_number: 342
status: implemented
ability: Sheer Force
role: Setup Bruiser
ideal_items: Life Orb, Choice Band, Sitrus Berry
evolution_line: [Corphish, Crawdaunt]
design_doc: docs/game-design/corphish.md
---

# Crawdaunt

## Build Identity
Crawdaunt is a slow setup bruiser that uses Sheer Force + Life Orb (no recoil on boosted moves) for a free 1.69x damage multiplier. Swords Dance + Aqua Jet patches 55 Speed with priority. Differentiates from Sharpedo (fast glass cannon) by being a tanky sweeper that gets stronger each turn.

## Ability
**Sheer Force** — Moves with secondary effects deal 1.3x but lose the effect. Life Orb recoil is suppressed on boosted moves. This is the core engine.

## Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 63 | **73** | +10 |
| Atk | 120 | 120 | - |
| Def | 85 | **90** | +5 |
| SpA | 90 | **70** | -20 |
| SpD | 55 | **60** | +5 |
| Spe | 55 | 55 | - |
| **BST** | **468** | **468** | **0** |

## Learnset

| Level | Move | BP | Type | Sheer Force? | Purpose |
|-------|------|----|------|-------------|---------|
| 30 | Aqua Jet | 40 | Water | No | +1 priority |
| 33 | Crunch | 80 | Dark | Yes (156 STAB) | Dark STAB nuke |
| 36 | Swords Dance | — | Normal | — | Setup move |
| 39 | Liquidation | 85 | Water | Yes (166 STAB) | Primary Water STAB |
| 42 | Night Slash | 70 | Dark | No | Crit alt Dark STAB |
| 45 | Rock Slide | 75 | Rock | Yes (97) | Coverage |
| 48 | Dragon Claw | 80 | Dragon | No | Dragon coverage |

## Key Math
Life Orb Liquidation: 85 x 1.3 (SF) x 1.5 (STAB) x 1.3 (LO) = **215 effective BP, zero recoil**
After Swords Dance: 215 BP off 240 Atk. OHKOs most neutral targets.

## Ideal Items
1. Life Orb — 1.69x free damage on Sheer Force moves
2. Choice Band — Immediate wallbreaking, no setup needed
3. Sitrus Berry — Survive to set up Swords Dance

[Full design doc](docs/game-design/corphish.md)
