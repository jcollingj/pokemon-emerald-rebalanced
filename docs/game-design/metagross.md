---
name: Metagross
dex_numbers: [374, 375, 376]
status: designed
ability: Sheer Force
role: Sheer Force Wallbreaker
ideal_items: Life Orb, Choice Band, Assault Vest
evolution_line: [Beldum, Metang, Metagross]
---

# Beldum / Metang / Metagross (#374 / #375 / #376) — Design Brainstorm

## Vanilla Stats

| Pokemon | HP | Atk | Def | SpA | SpD | Spe | BST |
|---------|-----|-----|-----|-----|-----|-----|-----|
| Beldum  | 40  | 55  | 80  | 35  | 60  | 30  | 300 |
| Metang  | 60  | 75  | 100 | 55  | 80  | 50  | 420 |
| Metagross | 80 | 135 | 130 | 95  | 90  | 70  | 600 |

**Vanilla ability:** Clear Body (prevents stat reductions)
**Vanilla evolution:** Beldum → L20 → Metang → L45 → Metagross
**Typing:** Steel / Psychic

---

## Option 1: Analytic — "The Slow Calculator"

### Ability: Analytic
**Effect:** Metagross's moves deal 30% more damage when it moves last.

Metagross sits at 70 Speed — it moves last against most opponents. Analytic turns this liability into a feature. Every regular attack is quietly boosted as the four-brain supercomputer "calculates the perfect strike timing." You can't outrun me, but you can't survive what I calculate.

**Build identity:** A slow but devastating physical attacker whose low Speed is a permanent damage bonus — the opponent goes first and gets destroyed for it.

**Signature interaction:** Meteor Mash + Analytic — 100 BP Steel STAB × 1.5 (STAB) × 1.3 (Analytic) = **195 effective power** from base 135 Atk. With Choice Band: ~260 effective. Opponents learn they cannot win by going first.

**Pros:**
- Transforms a weakness (70 Spe) into a feature — thematic and elegant
- The entire moveset benefits against faster opponents (which is almost everything)
- "Supercomputer calculates perfect timing" is deeply thematic

**Cons:**
- Priority moves (Bullet Punch) don't trigger Analytic — the build has no priority payoff
- Setup moves waste the bonus (Analytic only triggers on attacks)
- Against slower opponents (or after a -Speed debuff) the bonus disappears
- Doesn't shape the learnset strongly — "use powerful attacks last" applies to any moveset

**Items:** Choice Band (Metagross goes last anyway — being locked in doesn't change much), Assault Vest (physical wall that hits back hard), Life Orb (consistent 1.3x on top of Analytic).

---

## ⭐ Option 2: Sheer Force — "The Wallbreaker" (RECOMMENDED)

### Ability: Sheer Force
**Effect:** 1.3x damage on moves with secondary effects; those effects are removed. Also: Sheer Force + Life Orb removes Life Orb's recoil (the well-known Sheer Force mechanic).

Metagross's entire natural kit has secondary effects. Metal Claw raises Atk. Confusion confuses. Zen Headbutt flinches. Meteor Mash raises Atk. Ice Punch freezes. Thunder Punch paralyzes. Rock Slide flinches. Sheer Force says: *redirect every secondary effect into pure calculated force.* Four brains that have already calculated the exact optimal strike — no luck needed, no dice rolls, just power.

**Build identity:** A relentless physical wallbreaker whose every attack hits harder by eliminating randomness — and whose Life Orb is completely free.

**Signature interaction:** **Sheer Force + Life Orb + Meteor Mash** = 100 BP × 1.5 (STAB) × 1.3 (Sheer Force) × 1.3 (Life Orb, zero recoil) = **253 effective power** off 135 Atk. That's Choice Band Garchomp numbers from a standing start — no setup, no lottery, no recoil. Nothing that resists Steel survives long when Earthquake, Zen Headbutt (104 SF), Ice Punch (97.5 SF), and Thunder Punch (97.5 SF) exist.

**Pros:**
- Sheer Force + Life Orb is one of the most satisfying item combos in the game — zero recoil for maximum power
- **Every** move in the natural kit has a secondary effect — the ability shapes the entire learnset
- Fills a unique role: no current Pokemon is a "Sheer Force physical wallbreaker" (Aggron is defensive, Tyranitar is sand-based, Nidoking is special)
- The 4-brain "eliminating randomness through perfect calculation" fantasy is exceptional flavor
- Clear and consistent power level — no setup required, no conditions to meet

**Cons:**
- Loses secondary effects on all moves (no Meteor Mash Atk boosts, no Zen Headbutt flinches)
- Bullet Punch (priority Steel) has **no secondary effect** → not boosted by Sheer Force; priority cleanup is less reliable
- Lower counterplay than setup sweepers — opponents can't disrupt you, but you also can't adapt

**Items:** Life Orb (#1 — zero recoil, 1.3x permanent boost), Choice Band (#2 — if you don't want to spend a turn), Assault Vest (#3 — surprisingly bulky Special wall with 130 Def + 90 SpD + 80 HP).

---

## Option 3: Parental Bond — "Four Brains, One Strike" (Creative)

### Ability: Parental Bond (rework: "Dual Cortex")
**Effect:** Metagross's physical attacks strike twice — first hit at 75% power, second hit at 25% power. Both hits independently roll for secondary effects.

This is the "surprise us" option. Metagross has FOUR brains fused together. They don't take turns — they strike simultaneously, with two independent calculations hitting at the same moment. Mechanically, this means every physical move lands two independent hits. The secondary effect of each move can trigger twice. Meteor Mash: two chances to raise Atk. Zen Headbutt: two chances to flinch. Even Bullet Punch becomes a two-hit priority move.

**Build identity:** A double-strike powerhouse that lands two independent hits per turn, with double secondary effect chances and priority that hits twice.

**Signature interaction:** **Bullet Punch (priority Steel) × 2 hits** — 40 BP × 2 hits × 1.5 STAB = 120 effective priority damage. Plus **King's Rock** makes both hits independently roll for flinch (two flinch chances per turn). The combination of reliable priority and double secondary proc turns Metagross into a flinch-locking priority wall.

**Pros:**
- Lore-accurate to a degree that's almost poetic — four brains, two-strike mechanic
- Genuinely surprising — no other Pokemon in the game has this
- Double Meteor Mash Atk procs = faster snowball than any other option
- King's Rock interaction is unforgettable

**Cons:**
- May be overpowered — Metagross is already a pseudo-legendary; double-hit on a 135 Atk Steel/Psychic type is very strong
- Life Orb recoil from two hits each turn (12.5% recoil per attack vs. 6.25%)
- Complex ability to understand — less readable than "Sheer Force = hit harder"
- Parental Bond is a difficult ability to balance/implement

---

## Recommendation: Option 2 — Sheer Force

**Why Sheer Force wins:**

The SKILL.md calls out "every move benefits" as a proven synergy pattern (Blastoise's Mega Launcher). Sheer Force is precisely that — every single move in Metagross's natural kit has a secondary effect, so every single move benefits. The player can't pick a bad move; they can only pick which boosted secondary-effect attack to fire.

The Life Orb interaction seals it. There's a moment every Sheer Force player discovers: equip Life Orb, notice zero recoil, realize that 253-effective Meteor Mash off 135 Atk is absolutely absurd. That moment of "wait, this is free?" is exactly the design goal.

The learnset writes itself: every move you'd naturally teach a Steel/Psychic physical attacker happens to have a secondary effect. The ability shapes the kit without feeling contrived.

Analytic is elegant but doesn't shape the learnset as clearly, and the lack of priority payoff hurts. Parental Bond is thrilling but risks being too powerful and too opaque.

Sheer Force gives Metagross a clear identity: **the four-brain supercomputer that converts every random roll into pure consistent force.** It doesn't need luck. It doesn't need setup. It just calculates and destroys.

---

## Full Design Doc (Recommended Option 2: Sheer Force)

### Build Identity

Metagross is a **Sheer Force + Life Orb physical wallbreaker** that uses its supercomputer-level processing to eliminate all secondary effects in exchange for maximum damage on every hit — with zero Life Orb recoil.

---

### Ability Changes

| Slot | Ability | Effect |
|------|---------|--------|
| Primary | **Sheer Force** | 1.3× damage on moves with secondary effects; removes those effects. Sheer Force + Life Orb = no LO recoil. |
| Secondary | **Clear Body** | Prevents stat reductions (vanilla). Immune to Intimidate, Growl, etc. — reliable fallback. |
| Hidden | **Light Metal** | Halves weight — makes Metagross immune to Low Kick's damage tier (vanilla hidden). |

---

### Stat Changes

#### Beldum

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | **50** | +10 |
| Atk | 55 | **60** | +5 |
| Def | 80 | 80 | — |
| SpA | 35 | 35 | — |
| SpD | 60 | 60 | — |
| Spe | 30 | 30 | — |
| **BST** | **300** | **315** | **+15** |

Beldum's vanilla 40 HP is rough — it faints before it can do anything. +10 HP and +5 Atk let it survive a hit and actually sting. Evolves at L20 with Metal Claw and Confusion already online. The vanilla BST is reasonable for a first stage once it can survive the route.

#### Metang

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **65** | +5 |
| Atk | 75 | **80** | +5 |
| Def | 100 | 100 | — |
| SpA | 55 | 55 | — |
| SpD | 80 | 80 | — |
| Spe | 50 | 50 | — |
| **BST** | **420** | **430** | **+10** |

Metang covers the long L20–45 stretch. Minor HP and Atk bumps to ensure it doesn't feel like a holding pattern. 100 Def makes it surprisingly durable as a mid-game physical wall while building toward Metagross.

#### Metagross

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 80 | 80 | — |
| Atk | 135 | 135 | — |
| Def | 130 | 130 | — |
| SpA | 95 | 95 | — |
| SpD | 90 | 90 | — |
| Spe | 70 | 70 | — |
| **BST** | **600** | **600** | **0** |

600 BST. No changes needed. The design is entirely in the ability + learnset. 135 Atk + Sheer Force + Life Orb is already obscene — touching stats would be gratuitous.

---

### Learnset

The entire kit is built around moves with secondary effects — all of which Sheer Force boosts.

#### Beldum (L1–20)

| Level | Move | Type | BP | Secondary Effect | SF Effective BP | Purpose |
|-------|------|------|----|-----------------|-----------------|---------|
| 1 | Take Down | Normal | 90 | — | 90 (no SF) | Vanilla signature — thematic recoil move |
| 1 | Iron Defense | Steel | — | — | — | Defensive identity; foreshadows steel fortress |
| 8 | **Metal Claw** | Steel | 50 | +10% Atk raise | **65 eff.** | First synergy move — Sheer Force turns Metal Claw into a 65 BP reliable Steel STAB |
| 12 | **Confusion** | Psychic | 50 | 10% confusion | **65 eff.** | Second synergy move — Psychic STAB under Sheer Force; the build turns real at L12 |
| 16 | **Zen Headbutt** | Psychic | 80 | 20% flinch | **104 eff.** | Power spike before evolution — Sheer Force makes this a 104 BP physical Psychic hit |

#### Metang (L20–45)

| Level | Move | Type | BP | Secondary Effect | SF Effective BP | Purpose |
|-------|------|------|----|-----------------|-----------------|---------|
| 21 | **Ice Punch** | Ice | 75 | 10% freeze | **97.5 eff.** | Evolution reward — Dragon/Ground/Flying coverage, Sheer Force boosted |
| 27 | **Iron Head** | Steel | 80 | 30% flinch | **104 eff.** | Strong Steel STAB — 30% flinch becomes pure 104 BP force |
| 33 | **Thunder Punch** | Electric | 75 | 10% para | **97.5 eff.** | Water/Flying coverage — all three punches online by mid-game |
| 38 | **Rock Slide** | Rock | 75 | 30% flinch | **97.5 eff.** | Coverage for Ice/Fire/Flying; Sheer Force makes the flinch chance into damage |
| 42 | Earthquake | Ground | 100 | — | 100 (no SF) | The one non-SF move — essential coverage for Electric/Fire/Steel/Poison |

#### Metagross (L45+)

| Level | Move | Type | BP | Secondary Effect | SF Effective BP | Purpose |
|-------|------|------|----|-----------------|-----------------|---------|
| 45 | **Meteor Mash** | Steel | 100 | 10% Atk raise | **130 eff.** | Evolution capstone — THE signature move. Sheer Force + LO: 253 effective BP, zero recoil. |
| 50 | **Bullet Punch** | Steel | 40 | — | 40 (no SF) | Priority cleanup — no SF boost, but Metagross needs a way to revenge kill faster threats |

---

### The Math

#### Sheer Force + Life Orb — The Core Interaction

| Move | Vanilla BP | +STAB | +SF (1.3×) | +Life Orb (1.3×, no recoil) | Effective BP |
|------|-----------|-------|------------|------------------------------|-------------|
| Meteor Mash | 100 | 150 | 195 | **253** | Steel nuke |
| Zen Headbutt | 80 | 120 | 156 | **202** | Psychic STAB |
| Iron Head | 80 | 120 | 156 | **202** | Alt Steel STAB |
| Ice Punch | 75 | — | 97.5 | **127** | Dragon/Ground/Flying coverage |
| Thunder Punch | 75 | — | 97.5 | **127** | Water/Flying coverage |
| Rock Slide | 75 | — | 97.5 | **127** | Ice/Fire/Flying coverage |
| Earthquake | 100 | — | 100 (no SF) | **130** | Ground coverage (LO only) |

Off 135 base Atk (205 effective Atk with Life Orb when SF triggers):
- **Meteor Mash at 253 effective BP off 205 Atk** — this is one of the hardest hits in the game, delivered reliably every turn
- **Zen Headbutt at 202 effective** for Poison/Fighting/Psychic coverage
- **Earthquake at 130 effective** for the Pokemon that resist Steel/Psychic

#### What Clear Body Does As Secondary
Clear Body blocks Intimidate, stat drops from Crunch/Snarl, etc. This means every physical attacker's Intimidate is wasted against Metagross. In a meta where Intimidate is common, this is a meaningful backup that makes Metagross nearly impossible to nerf before it swings.

---

### Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Life Orb** | Sheer Force removes LO recoil — free 1.3× on every boosted move. Meteor Mash at 253 effective with zero downside. This is the build. |
| #2 | **Choice Band** | 135 × 1.5 = 202 effective Atk; locked to one move but Metagross's 70 Spe means it's switching out often anyway. Meteor Mash at 390+ effective. |
| #3 | **Assault Vest** | 130 Def + 90 SpD + AV (1.5× SpD) = 135 effective SpD. Metagross can wall special attackers AND punish with 135 Atk. Gives up healing but is hard to break. |

---

### Core Strategy

**The standard loop:**
1. Switch in (Clear Body secondary shrugs off any Intimidate)
2. Life Orb already equipped — zero recoil on every Sheer Force move
3. Meteor Mash for 253 effective power vs. neutral targets; **nothing that doesn't resist Steel survives at full health**
4. Zen Headbutt for Poison/Fighting types resisting Steel (202 effective Psychic)
5. Earthquake for Steel/Electric/Fire types that resist both STABs
6. Bullet Punch at the end of the game to revenge-kill weakened threats (priority, even without SF boost)

**What makes Metagross hard to stop:**
- No setup required — Sheer Force is always on, Life Orb is always free
- No secondary effects to play around — no flinch turns to exploit, no freeze luck, no Atk raises to deny
- Clear Body means Intimidate leads do nothing
- 130 Def means even physical revenge killers need to hit super-effectively
- Coverage is near-complete (Steel + Psychic + Ice + Electric + Rock + Ground)

---

### Team Synergy

**Works well with:**
- **Speed support** (Thunder Wave, Sticky Web) — patches 70 Spe; Metagross outspeeds nothing naturally but after paralysis it becomes functional
- **Wish passers** (Blissey, Gardevoir) — Life Orb has no recoil but Metagross still takes hits; Wish support extends longevity
- **Stealth Rock setters** — Metagross forces switches; hazards punish the switches
- **Special attackers** — Metagross handles physical walls; a special partner (Alakazam, Gardevoir) handles special walls

**Problematic teammates:**
- **Tyranitar** — Sand Stream kills Life Orb Metagross in sandstorm (takes 1/16 per turn from sand, cancelling the "free" Life Orb). If pairing with Tyranitar, run Choice Band or Assault Vest instead
- **Other Intimidate users on your own team** — doesn't affect Metagross (Clear Body), but doesn't help it either

---

### Matchup Analysis

**Strong vs:**
- Psychic (Steel STAB), Ice (Steel/Fighting resist), Rock (Steel STAB + SE), Normal, Fairy (Steel resists), Dragon (Ice Punch), Poison/Fighting (Zen Headbutt), Flying (Rock Slide/Ice Punch)
- Most physical attackers — 130 Def is a physical wall before even attacking
- Anything slower than 70 Spe — which is most of the game

**Weak vs:**
- Fire (4× weakness — but everything hits Metagross super-effectively before KO due to 130 Def)
- Ground (4× weakness — Earthquake from almost everything)
- Special Fire/Ground attackers — Flamethrower, Earth Power bypass 130 Def
- Water (Surf tears through the SpD side before the 90 SpD saves it)
- **Ghost** (can't hit Ghost with Normal/Fighting; Earthquake handles nothing here; need Shadow Ball as TM)

**Key vulnerability:** 4× Fire and 4× Ground. Despite 130 Def, Earthquake and Flamethrower from physical attackers can still threaten. Metagross wins by hitting first and hitting hard — it's not intended to tank these hits. Always have a Ground/Fire check (Swampert absorbs Ground, something with Flash Fire absorbs Fire).

---

### Design Checklist

- [x] Ability chosen and justified (Sheer Force — entire kit has secondary effects, SF + LO = free)
- [x] Synergy moves show up early (Metal Claw L8, Confusion L12, Zen Headbutt L16)
- [x] Stats reinforce build role (135 Atk for massive Sheer Force output, 130 Def for physical durability)
- [x] Learnset follows standard schedule
- [x] Clear niche — "SF physical wallbreaker" — no current Pokemon fills this role
- [x] Core strategy explainable in 2-3 sentences: Switch in, Life Orb equipped, fire 253-effective Meteor Mash. Earthquake and Zen Headbutt cover resistances. Clear Body blocks Intimidate. No setup, no luck, just calculated force.
