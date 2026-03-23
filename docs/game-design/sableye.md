---
name: Sableye
dex_number: 302
status: designed
ability: Prankster
role: Priority Status Disruptor
evolution_line: [Sableye]
---

# Sableye (#302) — Design Doc

## Overview

Sableye is a **single-stage Dark/Ghost** with zero weaknesses (pre-Fairy). Found in Granite Cave B1F+ at L10-14. Appears on Brawly's team as an anti-Psychic trap — the Pokemon that forces players past "just use Psychic/Flying."

**Vanilla Stats:**

| Stat | Value |
|------|-------|
| HP | 50 |
| Atk | 75 |
| Def | 75 |
| SpA | 65 |
| SpD | 65 |
| Spe | 50 |
| **BST** | **380** |

---

## Option A: Prankster — The Dirty Trickster ⭐ RECOMMENDED

### Ability
**Prankster** — All non-damaging moves (status, Taunt, Recover) gain +1 priority.

Why: Sableye's crystal eyes peer through darkness and act before anything can react. Thematically, it's the sneaky cave predator who gets the drop on prey. Mechanically, it creates a completely unique role: the only Pokemon in the roster that spreads status faster than anything else can move.

### Build Identity
A disruptive status spreader that burns, taunts, and recovers faster than anyone can respond — making it a wall that actively dismantles the opponent's strategy rather than passively tanking.

### Signature Interaction
**Prankster Will-O-Wisp → Foul Play**

Step 1: Will-O-Wisp goes at +1 priority — burns the physical attacker before they attack.
Step 2: Their physical moves now deal 50% damage through burn.
Step 3: Foul Play uses their Atk stat as the damage source — punishes high-Atk mons with their own power.
Step 4: Prankster Recover sustains Sableye while the burned attacker chips itself down.

The loop: burn → survive → Foul Play → Recover → repeat until they faint.

### Pros
- **Unique role** — no other Pokemon in the roster has Prankster (closest is Gardevoir's support role, but that's switch-in SpA stacking, not active disruption)
- **Zero weaknesses** means it can come in on literally anything (pre-Fairy)
- **Already in Brawly's gym design** — consistency across the game
- **Active playstyle** — pressing buttons feels powerful, not passive
- **Destiny Bond at L48 with Prankster** = priority "take you with me" — ultimate late-game payoff

### Cons
- Low damage output from Sableye's own stats; relies entirely on Foul Play and opponent's Atk
- Struggles vs special attackers (burn doesn't cripple them; Foul Play uses their lower Atk)
- Fairy weakness (if playing post-Gen 6 typing) is a hard counter

---

## Option B: Magic Bounce — The Mirror Shield

### Ability
**Magic Bounce** — Reflects all status moves, entry hazards, Taunt, and stat-reducing moves back at the user.

Why: Sableye's gem eyes literally reflect the world back. Thematically perfect. Mechanically, it's Mega Sableye's signature ability brought down to the base form — a bold choice that gives Sableye a truly unique defensive role.

### Build Identity
An impenetrable status mirror that turns every hazard, sleep, paralysis, and Toxic attempt into an own-goal — punishing status-reliant opponents while using Recover and Shadow Ball to slowly grind them down.

### Signature Interaction
**Magic Bounce + Toxic Spikes**

A Tentacool or Roselia leads and tries to set Toxic Spikes against a Ghost type (immune). With Magic Bounce, the Toxic Spikes reflect back and land on the opponent's side instead — the hazard layer they tried to set against Sableye now poisons their own team for the rest of the battle.

Also: Prankster-less Taunt setters who try to prevent Sableye from using Recover get their Taunt bounced right back, preventing them from setting up.

### Pros
- **Completely unique defensive utility** — no other catchable Pokemon in Segment 2 area has Magic Bounce
- **Shuts down entire playstyles** — status-reliant teams are helpless
- **Still has zero weaknesses** — combines incredible typing with perfect defensive utility
- **Lower skill floor** — passive reflection vs active status management

### Cons
- **Entirely reactive** — if the opponent never uses status moves, Magic Bounce contributes nothing
- Needs bulk to matter as a wall (same stat issues as Option A)
- Less exciting active gameplay loop — you wait for the bounce rather than drive the action
- Players may not notice the reflection in single-player (AI often doesn't re-use reflected moves)

---

## Option C: Pickpocket — The Cave Gem Thief

### Ability
**Pickpocket** — Steals the opponent's held item when hit by a contact move.

Why: Sableye's lore is literally that it eats gems and steals from humans. Pickpocket is the most thematically resonant ability possible. A Sableye that lurks in the dark waiting to mug you for your held item is peak Sableye.

### Build Identity
A manipulative trickster that uses Taunt to force opponents into physical contact moves, then pickpockets their best item mid-battle — stripping Choice Bands and Life Orbs while Tricking them away to lock opponents into bad items.

### Signature Interaction
**Taunt → Contact Move → Pickpocket → Trick**

Step 1: Taunt the opponent — they can only use attacking moves now.
Step 2: They use a contact attack (Scratch, Tackle, Brick Break, etc.) — Pickpocket activates, Sableye steals their item.
Step 3: Trick the stolen item onto a different opponent to lock them into a Choice item they can't use effectively.

Steal a Choice Band from a sweeper → Trick it onto a wall → the wall is locked into a Contact move forever.

### Pros
- **Most thematically perfect** — gem-eating cave thief finally plays like a gem-eating cave thief
- **Wildly unique** — no item manipulation like this exists in the current roster
- **High-skill ceiling** — rewarding for players who understand item economy
- **Creates hilarious moments** — opponent's ace loses their Life Orb mid-match

### Cons
- **Requires contact moves** — opponents who use special attacks or non-contact moves are immune
- **AI doesn't pivot around item loss** — less impressive in single-player vs PvP
- **Variable value** — stealing a Potion from a wild Pokemon is useless; stealing a Choice Band from a gym ace is incredible
- Needs Taunt to function (and Taunt takes a slot; without Prankster, it's not priority)

---

## Recommendation: Option A — Prankster ⭐

**Why Prankster wins:**

1. **It's already in the gym design.** Brawly's Sableye uses Prankster. Consistency between trainer use and player use reinforces that this is Sableye's identity — not a one-off trainer trick.

2. **The Destiny Bond payoff is incredible.** At L48, Sableye learns Destiny Bond. Prankster makes it +1 priority. Any attack launched at Sableye next turn takes the attacker down with it. This is a late-game signature moment that no other Pokemon can replicate.

3. **The Will-O-Wisp → Foul Play loop is satisfying to execute.** Players can understand it in one use: burn → survive → punish. It's readable, clever, and feels powerful without being overpowered.

4. **Magic Bounce is a close second** and worth revisiting if another Pokemon snags Prankster. But right now, no other Pokemon in the roster is doing priority status spreading — Sableye owns that niche entirely.

5. **Pickpocket is the "surprise us" option** and it's genuinely inspired by Sableye's lore. It's worth keeping in mind for a future rework if Prankster doesn't feel distinct enough from similar support mons.

---

## Recommended Design: Prankster Sableye

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **65** | +15 |
| Atk | 75 | 75 | — |
| Def | 75 | **90** | +15 |
| SpA | 65 | 65 | — |
| SpD | 65 | **85** | +20 |
| Spe | 50 | 50 | — |
| **BST** | **380** | **430** | **+50** |

**Rationale:** Speed doesn't matter — Prankster bypasses speed for status moves. HP, Def, and SpD need boosts so Sableye survives long enough to spread burns and Recover. The +50 BST puts it at the low end of single-stage viability (~430 is appropriate for a Pokemon with zero weaknesses and a very powerful ability).

### Learnset

| Level | Move | Type | BP | Notes |
|-------|------|------|----|-------|
| 1 | Scratch | Normal | 40 | Starter physical |
| 1 | Leer | Normal | — | -1 Def utility |
| 5 | Astonish | Ghost | 30 | Ghost STAB + flinch |
| 8 | **Feint Attack** | Dark | 60 | Never-miss Dark STAB — first synergy, cuts through Double Team users |
| 12 | **Will-O-Wisp** | Fire | — | Build turns on — Prankster burns before opponent moves |
| 16 | Shadow Sneak | Ghost | 40 | Priority Ghost STAB — Prankster + priority STAB for chip |
| 21 | **Taunt** | Dark | — | Prankster Taunt — shuts down hazard/setup attempts before they land |
| 27 | **Foul Play** | Dark | 95 | Midgame damage spike — uses opponent's Atk, punishes physical attackers |
| 33 | **Recover** | Normal | — | Prankster Recover — heal before the opponent can hit |
| 42 | Shadow Ball | Ghost | 80 | Ghost STAB for special damage vs high-Def walls |
| 48 | **Destiny Bond** | Ghost | — | Prankster Destiny Bond — +1 priority "take you with me" — signature capstone |

### Learnset Notes

- **L8 Feint Attack**: The first synergy move. Never misses — even through Smoke Screen, Sand Attack, Double Team. Sableye in cave darkness never whiffs.
- **L12 Will-O-Wisp**: The build turns on. Prankster makes this +1 priority — burn anything before it moves. The defining move.
- **L21 Taunt**: Prankster Taunt completes the disruption kit. Hazard setters, Calm Mind users, Wish users — all shut down before they act.
- **L33 Recover**: Late-game sustain. With Prankster, Sableye heals before incoming damage lands. This is what makes it unkillable in extended fights.
- **L48 Destiny Bond**: The signature payoff. +1 priority from Prankster. Any attack aimed at Sableye next turn takes the attacker with it. Makes Sableye a permanent threat even when low on HP.

### Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Leftovers** | Sustain between Recover uses. Every turn of regen extends the burn-stall loop. |
| #2 | **Sitrus Berry** | Burst recovery at 50% HP — great for gym fights where you need one clutch heal. |
| #3 | **Rocky Helmet** | Punishes contact moves. Opponents who try to brute-force through Sableye take 1/6 HP chip. |

### Core Strategy

1. Switch in on a physical attacker (Dark/Ghost typing is immune to their STAB if they're Normal/Fighting/Psychic)
2. **Prankster Will-O-Wisp** — burns before they move, halving their physical output
3. **Foul Play** — punishes their high Atk stat while they try to chip through Sableye
4. **Prankster Recover** — heal before incoming damage, extending the loop indefinitely
5. **Prankster Taunt** on any Pokemon trying to set up or use status — shuts it down before it happens
6. Low HP? **Prankster Destiny Bond** — priority "if I go, you go" as the final deterrent

### Team Synergy

- **Ghost-type immunity** to Normal/Fighting: switches into powerful physical attackers safely
- **Dark-type immunity** to Psychic: the dedicated Psychic-counter in any team
- Burn support helps slower teammates by crippling opposing physical attackers
- Taunt prevents entry hazards from going up — protects switch-heavy teams
- Pairs with **physical sweepers** who appreciate burn support softening physical walls

### Matchups

**Strong against:** Normal (immune), Fighting (immune), Psychic (immune), any physical attacker (burn halves output)
**Weak against:** Special attackers (burn doesn't help), Fairy types (post-Gen 6 weakness), Dark types (Knock Off ignores burn damage output reduction on that specific move)
**Key threat:** Unaware walls that ignore Foul Play's stat-based damage; Soundproof ignores... wait, that's not relevant. Primary threat is high-SpA opponents who ignore the burn entirely.

---

## Design Checklist

- [x] Ability chosen and justified (Prankster — shapes entire learnset around priority status)
- [x] Synergy moves show up early (Will-O-Wisp at L12, build fully online by L21 with Taunt)
- [x] Stats reinforce build role (HP/Def/SpD boosted for sustained status-spreading)
- [x] Learnset follows standard schedule
- [x] Clear niche — Priority Status Disruptor — no other Pokemon in roster does this
- [x] Core strategy explainable in 2-3 sentences
