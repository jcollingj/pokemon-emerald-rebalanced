---
name: Voltorb
dex_number: 100
status: designed
ability: Galvanize
role: Electric Detonator
ideal_items: Choice Specs, Choice Band, Life Orb
evolution_line: [Voltorb, Electrode]
---

# Voltorb / Electrode - Rebalance Notes

## Design Philosophy

Electrode is the fastest Electric-type in the game at 150 base Speed. It doesn't need a held item to be dangerous — it IS the weapon. The design leans into its "living bomb" identity: Galvanize converts Normal-type moves to Electric type, turning Self-Destruct and Explosion into Electric-type nuclear strikes. No other Pokemon can fire off an Electric-type Explosion. Ground types are the natural counterplay — they're immune to Electric, which walls the whole kit. That's the trade: maximum power with a clean answer.

Electrode's niche vs Pikachu: Pikachu is an item-dependent pivot (needs Light Ball, uses Volt Switch for momentum). Electrode is self-contained — it comes in, outspeeds everything, either sets screens or fires off nuclear attacks, then detonates on exit. Two different fantasies: Pikachu is clever, Electrode is inevitable.

## Ability Changes

- **Ability 1: Galvanize** — Normal-type moves become Electric type and deal 1.2× damage. Core identity. Explosion, Self-Destruct, Double-Edge, Return all become Electric nukes with STAB.
- **Ability 2: Soundproof** — Immune to sound-based moves. Thematic (Electrode makes noise before exploding) and defensive counterplay to Hyper Voice/Boomburst/Screech.
- **Hidden: Electric Surge** — Sets Electric Terrain on entry. Boosts Electric moves 30%, prevents sleep. Doubles use case: set terrain for teammates, then detonate.

## Stat Changes

### Voltorb

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | 50 | +10 |
| Atk | 30 | 40 | +10 |
| Def | 50 | 55 | +5 |
| SpA | 55 | 65 | +10 |
| SpD | 55 | 60 | +5 |
| Spe | 100 | 110 | +10 |
| **BST** | **330** | **380** | **+50** |

Fast from the start. 110 Speed already outspeeds most early-game threats. Modest bulk to survive a hit and fire off Self-Destruct.

### Electrode

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | — |
| Atk | 50 | 65 | +15 |
| Def | 70 | 70 | — |
| SpA | 80 | 100 | +20 |
| SpD | 80 | 80 | — |
| Spe | 150 | 150 | — |
| **BST** | **490** | **520** | **+30** |

150 Speed is untouched — that's the identity. Boosted SpA to 100 so Electro Ball and Thunderbolt are genuinely threatening. Atk to 65 makes Explosion math scarier. Still fragile (60 HP), but it doesn't need to survive — it needs to explode.

## Learnset

### Voltorb (evolves at L30)

| Level | Move | BP | Type | Galvanize? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Charge | — | Electric | No | Setup move — raises SpA and doubles next Electric hit |
| 1 | Tackle | 40 | Normal | **Yes → 48, STAB → 72** | Early Electric STAB via Galvanize |
| 8 | **Thunder Wave** | — | Electric | — | Speed control — build turns on as support |
| 10 | Sonic Boom | 20 (fixed) | Normal | No | Chip damage, thematic (the crackle before the blast) |
| 12 | **Self-Destruct** | 130 | Normal | **Yes → 156, STAB → 234** | First synergy move. The build makes sense immediately. |
| 16 | Spark | 65 | Electric | No | Reliable Electric STAB, 30% paralysis chance |
| 21 | Screech | — | Normal | No | -2 Defense; sets up Explosion or Self-Destruct for even bigger numbers |
| 24 | **Electro Ball** | Var | Electric | No | Speed-scaled STAB. Voltorb at 110 Speed vs 50 Speed = 120 BP. |
| 27 | **Discharge** | 80 | Electric | No | AoE Electric; spread damage, 30% paralysis |

### Electrode (evolves at L30)

| Level | Move | BP | Type | Galvanize? | Purpose |
|-------|------|----|------|-----------|---------|
| 30 | **Light Screen** | — | Psychic | No | Evolution reward — set screens, then detonate |
| 33 | **Thunderbolt** | 90 | Electric | No | Strong reliable STAB. Off 100 SpA this hits hard. |
| 36 | **Double-Edge** | 120 | Normal | **Yes → 144, STAB → 216** | Reusable alternative to Explosion. Still hits like a truck. |
| 40 | Reflect | — | Psychic | No | Screens complete set; Electrode sets both then detonates |
| 44 | **Thunder** | 110 | Electric | No | Max-power special option. 70% accuracy is the cost. |
| 48 | **Explosion** | 250 | Normal | **Yes → 300, STAB → 450** | The finale. Nothing takes an Electric-type Explosion. |

## The Math

With 65 Atk / 100 SpA and Galvanize (1.2×):

| Move | Base BP | Galvanize | STAB | Effective | Notes |
|------|---------|-----------|------|-----------|-------|
| **Explosion** | 250 | ×1.2 = 300 | ×1.5 | **450** | Physical. Ground immune. |
| **Double-Edge** | 120 | ×1.2 = 144 | ×1.5 | **216** | Physical. 33% recoil. |
| **Self-Destruct** | 130 | ×1.2 = 156 | ×1.5 | **234** | Physical. Ground immune. Voltorb. |
| **Electro Ball** | 150* | — | ×1.5 | **225** | Special. *vs 50 Speed target. |
| **Thunderbolt** | 90 | — | ×1.5 | **135** | Special. Reliable. |
| **Thunder** | 110 | — | ×1.5 | **165** | Special. 70% accuracy. |

*Electro Ball power at 150 Speed vs various targets:
- vs 50 Speed: 150 BP
- vs 75 Speed: 120 BP
- vs 100 Speed: 100 BP
- vs 130 Speed: 80 BP

At 150 Speed, Electrode outspeeds almost everything, so Electro Ball consistently hits at 100-150 BP.

**Choice Band Explosion:** 450 effective off 97 Atk (65 × 1.5). Electric-type Explosion has no non-immune answers — only Ground types survive.

**Choice Specs Electro Ball:** 225 effective off 150 SpA (100 × 1.5). Against the average mid-game Pokemon at ~70 Speed, this is 120 BP × 1.5 specs × 1.5 STAB = 270 effective SpA. One-shots fragile targets.

## Ideal Items

1. **Choice Specs** — 100 SpA × 1.5 = 150 effective. Electro Ball against slower targets (most of the game) hits for 100-150 BP off 150 SpA. Hard to wall. Thunderbolt as reliable fallback. Electrode is fast enough that being Choice-locked matters less — it picks one move and wins before speed ties happen.
2. **Choice Band** — 65 Atk × 1.5 = 97 effective. Band Explosion at 450 effective BP. For the player who wants maximum chaos. One-shots almost anything that isn't Ground. Best used as a surprise closer.
3. **Life Orb** — Flexible mixed set. Fire Thunderbolt/Electro Ball on special targets, Double-Edge on physical targets, then save Explosion for a critical moment. 1.3× on everything + no lock-in. Takes 10% recoil per move but Electrode doesn't survive long anyway.

## Core Strategy

### The Detonator Sequence
1. Electrode comes in (150 Speed — it almost always goes first)
2. **Option A**: Set Light Screen or Reflect for team, then detonate when threatened
3. **Option B**: Choice Specs Electro Ball — scale with speed advantage, OHKO frailer targets
4. **Option C**: When done, Choice Band Explosion for maximum exit damage
5. Ground types force the switch. Everything else has to eat it.

### When to Use Electrode
- Lead: 150 Speed sets screens before anything moves. Light Screen + Reflect on turn 1-2, then Explosion on turn 3.
- Revenge killer: Bring it in after something faints. Outspeed, nuke, exit.
- Late-game cleaner: If the opponent has weakened targets, Electro Ball hits them while Electrode is untouched.
- NOT for sustained battles. No recovery, limited bulk. Two hits in, it explodes or dies.

## Electrode vs Other Electrics

| | Pikachu | Electrode |
|---|---------|-----------|
| **Role** | Pivot + sustained attacker | Speed supremacy + detonator |
| **Ability** | Transistor (Electric 1.5×) | Galvanize (Normal→Electric 1.2×) |
| **Speed** | 100 (fast) | 150 (fastest in game) |
| **Bulk** | Fragile (45 HP) | Fragile (60 HP) |
| **Item** | Needs Light Ball to shine | Self-sufficient |
| **Damage** | Consistent Electric STAB | Explosive spikes |
| **Exit** | Volt Switch (pivot) | Explosion (nuke) |
| **Fantasy** | "I control momentum" | "Nothing survives my exit" |

## Team Synergy

- **Pairs with physical attackers** — Electrode's Electric coverage handles Water/Flying while teammates cover Ground types
- **Screen support** — Light Screen + Reflect before detonating gives the next Pokemon a turn of setup
- **Volt Switch chains** — Pikachu uses Volt Switch, Electrode comes in at full health, either screens or detonates
- **Covers Flying types** that threaten Machamp, Breloom, etc.
- **Ground-type partners** are essential — Electrode is dead weight vs Ground. Bring a Marill, Taillow, or Pidgeot.

## Matchup Analysis

**Strong vs:** Flying, Water, Dragon (Electro Ball), anything slower than 150 (nearly everything). Ground types can't switch in safely vs Double-Edge/Thunder.
**Weak vs:** Ground (immune to Electric + Galvanize Explosion), Grass (resists Electric), Dragon (resists neither but can outspeed).
**Key vulnerability:** Electrode lives and dies by 60 HP / 70 Def. Fast physical attackers hit it before it can act. Electrode's only answer is "go first or die."
**Ground counterplay:** This is intentional. Galvanize Explosion being blocked by Ground immunity is the design's check. Players must remove Ground types or switch out.
