---
name: Armaldo
dex_number: 348
status: designed
ability: Tough Claws
role: Contact Wallbreaker
ideal_items: Choice Band, Life Orb, Assault Vest
design_doc: docs/game-design/anorith.md
---

# Armaldo

## Build Identity
Armaldo is a slow, armored wallbreaker that uses Tough Claws (1.3x contact) to turn 125 Atk into devastating contact hits. Aqua Jet patches 45 Speed with priority.

## Ability
**Tough Claws** — Contact moves deal 1.3x damage. Shapes the entire moveset — you pick contact moves over non-contact alternatives.

## Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 75 | **85** | +10 |
| Atk | 125 | 125 | - |
| Def | 100 | 100 | - |
| SpA | 70 | 70 | - |
| SpD | 80 | 80 | - |
| Spe | 45 | 45 | - |
| **BST** | **495** | **505** | **+10** |

## Learnset

Inherits all Anorith moves (Scratch/Harden L1, Fury Cutter L8, Metal Claw L12, Rock Blast L16, X-Scissor L21, Aqua Jet L27, Stone Edge L33), then gains:

| Level | Move | BP | Type | Contact? | Purpose |
|-------|------|----|------|----------|---------|
| 42 | Aqua Tail | 90 | Water | Yes (117) | Water coverage upgrade |
| 46 | Brick Break | 75 | Fighting | Yes (97) | Fighting coverage, screen break |
| 52 | Liquidation | 85 | Water | Yes (110) | Best water move, may lower Def |
| 56 | Earthquake | 100 | Ground | No | Ground coverage |
| 62 | Swords Dance | — | Normal | — | Late-game setup |

## Ideal Items
1. Choice Band — 195 effective BP Stone Edge off 187 Atk
2. Life Orb — 1.3x stacks with Tough Claws for 1.69x on contact
3. Assault Vest — 80 SpDef becomes 120 effective, still hits hard

[Full design doc](docs/game-design/anorith.md)
