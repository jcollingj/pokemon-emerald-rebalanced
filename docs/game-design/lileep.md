---
name: Lileep
dex_number: 345
status: designed
ability: Storm Drain
role: Immovable Special Tank
ideal_items: Big Root, Leftovers, Assault Vest
evolution_line: [Lileep, Cradily]
---

# Lileep / Cradily - Rebalance Notes

## Design Philosophy
Cradily is an immovable special tank that uses Storm Drain to turn Water moves into fuel. It plants itself with Ingrain, drains HP with Giga Drain, and fires increasingly powerful special attacks as it absorbs Water hits. Rock/Grass is a unique defensive typing — Storm Drain patches the 4x Water weakness and turns it into a strength, creating a Pokemon that punishes Water-type spam.

This is the "defensive layering" pattern — Ingrain passive recovery + Giga Drain active recovery + Storm Drain SpA boosts stack into a wall that gets harder to kill the longer it stays in. Unlike Swampert's rain fortress (which relies on weather and physical bulk), Cradily is weather-independent and specializes in special bulk.

## Ability Changes

- **Ability 1: Storm Drain** — Draws in Water moves, grants immunity, and raises SpA by +1. Core identity — every Water attack aimed at Cradily makes it stronger. Shapes the entire build around special offense.
- **Ability 2: Suction Cups** — Prevents forced switching. Backup option that pairs with Ingrain thematically (you can't move this thing).
- **Hidden: Harvest** — 50% chance to restore consumed Berry each turn. Alt build with Sitrus Berry for regeneration tank.

## Stat Changes

### Lileep

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 66 | 66 | - |
| Atk | 41 | 41 | - |
| Def | 77 | 77 | - |
| SpA | 61 | **66** | +5 |
| SpD | 87 | **90** | +3 |
| Spe | 23 | 23 | - |
| **BST** | **355** | **363** | **+8** |

Minor SpA bump so Giga Drain and Ancient Power feel meaningful early. Lileep is already tanky for a pre-evolution — 66/77/87 bulk is legitimate. No need to change the identity, just make the offense functional.

### Cradily

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 86 | **92** | +6 |
| Atk | 81 | 81 | - |
| Def | 97 | 97 | - |
| SpA | 81 | **91** | +10 |
| SpD | 107 | **112** | +5 |
| Spe | 43 | 43 | - |
| **BST** | **495** | **516** | **+21** |

92 HP + 97 Def + 112 SpDef = legitimate mixed wall. 91 SpA is modest on its own, but Storm Drain boosts push it to 136 equivalent after one boost. Cradily doesn't need speed — it's meant to plant itself and outlast.

## Learnset

### Lileep (evolves at 40)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Astonish | 30 | Ghost | Basic attack |
| 1 | Wrap | 15 | Normal | Trapping utility |
| 8 | **Giga Drain** | 75 | Grass | First synergy move — drain recovery begins. Build turns on. |
| 12 | **Ancient Power** | 60 | Rock | Rock STAB + 10% omniboost. Both STABs online. |
| 16 | **Ingrain** | — | Grass | Learned by Lileep at 16, carried over on evolution. Passive recovery layer stacks with Giga Drain. |

### Cradily (evolves from Lileep at 40)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | **Ingrain** | — | Grass | Carry-over from Lileep (learned at 16) — recovery anchoring begins |
| 21 | **Amnesia** | — | Psychic | +2 SpDef. Already high SpDef becomes nearly unbreakable. |
| 27 | **Earth Power** | 90 | Ground | Coverage — hits Steel, Fire, Poison that threaten Cradily. |
| 33 | **Hex** | 65 | Ghost | Coverage — doubles to 130 BP on statused targets, pairs with Toxic. |
| 36 | **Toxic** | — | Poison | Status + Hex synergy. Wears down walls, feeds Hex damage. |
| 42 | **Energy Ball** | 90 | Grass | Upgraded Grass STAB. Stronger than Giga Drain when you don't need healing. |
| 48 | **Power Gem** | 80 | Rock | Special Rock STAB. Storm Drain boosts make this hit hard. |

## The Math

With 91 SpA + Storm Drain (+1 SpA = effectively 136 SpA):

| Move | BP | STAB | Effective | Notes |
|------|----|------|-----------|-------|
| **Power Gem** | 80 | x1.5 | **120** | Special Rock STAB, no recoil, no drawback |
| **Energy Ball** | 90 | x1.5 | **135** | Strongest Grass STAB |
| **Giga Drain** | 75 | x1.5 | **112** | Heals 50% of damage dealt (75% with Big Root) |
| **Earth Power** | 90 | — | **90** | Hits Steel/Fire/Poison super effectively |
| **Ancient Power** | 60 | x1.5 | **90** | 10% chance to raise all stats |
| **Hex** | 65/130 | — | **130** | Doubled on statused target (Toxic) |

**After +1 Storm Drain boost:** 91 SpA x 1.5 = 136 effective SpA. Power Gem at 120 effective BP off 136 SpA starts threatening neutral targets.

**After +2 (two Water redirects):** 91 x 2.0 = 182 effective SpA. Now Cradily is hitting like a dedicated special attacker while being nearly unkillable on the special side.

**Giga Drain recovery math:**
- Giga Drain heals 50% of damage dealt
- With Big Root: heals 75% of damage dealt (1.3x healing from Big Root, rounded)
- Add Ingrain: 1/16 max HP per turn passive healing
- Cradily is recovering 30-50% of its HP per turn between Giga Drain + Ingrain

**Amnesia stacking:**
- Base 112 SpDef + Amnesia (+2) = effectively 224 SpDef
- After Amnesia, almost nothing on the special side can break through
- Forces the opponent to attack physically or use status

## Ideal Items

1. **Big Root** — Boosts Giga Drain healing from 50% to 65% of damage dealt, and Ingrain recovery from 1/16 to ~1/8 max HP. The signature item — maximizes the drain tank fantasy. Every turn Cradily heals a massive chunk while dealing damage.
2. **Leftovers** — 1/16 max HP per turn passive recovery on top of Ingrain (1/16) and Giga Drain. Three layers of recovery. The safe, consistent pick for maximum longevity.
3. **Assault Vest** — 1.5x SpDef (112 x 1.5 = 168 effective). Cradily becomes an almost impenetrable special wall. Trade setup moves (Amnesia, Ingrain, Toxic) for pure 4-attacks with massive special bulk. Best when paired with Storm Drain boosts for offense.

## Core Strategy

### The Immovable Wall
1. Switch Cradily into a Water-type move. Storm Drain absorbs it, +1 SpA.
2. Use Ingrain to anchor. Passive recovery begins.
3. Giga Drain for active recovery + STAB damage. Between Ingrain + Giga Drain, Cradily heals constantly.
4. Amnesia if the opponent goes special. +2 SpDef makes Cradily nearly impenetrable.
5. If they switch to a physical attacker, Toxic + Hex or Earth Power for coverage.
6. Cradily slowly accumulates Storm Drain boosts and becomes an offensive threat while never dying.

### When to Use Cradily
- **Water-type switch-in:** Bring it in on any Water attack. Free +1 SpA every time.
- **Special wall:** 92/112 SpDef (pre-Amnesia) tanks special hits all day. Post-Amnesia, nothing breaks through.
- **Stall breaker:** Toxic + Giga Drain + Ingrain means Cradily wins wars of attrition against other walls.
- **NOT a fast attacker.** 43 Speed means Cradily moves last. It wins by not dying, not by outspeeding.

## Cradily vs Swampert

| | Swampert | Cradily |
|---|---------|---------|
| **Role** | Rain Fortress | Immovable Special Tank |
| **Ability** | Rain Dish (heal in rain) | Storm Drain (Water immunity + SpA) |
| **Bulk** | Physical (Curse + Def) | Special (Amnesia + SpDef) |
| **Recovery** | Rain Dish + Aqua Ring (passive) | Giga Drain + Ingrain (active + passive) |
| **Offense** | Physical (Waterfall, EQ) | Special (Power Gem, Energy Ball, Earth Power) |
| **Dependency** | Needs rain to function | Weather-independent |
| **Speed** | Slow (60) | Slower (43) |
| **Fantasy** | "Unkillable in rain" | "I absorb your Water and get stronger" |

Swampert needs rain support. Cradily works on its own. Swampert walls physical. Cradily walls special. Different defensive profiles, different offensive approaches.

## Team Synergy

- Pairs with physically defensive Pokemon that cover Cradily's weak physical side (Skarmory, Steelix)
- Absorbs Water moves for Water-weak teammates (Torkoal, Camerupt, Ground types)
- Toxic support from Cradily helps physical attackers by wearing down walls
- Complements rain teams ironically — Storm Drain redirects Water moves away from teammates in doubles, while Cradily doesn't care about rain weakening its Fire coverage (it doesn't use Fire moves)

## Matchup Analysis

**Strong vs:** Water (immune + free SpA boost), Electric, Normal, Rock (Giga Drain), Ground (Giga Drain). Anything on the special side that isn't Ice or Steel.
**Weak vs:** Ice (4x with Rock/Grass), Steel (resists both STABs, hit by Earth Power though), Fighting (physical, super effective), Bug (physical, super effective), Poison (super effective + can't be poisoned back)
**Key vulnerability:** Physical attackers bypass Cradily's massive special bulk. Ice Beam is the exception — even from the special side, 4x super effective hurts. Cradily must avoid Ice types entirely.

## Roxanne's Lileep

Roxanne uses Lileep at L13 with Sitrus Berry, running Suction Cups (not Storm Drain) with Ancient Power / Acid / Confuse Ray / Ingrain. This is intentionally different from the player build — Suction Cups prevents the player from phasing it out, and Ingrain + Sitrus Berry makes it annoyingly durable for an early gym fight. The player's version with Storm Drain is the "real" build that comes online after receiving the fossil.
