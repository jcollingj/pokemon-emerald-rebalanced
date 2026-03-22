---
name: Electrode
dex_number: 101
status: implemented
ability: Galvanize
role: Electric Detonator
design_doc: docs/game-design/voltorb.md
evolution_line: [Voltorb, Electrode]
ideal_items: Choice Specs, Choice Band, Life Orb
---

# Electrode

## Build Identity
Electrode is the fastest Electric-type in the game (150 Speed). It uses Galvanize to convert Explosion into a 450 effective BP Electric-type nuke — the only Pokemon that can fire an Electric Explosion. Ground types are the natural counter (Electric immune). 150 Speed + Electro Ball means special sets are devastating against anything slower than ~130 Speed (i.e., almost everything).

## Ability
**Galvanize** — Normal-type moves become Electric and deal 1.2× damage. Explosion (250), Double-Edge (120), Return all become Electric STAB hits. Ground immunity is the counterplay.

- **Ability 2: Soundproof** — Immune to sound moves (Hyper Voice, Boomburst, Screech). Thematic and useful vs sound-heavy teams.
- **Hidden: Electric Surge** — Sets Electric Terrain on entry. Boosts Electric moves 30%, prevents sleep. Strong doubles lead.

## Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | — |
| Atk | 50 | 65 | +15 |
| Def | 70 | 70 | — |
| SpA | 80 | 100 | +20 |
| SpD | 80 | 80 | — |
| Spe | 150 | 150 | — |
| **BST** | **490** | **520** | **+30** |

## Learnset

### Inherited from Voltorb
| Level | Move | BP | Type | Galvanize? |
|-------|------|----|------|-----------|
| 1 | Charge | — | Electric | No |
| 1 | Tackle | 40 | Normal | Yes |
| 8 | Thunder Wave | — | Electric | — |
| 10 | Sonic Boom | — | Normal | No |
| 12 | Self-Destruct | 130 | Normal | **Yes → 234 eff.** |
| 16 | Spark | 65 | Electric | No |
| 21 | Screech | — | Normal | No |
| 24 | Electro Ball | Var | Electric | No |
| 27 | Discharge | 80 | Electric | No |

### Electrode-only (post-evolution L30)
| Level | Move | BP | Type | Galvanize? | Purpose |
|-------|------|----|------|-----------|---------|
| 30 | **Light Screen** | — | Psychic | No | Evolution reward — screens support |
| 33 | **Thunderbolt** | 90 | Electric | No | Strong reliable STAB off 100 SpA |
| 36 | **Double-Edge** | 120 | Normal | **Yes → 216 eff.** | Reusable Explosion alternative |
| 40 | Reflect | — | Psychic | No | Completes screens set |
| 44 | **Thunder** | 110 | Electric | No | Max-power special STAB |
| 48 | **Explosion** | 250 | Normal | **Yes → 450 eff.** | The finale — Electric Explosion |

## The Math

| Move | Effective BP | Notes |
|------|-------------|-------|
| **Explosion** | **450** | Physical. Ground immune. |
| **Double-Edge** | **216** | Physical. 33% recoil. |
| **Self-Destruct** | **234** | Physical. Ground immune. |
| **Electro Ball** | **225** | Special. vs 50 Speed target. |
| **Thunderbolt** | **135** | Special. Reliable. |

## Ideal Items

1. **Choice Specs** — 100 SpA × 1.5 = 150. Electro Ball against slower targets = 100-150 BP off 150 SpA. Consistent special nuke. Best set for sustained offense.
2. **Choice Band** — Band Explosion: 450 effective BP Electric. Ground types block it — bring answers. Surprise one-shot closer.
3. **Life Orb** — Flexible mixed set: Thunderbolt/Electro Ball for special, Double-Edge for physical, save Explosion for the right moment.

## Core Strategy
1. Switch in (150 Speed — goes first almost always)
2. Option A: Set Light Screen/Reflect + Explosion on turn 2-3
3. Option B: Choice Specs Electro Ball to outspeed and nuke
4. Exit via Explosion for maximum damage
5. Ground types = forced switch. Have answers.

## Matchups
**Strong vs:** Flying, Water, Dragon, anything slower than 150 (everything except Ninjask/Deoxys-S tier)
**Weak vs:** Ground (immune to Electric + Galvanize Explosion), Grass (resists Electric)
**Counterplay:** Ground immunity is the intentional check. Screech → Explosion can still damage the switch-in on the next turn.
