---
name: Rattata
dex_number: 19
status: designed
ability: Strong Jaw
role: Fang Coverage Attacker
ideal_items: Choice Band, Life Orb, Wide Lens
evolution_line: [Rattata, Raticate]
---

# Rattata / Raticate - Rebalance Notes

## Design Philosophy
Raticate is a coverage attacker whose entire moveset is boosted by Strong Jaw. Every move is a biting move — Fire Fang, Ice Fang, Thunder Fang, Psychic Fangs, Crunch, Hyper Fang. It doesn't need TMs for coverage because the learnset IS the coverage. Fast and frail, it picks the right fang for the matchup and hits hard.

This is the "every move benefits" pattern — same as Blastoise/Mega Launcher, but physical and with type coverage instead of raw power.

## Ability Changes

- **Ability 1: Strong Jaw** — Biting moves deal 1.5x damage. Core identity — every move in the kit is a biting move.
- **Ability 2: Guts** — 1.5x Atk when statused. Backup option for a Flame Orb build.
- **Hidden: Hustle** — 1.5x Atk, 0.8x accuracy. High-risk alternative.

## Stat Changes

### Rattata

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | 30 | - |
| Atk | 56 | **65** | +9 |
| Def | 35 | 35 | - |
| SpA | 25 | 25 | - |
| SpD | 35 | 35 | - |
| Spe | 72 | **75** | +3 |
| **BST** | **253** | **265** | **+12** |

Slightly punchier. Rattata gets Bite at L8 and it needs to feel rewarding immediately.

### Raticate

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 55 | 55 | - |
| Atk | 81 | **95** | +14 |
| Def | 60 | 60 | - |
| SpA | 50 | 50 | - |
| SpD | 70 | 70 | - |
| Spe | 97 | **100** | +3 |
| **BST** | **413** | **430** | **+17** |

95 Atk is intentionally below Fearow's 110. Raticate trades raw power for coverage — it has the right fang for every matchup, while Fearow just nukes with two STAB recoil moves. 100 Speed is a clean benchmark that outspeeds most mid-game threats.

## Learnset

### Rattata (evolves at 16)

| Level | Move | BP | Type | Strong Jaw? | Purpose |
|-------|------|----|------|-------------|---------|
| 1 | Tackle | 40 | Normal | No | Basic STAB |
| 1 | Tail Whip | — | Normal | — | Utility |
| 4 | Quick Attack | 40 | Normal | No | Priority — keeps value all game |
| 8 | **Bite** | 60 | Dark | **Yes → 90** | First synergy move. Build turns on. |
| 12 | **Hyper Fang** | 80 | Normal | **Yes → 120, STAB → 180** | Signature nuke. The build is real now. |
| 16 | **Fire Fang** | 65 | Fire | **Yes → 97** | Evolution reward. Steel/Ice/Grass coverage. |

### Raticate (evolves from Rattata at 16)

| Level | Move | BP | Type | Strong Jaw? | Purpose |
|-------|------|----|------|-------------|---------|
| 16 | **Fire Fang** | 65 | Fire | **Yes → 97** | Evolution reward |
| 21 | **Ice Fang** | 65 | Ice | **Yes → 97** | Dragon/Ground/Flying/Grass coverage |
| 27 | **Crunch** | 80 | Dark | **Yes → 120** | Upgraded Bite. Ghost/Psychic coverage. |
| 33 | **Thunder Fang** | 65 | Electric | **Yes → 97** | Water/Flying coverage |
| 36 | **Psychic Fangs** | 85 | Psychic | **Yes → 127** | Fighting/Poison coverage + breaks screens |
| 42 | **Super Fang** | — | Normal | Yes | Always halves HP. Percentage damage ignores stats. |
| 48 | Swords Dance | — | Normal | — | Late-game setup option for sweeping |

## The Math

With 95 Atk + Strong Jaw (1.5x on biting moves):

| Move | BP | Strong Jaw | STAB | Effective |
|------|----|------------|------|-----------|
| **Hyper Fang** | 80 | ×1.5 = 120 | ×1.5 | **180** |
| **Crunch** | 80 | ×1.5 = 120 | — | **120** |
| **Psychic Fangs** | 85 | ×1.5 = 127 | — | **127** |
| **Fire Fang** | 65 | ×1.5 = 97 | — | **97** |
| **Ice Fang** | 65 | ×1.5 = 97 | — | **97** |
| **Thunder Fang** | 65 | ×1.5 = 97 | — | **97** |
| **Bite** | 60 | ×1.5 = 90 | — | **90** |

**Choice Band Hyper Fang:** 180 effective BP off 142 Atk (95 × 1.5 Band). This 2HKOs most neutral targets.

**Coverage logic:**
- Normal resists nothing except Ghost (immune) → Crunch covers Ghost
- Fire Fang for Steel/Ice/Grass
- Ice Fang for Dragon/Ground/Flying
- Thunder Fang for Water/Flying
- Psychic Fangs for Fighting/Poison + breaks Light Screen/Reflect
- Between all six fangs, Raticate hits every type in the game for at least neutral damage

**Optimal 4-move sets:**
- **General:** Hyper Fang / Crunch / Fire Fang / Ice Fang
- **Anti-screen:** Hyper Fang / Psychic Fangs / Crunch / Fire Fang
- **Band:** Hyper Fang / Crunch / coverage fang / coverage fang

## Ideal Items

1. **Choice Band** — 95 Atk × 1.5 = 142 effective. Hyper Fang at 180 effective BP off 142 Atk. Raticate picks the right fang for the matchup, and Band makes it hit like a truck. Being locked is fine because each fang covers different types.
2. **Life Orb** — 1.3x on everything without being locked. Lets you switch between fangs freely. Recoil is rough on 55 HP but Raticate isn't built to last.
3. **Wide Lens** — Fixes Hyper Fang's 90% accuracy and the elemental fangs' 95%. The consistency pick for players who hate missing.

## Core Strategy

### The Coverage Rat
1. Raticate comes in, outspeeds at 100 Speed
2. Pick the fang that hits hardest: Hyper Fang for neutral, or the coverage fang for super effective
3. Hit hard, pivot or faint, repeat

### When to Use Raticate
- **Lead:** Fast, hits hard immediately, forces the opponent to react
- **Revenge killer:** Quick Attack picks off weakened threats
- **Coverage check:** Always has the right move for the matchup — no wasted turns
- **NOT a tank.** 55/60/70 bulk means it takes hits poorly. Hit first or don't hit at all.

## Raticate vs Fearow vs Pidgeot

| | Pidgeot | Fearow | Raticate |
|---|---------|--------|----------|
| **Role** | Fast sustained sweeper | Kamikaze nuke | Coverage attacker |
| **Ability** | Aerilate | Reckless | Strong Jaw |
| **Atk** | — (SpA focused) | 110 | 95 |
| **Speed** | 110 | 105 | 100 |
| **Damage** | High, sustained | Extreme, self-destructive | High, versatile |
| **Coverage** | Narrow (Flying/Normal) | Narrow (Flying/Normal/Ground) | Every type |
| **Fantasy** | "I outspeed everything" | "I don't care if I die" | "I always have the right move" |

Raticate trades raw power for never being walled. Fearow hits harder but only in Normal/Flying. Raticate hits every type super effectively.

## Team Synergy

- Pairs with Pokemon that can take the Fighting moves Raticate attracts (Ghost types, Psychic types)
- Complements slow tanks — Raticate goes first, hits coverage, tanks clean up
- Quick Attack lets it function as a finisher even at low HP
- Super Fang at L42 makes it useful against walls regardless of defensive stats

## Matchup Analysis

**Strong vs:** Ghost (Crunch), Psychic (Crunch), Steel (Fire Fang), Ice (Fire Fang), Dragon (Ice Fang), Grass (Fire/Ice Fang) — basically everything thanks to coverage.
**Weak vs:** Fighting types that outspeed or survive a hit (Raticate's only real counter). Rock types with high physical defense.
**Key vulnerability:** 55 HP / 60 Def means any super effective physical hit is lethal. Raticate wins by hitting first, not by taking hits.
