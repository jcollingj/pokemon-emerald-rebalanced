---
name: Geodude
dex_number: 74
status: designing
ability: Stamina
role: Rollout Tank
evolution_line: [Geodude, Graveler, Golem]
---

# Geodude / Graveler / Golem - Rebalance Notes

## Design Philosophy
Geodude is a snowball tank that curls up, gets faster and bulkier, then flattens everything with Rollout. Defense Curl (+1 Def, +1 Speed, doubles Rollout) is the key setup move, and **Stamina** (+1 Def when hit) means the opponent can't stop the boulder by attacking into it. The longer the fight goes, the harder Geodude is to kill and the harder Rollout hits.

## Ability Changes

**Ability 1: Stamina** — +1 Defense each time Geodude is hit by an attack. Creates a lose-lose for the opponent: attack into it and make it tankier, or don't attack and let Rollout ramp up. Replaces Rock Head.

**Ability 2: Sturdy** — Survive one hit at full HP. Classic alternative that guarantees at least one Defense Curl before Rollout starts.

**Hidden: Sand Force** — 1.3x Rock/Ground/Steel in sand. Pairs with Larvitar's Sand Stream. Replaces Sand Veil (passive garbage).

**Why Stamina over Rock Head?** Rock Head prevents recoil, but Rollout has no recoil — it doesn't shape the moveset at all. Stamina directly supports the curl-and-roll gameplan: every hit the opponent lands while you're setting up or rolling makes you bulkier. It turns "I'm stuck in Rollout for 5 turns" from a liability into a strength.

## Stat Changes

### Geodude

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | 40 | - |
| Atk | 80 | 80 | - |
| Def | 100 | 100 | - |
| SpA | 30 | 30 | - |
| SpD | 30 | 30 | - |
| Spe | 20 | 20 | - |
| **BST** | **300** | **300** | - |

No changes. 80 Atk makes Rollout hit hard enough, 100 Def + Stamina + Defense Curl makes it a wall.

### Graveler

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 55 | **65** | +10 |
| Atk | 95 | 95 | - |
| Def | 115 | 115 | - |
| SpA | 45 | 45 | - |
| SpD | 45 | **55** | +10 |
| Spe | 35 | 35 | - |
| **BST** | **390** | **410** | **+20** |

### Golem

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 80 | **90** | +10 |
| Atk | 120 | **125** | +5 |
| Def | 130 | 130 | - |
| SpA | 55 | 55 | - |
| SpD | 65 | **75** | +10 |
| Spe | 45 | 45 | - |
| **BST** | **495** | **520** | **+25** |

**Rationale:** HP and SpD buffs so it isn't one-shot by special attacks while setting up. Speed stays low — Defense Curl patches speed, and the whole point is being a slow boulder that accelerates. Atk nudge on Golem makes Rollout math scarier.

## Learnset

### Geodude (1→25)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Tackle | 40 | Normal | Basic attack |
| 1 | Defense Curl | — | Normal | Core setup — +1 Def, +1 Speed, doubles Rollout |
| 8 | **Rollout** | 30→480 | Rock | **Build turns on.** Defense Curl already known, combo online at level 8. |
| 12 | **Rock Throw** | 65 | Rock | Reliable Rock STAB when you don't want to commit to Rollout |
| 16 | Bulldoze | 60 | Ground | Ground STAB + speed drop on target |
| 21 | Stealth Rock | — | Rock | Team utility, natural hazard setter |

Evolves to Graveler at 25.

### Graveler (25→Linking Cord)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 25 | Smack Down | 50 | Rock | Grounds Flying types for Earthquake |
| 30 | Earthquake | 100 | Ground | Premium Ground STAB |
| 35 | Stone Edge | 100 | Rock | High-crit Rock STAB alternative |
| 40 | Explosion | 250 | Normal | Last resort nuke when Rollout isn't an option |

Golem evolves via Linking Cord (no trade needed). Same learnset, better stats.

## The Math

**Rollout base power doubles each turn, and Defense Curl doubles it again:**

| Turn | Base | After Defense Curl | With Golem 125 Atk + STAB |
|------|------|--------------------|---------------------------|
| 1 | 30 | 60 | 90 effective |
| 2 | 60 | 120 | 180 effective |
| 3 | 120 | 240 | 360 effective |
| 4 | 240 | 480 | 720 effective |
| 5 | 480 | 960 | 1440 effective |

By turn 3 you're doing 360 effective — that's stronger than a Choice Band Earthquake. By turn 4-5 nothing survives.

**Stamina stacking during Rollout:**
While you're locked into Rollout for 5 turns, the opponent is attacking you. Each hit = +1 Def from Stamina. By turn 3 you could have +3 or +4 Def on top of the Defense Curl boost. Golem with 130 base Def + 5-6 stages of Defense boost is physically unkillable.

**Wide Lens accuracy insurance:**
Rollout is 90% accurate. Miss once and the snowball resets. Wide Lens → 99% accuracy. Over 5 turns: 59% chance of landing all 5 at 90%, vs 95% with Wide Lens. That's the difference between a gimmick and a strategy.

## Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Wide Lens** | 90→99% Rollout accuracy. One miss resets the entire snowball — this is insurance that makes the build reliable, not a gimmick. |
| #2 | **Leftovers** | Sustain through setup turns and the Rollout sequence. Slow tank loves passive healing. |
| #3 | **Sitrus Berry** | Burst heal if you take a big hit during setup. Activates at 50% HP to keep you rolling. |

**Pre-evolution pick:** Eviolite on Graveler — 1.5x Def/SpD makes it borderline unkillable while it sets up.

## Core Strategy

1. Switch in on a physical attacker (Stamina turns their attack into your Defense boost)
2. Defense Curl — now you have +2 Def, +1 Speed, and Rollout is doubled
3. Rollout — commit to 5 turns. Each hit you take adds more Def from Stamina
4. By turn 3-4, nothing can stop you physically and Rollout is nuking everything

**Alternative play:** If Rollout isn't safe (too many resists, risk of miss), fall back on Earthquake + Stone Edge as standard Rock/Ground coverage. Stealth Rock on switches for team value.

## Team Synergy

- **Sand setter** (Larvitar/Tyranitar) — Sand boosts Rock-type SpD by 50%, patching Golem's weakness. Sand Force hidden ability variant hits even harder.
- **Hazard stackers** — Stealth Rock from Golem + Spikes/Toxic Spikes from teammates softens things for Rollout to clean up.
- **Special sponge teammate** — Golem's SpD is its weakness. Pair with a special wall to cover that.
- **Status absorber** — Burns halve Rollout damage. Pair with a cleric or a Guts user that absorbs Will-O-Wisp.

## Matchup Analysis

**Strong vs:** Physical attackers (Stamina + Defense Curl = unkillable), Flying, Fire, Electric, Normal, Poison
**Weak vs:** Water (4x), Grass (4x), special attackers, status (burn ruins Rollout)
**Key counter:** Any bulky Water type walls this build — Rollout is Rock STAB so it hits them neutrally, but they can hit back with 4x STAB Water.

## Roxanne's Geodude

With this design, Roxanne's Geodude at Level 11 runs the curl-and-roll gameplan against the player:

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 11 | Wide Lens | Stamina | Defense Curl, Rollout, Rock Throw, Tackle |

The player has to either KO it fast before Rollout snowballs, or hit it with a special super-effective move. Every physical hit makes it tankier via Stamina. This teaches the player early that setup sweepers need to be disrupted, not out-tanked.
