---
name: Magnemite
dex_number: 81
status: designed
ability: Electromorphosis
role: Magnetic Induction Counter-Puncher
ideal_items: Leftovers, Assault Vest, Air Balloon
evolution_line: [Magnemite, Magneton]
---

# Magnemite / Magneton — Design Brainstorm

## Context

Electric/Steel. Available Route 110 or New Mauville. Vanilla SpA is already excellent (95/120). The design challenge: Pikachu and Electrode already own the "fast Electric attacker" and "detonator" roles. Magnemite's niche should lean into what they can't do: **tank hits, use the defensive typing as a combat resource, and deliver decisive Electric punishment.** Electric/Steel has 11 resistances — this typing should be the weapon, not just a defensive wall.

**Vanilla stats for reference:**
- Magnemite: 25/35/70/95/55/45 — BST 325
- Magneton: 50/60/95/120/70/70 — BST 465

---

## Option 1: Analytic — The Calculated Striker

**Ability:** Analytic — +30% damage when moving after the opponent.

**Build identity:** A patient, deliberate special attacker that punishes faster Pokemon by going second on purpose.

**Signature interaction:** Thunder Wave → Analytic. Paralyze faster threats, then fire 90 BP Thunderbolt at +30% = 117 effective × 1.5 STAB = 175.5 effective. Everything predictable and consistent. With Charge on top: 110 × 2 (Charge) × 1.3 (Analytic) × 1.5 STAB = 429 effective against a paralyzed, non-moving target.

**Pros:**
- Consistent — works as long as you can maintain speed control
- Simple mental model: Thunder Wave first, fire big moves second
- Rewards careful, patient play
- Analytic fires even without setup against tanks/walls that naturally move slower

**Cons:**
- Requires Thunder Wave setup on faster threats — passive until then
- Boring if opponent has their own speed control
- The "+30% when going last" is useful but less exciting than a big combo payoff
- Doesn't do anything unique with the Steel typing — just a slow Electric attacker

**Why not this:** Reliable but not exciting. The design doesn't *require* the Steel typing to work. Analytic fires equally well on any slow Pokemon. There's no "only Magnemite can do this" moment.

---

## Option 2: Electromorphosis — The Magnetic Induction ✅ RECOMMENDED

**Ability:** Electromorphosis — when hit by any attack, the next Electric-type move used deals double damage.

**Build identity:** A fortress that stores kinetic energy from impacts and releases it as devastating Electric strikes — the more you hit it, the worse it gets.

**Signature interaction:** Flash Cannon (invite a Steel-neutral hit) → get hit → Thunderbolt at 125 SpA × 2 (Electromorphosis) × 1.5 STAB = **375 effective.** Stack Charge on top: Charge (double Electric + raise SpD) → take a hit (Electromorphosis stacks) → Thunder = 110 × 2 × 2 × 1.5 = **660 effective.** No other Pokemon in this game can set up a 660 effective special attack through normal combat.

The classic combo at L36+: **Lock-On → Zap Cannon.** Normally Zap Cannon is 50% accurate, making it unreliable. But with Lock-On guaranteeing the hit, Zap Cannon (120 BP + 100% paralysis) becomes a devastating finisher. If Electromorphosis is charged: 120 × 2 × 1.5 = **360 effective with guaranteed paralysis.** Combined with Metal Sound (−2 SpD) on the prior turn: utter devastation.

**Pros:**
- Thematically perfect: magnetic coils store energy from impacts and release it as electricity — this IS what Magnemite is
- Every defensive type resistance becomes an offensive opportunity: soak a Fire attack (resisted), fire back doubled Thunderbolt
- Exciting and readable: the player sees the charge-up and knows a big hit is coming
- Lock-On + Zap Cannon is a classic Magneton signature that slots in naturally
- Clear niche: no other Pokemon in the roster is a "take a hit → fire nuclear Electric"
- Charge + Electromorphosis stacking is a legitimate late-game payoff

**Cons:**
- Reactive — depends on the opponent attacking you
- Loses the charge if you use a non-Electric move before firing
- Needs enough HP to survive hits and actually fire back (stat boosts required)

**Why this over the others:** The Electric/Steel typing stops being passive and becomes *the strategy itself.* You actively want to tank a Fire or Rock hit (both resisted) to charge Electromorphosis. The learnset writes itself around this loop. The Lock-On + Zap Cannon combo is thematic, memorable, and turns the normally-unreliable Zap Cannon into a legitimate wincon.

---

## Option 3: Serene Grace — The Status Slot Machine (Unusual Option)

**Ability:** Serene Grace — secondary effect chances are doubled.

**Build identity:** A three-headed magnet that overwhelms opponents with constant paralysis, flinches, and stat drops — every move is a gamble that pays out more often than it should.

**Signature interaction:** Discharge with Serene Grace goes from 30% paralysis → **60% paralysis**. Tri Attack (20% status chance each) → **40% chance of burn, freeze, or paralysis.** Flash Cannon SpD drop → **40%.** Iron Head flinch → **60%.** Scope Lens or King's Rock stacked on top creates a full-court-press status machine.

| Move | Normal | Serene Grace |
|------|--------|-------------|
| Discharge | 30% para | 60% para |
| Tri Attack | 20% status | 40% status |
| Flash Cannon | 10% SpD drop | 20% SpD drop |
| Iron Head | 30% flinch | 60% flinch |

**Pros:**
- Genuinely unpredictable — multiple status procs per turn are terrifying
- Tri Attack at 40% gives Magneton a real chance to burn or freeze, which are game-changing statuses
- Discharge at 60% paralysis = reliably paralyzes spread in doubles
- No other Pokemon in the game uses this role

**Cons:**
- Secondary effects are ultimately RNG — Serene Grace makes luck better, not irrelevant
- Still loses to anything that OHKOs before you spread status
- Doesn't use Steel typing for anything special
- "I win because the dice love me" isn't a satisfying design identity
- Similar in spirit to Togekiss-style flinch abuse — a frustrating opponent rather than an exciting build

**Why not this:** Serene Grace is genuinely creative and the Tri Attack + Discharge status spread is real. But it's a reactive, luck-amplifying identity rather than a skill-based one. The "condition → payoff" pattern of Option 2 is more satisfying for both the player using it and the opponent fighting it.

---

## Recommended Build: Electromorphosis

**Build Identity:** Magnemite is a magnetic induction striker that stores kinetic energy from hits into its Electric coils and releases it as devastating Electric attacks.

---

## Stat Changes

### Magnemite

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 25 | **45** | +20 |
| Atk | 35 | 35 | — |
| Def | 70 | **75** | +5 |
| SpA | 95 | **100** | +5 |
| SpD | 55 | **65** | +10 |
| Spe | 45 | 45 | — |
| **BST** | **325** | **365** | **+40** |

**Rationale:** The HP boost is essential — Magnemite needs to survive hits to charge Electromorphosis. The vanilla 25 HP is too low to reliably take even resisted attacks. SpD patch makes it less of a liability against special attackers. Speed stays at 45: being slow is intentional (Lock-On + Zap Cannon combo is worth being second, not first).

### Magneton

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **70** | +20 |
| Atk | 60 | 60 | — |
| Def | 95 | **100** | +5 |
| SpA | 120 | **125** | +5 |
| SpD | 70 | **80** | +10 |
| Spe | 70 | 70 | — |
| **BST** | **465** | **505** | **+40** |

**Rationale:** Same philosophy scaled up. 70 HP lets Magneton absorb real damage before firing. 125 SpA makes the doubled Electromorphosis strike count. 100 Def + 80 SpD + 11 resistances = a fortress that's genuinely hard to one-shot, which is the whole premise.

---

## Ability Changes

- **Ability 1: Electromorphosis** — When hit by any attack, the next Electric-type move deals double damage. Core identity.
- **Ability 2: Sturdy** — Survive any single hit at 1 HP from full. Guarantees at least one charge-and-fire cycle even vs KO attempts.
- **Hidden: Analytic** — +30% damage when moving last. Synergizes naturally with 45/70 Speed — consistently fires as the slower Pokemon. A reliable fallback for players who prefer consistency over the high-variance Electromorphosis payoff.

---

## Learnset

### Magnemite (evolves at L30)

| Level | Move | BP | Type | Electromorphosis? | Purpose |
|-------|------|----|------|------------------|---------|
| 1 | Thunder Shock | 40 | Electric | **Yes → 120** | Basic STAB; Electromorphosis turns this into real damage |
| 1 | Metal Sound | — | Steel | — | −2 SpD on target; opens up huge damage on next Electric |
| 8 | **Charge** | — | Electric | — | **Build turns on:** doubles next Electric move AND raises SpD. Charge → take hit → Thunderbolt = 4× multiplier total |
| 12 | **Mirror Shot** | 65 | Steel | No | Steel STAB + 30% accuracy drop; invite physical hits off a Steel move to charge up |
| 16 | **Thunder Wave** | — | Electric | — | Paralysis support; slows threats before they KO you while charging |
| 21 | **Thunderbolt** | 90 | Electric | **Yes → 270 effective** | Main STAB payoff. Charged: 90 × 2 × 1.5 STAB off 100 SpA = devastating |
| 27 | **Flash Cannon** | 80 | Steel | No | Strong Steel STAB; invite a hit off this to charge for Thunderbolt |

### Magneton (L30+, keeps Magnemite moves)

| Level | Move | BP | Type | Electromorphosis? | Purpose |
|-------|------|----|------|------------------|---------|
| 30 | **Discharge** | 80 | Electric | **Yes → 240** | Evolution reward. AoE + 30% paralysis. Hits spread in doubles. Charged = 240 effective. |
| 33 | **Tri Attack** | 80 | Normal | No | Thematic signature. 20% burn / freeze / paralysis. Status spread. |
| 36 | **Lock-On** | — | Normal | — | The setup. Guarantees next move hits perfectly. Classic Magneton signature. |
| 42 | **Zap Cannon** | 120 | Electric | **Yes → 360** | Payoff: normally 50% acc, but Lock-On makes it guaranteed. 100% paralysis. Charged: 120 × 2 × 1.5 = 360 effective. |
| 48 | **Thunder** | 110 | Electric | **Yes → 330** | Endgame nuke. Charged + Charge stacked: 110 × 2 × 2 × 1.5 = 660 effective. |

### The Power Curves

**L21 combo (Magnemite):** Charge → [opponent attacks] → Thunderbolt
- 90 BP × 2 (Charge) × 2 (Electromorphosis) × 1.5 STAB off 100 SpA
- Effective: **540 raw output** — enough to one-shot most mid-game Pokemon

**L36 combo (Magneton):** Metal Sound → Lock-On → Zap Cannon
- Opponent is at −2 SpD, next move guaranteed to hit, 120 BP + 100% paralysis
- Opponent is crippled and paralyzed in 2 turns

**L36 charged combo:** Charge → [get hit] → Lock-On → Zap Cannon
- 120 × 2 (Charge) × 2 (Electromorphosis) × 1.5 = **720 effective, guaranteed paralysis**

---

## Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Leftovers** | Sustain through the setup turns. Magneton wants to tank hits to charge Electromorphosis — passive healing keeps HP topped up between charges. The consistent pick. |
| #2 | **Assault Vest** | SpD × 1.5. Combined with 80 SpD base + 11 resistances, Magneton becomes nearly unkillable on the special side. Can't use Charge or Lock-On (status moves), but for pure "soak hits, fire back" play this maximizes the Electromorphosis loop. |
| #3 | **Air Balloon** | Removes Ground weakness entirely until popped. Steel/Electric is grounded in this expansion (no passive Levitate), and Earthquake is the biggest threat. Air Balloon buys a crucial free switch-in. After it pops, Magneton has taken a hit → Electromorphosis is charged. The popping itself is the setup. |

---

## Core Strategy

### The Induction Loop
1. Magneton switches in on a resisted attack (Fire, Steel, Ice, Grass, etc.) — 11 resistances give many opportunities
2. Fire **Flash Cannon** or **Mirror Shot** — invite the opponent to hit back
3. Opponent attacks → Electromorphosis charges
4. Fire **Thunderbolt** (or **Zap Cannon** if Lock-On was set) at double power
5. Repeat, or pivot with the next switch-in

### The Charge Combo (mid-game power spike)
- Use **Charge** on an opponent who can't OHKO
- Opponent attacks — Electromorphosis AND Charge both apply to the next Electric move
- **Thunder** at 110 × 2 × 2 × 1.5 = 660 effective — this is endgame-level damage from a mid-game Pokemon
- Pair with **Metal Sound** beforehand for even more devastation

### The Lock-On / Zap Cannon Closer
- **Metal Sound** (−2 SpD) into **Lock-On** into **Zap Cannon** (120 BP + guaranteed paralysis)
- This 3-turn sequence disables an opponent entirely
- If Electromorphosis is charged during Lock-On setup: 120 × 2 × 1.5 = 360 off 125 SpA

### When to Use Magneton
- Vs Fire, Steel, Ice, Grass, Poison, Normal, Rock attackers — switch in, soak it, fire back
- As a "wall-breaker" — Metal Sound + Thunderbolt out-damages even high SpDef walls
- Vs anything that tries to chip with resisted physical hits — every hit charges the counter
- **Not** for sweeping from the lead — no priority, no setup safety. Needs the right matchup.

---

## Team Synergy

- **Earthquake users** — Magneton's only weakness it can't handle is Ground (immune to Electric, threatening EQ). Ground-type partner like Swampert handles this. Alternatively, Air Balloon buys the turn.
- **Status spreaders** — Thunder Wave support from teammates lets Magneton set up Charge safely (slower, paralyzed opponent = less damage coming in)
- **Screens support** — Light Screen from Electrode or Pikachu lets Magneton survive a special hit to charge Electromorphosis off it
- **Steel hunters** — Magneton traps Steel types with Magnet Pull (if that's ever the alternative build). In Electromorphosis builds, it's a natural check to anything Steel due to Flash Cannon STAB
- **Pairs with Electrode** — Electrode sets up screens and detonates, Magneton comes in behind screens, charges freely, fires nuclear Electric

---

## Matchup Analysis

**Strong vs:** Fire (resists, invites hit), Steel (neutrally resists, Flash Cannon STAB), Ice (resists), Grass (resists), Poison (immune), Normal, Rock, Bug, Dragon
**Weak vs:** Ground (4x super effective, only real hard counter), Fighting (2x), Fire hits hard despite the resist at low HP

**The design's counterplay:** Ground types. An Earthquake from Swampert, Donphan, or Golem immediately threatens Magneton. This is intentional — the answer to "absorb hits and fire Nuclear Electric" is "Earthquake before they charge." Players need a Ground-immune partner (Levitate, Air Balloon, Flying type) to handle Ground threats when Magneton is on the field.

**Ground immunity note:** In the expansion, Magneton does not have Levitate. Air Balloon fills this role. Once the balloon pops (from the opponent hitting it), Electromorphosis is charged AND Ground immunity is gone — the risk-reward is exactly right.

---

## Electric Type Role Summary

| | Pikachu | Electrode | Magnemite / Magneton |
|---|---------|-----------|---------------------|
| **Role** | Light Ball glass cannon | Speed supremacy detonator | Magnetic induction counter-puncher |
| **Ability** | Transistor (1.5× Electric) | Galvanize (Normal→Electric) | Electromorphosis (hit → 2× Electric) |
| **Speed** | 100 (fast) | 150 (fastest) | 45/70 (slow on purpose) |
| **Bulk** | Fragile | Fragile | Tanky (11 resistances) |
| **Fantasy** | "I control momentum" | "Nothing survives my exit" | "Hit me harder. I charge faster." |
| **Item** | Light Ball (required) | Self-sufficient | Leftovers / Air Balloon |

Three distinct Electric fantasies. No overlap.
