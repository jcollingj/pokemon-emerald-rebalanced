---
name: Mawile
dex_number: 303
status: designed
ability: Contrary
role: Contrary Snowball Fighter
ideal_items: Choice Band, Life Orb, Lum Berry
evolution_line: [Mawile]
---

# Mawile (#303) — Design Brainstorm

## Vanilla Stats

| Stat | Value |
|------|-------|
| HP | 50 |
| Atk | 85 |
| Def | 85 |
| SpA | 55 |
| SpD | 55 |
| Spe | 50 |
| **BST** | **380** |

Vanilla abilities: Hyper Cutter / Intimidate / Sheer Force (hidden)

Type: Steel / Fairy. Single-stage. Found Granite Cave B1F at L11-12 (rare encounter).

---

## Option 1: Strong Jaw — "The Iron Jaw Predator"

### Ability
**Strong Jaw** (rework of Hyper Cutter — prevents Atk drops — which is passive and doesn't shape the moveset)

Strong Jaw boosts biting and fang moves by 1.5×: Bite, Crunch, Fire Fang, Ice Fang, Thunder Fang, Poison Fang, Jaw Lock.

Mawile's entire identity is its enormous steel jaw — it's literally the _Deceiver Pokemon_ that chomps you with steel horns shaped like a second mouth. Strong Jaw is the most thematically perfect ability it could have.

### Build Identity
An elemental jaw machine that picks a fang to fit the matchup, with every bite hitting 1.5× harder than expected.

### Signature Interaction
**Strong Jaw + Crunch** = 80 × 1.5 = **120 effective BP Dark STAB**. But the real payoff is the fang suite: Fire Fang (65 × 1.5 = 97.5), Ice Fang (97.5), Thunder Fang (97.5) — three coverage options each hitting ~100 effective BP. Mawile answers almost anything in the type chart.

### Pros
- Thematically perfect — Mawile IS its jaws
- Excellent type coverage from fang suite (Fire/Ice/Thunder/Dark)
- No existing Pokemon in this hack uses Strong Jaw — clear niche
- Consistent: every move in the kit contributes

### Cons
- Steel/Fairy STAB (Iron Head, Play Rough) don't benefit directly from Strong Jaw — the best STAB moves are Dark-type Crunch and fang coverage, not the listed types
- Somewhat predictable: "use the right fang for the matchup" loop is correct but simple
- Less exciting math than Options 2/3

### Suggested Stats
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **70** | +20 |
| Atk | 85 | **115** | +30 |
| Def | 85 | 85 | — |
| SpA | 55 | 55 | — |
| SpD | 55 | **70** | +15 |
| Spe | 50 | **65** | +15 |
| **BST** | **380** | **460** | **+80** |

---

## Option 2: Sheer Force — "No Warning Shots"

### Ability
**Sheer Force** (already the vanilla hidden ability — making it primary)

Sheer Force removes the secondary effects of moves for a 1.3× power boost. Mawile's both STAB moves benefit directly: Iron Head (80 × 1.3 = **104 eff**, flinch removed) and Play Rough (90 × 1.3 = **117 eff**, SpD drop removed). Rock Slide and Crunch also get boosted.

### Build Identity
A clean physical wallbreaker where both STAB moves are amplified and every click does maximum damage.

### Signature Interaction
**Sheer Force + Play Rough** = 90 × 1.3 × 1.5 (STAB) = **175.5 effective BP** Fairy STAB. Paired with Sheer Force + Iron Head at **156 eff Steel STAB**, Mawile's two main moves hit harder than anything at its level range.

### Pros
- Both STABs get stronger — every move is the right move
- Simple, powerful, and satisfying
- Sheer Force also disables Life Orb recoil when used together (Life Orb recoil counts as a secondary effect in Gen 5+), making Life Orb essentially free extra damage
- Rock Slide, Crunch also boosted for coverage

### Cons
- Sheer Force is a known design pattern — it's clean but not surprising
- No combo identity: it's "hit hard" without a clever interaction
- Doesn't lean into Mawile's "Deceiver" theme — it's just a straightforward powerhouse

### Suggested Stats
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **65** | +15 |
| Atk | 85 | **110** | +25 |
| Def | 85 | **90** | +5 |
| SpA | 55 | 55 | — |
| SpD | 55 | **65** | +10 |
| Spe | 50 | **60** | +10 |
| **BST** | **380** | **445** | **+65** |

---

## ⭐ Option 3 (RECOMMENDED): Contrary — "The Judo Deceiver"

### Ability
**Contrary** (replaces Hyper Cutter)

Contrary reverses all stat changes on Mawile. Moves that normally lower the user's stats instead raise them — and vice versa. This creates a deceptive snowball identity: Mawile's "self-harming" Fighting moves actually make it stronger each turn.

This is the most fitting ability for the _Deceiver Pokemon_. Opponents think Mawile is burning itself out with Superpower — they're wrong. Every big hit gets bigger.

### Build Identity
A Steel/Fairy brawler that snowballs Attack and Defense by repeatedly using "self-weakening" Fighting moves, turning apparent drawbacks into progressive power spikes.

### Signature Interaction
**Contrary + Superpower** = Mawile uses a 120 BP Fighting move and gains **+1 Atk / +1 Def**. Use it again: **+2 Atk / +2 Def**. Third time: **+3/+3**. Each Superpower is simultaneously an attack AND setup, making it impossible to block the snowball without KOing Mawile outright.

The "aha" moment: Player uses Hammer Arm expecting a Speed drop, watches Speed go UP instead. Then gets Superpower and realizes — this thing doesn't weaken. It grows.

### How the Contrary Kit Works

| Move | Normal Effect | With Contrary |
|------|--------------|---------------|
| Hammer Arm (100 BP) | −1 Spe | **+1 Spe** — faster after each hit |
| Superpower (120 BP) | −1 Atk / −1 Def | **+1 Atk / +1 Def** — the snowball |
| Close Combat (120 BP) | −1 Def / −1 SpD | **+1 Def / +1 SpD** — defensive snowball |
| Parting Shot (status) | −1 Atk / −1 SpA on opponent | −1 Atk / −1 SpA on opponent *(targets opp, unchanged)* — pivot while weakening |

Avoid: Iron Defense (+2 Def → −2 Def), Swords Dance (+2 Atk → −2 Atk), Bulk Up — these hurt with Contrary.

### Pros
- Unique niche — no existing Pokemon in this hack uses Contrary
- The Superpower loop is genuinely exciting: every use is attack + setup simultaneously
- Perfectly fits Mawile's "Deceiver" theme (Pokedex: lures foes, then attacks unexpectedly)
- Parting Shot as a utility move fits the "trick enemy and escape" fantasy
- Steel/Fairy typing means Mawile can switch in safely and start the snowball
- Hammer Arm at L16 is a gentle early reveal: "wait, that raised my Speed?"

### Cons
- Must avoid setup moves that would hurt (no Swords Dance, Iron Defense)
- Can't mix Contrary with "normal" stat-boosting moves
- Higher skill ceiling — new players might not understand why stat drops are raising stats
- Needs enough bulk to survive multiple turns of Superpower loops

### Suggested Stats
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **75** | +25 |
| Atk | 85 | **110** | +25 |
| Def | 85 | **95** | +10 |
| SpA | 55 | 55 | — |
| SpD | 55 | **75** | +20 |
| Spe | 50 | **70** | +20 |
| **BST** | **380** | **480** | **+100** |

Rationale: Single-stage endgame Pokemon needs a serious boost. 110 Atk means Superpower hits hard from the start — and each subsequent use is even scarier. 70 Speed is just fast enough to threaten things, especially after a Hammer Arm Speed boost (+1 Speed → effectively 105 effective). 75 HP / 95 Def / 75 SpD provides the bulk to survive and loop multiple Superpowers.

---

## Full Recommended Design (Option 3: Contrary)

### Build Identity
Mawile is a **Contrary Snowball Fighter** that uses Steel/Fairy typing to switch in safely, then loops Superpower and Hammer Arm to become progressively stronger and faster each turn — rewarding players who understand that its "self-harming" moves are actually powering it up.

### Ability
| Slot | Ability | Effect |
|------|---------|--------|
| Primary | **Contrary** | Reverses all stat changes. Superpower becomes +1 Atk/+1 Def. Hammer Arm becomes +1 Spe. |
| Secondary | **Intimidate** | −1 Atk on switch-in. Retained from vanilla for defensive utility sets. |
| Hidden | **Sheer Force** | 1.3× power on moves with secondary effects. Alt physical build without Contrary. |

### Learnset

| Level | Move | BP | Type | Contrary Effect | Purpose |
|-------|------|----|------|-----------------|---------|
| 1 | Astonish | 30 | Ghost | — | Surprise attack; fits the "deceiver" flavor |
| 1 | Fake Tears | — | Dark | — | −2 SpD on target; luring utility |
| 8 | **Iron Head** | 80 | Steel | — | First STAB; build turns on |
| 12 | **Bite** | 60 | Dark | — | Jaw attack; Dark coverage, thematic |
| 16 | **Hammer Arm** | 100 | Fighting | **+1 Spe!** | First Contrary reveal — "wait, I got faster?" |
| 21 | Play Rough | 90 | Fairy | — | Fairy STAB |
| 27 | **Superpower** | 120 | Fighting | **+1 Atk / +1 Def!** | THE payoff — snowball begins |
| 33 | Sucker Punch | 70 | Dark | — | Priority for finishing weakened targets |
| 42 | Parting Shot | — | Dark | — | Pivot + weaken opponent; Deceiver identity |
| 48 | **Close Combat** | 120 | Fighting | **+1 Def / +1 SpD!** | Endgame — defensive snowball variant |

### Learnset Notes
- **L8 Iron Head**: Steel STAB turns on early. Mawile caught at L11-12 in Granite Cave already has this.
- **L16 Hammer Arm**: The first Contrary surprise. 100 BP and a Speed BOOST? Players learn the trick here.
- **L27 Superpower**: Full Contrary identity arrives. Each use snowballs Atk/Def simultaneously.
- **L42 Parting Shot**: "Lure them in and leave them weakened" — pure Deceiver flavor. Cripples an opponent and pivots out.
- **L48 Close Combat**: The defensive snowball variant — grants +1 Def/+1 SpD per use instead of Atk/Def.

### The Math (Superpower Loop)

With 110 Atk base:

| Turn | Atk Stage | Effective Atk | Superpower Effective BP |
|------|-----------|---------------|------------------------|
| 1 | +0 | 110 | 120 |
| 2 | +1 | 165 | 120 (at 1.5× Atk) |
| 3 | +2 | 220 | 120 (at 2× Atk) |
| 4 | +3 | 275 | 120 (at 2.5× Atk) |

By turn 3: 220 effective Atk × 120 BP Fighting STAB. Nothing at this level range survives Clean, because Mawile is simultaneously at +2 Def.

### Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Life Orb** | Sheer Force (hidden ability) + Life Orb = free 1.3× damage with no recoil. For Contrary sets: boosts Superpower/Hammer Arm damage on top of stat gains. |
| #2 | **Choice Band** | If you're not looping Superpowers — 110 × 1.5 = 165 eff Atk. Iron Head and Play Rough hit immediately hard without setup. |
| #3 | **Lum Berry** | One-time status cure. Crucial because Mawile wants multiple turns to snowball — one burn/paralysis ruins the plan. |

### Core Strategy

**The Superpower Snowball:**
1. Switch Mawile into a move it resists (Steel/Fairy has 10+ resistances — find an opportunity easily)
2. Use Hammer Arm → 100 BP damage AND gain +1 Speed
3. Use Superpower → 120 BP damage AND gain +1 Atk / +1 Def
4. Repeat. By turn 3, Mawile is at +2/+2/+2 — effectively a fully set-up sweeper that also tanked three hits
5. Sucker Punch as priority for cleanup

**The Parting Shot Pivot:**
1. Come in on a physical attacker
2. Use Parting Shot → cripple their Atk/SpA, pivot to a teammate
3. Opponent is weakened, your team is at full — the "lure and trick" fantasy

**When to use Close Combat vs Superpower:**
- Use Superpower when you need to tank physical hits (builds Def)
- Use Close Combat when you need to tank special hits (builds SpD)
- The choice between them is strategically meaningful

### Team Synergy
- Pairs with a Physical wall that benefits from Mawile's Parting Shot support
- Appreciates Paralysis support from teammates to buy extra snowball turns
- Steel/Fairy typing covers Psychic, Dragon, and Poison for teammates
- Knock Off support from teammates removes items on things that can wall Mawile's Fighting moves (Ghost types)

### Matchups

**Strong vs:** Dragon, Dark, Ice, Rock (Steel/Fairy coverage), Normal (Fighting STAB)
**Weak vs:** Fire (4×), Ground (2×), Ghost (Fighting is ineffective — only Sucker Punch touches them)
**Key threat:** Fire types. Mawile's one serious weakness is Fire — needs team members who can handle Blaziken, Arcanine, etc.

---

## Design Checklist

- [x] Ability chosen and justified (Contrary — shapes entire learnset around self-drop moves)
- [x] Synergy moves show up early enough (Hammer Arm L16, Superpower L27)
- [x] Stats reinforce build role (110 Atk for snowball, 75 HP + 95 Def for survival)
- [x] Learnset follows standard schedule
- [x] Clear niche — "Contrary Snowball Fighter" — no current Pokemon fills this role
- [x] Core strategy explainable in 2-3 sentences
