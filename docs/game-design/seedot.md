---
name: Seedot
dex_number: 273
status: designed
ability: Contrary
role: Escalating Special Sweeper
evolution_line: [Seedot, Nuzleaf, Shiftry]
---

# Seedot / Nuzleaf / Shiftry - Rebalance Notes

## Design Philosophy

Shiftry is a **Contrary Leaf Storm sweeper** — a Tengu wind demon that turns punishment into power. Every time it uses Leaf Storm, it gets +2 SpA instead of -2 SpA. The more it attacks, the more dangerous it becomes. Close Combat's defensive drops become bulk gains. Opponents can't punish Shiftry for attacking — that's exactly what Shiftry wants.

The fantasy: "I'll just spam my strongest move, and the game keeps rewarding me for it."

This is a three-stage arc: Seedot is a fragile acorn absorbing energy. Nuzleaf is a trickster that first discovers its power at L27 with Leaf Storm. Shiftry is a hurricane demon that the opponent cannot stop.

## Ability Changes

- **Ability 1: Contrary** — Stat stage changes are reversed. Leaf Storm's -2 SpA becomes +2 SpA. Close Combat's -1 Def/-1 SpD become +1 Def/+1 SpD. This is the entire build.
- **Ability 2: Chlorophyll** — Speed doubles in harsh sunlight. Valid alt build on sun teams — Shiftry's 90 Speed hits 180 in sun.
- **Hidden: Pickpocket** — Steals held items when hit by contact moves. Thematic trickster flavor; useful for disrupting item-dependent opponents.

## Stat Changes

### Seedot

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | **45** | +5 |
| Atk | 40 | 40 | — |
| Def | 50 | 50 | — |
| SpA | 30 | **45** | +15 |
| SpD | 30 | **35** | +5 |
| Spe | 30 | **35** | +5 |
| **BST** | **220** | **250** | **+30** |

Seedot is a fragile early seed. The SpA bump is a preview of Shiftry's special identity.

### Nuzleaf

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | 70 | — |
| Atk | 70 | **60** | -10 |
| Def | 40 | 40 | — |
| SpA | 60 | **70** | +10 |
| SpD | 40 | **50** | +10 |
| Spe | 60 | **70** | +10 |
| **BST** | **340** | **360** | **+20** |

Attack trimmed, SpA and Speed increased to telegraph the special sweeper identity. By L27, Nuzleaf is already threatening with Leaf Storm.

### Shiftry

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 90 | 90 | — |
| Atk | 100 | **80** | -20 |
| Def | 60 | 60 | — |
| SpA | 90 | **110** | +20 |
| SpD | 60 | **65** | +5 |
| Spe | 80 | **90** | +10 |
| **BST** | **480** | **495** | **+15** |

110 SpA / 90 Speed is the core. Attack is deprioritized to commit fully to the special identity. At +2 SpA (after one Leaf Storm), Shiftry's effective SpA hits 220 — enough to threaten anything that doesn't resist Grass hard.

## Learnset

### Seedot

| Level | Move | BP | Type | Contrary? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Absorb | 20 | Grass | — | Basic HP drain — tiny acorn soaking up sunlight |
| 1 | Bide | — | Normal | — | Endure and retaliate — seeds buried in earth |
| 8 | **Razor Leaf** | 55 | Grass | — | High-crit Grass STAB — first real offense |
| 12 | **Mega Drain** | 40 | Grass | — | Stronger HP drain — energy absorption building toward evolution |

### Nuzleaf (evolves at L14)

| Level | Move | BP | Type | Contrary? | Purpose |
|-------|------|----|------|-----------|---------|
| 14 | Feint Attack | 60 | Dark | — | Never-miss Dark STAB — the trickster emerges |
| 16 | Fake Out | 40 | Normal | — | Priority flinch — pranking opponents, sets tone |
| 21 | Snarl | 55 | Dark | — | Dark STAB, drops opponent SpA — Nuzleaf's haunting cries |
| 27 | **Leaf Storm** | 130 | Grass | **+2 SpA (reversed!)** | ★ THE SYNERGY MOVE — build turns on. Each use makes Nuzleaf stronger. |
| 33 | Sucker Punch | 70 | Dark | — | Priority Dark STAB — ambush strikes if opponent attacks |

### Shiftry (evolves from Nuzleaf via Leaf Stone)

| Level | Move | BP | Type | Contrary? | Purpose |
|-------|------|----|------|-----------|---------|
| 36 | Dark Pulse | 80 | Dark | — | Evolution reward — special Dark STAB to pair with boosted SpA |
| 42 | **Close Combat** | 120 | Fighting | **+1 Def/+1 SpD (reversed!)** | ★ DOUBLE SYNERGY — hits Steel/Dark and makes Shiftry bulkier each use |
| 48 | **Hurricane** | 110 | Flying | — | Tengu capstone — Shiftry's fans summon storms. Coverage for Grass-types and Fighting. |

## The Math

With 110 SpA + Contrary Leaf Storm:

| Uses | SpA Stage | SpA Multiplier | Effective SpA | Leaf Storm power |
|------|-----------|----------------|---------------|-----------------|
| 1st use | +2 | ×2.0 | **220** | 130 effective |
| 2nd use | +4 | ×2.5 | **275** | 130 effective |
| 3rd use | +6 (capped) | ×4.0 | **440** | 130 effective |

**With Life Orb at +2 SpA:** 110 × 2.0 × 1.3 = **286 effective SpA**. Leaf Storm from this point OHKOs almost anything without a Grass resist.

**Close Combat with Contrary:**
- Normally: -1 Def, -1 SpD. With Contrary: **+1 Def, +1 SpD.**
- 120 BP Fighting + STAB coverage + you get bulkier. Zero downside.

**Coverage check:**
- Grass resisted by: Fire, Flying, Poison, Bug, Dragon, Grass, Steel
- Dark hits: Ghost, Psychic neutrally/super-effectively
- Fighting covers: Steel, Rock, Dark, Ice, Normal
- Hurricane covers: Grass, Bug, Fighting

Between Leaf Storm + Dark Pulse + Close Combat + Hurricane, almost no type combination is safe.

## Ideal Items

1. **Life Orb** — Best for flexible play. Leaf Storm spam accumulates SpA boosts (+2 each), then switch to Dark Pulse or Close Combat as needed. 1.3x on everything + compounding boosts = one of the scariest late-game sweepers.
2. **Choice Specs** — Commit to Leaf Storm nukes. First use hits at 130 BP × 1.5 Specs = 195 effective power. Can't accumulate boosts (locked into one move), but OHKOs most unboosted targets from the start.
3. **Assault Vest** — Bulk option. +50% SpD pairs with Contrary Close Combat's +1 SpD gains. Shiftry becomes a bulky attacker that chips away while surviving multiple hits.

## Core Strategy

### The Tengu Escalation

1. Send Shiftry in after a teammate faints or on a resisted hit.
2. Use **Leaf Storm** → 130 BP Grass STAB. Normal Pokemon take -2 SpA. Shiftry gains **+2 SpA**.
3. Opponent switches in something that resists Grass.
4. Use **Close Combat** or **Dark Pulse** for coverage. Close Combat gives **+1 Def/+1 SpD**.
5. Return to Leaf Storm on anything that doesn't resist it. Now at +2 SpA, hits much harder.
6. After 2 Leaf Storms, SpA is at +4. Shiftry is now nearly unstoppable on the special side.
7. **Hurricane** handles the Grass-types that wall Leaf Storm and the Fighters that resist Dark.

### The Irony of Countering Shiftry

- Intimidate user comes in → **+1 Attack** (Contrary reverses the drop). Punishes standard physical checks.
- Opponent uses Fake Tears to drop SpD → **+2 SpD** (Contrary reverses it). Setup gift.
- The more opponents try to debuff Shiftry, the stronger it gets.

### When to Use Shiftry

- Mid-to-late game when Leaf Storm accumulation is safe
- Against bulky Water/Ground/Rock types that other Grass attackers pressure
- As a wallbreaker — +2 SpA Leaf Storm + Life Orb breaks through most defensive mons
- NOT as a lead — Shiftry needs a free turn or a resisted hit to set up

## Team Synergy

- Pairs with physical attackers that can threaten Fire/Ice/Bug/Poison types (Shiftry's weaknesses)
- Hurricane provides backup against Grass-types that wall Swampert/Mudkip's Water attacks
- Close Combat coverage supports teams that struggle with Steel types
- Sucker Punch / priority helps against revenge killers that would outspeed Shiftry
- Strong with Stealth Rock support — forces switches, compounding Leaf Storm accumulation

## Matchup Analysis

**Strong vs:** Water, Ground, Rock (Grass STAB), Psychic/Ghost (Dark Pulse), Steel/Dark/Ice (Close Combat), Grass/Bug/Fighting (Hurricane)
**Weak vs:** Fire, Ice, Bug (4×!), Poison, Fairy, Fighting
**Key vulnerability:** Bug is a 4× weakness — Beedrill, Yanma, Surskit can all threaten. Poison-types wall Leaf Storm. Fire types eat Shiftry alive.
**Key threat on opponent's side:** Any Poison or Fire type hard-walls the Leaf Storm spam. Shiftry needs Dark Pulse and Hurricane to stay relevant against full teams.

## Role in Segment 1

Seedot appears on trainer teams in Segment 1 (Billy on Route 104, Gina doubles on Route 104) at early levels (L5-8). At this stage, Seedot knows Absorb and Bide — serviceable for a basic early trainer. The Contrary ability isn't relevant at this stage; the early design simply makes Seedot not feel completely useless as a trainer Pokemon.

The full power arc (Leaf Storm at L27, Shiftry via Leaf Stone, Hurricane at L48) is a player investment reward — Seedot is modest on early trainer teams but becomes one of the game's more powerful mid-to-late sweepers if the player raises one.
