---
name: Nidoran♀/Nidorina/Nidoqueen
dex_numbers: 29, 30, 31
status: ready-to-implement
ability: Poison Heal (primary) / Poison Point (secondary) / Sheer Force (hidden)
role: Poison Heal Fortress / Sheer Force Coverage Attacker
evolution_line: [Nidoran♀ → Nidorina (Lv16) → Nidoqueen (Moon Stone)]
---

# Nidoran♀/Nidorina/Nidoqueen — Design Doc

## Build Identity

**Nidoqueen is a Poison Heal fortress** that uses a Toxic Orb to flip her poison weakness into 8% HP regeneration per turn, making her nearly impossible to wear down. Her massive Special Defense and HP let her tank most special threats indefinitely while she spreads Toxic Spikes and attacks back with boosted STAB. A Sheer Force hidden ability opens an alternate coverage-nuker build where every move hits at 1.69× with no recoil.

The female line is defined by **patience and attrition** — the exact opposite of Nidoking's berserk aggression. She doesn't sweep; she suffocates.

---

## Abilities

### Nidoran♀
- **Primary:** Poison Point — 30% poison on contact moves. Thematic for a spiny small Pokemon; punishes physical attackers early.
- **Secondary:** Poison Point *(current code)* — same ability. **Recommend: Hustle** (1.5× Atk, 80% accuracy on physical). Gives the tiny base form a volatile offensive option and contrasts nicely with the defensive payoff at final evolution.
- **Hidden:** Hustle *(current code)* — **Recommend: Poison Heal** (preview of Nidoqueen's core ability). Players who seek out the hidden ability get an early taste of the end-game identity.

### Nidorina
- **Primary:** Poison Point — keeps the contact-punishment identity through the mid-stage.
- **Secondary:** Poison Point *(current code)* — fine to keep; doubles down on the spiky-contact theme.
- **Hidden:** Poison Heal — same preview as Nidoran♀. Reward for hidden-ability hunters.

### Nidoqueen
- **Primary:** **Poison Heal** — The defining ability. When poisoned, Nidoqueen heals 1/8 max HP per turn instead of taking damage. With 105 HP, that's ~13 HP/turn. Hold a Toxic Orb and she becomes a regenerating wall.
- **Secondary:** Poison Point — contact punishment; less relevant at this stage but thematic.
- **Hidden:** **Sheer Force** — 1.3× power on moves with secondary effects. Combined with Life Orb (recoil suppressed on boosted moves), Nidoqueen becomes a 1.69× coverage nuke without any downside.

*Why these abilities work together:* Poison Heal and Sheer Force ask for opposite playstyles (tank vs attacker) but share the same STAB moves (Sludge Bomb, Earth Power). A player can run either build with the same Pokemon, making the ability choice feel like a real decision — not just "use the best one."

---

## Stats

### Nidoran♀

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 55 | 55 | — |
| Attack | 47 | 47 | — |
| Defense | 52 | 52 | — |
| Sp. Atk | 40 | 40 | — |
| Sp. Def | 40 | 40 | — |
| Speed | 41 | 41 | — |
| **BST** | **275** | **275** | — |

*Keep vanilla. The base form exists to level to 16 and showcase the hazard-setter identity. It doesn't need to be strong; it needs to be distinctive.*

### Nidorina

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | 85 | +15 |
| Attack | 62 | 50 | −12 |
| Defense | 67 | 70 | +3 |
| Sp. Atk | 55 | 75 | +20 |
| Sp. Def | 55 | 75 | +20 |
| Speed | 56 | 60 | +4 |
| **BST** | **365** | **415** | **+50** |

*Shifted toward special bulk. Supports the Toxic Spikes → Venoshock combo (special offense) and previews Nidoqueen's tanky profile. Already implemented.*

### Nidoqueen

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 90 | 105 | +15 |
| Attack | 82 | 70 | −12 |
| Defense | 87 | 95 | +8 |
| Sp. Atk | 75 | 85 | +10 |
| Sp. Def | 85 | 120 | +35 |
| Speed | 76 | 70 | −6 |
| **BST** | **495** | **545** | **+50** |

*The rebalance commits fully to the special wall role: enormous SpDef, boosted HP and Def, reduced Atk and Speed. 85 SpAtk is still enough to hurt things with Sludge Bomb + Earth Power. She doesn't need to be fast — she's meant to stay on the field and regen. Already implemented.*

---

## Learnset

### Design Principles
- Nidoran♀ (L1–16) introduces the **hazard/poison** identity with Toxic Spikes at L8
- Nidorina (L16+) introduces the **Venoshock combo** (Toxic + Venoshock for 195 effective power)
- Nidoqueen (Moon Stone) receives **Sludge Bomb at evolution** as her signature STAB, then gradually unlocks Earth Power and wall-breaking coverage

### Nidoran♀ (Evolves at Level 16)

| Level | Move | Type | Power | Notes |
|-------|------|------|-------|-------|
| 1 | Growl | Normal | — | Utility; lower opponent Attack |
| 1 | Poison Sting | Poison | 15 | STAB; 30% poison chance on a small pin rabbit |
| 5 | Scratch | Normal | 40 | Physical coverage; usable early |
| **8** | **Toxic Spikes** | Poison | — | **First synergy move.** Introduces the hazard setter identity. Opponent switches → poisoned automatically. The build turns on here. |
| 12 | Double Kick | Fighting | 30×2 | Coverage vs Rock, Normal, Dark; Fighting STAB for small threats |
| 15 | Bite | Dark | 60 | Dark coverage; 30% flinch. Last move before evolution — a satisfying pickup. |

### Nidorina (Evolves via Moon Stone)

| Level | Move | Type | Power | Notes |
|-------|------|------|-------|-------|
| 1 | *(inherits Nidoran♀ learnset)* | | | |
| 20 | Toxic | Poison | — | Direct poison application. Slower than T-Spikes but reliable vs single targets or after switches |
| 24 | Venoshock | Poison | 65/130 | **Second synergy move.** 65 BP doubles to 130 if target is poisoned. With STAB = 195 effective power. The Toxic→Venoshock 2-step combo is the signature Nidorina play. |
| 27 | Crunch | Dark | 80 | Stronger Dark coverage; 20% SpDef drop (Sheer Force eligible at Nidoqueen) |

### Nidoqueen (Moon Stone Evolution)

| Level | Move | Type | Power | Notes |
|-------|------|------|-------|-------|
| **0** | **Sludge Bomb** | Poison | 80 | **Learns at evolution.** 30% poison secondary = boosted to 104 BP by Sheer Force. The Poison Heal build uses it for offense; the Sheer Force build uses it the same way. Primary STAB anchor. |
| 1 | *(inherits Nidorina learnset)* | | | |
| 32 | Earth Power | Ground | 90 | Ground STAB; 10% SpDef drop = boosted to 117 BP by Sheer Force. Excellent neutral coverage alongside Poison STAB. |
| 40 | Superpower | Fighting | 120 | Physical nuke for breaking Normal/Dark/Steel walls. Covers types that resist Poison/Ground. |
| 48 | Sludge Wave | Poison | 95 | Upgrade Poison STAB. Wide-hitting nuke when you need max power. |

*Note: Coverage moves (Ice Beam, Thunderbolt, Flamethrower, Shadow Ball) should be in the teachable learnset — Nidoqueen can access them via TM but doesn't learn them naturally.*

---

## Ideal Items

| Rank | Item | Build | Reasoning |
|------|------|-------|-----------|
| #1 | **Toxic Orb** | Poison Heal | Poisons Nidoqueen at end of turn 1, activating Poison Heal for +13 HP/turn. The Toxic Orb's "penalty" becomes a permanent free Leftovers. Must-have for the tank build. |
| #2 | **Life Orb** | Sheer Force | Life Orb recoil is suppressed on Sheer Force-boosted moves. Result: 1.3 (SF) × 1.3 (LO) = **1.69× damage with zero chip**. Sludge Bomb goes from 80 to 135 effective, Earth Power from 90 to 152. |
| #3 | **Leftovers** | Either | Budget/safe option when not running a specific strategy. +6 HP/turn — useful if you haven't found a Toxic Orb yet. |

---

## Core Strategy

### Build 1: Poison Heal Fortress (Primary)
**Ability:** Poison Heal | **Item:** Toxic Orb

1. Switch in Nidoqueen — her bulk (105/95/120) tanks the first hit
2. End of turn: Toxic Orb activates → poisoned → **+13 HP/turn begins**
3. Set Toxic Spikes to passively poison the opponent's entire team
4. Use Sludge Bomb + Earth Power to force switches (Poison/Ground STAB hits most of the game)
5. When threatened, just stay in — Poison Heal outraces chip damage from most attacks
6. Use Toxic on targets the Toxic Spikes don't catch (Flying types, Steel types, etc.)

*She doesn't sweep. She outlasts. The opponent runs out of options.*

### Build 2: Sheer Force Nuker (Hidden Ability)
**Ability:** Sheer Force | **Item:** Life Orb

The same STAB coverage hits at 1.69× with no Life Orb recoil. Sludge Bomb (135 eff), Earth Power (152 eff), plus boosted coverage via TM (Ice Beam 152, Thunderbolt 152, Flamethrower 152). Every move is dangerous. This build sacrifices the sustain identity for pure wallbreaking pressure.

---

## Team Synergy

**Nidoqueen fits best with:**
- **Physical sweepers** — She tanks special hits so they don't have to. Pair with Nidoking or a fast physical attacker who struggles vs special walls.
- **Entry hazard support** — Toxic Spikes from Nidoqueen + Stealth Rock from a teammate is brutal chip stack. Forces constant switching into guaranteed damage.
- **Defog users (your side)** — If opponent has hazards themselves, a Defog user keeps Nidoqueen healthy so Poison Heal can do its work.
- **Ground-immune teammates** — Nidoqueen is weak to Ground. A Flying type or Levitate user appreciates the Toxic Spikes she sets and covers her Ground weakness.

---

## Matchups

### Strong Against
- **Special attackers** — 120 SpDef tanks most special hits. Even super-effective special moves often don't one-shot her.
- **Passive teams** — Toxic Spikes make every switch painful. Forces opponent to play aggressively.
- **Poison/Electric/Rock types** — Ground STAB covers all of them; immune to Poison damage (already poisoned by Toxic Orb).
- **Physical attackers** — 95 Defense + Poison Heal outraces most physical chip over time.

### Weak Against
- **Water-type attackers** — 2× weakness, common type. Surf/Hydro Pump hurts even with 120 SpDef.
- **Ground-type attackers** — 2× weakness, physical Ground moves punch through her Def.
- **Psychic-type attackers** — 2× weakness; Poison typing is vulnerable to Psychic.
- **Ice-type attackers** — 2× weakness; Ice Beam is common coverage.
- **Steel types** — Immune to Toxic Spikes and poison; she can hit with Earthquake but loses the hazard value.

*Nidoqueen's 4 common weaknesses mean she can't switch in blindly. But once she's in and healing, forcing her out costs the opponent valuable turns.*

---

## Design Notes

- The **Nidoran♀ base form** emphasizes support over offense — Toxic Spikes at L8 is unusually early for a hazard. This tells the player "this line is a poison team." Most base forms never get hazards.
- The **Venoshock combo on Nidorina** (Toxic + Venoshock = 195 effective power with 75 SpAtk) is a preview of the Poison synergy that Nidoqueen perfects. The player learns the 2-step poison combo on Nidorina.
- **Sludge Bomb at evolution** is the "ding" moment — Moon Stone Nidorina doesn't just get a big stat boost, she gets a real move. The player immediately has a strong STAB to use.
- The **Poison Heal vs Sheer Force** duality means the same Pokemon has two genuinely different builds. This is intentional — Nidoqueen rewards players who experiment with abilities.

---

## Checklist
- [x] Ability chosen and justified (Poison Heal + Sheer Force dual identity)
- [x] Synergy moves show up early (Toxic Spikes L8, Venoshock L24)
- [x] Stats reinforce the build role (120 SpDef fortress)
- [x] Learnset follows the standard schedule
- [x] Clear niche (Poison Heal tank — distinct from every current Pokemon)
- [x] Core strategy explainable in 2–3 sentences
