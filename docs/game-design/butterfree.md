---
name: Caterpie
dex_number: 10
status: designed
ability: Compound Eyes
role: Sleep-Into-Setup Sweeper
ideal_items: Leftovers, Big Root, Choice Specs
evolution_line: [Caterpie, Metapod, Butterfree]
---

# Caterpie / Metapod / Butterfree - Rebalance Notes

## Design Philosophy

Butterfree is the quintessential sleep-and-sweep Pokemon. Compound Eyes turns Sleep Powder's shaky 75% accuracy into 97.5% — nearly guaranteed every time. The design leans into this completely: put the enemy to sleep, set up Quiver Dance for free, then sweep with Bug Buzz, Psychic, and Hurricane. Every powder move in the learnset becomes near-reliable with Compound Eyes, and the endgame Hurricane climbs from 70% to 91% accurate. The ability shapes the entire kit.

Caterpie and Metapod are brief early-game phases. Caterpie should feel like a minor threat on Bug Catcher teams (Route 102, Petalburg Woods) rather than a pushover. Metapod gets a hard defensive buff — Shell Armor + Iron Defense makes it genuinely hard to one-shot through the cocoon phase.

## Ability Changes

### Caterpie
- **Ability 1: Compound Eyes** — 1.3x accuracy on all moves. Even as Caterpie, String Shot always lands and foreshadows the line's theme.
- **Ability 2: Shield Dust** — Secondary effects don't proc on Caterpie. Defensive fallback.

### Metapod
- **Ability 1: Shell Armor** — No critical hits taken. Thematic for a hard shell; makes Metapod much harder to one-shot.
- **Ability 2: Shed Skin** — 30% chance to heal status each turn. Alt survival during the cocoon phase.

### Butterfree
- **Ability 1: Compound Eyes** — 1.3x accuracy. Core identity. Sleep Powder becomes 97.5%, Stun Spore 97.5%, Air Slash hits 100% (capped), Hurricane hits 91%.
- **Ability 2/Hidden: Tinted Lens** — Resisted moves deal neutral damage. Alt build: skip status moves entirely, spam Hurricane + Bug Buzz with no immunities.

## Stat Changes

### Caterpie

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 45 | **55** | +10 |
| Atk | 30 | **40** | +10 |
| Def | 35 | **45** | +10 |
| SpA | 20 | 20 | — |
| SpD | 20 | **30** | +10 |
| Spe | 45 | **55** | +10 |
| **BST** | **195** | **245** | **+50** |

Small across-the-board buff makes trainer Caterpies feel like actual threats at their low levels without overturning a pre-evolution.

### Metapod

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **65** | +15 |
| Atk | 20 | 20 | — |
| Def | 55 | **85** | +30 |
| SpA | 25 | 25 | — |
| SpD | 25 | **60** | +35 |
| Spe | 30 | 30 | — |
| **BST** | **205** | **285** | **+80** |

Metapod becomes a genuine defensive cocoon. With Shell Armor blocking crits and Iron Defense at +2 Def, it's extremely hard to break through the final levels before evolution. The Metapod phase should feel like a hard wall grinding toward L10, not a speed bump.

### Butterfree

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **80** | +20 |
| Atk | 45 | 45 | — |
| Def | 50 | **60** | +10 |
| SpA | 90 | **120** | +30 |
| SpD | 80 | **90** | +10 |
| Spe | 70 | **105** | +35 |
| **BST** | **395** | **500** | **+105** |

120 SpA with +1 Quiver Dance = 180 effective SpA. 105 Speed with +1 Quiver Dance puts Butterfree above virtually every non-Choice-Scarf threat. One Quiver Dance turns Butterfree from "setup sweeper" to "almost unkillable special attacker." Two Quiver Dances is almost unfair.

## Learnset

### Caterpie

| Level | Move | BP | Type | Compound Eyes? | Purpose |
|-------|------|----|------|----------------|---------|
| 1 | String Shot | — | Bug | ✓ → 100% | Speed reduction; always lands, foreshadows the theme |
| 1 | Tackle | 40 | Normal | — | Basic physical STAB |
| 5 | **Bug Bite** | 60 | Bug | — | First real Bug STAB; steals held berries |

*(Evolves at Level 7)*

### Metapod

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Harden | — | Normal | +1 Def; survival in cocoon phase |
| 7 | **Iron Defense** | — | Steel | +2 Def; combined with Shell Armor makes Metapod nearly unkillable for the push to L10 |

*(Evolves at Level 10)*

### Butterfree

| Level | Move | BP | Type | Compound Eyes? | Purpose |
|-------|------|----|------|----------------|---------|
| 10 | Confusion | 50 | Psychic | — | Evolution reward; basic Psychic STAB |
| 10 | Gust | 40 | Flying | — | Basic Flying coverage at evolution |
| 13 | **Sleep Powder** | — | Grass | ✓ → **97.5%** | Build turns on. Virtually guaranteed sleep every use. |
| 17 | **Stun Spore** | — | Grass | ✓ → **97.5%** | Paralysis option vs sleep-immune targets |
| 21 | **Quiver Dance** | — | Bug | — | +1 SpA/SpD/Speed while enemy sleeps — the core payoff |
| 26 | **Bug Buzz** | 90 | Bug | — | Primary STAB; 30% SpD drop; the sweep move |
| 30 | Psychic | 90 | Psychic | — | Secondary STAB; covers Poison types that resist Bug |
| 35 | Tailwind | — | Flying | — | Team speed utility; Butterfree as a support pivot |
| 42 | **Air Slash** | 75 | Flying | ✓ → **100%** | Always-accurate flinch (30%); perfect coverage with Bug+Psychic |
| 48 | **Hurricane** | 130 | Flying | ✓ → **91%** | Late-game nuke; 91% accurate with Compound Eyes |

## The Math

### Compound Eyes Accuracy Table

| Move | Normal Accuracy | With Compound Eyes |
|------|----------------|-------------------|
| Sleep Powder | 75% | **97.5%** |
| Stun Spore | 75% | **97.5%** |
| Air Slash | 95% | **100%** (capped) |
| Hurricane | 70% | **91%** |
| String Shot | 95% | **100%** (capped) |
| Bug Buzz | 100% | 100% |

### Quiver Dance Sweep Math

With 120 SpA + 1 Quiver Dance (no item):

| Stage | Effective SpA | Effective Speed | Bug Buzz effective BP |
|-------|-------------|----------------|----------------------|
| Base | 120 | 105 | 90 × 1.5 = **135** |
| +1 QD | **180** | **157** | **202 effective** |
| +2 QD | **240** | **210** | **270 effective** |

After one Quiver Dance, Butterfree outspeeds nearly everything not holding a Choice Scarf. After two, the game is effectively over.

**Choice Specs Tinted Lens Hurricane:** 130 × 1.5 (Specs) × 1.5 (STAB) = **292.5 effective BP**, 91% accurate. Nothing resists it. This is the "skip sleep, nuke everything" build.

## Ideal Items

1. **Leftovers** — Sleep Powder (97.5%) → enemy is asleep → Quiver Dance freely → Leftovers heals chip damage between dances. Every turn of their sleep is a free Quiver Dance with recovery. The math gets absurd if sleep rolls long (3-5 turns is realistic).

2. **Big Root** — Dream Eater synergy: Sleep Powder → Dream Eater deals damage and heals 65% of it (Big Root boosts drain by 30%). Niche but satisfying — Butterfree recovers HP while the enemy is helpless. Pair with Psychic + Bug Buzz for coverage after the drain.

3. **Choice Specs** — For Tinted Lens Butterfree that skips the sleep setup entirely. Hurricane + Bug Buzz + Psychic with no resists and 120 SpA × 1.5 = 180 effective. Nothing walls this combination. Pure wallbreaker build.

## Core Strategy

### The Sleep-and-Setup Loop

1. Switch Butterfree in against something it doesn't fear
2. **Sleep Powder** — 97.5% accurate. This almost never fails.
3. Enemy is asleep. Use **Quiver Dance** for free. Each dance: +1 SpA, +1 SpD, +1 Speed.
4. After 1-2 dances, sweep with **Bug Buzz** (SpD drops compound). Pivot to **Psychic** vs Poison types.
5. If the enemy wakes up early: **Stun Spore** to paralyze them, then continue sweeping.
6. **Air Slash** (100% accurate, 30% flinch) finishes anything that somehow survives.
7. **Hurricane** as the late-game nuke when teammates need coverage vs Flying-weak threats.

### When to Use Butterfree
- **Opening lead Sleep Powder:** force the opponent's lead to sleep immediately, take free Quiver Dance
- **Mid-battle cleanup:** bring in after a teammate faints, sleep the next threat, set up again
- **Team speed support:** Tailwind doubles the team's Speed for 3 turns — sacrifice Butterfree for a wallbreaker teammate to clean up
- **NOT as a pivot into hard hitters:** 80/60/90 bulk is decent but not switchable into strong physical hits

### Stealth Rock Warning
Stealth Rock removes 25% of Butterfree's HP on switch-in (Rock 2x weakness). Butterfree needs a spinner or Defog user on the team, or it can only be brought in once.

## Butterfree vs Other Early Bugs

| | Beedrill | Beautifly | Dustox | Butterfree |
|---|---------|-----------|--------|------------|
| **Role** | Poison crit sweeper | SpA sweeper | Special wall | Sleep setup sweeper |
| **Ability** | Merciless | TBD | TBD | Compound Eyes |
| **Speed** | 75 | TBD | TBD | 105 (post-Quiver: 157+) |
| **Damage** | Physical crits | Special | Special | Special after setup |
| **Fantasy** | "Poison then delete" | TBD | TBD | "Sleep while I get stronger" |

Beedrill is the physical combo sweeper. Butterfree is the snowball sweeper that rewards patience: one sleep, two dances, nothing lives.

## Team Synergy

- **Tailwind support:** Butterfree + a slow wallbreaker (Breloom, Nidoking) = that wallbreaker outspeeds everything for 3 turns
- **Hazard removal:** Butterfree needs Rapid Spin or Defog support due to Stealth Rock weakness
- **Covers Psychic/Grass threats** that wall Water and Ground types (Swampert matchups)
- **Sleep passes value:** If Butterfree uses Sleep Powder and switches out, the sleeping enemy is still there for a teammate to exploit
- **Pairs poorly with:** other sleep users (Sleep Clause limits the field to one sleeping Pokemon at a time)

## Matchup Analysis

**Strong vs:** Grass, Fighting, Psychic (Bug + Psychic dual STAB covers both). After Quiver Dance, boosted SpD makes revenge killing unreliable.

**Weak vs:** Rock (Stealth Rock on switch, Stone Edge), Fire (4x weakness to Rock doesn't help, Fire also SE), Flying (Brave Bird from Fearow ignores sleep).

**Key vulnerabilities:**
- Sleep Clause: if a teammate already put something to sleep, Butterfree's main combo doesn't work
- Insomnia/Vital Spirit: Electric types and some others immune to sleep shut down the combo entirely
- Stealth Rock: 25% chip forces it to be brought in carefully
- Priority moves: Mach Punch, Bullet Punch, etc. can revenge kill at low HP even after a speed boost
