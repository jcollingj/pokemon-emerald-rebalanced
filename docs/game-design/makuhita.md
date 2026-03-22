---
name: Makuhita
dex_number: 296
status: implemented
ability: Iron Fist
role: Iron Fist Punch Tank
evolution_line: [Makuhita, Hariyama]
ideal_items: Choice Band, Life Orb, Assault Vest
design_doc: docs/game-design/makuhita.md
---

# Makuhita / Hariyama — Rebalance Notes

## Design Philosophy

Hariyama is a slow but unstoppable brawler that turns every punch into a statement. Iron Fist gives a 1.2x bonus to all punching moves, and with a full suite of elemental punches (Fire, Ice, Thunder, Drain, Focus), **every move in the kit is boosted**. Mach Punch gives +1 priority to bypass the 50 Speed stat. The result: a tank that hits first when it needs to, hits hard when it doesn't, and sustains itself with Drain Punch.

Distinct from Breloom (Technician frail sweeper using weak moves): Hariyama is a bulky brawler with 144 HP that absorbs punishment and retaliates with full-power boosted punches.

## Stat Changes

### Makuhita

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 72 | **80** | +8 |
| Atk | 60 | **70** | +10 |
| Def | 30 | **40** | +10 |
| SpA | 20 | 20 | — |
| SpD | 30 | **40** | +10 |
| Spe | 25 | **30** | +5 |
| **BST** | **237** | **280** | **+43** |

**Rationale:** Makuhita picks up at L10-11 and evolves at L16. Small stat bumps make it feel capable in those 5 levels before evolution. The Atk boost makes Mach Punch and Fire Punch land meaningfully, not just tickle.

### Hariyama

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 144 | 144 | — |
| Atk | 120 | 120 | — |
| Def | 60 | 60 | — |
| SpA | 40 | 40 | — |
| SpD | 60 | 60 | — |
| Spe | 50 | 50 | — |
| **BST** | **474** | **474** | **—** |

**Rationale:** Hariyama's vanilla stats are already excellent — 144 HP gives genuine bulk, 120 Atk hits hard, and the low Speed is a design feature (Mach Punch compensates). No changes needed; the ability + learnset overhaul is the real upgrade.

## Ability Changes

**Ability 1:** Iron Fist — 1.2x damage on punching moves. Core identity; every key move in the kit benefits.
**Ability 2:** Thick Fat — Halves Fire and Ice damage. Defensive option that covers two common coverage types.
**Hidden:** Sheer Force — 1.3x on moves with secondary effects, removes the effect. Alternative power pick.

*Replaces vanilla Thick Fat / Guts / Sheer Force — Guts is already used by Poochyena and Taillow.*

## Evolution

**Makuhita → Hariyama at Level 16** (down from vanilla Level 24).

Rusturf Tunnel encounter is L10-11. Evolution at L16 means the player gets Hariyama right at the Brawly gym stretch — perfectly timed for the second badge and the game's mid-game.

## Learnset

### Makuhita (L1–16)

| Level | Move | BP | Type | Iron Fist? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Tackle | 40 | Normal | No | Basic physical starter |
| 1 | Focus Energy | — | Normal | — | Crit rate setup |
| 4 | Fake Out | 40 | Normal | No | Turn-1 flinch, priority utility |
| 8 | **Mach Punch** | 40 | Fighting | **Yes (48 eff), +1 priority** | Build turns on — STAB priority punch |
| 12 | **Fire Punch** | 75 | Fire | **Yes (90 eff)** | Coverage punch, build feels complete |
| 16 | **Drain Punch** | 75 | Fighting | **Yes (90 eff), heals** | Evolution reward — STAB sustain |

### Hariyama (L16+)

| Level | Move | BP | Type | Iron Fist? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Tackle | 40 | Normal | No | Carryover |
| 1 | Focus Energy | — | Normal | — | Carryover |
| 1 | Fake Out | 40 | Normal | No | Carryover — priority flinch |
| 1 | Mach Punch | 40 | Fighting | **Yes (48 eff), +1 priority** | Carryover — priority STAB |
| 16 | Fire Punch | 75 | Fire | **Yes (90 eff)** | Carryover |
| 16 | Drain Punch | 75 | Fighting | **Yes (90 eff), heals** | Carryover — STAB sustain |
| 21 | **Ice Punch** | 75 | Ice | **Yes (90 eff)** | Mid-game coverage vs Flying/Ground |
| 27 | **Thunder Punch** | 75 | Electric | **Yes (90 eff)** | Coverage vs Water types |
| 33 | Knock Off | 65 | Dark | No | Utility — remove held items |
| 42 | Close Combat | 120 | Fighting | No | Endgame nuke — raw STAB power |
| 48 | **Focus Punch** | 150 | Fighting | **Yes (180 eff)** | Final move — Iron Fist nuke |

## The Math

With 120 Atk and Iron Fist:

| Move | BP | Effective BP | Notes |
|------|----|-------------|-------|
| Mach Punch | 40 | **48** | +1 priority, goes first |
| Fire Punch | 75 | **90** | Burns coverage |
| Ice Punch | 75 | **90** | Freezes coverage |
| Thunder Punch | 75 | **90** | Paralysis coverage |
| Drain Punch | 75 | **90** | Heals 50% of damage dealt |
| Focus Punch | 150 | **180** | Must not be hit while charging |
| Close Combat | 120 | 120 | No Iron Fist, but raw STAB |

With Choice Band (1.5x) on Drain Punch: 90 × 1.5 = **135 effective BP STAB that heals** — sustaining damage output with no resource cost.

Focus Punch with Life Orb: 180 × 1.3 = **234 effective BP** — nuclear option on a free turn.

## Core Strategy

1. **Early game (L10-16):** Lead Fake Out for flinch, follow with Mach Punch for STAB priority. Fire Punch handles early Grass/Bug routes.
2. **Mid-game (L16-27):** Drain Punch becomes the main STAB — consistent damage + sustain. Ice/Thunder Punch fill coverage slots for Tentacool routes and Wingull matchups.
3. **Late-game:** Knock Off strips items from key threats before Close Combat or Focus Punch closes games. Focus Punch on predicted switches nukes most targets.

**Standard play sequence:** Fake Out to get a free flinch turn → Drain Punch to bully bulkier targets while recovering HP → Mach Punch to pick off weakened faster threats.

## Ideal Items

| Rank | Item | Reason |
|------|------|--------|
| 1 | **Choice Band** | 1.5x Atk. Drain Punch becomes 135 eff BP sustain. Mach Punch becomes a priority nuke. |
| 2 | **Life Orb** | Flexible power without locking moves. Switch between Mach Punch and Focus Punch freely. |
| 3 | **Assault Vest** | Doubles SpD to 90 eff — turns Hariyama into a mixed wall that can still punch out anything. |

## Team Synergy

- **Pairs with Fly/Rock/Ground coverage partners** — Hariyama is weak to Psychic and Flying; pair with a Dark type or Rock type that covers those.
- **Pairs with Slow/Trick Room cores** — 50 Speed is a liability in fast metas but a feature in Trick Room. Hariyama thrives when speed is reversed.
- **Covers early Steel/Normal/Rock threats** — 120 Atk Fighting STAB smashes through early-game defensive walls.

## Matchup Analysis

**Strong vs:** Normal, Steel, Rock, Dark, Ice (Fire/Thunder/Ice Punch coverage)
**Weak vs:** Psychic (4x weakness via Fighting typing), Flying (Mach Punch doesn't help vs flying attacks)
**Key threat:** Psychic-types — Hariyama's 60 SpD means a super-effective Psychic will likely KO. Always scout before committing.

## Checklist

- [x] Ability chosen and justified (Iron Fist — every move benefits)
- [x] Synergy moves show up early (Mach Punch at L8, Fire Punch at L12)
- [x] Stats reinforce the build role (bulk + Attack, slow by design)
- [x] Learnset follows the standard schedule
- [x] Clear niche — slow tank ≠ Breloom's frail Technician sweeper
- [x] Core strategy is explainable in 2-3 sentences
