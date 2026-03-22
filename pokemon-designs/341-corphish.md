---
name: Corphish
dex_number: 341
status: implemented
ability: Sheer Force
role: Setup Bruiser (pre-evo)
ideal_items: Life Orb, Eviolite, Sitrus Berry
evolution_line: [Corphish, Crawdaunt]
design_doc: docs/game-design/corphish.md
---

# Corphish

## Build Identity
Corphish is a Water/Dark bruiser pre-evo that uses Sheer Force to boost Bite, Bubble Beam, and Rock Smash. Build turns on at L8 with Bite (60 -> 78 -> 117 STAB). Evolves at 30 into Crawdaunt.

## Ability
**Sheer Force** — Moves with secondary effects deal 1.3x but lose the effect. Shapes move choices early.

## Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 43 | 43 | - |
| Atk | 80 | **85** | +5 |
| Def | 65 | 65 | - |
| SpA | 50 | 50 | - |
| SpD | 35 | 35 | - |
| Spe | 35 | 35 | - |
| **BST** | **308** | **313** | **+5** |

## Learnset

| Level | Move | BP | Type | Sheer Force? | Purpose |
|-------|------|----|------|-------------|---------|
| 1 | Vise Grip | 55 | Normal | No | Claw identity |
| 1 | Leer | — | Normal | — | Utility |
| 8 | Bite | 60 | Dark | Yes (117 STAB) | Build turns on |
| 12 | Rock Smash | 40 | Fighting | Yes (52) | Coverage |
| 16 | Bubble Beam | 65 | Water | Yes (127 STAB) | Water STAB |
| 20 | Knock Off | 65 | Dark | No | Utility |
| 24 | Harden | — | Normal | — | Defensive |
| 27 | Crabhammer | 100 | Water | No | Big STAB nuke |

[Full design doc](docs/game-design/corphish.md)
