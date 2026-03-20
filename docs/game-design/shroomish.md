---
name: Shroomish
dex_number: 285
status: designed
ability: Technician
role: Priority Fighter
evolution_line: [Shroomish, Breloom]
---

# Shroomish / Breloom - Rebalance Notes

## Design Philosophy
Breloom is a priority-hitting physical attacker that uses Technician to turn weak moves into devastating ones. Every move in the kit gets boosted, and Mach Punch gives +1 priority so low speed doesn't matter.

## Stat Changes

### Shroomish

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **70** | +10 |
| Atk | 40 | **55** | +15 |
| Def | 60 | 60 | - |
| SpA | 40 | 40 | - |
| SpD | 60 | 60 | - |
| Spe | 35 | 35 | - |
| **BST** | **295** | **320** | **+25** |

### Breloom

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **75** | +15 |
| Atk | 130 | **135** | +5 |
| Def | 80 | **85** | +5 |
| SpA | 60 | 60 | - |
| SpD | 60 | 60 | - |
| Spe | 70 | **65** | -5 |
| **BST** | **460** | **480** | **+20** |

**Rationale:**
- Speed lowered because Mach Punch is priority — doesn't need speed
- Attack nudged to 135 to make Technician math hit harder
- HP and Def up slightly for survivability
- Shroomish gets early Atk bump so Bullet Seed/Mach Punch feel good pre-evolution

## Ability Changes

**Ability 1:** Technician — 1.5x damage on moves with 60 BP or less. Core identity.
**Ability 2:** Poison Heal — Classic alternative for SubSeed tank (but Nidoqueen already owns this niche)
**Hidden:** Effect Spore — Kept as-is for flavor

## Learnset

### Shroomish

| Level | Move | BP | Type | Technician? | Purpose |
|-------|------|----|------|-------------|---------|
| 1 | Tackle | 40 | Normal | Yes (60) | Basic attack |
| 1 | Absorb | 20 | Grass | Yes (30) | STAB + drain |
| 8 | **Bullet Seed** | 25×2-5 | Grass | **Yes (37.5 each)** | Multi-hit STAB, build turns on |
| 10 | Stun Spore | — | Grass | — | Status utility |
| 12 | **Mach Punch** | 40 | Fighting | **Yes (60), +1 priority** | Priority STAB, the signature move |
| 14 | Mega Drain | 40 | Grass | Yes (60) | Sustain |
| 16 | Headbutt | 70 | Normal | No | Evolution-tier power move |

### Breloom (evolves at 23)

| Level | Move | BP | Type | Technician? | Purpose |
|-------|------|----|------|-------------|---------|
| 23 | **Force Palm** | 60 | Fighting | **Yes (90)** | Evolution reward — 90 effective + 30% paralysis |
| 27 | **Rock Tomb** | 60 | Rock | **Yes (90), -1 Spe** | Coverage + speed control |
| 33 | Seed Bomb | 80 | Grass | No | Raw power STAB option |
| 36 | **Drain Punch** | 75 | Fighting | No | Sustain fighter move |
| 40 | Swords Dance | — | Normal | — | Setup for sweeping |
| 44 | **Close Combat** | 120 | Fighting | No | Nuke option, drops defenses |
| 48 | Spore | — | Grass | — | 100% sleep — endgame power move |

## The Math

With 135 Atk + Technician:
- **Mach Punch:** 40 → 60 effective, +1 priority
- **Bullet Seed (5 hits + Loaded Dice):** 37.5 × 5 = **187.5 effective Grass STAB**
- **Force Palm:** 60 → 90 effective + 30% paralysis
- **Rock Tomb:** 60 → 90 effective + guaranteed speed drop
- **Close Combat:** 120 unboosted — raw power when Technician isn't enough

After Swords Dance: Mach Punch hits 120 effective with priority. That's Close Combat damage with no drawback and +1 priority.

## Core Strategy

1. Lead with Bullet Seed or Mach Punch for immediate Technician value
2. Rock Tomb to slow faster threats, Force Palm to paralyze
3. Mid-game: Swords Dance on a free turn, then Mach Punch sweeps with priority
4. Late-game: Spore puts something to sleep, set up Swords Dance, clean up

## Ideal Items

- **Loaded Dice** — Guarantees 4-5 hits on Bullet Seed = 150-187.5 effective power
- **Choice Band** — Raw power on boosted moves, Mach Punch becomes a nuke
- **Focus Sash** — Survive one hit, Spore, set up Swords Dance

## Team Synergy

- Pairs well with Rain teams — Breloom resists Water, partners resist Fire
- Mach Punch priority complements slower sweepers who need things weakened first
- Spore support lets teammates set up freely
- Covers Rock types that threaten Taillow/Wingull

## Matchup Analysis

**Strong vs:** Rock, Dark, Normal, Steel, Water, Ground
**Weak vs:** Flying (4x), Psychic, Fire, Fairy, Ice, Poison
**Key threat:** Any flying type destroys Breloom — Wingull/Taillow on same routes are dangerous matchups
