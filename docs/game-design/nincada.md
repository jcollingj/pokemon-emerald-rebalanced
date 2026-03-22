# Nincada / Ninjask / Shedinja — Design Doc

## Overview

A unique 3-way split: Nincada evolves at L20 into **both** Ninjask and Shedinja simultaneously. The whole line shares a single thematic identity: **Speed Boost**. Nincada starts slow but accelerates each turn; Ninjask takes that speed into a 160-base sweeper; Shedinja takes the evolution surprise and pairs Wonder Guard with priority to become an untouchable assassin.

---

## Nincada (#290) — Speed Boost Ramp

**Build Identity:** A grinding harasser that builds Speed Boost stacks while chipping with Ground moves and accuracy drops, becoming a real threat in extended fights before evolving.

**Route:** Route 116 (L6–7 encounter)

### Ability

- **Ability 1: Speed Boost** — Speed rises +1 each turn in battle. Consistent with Ninjask's identity — the Speed Boost theme runs through the whole line.
- **Ability 2: Compound Eyes** — Accuracy +30%. Backup option that makes Fury Swipes essentially guaranteed.
- **Hidden: Sand Veil** — Evasion +25% in sandstorm. Niche sand team option.

**Why Speed Boost?** Nincada with Speed Boost teaches the player the mechanic before they get Ninjask. A slow, tanky Nincada (90 base Def) sitting behind high defense, building speed each turn while Mud-Slapping for accuracy drops is fun and thematic. By turn 3-4 it's actually outrunning things. It also frames the evolution as a natural escalation — Nincada builds speed, Ninjask IS speed.

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 31 | 31 | — |
| Atk | 45 | 55 | +10 |
| Def | 90 | 90 | — |
| SpA | 30 | 30 | — |
| SpD | 30 | 30 | — |
| Spe | 40 | 50 | +10 |
| **BST** | **266** | **286** | **+20** |

Nincada's 90 Def is already its unique trait — it's weirdly tanky for something so small. Keep that. Small boosts to Atk and Speed make it useful at L6-7 rather than a dead weight. Speed starts low but Speed Boost means it will eventually outrun opponents.

### Learnset

| Level | Move | Type | BP | Purpose |
|-------|------|------|----|---------|
| 1 | Scratch | Normal | 40 | Basic physical STAB |
| 1 | Harden | Normal | — | Defense boosting — fits the bulky shell identity |
| 8 | **Sand Attack** | Ground | — | **First synergy.** Drop opponent's accuracy while Speed Boost builds. The player learns: "stall, stack speed, chip." |
| 12 | **Mud Slap** | Ground | 20 | **Second synergy.** Ground STAB + accuracy drop. Doubling down on harassment. By L12 the combo is real: Sand Attack + Mud Slap drain the opponent's accuracy while Nincada gets faster. |
| 16 | Fury Swipes | Normal | 18×2-5 | Multi-hit for breaking Focus Sash/Sturdy on route trainers. With Compound Eyes as alt ability, ~94% per hit. |
| 20 | Dig | Ground | 80 | Evolution reward. Real Ground STAB for the final stretch at L20. Two-turn move also protects Nincada for a turn. |

### Ideal Items

1. **Lum Berry** — Prevents sleep/paralysis that would stall the Speed Boost ramp
2. **Eviolite** — Bumps 90 Def to 135 effective — with Speed Boost building, Nincada can become surprisingly hard to kill
3. **Sitrus Berry** — Sustains through early chip damage while Speed builds

### Core Strategy

Nincada is a patient ramp Pokemon. Switch in, use Harden if needed, then start stacking Sand Attack and Mud Slap. After 2-3 turns Speed Boost has activated 2-3 times — Nincada is now outspeeding most of its level range. Dig threatens real damage with 80 BP Ground. Against physically-attacking opponents, 90 Def means it's hard to KO. The fantasy: a tiny bug that gets faster every single turn and you can't land a move on it.

---

## Ninjask (#291) — Speed Boost Sweeper / Baton Passer

**Build Identity:** The fastest Pokemon in the game uses Speed Boost + Swords Dance to become an unstoppable sweeper, or Baton Passes the boosts to a heavy hitter.

### Ability

- **Ability 1: Speed Boost** — Speed rises +1 each turn. This IS Ninjask. 160 base Speed + Speed Boost = untouchable after 1 turn.
- **Ability 2: Infiltrator** — Ignores Reflect/Light Screen/Substitute. Useful for breaking defensive setups.
- **Hidden: Pressure** — Opponent uses 2 PP per move. Forces Struggle faster — interesting in long battles.

**Why keep Speed Boost?** The issue brief asked this question. The answer: Speed Boost is so core to Ninjask's identity that changing it would make it unrecognizable. 160 Speed + Speed Boost means Ninjask is at +1 on turn 1, +2 on turn 2. Nothing in the vanilla game can outspeed it by turn 2. The interesting design space is *what to do with that speed* — sweep with Swords Dance + X-Scissor, or pivot with Baton Pass.

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

Speed stays at 160 — it's the whole point. Small Atk boost makes the sweep threat real. Tiny Def buff helps survive priority moves.

### Learnset

Inherits Nincada's level-up moves, then:

| Level | Move | Type | BP | Purpose |
|-------|------|------|----|---------|
| 20 | Aerial Ace | Flying | 60 | Evolution reward. Never misses — synergizes with the fastest Pokemon in the game. Flying STAB. |
| 21 | Fury Cutter | Bug | 40→80→160 | Escalating BP Bug STAB. Doubles each turn — pairs perfectly with Speed Boost (both scale with time in battle). |
| 27 | X-Scissor | Bug | 80 | Strong reliable Bug STAB. The sweep move. |
| 33 | Swords Dance | Normal | — | The setup move. Speed Boost + Swords Dance = sweeper mode. After 1 turn: +1 Spe +2 Atk. Nothing survives. |
| 36 | Acrobatics | Flying | 110 | Flying STAB at full power (110 BP when no item held — Ninjask often runs no item to enable Pickup or just pure speed). |
| 42 | U-Turn | Bug | 70 | Pivoting. Get in, boost, U-Turn out to bring in a teammate safely. |
| 48 | Baton Pass | Normal | — | The endgame. Pass +Speed, +Atk to a heavy hitter. Ninjask becomes a setup engine for the whole team. |

### Ideal Items

1. **Choice Band** — 100 Atk × 1.5 = 150. X-Scissor at 150 effective Atk off 160 Speed. The sweep item when you don't need Baton Pass.
2. **Focus Sash** — Guarantees survival on turn 1 to get at least one Speed Boost + Swords Dance off. Critical for Baton Pass strategy.
3. **Salac Berry** — Triggers at low HP to boost Speed further. Layers with Speed Boost for absurd late-game speed.

### Core Strategy

**Sweeper mode:** Speed Boost means Ninjask is at +1 after turn 1. Swords Dance on turn 1 (vs. something that can't KO it), then sweep. X-Scissor hits 100 Atk × 1.5 STAB off +2 Atk and 160+ Speed. Almost nothing survives.

**Baton Pass mode:** Use Focus Sash, switch in, get 2-3 Speed Boosts (maybe a Swords Dance), then Baton Pass to a slow heavy hitter. Turn a 70 Speed sweeper into a +3 Speed +2 Atk nightmare.

---

## Shedinja (#292) — Wonder Guard Priority Assassin

**Build Identity:** 1 HP with Wonder Guard makes only super effective moves land — switch into the right matchup, strike first with Shadow Sneak priority, and use Destiny Bond as the ultimate 1-HP trade threat.

### Ability

- **Ability 1: Wonder Guard** — Only super effective moves can hit. THIS IS SHEDINJA. It cannot be changed — Wonder Guard is the Pokemon's entire identity.

**There is no ability 2 or hidden ability.** Wonder Guard only.

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

**1 HP is sacred** — that's the gimmick and it should never change. But Shedinja's offense needs to be threatening enough that switching into it with a favorable matchup matters. +30 Atk makes Shadow Sneak actually hurt. +40 Spe (to 80) means Shedinja moves first against many slower threats in the matchup it walls, even without priority.

### Learnset

Inherits Nincada's level-up moves, then:

| Level | Move | Type | BP | Purpose |
|-------|------|------|----|---------|
| 20 | **Shadow Sneak** | Ghost | 40 | **The key synergy move.** Evolution reward AND the combo that defines Shedinja. Wonder Guard: switch into an immune matchup. Shadow Sneak: +1 priority, hit them before they react. Ghost STAB. |
| 21 | Confuse Ray | Ghost | — | Harassment. Buys a turn while immune to their moves. |
| 27 | Shadow Claw | Ghost | 70 | Stronger Ghost STAB. High crit rate. |
| 33 | Will-O-Wisp | Fire | — | Chip damage is how Shedinja wins long games. Burn halves Atk — makes physical hits that still can't touch Shedinja even weaker. |
| 36 | X-Scissor | Bug | 80 | Bug STAB coverage. Hits Psychic/Dark/Grass. |
| 42 | Phantom Force | Ghost | 90 | Two-turn Ghost STAB. The turn underground protects Shedinja from any moves that manage to hit it. |
| 48 | **Destiny Bond** | Ghost | — | **The ultimate 1-HP trade.** If you can't win the matchup, use Destiny Bond — the next hit KOs Shedinja but KOs the attacker too. The most Shedinja move possible. |

### Ideal Items

1. **Focus Sash** — Wait, Shedinja has 1 HP — Focus Sash does nothing. Instead: **Lum Berry** — prevents status moves (Sleep, Paralysis) that bypass Wonder Guard indirectly.
2. **Shadow Ball** — Not an item, but: **Eject Button** — if Wonder Guard protection fails, eject out before fainting.
3. **Jaboca Berry** — Damages attacker if they use a contact move that hits Shedinja. 1 HP means Shedinja faints regardless, but it takes the attacker with it.

### Core Strategy

The Shedinja gameplan is fundamentally about **matchup selection**:

1. Scout what the opponent has. Identify something Shedinja is immune to (Normal, Fighting, Poison, Ground, Bug, Steel, Water, Grass, Electric, Dragon, Dark, Psychic — basically anything not Ghost, Fire, Flying, Rock).
2. Switch Shedinja into a confirmed immune matchup.
3. Shadow Sneak priority strikes before the opponent can react — they can't switch fast enough.
4. If they bring in something that threatens Shedinja, use Destiny Bond. They kill Shedinja, they die too.

The 80 Speed (up from 40) matters because it lets Shedinja win speed ties in many matchups it walls, reducing reliance on Shadow Sneak's priority.

---

## Team Synergy

The Nincada line as a set:

- **Ninjask + Shedinja** can both come from the same Nincada. Two Pokemon for one encounter slot.
- Ninjask's Baton Pass supports any slow, powerful teammate.
- Shedinja covers Ghost/Psychic-weak teammates — switch it in to blank those attacks.
- Nincada itself is an early-game pest that teaches Speed Boost before the player knows what they're doing.

**Don't pair Ninjask + Shedinja together on the same team** — they share the same evolution and occupy a "gimmick slot." Pick one.

---

## Matchup Notes

**Ninjask:**
- **Sweeps:** Anything without priority or a resist to Bug/Flying
- **Loses to:** Priority users (Aqua Jet, Mach Punch), Rock-type moves, and Electric types
- **Key threat:** Baton Pass into a slow heavy hitter is gamebreaking if not answered

**Shedinja:**
- **Blanks:** Normal, Fighting, Poison, Ground, Bug, Steel, Water, Grass, Electric, Dragon, Dark, Psychic — Shedinja is immune to all of these
- **Loses to:** Ghost, Fire, Flying, Rock — and entry hazards, weather damage, and burn
- **Key threat:** Destiny Bond forces a trade even when the matchup is wrong
