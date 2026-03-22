---
name: Anorith
dex_number: 347
status: implemented
ability: Tough Claws
role: Contact Wallbreaker
ideal_items: Choice Band, Life Orb, Assault Vest
design_doc: docs/game-design/anorith.md
---

# Anorith

## Build Identity
Anorith is a pre-evolution contact attacker that uses Tough Claws to boost every physical move it learns, hitting surprisingly hard at 95 Atk for a first-stage Pokemon. Stays at vanilla evolution level (L40) — learnset front-loads good contact moves so Anorith is viable throughout.

## Ability
**Tough Claws** — Contact moves deal 1.3x damage. Every attacking move in the kit is contact, so every move benefits.

## Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 45 | 45 | - |
| Atk | 95 | 95 | - |
| Def | 50 | 50 | - |
| SpA | 40 | 40 | - |
| SpD | 50 | 50 | - |
| Spe | 75 | 75 | - |
| **BST** | **355** | **355** | **-** |

## Learnset

| Level | Move | BP | Type | Contact? | Purpose |
|-------|------|----|------|----------|---------|
| 1 | Scratch | 40 | Normal | Yes (52) | Basic contact move |
| 1 | Harden | — | Normal | — | Early bulk |
| 8 | Fury Cutter | 40+ | Bug | Yes (52+) | First synergy move |
| 12 | Metal Claw | 50 | Steel | Yes (65) | Steel coverage |
| 18 | Rock Blast | 25x2-5 | Rock | No | Multi-hit Rock STAB |
| 24 | X-Scissor | 80 | Bug | Yes (156 w/ STAB) | Real Bug STAB mid-game |
| 30 | Aqua Jet | 40 | Water | Yes (52) | Priority — patches Speed |
| 36 | Stone Edge | 100 | Rock | Yes (195 w/ STAB) | Rock nuke before evolution |

## Ideal Items
1. Choice Band
2. Life Orb
3. Assault Vest

[Full design doc](docs/game-design/anorith.md)
