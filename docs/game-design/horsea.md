---
name: Horsea
dex_number: 116
status: designed
ability: Sniper
role: Critical Hit Sniper
ideal_items: Scope Lens, Razor Claw, Choice Specs
evolution_line: [Horsea, Seadra, Kingdra]
---

# Horsea / Seadra / Kingdra - Rebalance Notes

## Design Philosophy
Kingdra is a critical hit sniper that crits passively through its reworked Sniper ability. Sniper now grants a built-in +1 critical hit stage on top of its 2.25x crit damage, meaning high-crit moves like Snipe Shot crit 50% of the time with zero setup. No Focus Energy required, no Scope Lens required — just pick a move and start shooting. Scope Lens or Focus Energy push it to guaranteed crits, but the base build works out of the box. Water/Dragon typing on Kingdra gives it only two weaknesses (Dragon and Fairy), making it durable enough to keep firing.

## Build Identity
"Kingdra is a special attacking sniper whose reworked Sniper ability gives it passive +1 crit stage and 2.25x crit damage — high-crit moves like Snipe Shot crit 50% of the time with no setup."

## Ability Changes

- **Ability 1: Sniper** — Crits deal 2.25x total damage AND the Pokemon has a passive +1 critical hit stage (like built-in Super Luck). This means high-crit moves crit half the time with zero investment, and adding Scope Lens or Focus Energy pushes to guaranteed crits.
- **Ability 2: Swift Swim** — Speed doubles in rain. Alt build for rain teams, still benefits from the high-crit moveset.
- **Hidden: Damp** — Prevents self-destruct/explosion. Niche utility, mostly irrelevant.

### Why Sniper?
Sniper is already in the Horsea line's vanilla ability pool (Ability 2 in Gen 4+). We're promoting it to Ability 1 because it defines the build. The rework adds a passive +1 crit stage so the line doesn't need a mandatory setup turn to function. Swift Swim becomes the secondary option — still strong on rain teams but doesn't shape the moveset the way Sniper does.

The synergy pattern here is **passive escalation**: Sniper's built-in +1 crit stage means high-crit moves like Snipe Shot (+1) stack to +2 = 50% crit rate just by attacking. The player can optionally escalate further with Scope Lens (+1 more = guaranteed crits) or Focus Energy (+2 more = guaranteed crits on everything), but neither is required. The build works the moment Kingdra hits the field.

## Stat Changes

### Horsea

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | 30 | - |
| Atk | 40 | 40 | - |
| Def | 70 | 70 | - |
| SpA | 70 | **75** | +5 |
| SpD | 25 | 25 | - |
| Spe | 60 | 60 | - |
| **BST** | **295** | **300** | **+5** |

Minor SpA bump. Horsea is a baby — it doesn't need much, just enough to feel the crits when they land.

### Seadra

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 55 | 55 | - |
| Atk | 65 | 65 | - |
| Def | 95 | 95 | - |
| SpA | 95 | **105** | +10 |
| SpD | 45 | 45 | - |
| Spe | 85 | 85 | - |
| **BST** | **440** | **450** | **+10** |

Seadra becomes a legitimate mid-game threat. 105 SpA with frequent crits hits hard. Speed stays at 85 — fast enough to outpace most mid-game threats but not untouchable. Seadra is a glass-ish cannon with good physical defense but terrible SpD.

### Kingdra

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 75 | 75 | - |
| Atk | 95 | 75 | -20 |
| Def | 95 | 90 | -5 |
| SpA | 95 | **115** | +20 |
| SpD | 95 | 95 | - |
| Spe | 85 | **90** | +5 |
| **BST** | **540** | **540** | **0** |

Vanilla Kingdra is too well-rounded — 95 across the board doesn't commit to anything. We redistribute: dump Attack (this is a special attacker, it doesn't need 95 Atk) and trim Def slightly, then pour those points into SpA and Spe. 115 SpA makes the crits actually threatening. 90 Speed lets it outpace a decent chunk of the metagame. Same BST, sharper identity.

## Learnset

### Horsea (Lv 1-32)

| Level | Move | BP | Type | Crit? | Purpose |
|-------|------|----|------|-------|---------|
| 1 | Water Gun | 40 | Water | No | Basic STAB |
| 1 | Smokescreen | — | Normal | — | Accuracy utility |
| 8 | **Snipe Shot** | 80 | Water | **+1 crit stage** | First high-crit STAB. With Sniper's passive +1 = +2 crit stage = 50% crits immediately. Build turns on here. |
| 14 | Twister | 40 | Dragon | No | Dragon type preview, chip damage |
| 16 | **Focus Energy** | — | Normal | **+2 crit stages** | Optional setup — guarantees crits on everything (+1 ability, +2 Focus Energy = +3). Not required but ceiling move. |
| 21 | Agility | — | Psychic | — | Speed doubling for sweep potential |
| 27 | Bubble Beam | 65 | Water | No | Stronger Water STAB, 33% chance to lower Speed |

### Seadra (Lv 32+)

| Level | Move | BP | Type | Crit? | Purpose |
|-------|------|----|------|-------|---------|
| 1 | (carries all Horsea moves) | — | — | — | — |
| 33 | **Ice Beam** | 90 | Ice | No | Coverage — hits Grass/Dragon that resist Water |
| 36 | **Dragon Pulse** | 85 | Dragon | No | Dragon STAB, strong coverage |
| 42 | **Hydro Pump** | 110 | Water | No | Big Water nuke — crits make the 80% accuracy worth the risk |

### Kingdra (via Linking Cord)

| Level | Move | BP | Type | Crit? | Purpose |
|-------|------|----|------|-------|---------|
| 1 | (carries all Seadra moves) | — | — | — | — |
| 48 | **Draco Meteor** | 130 | Dragon | No | Nuclear option. SpA drop doesn't matter when critting for 2.25x — crits ignore stat drops. |
| 54 | **Dragon Dance** | — | Dragon | — | Alt build: boosts Atk+Spe for physical variant, or just Speed for special |

## The Math

### Crit Stacking Mechanics

Critical hit stages:
- +0: 1/24 chance (4.2%)
- +1: 1/8 chance (12.5%)
- +2: 1/2 chance (50%)
- +3: guaranteed (100%)

**Sniper (reworked)** = passive +1 crit stage (built into the ability).
**Snipe Shot** = +1 crit stage (built into the move).
**Scope Lens** = +1 crit stage.
**Focus Energy** = +2 crit stages.

| Setup | Crit Stage | Crit Rate |
|-------|-----------|-----------|
| Sniper alone (any normal move) | +1 | 12.5% |
| Sniper + Snipe Shot | +2 | **50%** |
| Sniper + Scope Lens (any move) | +2 | **50%** |
| Sniper + Scope Lens + Snipe Shot | +3 | **100%** |
| Sniper + Focus Energy (any move) | +3 | **100%** |
| Sniper + Focus Energy + Snipe Shot | +3 (capped) | **100%** |

**The core build: Just use Snipe Shot. 50% crit rate with zero items or setup.**
**The upgraded build: Add Scope Lens for guaranteed crits on Snipe Shot, or Focus Energy for guaranteed crits on everything.**

### Damage with Sniper Crits

Base crit multiplier: 1.5x. Sniper bonus: 1.5x on top = **2.25x total**.

With 115 SpA, here's the damage profile at different crit rates:

#### Snipe Shot (50% crit rate — just Sniper + move, no setup)

| Move | BP | Non-crit effective BP | Crit effective BP (2.25x) | Average effective BP |
|------|----|----------------------|--------------------------|---------------------|
| **Snipe Shot** | 80 | 120 (STAB) | **270** (STAB) | **195** |

50% of the time you deal 270 effective BP. 50% of the time you deal 120. The average is 195 effective BP — stronger than a Choice Specs Surf — with no item and no setup.

#### Scope Lens Build (100% crit on Snipe Shot, 50% on others)

| Move | BP | Crit Rate | Crit (2.25x) | STAB | Effective BP |
|------|----|-----------|-------------|------|-------------|
| **Snipe Shot** | 80 | 100% | ×2.25 = 180 | ×1.5 | **270** |
| **Dragon Pulse** | 85 | 50% | ×2.25 = 191.25 | ×1.5 | avg **215** |
| **Ice Beam** | 90 | 50% | ×2.25 = 202.5 | — | avg **146** |
| **Hydro Pump** | 110 | 50% | ×2.25 = 247.5 | ×1.5 | avg **289** |

Scope Lens guarantees every Snipe Shot is a 270 BP nuke. Coverage moves still crit half the time.

#### Focus Energy Build (100% crit on everything)

| Move | BP | Crit (2.25x) | STAB | Effective BP |
|------|----|-------------|------|-------------|
| **Snipe Shot** | 80 | ×2.25 = 180 | ×1.5 | **270** |
| **Hydro Pump** | 110 | ×2.25 = 247.5 | ×1.5 | **371** |
| **Dragon Pulse** | 85 | ×2.25 = 191.25 | ×1.5 | **287** |
| **Draco Meteor** | 130 | ×2.25 = 292.5 | ×1.5 | **439** |
| **Ice Beam** | 90 | ×2.25 = 202.5 | — | **203** |

Focus Energy guarantees crits on the full moveset. Draco Meteor at 439 effective BP — and crits ignore the user's negative stat stages, so the -2 SpA doesn't apply. Kingdra can spam Draco Meteor with no penalty. That's the endgame build.

### Comparison: No Setup vs Setup

| Scenario | Snipe Shot Effective BP | Notes |
|----------|----------------------|-------|
| No crit, no ability | 80 × 1.5 (STAB) = **120** | Baseline |
| Sniper passive (no crit) | 80 × 1.5 = **120** | 50% of the time |
| Sniper passive (crit) | 80 × 2.25 × 1.5 = **270** | 50% of the time |
| **Average with Sniper + Snipe Shot** | | **195** |
| Sniper + Scope Lens (guaranteed crit) | 80 × 2.25 × 1.5 = **270** | Every time |
| Sniper + Focus Energy (guaranteed crit) | 80 × 2.25 × 1.5 = **270** | Every time |

The key difference from the old design: **the average damage without any setup (195) is already stronger than most Pokemon's best moves.** Scope Lens and Focus Energy remove the variance, but Kingdra doesn't need them to threaten.

## Ideal Items

1. **Scope Lens** — The #1 item. Sniper (+1) + Scope Lens (+1) + Snipe Shot (+1) = +3 = guaranteed crits on Snipe Shot. Also pushes Dragon Pulse, Ice Beam, etc. to 50% crit rate. Best overall consistency without spending a turn on setup.

2. **Razor Claw** — Same effect as Scope Lens (+1 crit stage). Functionally identical for this build. Use whichever you find first.

3. **Choice Specs** — Skip the crit build, just raw SpA. You still crit 50% of the time with Snipe Shot thanks to Sniper's passive +1. When a Specs-boosted Snipe Shot crits with Sniper, the damage is absurd. For players who want simplicity.

## Core Strategy

### The Sniper (Primary Build — No Setup)
1. Send Kingdra in on something it can take a hit from (Water/Dragon typing resists Fire, Water, Steel, Ice)
2. **Snipe Shot** immediately. 50% chance to crit for 270 effective BP, 50% for 120. No setup needed.
3. For Dragon-types or Fairy-resists: Dragon Pulse (crits 12.5% with just Sniper passive, 50% with Scope Lens)
4. For Grass-types: Ice Beam (same crit rates as above)
5. Kingdra is immediately dangerous from turn 1. Every attack is a coin flip for a devastating crit.

### The Scope Lens Sniper (Upgraded Build — No Setup)
1. Scope Lens Kingdra — Snipe Shot now has guaranteed crits (+1 ability, +1 lens, +1 move = +3)
2. Every Snipe Shot is 270 effective BP with perfect accuracy. Spammable nuke.
3. Coverage moves (Dragon Pulse, Ice Beam) crit 50% of the time (+1 ability, +1 lens = +2)
4. No setup turns. Immediately online.

### The Focus Energy Sniper (Max Investment Build)
1. Spend one turn on Focus Energy. Now at +3 crit stages on everything (+1 ability, +2 Focus Energy).
2. Every move — Snipe Shot, Dragon Pulse, Ice Beam, Hydro Pump, Draco Meteor — is a guaranteed 2.25x crit.
3. Draco Meteor spam works because crits ignore negative stat stages.
4. Highest ceiling but requires a setup turn. Use behind screens or on forced switches.

### The Specs Cannon (Alt Build)
1. Choice Specs Kingdra — no setup, just raw SpA
2. Snipe Shot for STAB, Dragon Pulse for coverage, Ice Beam for Grass/Dragon
3. Snipe Shot still crits 50% thanks to Sniper passive + move's +1 = +2 stages
4. When a Specs Snipe Shot crits with Sniper, it's a guaranteed kill on almost anything

### When to Use Kingdra
- Immediate threat from turn 1 — no setup required
- Switch in on resisted hits (Water, Fire, Steel, Ice)
- Scope Lens build for consistent damage, Focus Energy build for maximum ceiling
- Draco Meteor spam — crits ignore the SpA drops, so it never falls off
- Can lead or come in mid-game. Flexible because it doesn't depend on setup.

## Kingdra vs Other Water-Types

| | Kingdra | Swampert | Blastoise |
|---|---------|----------|-----------|
| **Role** | Crit sniper sweeper | Rain fortress tank | Pulse mage coverage |
| **Ability** | Sniper (2.25x crits + passive +1 crit stage) | Rain Dish (regen tank) | Mega Launcher (pulse boost) |
| **Typing** | Water/Dragon | Water/Ground | Water |
| **SpA** | 115 (highest) | Moderate | High |
| **Setup** | None (optional upgrades available) | Rain Dance (1 turn) | None needed |
| **Fantasy** | "Every hit might be a headshot" | "I never die in rain" | "Every move is boosted" |

Each water-type fills a completely different role. Swampert walls, Blastoise covers, Kingdra executes.

## Team Synergy

- **Pivot partners** — U-Turn/Volt Switch users can bring Kingdra in safely on a favorable matchup. No setup needed means it's immediately dangerous.
- **Fairy-weak teammates benefit** — Kingdra draws Dragon attacks, which it resists. Partners who fear Dragon coverage appreciate that.
- **Rain setters** — If running Swift Swim instead of Sniper, a Rain Dance setter (Pelipper with Drizzle?) doubles Kingdra's speed. Even with Sniper, Rain Dance boosts Water moves.
- **Screens support** — Still useful if going for the Focus Energy max build, but no longer mandatory for the core strategy.

## Matchup Analysis

**Strong vs:** Fire, Water, Steel, Ice (all resisted by Water/Dragon typing). Anything slower than 90 Speed is in danger of being crit-sniped before it can respond.
**Weak vs:** Dragon-types (hit super effectively, but Kingdra can Ice Beam back), Fairy-types (immune to Dragon STAB, super effective back — Kingdra's worst matchup).
**Key vulnerability:** High-SpD walls like Blissey and Snorlax can absorb even crit Snipe Shots. Fairy-types shut down Dragon STAB entirely. Unlike the old design, there's no "setup turn" vulnerability — Kingdra is dangerous from turn 1.

## Evolution Changes

Vanilla evolution: Horsea evolves at Lv 32 (Seadra), Seadra evolves via trade holding Dragon Scale (Kingdra).

Rebalanced evolution:
- Horsea -> Seadra at **Lv 32** (vanilla, unchanged)
- Seadra -> Kingdra via **Linking Cord** (trade evo removed — use Linking Cord instead of Dragon Scale trade)
