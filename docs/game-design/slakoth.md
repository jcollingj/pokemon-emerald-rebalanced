---
name: Slakoth
dex_number: 287
status: designed
ability: Truant (Reworked)
role: Siege Cannon
ideal_items: Choice Band, Life Orb, Leftovers
evolution_line: [Slakoth, Vigoroth, Slaking]
---

# Slakoth / Vigoroth / Slaking - Rebalance Notes

## Design Philosophy
Slaking is a siege weapon. Truant means it only attacks every other turn, but it enters battle with +1 Attack and +1 Defense — already boosted, ready to nuke. Recharge moves (Giga Impact, Hyper Beam) align perfectly with the Truant skip, so the recharge turn is never wasted. The tradeoff: you hit harder than anything else in the game, but you have to predict right because you only get one shot every two turns.

## Ability Changes

**Slakoth:** Truant (vanilla — skips every other turn. Slakoth is weak, this is the cost of the investment.)

**Vigoroth:** Vital Spirit (can't be put to sleep — kept as-is. The hyperactive middle child.)

**Slaking: Truant (Reworked)**
- Still skips every other turn (unchanged)
- NEW: On switch-in, Slaking gets **+1 Attack and +1 Defense**
- The Attack boost makes every hit devastating from turn 1
- The Defense boost lets Slaking survive the loaf turn where it can't act
- Thematically: Slaking conserves so much energy that it enters battle already at peak power

## Stat Changes

### Slakoth

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | - |
| Atk | 60 | 60 | - |
| Def | 60 | 60 | - |
| SpA | 35 | 35 | - |
| SpD | 35 | 35 | - |
| Spe | 30 | 30 | - |
| **BST** | **280** | **280** | **0** |

No changes. Slakoth is meant to be weak — the payoff is evolution.

### Vigoroth

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 80 | 80 | - |
| Atk | 80 | **90** | +10 |
| Def | 80 | 80 | - |
| SpA | 55 | 55 | - |
| SpD | 55 | 55 | - |
| Spe | 90 | **95** | +5 |
| **BST** | **440** | **455** | **+15** |

Small buffs. Vigoroth has no Truant — it plays normally as a fast physical attacker. Needs to be viable enough to carry you to Slaking.

### Slaking

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 150 | 150 | - |
| Atk | 160 | 160 | - |
| Def | 100 | 100 | - |
| SpA | 95 | 95 | - |
| SpD | 65 | **75** | +10 |
| Spe | 100 | **80** | -20 |
| **BST** | **670** | **660** | **-10** |

Speed lowered — siege weapons aren't fast. SpD bumped so Slaking can survive a special hit on the loaf turn. With +1 Def on entry, effective Defense is 150 — genuinely tanky.

**Effective stats on entry (with Truant boosts):**
- Attack: 160 × 1.5 (+1 stage) = **240 effective**
- Defense: 100 × 1.5 (+1 stage) = **150 effective**

## Learnset

### Slakoth (base form)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Scratch | 40 | Normal | Basic attack |
| 1 | Yawn | — | Normal | Forces switches — useful even with Truant |
| 6 | Encore | — | Normal | Lock opponent into a move during your loaf turn |
| 8 | Headbutt | 70 | Normal | Stronger STAB, flinch chance |
| 12 | Slack Off | — | Normal | Heal 50% HP — use on the turns you'd loaf anyway (pre-evo sustain) |
| 16 | Body Slam | 85 | Normal | Strong STAB + 30% paralysis |

### Vigoroth (evolves at 18)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 18 | Slash | 70 | Normal | Evolution reward |
| 21 | Bulk Up | — | Fighting | Setup — Vigoroth has no Truant, so it can set up freely |
| 25 | Brick Break | 75 | Fighting | Coverage |
| 28 | Earthquake | 100 | Ground | Big coverage move |
| 33 | Thrash | 120 | Normal | 120 BP STAB — Vigoroth can use this since no Truant, lock-in is the cost |

### Slaking (evolves at 36)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 36 | **Giga Impact** | 150 | Normal | **THE move.** Recharge aligns with Truant skip. No wasted turns. |
| 40 | **Hammer Arm** | 100 | Fighting | Coverage. Speed drop irrelevant — Slaking is already slow. |
| 44 | **Shadow Claw** | 70 | Ghost | Covers Ghost types immune to Normal STAB |
| 48 | **Hyper Beam** | 150 | Normal | Special nuke. Recharge = free. For mixed or surprise sets. |

### Full Moveset Options at Endgame

**Physical (primary):**
- Giga Impact (150, Normal STAB, recharge = free)
- Hammer Arm (100, Fighting coverage)
- Shadow Claw (70, Ghost coverage)
- Earthquake (100, Ground coverage)
- Body Slam (85, Normal STAB + paralysis)
- Slack Off (healing on predicted loaf turns if not Choice locked)

**Special (alt):**
- Hyper Beam (150, Normal STAB, recharge = free)

**Utility:**
- Yawn (force switches)
- Encore (lock opponent into bad move during loaf turn)
- Bulk Up (more setup if you get a free turn)

## The Math

With 160 Atk + Truant's +1 Atk on entry (= 240 effective):

| Move | BP | STAB | Effective Power | With Choice Band |
|------|----|------|-----------------|-----------------|
| **Giga Impact** | 150 | ×1.5 | **225 × 240 Atk** | **225 × 360 Atk** |
| **Body Slam** | 85 | ×1.5 | **127.5 × 240 Atk** | **127.5 × 360 Atk** |
| **Hammer Arm** | 100 | — | **100 × 240 Atk** | **100 × 360 Atk** |
| **Earthquake** | 100 | — | **100 × 240 Atk** | **100 × 360 Atk** |
| **Shadow Claw** | 70 | — | **70 × 240 Atk** | **70 × 360 Atk** |

Choice Band Giga Impact: 150 BP × 1.5 STAB = 225, off 360 effective Atk. That OHKOs almost anything that doesn't resist or is immune.

**Recharge move synergy:** Giga Impact and Hyper Beam have a "recharge next turn" penalty. But Truant already skips the next turn — the recharge and the loaf happen simultaneously. These moves have ZERO downside on Slaking.

## Ideal Items

1. **Choice Band** — Stacks with Truant's +1 Atk. 160 base × 1.5 (Truant +1) × 1.5 (Band) = 360 effective Attack. Giga Impact at 360 Atk is the hardest single hit in the game. You're locked into one move, but you only attack every other turn anyway.
2. **Life Orb** — 1.3x on everything, flexible moveset. Recoil is manageable with 150 HP and Slack Off.
3. **Leftovers** — Passive healing on loaf turns. Pairs with Slack Off for a tankier playstyle that slowly grinds opponents down.

## Core Strategy

### The Siege Cannon (Choice Band)
1. Switch Slaking in → +1 Atk, +1 Def immediately
2. Giga Impact → massive STAB nuke, recharge turn = Truant skip (free)
3. Repeat. If they switch in a Ghost type, predict with Shadow Claw or Earthquake next cycle
4. Every hit is a potential OHKO. You only get one shot every two turns — make it count.

### The Bulky Attacker (Leftovers/Life Orb)
1. Switch in → +1 Atk, +1 Def
2. Body Slam for paralysis + STAB damage
3. Use Encore on loaf turns to lock opponents into bad moves (if they use Protect/status)
4. Slack Off to heal when safe
5. Earthquake/Hammer Arm for coverage

### Key Plays
- **Yawn → Loaf → They fall asleep → Giga Impact** — Yawn on your active turn, they fall asleep on your loaf turn, free Giga Impact
- **Encore** locks the opponent into their last move during your skip turn — punish Protect/status users
- **Predict Ghost switch-ins** — if they have a Ghost type, use Shadow Claw or Earthquake instead of Giga Impact

## Team Synergy

- **U-Turn/Volt Switch** users bring Slaking in safely on favorable matchups (re-triggers Truant's +1/+1)
- Pair with fast cleaners who can finish what Slaking weakens
- Ghost-immune Normal typing lets Slaking switch into Ghost moves for free
- Yawn forces switches — use it to control the pace
- Breloom covers Rock/Steel types that resist Slaking's Normal STAB; Slaking covers Flying types that threaten Breloom

## Matchup Analysis

**Strong vs:** Basically everything that doesn't resist Normal or is immune. 360 Atk Giga Impact is not survivable.
**Weak vs:** Ghost (immune to STAB — need Shadow Claw/EQ), Rock/Steel (resist Normal), Fighting (super effective, and fast Fighters like Breloom's Mach Punch hit during loaf turns)
**Counter play:** Protect/Detect users waste Slaking's attack turns. Fast Fighting priority (Mach Punch) hits hard on loaf turns. Ghost types force prediction.

## The Slakoth Line Identity

| Stage | Personality | Ability | Fantasy |
|-------|------------|---------|---------|
| Slakoth | Lazy, weak | Truant (vanilla) | "Why bother?" — investment Pokemon |
| Vigoroth | Hyperactive, fast | Vital Spirit | "Can't stop moving!" — normal attacker, no skip |
| Slaking | Lazy but devastating | Truant (reworked) | "One hit is all I need." — siege cannon |

The line tells a story: laziness → hyperactivity → controlled power. Vigoroth is the middle ground where the player gets to play without restrictions. Then Slaking brings back Truant but makes it a weapon.
