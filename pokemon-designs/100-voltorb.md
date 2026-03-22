---
name: Voltorb
dex_number: 100
status: implemented
ability: Galvanize
role: Electric Detonator (pre-evolution)
design_doc: docs/game-design/voltorb.md
evolution_line: [Voltorb, Electrode]
ideal_items: Choice Specs, Choice Band, Life Orb
---

# Voltorb

## Build Identity
Voltorb is a fast Electric detonator that uses Galvanize to turn Self-Destruct into a 234 effective BP Electric nuke. The build comes online immediately at L12 — anything that doesn't resist Electric and can't outspeed gets blown up.

## Ability
**Galvanize** — Normal-type moves become Electric and deal 1.2× damage. Tackle, Self-Destruct, Return all become STAB Electric hits. Ground types are immune.

## Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | 50 | +10 |
| Atk | 30 | 40 | +10 |
| Def | 50 | 55 | +5 |
| SpA | 55 | 65 | +10 |
| SpD | 55 | 60 | +5 |
| Spe | 100 | 110 | +10 |
| **BST** | **330** | **380** | **+50** |

## Learnset

| Level | Move | BP | Type | Galvanize? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Charge | — | Electric | No | SpA setup |
| 1 | Tackle | 40 | Normal | **Yes → 72 eff.** | Early Electric STAB |
| 8 | **Thunder Wave** | — | Electric | — | Speed control support |
| 10 | Sonic Boom | 20 (fixed) | Normal | No | Chip damage utility |
| 12 | **Self-Destruct** | 130 | Normal | **Yes → 234 eff.** | Synergy move — build turns on |
| 16 | Spark | 65 | Electric | No | Reliable STAB, 30% paralysis |
| 21 | Screech | — | Normal | No | -2 Def setup for bigger Explosion |
| 24 | **Electro Ball** | Var | Electric | No | Speed-scaled STAB |
| 27 | **Discharge** | 80 | Electric | No | AoE spread damage |
