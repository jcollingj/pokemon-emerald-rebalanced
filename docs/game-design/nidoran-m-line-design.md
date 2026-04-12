---
name: Nidoran♂/Nidorino/Nidoking
dex_numbers: 32, 33, 34
status: ready-to-implement
ability: Toxic Boost (primary) / Moxie (secondary, recommended) / Sheer Force (hidden)
role: Toxic Boost Berserker / Sheer Force Coverage Wallbreaker
evolution_line: [Nidoran♂ → Nidorino (Lv16) → Nidoking (Moon Stone)]
---

# Nidoran♂/Nidorino/Nidoking — Design Doc

## Build Identity

**Nidoking is a Toxic Boost berserker** that self-poisons with a Toxic Orb to activate a 1.5× Attack multiplier — turning his already formidable 120 Attack into a 180 effective Attack juggernaut. With wide physical coverage across Poison, Ground, Bug, and Fighting, he can rip through anything. He loses 11 HP per turn to poison damage, but with 180 effective Attack, most fights don't last long enough to matter.

The male line is defined by **aggression and pressure** — the exact opposite of Nidoqueen's patient attrition. He doesn't stall; he punches through.

The two Toxic Orb users could not be more different: **Nidoqueen heals from it, Nidoking kills with it.**

---

## Abilities

### Nidoran♂
- **Primary:** Poison Point — 30% poison on contact. Thematic for a bristled Poison-pin Pokemon.
- **Secondary:** Rivalry *(current code)* — **Recommend: Hustle** (1.5× Atk, 80% accuracy on physical moves). Hustle makes Nidoran♂ hit surprisingly hard for a tiny base Pokemon at the cost of accuracy — risky and exciting. Fits the "reckless aggressor" identity. *Note: Rivalry (+10%/−10% based on opponent gender) shapes nothing and should be replaced.*
- **Hidden:** Hustle *(current code)* — if Hustle becomes secondary, **Recommend: Moxie** as hidden (bonus Attack on KO, scales naturally with the sweeper payoff at evolution).

### Nidorino
- **Primary:** Poison Point — carries through.
- **Secondary:** Rivalry *(current code)* — **Recommend: Moxie** (+1 Attack on KO). Moxie transforms Nidorino from a generic physical attacker into an escalating threat. Each KO makes the next one faster. Thematic for the aggressive male line.
- **Hidden:** Hustle *(current code)* — fine; gives an alternate high-risk physical build.

### Nidoking
- **Primary:** **Toxic Boost** — 1.5× Attack when poisoned. With 120 base Attack, that's **180 effective Attack**. Hold Toxic Orb, get poisoned end of turn 1, start swinging with absolute power. This is the ability that defines the entire male line's end-game.
- **Secondary:** Rivalry *(current code)* — **Recommend: Moxie**. Rivalry has no design value; it doesn't shape what moves you pick. Moxie extends Nidoking's sweep potential: 1 KO → +1 Atk → 2 KO → +2 Atk → etc. With 180 effective Attack plus Moxie stacks, Nidoking can end games by himself.
- **Hidden:** **Sheer Force** — 1.3× on moves with secondary effects. Changes the build entirely: Gunk Shot (156 eff STAB), Iron Tail (130), Rock Slide (97). The tradeoff vs Toxic Boost is real: Toxic Boost benefits *every* physical move (including Earthquake), while Sheer Force specifically boosts moves with secondary effects and notably does **not** boost Earthquake. Choose your coverage profile.

*Why the ability pairing works:* Toxic Boost and Sheer Force ask completely different things. Toxic Boost → use whatever hits hardest (Earthquake, Megahorn, Poison Jab). Sheer Force → build around secondary-effect moves (Gunk Shot, Iron Tail, Poison Jab). Same Pokemon, meaningfully different item and moveset choices.

---

## Stats

### Nidoran♂

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 46 | 46 | — |
| Attack | 57 | 57 | — |
| Defense | 40 | 40 | — |
| Sp. Atk | 40 | 40 | — |
| Sp. Def | 40 | 40 | — |
| Speed | 50 | 50 | — |
| **BST** | **273** | **273** | — |

*Keep vanilla. The male line's higher base Attack vs the female's higher base HP/Def already tells the story — even at level 1, the stats reflect aggression vs. defense. Base form is intentionally weaker to give the evolution payoff meaning.*

### Nidorino

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 61 | 61 | — |
| Attack | 72 | 72 | — |
| Defense | 57 | 57 | — |
| Sp. Atk | 55 | 55 | — |
| Sp. Def | 55 | 55 | — |
| Speed | 65 | 65 | — |
| **BST** | **365** | **365** | — |

*Keep vanilla. Nidorino already has a clearly physical attacker profile (Attack > SpAtk, decent Speed). His learnset redesign is where the identity comes from, not stat changes. The existing distribution is correct.*

### Nidoking

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 81 | 90 | +9 |
| Attack | 102 | 120 | +18 |
| Defense | 77 | 85 | +8 |
| Sp. Atk | 85 | 65 | −20 |
| Sp. Def | 75 | 90 | +15 |
| Speed | 85 | 95 | +10 |
| **BST** | **505** | **545** | **+40** |

*The rebalance commits fully to physical dominance: maxed Attack, gutted SpAtk (no reason to use special moves), improved Speed and bulk. 95 Speed outspeeds a wide swath of mid-game threats. 65 SpAtk is the signal: don't use special moves. Already implemented.*

**With Toxic Boost active:**

| Stat | Value |
|------|-------|
| Effective Attack | **180** (120 × 1.5) |
| Approximate damage multiplier vs base | **+50%** |

---

## Learnset

### Design Principles
- Nidoran♂ (L1–16) introduces the **horn attacker + critical setup** identity with Focus Energy at L8
- Nidorino (L16+) introduces **Poison Jab + Megahorn** — the "choose your weapon" physical STAB + coverage
- Nidoking (Moon Stone) receives **Earthquake at evolution** as his signature Ground nuke, then builds toward the berserker finishers

### Nidoran♂ (Evolves at Level 16)

| Level | Move | Type | Power | Notes |
|-------|------|------|-------|-------|
| 1 | Leer | Normal | — | Lower opponent Defense; sets up for the heavy hits coming later. The male line opens with aggression. |
| 1 | Poison Sting | Poison | 15 | STAB; 30% poison chance. Weak but thematic — a venomous horn jab. |
| 5 | Peck | Normal | 35 | Physical; introduces the "I hit things with sharp body parts" identity. |
| **8** | **Focus Energy** | Normal | — | **First synergy move.** +2 crit stages. Introduces the "line up the shot" theme — Nidoran♂ takes a moment to aim before unleashing big horn attacks. Works immediately with multi-hit moves (each hit can crit). |
| 12 | Fury Attack | Normal | 15×2–5 | Multi-hit horn barrage; each hit independently checks the Focus Energy crit boost. Chaotic, powerful in execution. |
| 15 | Horn Attack | Normal | 65 | Single clean hit. A solid capstone before evolution — "I've graduated from pokes to real horn strikes." |

### Nidorino (Evolves via Moon Stone)

| Level | Move | Type | Power | Notes |
|-------|------|------|-------|-------|
| 1 | *(inherits Nidoran♂ learnset)* | | | |
| 20 | Poison Jab | Poison | 80 | **Physical STAB upgrade.** Replaces Poison Sting as the primary Poison attack. 30% poison chance. With Sheer Force: 104 BP (STAB = 156). The move that defines Nidorino's offensive output. |
| 24 | Megahorn | Bug | 120 | **Signature horn move.** 120 BP is enormous; the horn has grown into a true weapon. Bug coverage hits Grass, Psychic, and Dark. The Focus Energy payoff — aim + swing = likely crit. |
| 27 | Sucker Punch | Dark | 70 | Priority Dark attack. Fires first if opponent targets Nidorino with an attack that turn. Picks off fast threats that would otherwise outspeed. A taste of the "ruthless" male-line identity. |

### Nidoking (Moon Stone Evolution)

| Level | Move | Type | Power | Notes |
|-------|------|------|-------|-------|
| **0** | **Earthquake** | Ground | 100 | **Learns at evolution.** The definitive Ground STAB nuke. With Toxic Boost: 100 × 1.5 STAB × 1.5 boost = **225 effective power**. This is the move that makes Nidoking terrifying. |
| 1 | *(inherits Nidorino learnset)* | | | |
| 32 | Thrash | Normal | 120 | Berserker mode. 120 BP Normal with 2–3 turns of locked-in attacks, then confusion. Pokedex says "Once it goes on a rampage, there is no stopping it" — this move is the mechanical representation of that. Use when you want to commit. |
| 40 | Gunk Shot | Poison | 120 | **Ultimate Poison STAB.** 120 BP, 80% accuracy (the risk), 30% poison. With Toxic Boost: 180 BP STAB. With Sheer Force (no Toxic Boost): 156 BP STAB, boosted for secondary effect. At 40, the player has earned this nuke. |
| 48 | Superpower | Fighting | 120 | Fighting nuke for endgame coverage. Breaks Normal/Dark/Steel/Ice/Rock walls. The −1 Atk/Def drop is painful, but with 180 effective Attack to start, Nidoking can afford the self-nerf for one clean kill. |

---

## Ideal Items

| Rank | Item | Build | Reasoning |
|------|------|-------|-----------|
| #1 | **Toxic Orb** | Toxic Boost | Poisons Nidoking at end of turn 1, activating Toxic Boost. Nidoking takes ~11 HP/turn poison damage. With 90 HP, he has roughly 7 turns before fainting to self-poison — but 180 effective Attack should end fights in 2–3 turns. The trade is worth it. |
| #2 | **Choice Band** | Toxic Boost | For a coverage-first variant. 120 Atk × 1.5 (Band) = 180 effective Attack, same as Toxic Boost but without the poison cost. Tradeoff: locked into one move. Good if you're not ready to commit to Toxic Orb chip. |
| #3 | **Life Orb** | Sheer Force | Life Orb recoil is suppressed on Sheer Force-boosted moves. Gunk Shot: 120 × 1.3 (SF) × 1.3 (LO) × 1.5 (STAB) = **304 effective power**. The Sheer Force build uses Life Orb the same way Nidoqueen does — maximize on boosted moves, take zero chip. |

*Note: Toxic Boost + Life Orb also works (1.5 × 1.3 = 1.95× total), but the combined chip from Toxic Orb poison + Life Orb recoil drains HP fast. It's the high-octane glass cannon option.*

---

## Core Strategy

### Build 1: Toxic Boost Berserker (Primary)
**Ability:** Toxic Boost | **Item:** Toxic Orb

1. Switch in Nidoking — or lead with him if you expect a favorable matchup
2. End of turn: Toxic Orb activates → poisoned → **180 effective Attack begins**
3. **Turn 2:** Attack. Earthquake obliterates most things. Poison Jab + STAB covers Grass/Flying/Bug types that resist Ground. Megahorn hits Psychic types that laugh at Poison.
4. If it isn't dead, Sucker Punch finishes off anything that tries to outspeed
5. Moxie stacks if he KOs — each kill makes the next one even faster
6. Eventually, poison chip ends the run. That's fine — Nidoking is a heat-seeking missile, not a long-term resident.

*He doesn't stall. He comes in, hits everything as hard as possible, and burns out gloriously.*

### Build 2: Sheer Force Wallbreaker (Hidden Ability)
**Ability:** Sheer Force | **Item:** Life Orb

Sacrifices Earthquake (no secondary effect = not boosted) for maximum power on secondary-effect moves. Gunk Shot (120 × 1.3 × 1.3 = 203 BP STAB), Poison Jab (104 BP STAB), Iron Tail (130 BP). Rock Slide and Stone Edge add Rock coverage. The tradeoff: Earthquake is your best neutral move and you're giving it up for a narrower but more powerful coverage profile.

---

## Team Synergy

**Nidoking fits best with:**
- **Nidoqueen** — The asymmetric split is the whole point. Queen tanks, King sweeps. Together they cover each other's roles. King can handle Ghost/Normal walls that Queen's Poison STAB can't break; Queen can handle special attackers that threaten King's lower SpDef.
- **Toxic Spikes setters** — If Nidoqueen (or another teammate) has already laid Toxic Spikes, any Ground-immune opponent that switches in is automatically poisoned. Nidoking loves getting in on already-poisoned targets.
- **Special attackers** — Nidoking is purely physical (65 SpAtk). Pair with a special attacker to prevent the opponent from walling one dimension.
- **Pivots/U-turn users** — Gets Nidoking in safely so the Toxic Orb activates on a favorable turn. He doesn't want to eat a hit before his boost is active.

---

## Matchups

### Strong Against
- **Bulky physical walls** — 180 effective Attack breaks through most defensive Pokemon in the game. Physical walls need >2 DEV of Defense to stop him.
- **Electric/Fire/Poison/Rock types** — Earthquake is Ground STAB; immune to Electric, hits Fire/Poison/Rock for super-effective.
- **Grass/Psychic/Dark types** — Megahorn covers all three.
- **Pokemon that are already poisoned** — If Toxic Spikes are up, switching in triggers instant poison. Nidoking gets the Toxic Boost on the first turn he attacks.

### Weak Against
- **Ground-immune types** — Flying types and Levitators laugh at Earthquake. Need Poison Jab or Megahorn.
- **Physically defensive walls with Ground resistance** — Grass types resist Ground and may not care about Megahorn (Bug is neutral). Need Gunk Shot/Superpower.
- **Water types** — 2× weakness; common attacking type. Nidoking can't sponge Surfs well with his 90 HP / 85 Def.
- **Psychic types** — 2× weakness; Nidoking's SpDef (90) is decent but Psyshock (physical) hits his lower Defense.
- **Faster sweepers** — 95 Speed is good but not elite. Anything faster can outspeed before the Toxic Boost activates on turn 2. Sucker Punch covers the priority gap.

---

## Move Coverage Summary

Nidoking's final level-up toolkit:

| Move | Type | Power | Toxic Boost | Sheer Force |
|------|------|-------|-------------|-------------|
| Earthquake | Ground | 100 | ✅ 150 eff STAB | ❌ not boosted |
| Poison Jab | Poison | 80 | ✅ 120 eff STAB | ✅ 104 → 156 STAB |
| Megahorn | Bug | 120 | ✅ 180 eff | ❌ not boosted |
| Sucker Punch | Dark | 70 | ✅ 105 eff (+pri) | ❌ not boosted |
| Thrash | Normal | 120 | ✅ 180 eff | ❌ not boosted |
| Gunk Shot | Poison | 120 | ✅ 180 eff STAB | ✅ 156 → 234 STAB |
| Superpower | Fighting | 120 | ✅ 180 eff | ✅ 156 eff |

*Toxic Boost benefits every physical move uniformly. Sheer Force only applies to moves with secondary effects — Gunk Shot and Superpower are the big winners.*

---

## Design Notes

- The **Focus Energy at L8** builds toward Megahorn at L24: the player spends a few battles learning "set up → hit hard," which is the core Nidoking strategy preview (Turn 1: Toxic Orb activates; Turn 2: attack with boosted power).
- **Thrash at L32** is narrative: his Pokedex entry says "once it goes on a rampage, there is no stopping it." Thrash is the mechanical version of that lore, and arriving mid-game gives the player a brutish option they'll remember.
- The **Gunk Shot at L40** is deliberately late and risky (80% accuracy). It's the reward for leveling Nidoking — the ultimate version of what Poison Sting started as.
- **Nidoran♂ versus ♀ at base form:** Male has higher Attack, lower HP/Def. Female has higher HP/Def, lower Attack. Even at level 1, the gender split is encoded in the stats. The learnsets reinforce it: ♀ sets hazards at L8, ♂ crits things at L8.

---

## Checklist
- [x] Ability chosen and justified (Toxic Boost core; Moxie secondary recommended to replace Rivalry; Sheer Force hidden)
- [x] Synergy moves show up early (Focus Energy L8, Fury Attack L12; Poison Jab + Megahorn mid-game)
- [x] Stats reinforce the build role (120 Atk, 95 Speed, 65 SpAtk = physical-only)
- [x] Learnset follows the standard schedule
- [x] Clear niche (Toxic Boost physical berserker — distinct from Crawdaunt's Sheer Force setup, distinct from Nidoqueen's tank role)
- [x] Core strategy explainable in 2–3 sentences
