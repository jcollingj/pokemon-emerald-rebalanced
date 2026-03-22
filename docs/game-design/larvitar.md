---
name: Larvitar
dex_number: 246
status: designed
ability: Sand Stream
role: Sand Bulky Attacker
ideal_items: Smooth Rock, Assault Vest, Choice Band
evolution_line: [Larvitar, Pupitar, Tyranitar]
---

# Larvitar / Pupitar / Tyranitar - Rebalance Notes

## Design Philosophy
Tyranitar is a sand-setting bulky attacker that becomes a special wall by existing. Sand Stream summons sandstorm on entry, which boosts Rock-type SpDef by 50% — turning Tyranitar's already solid 100 SpDef into an effective 150. The learnset leans into this by providing Stealth Rock for hazard control, strong Rock and Dark dual STAB, and enough coverage to threaten anything that tries to switch in. Tyranitar doesn't need to set up. It walks in, sand starts, rocks go up, and it starts swinging.

This is a pseudo-legendary (600 BST), so the stats barely need touching. The design work is in the learnset — making sure every move earns its slot and plays into the sand fantasy. Larvitar appears on Roxanne's gym team as a Sand Stream lead at L10, so even the base form needs to feel like a coherent build from the start.

## Ability Changes

- **Ability 1: Sand Stream** — Summons sandstorm for 5 turns on entry (8 with Smooth Rock). Core identity for the entire line. Larvitar gets it from L1, not just Tyranitar.
- **Ability 2: Guts** — 1.5x Atk when statused. Backup option for a status-absorber build.
- **Hidden: Unnerve** — Prevents foes from eating berries. Situational disruption.

## Stat Changes

### Larvitar

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | 50 | - |
| Atk | 64 | **68** | +4 |
| Def | 50 | 50 | - |
| SpA | 45 | 45 | - |
| SpD | 50 | 50 | - |
| Spe | 41 | 41 | - |
| **BST** | **300** | **304** | **+4** |

Minor Atk bump so Larvitar's early moves actually sting. It's on Roxanne's team at L10 — Rock Slide and Bite need to feel threatening, not ticklish. SpDef is already 50, but in sand it becomes effectively 75.

### Pupitar

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | 70 | - |
| Atk | 84 | **88** | +4 |
| Def | 70 | 70 | - |
| SpA | 65 | 65 | - |
| SpD | 70 | 70 | - |
| Spe | 51 | 51 | - |
| **BST** | **410** | **414** | **+4** |

Pupitar is the awkward middle child. Slight Atk boost to keep momentum through the mid-game grind. 70/70/70 defenses with sand SpDef boost (effectively 105 SpDef) means it's surprisingly hard to kill with special moves.

### Tyranitar

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 100 | 100 | - |
| Atk | 134 | 134 | - |
| Def | 110 | 110 | - |
| SpA | 95 | 95 | - |
| SpD | 100 | 100 | - |
| Spe | 61 | 61 | - |
| **BST** | **600** | **600** | **0** |

600 BST. No changes needed. Tyranitar is already a monster. 134 Atk hits like a truck, 100/110/100 bulk is excellent, and sandstorm pushes SpDef to an effective 150. The "buff" IS Sand Stream — it turns Tyranitar from a bulky attacker into a special wall that also hits for 134 Atk. Touching the stats would be gratuitous.

## Learnset

### Larvitar (vanilla evolves at L30)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Bite | 60 | Dark | Basic STAB coverage — Dark hits Psychic/Ghost |
| 1 | Leer | — | Normal | Utility — lowers Def for physical attacks |
| 8 | **Stealth Rock** | — | Rock | **First synergy move.** Hazards + Sand Stream chip = constant pressure. The build turns on. |
| 12 | **Rock Slide** | 75 | Rock | **Rock STAB.** 30% flinch chance rewards Larvitar's bulk — it survives to flinch. |
| 21 | **Rock Tomb** | 60 | Rock | Speed control — Larvitar/Pupitar are slow, so this helps fix unfavorable matchups. |
| 30 | **Crunch** | 80 | Dark | Evolution reward. Upgraded Bite — Dark STAB that lowers Def 20% of the time. |

### Pupitar (vanilla evolves at L55)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 36 | **Earthquake** | 100 | Ground | Massive coverage. Hits Steel/Fire/Electric/Poison/Rock. Ground STAB for Pupitar (Rock/Ground). |
| 42 | **Iron Head** | 80 | Steel | Coverage for Fairy/Ice/Rock. Flinch chance stacks with sand chip. |
| 48 | **Dragon Dance** | — | Dragon | Setup move available before final evolution. +1 Atk / +1 Spe — one DD and Tyranitar outspeeds almost everything. |
| 55 | **Stone Edge** | 100 | Rock | Evolution reward — the big Rock STAB. High crit rate. STAB → 150 effective. |

### Tyranitar

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 62 | **Giga Impact** | 150 | Normal | Final move. The nuke. When you absolutely need something dead this turn. |

## The Math

### Sand Stream SpDef Boost

In sandstorm, Rock-type Pokemon get 1.5x SpDef:

| Pokemon | Base SpDef | In Sand (×1.5) |
|---------|-----------|-----------------|
| Larvitar | 50 | **75** |
| Pupitar | 70 | **105** |
| Tyranitar | 100 | **150** |

Tyranitar with 100 HP / 110 Def / 150 effective SpDef is one of the bulkiest Pokemon in the game. It's tankier on the special side than Blissey is on the physical side.

### Tyranitar Damage Output (134 Atk)

| Move | BP | STAB | Effective |
|------|----|------|-----------|
| **Stone Edge** | 100 | ×1.5 | **150** |
| **Crunch** | 80 | ×1.5 | **120** |
| **Earthquake** | 100 | — | **100** |
| **Iron Head** | 80 | — | **80** |
| **Rock Slide** | 75 | ×1.5 | **112** |
| **Giga Impact** | 150 | — | **150** |

**Choice Band Stone Edge:** 150 effective BP off 201 Atk (134 × 1.5 Band). This OHKOs anything that doesn't resist Rock.

**After Dragon Dance (+1 Atk, +1 Spe):** 134 × 1.5 = 201 Atk, 61 × 1.5 = 91 Spe. Stone Edge at 150 effective off 201 Atk. Tyranitar outspeeds base 90s and kills them.

### Sand Chip Damage

Sandstorm deals 1/16 max HP per turn to non-Rock/Ground/Steel types. Combined with Stealth Rock (1/8 to 1/2 on switch-in), every switch costs the opponent:
- **Stealth Rock + Sand chip:** 6.25% + 12.5% = **18.75% minimum per switch** (more with SR weakness)
- **Flying type switching in:** 25% SR + 6.25% sand = **31.25% gone before attacking**
- **Fire/Ice/Bug type (4x SR weak):** 50% SR + 6.25% sand = **56.25% gone on entry**

This passive damage is the real power of the build. Tyranitar doesn't need to kill everything itself — sand + rocks whittle the opponent down while Tyranitar tanks hits.

## Ideal Items

1. **Smooth Rock** — Extends sandstorm from 5 to 8 turns. This is the default item and what Roxanne's Larvitar runs. More sand = more chip damage, more SpDef boosting, more pressure. 8 turns of sand + Stealth Rock means most teams lose 25-50% HP just from switching. The build's core item.
2. **Assault Vest** — 1.5x SpDef while only using attacking moves. Stacks with sand's 1.5x SpDef boost on Rock types. Tyranitar's effective SpDef becomes 100 × 1.5 (sand) × 1.5 (AV) = **225 effective SpDef.** At that point, nothing special kills it. Requires dropping Stealth Rock and Dragon Dance, so run a 4-attacks set: Stone Edge / Crunch / Earthquake / Iron Head.
3. **Choice Band** — 134 Atk × 1.5 = 201 effective. Stone Edge at 150 effective BP off 201 Atk is one of the hardest hits in the game. For players who want Tyranitar to be a wallbreaker, not a wall.

## Core Strategy

### The Sand Fortress
1. Lead Tyranitar (or switch in). Sand Stream activates — sandstorm is now up for 5 turns (8 with Smooth Rock).
2. Stealth Rock on the first turn. Now every switch costs the opponent HP from rocks + sand chip.
3. Start attacking with Stone Edge (Rock STAB) or Crunch (Dark STAB). Pick the move that hits harder.
4. If they send in something faster, Tyranitar tanks it — 100/110/150(sand) bulk means it survives almost anything.
5. If you need to sweep late-game, Dragon Dance (learned at L48 as Pupitar) turns Tyranitar into a 201 Atk / 91 Spe monster.

### When to Use Tyranitar
- **Lead:** Set sand + Stealth Rock, then start attacking. The passive damage adds up fast.
- **Special wall:** Switch in on special attackers. 150 effective SpDef in sand means even super effective special moves barely scratch it.
- **Late-game sweeper:** Dragon Dance (learned at L48 as Pupitar, carried into Tyranitar) + Stone Edge/Crunch cleans weakened teams.
- **NOT a speed demon.** 61 Speed means Tyranitar gets outsped by most things before Dragon Dance. It wins by tanking, not racing.

### Roxanne's Larvitar (L10)
Roxanne uses Larvitar as a Sand Stream lead with Smooth Rock:
- **Stealth Rock** — Hazards from turn 1
- **Rock Slide** — STAB + flinch chance
- **Bite** — Dark coverage + flinch
- **Protect** — Stalls for extra sand chip turns

This teaches the player what Sand Stream does before they ever catch one. The sand damages their team, Stealth Rock punishes switching, and Rock Slide/Bite threaten damage. It's a mini-boss that demonstrates the build.

## Team Synergy

- **Sand Force teammates** — Pokemon with Sand Force (1.3x Rock/Ground/Steel moves in sand) love Tyranitar's sand. Steelix, Excadrill, Garchomp become terrifying alongside it.
- **Ground types** — Immune to sand chip and Electric moves that threaten Tyranitar. Swampert, Claydol, Flygon.
- **Steel types** — Immune to sand chip, resist Fairy/Ice that threaten Tyranitar. Metagross, Magneton, Aggron.
- **Stealth Rock stacking** — Tyranitar sets rocks, teammates exploit them. Fast U-Turn users force switches into rocks + sand.
- **Pairs poorly with Rain/Sun teams** — Sand Stream overwrites other weather. Don't pair with Pelipper (Drizzle) or Torkoal (Drought).

## Matchup Analysis

**Strong vs:** Psychic (Crunch STAB), Ghost (Crunch STAB), Fire (Earthquake + sand SpDef tanks their hits), Flying (Stone Edge STAB), Ice (Iron Head + sand SpDef), Normal (neutral, Tyranitar just out-bulks them).

**Weak vs:** Fighting (4x weak — the biggest threat by far), Water (2x weak, especially physical Water like Azumarill), Ground (2x weak, Earthquake from other users), Steel (resists both STABs, though Earthquake covers), Fairy (2x weak, Iron Head helps but Tyranitar is still slow).

**Key vulnerability:** 4x Fighting weakness. A single Close Combat or Mach Punch can end Tyranitar regardless of bulk. Always have a Fighting check on the team (Togekiss, Crobat, Gardevoir). The other weaknesses are manageable because sand SpDef boost lets Tyranitar tank most special hits, but physical Fighting moves go right through it.
