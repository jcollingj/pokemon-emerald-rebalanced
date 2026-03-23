---
name: Gulpin
dex_number: 316
status: designed
ability: Gluttony
role: Belly Drum Setup Sweeper
ideal_items: Sitrus Berry, Black Sludge, Lum Berry
evolution_line: [Gulpin, Swalot]
---

# Gulpin / Swalot (#316 / #317) — Design Brainstorm

## Context

Gulpin is a Route 110 common encounter (Segment 3). Swalot has 100 base HP — the highest of any mid-game Poison type in the region. The design goal is to make it interesting and mechanically satisfying without duplicating existing Poison roles.

**Occupied Poison roles already in-game:**
- Poison Heal Tank: Nidoqueen
- Trapping Poison Tank: Tentacruel
- Toxic Boost Sweeper: Nidoking
- Priority Drain Mage (Triage): Roselia

Swalot needs a distinct lane. Three options below.

---

## Vanilla Stats

### Gulpin
| Stat | Vanilla |
|------|---------|
| HP | 70 |
| Atk | 43 |
| Def | 53 |
| SpA | 43 |
| SpD | 53 |
| Spe | 40 |
| **BST** | **302** |

### Swalot
| Stat | Vanilla |
|------|---------|
| HP | 100 |
| Atk | 73 |
| Def | 83 |
| SpA | 73 |
| SpD | 83 |
| Spe | 55 |
| **BST** | **467** |

**Vanilla abilities:** Liquid Ooze / Sticky Hold / Gluttony
**Evolution:** Gulpin → Swalot at Level 26

---

## Option 1: Gluttony — The Setup Glutton ⭐ RECOMMENDED

### Ability: Gluttony
**Effect:** Berries trigger at 50% HP instead of the usual 25%.

### Build Identity
A setup sweeper that uses Belly Drum + Gluttony to reach maximum Attack at a surprisingly low HP cost — the stomach that eats to win.

### Signature Interaction
**Belly Drum → Gluttony → Sitrus Berry → Belch**

1. Use Belly Drum — HP drops from 100% to 50%
2. **Gluttony fires Sitrus Berry immediately** at 50% (instead of 25%) — heals 25% HP back
3. Net result: **75% HP remaining with +6 Attack**
4. Berry is now consumed — **Belch is unlocked** (120 BP Poison STAB, 90% accuracy)
5. Obliterate with +6 Attack Belch or Gunk Shot

The triple chain — Gluttony + Belly Drum + Belch — is the "aha" moment. It's the stomach Pokemon literally eating something and then weaponizing the burp. The player feels clever for understanding why Swalot carries Sitrus Berry instead of Black Sludge.

### Why This Works with 100 HP

High base HP isn't just flavor here — it's load-bearing:
- More HP = more post-Belly Drum survivability
- Sitrus Berry heals 25% of **100+ base HP**, which at competitive levels is ~50-60 HP returned
- The Belly Drum "cost" is genuinely affordable: you spend 50% HP, get 25% back, end at 75%

### Rebalanced Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 100 | **105** | +5 |
| Atk | 73 | **100** | +27 ✦ |
| Def | 83 | **83** | — |
| SpA | 73 | **55** | -18 (dumped) |
| SpD | 83 | **90** | +7 |
| Spe | 55 | **67** | +12 |
| **BST** | **467** | **500** | **+33** |

**Rationale:** Attack is the core stat — 100 base becomes ~330+ at high levels, then ×4 from Belly Drum = devastating. Speed bumped to 67 so Swalot can outpace common walls and slow-speed tanks after setup. SpA dumped since we're going physical. SpD slightly improved so it can survive a special hit on the setup turn.

### Learnset

**Gulpin:**

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Pound | 40 | Normal | Basic physical |
| 1 | Poison Gas | — | Poison | Status utility |
| 8 | **Yawn** | — | Normal | **First synergy** — creates sleep window to safely use Belly Drum |
| 12 | **Encore** | — | Normal | **Second synergy** — lock opponent into non-damaging move for a guaranteed Belly Drum turn |
| 16 | Sludge | 65 | Poison | First real STAB option |
| 21 | Toxic | — | Poison | Status spreading, Venoshock setup |
| 26 | [→ Swalot] | | | |

**Swalot (on evolution, learns immediately):**
- **Belly Drum** — the setup move that defines the build
- **Gunk Shot** — 120 BP Poison STAB, immediate nuclear option

**Swalot continued:**

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 27 | **Body Slam** | 85 | Normal | Physical STAB + 30% paralysis — good coverage, doubles as speed denial |
| 33 | **Sucker Punch** | 70 | Dark | +1 Priority — the clutch play after Belly Drum when you need to move first |
| 36 | Venoshock | 65 | Poison | 130 BP on poisoned targets — payoff if Toxic was set up earlier |
| 42 | Sludge Wave | 95 | Poison | Broad Poison AoE nuke for when you don't need Gunk Shot's power |
| 48 | **Belch** | 120 | Poison | **THE signature** — requires a berry to have been eaten. After Belly Drum consumes the Sitrus Berry via Gluttony, Belch is permanently unlocked. 120 BP + STAB + 90% accuracy at +6 Attack. This is the winning button. |

### Ideal Items

1. **Sitrus Berry** — Core item. Must-have. Gluttony fires it the moment Belly Drum activates. Belly Drum → Gluttony → Sitrus → Belch is the whole build.
2. **Lum Berry** — Alternative if opponent is likely to status you before you can Belly Drum (Spore, Toxic, Thunder Wave). Trade sustain for setup safety.
3. **Black Sludge** — If not running Belly Drum (for more passive builds). Passive 1/16 healing for Poison types. Punishes Trick users.

### Core Strategy

**The Setup Turn:**
1. Switch Swalot into a weak/non-threatening move
2. Use Belly Drum → Gluttony fires Sitrus Berry → you're at 75% HP, +6 Attack
3. Use Belch (now unlocked) or Gunk Shot for immediate nuclear damage
4. If outsped: Sucker Punch (priority) catches faster opponents trying to finish you off

**Why Sucker Punch matters:** After Belly Drum, you're at 75% HP with no items. Opponents will try to KO you before you attack. Sucker Punch punishes any attacking move with a priority +70 BP Dark hit — extremely strong at +6 Attack.

**Math:**
- +6 Atk boost means effective Attack = 100 base × 4 = **400 effective Attack**
- Gunk Shot: 120 BP × 1.5 STAB × 400 Atk effective = **nuclear**
- Belch (same BP as Gunk Shot but 90% vs 80% accuracy): effectively the upgraded version post-berry

### Pros
- Mechanically unique: triple synergy (Gluttony + Belly Drum + Belch) is a satisfying "aha"
- High HP is load-bearing, not just flavor
- Doesn't duplicate any existing Poison role
- Yawn + Encore are great utility moves that make Gulpin feel useful even pre-evolution
- Belch is perfectly thematic for a stomach Pokémon

### Cons
- Single-use setup (Sitrus Berry consumed, Belly Drum used, done)
- Needs a safe switch-in or sleep turn to set up — team support required
- Sucker Punch is conditional (opponent must use an attacking move)

---

## Option 2: Corrosion — The Universal Poisoner

### Ability: Corrosion
**Effect:** Swalot can inflict Poison and Badly Poisoned on any type, including Steel and Poison types (normally immune).

### Build Identity
The only Poison type in the game that can toxic Steel types — making it a hard counter to Steel-types and enabling Venoshock payoffs against targets that normally shrug off poison.

### Signature Interaction
**Toxic → Steel-type → Venoshock**

Most Poison moves don't work on Steel types. Corrosion bypasses this entirely. Toxic a Steelix, a Magneton, a Metang — then Venoshock them for 195 effective BP Poison STAB. No other Pokemon in this game can do this.

### Rebalanced Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 100 | **105** | +5 |
| Atk | 73 | **75** | +2 |
| Def | 83 | **83** | — |
| SpA | 73 | **95** | +22 ✦ |
| SpD | 83 | **88** | +5 |
| Spe | 55 | **60** | +5 |
| **BST** | **467** | **506** | **+39** |

**Rationale:** SpA is the main stat — Venoshock at 130 BP (doubled vs poisoned) with Swalot's STAB is 195 effective. High HP + decent SpD makes a serviceable special tank. Speed is intentionally left low since Swalot's role is to switch in, Toxic, and then punish with Venoshock.

### Learnset (Corrosion-focused)

**Gulpin:**

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Acid | 40 | Poison | Special Poison STAB |
| 1 | Poison Gas | — | Poison | Status utility |
| 8 | **Toxic** | — | Poison | **First synergy** — with Corrosion, this works on EVERYTHING. Build turns on. |
| 12 | **Acid Spray** | 40 | Poison | -2 SpDef, makes Venoshock payoff even bigger |
| 16 | Sludge | 65 | Poison | STAB |
| 21 | Yawn | — | Normal | Status utility, creates tempo |
| 26 | [→ Swalot] | | | |

**Swalot (evolution):**
- **Venoshock** — 65 BP, doubles to 130 on poisoned (195 with STAB)
- **Sludge Bomb** — Reliable STAB with 30% poison

**Swalot continued:**

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 27 | **Recover** | — | Normal | Sustain — Swalot outlasts things it poisons |
| 33 | Shadow Ball | 80 | Ghost | Coverage vs Psychic types (Swalot's type weakness) |
| 36 | Stockpile | — | Normal | Defensive stacking option |
| 42 | Sludge Wave | 95 | Poison | Nuke |
| 48 | Gunk Shot | 120 | Poison | Maximum Poison STAB |

### Ideal Items
1. **Black Sludge** — Passive healing for Poison types. Swalot outlasts the opponent while Toxic ticks up.
2. **Assault Vest** — SpDef +50%. Lets Swalot switch into special attackers safely, Toxic them, and Venoshock on the way out.
3. **Life Orb** — If playing aggressively: Venoshock hits for serious damage + 30% recoil. Shorten the game.

### Pros
- Hard counter to Steel types (the team builder's worst nightmare vs Poison teams)
- Creates a genuinely unique counter-meta niche
- Thematic: stomach acid that corrodes metal
- The Toxic → Venoshock combo is explosive once it lands

### Cons
- Relies on opponent staying in to receive Toxic (Steel types may switch out)
- More reactive than proactive — Swalot is responding to the opponent's team
- 55 Speed means it often takes a hit before it can act (somewhat mitigated by high HP)

---

## Option 3: Gooey — The Tar Pit (Surprise Pick)

### Ability: Gooey
**Effect:** When hit by a contact move, the attacker's Speed is lowered by 1 stage.

### Build Identity
A living speed vacuum — every physical hit against Swalot grinds the attacker to a halt, turning it into a tar pit that offensive teams dread switching into.

### Signature Interaction
**Gooey + Body Slam = Double Speed Denial**

Opponent hits with a physical contact move → Gooey lowers their Speed by 1. Then Swalot uses Body Slam → 30% paralysis chance halves their Speed on top. By turn 2-3, the fastest sweeper is crawling. Add a Rocky Helmet for chip damage and you have a Pokemon that punishes contact attackers on every dimension.

### Rebalanced Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 100 | **115** | +15 |
| Atk | 73 | **80** | +7 |
| Def | 83 | **90** | +7 |
| SpA | 73 | **60** | -13 |
| SpD | 83 | **90** | +7 |
| Spe | 55 | **55** | — |
| **BST** | **467** | **490** | **+23** |

**Rationale:** Maximum HP and balanced bulk — Swalot needs to take many hits to trigger Gooey multiple times. Speed intentionally left at 55 (turns Trick Room into a bonus strategy). SpA dumped since this is a physical/utility build.

### Learnset (Gooey-focused)

**Gulpin:**

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Pound | 40 | Normal | Physical attack |
| 1 | Poison Gas | — | Poison | Status spread |
| 8 | **Yawn** | — | Normal | First synergy — sleep buys time for Gooey to accumulate speed drops |
| 12 | **Body Slam** | 85 | Normal | Second synergy — 30% paralysis + STAB. By L12, Body Slam + Gooey = double speed control |
| 16 | Sludge | 65 | Poison | STAB |
| 21 | Encore | — | Normal | Utility — lock opponent into a non-attack to deny Gooey triggers |
| 26 | [→ Swalot] | | | |

**Swalot (evolution):**
- **Sludge Bomb** — 90 BP Poison STAB, 30% poison
- **Toxic** — Status stacking

**Swalot continued:**

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 27 | **Venoshock** | 65 | Poison | Payoff on poisoned targets. Trapped opponents get Toxic'd then Venoshocked. |
| 33 | Recover | — | Normal | Sustain — the longer it stays in, the more Gooey procs |
| 36 | Trick Room | — | Psychic | **The curve ball** — at 55 base Speed, in Trick Room Swalot moves first. Speed-reduced opponents become even slower relative to it. |
| 42 | Sludge Wave | 95 | Poison | Nuke |
| 48 | Gunk Shot | 120 | Poison | Maximum STAB |

### Ideal Items
1. **Rocky Helmet** — Chip damage on contact moves. Stacks with Gooey: attacker hits Swalot, takes Rocky Helmet damage AND loses Speed. Every physical attack becomes a bad deal.
2. **Black Sludge** — Passive healing. Keeps Swalot alive to keep triggering Gooey.
3. **Assault Vest** — SpDef bulk for surviving special attacks between physical hits.

### Pros
- Completely unique role: no other Pokemon in the game does speed-sapping tank
- The "tar pit" fantasy is evocative and memorable
- Rocky Helmet + Gooey + Body Slam paralysis is a satisfying triple interaction
- Trick Room niche is a free bonus for team-builder knowledge

### Cons
- Support role, not a win condition — needs teammates to capitalize on speed drops
- Gooey only works vs contact moves (special attackers and ranged moves bypass it)
- Less standalone threatening than Option 1 or 2

---

## ⭐ Recommendation: Option 1 — Gluttony

**Why Gluttony wins:**

The Gluttony option is the most mechanically satisfying and creates the strongest standalone identity. The reason:

**The triple synergy is a genuine "aha" moment:**
> Belly Drum halves HP → Gluttony fires Sitrus Berry → heal 25% back → end at 75% HP → Belch is now unlocked (requires eaten berry) → use it at +6 Attack

This chain is something a player discovers, not something they're told. It rewards knowledge of the mechanic and creates a "wait, these all click together" payoff that SKILL.md describes as the ideal design pattern.

**High HP becomes load-bearing:** 105 base HP isn't just bulk — it's the reason Belly Drum is viable. More HP means more post-Drum survivability, more Sitrus Berry healing, and more buffer before the sweep. The design makes HP feel like a resource, not just a stat.

**Distinct from Zigzagoon:** Both use Belly Drum, but Zigzagoon's identity is Multiscale + Extreme Speed (priority sweep, Normal type). Swalot's identity is Gluttony trigger + STAB Belch/Gunk Shot (one-shot burst, Poison type). Different setups, different payoffs, different types, different niches.

**Belch is *perfectly thematic*:** The Poison Bag Pokémon eats a berry and weaponizes the resulting belch. It's funny, it's satisfying, and it fits the creature's entire flavor.

**Corrosion (Option 2) is the strong runner-up** — particularly if Jacob wants the Steel-type counter niche and a more reactive/strategic playstyle. Both are distinct from existing designs. If the party feels like it already has enough setup sweepers, Corrosion is the call.

---

## Design Card Summary

**Name:** Gulpin / Swalot
**Role:** Belly Drum Setup Sweeper
**Ability:** Gluttony (berries trigger at 50% HP)
**Key Interaction:** Belly Drum → Gluttony Sitrus Berry → Belch unlocked at +6 Attack

**Rebalanced Swalot Stats:**

| Stat | Vanilla | Rebalanced |
|------|---------|------------|
| HP | 100 | **105** |
| Atk | 73 | **100** |
| Def | 83 | **83** |
| SpA | 73 | **55** |
| SpD | 83 | **90** |
| Spe | 55 | **67** |
| **BST** | **467** | **500** |

**Items:** Sitrus Berry (core) / Lum Berry (alt) / Black Sludge (passive)
