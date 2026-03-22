---
name: Alakazam
dex_number: 65
status: implemented
ability: Magic Guard
role: Life Orb Assassin (nuclear sweeper)
evolution_line: [Abra, Kadabra, Alakazam]
design_doc: docs/game-design/abra.md
---

# Alakazam

## Build Identity
Elite special sweeper. 135 SpA + 120 Speed. Magic Guard + Life Orb = 175 effective SpA with no recoil. Gets Nasty Plot (L42) for nuclear setup and Future Sight (L48) as a punish tool.

## Stats (BST: 500)
HP 55 | Atk 50 | Def 45 | SpA 135 | SpD 95 | Spe 120

## Abilities
- **Magic Guard** (primary): Immune to indirect damage — Life Orb recoil, hazards, weather, status chip
- **Inner Focus** (alt): Flinch immunity
- **Synchronize** (hidden): Reflects status conditions

## Signature Build
```
Alakazam @ Life Orb
Ability: Magic Guard
- Psychic
- Shadow Ball
- Focus Blast
- Calm Mind / Recover / Dazzling Gleam
```
**Effective SpA: 175** (135 × 1.3 Life Orb, zero recoil)

## Learnset
| Level | Move |
|-------|------|
| 1 | Teleport, Kinesis, Confusion |
| 8 | Calm Mind |
| 12 | Psybeam |
| 16 | Shadow Ball |
| 20 | Recover |
| 24 | Dazzling Gleam |
| 27 | Psychic |
| 33 | Energy Ball |
| 36 | Focus Blast |
| 42 | **Nasty Plot** (+2 SpA setup — nuclear) |
| 48 | **Future Sight** (120 BP delayed nuke) |

## Damage Math
| Move | Base | Life Orb | STAB | Total |
|------|------|----------|------|-------|
| Psychic | 90 | ×1.3 | ×1.5 | **175 power** |
| Shadow Ball | 80 | ×1.3 | — | 104 power |
| Focus Blast | 120 | ×1.3 | — | 156 power |
| Future Sight | 120 | ×1.3 | ×1.5 | **234 power** |

## Evolution
Final stage. Evolved from Kadabra at Level 36.
