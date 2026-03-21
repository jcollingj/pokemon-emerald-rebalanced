---
name: Wurmple Evolutions
pokemon: [Silcoon, Beautifly, Cascoon, Dustox]
dex_numbers: [266, 267, 268, 269]
status: designed
---

# Wurmple Evolutions - Rebalance Notes

## Overview

Wurmple splits at L7 into Silcoon or Cascoon, then evolves again at L10 into Beautifly or Dustox. These are the fastest-evolving branching lines in the game. The cocoon stages are brief transitional forms — the real designs are the final forms.

The split should feel meaningful: Beautifly and Dustox must play completely differently from each other, giving the player a genuine reason to care which Wurmple evolution they get.

**Design direction:**
- **Beautifly** (Bug/Flying) — Offensive special sweeper. Tinted Lens makes its moves unresistable, combined with Quiver Dance to snowball. Glass cannon with speed.
- **Dustox** (Bug/Poison) — Defensive status controller. Prankster (already in vanilla data) gives priority to its deep status/utility movepool. A wall that grinds teams down.

This mirrors the Nidoqueen/Nidoking split philosophy: same family, opposite builds, shared thematic thread (both are butterflies/moths that use powder and wing attacks).

---

## Silcoon (#266) — Cocoon Stage

### Build Identity
Transitional form. Exists for 3 levels (7-10). Shed Skin keeps it healthy while it tanks hits with Harden.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | 50 | - |
| Atk | 35 | 35 | - |
| Def | 55 | **65** | +10 |
| SpA | 25 | 25 | - |
| SpD | 25 | **35** | +10 |
| Spe | 15 | 15 | - |
| **BST** | **205** | **225** | **+20** |

Rationale: Slightly bulkier so it doesn't faint constantly during L7-10. Still purely defensive — it only knows Harden.

### Ability
- **Shed Skin** (unchanged) — 33% chance to heal status each turn. Fine for a cocoon.

### Learnset
Unchanged. Harden at L1 and L7. Cocoons don't learn moves.

---

## Beautifly (#267) — Tinted Lens Quiver Dancer

### Build Identity
**Beautifly is a special sweeper that uses Tinted Lens to make Quiver Dance sweeps unstoppable.** Nothing truly walls it because resistances are halved, so after one Quiver Dance boost, Beautifly threatens everything.

### Why Tinted Lens?
Beautifly's biggest problem in vanilla is that Bug/Flying special attacking is walled by tons of types — Rock, Steel, Fire, Electric all resist at least one STAB. Tinted Lens solves this completely: resisted moves deal neutral damage, meaning Beautifly's entire movepool becomes coverage. Combined with Quiver Dance (+SpA/+SpD/+Spe), one boost turns Beautifly into a threat that nothing can safely switch into.

This is the "every move benefits" synergy pattern. Tinted Lens doesn't boost one move — it makes the entire kit better by removing the biggest weakness of Bug/Flying offensive typing.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | - |
| Atk | 70 | **40** | -30 |
| Def | 50 | 50 | - |
| SpA | 100 | **110** | +10 |
| SpD | 50 | **60** | +10 |
| Spe | 65 | **80** | +15 |
| **BST** | **395** | **400** | **+5** |

Rationale:
- Atk dumped — Beautifly is a pure special attacker, 70 Atk was wasted.
- 110 SpA is strong enough to threaten after a Quiver Dance boost (165 effective).
- 80 Spe lets it outspeed most things after one Quiver Dance (+1 = 120 effective).
- 60 SpD gives it a tiny bit of special bulk to set up on resisted special attacks.
- Still fragile physically (60/50 HP/Def) — a glass cannon that needs the right moment to set up.

### Ability Changes
- **Ability 1: Tinted Lens** — Resisted moves deal neutral damage. Core identity.
- **Ability 2: Compound Eyes** — Accuracy x1.3. Alternative for Sleep Powder accuracy.
- **Hidden: Rivalry** — Kept from vanilla. Niche option.

### Learnset

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Absorb | 20 | Grass | Basic drain move |
| 1 | Gust | 40 | Flying | Basic Flying STAB |
| 10 | **Bug Buzz** | 90 | Bug | Evolution reward — primary STAB. Tinted Lens means nothing resists this. |
| 12 | **Sleep Powder** | — | Grass | Setup enabler. Put something to sleep, then Quiver Dance. |
| 16 | **Air Cutter** | 60 | Flying | Secondary STAB with high crit rate |
| 21 | **Quiver Dance** | — | Bug | THE move. +1 SpA/SpD/Spe. This is when the build fully turns on. |
| 27 | **Giga Drain** | 75 | Grass | Coverage + sustain. Keeps Beautifly alive while sweeping. |
| 33 | U-Turn | 70 | Bug | Pivot out if the matchup is bad |
| 36 | **Hurricane** | 110 | Flying | Nuke Flying STAB. Tinted Lens means even resistances take huge damage. |
| 42 | Morning Sun | — | Normal | Recovery for longer games |
| 48 | **Bug Buzz** | 90 | Bug | — (already learned, slot for emphasis) |

### The Math

With 110 SpA + Tinted Lens + Quiver Dance:

**After +1 Quiver Dance (165 effective SpA, 120 effective Spe):**

| Move | BP | STAB | Tinted Lens vs Resist | Effective vs Resist |
|------|----|------|-----------------------|---------------------|
| Bug Buzz | 90 | x1.5 = 135 | x1.0 (neutralized) | **135** |
| Hurricane | 110 | x1.5 = 165 | x1.0 (neutralized) | **165** |
| Giga Drain | 75 | — | x1.0 (neutralized) | **75 + heal** |

**Without Tinted Lens (for comparison):**
- Bug Buzz vs Steel: 90 x 1.5 x 0.5 = 67.5
- With Tinted Lens: 90 x 1.5 x 1.0 = 135. Double the damage.

The key insight: Tinted Lens doesn't just help against one type — it helps against EVERY resist. Bug/Flying is resisted by 6+ types. Tinted Lens turns all of them into neutral matchups, making Quiver Dance sweeps nearly impossible to wall.

### Ideal Items

1. **Wide Lens** — Hurricane goes from 70% to 91% accuracy. Beautifly can't afford to miss its nuke. Also helps Sleep Powder (75% to 97.5%). The #1 item because accuracy is the only thing holding the build back.
2. **Leftovers** — Passive recovery lets Beautifly stick around for multiple Quiver Dance boosts. For slower, greedier setups.
3. **Focus Sash** — Guarantees at least one Quiver Dance. Beautifly is fragile enough that a strong physical hit KOs before it can set up.

### Core Strategy

1. Switch Beautifly in on something it outspeeds or resists (Grass, Fighting, Ground-immune).
2. Sleep Powder the switch-in to buy a free turn.
3. Quiver Dance on the sleeping target.
4. Bug Buzz / Hurricane everything. Tinted Lens means nothing resists you.
5. Giga Drain to sustain if needed.

**When to use Beautifly:**
- Mid-game sweeper after checking for priority moves and physical attackers.
- Excellent against specially defensive teams — Quiver Dance boosts SpD too, so special walls can't stop it.
- Bad against fast physical attackers, Rock Slide users, and priority (Extreme Speed, Aqua Jet).

### Beautifly vs Other Bugs

| | Beedrill | Beautifly | Masquerain |
|---|---------|-----------|------------|
| **Role** | Merciless crit sweeper | Tinted Lens QD sweeper | Rain pivot |
| **Ability** | Merciless (crits on poisoned) | Tinted Lens (resists = neutral) | Intimidate |
| **Offense** | Physical, poison-dependent | Special, self-sufficient | Special, rain-dependent |
| **Setup** | Poison target first | Quiver Dance | None (pivot) |
| **Fantasy** | "I poison you, then crit you to death" | "Nothing walls me after I dance" | "I weaken you and switch out" |

---

## Cascoon (#268) — Cocoon Stage

### Build Identity
Transitional form. Exists for 3 levels (7-10). Shed Skin keeps it healthy. Slightly tougher than Silcoon to foreshadow Dustox's defensive nature.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | 50 | - |
| Atk | 50 | **35** | -15 |
| Def | 65 | **70** | +5 |
| SpA | 25 | 25 | - |
| SpD | 45 | **50** | +5 |
| Spe | 15 | 15 | - |
| **BST** | **250** | **245** | **-5** |

Rationale: Shifted points from unused Atk into defenses. Cascoon is even more defensive than Silcoon, foreshadowing Dustox. Vanilla Cascoon was oddly stronger offensively than Silcoon despite evolving into the defensive one.

### Ability
- **Shed Skin** (unchanged)

### Learnset
Unchanged. Harden at L1 and L7.

---

## Dustox (#269) — Prankster Status Controller

### Build Identity
**Dustox is a Prankster utility wall that grinds opponents down with priority status moves, screens, and poison.** It doesn't kill things directly — it makes everything on the opposing team miserable with priority Toxic, priority Light Screen, priority Whirlwind, and Bug/Poison STAB to finish weakened targets.

### Why Prankster?
Dustox already has Prankster in the vanilla expansion data — this is one of the rare cases where the existing ability is perfect. Dustox has high defenses (90/90), a deep status movepool (Toxic, Whirlwind, Light Screen, Protect, Moonlight), and Bug/Poison typing that resists Fighting, Grass, Fairy, and Poison. Prankster turns all of these status moves into +1 priority, meaning Dustox always acts first with its utility.

This is the "every move benefits" pattern again, but for status instead of offense. Prankster doesn't boost one move — it makes Dustox's entire support kit faster.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **75** | +15 |
| Atk | 50 | **40** | -10 |
| Def | 90 | **90** | - |
| SpA | 50 | **65** | +15 |
| SpD | 90 | **90** | - |
| Spe | 65 | **40** | -25 |
| **BST** | **405** | **400** | **-5** |

Rationale:
- HP buffed to 75 — combined with 90/90 defenses, Dustox becomes genuinely bulky (comparable to Nidoqueen's tankiness).
- Speed dumped to 40 — Dustox doesn't need speed because Prankster gives +1 priority on all status moves. Low speed also makes it a better Trick Room option.
- SpA raised to 65 — not a sweeper, but enough to finish weakened targets with Bug Buzz or Sludge Bomb.
- Atk lowered — Dustox is a special/status Pokemon, not a physical attacker.

### Ability Changes
- **Ability 1: Prankster** — Status moves get +1 priority. Core identity. Already in vanilla data.
- **Ability 2: Shield Dust** — Prevents secondary effects of moves. Defensive alternative.
- **Hidden: Compound Eyes** — Accuracy x1.3. Niche option for Poison Powder/Sleep Powder accuracy.

### Learnset

| Level | Move | BP | Type | Prankster? | Purpose |
|-------|------|----|------|------------|---------|
| 1 | Confusion | 50 | Psychic | No | Basic special attack |
| 1 | Poison Powder | — | Poison | **Yes — +1 priority** | Immediate status from L10 |
| 10 | **Sticky Web** | — | Bug | **Yes — +1 priority** | Entry hazard with priority. Set it turn 1. |
| 12 | **Venoshock** | 65 | Poison | No | 130 BP on poisoned targets. Combo with Poison Powder. |
| 16 | **Protect** | — | Normal | No | Scouting + Poison stalling |
| 21 | **Toxic** | — | Poison | **Yes — +1 priority** | Badly poison anything. Priority means you always get it off. |
| 27 | **Light Screen** | — | Psychic | **Yes — +1 priority** | Team support, halves special damage for 5 turns. |
| 30 | **Bug Buzz** | 90 | Bug | No | Primary Bug STAB for damage when needed |
| 33 | **Whirlwind** | — | Normal | **Yes — +1 priority** | Priority phazing. Force out setup sweepers before they move. |
| 36 | **Moonlight** | — | Fairy | No | Self-recovery to keep Dustox alive |
| 42 | **Sludge Bomb** | 90 | Poison | No | Secondary Poison STAB, 30% poison chance |
| 48 | **Toxic Spikes** | — | Poison | **Yes — +1 priority** | Hazard layering. Priority means you always get them down. |

### The Math

Prankster priority moves available:
- **Toxic** — Badly poisons anything. 1/8, 2/8, 3/8... damage per turn. With 75/90/90 bulk, Dustox outlasts most things.
- **Sticky Web** — Slows the entire opposing team by 1 stage on switch-in.
- **Light Screen** — Halves special damage to your team for 5 turns.
- **Whirlwind** — Forces switches with +1 priority. Racks up hazard damage + resets setup.
- **Toxic Spikes** — Poisons everything that switches in (grounded).
- **Poison Powder** — Poisons from turn 1.

**Venoshock combo:**
- Poison Powder (priority) turn 1 → Venoshock turn 2: 65 x 2.0 (poisoned) x 1.5 (STAB) = **195 effective BP** off 65 SpA.
- This is Dustox's primary damage option — not huge, but enough to threaten.

**Bulk comparison:**
- 75 HP / 90 Def / 90 SpD = effective physical bulk of 75 x 90 = 6750, special bulk = 6750
- For comparison, Nidoqueen (vanilla): 90 HP / 87 Def / 85 SpD = 7830 / 7650
- Dustox is slightly less bulky than Nidoqueen but has Prankster to compensate with priority recovery and status.

### Ideal Items

1. **Black Sludge** — Passive 1/16 HP recovery each turn (Dustox is Poison-type). Stacks with Moonlight for extreme longevity. The sustain item.
2. **Light Clay** — Extends Light Screen from 5 to 8 turns. If Dustox is playing team support, this is the item.
3. **Leftovers** — Generic recovery. Works if you don't want to commit to Poison typing for Black Sludge.

### Core Strategy

**The Grind:**
1. Lead with Dustox. Priority Sticky Web turn 1 slows the entire opposing team.
2. Priority Toxic on the first threat. They're now on a clock.
3. Protect to stall Toxic damage + scout moves.
4. Moonlight to heal. Repeat Protect/Moonlight cycle while Toxic ticks.
5. If they try to set up: priority Whirlwind forces them out and racks up Sticky Web + hazard damage.
6. If they send in a special attacker: priority Light Screen halves their damage.

**When to use Dustox:**
- Lead to set Sticky Web and slow the opposing team for your sweepers.
- Stall out threats with Toxic + Protect + Moonlight.
- Counter setup sweepers with priority Whirlwind.
- Support the team with Light Screen.
- NOT for raw damage. Dustox wins by making the opponent's life miserable, not by KOing.

### Dustox vs Other Walls/Supports

| | Nidoqueen | Dustox | Corsola |
|---|----------|--------|---------|
| **Role** | Poison Heal tank | Prankster status control | Hazard support pivot |
| **Ability** | Poison Heal (1/8 HP/turn) | Prankster (+1 priority status) | Regenerator |
| **Damage** | Moderate (Earth Power, Sludge Bomb) | Low (Venoshock combo) | Very low |
| **Utility** | Toxic, Stealth Rock | Sticky Web, Toxic, Whirlwind, Light Screen | Stealth Rock, Recover, Scald |
| **Speed** | Can act first sometimes | Always acts first (Prankster) | Always acts last |
| **Fantasy** | "I never die" | "I control the pace of the entire battle" | "I set rocks and pivot out" |

---

## Team Synergy

### Beautifly pairs with:
- **Swampert / Azumarill** — Beautifly resists Grass and Fighting, they resist Rock and Fire.
- **Dustox** (ironically) — Dustox sets Sticky Web, Beautifly sweeps with Quiver Dance on a slowed team.
- **Nidoking** — Nidoking handles Steel types that Beautifly's Tinted Lens still struggles against (neutral, not super effective).

### Dustox pairs with:
- **Beautifly** — Dustox slows the team with Sticky Web, Beautifly sweeps.
- **Physical sweepers** — Sticky Web + Toxic softens everything for a physical cleaner.
- **Fearow / Swellow** — Dustox sets up hazards and weakens, fast attackers clean up.

### The Wurmple Line Fantasy
The player catches a Wurmple early and gets either Silcoon or Cascoon. Both paths lead to viable Pokemon with completely different playstyles:
- **Beautifly path:** "I got the offensive one! Time to Quiver Dance sweep."
- **Dustox path:** "I got the defensive one! Time to grind them down with status."

Neither path is "the bad evolution." Both are competitive, both are interesting, and they complement each other on a team.
