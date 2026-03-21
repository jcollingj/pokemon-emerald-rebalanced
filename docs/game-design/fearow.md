---
name: Spearow
dex_number: 21
status: designed
ability: Reckless
role: Kamikaze Glass Cannon
ideal_items: Choice Band, Life Orb, Sharp Beak
evolution_line: [Spearow, Fearow]
---

# Spearow / Fearow - Rebalance Notes

## Design Philosophy
Fearow is a kamikaze glass cannon that uses Reckless to boost recoil moves. It doesn't care about surviving — it exists to delete 1-2 threats and go down swinging. Normal/Flying dual typing means both Brave Bird AND Double-Edge get STAB, giving Fearow two 216-effective nukes that together cover every type in the game.

## Ability Changes

- **Ability 1: Reckless** — Recoil moves deal 1.2x damage. Core identity — every signature move is a recoil move.
- **Ability 2: Keen Eye** — Accuracy can't be lowered. Backup option.
- **Hidden: Sniper** — Crits deal 2.25x. Alt build with Drill Peck/Slash high-crit moves.

## Stat Changes

### Spearow

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | 40 | - |
| Atk | 60 | **70** | +10 |
| Def | 30 | 30 | - |
| SpA | 31 | 31 | - |
| SpD | 31 | 31 | - |
| Spe | 70 | **75** | +5 |
| **BST** | **262** | **277** | **+15** |

Glass cannon from the start. Hits hard for a basic Pokemon, dies easily.

### Fearow

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 65 | 65 | - |
| Atk | 90 | **110** | +20 |
| Def | 65 | 65 | - |
| SpA | 61 | 61 | - |
| SpD | 61 | 61 | - |
| Spe | 100 | **105** | +5 |
| **BST** | **442** | **467** | **+25** |

110 Atk + 105 Speed = fast and deadly. 65/65/61 bulk = paper. Fearow hits hard and dies fast. That's the deal.

## Learnset

### Spearow

| Level | Move | BP | Type | Reckless? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Peck | 35 | Flying | No | Basic STAB |
| 1 | Leer | — | Normal | — | Utility |
| 8 | **Fury Attack** | 15×2-5 | Normal | No | Multi-hit STAB |
| 10 | Pursuit | 40 | Dark | No | Trapping fleeing Pokemon |
| 12 | **Take Down** | 90 | Normal | **Yes → 108, STAB → 162** | First recoil move — build turns on |
| 16 | Aerial Ace | 60 | Flying | No | Never-miss Flying STAB |

### Fearow (evolves at 20)

| Level | Move | BP | Type | Reckless? | Purpose |
|-------|------|----|------|-----------|---------|
| 20 | **Drill Peck** | 80 | Flying | No | Evolution reward — reliable Flying STAB |
| 24 | **Drill Run** | 80 | Ground | No | Coverage for Electric/Rock/Steel |
| 28 | **Double-Edge** | 120 | Normal | **Yes → 144, STAB → 216** | Normal nuke. Nothing is immune to Normal+Flying combined. |
| 33 | U-Turn | 70 | Bug | No | Pivot out after nuking |
| 36 | **Brave Bird** | 120 | Flying | **Yes → 144, STAB → 216** | Flying nuke. The signature move. |
| 40 | Quick Attack | 40 | Normal | No | +1 priority for finishing |
| 44 | Throat Chop | 70 | Dark | No | Coverage, prevents sound moves |
| 48 | **Head Smash** | 150 | Rock | **Yes → 180** | Ultimate nuke. 180 effective + massive recoil. Last resort. |

## The Math

With 110 Atk + Reckless (1.2x on recoil moves):

| Move | BP | Reckless | STAB | Effective | Recoil |
|------|----|----------|------|-----------|--------|
| **Brave Bird** | 120 | ×1.2 = 144 | ×1.5 | **216** | 33% damage dealt |
| **Double-Edge** | 120 | ×1.2 = 144 | ×1.5 | **216** | 33% damage dealt |
| **Head Smash** | 150 | ×1.2 = 180 | — | **180** | 50% damage dealt |
| **Take Down** | 90 | ×1.2 = 108 | ×1.5 | **162** | 25% damage dealt |
| Drill Peck | 80 | — | ×1.5 | **120** | None |
| Drill Run | 80 | — | — | **80** | None |

**Choice Band Brave Bird:** 216 effective off 165 Atk (110 × 1.5 Band). This OHKOs most things that don't resist Flying.

**Coverage logic:**
- They resist Flying → Double-Edge (Normal hits Rock/Steel/Electric neutrally unless Ghost)
- They're Ghost → Double-Edge is immune, but Brave Bird hits
- They resist both → Drill Run or Head Smash for coverage
- Between Brave Bird + Double-Edge, almost nothing in the game is safe

## Ideal Items

1. **Choice Band** — 110 Atk × 1.5 = 165 effective. Brave Bird at 216 BP off 165 Atk. One of the hardest single hits in the early-mid game. Locked into one move but Fearow only needs one hit.
2. **Life Orb** — 1.3x on everything + flexible moveset. Stacks MORE recoil on top of Reckless recoil. Fearow goes down even faster but hits even harder. For players who want maximum chaos.
3. **Sharp Beak** — 1.2x Flying moves. Brave Bird: 120 × 1.2 (Reckless) × 1.2 (Sharp Beak) × 1.5 (STAB) = **259 effective**. Dedicated to pure Flying damage.

## Core Strategy

### The Missile
1. Send Fearow in on something it outspeeds (105 Speed outspeeds most)
2. Brave Bird → 216 effective STAB. Target probably dies. Fearow takes ~33% recoil.
3. Next turn: Brave Bird again, or Double-Edge for Normal coverage. Fearow takes more recoil.
4. Fearow is now at ~33% HP. Quick Attack to finish something, or go down with one more Brave Bird.
5. Fearow fainted after taking 2-3 things with it. Mission accomplished.

### When to Use Fearow
- Revenge killing: bring it in after something on your team faints, outspeed, Brave Bird
- Wallbreaking: Choice Band Brave Bird breaks through bulky Pokemon
- Late-game cleaning: if the opponent's team is weakened, Fearow's speed + power finishes the job
- NOT for long battles. Fearow doesn't stall, pivot, or set up. It attacks and dies.

## Fearow vs The Other Birds

| | Pidgeot | Noctowl | Fearow |
|---|---------|---------|--------|
| **Role** | Fast sustained sweeper | Bulky unresisted special | Kamikaze nuke |
| **Ability** | Aerilate (Normal→Flying) | Tinted Lens (nothing resists) | Reckless (recoil = power) |
| **Speed** | 110 (fastest) | 70 (slowest) | 105 (fast) |
| **Bulk** | Moderate | High (110 HP) | Paper (65 HP) |
| **Damage** | High, sustained | Moderate, unresisted | Extreme, self-destructive |
| **Longevity** | Multiple rounds | Many rounds | 2-3 rounds max |
| **Fantasy** | "I outspeed everything" | "Nothing walls me" | "I don't care if I die" |

Each bird fills a completely different role. Pidgeot for speed, Noctowl for inevitability, Fearow for raw burst.

## Team Synergy

- Pairs with bulky Pokemon that can take hits while Fearow is dead (Azumarill, Noctowl, Swampert)
- U-Turn pivots Fearow out to preserve HP for a later nuke
- Covers Grass/Fighting/Bug types that threaten Swampert, Azumarill
- Drill Run covers Electric/Rock/Steel that threaten other Flying types

## Matchup Analysis

**Strong vs:** Grass, Fighting, Bug, Ground (immune). Brave Bird + Double-Edge covers almost everything.
**Weak vs:** Rock (4x resist Flying + super effective), Steel (resists both STABs), Electric (super effective + fast)
**Key vulnerability:** Fearow can't switch in multiple times — every hit + recoil chips away. It's a one-use weapon most games.
