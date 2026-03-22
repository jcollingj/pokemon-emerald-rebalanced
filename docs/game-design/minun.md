---
name: Minun
dex_number: 312
status: designed
ability: Minus
role: Doubles Support Attacker
evolution_line: [Minun]
---

# Minun - The Voltage Anchor

## Design Philosophy

Minun is the support half of the Plusle/Minun duo — but "support" doesn't mean passive. Minus gives Minun 1.5× SpA when Plusle is on the field, so Minun hits hard. Its *role* is to be the thing that makes **Plusle** terrifying: Fake Tears drops the target's SpD by two stages, Helping Hand multiplies Plusle's next hit, and Wish keeps both Pokemon in fighting shape. Volt Absorb as the second ability means opposing Electric moves aimed at Minun are wasted — Plusle's Lightning Rod pulls single-target Electric away, but spread Electric (Discharge) hits both, and Minun just heals from it.

The player fighting this duo faces a trap: the "safer" Electric spread attacks feed Minun HP, and any targeted hit on Minun is redirected to Plusle anyway. The only way through is to hit Minun with non-Electric physical moves — but Minun's Charm or Fake Tears will punish that too.

## Ability Changes

- **Ability 1: Minus** — Raises SpA by 50% when an ally on the field has the Plus ability. Mirror of Plusle's Plus. Both activate at the same time the moment they're deployed together.
- **Ability 2: Volt Absorb** — Heals 25% HP when hit by Electric moves. Spread Electric moves (Discharge, Parabolic Charge) that Plusle can't redirect heal Minun instead of hurting it. Protects Minun's longevity and punishes Electric spam.
- **Hidden: Magic Guard** — Takes no indirect damage (weather, status residual, entry hazards). Makes Minun immune to poison/burn chip while freely using Charge Beam or Wish-stalling.

## Stat Changes

### Minun

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **65** | +5 |
| Atk | 40 | 40 | — |
| Def | 50 | **55** | +5 |
| SpA | 75 | **90** | +15 |
| SpD | 85 | **95** | +10 |
| Spe | 95 | 95 | — |
| **BST** | **405** | **440** | **+35** |

SpD bumped to 95 to lean into Minun's defensive role — it needs to survive while Plusle nukes. SpA pushed to 90 so that Minus activation (90 × 1.5 = 135 effective SpA) allows it to threaten KOs, not just shuffle support moves. Same 95 Speed as Plusle means they move in the same tier — no awkward turn order between the pair.

**With Minus active (Plusle on field):**
- Effective SpA: 90 × 1.5 = **135**

## Learnset

Minun gets Helping Hand earlier than Plusle (L12 vs L21) because its job is empowering the partner from the very first turns. Fake Tears comes late (L42) as a powerful closer — by then Minun has been supporting long enough that the SpD drop seals the game.

| Level | Move | Type | Cat | BP | Purpose |
|-------|------|------|-----|----|---------|
| 1 | Thunder Shock | Electric | Special | 40 | Basic STAB |
| 1 | Growl | Normal | Status | — | Debuff opener |
| 8 | **Nuzzle** | Electric | Physical | 20 | 100% paralysis — applies before Plusle acts |
| 12 | **Helping Hand** | Normal | Status | — | First synergy move — boosts Plusle's damage 50% from turn 1 |
| 16 | **Charm** | Fairy | Status | — | −2 Atk on physical attackers; doubles as Fairy coverage for Normal types targeting Minun |
| 21 | **Encore** | Normal | Status | — | Lock opponent into Helping Hand, Charm, or wasted attacks |
| 27 | **Charge Beam** | Electric | Special | 50 | SpA self-buff + STAB. Thematic "charging alongside Plusle." |
| 33 | **Wish** | Normal | Status | — | Pre-emptive heal — can target Plusle on next turn. Key sustain move. |
| 42 | **Fake Tears** | Normal | Status | — | −2 SpD on target. Plusle's Discharge into −2 SpD is devastating. Best late-game setup. |
| 48 | **Thunder** | Electric | Special | 110 | Full power closer when support isn't needed. |

**Teachable (TM/Tutor):** Thunderbolt, Volt Switch, Dazzling Gleam, Grass Knot, Hidden Power, Thunder Wave, Light Screen, Reflect, Protect, Shadow Ball, Toxic

## The Math

**Minun @ Sitrus Berry, Minus active, Plusle on field:**

| Scenario | Effective SpA | Key Move | Result |
|----------|---------------|----------|--------|
| Baseline | 90 × 1.5 = 135 | Thunder (110 BP) | Reliable KO on weakened targets |
| After Charge Beam +1 | 135 × 1.5 = 202 | Thunder (110 BP) | Threatening solo nuke |
| Fake Tears on target | 135 SpA vs −2 SpD (×2.5 eff) | Any move | Target essentially naked to special hits |

**Helping Hand + Plusle Discharge math:**
- Plusle's Discharge: 80 BP × (235 SpA from Plus+Specs) = massive
- Helping Hand adds 1.5× to that: 80 × 1.5 = 120 effective BP off 235 SpA
- Into a −2 SpD target from Fake Tears: Essentially everything dies

**Volt Absorb healing:**
- Spread Discharge from opponents: 80 BP Electric → heals Minun 25% HP
- Minun at 65 HP: restores ~16 HP per absorbed hit
- Combined with Wish (heals ~32 HP): Minun can stay healthy through multiple turns

## Ideal Items

1. **Sitrus Berry** — Activates at 50% HP for an instant 25% heal. Minun's job is to stay alive long enough to drop Fake Tears and enable the Plusle nuke. Sitrus buys that turn.
2. **Eject Button** — When hit hard, Minun flies out and Amy sends in the next Pokemon. Plusle stays on field solo until Minun can return. Disrupts the opponent's "kill Minun first" plan.
3. **Magnet** — 1.2× Electric. If Minun needs to go offensive (Plusle already fainted), this keeps its Charge Beam chain threatening.

## Core Strategy

### Turn 1 Opening
- Minun: **Nuzzle** the faster/scariest opponent → 100% paralysis + chip
- Plusle: **Encore** the other opponent to lock it in if it used something safe

### Turn 2 Setup
- Minun: **Helping Hand** on Plusle
- Plusle: **Discharge** → hits both opponents, 120 effective BP (Helping Hand boost) off 157 SpA (Plus only) = devastating

### Turn 3 Close
- Minun: **Fake Tears** on surviving threat
- Plusle: **Discharge** again → into −2 SpD target + Minun already paralyzed the other

### Wish Cycling
When Plusle takes hits:
1. Minun uses **Wish**
2. Plusle switches out (takes the heal on reentry)
3. Minun continues support; Plusle comes back fresh

### If Plusle Is KO'd
- Minus deactivates. Minun is now a 90 SpA Electric with 95 SpD, 95 Speed, and Volt Absorb.
- Not a powerhouse, but can stall with Wish, threaten paralysis via Thunder, and absorb Electric attacks for free.
- It's a speedbump, not a win condition — but it's a credible one.

## Team Synergy

- **Mandatory partner: Plusle.** Minus without Plus is just a 90 SpA Electric. Competent, not scary.
- **Ground check:** Minun cannot touch Ground types with its STAB. The duo needs a third teammate in the broader trainer strategy with non-Electric coverage.
- **Fake Tears for teammates:** Minun's Fake Tears doesn't care what's hitting next — if it drops SpD on a threat, any special attacker benefits.

## Matchup Analysis

**Strong vs:** Water, Flying, anything weak to Electric paralysis loops. Charm + Nuzzle + Wish makes physical attackers look silly.
**Weak vs:** Ground (Electric immunity, Nuzzle does nothing), Grass (takes Discharge neutrally), Poison (Toxic threatens unless Magic Guard hidden ability).
**Key counter:** Strong Ground-type physical attacker. Immune to STAB, ignores Charm+Nuzzle if faster, and Wish doesn't protect against OHKO burst.
**Specific doubles threat:** Spread moves from Ground types (Earthquake) hit both Plusle and Minun simultaneously and Volt Absorb doesn't block Ground. Single biggest danger to the pair.
