---
name: Tentacool
dex_number: 72
status: designed
ability: Poison Heal
role: Trapping Poison Tank
ideal_items: Toxic Orb, Black Sludge, Leftovers
evolution_line: [Tentacool, Tentacruel]
---

# Tentacool / Tentacruel - Rebalance Notes

## Design Philosophy
Tentacruel is a trapping poison tank that locks opponents in with Whirlpool (buffed: traps + lowers Atk by 1), heals passively with Poison Heal, and outlasts them behind 120 SpDef. The fantasy: "You're stuck in here with me, and I'm healing while you're dying."

This is a TANK, not a pivot. Tentacruel stays on the field. It doesn't cycle in and out — it traps you, poisons you, burns you, and watches you slowly die while it heals 1/8 HP every turn. Water/Poison typing gives it key resistances (Fire, Water, Ice, Fighting, Poison, Bug, Steel, Fairy) and only three weaknesses (Ground, Electric, Psychic).

## Encounter Location
Route 103 via Old Rod. Available early as the game's accessible Water/Poison type.

## Ability Changes

- **Ability 1: Poison Heal** — Heals 1/8 HP per turn when poisoned, immune to other status conditions. Core identity. Pair with Toxic Orb to self-activate. Tentacruel becomes a self-sustaining wall that can't be burned, paralyzed, or put to sleep.
- **Ability 2: Rain Dish** — Heals 1/8 HP + 1.5x Def in rain (buffed in this game). Alt build for rain teams — trades status immunity for physical bulk in rain.
- **Hidden: Clear Body** — Stats can't be lowered. Niche anti-Intimidate option.

## Why Poison Heal?

Poison Heal + Toxic Orb creates a tank that:
1. Heals 1/8 HP per turn passively (better than Leftovers)
2. Is immune to burn, paralysis, sleep, and freeze — you can't disable it
3. Has a known item (Toxic Orb), so Knock Off/Trick are less devastating — you WANT to be poisoned

This synergizes perfectly with Whirlpool trapping. A tank that traps opponents needs to outlast them, and Poison Heal provides the inevitability. The opponent can't status Tentacruel to break the trap, and they can't escape it.

Different from other Poison Heal users:
- **Nidoqueen** (Poison Heal) — Physically defensive, no trapping. Sits and walls physical attackers.
- **Tentacruel** (Poison Heal) — Specially defensive + trapping. Locks opponents in and grinds them out.

## Stat Changes

### Tentacool

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | 40 | - |
| Atk | 40 | 40 | - |
| Def | 35 | 35 | - |
| SpA | 50 | 50 | - |
| SpD | 100 | 100 | - |
| Spe | 70 | 70 | - |
| **BST** | **335** | **335** | **-** |

Tentacool's stats are already solid for a pre-evolution. 100 SpDef is exceptional for a basic form. No changes needed.

### Tentacruel

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 80 | **90** | +10 |
| Atk | 70 | 70 | - |
| Def | 65 | **75** | +10 |
| SpA | 80 | 80 | - |
| SpD | 120 | 120 | - |
| Spe | 100 | **85** | -15 |
| **BST** | **515** | **520** | **+5** |

The stat redistribution reflects the shift from fast pivot to stationary tank:

- **HP 80 -> 90:** A tank needs HP. 90 HP with 120 SpDef makes Tentacruel a legitimate special wall, and more HP means more value from Poison Heal's 1/8 heal per turn.
- **Def 65 -> 75:** Shore up the physical side slightly. Still not a physical wall, but 75 Def means it doesn't fold to neutral physical hits while Whirlpool's Atk drop helps close the gap.
- **SpA stays 80:** Tentacruel is a tank, not a damage dealer. 80 SpA is enough for Scald to threaten burns and Sludge Bomb to chip, but it's not sweeping anything.
- **Speed 100 -> 85:** This is the controversial change. 100 Speed was for a pivot that needed to act first and Flip Turn out. A tank that traps and stays in doesn't need to outspeed offensive threats — it needs to survive them. 85 is still decent (faster than most walls/tanks) but no longer a speed demon.

## Evolution

Evolves at level **16** (changed from vanilla 30). This is a 2-stage line — evolving at 16 keeps it consistent with other 2-stage lines.

## Learnset

### Tentacool

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Poison Sting | 15 | Poison | Basic Poison STAB |
| 1 | Water Gun | 40 | Water | Basic Water STAB |
| 8 | **Whirlpool** | 35 | Water | First synergy move — traps opponent + lowers Atk. Build turns on: trap them, heal with Poison Heal, outlast. |
| 12 | **Acid Spray** | 40 | Poison | Guaranteed -2 SpDef. Trapped opponents melt after this. |
| 16 | **Scald** | 80 | Water | Evolution power spike. 30% burn + Water STAB. |

### Tentacruel (evolves at 16)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 16 | **Scald** | 80 | Water | Evolution reward. Reliable STAB + burn chance cripples physical attackers that got trapped. |
| 21 | **Knock Off** | 65 | Dark | Remove opponent items. Huge utility — strip Leftovers from trapped targets so they can't heal. |
| 27 | **Sludge Bomb** | 90 | Poison | Primary Poison STAB. 30% poison chance — poisoned targets take Venoshock later. |
| 33 | **Recover** | -- | Normal | Direct healing. Stacks with Poison Heal for near-unkillable sustain. For those turns where you need to top off immediately. |
| 36 | **Toxic** | -- | Poison | Guaranteed badly-poisoned. Trap with Whirlpool, Toxic them, watch the timer tick down. |
| 42 | **Venoshock** | 65 | Poison | 130 BP on poisoned targets (x1.5 STAB = 195 effective). The payoff move — Toxic + Venoshock is devastating on a trapped target. |
| 48 | **Hex** | 65 | Ghost | 130 BP on statused targets. Coverage move that punishes poison/burn. Hits Psychic types that resist Poison. |

## The Math

### Poison Heal Sustain

Poison Heal heals 1/8 HP per turn. With 90 HP base:

- **Per turn healing:** ~11 HP at level 50 (90 base = roughly 200 HP at 50)
- **Over 4 turns trapped:** ~44 HP healed, or ~22% of max HP
- **Status immunity:** Can't be burned (no Atk/damage reduction), can't be paralyzed (no speed halving), can't be put to sleep

Compare to Leftovers (1/16 per turn): Poison Heal heals TWICE as fast, AND prevents status. Toxic Orb's "downside" is the upside.

### Whirlpool Trap Math

Buffed Whirlpool: traps for 4-5 turns + lowers Atk by 1 stage on the trapped target.

On a trapped opponent:
- Turn 1: Whirlpool (trap + Atk -1). Opponent takes 35 BP Water STAB.
- Turn 2: Toxic. Opponent is now badly poisoned AND trapped.
- Turn 3-4: Scald/Venoshock while they take escalating Toxic damage (1/16, 2/16, 3/16...) AND Whirlpool chip (1/8 per turn).
- Meanwhile: Tentacruel heals 1/8 per turn from Poison Heal.

**Total chip on trapped opponent over 4 turns:**
- Whirlpool trap damage: ~4/8 = 50% HP
- Toxic damage (if applied turn 2): 1/16 + 2/16 + 3/16 = 6/16 = 37.5% HP
- Total passive damage: ~87.5% HP before attacks
- Plus actual move damage from Scald/Venoshock

**Tentacruel heals during this time:** 4/8 = 50% HP from Poison Heal alone.

### Offensive Calcs (80 SpA, no item boost)

| Move | BP | STAB | Effective | Notes |
|------|----|------|-----------|-------|
| Scald | 80 | x1.5 | **120** | 30% burn is the real threat |
| Sludge Bomb | 90 | x1.5 | **135** | 30% poison for chip |
| Venoshock (poisoned) | 130 | x1.5 | **195** | Devastating on Toxic'd targets |
| Whirlpool | 35 | x1.5 | **52.5** | Damage is irrelevant, trapping + Atk drop is the point |
| Hex (statused) | 130 | -- | **130** | Ghost coverage on poisoned/burned targets |
| Knock Off | 65 | -- | **97.5** (w/item) | Utility, not damage |

Tentacruel isn't trying to nuke things. 80 SpA means chip damage — but that's fine. It wins by trapping, poisoning, and outhealing. The damage is the slow grind, not the burst.

### Venoshock Payoff

When the opponent is badly poisoned from Toxic:
- Venoshock: 130 BP x 1.5 STAB = **195 effective**
- This is the "you're already dead" button for trapped targets that have been sitting in Toxic for 2-3 turns

## Ideal Items

1. **Toxic Orb** — Self-activates Poison Heal on turn 1. This is THE item. Without it, Poison Heal doesn't turn on and Tentacruel is just a mediocre wall. With it, Tentacruel heals 1/8 per turn, is immune to all other status, and becomes nearly unkillable on the special side. The "downside" (poison) is the upside.

2. **Black Sludge** — For Rain Dish builds or if you don't want to commit to Poison Heal. Heals 1/16 per turn for Poison types. Punishes Trick/Switcheroo users. Weaker healing than Toxic Orb + Poison Heal, but no setup turn required.

3. **Leftovers** — Generic sustain option. Works with either ability. 1/16 per turn stacks with Rain Dish in rain for serious healing. Worse than Black Sludge on a Poison type (doesn't punish Trick) but functionally identical otherwise.

## Core Strategy

### The Trap Tank (Primary)
1. Switch Tentacruel in on a special attacker — 120 SpDef eats it
2. Whirlpool to trap + lower their Atk (they can't switch out)
3. Toxic on turn 2 — now they're poisoned AND trapped
4. Scald/Venoshock while Poison Heal keeps you healthy
5. Opponent either dies to Toxic + Whirlpool chip, or the trap expires and you've won the HP trade massively

### The Burn Wall
1. Against physical attackers: Whirlpool trap + Scald for burns
2. Whirlpool lowers Atk by 1, burn halves Atk — physical attackers are hitting like wet noodles
3. Poison Heal keeps you topped up while they tickle you
4. Even 75 Def survives when the opponent's Atk is effectively quartered (-1 Atk + burn)

### The Rain Tank (Rain Dish build)
1. In rain: Rain Dish heals 1/8 HP + 1.5x Def
2. 75 Def x 1.5 = effective 112 Def in rain — suddenly mixed bulk
3. Scald boosted by rain, Whirlpool still traps
4. Trade status immunity for physical durability

### Sample Movesets

**Trap Tank (Primary):**
- Whirlpool / Toxic / Scald / Recover
- Item: Toxic Orb
- Strategy: Trap, Toxic, heal, outlast

**Offensive Trapper:**
- Whirlpool / Sludge Bomb / Venoshock / Toxic
- Item: Toxic Orb
- Strategy: Trap, Toxic, punish with Venoshock

**Utility Tank:**
- Whirlpool / Scald / Knock Off / Recover
- Item: Toxic Orb
- Strategy: Trap, burn, strip items, heal

**Rain Tank:**
- Whirlpool / Scald / Sludge Bomb / Recover
- Item: Black Sludge
- Ability: Rain Dish
- Strategy: In rain, near-unkillable mixed wall that traps

## Tentacruel vs Other Poison Tanks

| | Tentacruel | Nidoqueen | Cradily | Corsola |
|---|-----------|-----------|---------|---------|
| **Role** | Trapping poison tank | Passive poison wall | Storm Drain drain tank | Regenerator pivot |
| **Ability** | Poison Heal | Poison Heal | Storm Drain | Regenerator |
| **Defense** | Special (120 SpDef) | Physical (ground type bulk) | Mixed (high SpDef) | Mixed |
| **Unique trait** | Whirlpool trapping | Physically defensive | Absorbs Water | Switches in/out |
| **Playstyle** | Trap and grind | Sit and wall | Absorb and drain | Cycle and chip |
| **Fantasy** | "You can't leave" | "You can't break me" | "Feed me Water moves" | "I'm never here long enough to die" |

Each poison/tank fills a completely different role. Tentacruel is the only trapper — it doesn't just wall you, it locks you in and kills you slowly.

## Tentacruel vs Other Water Types

| | Tentacruel | Azumarill | Swampert | Pelipper |
|---|-----------|-----------|----------|----------|
| **Role** | Trapping poison tank | Physical wallbreaker | Rain fortress | Rain setter / utility |
| **Ability** | Poison Heal | Huge Power | Stamina | Drizzle |
| **Speed** | 85 (moderate) | 50 (slow) | 60 (slow) | 65 (slow) |
| **Bulk** | Special (120 SpDef) | Moderate | Physical (Stamina) | Mixed |
| **Damage** | Low, chip-focused | Extreme physical | Moderate | Moderate |
| **Fantasy** | "You're trapped with me" | "I break walls" | "I become unkillable" | "It's always raining" |

## Team Synergy

- **Rain teams (Pelipper, Swampert):** Rain Dish build becomes a mixed wall in rain. Even Poison Heal builds appreciate rain-boosted Scald.
- **Physical attackers (Fearow, Azumarill):** Tentacruel softens teams with Toxic and Whirlpool Atk drops, making cleanup easier.
- **Ground-immune teammates:** Tentacruel's biggest weakness is Ground. Pair with Flying types or Levitate users (Pidgeot, Noctowl) to absorb Earthquakes.
- **Psychic-weak coverage:** Tentacruel fears Psychic — pair with Dark types or Pursuit users to handle Psychic threats.

## Matchup Analysis

**Strong vs:** Special attackers (120 SpDef walls them), Fire, Water, Ice, Fighting, Poison, Bug, Steel, Fairy (many resistances). Trapping turns winning matchups into guaranteed KOs.
**Weak vs:** Ground (Earthquake bypasses special bulk), Electric (super effective + often fast), Psychic (super effective + often fast)
**Key vulnerability:** Physical Ground moves devastate Tentacruel even with Whirlpool's Atk drop. Earthquake from a strong physical attacker is an OHKO. It needs teammates that absorb Ground moves. Also vulnerable to Taunt (shuts down Toxic/Recover/Whirlpool setup).
