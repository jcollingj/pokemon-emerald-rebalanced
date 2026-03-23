---
name: Meditite / Medicham
dex_numbers: [307, 308]
status: designed
ability: Calm Focus (recommended) — see options below
role: Meditation Activator / Dual-Threat Striker
evolution_line: [Meditite, Medicham]
---

# Meditite / Medicham — Design Brainstorm

## Context

Fighting/Psychic. Evolves at L37. Rare encounter in Granite Cave (L10-14). Used by Brawly at L18.
The Pokedex: *"It continually meditates for hours. Through crushingly harsh yoga training, it gained the power to foretell its foe's actions. It battles with elegant, dance-like movement."*

**Vanilla stats:**
- Meditite: HP 30 / Atk 40 / Def 55 / SpA 40 / SpD 55 / Spe 60 — BST 280 (severely undertuned)
- Medicham: HP 60 / Atk 60 / Def 75 / SpA 60 / SpD 75 / Spe 80 — BST 410 (still weak for a final form)

**Existing fighters (must differentiate):**
| Pokemon | Role | Ability |
|---------|------|---------|
| Breloom | Technician priority multi-hit | Technician |
| Gallade | Vorpal Blade guaranteed crits | Vorpal Blade (custom) |
| Machamp | Confusion-locking brawler | No Guard |
| Hariyama | Elemental punch brawler | Iron Fist |

**Open roles:** Meditation/setup activator, dual physical+special attacker, psychic-themed martial artist.

---

## Option 1: Keep Pure Power — The Surgical Striker

### Ability: Pure Power (vanilla)
Pure Power doubles the effective Attack modifier, making Medicham's 60 base Attack act as 120. Every move benefits equally — it's a universal multiplier.

### Build Identity
A glass cannon where every move hits twice as hard as it looks — Fake Out chips harder, Drain Punch heals massive amounts, Hi Jump Kick nukes.

### Signature Interaction
**Pure Power + Drain Punch**: Drain Punch at 75 BP off effective 120 Attack heals 50% of a huge number. Medicham can tank damage by sustaining through drain, even though it's frail. The healing scales with the doubled attack — so the sustain is *also* doubled.

### Stat Changes
#### Meditite
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | **50** | +20 |
| Atk | 40 | **50** | +10 |
| Def | 55 | 55 | — |
| SpA | 40 | **50** | +10 |
| SpD | 55 | 55 | — |
| Spe | 60 | **75** | +15 |
| **BST** | **280** | **335** | **+55** |

#### Medicham
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **75** | +15 |
| Atk | 60 | **75** | +15 |
| Def | 75 | 75 | — |
| SpA | 60 | **75** | +15 |
| SpD | 75 | 75 | — |
| Spe | 80 | **100** | +20 |
| **BST** | **410** | **475** | **+65** |

### Learnset (Meditite, evolves L37)
| Level | Move | BP | Type | Notes |
|-------|------|----|------|-------|
| 1 | Meditate | — | Normal | Thematic starter — sets the mood |
| 1 | Fake Out | 40 | Normal | Priority chip, doubled by Pure Power |
| 8 | **Drain Punch** | 75 | Fighting | Build turns on — doubled attack = massive healing |
| 12 | **Confusion** | 50 | Psychic | Psychic STAB introduced |
| 16 | Detect | — | Fighting | Utility |
| 21 | **Force Palm** | 60 | Fighting | STAB + 30% paralysis |
| 27 | **Zen Headbutt** | 80 | Psychic | Stronger Psychic STAB + flinch |
| 33 | **Hi Jump Kick** | 130 | Fighting | Mid-game nuke — risky but massive |

### Medicham (from L37)
| Level | Move | BP | Type | Notes |
|-------|------|----|------|-------|
| 37 | **Psychic** | 90 | Psychic | Evolution reward — strong Psychic STAB |
| 42 | Recover | — | Normal | Sustain on a frail body |
| 48 | **Close Combat** | 120 | Fighting | Final Fighting nuke (stat drops, but Pure Power makes 120 BP enormous) |

### Ideal Items
| Rank | Item | Why |
|------|------|-----|
| #1 | **Choice Band** | 75 Atk × Pure Power (2x) × Band (1.5x) = staggering Drain Punch output with healing |
| #2 | **Life Orb** | 1.3x on all moves, flexible moveset |
| #3 | **Leftovers** | Sustain while using Recover/Detect combo for longevity |

### Pros
- Pure Power is iconic — players who know Medicham immediately "get" it
- Drain Punch synergy is genuinely exciting math: more damage = more healing
- Hi Jump Kick as the high-risk nuke adds tension
- Simple to understand and use
- Honors the vanilla identity

### Cons
- Pure Power doesn't *shape* the learnset — every move benefits equally (no clever synergy)
- Doesn't differentiate meaningfully from "just a big Attack stat"
- The "just hits hard" identity can feel lazy compared to other fighters with 2-step combos

---

## Option 2 (RECOMMENDED): Calm Focus — The Meditation Activator ⭐

### Ability: Calm Focus (custom — rework of Pure Power)
**Effect:** When this Pokemon uses Calm Mind, it permanently activates a 1.3× damage bonus to all moves for the rest of the battle. The Calm Mind stat boost (+1 SpA/+1 SpD) applies as normal. Subsequent Calm Minds continue stacking stats but don't further increase the 1.3× bonus (it's a one-time activation).

**Design pattern:** *Condition → payoff.* The meditation (Calm Mind) IS the activation. One act of focus unlocks a permanent multiplier, then the attacker sweeps.

**Thematic resonance:** "It continually meditates for hours. Through crushingly harsh yoga training it gained the power to..." — the meditation isn't the attack, it's the *unlocking* of the attack.

### Build Identity
Meditates once at the start of battle to permanently focus its mind (+1 SpA/SpD + unlock 1.3× damage), then sweeps with both physical and special coverage simultaneously.

### Signature Interaction
**Calm Focus activation + Hi Jump Kick**: One Calm Mind → 130 BP Fighting move hits at 1.3× for 169 effective damage. Then switch to **Psychic** at +1 SpA for massive special coverage. The opponent can't wall both a 169-eff physical move AND a +1 SpA Psychic simultaneously.

This is the "dual-threat striker" — after activation, no single defensive type handles Medicham.

### Stat Changes
#### Meditite
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | **50** | +20 |
| Atk | 40 | **55** | +15 |
| Def | 55 | **60** | +5 |
| SpA | 40 | **55** | +15 |
| SpD | 55 | **60** | +5 |
| Spe | 60 | **75** | +15 |
| **BST** | **280** | **355** | **+75** |

#### Medicham
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **75** | +15 |
| Atk | 60 | **80** | +20 |
| Def | 75 | **80** | +5 |
| SpA | 60 | **80** | +20 |
| SpD | 75 | **80** | +5 |
| Spe | 80 | **100** | +20 |
| **BST** | **410** | **495** | **+85** |

*Rationale:* Perfectly equal Attack and SpA (80/80) is intentional — after activation, the player genuinely chooses between physical and special based on the matchup. Speed at 100 lets Medicham outspeed key threats without being overwhelming.

### Learnset

#### Meditite (evolves L37)
| Level | Move | BP | Type | Calm Focus active? | Purpose |
|-------|------|----|------|--------------------|---------|
| 1 | Meditate | — | Normal | No | Thematic starter, +1 Atk |
| 1 | Fake Out | 40 | Normal | No (pre-activation) | Priority flinch |
| 8 | **Confusion** | 50 | Psychic | No | First Psychic STAB, build hints at dual coverage |
| 12 | **Drain Punch** | 75 | Fighting | No | Early STAB + sustain |
| 16 | **Calm Mind** | — | Psychic | **→ ACTIVATES** | THE moment. Build turns on. |
| 21 | **Force Palm** | 60 | Fighting | **1.3× = 78 eff** | STAB + 30% paralysis after activation |
| 27 | **Zen Headbutt** | 80 | Psychic | **1.3× = 104 eff** | Psychic STAB power spike |
| 33 | **Hi Jump Kick** | 130 | Fighting | **1.3× = 169 eff** | Mid-game physical nuke |

**Build turns on at L16:** Calm Mind unlocks 1.3× multiplier + +1 SpA. Every subsequent move hits harder. By L27 the player has Psychic STAB AND Fighting STAB both fully powered up.

#### Medicham (from L37)
| Level | Move | BP | Type | Calm Focus active? | Purpose |
|-------|------|----|------|--------------------|---------|
| 37 | **Psychic** | 90 | Psychic | **1.3× = 117 eff + +SpA** | Evolution reward — strong Psychic STAB |
| 42 | Ice Punch | 75 | Ice | **1.3× = 97 eff** | Coverage vs Flying/Dragon/Grass |
| 45 | Recover | — | Normal | — | Sustain — survive the activation turn |
| 48 | **Close Combat** | 120 | Fighting | **1.3× = 156 eff** | Final Fighting nuke |

### The Math (after Calm Mind activation)
With 80 Atk / 80 SpA and Calm Focus (1.3×) + Calm Mind (+1 SpA):

| Move | BP | Effective | Notes |
|------|----|-----------|-------|
| **Hi Jump Kick** | 130 | **169 eff physical** | Off 80 Atk with 1.3× |
| **Psychic** (at +1 SpA) | 90 | **117 eff × 1.3× = 152 eff special** | +1 boost already baked in |
| **Close Combat** | 120 | **156 eff physical** | Stat drop but one-shot power |
| **Drain Punch** | 75 | **97 eff + drain** | Sustain after activation |

After double Calm Mind (+2 SpA): Psychic = 90 × 1.3 × (× boost factor) — the SpA stacking compounds with Calm Focus.

**Opponent's dilemma:** Physical wall (high Def)? Psychic hits them. Special wall (high SpD)? Hi Jump Kick hits them. Ghost? Ice Punch. Flying? Covered. Only Fairy types are a real wall, and they're rare in this segment.

### Ideal Items
| Rank | Item | Why |
|------|------|-----|
| #1 | **Leftovers** | Sustain during the Calm Mind setup turn; then sweep freely |
| #2 | **Life Orb** | After activation: 1.3× (Calm Focus) × 1.3× (Life Orb) = 1.69× total. Absurd. |
| #3 | **Lum Berry** | Prevents sleep/paralysis that would waste the activation turn |

### Pros
- Perfectly captures the meditation-then-strike fantasy — the meditation IS the ability
- Clear 2-step combo (proven pattern per SKILL.md)
- Shapes learnset entirely: Calm Mind must be early and central
- Dual physical + special threat is completely unique among fighters — no other fighter does this
- +1 SpA from Calm Mind stacks on top of the Calm Focus multiplier — SpA builds compound
- Interesting counterplay: Taunt shuts down activation (but Meditite can still fight without it)

### Cons
- Custom ability needs implementation (pattern already exists — similar to how Nidoking's Toxic Boost works)
- Requires surviving the activation turn — needs enough bulk (addressed in stat buff)
- If Taunted, falls back to basic fighting without the multiplier

---

## Option 3 (Unusual): Prescience — The Mind Mirror

### Ability: Prescience (rework of Telepathy)
**Effect:** At the start of each turn, this Pokemon automatically copies all of the opponent's positive stat changes (like a free Psych Up every turn). If the opponent has no stat boosts, gain +1 to both Attack and Special Attack instead.

**Design inspiration:** "It gained the power to foretell its foe's actions." Medicham doesn't outpower opponents — it *reads* them and mirrors their strengths.

### Build Identity
The anti-setup fighter: the more the opponent invests in stat boosts (Dragon Dance, Swords Dance, Nasty Plot), the stronger Medicham becomes by mirroring them instantly.

### Signature Interaction
**Prescience + High Jump Kick**: Opponent uses Dragon Dance (+1 Atk, +1 Spe)? Medicham instantly copies those boosts, is now also +1 Atk/+1 Spe, then High Jump Kick from the mirrored boost. The opponent's setup directly powers up Medicham's counter-attack.

Against non-setup opponents, Medicham gains +1/+1 per turn — slow accumulation that still becomes a threat over time.

### Stat Changes
The bulk needs to be higher to survive turns while mirroring.

#### Meditite
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | **55** | +25 |
| Atk | 40 | **55** | +15 |
| Def | 55 | **65** | +10 |
| SpA | 40 | **55** | +15 |
| SpD | 55 | **65** | +10 |
| Spe | 60 | **70** | +10 |
| **BST** | **280** | **365** | **+85** |

#### Medicham
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **80** | +20 |
| Atk | 60 | **80** | +20 |
| Def | 75 | **85** | +10 |
| SpA | 60 | **80** | +20 |
| SpD | 75 | **85** | +10 |
| Spe | 80 | **90** | +10 |
| **BST** | **410** | **500** | **+90** |

### Learnset (highlights)
- L8: Confusion (Psychic STAB, reads the opponent)
- L12: Drain Punch (sustain while mirroring over multiple turns)
- L16: Psych Up (manual mirror for if the passive copy lags behind — synergizes explicitly)
- L21: Force Palm (paralysis support while building mirror boosts)
- L27: Hi Jump Kick (payoff nuke after 1-2 turns of mirrored boosts)

### Ideal Items
| Rank | Item | Why |
|------|------|-----|
| #1 | **Assault Vest** | Tank special hits while waiting to mirror boosts; then Hi Jump Kick |
| #2 | **Choice Band** | If opponent has no setup, lock into best coverage early |
| #3 | **Lum Berry** | Prevents status while patiently accumulating mirrors |

### Pros
- Genuinely unique mechanic: no other Pokemon in the game functions this way
- Thematically perfect: the Pokedex literally says it "foretells its foe's actions"
- Extremely satisfying when it works: opponent sets up a Dragon Dance and it backfires completely
- Creates memorable counterplay moments in the player's mind

### Cons
- Situational: against teams that don't set up, Prescience is just a slow +1/+1 grind
- Mechanically complex to understand and implement correctly
- Passive ability pattern (SKILL.md warns against "+1 when X happens" abilities)
- Could feel unreliable vs Brawly's team (gym mons don't usually spam stat boosts)

---

## Recommendation: Option 2 — Calm Focus ⭐

**Why:** Calm Focus is the most exciting and complete design.

1. **Thematically perfect.** Meditite meditates for hours. The meditation (Calm Mind) IS the unlocking of power. The ability *requires* the Pokemon to literally meditate to activate. No other fighter has this.

2. **Clear 2-step combo.** Proven pattern: condition (Calm Mind) → permanent payoff (1.3× to everything). Simple to explain, immediately satisfying.

3. **Dual-threat is a genuinely new role.** After activation, Medicham runs both Hi Jump Kick (physical) and Psychic (special) off equal Attack/SpA. No current fighter does this — walls can't cover both attack types simultaneously.

4. **Shapes the learnset fully.** Calm Mind at L16 is the centerpiece; every subsequent move selection is about which physical vs special STAB to prioritize. The kit writes itself.

5. **Works at all stages.** Meditite at L16 with Calm Mind → Force Palm + Confusion is already a credible dual-threat. Medicham at L48 with Calm Mind → Close Combat + Psychic is terrifying.

**The build fantasy:** *"One act of focused meditation, and everything after is inevitable."*

---

## Comparison vs Other Fighters

| | Breloom | Gallade | Machamp | Hariyama | **Medicham** |
|---|---------|---------|---------|----------|-------------|
| **Role** | Priority multi-hit | Crit slicer | Confusion lock | Elemental puncher | **Meditation dual-striker** |
| **Ability** | Technician | Vorpal Blade | No Guard | Iron Fist | **Calm Focus** |
| **Activation** | Always active | Always active | Always active | Always active | **One Calm Mind unlocks it** |
| **Damage type** | Physical only | Physical only | Physical | Physical only | **Physical + Special** |
| **Setup needed** | No | No | No | No | **Yes (1 turn)** |
| **Fantasy** | "5 hits" | "Perfect cut" | "Always confused" | "Punch everything" | **"Meditate once, then delete everything"** |
