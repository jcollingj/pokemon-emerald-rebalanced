---
name: Tyrogue Line
dex_numbers: [236, 106, 107, 237]
status: designed
evolution_line: [Tyrogue, Hitmonlee, Hitmonchan, Hitmontop]
recommended:
  tyrogue: Guts
  hitmonlee: Reckless
  hitmonchan: Compound Eyes
  hitmontop: Contrary
---

# Tyrogue / Hitmonlee / Hitmonchan / Hitmontop — Design Brainstorm

## Context

The Hitmon family represents three distinct martial arts philosophies branching from one scrappy youth. Each final form must feel mechanically distinct — not just reskins of each other or of existing fighters.

**Existing fighter niches to avoid duplicating:**
- Breloom: Technician + priority multi-hit (Mach Punch, Bullet Seed)
- Hariyama: Iron Fist + elemental punches, slow tank (50 Spe)
- Machamp: No Guard + Dynamic Punch confusion locker
- Gallade: Vorpal Blade + slicing moves always crit

**The trio's intended niches:**
- Hitmonlee: High-speed, high-risk kicker — all-or-nothing sweeper
- Hitmonchan: Status-inducing boxer — enhanced secondary effects on every punch
- Hitmontop: Contrary spinner — the strongest move also makes you tankier

**Note on Brawly's gym:** Brawly's Hitmonchan uses Iron Fist (gym design already fixed). The player's Hitmonchan is designed separately with Compound Eyes for a distinct role from Hariyama.

---

## TYROGUE (#236)

### Vanilla Stats

| Stat | Value |
|------|-------|
| HP | 35 |
| Atk | 35 |
| Def | 35 |
| SpA | 35 |
| SpD | 35 |
| Spe | 35 |
| **BST** | **210** |

Evolution at L20: Atk > Def → Hitmonlee · Atk < Def → Hitmonchan · Atk = Def → Hitmontop

---

### Option 1: Guts ★ RECOMMENDED

**Ability:** Guts — 1.5× Attack when afflicted by a status condition (burn, paralysis, poison, sleep, freeze).

**Build identity:** The underdog who trains harder when hurt — powers through pain to hit harder.

**Signature interaction:** Any opponent-inflicted status triggers 1.5× Atk. Early trainers use status moves freely — Tyrogue turns their tactics against them. Even a burn (which halves Atk normally) is partially compensated by the 1.5× Guts boost.

**Pros:** Thematic for Tyrogue's Pokédex entry ("Tyrogue become stressed if they don't get to train every day"), readable and clean, works without held items at early levels.

**Cons:** Passive trigger — requires the opponent to inflict status. No ability-driven offensive strategy on Tyrogue's own initiative.

---

### Option 2: Hustle

**Ability:** Hustle — 1.5× physical Attack, but accuracy reduced by 20%.

**Build identity:** The wild-swinging untrained brawler — hits devastatingly when it connects, but misses often.

**Signature interaction:** Hustle + Low Kick = huge weight-based damage that misses 20% more than normal. High variance fight-by-fight.

**Pros:** Big numbers on a tiny Pokémon, unique risk/reward feel for a pre-evolution stage.

**Cons:** Accuracy penalty makes Tyrogue frustrating to use over 20 levels. Missing is irritating, especially since Tyrogue's moves are already modest. Better reserved for evolved forms.

---

### Option 3: Fighting Spirit (Reworked Vital Spirit)

**Ability:** Fighting Spirit — Cannot be put to sleep. When HP drops below 1/3, all stats +1.

**Build identity:** The comeback kid — most dangerous when cornered, digs deepest under pressure.

**Signature interaction:** Survive a hit that drops HP below 1/3 → all stats +1 → retaliate with a powered-up attack. With Focus Sash equipped, guaranteed to activate once.

**Pros:** Exciting comeback mechanic, thematic for the "never give up" Tyrogue lore, turns low BST into a feature (it *wants* to be in danger).

**Cons:** Complex for a pre-evolution; hard to capitalize on +1 all stats at level 10-20 with weak moves. Overdesigned for a 20-level throwaway stage.

---

### ★ Recommendation: Guts

Guts is clean, thematic, and readable. Tyrogue exists for 20 levels — it doesn't need a complex activation condition. Early routes have plenty of status users (Zubat's Supersonic, Makuhita opponents' Bulk Up → Drain Punch burns, etc.) and Tyrogue powering through makes every status feel like a challenge accepted rather than a setback.

---

### Tyrogue Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 35 | **45** | +10 |
| Atk | 35 | **50** | +15 |
| Def | 35 | **40** | +5 |
| SpA | 35 | 35 | — |
| SpD | 35 | **40** | +5 |
| Spe | 35 | **45** | +10 |
| **BST** | **210** | **255** | **+45** |

**Rationale:** Tyrogue must feel competent across 20 levels. +15 Atk and +10 Spe make its early punches land and let it keep up on routes. Def/SpD nudges so it's not a glass cannon before it's had a chance to be fun.

---

### Tyrogue Learnset (evolves L20)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Tackle | 40 | Normal | Basic physical starter |
| 1 | Leer | — | Normal | Defense drop utility |
| 8 | **Fake Out** | 40 | Normal | Priority flinch — first taste of combat timing, works all three evolution paths |
| 12 | **Low Kick** | Varies | Fighting | Weight-based Fighting STAB — thematic "kicking" move that hints at Hitmonlee |
| 16 | **Force Palm** | 60 | Fighting | Stronger Fighting STAB + 30% paralysis — versatile for all three branches |
| 20 | *evolves* | — | — | — |

---

---

## HITMONLEE (#106)

### Vanilla Stats

| Stat | Value |
|------|-------|
| HP | 50 |
| Atk | 120 |
| Def | 53 |
| SpA | 35 |
| SpD | 110 |
| Spe | 87 |
| **BST** | **455** |

Vanilla abilities: Limber / Reckless / Unburden

---

### Option 1: Reckless ★ RECOMMENDED

**Ability:** Reckless — 1.2× damage on moves that cause the user recoil damage.

**Build identity:** The all-or-nothing striker who commits completely to every kick — devastating when it lands, devastating to itself when it doesn't.

**Signature interaction:** High Jump Kick (130 BP) × Reckless (1.2×) = **156 effective BP** — one of the highest single-hit Fighting outputs in the game. If HJK misses or hits a Ghost-type, Hitmonlee takes 50% of max HP in crash damage. Complete commitment every time.

**Pros:** Highest damage ceiling in the fighter roster; clear risk/reward identity that matches Hitmonlee's glass-cannon stats; HJK is Hitmonlee's signature move and Reckless makes it terrifying.

**Cons:** Very binary — a Ghost switch-in or a predicted Protect ends Hitmonlee's run immediately. Requires opponent knowledge to play safely.

---

### Option 2: Unburden

**Ability:** Unburden — Speed doubles after the held item is consumed or knocked off.

**Build identity:** The explosive speed spike sweeper — deliberately trigger item loss to become the fastest thing on the field.

**Signature interaction:** White Herb + Close Combat → stat drop cancelled, White Herb consumed → Unburden activates → Hitmonlee at ~174 Speed outspeeds every non-priority threat and follows up with Mach Punch or a second Close Combat.

**Pros:** Creative one-turn setup with counterplay (Knock Off removes item without triggering Unburden, Trick disrupts), can sweep entire teams after trigger, very unique Speed-spike archetype.

**Cons:** One-time window — once item is consumed the bonus is persistent but the setup is fragile and item-dependent. Inconsistent without the right item. Matchup-dependent more than Reckless.

---

### Option 3: Scrappy

**Ability:** Scrappy — Normal and Fighting moves hit Ghost-type Pokémon normally (removes Ghost immunity).

**Build identity:** The relentless kicker who refuses to be walled — High Jump Kick hits Ghosts, the one immunity that normally shuts down Fighting types entirely.

**Signature interaction:** High Jump Kick on a Ghost-type (normally crashes for 50% HP since it "misses") instead makes full contact for 130 BP. Gengar, Misdreavus, Duskull walls — Hitmonlee removes them.

**Pros:** Genuinely unique structural advantage; solves Fighting's core type weakness; creates a fighter specifically built to punish Ghost answers to the type.

**Cons:** Scrappy only matters against Ghost-types — feels niche against most opponents. The identity is "I counter one type" which isn't a build philosophy. Reckless creates a play philosophy; Scrappy creates a matchup.

---

### ★ Recommendation: Reckless

Reckless + High Jump Kick is Hitmonlee's identity. The risk/reward is perfect: 156 effective BP is the hardest physical hit in the roster, but requires committing fully — if HJK whiffs, Hitmonlee pays dearly. This creates a real decision: HJK into the unknown (highest reward) or Close Combat (safe STAB with no recoil)? That dilemma is what makes a build interesting.

No other fighter asks "is this the right moment?" the same way.

---

### Hitmonlee Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **65** | +15 |
| Atk | 120 | **125** | +5 |
| Def | 53 | **60** | +7 |
| SpA | 35 | 35 | — |
| SpD | 110 | 110 | — |
| Spe | 87 | **90** | +3 |
| **BST** | **455** | **485** | **+30** |

**Rationale:** HP 65 lets Hitmonlee survive one exchange — it needs to land at least one HJK or it's useless. Atk/Spe nudges because HJK math is already great (don't over-buff). Def 60 is survivable vs physical attackers; 53 is not. SpD stays high — Hitmonlee already resists special pressure.

---

### Hitmonlee Learnset (from L20)

| Level | Move | BP | Type | Reckless? | Purpose |
|-------|------|----|------|-----------|---------|
| 20 | **Jump Kick** | 100 | Fighting | **Yes (120 eff) + recoil on crash** | Evolution reward — first Reckless kick |
| 21 | Double Kick | 30×2 | Fighting | No | STAB chip option, thematic |
| 24 | **Bulk Up** | — | Fighting | — | Setup turn — +1 Atk turns HJK from "massive" to "ohko" |
| 27 | **High Jump Kick** | 130 | Fighting | **Yes → 156 eff; crash = 50% max HP** | THE signature. Commit or suffer. |
| 33 | **Blaze Kick** | 85 | Fire | No | Fire coverage + high crit ratio; covers Steel/Grass/Ice |
| 36 | **Reversal** | Varies | Fighting | **Yes — at <25% HP: 200 × 1.2 = 240 eff** | Panic button nuke when HP is critical |
| 42 | **Close Combat** | 120 | Fighting | No | Safe STAB — no recoil, no gamble |
| 48 | **Mega Kick** | 120 | Normal | **Yes → 144 eff** | Max-power Normal with Reckless boost |

---

### Hitmonlee The Math

With 125 Atk + Reckless:

| Move | BP | Reckless eff | Notes |
|------|----|-------------|-------|
| High Jump Kick | 130 | **156** | Crash on miss: 50% max HP |
| Jump Kick | 100 | **120** | Safer Reckless option |
| Mega Kick | 120 | **144** | Normal coverage nuke |
| Reversal (<25% HP) | 200 | **240** | Theoretical maximum |

After Bulk Up (+1 Atk): HJK = 156 × 1.5 effective multiplier = **~234 effective**. Hits like a truck.

With Choice Band: 125 × 1.5 = 187 Atk. HJK = 156 eff off 187 Atk = OHKOs most things that don't resist Fighting.

---

### Hitmonlee Core Strategy

1. Bulk Up on a predicted switch or passive opponent (+1 Atk/Def)
2. **High Jump Kick** — 156 eff STAB off 125 Atk, commit fully
3. If Ghost/Protect incoming or too risky → **Close Combat** as safe STAB
4. **Reversal** at red HP — Reckless Reversal at 200 BP = the game's biggest accessible nuke

The decision tree is the build: every turn you choose HJK (max payoff, max risk) or CC (safe, lower ceiling). Skilled players read opponents; aggressive players just HJK everything.

---

### Hitmonlee Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Choice Band** | 187 Atk. Locked into HJK → 156 eff off 187 = most damage in game per hit. |
| #2 | **Life Orb** | 1.3× multiplier, flexible moveset. Run HJK + CC + Blaze Kick + Bulk Up. |
| #3 | **Focus Sash** | Survive one hit to guarantee a Bulk Up, or use Reversal at 1 HP for the 240 eff nuke. |

---

---

## HITMONCHAN (#107)

### Vanilla Stats

| Stat | Value |
|------|-------|
| HP | 50 |
| Atk | 105 |
| Def | 79 |
| SpA | 35 |
| SpD | 110 |
| Spe | 76 |
| **BST** | **455** |

Vanilla abilities: Keen Eye / Iron Fist / Inner Focus

**Note:** Brawly's gym Hitmonchan uses Iron Fist (fixed gym design). The player's Hitmonchan below is designed as Compound Eyes to avoid duplicating Hariyama's identity.

---

### Option 1: Iron Fist (Brawly's version)

**Ability:** Iron Fist — 1.2× damage on punching moves.

**Build identity:** Elemental combo boxer — like Hariyama but faster (76 vs 50 Spe) and more offensive, trading Hariyama's HP bulk for additional speed.

**Signature interaction:** Iron Fist + four elemental punches (Fire/Ice/Thunder/Mach) = full coverage at 90 eff each. Hariyama is the slow tank version; Hitmonchan is the mobile combo boxer.

**Pros:** Consistent with Brawly's gym Hitmonchan, strong canonical identity, proven to work (Hariyama demonstrates the formula).

**Cons:** Duplicates Hariyama's core identity (Iron Fist + elemental punches). Even with different speed tiers, the fantasy is the same. Two Iron Fist punch users in the same roster feels redundant.

---

### Option 2: Compound Eyes ★ RECOMMENDED

**Ability:** Compound Eyes — raises the user's accuracy by 30% and increases secondary effect proc rates proportionally.

**Build identity:** The precise boxer — every punch lands with enhanced secondary effect chances, turning elemental punches into consistent status delivery systems.

**Signature interaction:** Thunder Punch normally has a 30% paralysis chance. With Compound Eyes: **~51% paralysis per hit**. Fire Punch (10% burn) → **~17%**. Ice Punch (10% freeze) → **~17%**. Every punch has a meaningful, elevated chance to debilitate the opponent.

**Pros:** Completely unique niche among fighters — status-inducing physical attacker. Differentiates cleanly from Hariyama (raw damage) and Machamp (confusion lock). Strong thematic fit: Hitmonchan's Pokédex describes it as "precise" and "deliberate." Over 4 turns of Thunder Punch, the chance of *not* paralyzing = 0.49⁴ = **5.8%**. Paralysis is nearly guaranteed in an extended fight.

**Cons:** Compound Eyes is traditionally a Bug-type ability flavor-wise, though the "precision boxer" lens makes it fit well. The base accuracy boost is somewhat wasted since most punches are already 100%.

---

### Option 3: Sheer Force

**Ability:** Sheer Force — 1.3× damage on moves with secondary effects, but those secondary effects are removed.

**Build identity:** The knockout artist — trade away status procs for raw elemental punch damage; every punch hits harder but carries no secondary payload.

**Signature interaction:** Sheer Force + Life Orb = Life Orb recoil is cancelled (Sheer Force suppresses Life Orb's recoil). Fire Punch becomes 75 × 1.3 (Sheer Force) × 1.3 (Life Orb) = **126 eff BP with no recoil**. Best Life Orb interaction in the game.

**Pros:** Extraordinary Life Orb synergy (double boost, no recoil), 1.3× multiplier exceeds Iron Fist (1.2×), works on all elemental punches simultaneously.

**Cons:** Philosophically opposed to what makes elemental punches exciting — no more paralysis, burn, or freeze. The punches become purely numerical rather than tactically interesting. Sheer Force turns Hitmonchan into a slightly worse Hariyama rather than something unique.

---

### ★ Recommendation: Compound Eyes

Compound Eyes creates a fighter with a completely unique playstyle: the **status-delivery boxer**. Not the strongest puncher (Hariyama), not the fastest fighter (Hitmonlee) — the most *precise* one. A boxer who controls the pace of every fight through accumulated status pressure.

Thunder Punch at 51% paralysis means half of opponents end each punch round unable to move at full speed. After two or three turns, most opponents are paralyzed, burned, or frozen. Hitmonchan doesn't need to knock opponents out — it just needs to hurt them badly enough that they can't fight back properly.

**Note:** Brawly's gym Hitmonchan uses Iron Fist — that's a separate, fixed design decision for the gym encounter. The player's Hitmonchan can be Compound Eyes as the intended player design; different abilities for gym trainer vs player-obtainable Pokémon is intentional.

---

### Hitmonchan Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **65** | +15 |
| Atk | 105 | **115** | +10 |
| Def | 79 | **85** | +6 |
| SpA | 35 | 35 | — |
| SpD | 110 | 110 | — |
| Spe | 76 | **80** | +4 |
| **BST** | **455** | **490** | **+35** |

**Rationale:** HP and Atk bumps make Hitmonchan competitive. At 115 Atk + Compound Eyes, elemental punches hit hard and proc often. Def 85 is solidly survivable. Speed 80 outspeeds Hariyama (50) and sits in a comfortable mid-tier.

---

### Hitmonchan Learnset (from L20)

| Level | Move | BP | Type | Status proc (Compound Eyes) | Purpose |
|-------|------|----|------|-----------------------------|---------|
| 20 | **Mach Punch** | 40 | Fighting | No secondary | Evolution reward — priority STAB |
| 21 | **Fire Punch** | 75 | Fire | 10% → **~17% burn** | First elemental status punch |
| 24 | **Ice Punch** | 75 | Ice | 10% → **~17% freeze** | Ice coverage + enhanced freeze |
| 27 | **Thunder Punch** | 75 | Electric | 30% → **~51% paralysis** | The star move — coin-flip paralysis per hit |
| 33 | **Drain Punch** | 75 | Fighting | No secondary | Sustain — stay healthy for more punch rounds |
| 36 | Focus Energy | — | Normal | — | Raise crit rate; pairs with precision theme |
| 42 | **Sky Uppercut** | 85 | Fighting | — | Strong STAB that hits Flying types mid-air |
| 48 | **Close Combat** | 120 | Fighting | — | Endgame nuke when pure damage is needed |

---

### Hitmonchan The Math

With 115 Atk + Compound Eyes proc rates:

| Punch | BP | Vanilla proc | Compound Eyes proc | Runs to ≥90% proc chance |
|-------|----|--------------|--------------------|--------------------------|
| Thunder Punch | 75 | 30% paralysis | **~51%** | ~2 hits |
| Fire Punch | 75 | 10% burn | **~17%** | ~12 hits |
| Ice Punch | 75 | 10% freeze | **~17%** | ~12 hits |

Thunder Punch paralysis over 4 turns: P(at least one) = 1 − 0.49⁴ = **94.2%**. Effectively guaranteed.

With Choice Band: 115 × 1.5 = 172 Atk. Every Thunder Punch deals massive damage AND has 51% paralysis chance locked in.

---

### Hitmonchan Core Strategy

1. Lead with **Thunder Punch** — 51% paralysis chip, forcing opponent to play around status
2. **Fire Punch** vs Grass/Ice/Steel — accumulate burn chance alongside damage
3. **Mach Punch** for priority cleanup on weakened targets
4. **Drain Punch** to sustain HP through the fight
5. **Close Combat** when pure damage is needed without caring about status

The fight is a war of attrition: every Hitmonchan punch carries a probability payload. The opponent can't safely stall because each round is another roll of the paralysis/burn/freeze dice.

---

### Hitmonchan Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Choice Band** | 172 Atk locked into Thunder Punch → 51% paralysis every hit. Most consistent status delivery. |
| #2 | **Assault Vest** | 65 HP + AV + 110 SpD = very hard to OHKO specially. Fight longer, proc more. |
| #3 | **Scope Lens** | Crit rate boost; with Focus Energy at L36, crits become frequent. Secondary "crit boxer" variant. |

---

---

## HITMONTOP (#237)

### Vanilla Stats

| Stat | Value |
|------|-------|
| HP | 50 |
| Atk | 95 |
| Def | 95 |
| SpA | 35 |
| SpD | 110 |
| Spe | 70 |
| **BST** | **455** |

Vanilla abilities: Intimidate / Technician / Steadfast

Note: Technician is already Breloom's core ability. Steadfast is too passive (flinch → +1 Spe). Intimidate is a valid option but creates a passive entry effect.

---

### Option 1: Intimidate

**Ability:** Intimidate — Lowers the opponent's Attack by 1 on switch-in.

**Build identity:** The defensive pivot and hazard controller — switches in, punishes physical attackers, clears hazards with Rapid Spin.

**Signature interaction:** Intimidate on switch-in (-1 opponent Atk) + Counter = weakened physical hit → double-damage retaliation. With 95/95/110 bulk, Hitmontop survives hits and Counter hits back for brutal revenge damage.

**Pros:** Unique team support role among fighters (none of Breloom/Hariyama/Machamp/Gallade/Hitmonlee/Hitmonchan provide Intimidate), Rapid Spin utility for hazard control, genuinely durable.

**Cons:** Intimidate is a passive entry effect — exactly the category the design doc says to avoid. It doesn't shape the moveset in an exciting way and "switch in → intimidate → pivot" is a generic utility role that doesn't feel like a fighting monk.

---

### Option 2: Skill Link

**Ability:** Skill Link — Multi-hit moves always strike the maximum number of times.

**Build identity:** The Triple Axel acrobat — spinning kicker who guarantees maximum hits on every multi-hit attack, turning variable hits into reliable devastation.

**Signature interaction:** Triple Axel (20+40+60 BP across 3 hits, variable) + Skill Link = **always 3 hits, always 120 BP Ice-type** from a Fighting Pokémon. Guaranteed every time.

**Pros:** Triple Axel is Hitmontop's canonical signature move; Skill Link turns it from RNG-dependent to perfectly reliable; creates an ice/fighting dual attacker with genuinely unique coverage.

**Cons:** Triple Axel is Ice-type — Hitmontop becomes oddly reliant on Ice for its best move. The Fighting-type identity is diluted. Close Combat doesn't benefit from Skill Link at all, so the core STAB move and the core ability don't interact.

---

### Option 3: Contrary ★ RECOMMENDED

**Ability:** Contrary — Stat changes are inverted (moves that lower your stats raise them instead, and vice versa).

**Build identity:** The balanced spinner who gets stronger as you fight it — Close Combat raises Defense and Special Defense instead of lowering them, turning the strongest STAB move into a passive defensive buff that accumulates each use.

**Signature interaction:** Close Combat (120 BP STAB, normally −1 Def, −1 SpD) + Contrary = **+1 Def, +1 SpD per use**. After three Close Combats: 100 base Def → effectively ~150, 115 SpD → ~172. Hitmontop becomes nearly unkillable while still dealing 120 BP Fighting damage. Opponents face an impossible choice: KO it before the buffs stack, or watch it become a wall that also deals 120 BP per turn.

**Pros:** Completely unique interaction — no other Pokémon in this roster makes Close Combat a defensive setup move. Thematically perfect: Hitmontop's Pokédex describes its spinning style as "a remarkable mix of both offense and defense" — Contrary Close Combat *literally* embodies that. Every punch also fortifies.

**Cons:** Contrary makes standard setup moves counterproductive: Swords Dance lowers Attack, Bulk Up lowers Atk/Def. Players need to understand not to run those moves. Slightly counterintuitive, but the payoff is worth explaining once.

---

### ★ Recommendation: Contrary

Contrary + Close Combat is the most elegant design in the trio. It creates a fighter that you cannot safely trade with: every turn you let it use Close Combat, it deals 120 BP damage AND gets harder to kill. The only answer is to OHKO it — which requires increasingly large amounts of damage as the bulk stacks.

Hitmontop's balanced offense/defense stat distribution (95/95/110) was made for this. It starts tanky enough to survive the first hit, then Close Combat spam makes it tankier still. The fantasy is crystal clear: "every punch I throw makes me harder to punch back."

**Ability 2:** Intimidate (solid defensive utility as an alternative)
**Hidden:** Technician (fine as alt though Breloom already has it as primary)

---

### Hitmontop Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **65** | +15 |
| Atk | 95 | **105** | +10 |
| Def | 95 | **100** | +5 |
| SpA | 35 | 35 | — |
| SpD | 110 | **115** | +5 |
| Spe | 70 | **75** | +5 |
| **BST** | **455** | **495** | **+40** |

**Rationale:** HP 65 is critical — at 50 HP Hitmontop gets OHKOd before Contrary Close Combat can stack. 65 HP + 100 Def + 115 SpD means it survives at least one strong hit. Atk 105 makes Close Combat actually threaten things. Speed 75 gives it decent mid-tier coverage. The high SpD (115) reflects its legendary ability to weather special moves between CC stacks.

---

### Hitmontop Learnset (from L20)

| Level | Move | BP | Type | Contrary? | Purpose |
|-------|------|----|------|-----------|---------|
| 20 | **Triple Kick** | 10+20+30 | Fighting | — | Evolution reward — multi-hit STAB, thematic spinning fighter |
| 21 | Rapid Spin | 50 | Normal | — | Hazard removal — utility role, free action between CC turns |
| 24 | **Gyro Ball** | Varies | Steel | — | 75 Spe → meaningful Gyro Ball BP; Steel coverage vs Fairy/Ice |
| 27 | **Close Combat** | 120 | Fighting | **+1 Def, +1 SpD each use** | THE signature move. Every use: damage + become tankier. |
| 33 | **Triple Axel** | 20+40+60 | Ice | — | Ice coverage vs Grass/Ground/Flying/Dragon |
| 36 | **Sucker Punch** | 70 | Dark | — | Priority Dark coverage — punishes fast Psychic/Ghost threats |
| 42 | **Endeavor** | — | Normal | — | At low HP → sets opponent's HP to match; unusual closer |
| 48 | **Counter** | — | Fighting | — | Take a hit, deal 2× back. With stacked Def buffs from CC, lethal. |

---

### Hitmontop The Math

With 105 Atk + Contrary Close Combat stacking:

| CC uses | Effective Def (after stacks) | Effective SpD | CC output (105 Atk) |
|---------|------------------------------|----------------|---------------------|
| 0 | 100 | 115 | 120 BP STAB |
| 1 | ~150 (+1) | ~172 (+1) | 120 BP STAB |
| 2 | ~200 (+2) | ~229 (+2) | 120 BP STAB |
| 3 | ~250 (+3) | ~287 (+3) | 120 BP STAB |

By turn 3, Hitmontop has effectively ~250 Def — physical moves deal roughly 40% of their normal damage. Most physical attackers cannot get through it.

Counter at max Def stack: opponent's physical move deals minimal damage → Counter reflects **2× that damage** off 105 Atk. The counterplay becomes impossible.

---

### Hitmontop Core Strategy

1. Switch in → **Close Combat** immediately: damage + +1 Def/SpD stack begins
2. Opponents face the dilemma: attack now before bulk stacks, or switch? Any delay = Hitmontop gets tankier
3. **Rapid Spin** if entry hazards need clearing — utility turn without losing CC momentum
4. **Triple Axel** for Grass/Ground/Flying/Dragon coverage (Fighting resistors)
5. **Sucker Punch** if a fast special attacker threatens before CC can stack further
6. **Counter** as the endgame: after 2–3 CC stacks, physical attackers deal almost nothing → Counter hits them for 2× that nothing back

---

### Hitmontop Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Life Orb** | 1.3× damage on CC, no lock-in. Each CC: 120 BP × 1.3 + bulk gain. Snowball faster. |
| #2 | **Leftovers** | Sustain between turns lets Hitmontop accumulate more CC stacks before fainting. |
| #3 | **Assault Vest** | Covers the early turns before CC stacks protect SpD. AV + 115 SpD + 65 HP = hard to OHKO specially. |

---

---

## Fighter Roster Comparison

| | Breloom | Hariyama | Machamp | Gallade | Hitmonlee | Hitmonchan | Hitmontop |
|---|---------|---------|---------|---------|-----------|-----------|----------|
| **Role** | Priority multi-hit | Elemental tank | Confusion locker | Crit slasher | Reckless kicker | Status boxer | Contrary brawler |
| **Ability** | Technician | Iron Fist | No Guard | Vorpal Blade | Reckless | Compound Eyes | Contrary |
| **Speed** | 65 | 50 | 65 | 90 | 90 | 80 | 75 |
| **Damage style** | Weak moves × 1.5 | Heavy punches × 1.2 | Confusion + 100BP | Guaranteed crits | 156 eff HJK | Status per punch | CC + bulk snowball |
| **Fantasy** | "I hit 5 times" | "I hit everything hard" | "You can't fight cleanly" | "Every cut is perfect" | "I commit everything" | "Every punch hurts somehow" | "Hitting me is a mistake" |

No two fighters share a role. Each answers "why pick this one?" with a completely different answer.
