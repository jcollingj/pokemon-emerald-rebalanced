---
name: Armaldo
dex_number: 348
status: implemented
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

Armaldo evolves from Anorith at L40 (vanilla). Carries over Anorith's moves, then gets post-evolution power upgrades.

| Level | Move | BP | Type | Contact? | Purpose |
|-------|------|----|------|----------|---------|
| 1 | Scratch, Harden, Fury Cutter, Metal Claw, Rock Blast, X-Scissor | — | — | — | Carried from Anorith |
| 42 | Aqua Jet | 40 | Water | Yes (52) | +1 priority — patches 45 Speed |
| 48 | Stone Edge | 100 | Rock | Yes (195 w/ STAB) | Rock STAB nuke — post-evo payoff |
| 54 | Brick Break | 75 | Fighting | Yes (97) | Fighting coverage, breaks screens |
| 60 | Liquidation | 85 | Water | Yes (110) | Upgraded Water contact move |
| 66 | Swords Dance | — | Normal | — | Late-game setup option |

## Ideal Items
1. Choice Band — 195 effective BP Stone Edge off 187 Atk
2. Life Orb — 1.3x stacks with Tough Claws for 1.69x on contact
3. Assault Vest — 80 SpDef becomes 120 effective, still hits hard

[Full design doc](docs/game-design/anorith.md)
