# Nincada / Ninjask / Shedinja — Rebalance Notes

## The Line

One of the most unique split evolutions in the game: at L20, Nincada becomes Ninjask, AND if there's an empty party slot + Poke Ball, a Shedinja also appears. Three Pokemon from one evolution.

Each member of the line serves a completely different role:

| Stage | Role | Ability |
|-------|------|---------|
| Nincada | Compound Eyes accuracy abuser | Compound Eyes |
| Ninjask | Speed Boost sweeper / Baton Passer | Speed Boost |
| Shedinja | Wonder Guard priority striker | Wonder Guard |

---

## Nincada (#290) — Compound Eyes Precision Bug

**Build Identity:** Nincada is an early-game Bug/Ground attacker that uses Compound Eyes to make every hit land — Fury Swipes becomes a never-miss flurry, and Mud Slap's accuracy drops are more reliable.

Encountered on Route 116 at L6-7. Evolves at L20 (vanilla).

### Ability: Compound Eyes

Accuracy ×1.3. Makes:
- Fury Swipes (80% acc) → effectively 104% — basically impossible to miss
- Mud Slap (100% acc, but accuracy drop on hit → more reliable pressure)
- Leech Life stays accurate (100%)

Thematically perfect — Nincada literally has compound eyes.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 31 | 45 | +14 |
| Atk | 45 | 55 | +10 |
| Def | 90 | 90 | — |
| SpA | 30 | 30 | — |
| SpD | 30 | 40 | +10 |
| Spe | 40 | 40 | — |
| **BST** | **266** | **300** | **+34** |

HP and SpD buffed so it can survive long enough to be fun. Defense stays high (it's a grub with a hard shell). Enough Attack to deal meaningful damage with STAB moves.

### Learnset

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Scratch | 40 | Normal | Basic attack |
| 1 | Harden | — | Normal | Defensive utility |
| 8 | Leech Life | 80 | Bug | STAB drain — first synergy move, sustains through fights |
| 12 | Mud Slap | 20 | Ground | Ground STAB, drops accuracy. Compound Eyes makes the hit land. Chip + pressure. |
| 16 | Fury Swipes | 18×2-5 | Normal | With Compound Eyes, 80% acc becomes 104% — this never misses. Multi-hit filler. |

Evolves at L20.

### Ideal Items

1. **Eviolite** — Boosts both defenses by 50% while not fully evolved. Pairs perfectly with the high base Defense.
2. **Lum Berry** — Prevents early-game status that would otherwise end a run
3. **Scope Lens** — Crit chance bump; multi-hit moves with Fury Swipes generate more crit opportunities

### Core Strategy

Nincada is a pre-evolution utility Pokemon. The fun is:
1. Mud Slap → accuracy drops on opponent
2. Fury Swipes → even at lowered accuracy, Compound Eyes makes it hit
3. Leech Life sustains HP while chipping

At L20, it splits into Ninjask and potentially Shedinja — the payoff for the investment.

---

## Ninjask (#291) — Speed Boost Sweeper

**Build Identity:** Ninjask is the fastest Pokemon in the game (160 Speed) and gets faster every turn. Speed Boost is its identity — after 2-3 turns it outpaces everything, and it can either sweep with boosted Swords Dance or Baton Pass the entire Speed stack to a teammate.

### Ability: Speed Boost

Speed +1 each turn. After 2 turns, Ninjask outspeeds virtually everything. After Swords Dance, it's a sweeper. After Baton Pass, a teammate inherits maximum Speed. The core identity stays vanilla — Speed Boost is too iconic and too well-designed to change.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 61 | 61 | — |
| Atk | 90 | 100 | +10 |
| Def | 45 | 50 | +5 |
| SpA | 50 | 50 | — |
| SpD | 50 | 50 | — |
| Spe | 160 | 160 | — |
| **BST** | **456** | **471** | **+15** |

Atk bumped to 100 so X-Scissor and Aerial Ace deal real damage without needing a Swords Dance. Speed stays at 160 — touching it would be wrong. Def slightly improved for survivability.

### Learnset

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Scratch | 40 | Normal | Inherited from Nincada |
| 1 | Harden | — | Normal | Inherited |
| 8 | Leech Life | 80 | Bug | Inherited — still valid STAB on Ninjask |
| 12 | Mud Slap | 20 | Ground | Inherited — minor coverage |
| 16 | Fury Swipes | 18×2-5 | Normal | Inherited |
| 20 | Aerial Ace | 60 | Flying | Evolution reward. Never misses. Primary Flying STAB. |
| 21 | Fury Cutter | 40→80→160 | Bug | Bug STAB that doubles BP each turn. Speed Boost makes staying in profitable — the longer you stay, the faster and harder you hit. |
| 27 | X-Scissor | 80 | Bug | Strong reliable Bug STAB |
| 33 | Swords Dance | — | Normal | The setup move. After Swords Dance + 2 Speed Boosts, almost nothing survives. |
| 36 | Acrobatics | 110 | Flying | 110 BP Flying if no held item. Works beautifully with a no-item sweeper set. |
| 42 | U-Turn | 70 | Bug | Pivot + Bug STAB. Great for scouting and maintaining Speed Boost via smart switching. |
| 48 | Baton Pass | — | Normal | The endgame payoff. Pass accumulated Speed Boost stacks (and Swords Dance if you got one) to a heavy hitter. |

### Ideal Items

1. **No item** — Enables Acrobatics (110 BP). No item = maximum Acrobatics damage AND free Speed Boost accumulation. Pure sweeper.
2. **Salac Berry** — Triggers at 25% HP for another +1 Speed on top of Speed Boost. For Baton Pass sets, pass Salac trigger + multiple Speed boosts.
3. **Focus Sash** — Guarantees survival to get at least 1 Speed Boost off before the sweep begins

### Core Strategy

**Sweep mode:**
1. Switch in → Speed Boost starts accumulating
2. Swords Dance when opponent is locked in or switching
3. Aerial Ace / X-Scissor for coverage sweeping
4. Acrobatics with no item = 165 effective BP (1.5 STAB × 110)

**Baton Pass mode:**
1. Switch in safely
2. Swords Dance + let Speed Boost stack (2-3 turns)
3. Baton Pass to a powerful teammate with coverage Ninjask can't OHKO
4. Teammate sweeps with inherited stats

**Fury Cutter patience:**
- Turn 1: 40 BP (normal)
- Turn 2: 80 BP (solid)
- Turn 3: 160 BP (nuclear)
- Each turn you stay in, Speed Boost also stacks → by turn 3, you're nearly uncatchable AND hitting for massive BP

### Team Synergy

- **Baton Pass receivers:** Slaking (inherit Speed → no longer slow), Sceptile, Swampert, Gardevoir
- **U-Turn pivots:** Ninjask can safely pivot for the team
- Pair with a pivot that brings Ninjask in safely (Volt Switch / Teleport users)

---

## Shedinja (#292) — Wonder Guard Priority Striker

**Build Identity:** Shedinja is a 1-HP Wonder Guard pivot that switches into immune matchups and threatens priority damage before opponents can react. It's a prediction and positioning Pokemon — play it in safe windows and punish.

Wonder Guard IS the identity. Only super-effective moves hit Shedinja. Normal, Fighting, Bug, Poison, Steel moves do 0 damage. That's 10 of the 18 types doing nothing.

### Ability: Wonder Guard

Only super-effective moves hit Shedinja. Types that don't hit it: Normal, Fighting, Bug, Poison, Ground, Rock, Steel, Water, Grass, Electric. Types that DO hit it: Fire, Flying, Rock, Ghost, Dark.

Shedinja's 1 HP is sacred and must never change.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 1 | 1 | — (sacred) |
| Atk | 90 | 120 | +30 |
| Def | 45 | 45 | — |
| SpA | 30 | 30 | — |
| SpD | 30 | 30 | — |
| Spe | 40 | 80 | +40 |
| **BST** | **236** | **306** | **+70** |

Attack buffed significantly — if Shedinja gets into a safe matchup, it should threaten real damage. Speed buffed to 80 so it acts before common threats. The HP stays at 1 always.

### Learnset

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Scratch | 40 | Normal | Inherited |
| 1 | Harden | — | Normal | Inherited |
| 8 | Leech Life | 80 | Bug | Inherited — healing from 1 HP is comical but the damage is real |
| 12 | Mud Slap | 20 | Ground | Inherited coverage |
| 16 | Fury Swipes | 18×2-5 | Normal | Inherited |
| 20 | Shadow Sneak | 40 | Ghost | **THE move.** Priority Ghost STAB. Switch into an immune matchup, priority strike before opponent can react. The reason Shedinja has 1 HP and still matters. |
| 21 | Confuse Ray | — | Ghost | Force misplays. On 1 HP, buying a free turn via confusion can be match-defining. |
| 27 | Shadow Claw | 70 | Ghost | Stronger Ghost STAB. Mid-game damage upgrade. |
| 33 | Will-O-Wisp | — | Fire | Burns physical attackers who think they can break through. Burn halves their Attack. |
| 36 | Leech Life | 80 | Bug | (already learned at L8 but renewed post-evolution — keeps it in the pool) |
| 42 | X-Scissor | 80 | Bug | Strong Bug STAB. Coverage vs Psychic, Dark types. |
| 48 | Destiny Bond | — | Ghost | The ultimate 1-HP trade. Activate Destiny Bond, then force a hit. If the opponent attacks, they die too. Makes Shedinja genuinely threatening to bring in even when vulnerable — they know you might Destiny Bond. |

### Ideal Items

1. **Focus Sash** — Actually does nothing (already 1 HP at full). Don't run this.
2. **Lum Berry** — Prevents status. A burn or poison ends Shedinja immediately — Lum Berry buys one turn of safety.
3. **Choice Band** — 1.5x Attack. With 120 Atk, Shadow Sneak at ×1.5 hits hard. You're priority-striking anyway, so the lock-in is less painful.
4. **Safety Goggles** — Blocks powder/spore moves that otherwise end it instantly

**Best item: Lum Berry or Safety Goggles** — prevention is everything at 1 HP.

### Core Strategy

**The Priority Window:**
1. Opponent uses a Normal/Fighting/Poison move (Shedinja immune) — switch Shedinja in
2. Shadow Sneak → priority, hits before faster Pokemon
3. If they can't respond with Fire/Flying/Rock/Ghost/Dark, you keep attacking

**The Destiny Bond Threat:**
1. Shedinja comes in with a dangerous opponent
2. Destiny Bond — opponent now has to choose: attack and die, or switch
3. If they attack → both faint. If they switch → you got a free turn
4. This makes Shedinja psychologically threatening even in bad matchups

**The Will-O-Wisp Wall:**
1. Switch into a physical attacker using Normal moves (immune)
2. Will-O-Wisp → burn halves their Attack
3. Now Shadow Sneak chip damage while they're weakened

### Matchup Analysis

**Immune to:** Normal, Fighting, Bug, Poison, Ground, Rock, Steel, Water, Grass, Electric (10 of 18 types)

**Dies to:** Fire, Flying, Rock, Ghost, Dark — AND Stealth Rocks (Rock-type entry hazard = instant death)

**Hardcounters:** Weather damage (sandstorm/hail), Burn, Poison, Leech Seed — all passive damage is instant death

### Team Synergy

- **Rapid Spin user** — Shedinja cannot function if Stealth Rocks are up. Mandatory teammate.
- **Ninjask** — The parent line. Ninjask can Baton Pass to Shedinja if Shedinja wants to surprise attack; alternatively, Shedinja comes in when Ninjask needs a reset
- **Prediction partners** — Players who read the opponent's move type can safely bring Shedinja in

---

## The Line Summary

| Pokemon | Ability | Role | Fantasy |
|---------|---------|------|---------|
| Nincada | Compound Eyes | Early accuracy abuser | "Every hit lands." |
| Ninjask | Speed Boost | Speed sweeper / Baton Passer | "Faster every turn — you can't catch me." |
| Shedinja | Wonder Guard | Priority striker / Destiny Bond threat | "You can't even hit me. Shadow Sneak." |

Evolution at L20 (vanilla). Three distinct builds, three distinct playstyles, all from the same grub.
