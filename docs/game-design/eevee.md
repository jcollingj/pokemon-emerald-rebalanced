---
name: Eevee
dex_number: 133
status: implemented
ability: Adaptability
role: Adaptability Normal Sweeper / Evolution Platform
evolution_line: [Eevee, Vaporeon, Jolteon, Flareon, Espeon, Umbreon]
---

# Eevee Line - Rebalance Notes

## Overview

Eevee is a rare encounter on Route 116 (L7-8, 1 slot). It evolves into 5 distinct forms in Gen 1-3 scope, each with a clear build identity. Eevee itself uses Adaptability to make Normal STAB viable before evolving, and Baton Pass to transfer any boosts to its evolution.

---

## Eevee (#133) — Adaptability Normal Sweeper

### Design Philosophy
Eevee is the **versatile platform** — rare enough to feel special, strong enough to use before evolving. Adaptability doubles STAB bonus (1.5× → 2×), making Swift and Hyper Voice genuinely dangerous. Baton Pass at L36 lets Eevee hand off stat boosts to whichever evolution the player chooses.

### Stat Changes (BST: 350)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|-----------|--------|
| HP | 55 | 60 | +5 |
| ATK | 55 | 60 | +5 |
| DEF | 50 | 50 | — |
| SPA | 45 | 50 | +5 |
| SPD | 65 | 65 | — |
| SPE | 55 | 65 | +10 |
| **BST** | **325** | **350** | **+25** |

### Abilities
- **Ability 1: Adaptability** — Normal STAB = 2× (Swift hits 120 effective power, Hyper Voice hits 160!)
- **Ability 2: Adaptability** — Same (ensures wild Eevee always has the signature ability)
- **Hidden: Anticipation** — Warns of super-effective moves; useful for predicting evolution matchups

### Learnset

| Level | Move | Type | Category | Power | Purpose |
|-------|------|------|----------|-------|---------|
| 1 | Tackle | Normal | Physical | 40 | Basic STAB |
| 1 | Tail Whip | Normal | Status | — | Lower Defense |
| 8 | Sand Attack | Normal | Status | — | Accuracy debuff |
| 12 | Quick Attack | Normal | Physical | 40 | Priority, 80 eff. power w/ Adaptability |
| 16 | Swift | Normal | Special | 60 | Never misses, 120 eff. power |
| 23 | Bite | Dark | Physical | 60 | Dark coverage |
| 30 | Hyper Voice | Normal | Special | 90 | Main STAB, 180 eff. power |
| 36 | Baton Pass | Normal | Status | — | Pass boosts to evolution |
| 42 | Double-Edge | Normal | Physical | 120 | High-power physical, 240 eff. power |

### Competitive Movesets

```
Eevee @ Silk Scarf
Ability: Adaptability
Nature: Timid (+Speed, -Attack)
- Hyper Voice (main STAB, 180 eff. power)
- Swift (reliable STAB)
- Quick Attack (priority)
- Baton Pass (set up then pass)
```

---

## Vaporeon (#134) — Water Absorb Tank

### Design Philosophy
Vaporeon is the **tanky water-type** with incredible bulk and passive healing. Water Absorb + Aqua Ring + Rest creates a near-unkillable defensive core. Scald's burn chance provides passive damage and Attack reduction. Acid Armor makes physical attackers irrelevant.

### Stat Changes (BST: 535)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|-----------|--------|
| HP | 130 | 130 | — |
| ATK | 65 | 65 | — |
| DEF | 60 | 65 | +5 |
| SPA | 110 | 110 | — |
| SPD | 95 | 100 | +5 |
| SPE | 65 | 65 | — |
| **BST** | **525** | **535** | **+10** |

### Abilities
- **Ability 1: Water Absorb** — Heals 25% max HP from Water moves; immune to Water
- **Ability 2: Water Absorb** — Same
- **Hidden: Hydration** — Cures status at end of rain turns; pairs with Rain Dance + Rest

### Learnset

| Level | Move | Type | Category | Power | Purpose |
|-------|------|------|----------|-------|---------|
| 1 | Water Gun | Water | Special | 40 | Basic STAB |
| 1 | Quick Attack | Normal | Physical | 40 | Priority |
| 1 | Tail Whip | Normal | Status | — | Debuff |
| 8 | Sand Attack | Normal | Status | — | Accuracy drop |
| 12 | Aqua Ring | Water | Status | — | Passive healing (1/16 per turn) |
| 16 | Water Pulse | Water | Special | 60 | 20% confusion chance |
| 23 | Scald | Water | Special | 80 | 30% burn — weakens physical attackers |
| 30 | Acid Armor | Poison | Status | — | +2 Defense; makes physical attacks bounce off |
| 36 | Surf | Water | Special | 90 | Main STAB |
| 42 | Rest | Psychic | Status | — | Full heal + status cure |
| 47 | Ice Beam | Ice | Special | 90 | Grass/Dragon coverage |
| 52 | Hydro Pump | Water | Special | 110 | Nuke option |

### Competitive Movesets

```
Vaporeon @ Leftovers
Ability: Water Absorb
Nature: Bold (+Defense, -Attack)
- Scald (STAB + burn support)
- Acid Armor (Defense stacking)
- Aqua Ring / Rest (passive recovery)
- Ice Beam (coverage)
```

---

## Jolteon (#135) — Volt Absorb Fast Sweeper

### Design Philosophy
Jolteon is the **fastest Eeveelution** and the premier Electric-type pivot. Volt Absorb immunity at L16 (Volt Switch) gives it free momentum; it hits hard, switches out, and repeats. 130 base Speed means it outspeeds nearly everything in the early-mid game.

### Stat Changes
No stat changes — vanilla stats are already excellent.
- 65/65/60/110/95/130 (BST 525)

### Abilities
- **Ability 1: Volt Absorb** — Immune to Electric, heals 25% HP from Electric moves
- **Ability 2: Volt Absorb** — Same
- **Hidden: Quick Feet** — 50% Speed boost when statused; turns poison/burn into advantage

### Learnset

| Level | Move | Type | Category | Power | Purpose |
|-------|------|------|----------|-------|---------|
| 1 | Thunder Shock | Electric | Special | 40 | Early STAB |
| 1 | Quick Attack | Normal | Physical | 40 | Priority |
| 1 | Tail Whip | Normal | Status | — | Debuff |
| 8 | Sand Attack | Normal | Status | — | Accuracy drop |
| 16 | Volt Switch | Electric | Special | 70 | **Pivot move — hit and switch** |
| 23 | Thunder Wave | Electric | Status | — | Speed control |
| 30 | Thunderbolt | Electric | Special | 90 | Main STAB (earlier than vanilla) |
| 36 | Pin Missile | Bug | Physical | 25×2-5 | Multi-hit coverage |
| 42 | Discharge | Electric | Special | 80 | Spread + paralyze in doubles |
| 47 | Agility | Psychic | Status | — | +2 Speed setup |
| 52 | Thunder | Electric | Special | 110 | Nuke option |

### Competitive Movesets

```
Jolteon @ Choice Specs / Magnet
Ability: Volt Absorb
Nature: Timid (+Speed, -Attack)
- Thunderbolt (main STAB)
- Volt Switch (pivot)
- Thunder Wave (speed control)
- Shadow Ball (Ghost/Psychic coverage)
```

---

## Flareon (#136) — Physical Fire Attacker

### Design Philosophy
Flareon solves its classic problem — incredible Attack with no physical Fire STAB — through Guts + Flame Orb. With Guts active (1.5×) and Flare Blitz, Flareon hits like a freight train. Reckless as Hidden Ability further boosts recoil moves. Speed bump to 80 gives it enough to threaten before being revenge-killed.

### Stat Changes (BST: 540)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|-----------|--------|
| HP | 65 | 65 | — |
| ATK | 130 | 130 | — |
| DEF | 60 | 60 | — |
| SPA | 95 | 95 | — |
| SPD | 110 | 110 | — |
| SPE | 65 | 80 | +15 |
| **BST** | **525** | **540** | **+15** |

### Abilities
- **Ability 1: Guts** — +50% Attack when statused (Flame Orb activation = 195 effective Attack!)
- **Ability 2: Flash Fire** — Immune to Fire; +50% Fire damage boost after hit
- **Hidden: Reckless** — +20% power on recoil moves (Flare Blitz, Double-Edge)

### Guts + Flame Orb Math
```
130 base Atk × 1.5 (Guts) = 195 effective Attack
Flare Blitz 120 × STAB 1.5 = 180 base power
With Reckless: 180 × 1.2 = 216 base power equivalent
```

### Learnset

| Level | Move | Type | Category | Power | Purpose |
|-------|------|------|----------|-------|---------|
| 1 | Ember | Fire | Special | 40 | Early STAB |
| 1 | Quick Attack | Normal | Physical | 40 | Priority |
| 1 | Tail Whip | Normal | Status | — | Debuff |
| 8 | Sand Attack | Normal | Status | — | Accuracy drop |
| 16 | Bite | Dark | Physical | 60 | Physical Dark coverage |
| 23 | Flare Blitz | Fire | Physical | 120 | **Main physical Fire STAB** |
| 30 | Superpower | Fighting | Physical | 120 | Rock/Normal coverage, Fighting STAB |
| 36 | Fire Spin | Fire | Special | 35 | Trap damage |
| 42 | Will-O-Wisp | Fire | Status | — | Burn utility |
| 47 | Fire Blast | Fire | Special | 110 | Special nuke option |
| 52 | Last Resort | Normal | Physical | 140 | After using all other moves |

### Competitive Movesets

```
Flareon @ Flame Orb
Ability: Guts
Nature: Adamant (+Attack, -Sp.Atk)
- Flare Blitz (primary STAB — 195 eff. Atk, 180 base power)
- Superpower (coverage)
- Quick Attack (priority revenge killer)
- Bite (Dark coverage)
```

```
Flareon @ Life Orb
Ability: Reckless
Nature: Jolly (+Speed, -Sp.Atk)
- Flare Blitz (Reckless boost: 144 base power)
- Superpower (coverage)
- Quick Attack (priority)
- Will-O-Wisp (support)
```

---

## Espeon (#196) — Magic Bounce Support

### Design Philosophy
Espeon is the **Psychic setup sweeper** with Magic Bounce as its primary identity. Magic Bounce reflects status moves, entry hazards, and screens back at the opponent — making Espeon a nightmare for stall teams. Calm Mind + Stored Power creates a snowballing threat that gets stronger with each boost.

### Stat Changes (BST: 530)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|-----------|--------|
| HP | 65 | 65 | — |
| ATK | 65 | 65 | — |
| DEF | 60 | 60 | — |
| SPA | 130 | 130 | — |
| SPD | 95 | 100 | +5 |
| SPE | 110 | 110 | — |
| **BST** | **525** | **530** | **+5** |

### Abilities
- **Ability 1: Magic Bounce** — Reflects status/hazard/debuff moves back at the user
- **Ability 2: Synchronize** — Spreads burn/poison/paralysis to the attacker
- **Hidden: Inner Focus** — Prevents flinching; reliable in fast-paced battles

### Magic Bounce: What It Reflects
- Stealth Rock, Spikes, Toxic Spikes ✅
- Toxic, Thunder Wave, Will-O-Wisp ✅
- Leech Seed, Sleep Powder ✅
- Taunt, Encore ✅

### Learnset

| Level | Move | Type | Category | Power | Purpose |
|-------|------|------|----------|-------|---------|
| 1 | Confusion | Psychic | Special | 50 | Early STAB |
| 1 | Tail Whip | Normal | Status | — | Debuff |
| 8 | Sand Attack | Normal | Status | — | Accuracy drop |
| 16 | Swift | Normal | Special | 60 | Coverage (never misses) |
| 23 | Calm Mind | Psychic | Status | — | +1 SpAtk/SpDef setup |
| 30 | Psychic | Psychic | Special | 90 | Main STAB |
| 36 | Morning Sun | Normal | Status | — | Recovery (heals 50-66% in sun) |
| 42 | Stored Power | Psychic | Special | 20+base | Scales with boosts (at +6 SpAtk: 260 power!) |
| 47 | Psych Up | Normal | Status | — | Copy opponent's stat boosts |
| 52 | Future Sight | Psychic | Special | 120 | Delayed nuke |

### Competitive Movesets

```
Espeon @ Twisted Spoon / Lum Berry
Ability: Magic Bounce
Nature: Timid (+Speed, -Attack)
- Calm Mind (setup)
- Stored Power (scales with CM boosts)
- Psychic (reliable STAB)
- Morning Sun (recovery)
```

---

## Umbreon (#197) — Defensive Wall

### Design Philosophy
Umbreon is the **unkillable wall** that wins through attrition. Prankster (Hidden Ability) gives priority to Wish, Toxic, Confuse Ray, and Mean Look — making it one of the most annoying defensive Pokemon in the game. 105 HP / 110 Def / 130 SpDef with Wish recovery and Foul Play for passive offense.

### Stat Changes (BST: 535)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|-----------|--------|
| HP | 95 | 105 | +10 |
| ATK | 65 | 65 | — |
| DEF | 110 | 110 | — |
| SPA | 60 | 60 | — |
| SPD | 130 | 130 | — |
| SPE | 65 | 65 | — |
| **BST** | **525** | **535** | **+10** |

### Abilities
- **Ability 1: Synchronize** — Spreads status conditions back to the attacker
- **Ability 2: Inner Focus** — Prevents flinching
- **Hidden: Prankster** — Status moves gain +1 priority (Wish, Toxic, Confuse Ray!)

### Prankster Abuse
With Prankster, these moves act before opponent's attacks:
- **Wish** (priority recovery — heal before taking damage!)
- **Toxic** (priority toxic — always poisons first!)
- **Confuse Ray** (priority confusion)
- **Mean Look** (priority trap!)

### Learnset

| Level | Move | Type | Category | Power | Purpose |
|-------|------|------|----------|-------|---------|
| 1 | Feint Attack | Dark | Physical | 60 | Never-miss Dark STAB |
| 1 | Tail Whip | Normal | Status | — | Debuff |
| 8 | Sand Attack | Normal | Status | — | Accuracy drop |
| 16 | Pursuit | Dark | Physical | 40 | Traps switching opponents |
| 23 | Wish | Normal | Status | — | Healing for self or partner |
| 30 | Foul Play | Dark | Physical | 95 | Uses opponent's Attack stat — punishes high-Atk threats |
| 36 | Confuse Ray | Ghost | Status | — | 50% confusion |
| 42 | Toxic | Poison | Status | — | Core stall move |
| 47 | Mean Look | Normal | Status | — | Prevent switching |
| 52 | Moonlight | Normal | Status | — | Recovery (50-66% in sun) |

### Competitive Movesets

```
Umbreon @ Leftovers
Ability: Synchronize / Prankster (HA)
Nature: Calm (+Sp.Def, -Attack)
- Wish (recovery)
- Toxic (stall tool)
- Foul Play (passive offense)
- Confuse Ray / Mean Look (disruption)
```

---

## Encounter Information

**Eevee Location:** Route 116 (near Rustboro City)
- Level range: 7-8
- Encounter rate: Rare (1 slot of 12)
- Rationale: Urban Pokemon near a city, fits the "sophisticated Pokemon for trainers in Rustboro" theme

**Evolution Methods:**
- Vaporeon: Water Stone
- Jolteon: Thunder Stone
- Flareon: Fire Stone
- Espeon: High friendship + level up during daytime
- Umbreon: High friendship + level up during nighttime

**Pre-Roxanne Stone Availability:** Water Stone, Thunder Stone, and Fire Stone are available before Roxanne via Devon Corp or rock smash. Espeon/Umbreon require friendship grinding.

---

## Status
✅ **Fully Implemented**
- Eevee: Stats buffed (60/60/50/50/65/65), Adaptability Ability 1, Baton Pass at L36
- Vaporeon: Defense/SpDef buffed (+5/+5), Scald + Aqua Ring + Acid Armor learnset
- Jolteon: Volt Switch at L16, Thunderbolt moved to L30, Discharge at L42
- Flareon: Speed buffed to 80, Guts Ability 1, Reckless HA, Flare Blitz at L23, Superpower at L30
- Espeon: SpDef buffed (+5), Magic Bounce Ability 1, Calm Mind + Stored Power learnset
- Umbreon: HP buffed to 105, Prankster HA, Wish + Foul Play + Toxic learnset
- Eevee added to Route 116 encounters (L7-8, rare slot)
