---
name: Whismur
dex_number: 293
status: implemented
ability: Punk Rock
role: Boomburst Cannon
ideal_items: Choice Specs, Life Orb, Expert Belt
evolution_line: [Whismur, Loudred, Exploud]
---

# Whismur / Loudred / Exploud - Rebalance Notes

## Design Philosophy
Exploud is an artillery cannon that turns every sound move into a devastating nuke. Punk Rock boosts all sound moves by 1.3x and halves incoming sound damage. Boomburst (140 BP) with STAB and Punk Rock hits an effective 273 BP — one of the strongest attacks in the game. Every move in the learnset feeds this identity: Uproar, Disarming Voice, Round, Hyper Voice, Bug Buzz, and finally Boomburst at the peak. The line is found early (Rusturf Tunnel, L9-11) and evolves faster than vanilla, rewarding the player for investing in it.

## Ability Changes

- **Ability 1: Punk Rock** — Sound moves deal 1.3x damage; incoming sound moves deal 0.5x damage. The core identity — every move in the kit is a sound move.
- **Ability 2: Soundproof** — Immune to sound moves. Defensive backup; loses the offense but becomes a hard counter to Hyper Voice/Boomburst users.
- **Hidden: Scrappy** — Normal and Fighting moves hit Ghost types. Opens up Exploud's Normal STAB against Ghost types that would otherwise wall it.

## Stat Changes

### Whismur

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 64 | 64 | — |
| Atk | 51 | 51 | — |
| Def | 23 | **28** | +5 |
| SpA | 51 | **60** | +9 |
| SpD | 23 | **28** | +5 |
| Spe | 28 | **40** | +12 |
| **BST** | **240** | **271** | **+31** |

Slightly bulkier and faster to survive the early tunnel encounters. SpA boost makes Uproar actually threaten things on catch.

### Loudred

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 84 | 84 | — |
| Atk | 71 | 71 | — |
| Def | 43 | **48** | +5 |
| SpA | 71 | **82** | +11 |
| SpD | 43 | **48** | +5 |
| Spe | 48 | **62** | +14 |
| **BST** | **360** | **395** | **+35** |

Meaningful mid-game attacker. 82 SpA + Punk Rock makes Hyper Voice land like a truck at L27.

### Exploud

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 104 | 104 | — |
| Atk | 91 | 91 | — |
| Def | 63 | 63 | — |
| SpA | 91 | **105** | +14 |
| SpD | 73 | 73 | — |
| Spe | 68 | **80** | +12 |
| **BST** | **490** | **516** | **+26** |

105 SpA + 80 Spe makes Exploud a genuine threat. 80 Speed is enough to outpace most bulky attackers in the mid-game. The SpA boost makes the Boomburst math absurd.

## Evolution

- **L16:** Whismur → Loudred (vanilla: L20)
- **L36:** Loudred → Exploud (vanilla: L40)

Faster evolution rewards early investment. The player gets Loudred right as they enter Rusturf Tunnel's post-game area, and Exploud arrives at a competitive level for the later gyms.

## Learnset

### Whismur (base form, L1–16)

| Level | Move | BP | Type | Punk Rock? | Purpose |
|-------|------|----|------|------------|---------|
| 1 | Pound | 40 | Normal | No | Basic STAB starter |
| 1 | Growl | — | Normal | No | Utility |
| 8 | **Uproar** | 90 | Normal | **Yes → 117, STAB → 175.5** | Build turns on — first nuke |
| 12 | **Disarming Voice** | 40 | Fairy | **Yes → 52** | Sound move, never misses, Fairy coverage |

### Loudred (evolves at L16)

| Level | Move | BP | Type | Punk Rock? | Purpose |
|-------|------|----|------|------------|---------|
| 1 | (carry-overs) | — | — | — | Pound, Growl, Uproar, Disarming Voice |
| 21 | **Round** | 60 | Normal | **Yes → 78, STAB → 117** | Evolution reward — reliable sound STAB |
| 27 | **Hyper Voice** | 90 | Normal | **Yes → 117, STAB → 175.5** | Strong STAB, pierces Substitute |
| 33 | **Screech** | — | Normal | Yes (status) | Sound flavor, -2 Defense for teammates |

### Exploud (evolves at L36)

| Level | Move | BP | Type | Punk Rock? | Purpose |
|-------|------|----|------|------------|---------|
| 1 | (carry-overs) | — | — | — | All Loudred moves |
| 36 | **Boomburst** | 140 | Normal | **Yes → 182, STAB → 273** | THE move. Hits everything. |
| 42 | **Bug Buzz** | 90 | Bug | **Yes → 117** | Sound coverage vs Psychic/Grass/Dark |
| 48 | **Focus Blast** | 120 | Fighting | No | Steel/Rock/Dark coverage |

## The Math

With 105 SpA + Punk Rock (1.3x on sound moves):

| Move | BP | Punk Rock | STAB | Effective |
|------|----|-----------|------|-----------|
| **Boomburst** | 140 | ×1.3 = 182 | ×1.5 | **273** |
| **Hyper Voice** | 90 | ×1.3 = 117 | ×1.5 | **175.5** |
| **Uproar** | 90 | ×1.3 = 117 | ×1.5 | **175.5** |
| **Bug Buzz** | 90 | ×1.3 = 117 | — | **117** |
| **Round** | 60 | ×1.3 = 78 | ×1.5 | **117** |
| Focus Blast | 120 | — | — | **120** |

**Choice Specs Boomburst:** 182 BP off 157.5 SpA (105 × 1.5). That's the strongest sustained special attack in the early-mid game. Nearly nothing in the game survives a neutral Boomburst from Specs Exploud.

**Coverage logic:**
- They wall Normal → Bug Buzz (Psychic/Ghost/Dark types often have these weaknesses... Bug doesn't hit Ghost, but Scrappy handles that)
- They're Steel → Focus Blast (handles Steel/Rock/Dark)
- They're Ghost → Scrappy makes Normal STAB hit them (hidden ability)
- Between Boomburst + Bug Buzz + Focus Blast, almost nothing is safe

## Ideal Items

1. **Choice Specs** — 105 SpA × 1.5 = 157.5 effective. Boomburst at 273 BP off 157.5 SpA OHKOs almost anything. You're locked in, but one hit is often enough.
2. **Life Orb** — 1.3x on everything + flexible moveset. Boomburst + Bug Buzz + Focus Blast all get boosted. The recoil is manageable with 104 HP.
3. **Expert Belt** — 1.2x on super effective hits. Rewards smart coverage use — Bug Buzz vs Psychic/Grass, Focus Blast vs Steel/Rock/Dark.

## Core Strategy

### The Artillery Strike (Choice Specs)
1. Identify what the opponent has — if it's a fast special attacker, Exploud might not win the speed tie
2. Click Boomburst — 273 effective BP off 157.5 SpA. Target probably dies
3. If they switch to Steel/Rock → switch to Focus Blast
4. If they switch to something that resists Normal and is Psychic/Dark → Bug Buzz
5. Exploud doesn't need to be alive all game — one or two Boombursts does the job

### When to Use Exploud
- As a wallbreaker: Boomburst breaks through bulky special walls
- Against teams that rely on sound immunity or resists: Soundproof Exploud counters Exploud
- NOT for sustained battles against faster special attackers — 80 Speed is good but not elite

## Team Synergy

- Pairs with physical attackers (Breloom, Hariyama) that handle Steel/Rock types
- Screech supports physical teammates by cutting opponent Defense by 2 stages
- Covers Psychic/Ghost types that threaten Fighting types on your team
- Bug Buzz handles Psychic types that wall Fighting moves
- Works well behind Tailwind support to patch Speed shortcomings

## Matchup Analysis

**Strong vs:** Bulky special walls (Boomburst just deletes them), Psychic types (Bug Buzz), anything that doesn't resist Normal
**Weak vs:** Steel (resists Normal + Bug, survives Focus Blast), very fast sweepers (outsped), Dark types resist Bug Buzz
**Key vulnerability:** Steel types genuinely wall this set until Focus Blast is available. Speed is good but not elite — revenge killing from fast threats is possible.

## Whismur Line Identity

| Stage | Context | Role |
|-------|---------|------|
| Whismur | Rusturf Tunnel cave fodder | Investment — Uproar hits hard even early |
| Loudred | Bridge to Exploud | Workhorse mid-game attacker with Hyper Voice |
| Exploud | Endgame threat | Boomburst artillery cannon |

The line tells a story: a timid whimperer → a loud brawler → a full artillery system. Punk Rock makes every step feel powerful — Uproar at L8 already does 117 effective BP off a type-appropriate special stat.
