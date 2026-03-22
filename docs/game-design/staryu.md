---
name: Staryu / Starmie
dex_numbers: [120, 121]
status: designed
ability: Illuminate (reworked)
role: Beam Mage / Light Cannon
evolution_line: [Staryu, Starmie]
---

# Staryu / Starmie — Rebalance Notes

## Build Identity

**Starmie is a living light cannon that fires beams in every direction. Illuminate (reworked) boosts all beam and light-based moves by 1.3x — turning Starmie's natural coverage kit into a coherent, powerful identity. Every attack is a laser.**

The key tension: Psychic and Surf are *not* boosted (they're not beams). Starmie has to choose between its boosted beam coverage and its stronger but unboosted STAB moves. That choice is what makes it interesting.

---

## Ability

### Ability 1: Illuminate (REWORKED)
**New Effect:** Beam and light-based moves deal 1.3x damage.

**Boosted moves:**
| Move | Base BP | Boosted BP | Notes |
|------|---------|------------|-------|
| Psybeam | 65 | 84.5 | Psychic-type beam — early synergy |
| Power Gem | 80 | 104 | Rock-type beam — early coverage |
| Aurora Beam | 65 | 84.5 | Ice-type beam — level-up thematic |
| Signal Beam | 75 | 97.5 | Bug-type beam — level-up coverage |
| Flash Cannon | 80 | 104 | Steel-type beam — Starmie exclusive |
| Charge Beam | 50 | 65 | +SpA on hit — setup option |
| Ice Beam | 90 | 117 | TM — premium Water coverage (not STAB) |
| Solar Beam | 120 | 156 | TM — optional nuke |

**NOT boosted (forces moveset decisions):**
- Psychic — strong but not a beam
- Surf / Hydro Pump — not beams
- Thunderbolt — not a beam

**Design note:** This is the "every move benefits" pattern (like Blastoise/Mega Launcher), but applied to type-diverse coverage. Starmie can run 4 different beam types with full Illuminate synergy. The unboosted Surf/Psychic tension gives it real decision-making depth.

### Ability 2: Natural Cure
Status heals on switch-out. Solid secondary option for a hit-and-run pivot playstyle.

### Hidden Ability: Analytic
1.3x damage when moving last. Creates an alt build — intentionally contradicts Starmie's 115 Speed, so you'd need a Speed-lowering setup or Trick Room to get value.

---

## Stats

### Staryu (Base Form)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | **45** | +15 |
| Attack | 45 | 45 | — |
| Defense | 55 | 55 | — |
| Sp.Attack | 70 | **75** | +5 |
| Sp.Defense | 55 | 55 | — |
| Speed | 85 | 85 | — |
| **BST** | **340** | **355** | **+15** |

**Rationale:** Vanilla Staryu's 30 HP makes it nearly unusable before evolving. The HP bump to 45 gives it enough bulk to actually use its moves. SpA nudge to 75 makes Psybeam and Power Gem hit noticeably harder with Illuminate online. Speed stays at 85 — it's fast for a base form and that should feel good.

### Starmie (Final Form)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | — |
| Attack | 75 | 75 | — |
| Defense | 85 | 85 | — |
| Sp.Attack | 100 | **115** | +15 |
| Sp.Defense | 85 | 85 | — |
| Speed | 115 | 115 | — |
| **BST** | **520** | **535** | **+15** |

**Rationale:** The symmetric 115 SpA / 115 Speed creates a clean, satisfying identity. With Illuminate, effective SpA on beam moves reaches ~150 — hitting like a Choice Specs user without locking into one move. Choice Specs pushes this to ~225 effective on beam moves, which is genuinely scary math.

**Evolution:** Water Stone (vanilla — unchanged)

---

## Learnsets

### Staryu

| Level | Move | Type | BP | Illuminate? | Purpose |
|-------|------|------|----|-------------|---------|
| 1 | Water Gun | Water | 40 | No | Starter STAB |
| 1 | Rapid Spin | Normal | 50 | No | Utility / hazard removal |
| 8 | Psybeam | Psychic | 65 | **YES (84.5)** | First synergy — build turns on |
| 12 | Power Gem | Rock | 80 | **YES (104)** | Second synergy — real coverage |
| 16 | Recover | Normal | — | — | Key utility before Water Stone |
| 21 | Aurora Beam | Ice | 65 | **YES (84.5)** | Ice coverage beam |
| 27 | Signal Beam | Bug | 75 | **YES (97.5)** | Bug beam — full coverage set |

**Design note:** By level 12, Staryu has two Illuminate-boosted moves of different types. By level 27 it has four. The build feels real by the time most players use a Water Stone.

### Starmie

Starmie inherits all Staryu moves, then learns:

| Level | Move | Type | BP | Illuminate? | Purpose |
|-------|------|------|----|-------------|---------|
| 1 | (inherits Staryu kit) | | | | |
| 21 | Surf | Water | 90 | No | Strong Water STAB — tension vs beam coverage |
| 27 | Psychic | Psychic | 90 | No | Strong Psychic — tension vs Psybeam |
| 33 | Flash Cannon | Steel | 80 | **YES (104)** | Steel beam — excellent coverage |
| 36 | Charge Beam | Electric | 50 | **YES (65+)** | Setup option with SpA boost chance |
| 42 | Hydro Pump | Water | 110 | No | Late nuke — forces Water beam vs Surf/Pump choice |
| 48 | Cosmic Power | Psychic | — | — | Defensive late-game option |

**TM coverage (teachable, not level-up):** Ice Beam, Thunderbolt, Solar Beam, Blizzard

---

## Ideal Items

| Rank | Item | Reasoning |
|------|------|-----------|
| #1 | **Choice Specs** | 115 SpA × 1.5 × 1.3 Illuminate = ~224 effective SpA on beams. Nuclear. |
| #2 | **Life Orb** | Power on all moves (beam and non-beam), stays flexible |
| #3 | **Expert Belt** | Reward for running 4-type beam coverage — hits super effectively often |

**Why Choice Specs is #1:** Starmie's speed (115) means it often moves first anyway. Locking into beam moves is fine because you have 4 different beam types and almost nothing resists all of them.

---

## Core Strategy

**The Beam Mage:**
1. Come in on a favorable matchup or after a KO
2. Fire the right beam for the type matchup — Illuminate makes every option dangerous
3. If opponent Toxics or Paralyzes: switch out, Natural Cure (if using ability 2)
4. Late game: Charge Beam fishing for SpA boosts turns a sweeper into an escalating threat

**The moveset tension:**
- Psybeam (84.5 effective) vs Psychic (90, no boost) — Psybeam wins with Illuminate at 115 SpA
- Ice Beam (117 effective) vs Surf (90, no boost) — Ice Beam is stronger for neutral coverage
- Signal Beam (97.5) for Bug/Dark/Psychic — great mid-tier coverage that hits surprisingly often

**Why 4-type beam coverage works:**
- Psybeam: Ghost, Poison, Fighting
- Power Gem / Flash Cannon: Ice, Fire, Fairy, Rock
- Aurora Beam / Ice Beam: Dragon, Flying, Grass, Ground
- Signal Beam: Psychic, Dark, Grass
- Almost no type resists three of these at once

---

## Team Synergy

**Works well with:**
- Rapid Spin users (Staryu itself provides this — pass to teammates)
- Fire types (Flash Cannon/Steel coverage handles Rock weakness)
- Fighting types (Starmie covers Psychic/Flying matchups)
- Paralysis spreaders (slows opponents down to let Starmie outspeed more)

**Covers:**
- Dragon types (Ice Beam / Aurora Beam)
- Psychic types (Signal Beam, Power Gem)
- Rock types (Surf + Power Gem)

---

## Matchups

**Strong vs:**
- Dragon (Ice Beam / Aurora Beam — beam-boosted)
- Psychic (Signal Beam — super effective + boosted)
- Rock/Fire (Surf, Power Gem)
- Steel (Charge Beam + SpA setup or Flash Cannon coverage)

**Weak vs:**
- Ghost types (limited options)
- Electric types (4x if in rain, 2x normally)
- Grass types (common wall breakers)
- Blissey/Chansey tier special walls (takes the chip, 60 HP isn't much)

**Niche vs other Water types in this game:**
- Squirtle/Blastoise: Pulse mage — different beam set, bulkier, slower
- Tentacool: Rain pivot, defensive
- Horsea: Rain sweeper (Swift Swim)
- **Starmie:** Offensive beam mage, fastest Water in the game, 4-type coverage

---

## Thematic Justification

Staryu and Starmie are explicitly described as shooting beams of light from their gems. The "living light cannon" identity fits perfectly:
- The core gem pulsing = Power Gem
- Starfish arms = eight directions of light beams
- Psychic energy = Psybeam (not Psychic — it's literally a beam)
- Aurora of light = Aurora Beam
- Signal light = Signal Beam

The Illuminate name originally referred to lighting up caves (useless). Reworking it to "your light beams hit harder" is thematically coherent and mechanically interesting.

---

## Design Checklist

- [x] Ability chosen and justified (Illuminate rework — beam boost)
- [x] Synergy moves show up early (Psybeam L8, Power Gem L12)
- [x] Stats reinforce build role (115/115 SpA+Speed)
- [x] Learnset follows standard schedule
- [x] Clear niche — Beam Mage, distinct from all other Water types in game
- [x] Core strategy explainable in 2-3 sentences
