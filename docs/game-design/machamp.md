---
name: Machamp
dex_numbers: [66, 67, 68]
status: designed
ability: No Guard
role: Confusion-Locking Brawler
ideal_items: Choice Band, Life Orb, Assault Vest
evolution_line: [Machop, Machoke, Machamp]
---

# Machop / Machoke / Machamp - Rebalance Notes

## Design Philosophy

Machamp is the quintessential slow brawler: powerful, durable, and terrifying once it gets rolling. The design leans into **No Guard** as the defining ability — not for landing Thunder on an opponent, but because Dynamic Punch at 100% accuracy means opponents are **permanently confused**.

The fantasy: Machamp Dynamic Punches every turn. Opponents are always confused. Half the time they hurt themselves. When they don't, Machamp eats the hit with its buffed bulk and punches again. It's a war of attrition that Machamp wins.

Cross Chop's high crit rate pairs beautifully with No Guard (never misses + frequently crits = reliable STAB nuke). Together, Dynamic Punch + Cross Chop give Machamp two distinct tools: one that disrupts, one that executes.

**Niche:** Confusion-locking physical brawler. Slow and grindy, but Dynamic Punch makes opponents unable to fight back effectively. Completely different from Breloom (fast priority) or Gallade (critical hit slasher).

---

## Ability Changes

- **Ability 1: No Guard** — Both the user's and opponent's moves always hit. **Core identity** — Dynamic Punch (normally 50% accuracy) becomes 100% accurate + 100% confusion. Cross Chop never misses. Any less-than-perfect accuracy move in Machamp's kit becomes perfectly reliable.
- **Ability 2: Guts** — 1.5× Attack when statused. Backup option for players who want to self-poison/burn. Works with Flame Orb for raw damage, but doesn't define the learnset the same way No Guard does.
- **Hidden: Steadfast** — Flinching raises Speed. Niche; not recommended for the main build.

> **The No Guard caveat:** Opponents also can't miss against Machamp. Don't switch it in against users of Thunder, Blizzard, or Zap Cannon. This adds a meaningful risk layer — Machamp requires intelligent play, not just spam.

> **The No Guard trick:** Any move with less than 100% base accuracy becomes 100% accurate with No Guard, including the user's Focus Blast (normally 70%), Stone Edge (normally 80%), and Megahorn (normally 85%). These belong in the teachable set, not level-up, but players who discover this interaction will feel clever.

---

## Stat Changes

### Machop

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | 70 | — |
| Atk | 80 | **90** | +10 |
| Def | 50 | **55** | +5 |
| SpA | 35 | 35 | — |
| SpD | 35 | **40** | +5 |
| Spe | 35 | **45** | +10 |
| **BST** | **305** | **335** | **+30** |

Hits noticeably hard for a basic stage. The Speed bump makes it feel snappy rather than sluggish. Still clearly a work-in-progress — it's training, not fighting.

### Machoke

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 80 | 80 | — |
| Atk | 100 | **110** | +10 |
| Def | 70 | **75** | +5 |
| SpA | 50 | 50 | — |
| SpD | 60 | 60 | — |
| Spe | 45 | **55** | +10 |
| **BST** | **405** | **430** | **+25** |

A legitimately strong mid-stage. Machoke at L33 with Dynamic Punch is already a serious threat. Players who delay evolution (Linking Cord can be used at any time) will have a powerful Machoke.

### Machamp

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 90 | 90 | — |
| Atk | 130 | **135** | +5 |
| Def | 80 | **90** | +10 |
| SpA | 65 | 65 | — |
| SpD | 85 | 85 | — |
| Spe | 55 | **65** | +10 |
| **BST** | **505** | **525** | **+20** |

135 Atk hits extremely hard. 90/90/85 bulk means Machamp can take a hit when it needs to. 65 Speed is still slow but less punishing — it outspeeds more opponents and doesn't feel like a liability.

---

## Evolution Changes

- **Machoke → Machamp:** Linking Cord (replaces trade requirement)

No level changes; Machop evolves at L28 (vanilla), Machoke evolves with Linking Cord whenever the player chooses.

---

## Learnset

### Machop

| Level | Move | BP | Type | No Guard? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Karate Chop | 50 | Fighting | — | Basic STAB; high crit chance sets up the "crit" theme early |
| 1 | Leer | — | Normal | — | Defense drop utility |
| 8 | **Low Kick** | Varies | Fighting | Yes (weight calc always fires) | Weight-based STAB — No Guard doesn't affect damage calc, but it's early synergy concept |
| 12 | **Seismic Toss** | = Level | Normal | — | Machop's most iconic move; level-scaled chip damage |
| 16 | **Focus Energy** | — | Normal | — | +2 crit boost; Cross Chop at +2 crits almost every time |
| 21 | Knock Off | 65 | Dark | — | Item removal utility; good into the mid-game |
| 27 | **Cross Chop** | 100 | Fighting | Yes → **never misses, high crit** | Power spike before evolution — this is when the No Guard identity clicks |

**Build turns on at L27:** Cross Chop + No Guard = a 100-BP move that never misses and crits frequently. Pair with Focus Energy from L16 for near-guaranteed crits on every hit.

### Machoke (evolves at L28)

| Level | Move | BP | Type | No Guard? | Purpose |
|-------|------|----|------|-----------|---------|
| 28 | Strength | 80 | Normal | — | Evolution reward — reliable Normal physical coverage |
| 33 | **Dynamic Punch** | 100 | Fighting | **Yes → 100% acc + 100% confusion** | THE signature move. With No Guard, every Dynamic Punch confuses. Confusion locking begins. |
| 36 | Bulk Up | — | Fighting | — | Setup option — +1 Atk/Def turns Machamp into a wall |

**Build fully realized at L33:** Dynamic Punch spam → permanent confusion. Opponents hurt themselves, Machamp keeps punching.

### Machamp (evolves with Linking Cord)

| Level | Move | BP | Type | No Guard? | Purpose |
|-------|------|----|------|-----------|---------|
| 40 | Scary Face | — | Normal | — | Speed control — slow the fast threats down so they can't outspeed |
| 44 | **Counter** | — | Fighting | — | Punish physical attackers; Machamp's bulk means it survives hits to counter back |
| 48 | **Close Combat** | 120 | Fighting | — | Maximum power STAB. The stat drops are real but 135 Atk + 120 BP is nuclear. |
| 54 | **Superpower** | 120 | Fighting | — | Alternative nuke; stat drops too, but 2 max-power moves in the kit feels premium |

---

## The Math

With 135 Atk (rebalanced):

| Move | BP | Notes | Effective |
|------|----|-------|-----------|
| **Close Combat** | 120 | Pure power STAB | **180 effective** |
| **Superpower** | 120 | Stat drops, but same power | **180 effective** |
| **Dynamic Punch** | 100 | 100% confuse with No Guard | **150 effective + confusion** |
| **Cross Chop** | 100 | High crit + No Guard | **150 + frequent crits** |

**Choice Band Machamp:** 135 × 1.5 = 202 Atk. Dynamic Punch at 100 BP off 202 Atk = **~330 effective damage before type multipliers** on opponents who are also confused.

**The confusion tax:** A confused Pokemon has a 50% chance to hurt itself (typeless damage based on its own Atk/Def) each turn. Against a physical attacker, this can deal 20–40% of their HP. Machamp Dynamic Punches → opponent confused → opponent hurts itself → Machamp Dynamic Punches again. The opponent gets ~1 effective attack every 2 turns.

---

## Ideal Items

1. **Choice Band** — 202 Atk when banded. Lock into Dynamic Punch: every single hit confuses. Opponents are permanently confused AND taking 150 effective off 202 Atk. The most oppressive pick.
2. **Life Orb** — 1.3× on everything + flexible moveset. Run Dynamic Punch + Cross Chop + coverage. The slower, smarter version of the banded set.
3. **Assault Vest** — Trade setup moves for SpD. Machamp at 90/90/85+AV bulk is genuinely tanky. Hit hard, take hits, Dynamic Punch whatever's left.

---

## Core Strategy

### The Confusion Lock

1. Switch Machamp in on something it checks (resists Normal, takes a weak hit)
2. **Dynamic Punch** — opponent is confused (100% with No Guard), takes ~150 effective damage
3. Opponent's turn: 50% chance they hurt themselves instead of attacking
4. **Dynamic Punch again** — confusion timer refreshes, takes another ~150
5. Eventually something faints — Machamp moves to the next target

The confusion timer resets from the newest source, so re-applying it each turn means the opponent is ALWAYS confused, never gets to "wait it out."

### When to Use Machamp

- Against physical attackers that can't OHKO: Dynamic Punch + confusion cycling
- Wallbreaking: 135 Atk + Close Combat off Choice Band breaks through most defensive mons
- Mid-game anti-setup: Bulk Up into Dynamic Punch spam turns Machamp into an unkillable confusion machine
- NOT for fast matchups — Machamp is 65 Speed, so fast revenge killers threaten it

### Countering It

- Machamp's Speed (65) means faster special attackers can hit before it moves — No Guard cuts both ways
- Ghost-types immune to Normal/Fighting moves shut down half its kit (until it gets coverage TMs)
- Special-based fast sweepers (Alakazam, etc.) OHKO before Machamp acts

---

## Teachable Moves (TM/Tutor)

Moves that benefit from the No Guard synergy are marked.

| Move | Type | BP | No Guard benefit? | Notes |
|------|------|----|--------------------|-------|
| Drain Punch | Fighting | 75 | — | Recovery + STAB; good alternative to Cross Chop |
| Ice Punch | Ice | 75 | — | Coverage vs Grass/Ground/Flying |
| Thunder Punch | Electric | 75 | — | Coverage vs Water/Flying |
| Fire Punch | Fire | 75 | — | Coverage vs Steel/Ice/Grass |
| Bullet Punch | Steel | 40 | — | Priority (if player wants speed compensation) |
| Stone Edge | Rock | 100 | **Yes → 100% acc** | Normally 80% acc — No Guard makes it reliable Rock coverage |
| Rock Slide | Rock | 75 | **Yes → 100% acc** | Normally 90% acc — reliable flinch-chance rock move |
| Earthquake | Ground | 100 | — | Coverage vs Poison/Steel/Electric/Rock |
| Payback | Dark | 50/100 | — | Doubles if moving second; Machamp often moves second |
| Focus Blast | Fighting | 120 | **Yes → 100% acc** | Normally 70% acc; with No Guard, a 120 BP special Fighting move. Machamp's SpA is 65 — mostly for gimmick sets |
| Megahorn | Bug | 120 | **Yes → 100% acc** | Normally 85% acc — hits Psychic/Dark types, covers weaknesses |

---

## Team Synergy

- **Pairs with Psychic-types:** Ghost immunity plugs Machamp's main coverage gap; Psychic types bait and punish Steel/Poison answers that wall Machamp
- **Pairs with fast pivots:** Machamp is slow — U-Turn/Volt Switch users get it in safely
- **Pairs with Spikes/Stealth Rock:** Chip damage from entry hazards + confusion damage + Dynamic Punch damage = everything at half HP constantly
- **Covers:** Bug, Rock, Normal, Dark, Steel, Ice for teammates
- **Weaknesses covered by:** Flying, Psychic, and Fairy types that threaten Fighting

---

## Matchup Analysis

**Strong vs:** Normal, Dark, Ice, Steel, Rock, Bug — everything Fighting is strong against. Dynamic Punch punishes anything without a type advantage.

**Weak vs:** Psychic (4x resist from Psychic typing on dual-types), Flying (super effective STAB), Ghost (immune to Normal/Fighting). Fast Psychic types (Alakazam) hard-check Machamp — they hit before it moves AND resist/immune the main attack types.

**Key vulnerability:** No Guard means Machamp WILL get hit by normally-inaccurate moves. Zap Cannon (50% acc normally), Inferno (50% acc) — with No Guard, they're 100% accurate against Machamp too. This is the tradeoff. Matchup knowledge matters.

---

## Machamp vs Other Fighters

| | Breloom | Gallade | Machamp |
|---|---------|---------|---------|
| **Role** | Priority multi-hit striker | Crit-based slasher | Confusion-locking brawler |
| **Ability** | Technician | Vorpal Blade | No Guard |
| **Speed** | 70 (moderate) | 80 (decent) | 65 (slow) |
| **Bulk** | Low | Moderate | High |
| **Damage style** | Weak moves × Technician boost | Slicing crits | Heavy hits + confusion tax |
| **Fantasy** | "I hit 5 times" | "I always crit" | "You'll never get a clean hit on me" |

Each fighting type is completely distinct. Breloom for speed, Gallade for crits, Machamp for attrition.
