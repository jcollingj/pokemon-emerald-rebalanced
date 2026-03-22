---
name: Hariyama
dex_number: 297
status: implemented
ability: Iron Fist
role: Iron Fist Punch Tank
ideal_items: Choice Band, Life Orb, Assault Vest
evolution_line: [Makuhita, Hariyama]
design_doc: docs/game-design/makuhita.md
---

# Hariyama

## Build Identity
Hariyama is a slow, unstoppable punch tank that uses Iron Fist to boost all elemental punches to 90 effective BP, with Mach Punch priority to bypass 50 Speed. 144 HP gives genuine bulk — it absorbs hits, drains HP back with Drain Punch, and nukes with Focus Punch. Different from Breloom's frail Technician approach: Hariyama is a brawler that doesn't flinch.

## Ability
**Iron Fist** — 1.2x damage on punching moves. Every key move in the kit benefits:
- Mach Punch (40 → 48 eff, +1 priority)
- Fire / Ice / Thunder Punch (75 → 90 eff each)
- Drain Punch (75 → 90 eff + 50% HP recovery)
- Focus Punch (150 → 180 eff — nuclear option)

## Stats

| Stat | Vanilla | Rebalanced |
|------|---------|------------|
| HP | 144 | 144 |
| Atk | 120 | 120 |
| Def | 60 | 60 |
| SpA | 40 | 40 |
| SpD | 60 | 60 |
| Spe | 50 | 50 |
| **BST** | **474** | **474** |

## Learnset

| Level | Move | BP | Type | Iron Fist? | Notes |
|-------|------|----|------|-----------|-------|
| 1 | Tackle | 40 | Normal | No | Starter |
| 1 | Focus Energy | — | Normal | — | Crit setup |
| 1 | Fake Out | 40 | Normal | No | Turn-1 flinch |
| 1 | Mach Punch | 40 | Fighting | **Yes (48 eff)** | Priority STAB, carries from Makuhita |
| 16 | Fire Punch | 75 | Fire | **Yes (90 eff)** | Coverage — Grass/Bug/Steel |
| 16 | Drain Punch | 75 | Fighting | **Yes (90 eff)** | Main STAB + sustain |
| 21 | **Ice Punch** | 75 | Ice | **Yes (90 eff)** | Coverage vs Flying/Ground/Dragon |
| 27 | **Thunder Punch** | 75 | Electric | **Yes (90 eff)** | Coverage vs Water/Flying |
| 33 | Knock Off | 65 | Dark | No | Item removal utility |
| 42 | Close Combat | 120 | Fighting | No | Raw STAB nuke |
| 48 | **Focus Punch** | 150 | Fighting | **Yes (180 eff)** | Endgame Iron Fist nuke |

## Key Math
- Drain Punch + Choice Band: **135 eff BP STAB that heals**
- Focus Punch + Life Orb: **234 eff BP** — one of the strongest hits in the game
- Mach Punch: priority guaranteed turn 1 after Fake Out locks setup

## Ideal Items
1. **Choice Band** — Drain Punch becomes 135 eff BP sustaining STAB. Safest set.
2. **Life Orb** — Flexible power for Fake Out → Mach Punch / Focus Punch sequences.
3. **Assault Vest** — Turn Hariyama into a 90 eff SpD mixed wall. Tank hits, punch back.
