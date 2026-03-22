---
name: pokemon-design
description: Design individual Pokemon builds for Pokemon Emerald Rebalanced. Use when creating or reviewing a Pokemon's ability, stats, learnset, or build identity. Covers design principles, the standard learnset schedule, and the ability-moveset synergy requirement.
---

# Pokemon Design

Every Pokemon in this game should feel like it has a "build" — a clear synergy between its ability and learnset that makes it fun to play and strategically distinct.

## Design Principles

### 1. Ability-Learnset Synergy

The single most important rule: **the ability must shape the learnset, and the learnset must reward the ability.**

The player should feel clever using the Pokemon because the moves and ability click together in an obvious, satisfying way.

When designing, start with the ability. Ask: "What moves make this ability sing?" Then build the learnset around that answer.

#### Proven Synergy Patterns

From implemented designs, these are the patterns that work:

- **Multiplier stacking** — Two sources of damage amplification that compound. Pikachu's Transistor (1.5x Electric) + Light Ball (2x stats) = nuclear output on a fragile body. The excitement comes from the math being absurd.
- **Condition → payoff** — Set up a state, then exploit it. Beedrill poisons with Powder, then Merciless guarantees crits. Nidoking self-poisons with Toxic Orb, Toxic Boost gives 1.5x Attack. The player executes a 2-step combo.
- **Every move benefits** — The ability makes the entire moveset better, not just one move. Blastoise's Mega Launcher boosts Water Pulse, Aura Sphere, Dragon Pulse, Dark Pulse — you can't pick a bad move.
- **Ability rework** — Take a weak/boring ability and give it a new combat effect. Zigzagoon's Pickup became Multiscale-at-full-HP, enabling Belly Drum setup. The ability still "feels" like Pickup thematically.
- **Asymmetric splits** — Same Pokemon line, different builds for each gender/branch. Nidoqueen (Poison Heal tank) vs Nidoking (Toxic Boost sweeper). Same poison theme, opposite roles.
- **Defensive layering** — Multiple small defensive effects that stack into something greater. Mudkip's buffed Rain Dish (1/8 heal + 1.5x Def in rain) + Aqua Ring + Curse + Scald burns = unkillable.

#### Abilities to Avoid

**Reactive "+1 when hit by X" abilities are too passive.** Justified, Rattled, Steam Engine, etc. — these don't shape what moves you pick. They just passively trigger and give a small boost. They don't create a build identity.

When we encounter these on a Pokemon, replace them with something that actually shapes the moveset. Good abilities make you excited to pick specific moves. Bad abilities just give you a stat bump you didn't earn.

Examples of what to do instead:
- Gallade: Justified → **Vorpal Blade** (slicing moves always crit — now the entire learnset matters)
- Beedrill: Swarm → **Merciless** (guaranteed crits on poisoned targets — creates a 2-step combo)

### 2. Competitive Stats

Stats should reinforce the build identity. Buff weak Pokemon so they're viable — don't be shy about BST increases.

Guidelines:
- Sweepers need speed OR priority moves to compensate (Zigzagoon has Extreme Speed, not speed)
- Tanks need HP + one defense stat. Don't max both defenses — pick a specialty
- Glass cannons can work if the damage math is exciting enough (Pikachu)
- Early-game Pokemon should remain viable into late game with stat boosts
- BST targets: ~350-420 for base forms, ~500+ for final evolutions

### 3. Items Are Part of the Build

Every Pokemon should have a top 3 item list that synergizes with its build. The item should feel like it "completes" the Pokemon — not just a generic stat boost, but something that clicks with the ability and moveset.

**Always define the top 3 items for each design:**

| Pokemon | #1 Item | #2 Item | #3 Item |
|---------|---------|---------|---------|
| Pikachu | Light Ball (2x stats) | Choice Specs | Focus Sash |
| Nidoqueen | Toxic Orb (activates Poison Heal) | Leftovers | Black Sludge |
| Nidoking | Toxic Orb (activates Toxic Boost) | Life Orb | Choice Band |
| Zigzagoon | No item (enables Pickup Multiscale) | Sitrus Berry | — |
| Beedrill | Loaded Dice (multi-hit) | Scope Lens (crits) | Choice Band |
| Blastoise | Choice Specs | Leftovers | Assault Vest |
| Breloom | Loaded Dice (Bullet Seed) | Choice Band | Focus Sash |
| Gardevoir | Choice Specs | Leftovers | Eject Button |
| Gallade | Choice Band | Life Orb | — |
| Swampert | Damp Rock (rain extension) | Leftovers | Sitrus Berry |

When designing, ask: "What item makes this build's math absurd?" That's the #1 item. Then ask: "What's the safe/consistent pick?" That's #2. And "What enables a different playstyle?" for #3.

### 4. Clear Niche

No two Pokemon should fill the exact same role. Each one answers: "Why would I pick this over something else?"

Current roles for reference:
- Pulse Mage (Blastoise) — coverage specialist, every move boosted
- Light Ball Glass Cannon (Pikachu) — nuclear damage, fragile
- Setup Sweeper (Zigzagoon) — Belly Drum + priority
- Poison Heal Tank (Nidoqueen) — unkillable special wall
- Toxic Boost Sweeper (Nidoking) — self-poison physical attacker
- Rain Fortress (Mudkip/Swampert) — defensive layering in rain
- Technician Priority Fighter (Breloom) — weak moves boosted, Mach Punch priority
- Empathic Special Pivot (Gardevoir) — Trace rework, +1 SpA on each switch-in
- Vorpal Blade Master (Gallade) — slicing moves always crit, no setup needed

## Standard Learnset Schedule

All Pokemon follow this level-up pattern. Not every slot needs a new move (some can be empty or repeat utility), but the **timing** is fixed:

| Level | Slot | Purpose |
|-------|------|---------|
| 1 | Starter moves | Basic STAB or utility (Tackle, Leer, etc.) |
| 8 | **First synergy move** | The first move that plays into the ability. This is when the build "turns on." |
| 12 | **Second synergy move** | A second move that works with the ability, or strong coverage. By 12 the build should feel real. |
| 16 | Evolution / power move | Typically first evolution level. Learn a stronger STAB or setup move. |
| 21 | Mid-game move | Coverage, utility, or a setup move (Swords Dance, Calm Mind, etc.) |
| 27 | Strong move | A powerful STAB or signature-tier move. Mid-game power spike. |
| 33 | Late-mid move | Coverage or team utility (screens, hazards, pivoting) |
| 36 | Evolution / capstone | Second evolution level for 3-stage lines. Major move unlock. |
| 42 | Endgame move | Top-tier coverage or signature move |
| 48 | Final move | The strongest or most defining move in the kit |

### Guidelines

This schedule is a **rough pacing guide**, not a strict rule. Individual Pokemon will vary — some get their synergy online earlier, some later. The important thing is:

- The learnset should feel like it has a rhythm — new moves spread out, not all front-loaded or back-loaded.
- Synergy moves should show up early enough that the build feels fun to use, not just at endgame.
- Evolution levels are natural moments for a power spike, so lean into that when it fits.
- **Level-up moves must be thematically natural.** The level-up learnset should contain moves the Pokemon would logically develop on its own — STAB moves, signature moves, and thematically fitting utility. TM-quality coverage moves (Thunderbolt, Ice Beam, Flamethrower, Earthquake, etc.) belong in the teachable learnset, not level-up. A cat doesn't naturally learn Thunderbolt.
- **Don't front-load the best move.** The strongest STAB move (e.g., Return at 102 BP) is a payoff — it goes in the L27+ range. Early synergy moves (L8, L12) should be weaker moves that introduce the build concept, not the final nuke.

### Evolution Levels

**Generally leave evolution levels at their vanilla values.** Don't change when a Pokemon evolves — instead, make the base form better so it's fun to use at whatever level it naturally is. The learnset schedule is a guide for move pacing, not a mandate to change evolution levels.

Exceptions:
- Trade evolutions should be removed (use level-up or Linking Cord instead)
- Only adjust evolution level if it's truly absurd — fossil Pokemon at L40 is fine, make the base form viable instead

### Adapting the Schedule

- **Two-stage Pokemon** (e.g., Poochyena → Mightyena): Keep vanilla evolution level. The learnset schedule adapts around the actual evolution point.
- **Single-stage Pokemon** (e.g., Nosepass): No evolution gates, so the power curve should be smoother. Still follow the level timing.
- **Three-stage Pokemon** (e.g., Squirtle → Wartortle → Blastoise): Keep vanilla evolution levels. The learnset splits across forms.

## Design Doc Template

When designing a Pokemon, create a GitHub Issue using the `project-management` skill with prefix `pokedesign: <Name> #<Dex Number>`. The issue body should cover:

1. **Build Identity** — One sentence: "This Pokemon is a [role] that uses [ability] to [do what]."
2. **Ability** — What ability and why.
3. **Stat Changes** — Table of vanilla vs rebalanced.
4. **Learnset** — Full level-up table following the standard schedule.
5. **Ideal Items** — Top 3 items ranked, with reasoning for each.
6. **Core Strategy** — How the build plays in practice.
7. **Team Synergy** — What teammates complement it.
8. **Matchups** — What it's strong/weak against.

## Checklist

Before a design is "Ready to Implement":

- [ ] Ability chosen and justified
- [ ] Synergy moves show up early enough that the build feels fun
- [ ] Stats reinforce the build role
- [ ] Learnset follows the standard schedule
- [ ] Clear niche — doesn't duplicate another Pokemon's role
- [ ] Core strategy is explainable in 2-3 sentences
