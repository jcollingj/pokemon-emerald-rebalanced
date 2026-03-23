---
name: Electrike/Manectric
dex_number: 309/310
status: designed
ability: Surge Surfer (recommended)
role: Terrain Sweeper
evolution_line: [Electrike, Manectric]
ideal_items: Terrain Extender, Choice Specs, Life Orb
---

# Electrike / Manectric — Design Brainstorm

## Context

- **Route 110**, captured at levels 12–13. First wild Electric type the player encounters.
- **Previews Wattson** — the L4 Dynamo Badge gym leader.
- Evolves at **L26** (vanilla, unchanged).
- Vanilla Manectric is already a legit offensive threat: **105 SpA / 105 Speed** — one of the fastest special attackers available through Segment 3.
- Existing Electric niches to avoid duplicating:
  - **Pikachu** — item-dependent pivot (Transistor + Light Ball glass cannon, Volt Switch momentum)
  - **Electrode** — fastest in game, Galvanize detonator (Electric-type Explosion)
  - **Plusle** — slow doubles artillery cannon (Plus partner dependency with Minun)
  - **Minun** — dedicated doubles support (Follow Me bodyguard)

---

## Vanilla Stats

| Stat | Electrike | Manectric |
|------|-----------|-----------|
| HP | 40 | 70 |
| Atk | 45 | 75 |
| Def | 40 | 60 |
| SpA | 65 | 105 |
| SpD | 40 | 60 |
| Spe | 65 | 105 |
| **BST** | **295** | **475** |

---

## Option 1 — Intimidate Pivot (Volt Switch Debuffer)

### Ability: Intimidate
On switch-in, drops the opponent's Attack by one stage. Reactivates every time Manectric switches in — loops with Volt Switch.

### Build Identity
A defensive pivot that abuses the Intimidate + Volt Switch loop to perpetually debuff physical threats while dealing Electric chip damage and maintaining positional control.

### Signature Interaction
**Intimidate + Volt Switch**: Switch Manectric in → Atk −1 on opponent → use Volt Switch (deals Electric damage, switches out) → bring Manectric back in → Atk −1 again. Physical attackers become completely neutered across a long fight.

### Stat Changes (Balanced for Pivot Role)

| Stat | Electrike Vanilla | Rebalanced | Manectric Vanilla | Rebalanced |
|------|-------------------|------------|-------------------|------------|
| HP | 40 | **55** | 70 | **80** |
| Atk | 45 | 50 | 75 | 75 |
| Def | 40 | **50** | 60 | **75** |
| SpA | 65 | 65 | 105 | **100** |
| SpD | 40 | **50** | 60 | **75** |
| Spe | 65 | 75 | 105 | 100 |
| **BST** | **295** | **345** | **475** | **505** |

Defense and HP bumped so Manectric actually survives the hits it takes between pivots. SpA and Speed slightly trimmed versus vanilla to pay for the bulk.

### Ideal Items
1. **Assault Vest** — SpD boost lets Manectric pivot into special hits too. AV + Intimidate = threatens both damage categories.
2. **Leftovers** — Passive recovery on a pivot makes each switch-in net positive.
3. **Choice Specs** — If you accept the switch cost and just want maximum Volt Switch damage per pivot.

### Learnset

| Level | Move | Type | Cat | BP | Purpose |
|-------|------|------|-----|----|---------|
| 1 | ThunderShock | Electric | Special | 40 | Basic STAB |
| 1 | Growl | Normal | Status | — | Atk drop (mirrors Intimidate, early game preview) |
| 8 | Thunder Wave | Electric | Status | — | Speed control — the build pivots, so you need speed advantage |
| 12 | Bite | Dark | Physical | 60 | Thematic (lightning dog) + Dark coverage, previews Volt Switch role |
| 16 | Spark | Electric | Physical | 65 | 30% paralysis, physical STAB option |
| 21 | Howl | Normal | Status | — | Atk +1 self-buff; Manectric's Atk isn't a threat, but sets up Volt Switch chip |
| 26 | **Volt Switch** | Electric | Special | 70 | *Evolution reward* — the core pivot move unlocks on evolution |
| 27 | Discharge | Electric | Special | 80 | AoE damage when staying in; 30% paralysis |
| 33 | Crunch | Dark | Physical | 80 | Secondary coverage; 20% Def drop synergizes with pivot aggression |
| 36 | Agility | Psychic | Status | — | Speed +2 when you want to sweep instead of pivot |
| 42 | Thunderbolt | Electric | Special | 90 | Main STAB nuke once at full strength |
| 48 | Thunder | Electric | Special | 110 | Late-game max power option |

### Pros
- Unique niche: the only Electric pivot on the team (Pikachu is a pivot too, but offensively; Manectric is defensively). The Intimidate loop is a real competitive archetype.
- Genuinely supports team — Intimidate checks physical sweepers that would otherwise threaten your setup mons.
- Works in singles AND doubles.
- Exciting the whole game, not just at full power.

### Cons
- Less flashy damage ceiling. A pivoting Manectric is doing support work, not nuking.
- Intimidate is "passive on entry" — the SKILL.md flags reactive abilities as lower quality. This partially applies here, though Volt Switch makes it active rather than purely reactive.
- Competes with Pikachu for the Volt Switch pivot slot conceptually.

---

## Option 2 — Reckless Recoil Cannon (Physical All-In)

### Ability: Reckless
Boosts the power of recoil-cost moves by 20%. Wild Charge (90 BP + 25% recoil) becomes 108 effective BP. Head Smash (150 BP + 50% recoil) becomes 180 effective BP.

### Build Identity
A fast physical wrecking ball that hits first, hits hard, and accepts the recoil cost — unique in that it's the only *physically-oriented* Electric type, flipping Manectric's vanilla SpA identity entirely.

### Signature Interaction
**Reckless + Wild Charge**: 90 × 1.2 × 1.5 STAB = **162 effective BP** off 110 Atk at 115 Speed. Physical Electric coverage with this power level is unprecedented in the roster. Head Smash covers the Rock slot for massive neutral coverage.

### Stat Changes (Physical-Shifted)

| Stat | Electrike Vanilla | Rebalanced | Manectric Vanilla | Rebalanced |
|------|-------------------|------------|-------------------|------------|
| HP | 40 | 45 | 70 | 70 |
| Atk | 45 | **65** | 75 | **110** |
| Def | 40 | 40 | 60 | 60 |
| SpA | 65 | **45** | 105 | **70** |
| SpD | 40 | 40 | 60 | 60 |
| Spe | 65 | **80** | 105 | **115** |
| **BST** | **295** | **315** | **475** | **485** |

SpA gutted, Atk maxed. Manectric is now a 110/115 physical attacker — faster than almost anything, hits like a truck, and dies to itself over time.

### Ideal Items
1. **Choice Band** — 110 × 1.5 = 165 effective Atk. Wild Charge at 162 effective BP off this: one-shots or craters most mid-game threats.
2. **Life Orb** — Flexibility to mix Wild Charge, Head Smash, and Thunder Fang. Stacks recoil fast but you aren't locked in.
3. **Focus Sash** — Survive one hit to guarantee one Wild Charge. For when you lead Manectric against a frail target.

### Learnset

| Level | Move | Type | Cat | BP | Purpose |
|-------|------|------|-----|----|---------|
| 1 | Tackle | Normal | Physical | 40 | Basic physical STAB preview |
| 1 | Leer | Normal | Status | — | Def drop; sets up Wild Charge |
| 8 | Thunder Fang | Electric | Physical | 65 | First synergy move — physical Electric STAB with Reckless theme |
| 12 | Bite | Dark | Physical | 60 | Coverage + thematic; Dark coverage for Psychics/Ghosts |
| 16 | Spark | Electric | Physical | 65 | 30% paralysis; paralysis + 115 Speed = near-guaranteed first strike |
| 21 | Howl | Normal | Status | — | +1 Atk self-setup before going all-in |
| 26 | **Wild Charge** | Electric | Physical | 90 | *Evolution reward* — the Reckless payoff unlocks here |
| 27 | Crunch | Dark | Physical | 80 | Strong physical Dark coverage |
| 33 | Head Smash | Rock | Physical | 150 | Reckless Head Smash = 180 effective BP. Obliterates coverage gaps |
| 36 | Swords Dance | Normal | Status | — | +2 Atk; one SD + Reckless Wild Charge is a one-shot range on basically everything |
| 42 | Double-Edge | Normal | Physical | 120 | Reckless recoil coverage; pure Normal coverage |
| 48 | Close Combat | Fighting | Physical | 120 | Rounds out coverage; Fighting fills every remaining gap |

### Pros
- **Completely unique** — the only Physical Electric type in the game. Every other Electric is special-oriented. Players who like physical sweepers have no comparable option.
- The Reckless recoil math is genuinely exciting. Wild Charge at 162 effective BP off 110 Atk is terrifying.
- 115 Speed outspeeds the entire mid-game field — hits before anything can respond.
- Strong standalone identity; doesn't need a partner, item, or terrain to be dangerous.

### Cons
- Recoil accumulation means Manectric wears itself down fast. Long fights are not its friend.
- Ground types still wall it entirely — and physical Ground types (Earthquake) are the most common archetype it faces.
- Loses Manectric's signature SpA/SpD coverage profile entirely. Players who caught Electrike expecting a special attacker may be surprised.

---

## ⭐ Option 3 — Surge Surfer (Electric Terrain Self-Setup) — RECOMMENDED

### Ability: Surge Surfer
Doubles Speed in Electric Terrain. Also stacks with Electric Terrain's 30% boost to Electric moves.

### Build Identity
Manectric sets its own Electric Terrain, instantly transforming into the fastest and strongest Electric attacker in the game — no partner, no item, no luck required.

### Signature Interaction
**Electric Terrain → Surge Surfer**: Turn 1: set Electric Terrain (lasts 5–8 turns). Turn 2+: Manectric moves at **220 effective Speed** (110 × 2) while Electric moves deal **30% bonus damage** in terrain. Thunderbolt hits at 90 × 1.3 terrain × 1.5 STAB = **175.5 effective BP** off 115 SpA. For 5–8 turns, Manectric outspeeds literally everything and nukes everything. This is a self-contained combo executed over two turns.

### Why This Fits Manectric Uniquely

Manectric's Pokédex entry: *"In battle, they create thunderclouds."* Electric Terrain is Manectric creating thunderclouds. The ability is narratively and mechanically correct. No other Electric type in the roster creates their own boosting field — Pikachu relies on items, Electrode relies on speed alone, Plusle relies on Minun. Manectric is **self-sufficient terrain lord**.

### Stat Changes

| Stat | Electrike Vanilla | Rebalanced | Manectric Vanilla | Rebalanced |
|------|-------------------|------------|-------------------|------------|
| HP | 40 | **50** | 70 | **75** |
| Atk | 45 | 50 | 75 | 75 |
| Def | 40 | **45** | 60 | **65** |
| SpA | 65 | **75** | 105 | **115** |
| SpD | 40 | **45** | 60 | **65** |
| Spe | 65 | **80** | 105 | **110** |
| **BST** | **295** | **345** | **475** | **505** |

Modest across-the-board buffs. SpA hits 115 (matching Plusle) and Speed hits 110, which doubles to **220 in terrain**. BST targets ~345 Electrike / ~505 Manectric — solidly within design guidelines.

### Ideal Items

1. **Terrain Extender** — Extends Electric Terrain from 5 to 8 turns. This is the #1 item. One setup, 8 turns of 220 Speed + 30% boost. The math becomes absurd.
2. **Choice Specs** — 115 × 1.5 = 172 effective SpA. Lock into Thunderbolt once terrain is up: 172 × 1.3 × 1.5 = ~335 effective damage. One-shots the entire mid-game after terrain is active.
3. **Life Orb** — Flexible coverage across Thunderbolt, Flamethrower, and terrain-boosted Thunder without lock-in. The consistent but lower-ceiling choice.

### Learnset

| Level | Move | Type | Cat | BP | Purpose |
|-------|------|------|-----|----|---------|
| 1 | ThunderShock | Electric | Special | 40 | Basic STAB |
| 1 | Growl | Normal | Status | — | Atk drop utility |
| 8 | Charge | Electric | Status | — | Sets up the next Electric move for 2× damage. Early preview of "charging electricity" identity — Electrike accumulates energy |
| 12 | Bite | Dark | Physical | 60 | Thematic coverage (lightning dog); Dark breaks Psychic/Ghost walls |
| 16 | Spark | Electric | Physical | 65 | 30% paralysis; physical option, speed control |
| 21 | **Electric Terrain** | Electric | Status | — | **The build turns on.** Terrain + Surge Surfer = 160 effective Speed on Electrike pre-evolution, 220 on Manectric |
| 26 | **Thunderbolt** | Electric | Special | 90 | *Evolution reward* — main STAB nuke, hits at 175 effective BP in terrain |
| 27 | Thunder Wave | Electric | Status | — | Speed control when terrain isn't up yet; pre-terrain utility |
| 33 | Flamethrower | Fire | Special | 90 | Handles Ground types (the natural Electric counter) and Grass types |
| 36 | Volt Switch | Electric | Special | 70 | Re-entry pivot — switch out, come back in, re-set terrain if it expired |
| 42 | **Thunder** | Electric | Special | 110 | Late-game nuke; in terrain at 110 × 1.3 × 1.5 = 214 effective BP |
| 48 | Discharge | Electric | Special | 80 | Spread damage in doubles; 30% paralysis, hits both targets in terrain |

> **Level-up note:** Flamethrower is borderline for a level-up move but justifiable — Manectric can learn it in vanilla via TM, and it solves the Ground-type problem organically. If preferred, replace with Protect or a utility move and keep Flamethrower teachable only.

### The Terrain Math

| Setup State | Speed | Thunderbolt Effective |
|-------------|-------|-----------------------|
| No terrain | 110 | 90 × 1.5 = **135** |
| Terrain (no Extender, 5T) | **220** | 90 × 1.3 × 1.5 = **175** |
| Terrain + Choice Specs | **220** | 90 × 1.3 × 1.5 × 1.5 = **263** |
| Terrain + Specs (Extender, 8T) | **220** | Same but lasts 8 turns |
| Thunder in Terrain + Specs | **220** | 110 × 1.3 × 1.5 × 1.5 = **321** |

Turn 2 onwards: Manectric is the fastest and one of the hardest-hitting Pokemon in the game. Ground types are the natural and correct counterplay — immunity to Electric + Earthquake back. Players must remove Ground types before Manectric sweeps.

### Core Strategy

1. **Turn 1:** Use Electric Terrain. Terrain locks in for 5 turns (8 with Extender).
2. **Turn 2+:** Thunderbolt at 220 Speed, hitting before everything. 175 effective BP per Thunderbolt.
3. **When terrain expires:** Volt Switch out, Volt Switch back in to reset positioning. Reapply terrain from the bench if needed.
4. **Ground type present?** Use Flamethrower or switch to a Ground-immune teammate. Electric Terrain still prevents sleep while active — passive team benefit.

### Team Synergy

- **Terrain Extender holders** (if another teammate carries it) can pass the item off and extend each other's terrain windows.
- **Ground-immune teammates** (Levitate, Flying) cover Manectric's hard counter cleanly.
- **Rain setters** (Pelipper) can be counterproductive — Rain overwrites Electric Terrain. Use Manectric and rain mons on separate windows.
- **Doubles**: Electric Terrain's spread damage via Discharge in terrain hits both opponents at 80 × 1.3 = 104 power each.

### Matchup Analysis

**Strong vs:** Water, Flying (immune to Electric Terrain's Ground counters), and most special walls that get outsped before they can act at 220.
**Weak vs:** Ground types (immune to Electric; Earthquake hits Manectric's unimpressive 65 Def hard).
**Key risk:** Turn 1 terrain setup turn. If a priority move or a naturally faster threat (Electrode is faster) attacks that turn, Manectric takes damage before terrain activates. Use a pivot to bring Manectric in safely.

### Pros
- **Unique niche** not covered by any other Electric — self-sufficient terrain setup that makes Manectric both the fastest and strongest for a full 5–8 turn window.
- Thematically perfect — Manectric *literally creates thunderclouds* per its Pokédex entry.
- Zero external dependencies (no partner, no specific item). Terrain Extender is luxury, not required.
- Electric Terrain's sleep prevention is a passive team benefit (anti-Spore, anti-Sleep Powder, anti-Yawn).
- Surge Surfer's 220 Speed is a memorable, exciting number. Players will feel the moment it activates.

### Cons
- Turn 1 setup cost. A slow start before terrain is placed.
- Ground types are a hard stop — no Electric move does anything, and Earthquake destroys 65 Def.
- Weather opponents (rain teams, sand teams) can overwrite terrain if they act. Player must sequence carefully.

---

## Recommendation

**Option 3 — Surge Surfer** is the clear recommendation.

It gives Manectric a completely original identity in the Electric type pool. Every existing Electric has either item dependency (Pikachu), partner dependency (Plusle/Minun), or a passive nuke button (Electrode). Manectric becomes the one that *creates its own field condition* — and then turns into the fastest, hardest-hitting Pokemon in the game within that field. The setup turn is a real cost, and Ground types are real counterplay. The Pokédex narrative ("creates thunderclouds") lands perfectly. Players will remember the moment terrain activates and Manectric moves at 220 Speed for the first time.

Option 1 (Intimidate Pivot) is the safe, competitive-valid alternative. It gives Manectric a team-support role and differentiated niche from Pikachu (defensive vs. offensive pivot). Viable if Surge Surfer feels too complex for the mid-game.

Option 2 (Reckless Physical) is the surprise option — the "wait, this isn't special?" reveal. Best if the game needs more physical attackers and can afford to flip Manectric's identity. High risk, high reward math.
