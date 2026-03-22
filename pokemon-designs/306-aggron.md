---
name: Aggron
dex_number: 306
status: implemented
ability: Rock Head
role: Recoil-Free Physical Wall
ideal_items: Choice Band, Leftovers, Assault Vest
evolution_line: [Aron, Lairon, Aggron]
design_doc: docs/game-design/aron.md
---

# Aggron

## Build Identity

Aggron is a slow physical wall that uses Rock Head to fire off recoil-free Head Smash (150 BP Rock STAB), Double-Edge (120 BP), and Take Down — paying no HP for any of them. Rock Polish at L36 gives it a surprise sweeper mode. The endgame payoff is Head Smash at L48: 150 BP Rock STAB with zero recoil.

## Ability

**Rock Head** — Prevents all recoil damage. Head Smash at 150 BP STAB costs nothing.

- Ability 2: Sturdy (survives a KO hit at full HP)
- Hidden: Filter (reduces super effective damage by 25% — patches 4x Fighting/Ground)

## Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | **80** | +10 |
| Atk | 110 | 110 | — |
| Def | 180 | 180 | — |
| SpA | 60 | 60 | — |
| SpD | 60 | **70** | +10 |
| Spe | 50 | 50 | — |
| **BST** | **530** | **550** | **+20** |

## Learnset

| Level | Move | BP | Type | Rock Head? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Tackle | 40 | Normal | — | Inherited |
| 1 | Harden | — | Normal | — | Inherited |
| 1 | Take Down | 90 | Normal | Free | Inherited |
| 1 | Rock Throw | 50 | Rock | — | Inherited |
| 1 | Metal Claw | 50 | Steel | — | Inherited |
| 1 | Iron Head | 80 | Steel | — | Inherited |
| 8 | Take Down | 90 | Normal | Free | Relearnable |
| 12 | Rock Throw | 50 | Rock | — | Relearnable |
| 16 | Metal Claw | 50 | Steel | — | Relearnable |
| 21 | Iron Head | 80 | Steel | — | Relearnable |
| 27 | Double-Edge | 120 | Normal | **Free** | Relearnable |
| 33 | Earthquake | 100 | Ground | — | Relearnable |
| 36 | **Rock Polish** | — | Rock | — | +2 Speed setup — 50→100 Spe |
| 42 | **Stone Edge** | 100 | Rock | — | Rock STAB, high crit ratio |
| 48 | **Head Smash** | 150 | Rock | **Free** | Endgame payoff — 150 BP STAB, zero recoil |

## The Math

| Move | BP | Rock Head | STAB | Effective |
|------|----|-----------|------|-----------|
| **Head Smash** | 150 | Free | ×1.5 | **225 effective** |
| **Stone Edge** | 100 | — | ×1.5 | **150 effective** |
| **Double-Edge** | 120 | Free | — | **120 effective** |
| **Iron Head** | 80 | — | ×1.5 | **120 effective** |

**Choice Band Head Smash:** 150 BP STAB off 165 Atk (110 × 1.5). One of the highest raw damage outputs in the game.

## Ideal Items

1. **Choice Band** — Head Smash at 150 BP STAB off 165 Atk. Devastating on the switch.
2. **Leftovers** — Passive recovery. 180 Def walls physical hits repeatedly; Leftovers extends longevity.
3. **Assault Vest** — Patches SpD (70→105 effective). Two-way wall against physical and special.
