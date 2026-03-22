---
name: Nincada / Ninjask / Shedinja
dex_numbers: [290, 291, 292]
status: implemented
evolution_line: [Nincada, Ninjask + Shedinja]
---

# Nincada / Ninjask / Shedinja — Rebalance Notes

## Overview

The Nincada line is one of the most unique in the game: one Pokemon evolving into **two** at once. This creates an asymmetric design opportunity — Ninjask and Shedinja share an origin but play completely differently. Nincada appears on Route 116 at L6-7, giving early access to this unique split evolution at L16.

---

## Nincada (#290) — Compound Eyes Accuracy Abuser

### Build Identity
Nincada is a pre-evolution Bug/Ground Pokemon that uses **Compound Eyes** to make its accuracy-dependent moves more reliable, setting up for its split evolution at L16.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 31 | 45 | +14 |
| Attack | 45 | 55 | +10 |
| Defense | 90 | 90 | — |
| Sp. Atk | 30 | 30 | — |
| Sp. Def | 30 | 40 | +10 |
| Speed | 40 | 45 | +5 |
| **BST** | **266** | **305** | **+39** |

**Rationale:** Nincada needs to be fun to use from L6-16. The HP and SpDef bumps give it real bulk to survive early battles. Defense stays at 90 (its standout vanilla stat). The slight Attack and Speed bumps make it feel responsive.

### Ability

**Primary:** Compound Eyes — boosts accuracy of all moves by 30%

Compound Eyes shapes the learnset: moves with lower accuracy (Fury Swipes at 70%) become much more reliable (91%), and accuracy-lowering moves compound to cripple opponents further.

### Learnset

| Level | Move | Notes |
|-------|------|-------|
| 1 | Scratch | Basic attack |
| 1 | Harden | Defensive utility |
| 8 | Leech Life | Bug STAB, sustain |
| 12 | Mud Slap | Ground STAB, accuracy drop on opponent (combos with Compound Eyes: opponent's already-lowered accuracy suffers more) |
| 16 | Fury Swipes | Multi-hit, 70% accuracy → 91% with Compound Eyes — final power move before evolution |

### Evolution
Evolves at **Level 16** into both Ninjask and Shedinja.

---

## Ninjask (#291) — Speed Boost Sweeper / Baton Passer

### Build Identity
Ninjask is the **fastest Pokemon in the game** (160 Speed base) that gets **even faster every turn** via Speed Boost. It either sweeps with Bug/Flying STAB or passes accumulated Speed and Attack boosts to teammates via Baton Pass.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 61 | 61 | — |
| Attack | 90 | 100 | +10 |
| Defense | 45 | 50 | +5 |
| Sp. Atk | 50 | 50 | — |
| Sp. Def | 50 | 50 | — |
| Speed | 160 | 160 | — |
| **BST** | **456** | **471** | **+15** |

**Rationale:** Keep 160 Speed untouched — it's the defining stat. Bump Attack to 100 so the sweeping role feels genuinely threatening. Minor Defense bump for marginal survivability.

### Ability

**Primary:** Speed Boost — gains +1 Speed at the end of each turn.

Speed Boost is the identity. With 160 base Speed + Speed Boost, Ninjask becomes practically impossible to outspeed after turn 1. Every move in the learnset is designed to exploit this: hit fast, hit hard, or pass the advantage.

### Learnset

| Level | Move | Notes |
|-------|------|-------|
| 1 | Scratch | Carry-over |
| 1 | Harden | Carry-over |
| 1 | Leech Life | Bug STAB carry-over |
| 1 | Sand Attack | Utility carry-over |
| 8 | Aerial Ace | Flying STAB, never misses — first synergy move. Speed Boost + Aerial Ace = reliable damage every turn |
| 12 | Fury Cutter | Bug STAB, doubles in power each turn — pairs with Speed Boost: both damage and speed compound, creating escalating pressure |
| 16 | X-Scissor | Strong Bug STAB power move at evolution point |
| 21 | Swords Dance | Setup; combine with Speed Boost for +2 Atk and accelerating speed — a sweeping snowball |
| 27 | Acrobatics | 110 power Flying STAB without a held item; rewards aggressive itemless play |
| 33 | U-Turn | Bug STAB pivot; retreat while keeping Speed Boost count low or scouting |
| 36 | Baton Pass | Pass accumulated Speed Boost stages + Swords Dance boosts to a teammate |
| 42 | Leech Life | High-power Bug STAB with drain; 80 base power drain as a late-game sustain tool |
| 48 | Brave Bird | Strongest Flying STAB at 120 power; recoil matters less at 160+ Speed |

### Core Strategy

**The Sweep:**
1. Switch in Ninjask — already fastest Pokemon alive at 160 Speed
2. Turn 1: Swords Dance (+2 Attack). Speed Boost triggers at end of turn (161 effective Speed)
3. Turn 2: X-Scissor or Aerial Ace — massively boosted attack, now even faster
4. Repeat until the team is defeated

**The Pass:**
1. Set up Swords Dance + 2-3 Speed Boost turns
2. Baton Pass to a heavy hitter (Nidoking, Breloom, Gallade)
3. Teammate enters with +2 Atk and +2-3 Speed — suddenly unstoppable

**Fury Cutter Pressure:**
- Start Fury Cutter turn 1: 40 base power
- Turn 2: 80 power
- Turn 3: 160 power (effectively)
- Combined with Speed Boost, escalating pressure forces the opponent to act fast

### Ideal Items

| Rank | Item | Reason |
|------|------|--------|
| #1 | Focus Sash | Survive one hit, guarantee at least one Swords Dance or Baton Pass |
| #2 | Life Orb | Boost Aerial Ace / X-Scissor damage for outright sweeping |
| #3 | Choice Band | If running pure offense — 100 Atk + Band is 150 effective Atk at turn 1 |

### Team Synergy
- Pairs with physical sweepers for Baton Pass targets (Gallade, Nidoking, Breloom)
- Benefits from entry hazard support to wear down opponents faster
- Appreciates Rapid Spin / Defog support since it must switch in

---

## Shedinja (#292) — Wonder Guard Priority Striker

### Build Identity
Shedinja is the **ultimate gimmick Pokemon** — 1 HP, immune to everything except Fire/Flying/Rock/Ghost/Dark. It uses **Shadow Sneak (priority)** to strike first even with its lower Speed, switch into immunities, and threatens opponents that can't touch it.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 1 | 1 | — (sacred) |
| Attack | 90 | 120 | +30 |
| Defense | 45 | 45 | — |
| Sp. Atk | 30 | 30 | — |
| Sp. Def | 30 | 30 | — |
| Speed | 40 | 80 | +40 |
| **BST** | **236** | **306** | **+70** |

**Rationale:** The 1 HP stays — that's non-negotiable. But Shedinja needs to hit harder and act faster to maximize its threat window. 120 Attack makes every hit meaningful. 80 Speed means it outspeeds more threats naturally (still needs Shadow Sneak for the fastest foes, which is fine — that's the build).

### Ability

**Primary:** Wonder Guard — only super-effective moves deal damage.

Wonder Guard IS Shedinja. Five types can hit it: Fire, Flying, Rock, Ghost, Dark. Everything else does nothing. The entire design is built around exploiting this.

### Learnset

| Level | Move | Notes |
|-------|------|-------|
| 1 | Scratch | Basic |
| 1 | Harden | Defensive utility |
| 1 | Leech Life | Bug STAB carry-over |
| 1 | Sand Attack | Utility carry-over |
| 8 | Shadow Sneak | **Key synergy move.** Ghost-type priority — Shedinja switches into something that can't touch it, then Shadow Sneak strikes first before they can react or switch to a counter. This is when the build "turns on." |
| 12 | Confuse Ray | Forces 50% miss chance — buys free turns against opponents that got lucky landing a hit |
| 16 | Will-O-Wisp | Burns physical attackers; even if a Fire-type move could OHKO Shedinja, burning a Fire-type wall reduces their attack. Shedinja uses fire against fire. |
| 21 | Leech Life | Strong Bug STAB, 80 power; restores HP — with 1 HP max, this returns Shedinja to full health immediately if it took any residual damage |
| 27 | Shadow Claw | Ghost STAB, 70 power, high critical hit rate. Physical Ghost STAB for immediate damage |
| 33 | X-Scissor | Bug STAB, 80 power, reliable physical attack |
| 36 | Phantom Force | 2-turn Ghost move (invulnerable turn 1, strike turn 2 for 90 power). Stalls against trapped opponents |
| 42 | Poltergeist | 110 base power Ghost STAB — the strongest physical Ghost move. Requires opponent to have an item (reliable in most matchups) |
| 48 | Destiny Bond | If Shedinja is about to faint, the attacker faints with it. Ultimate 1-HP revenge tool. |

### Core Strategy

**The Switch-In:**
1. Identify an opponent using a move Shedinja is immune to (Normal, Water, Grass, Fighting, etc.)
2. Switch Shedinja in — the move does nothing
3. Shadow Sneak on the following turn — **priority** means you move before the opponent
4. If they stay in and can't touch you, keep attacking. If they switch to a counter, use Destiny Bond or Phantom Force

**The Immunity Abuse:**
- Shedinja is immune to: Normal, Fighting, Poison, Bug, Grass, Water, Electric, Psychic, Ice, Dragon, Fairy
- That covers the majority of commonly-seen moves
- Shedinja becomes a hard counter to any Special sweeper using non-SE moves

**The Desperation Move:**
- Destiny Bond at L48 transforms Shedinja into a guaranteed trade: "kill me, and I take you with me"
- Combine with Focus Sash to guarantee one SE hit is survived, then Destiny Bond for the trade

### Ideal Items

| Rank | Item | Reason |
|------|------|--------|
| #1 | Focus Sash | Survive one OHKO from a SE move — turn Shedinja into a guaranteed two-turn threat |
| #2 | Choice Band | 120 Atk + Band = 180 effective Atk — hit extremely hard before fainting |
| #3 | Scope Lens | Shadow Claw's already-high crit rate becomes nearly guaranteed |

### Matchup Notes

**Strong against:**
- Any special sweeper locked into a non-SE move
- Water/Grass/Ice/Dragon types relying on their STAB moves
- Normal-type attackers (complete immunity)

**Weak against:**
- Fire, Flying, Rock, Ghost, Dark — any of these OHKOs Shedinja
- Stealth Rock (Rock-type chip damage kills Shedinja immediately on switch-in)
- Toxic/status moves bypass Wonder Guard

**Tip:** Always check for Stealth Rock before sending in Shedinja. It's the #1 counter.

---

## Design Reflection

The split evolution creates natural asymmetry:
- **Ninjask** plays momentum and speed — every turn it gets scarier
- **Shedinja** plays immunity and precision — one wrong move by the opponent is fatal

Together they make Nincada feel special: catching one Pokemon gives you a potential choice between two completely different playstyles.
