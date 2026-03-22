---
name: Aron / Lairon / Aggron
dex_number: 304
status: implemented
ability: Rock Head
role: Recoil-Free Physical Wall
ideal_items: Choice Band, Leftovers, Assault Vest
evolution_line: [Aron, Lairon, Aggron]
---

# Aron / Lairon / Aggron — Design Doc

## Design Philosophy

Aggron is a slow physical wall that uses Rock Head to fire off recoil moves for free. Every recoil move in the kit — Take Down, Double-Edge, Head Smash — deals full damage with zero HP cost. The endgame payoff is Head Smash at 150 BP Rock STAB with no recoil penalty, one of the hardest-hitting moves in the game available without drawback. The build rewards patience: you wait out the slow evolution grind to L36, then you get a tank that hits like a freight train.

This is the "every move benefits" pattern — Rock Head turns Take Down into a free 90 BP move, Double-Edge into a free 120 BP move, and Head Smash into a free 150 BP STAB nuke. Pick any move, it's free.

## Ability Changes

- **Ability 1: Rock Head** — Prevents all recoil damage. Core identity: Take Down, Double-Edge, and Head Smash all deal zero recoil. The entire learnset is built around this.
- **Ability 2: Sturdy** — Survives a KO hit at full HP. Safety net for switch-ins. Pairs well with Aggron's massive 180 Defense.
- **Hidden: Filter** — Reduces super effective damage by 25%. Patches the 4x Fighting/Ground weakness: a 4x hit becomes effectively 3x. Defensive alternative to Rock Head for players who want a wall over an attacker.

## Stat Changes

### Aron

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | 50 | — |
| Atk | 70 | **75** | +5 |
| Def | 100 | 100 | — |
| SpA | 40 | 40 | — |
| SpD | 40 | 40 | — |
| Spe | 30 | **35** | +5 |
| **BST** | **330** | **340** | **+10** |

Small buffs to Atk and Speed so Take Down at L8 feels rewarding immediately. Aron hits like it should at L10-12 in Rusturf Tunnel.

### Lairon

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | — |
| Atk | 90 | **95** | +5 |
| Def | 140 | 140 | — |
| SpA | 50 | 50 | — |
| SpD | 50 | 50 | — |
| Spe | 40 | **45** | +5 |
| **BST** | **430** | **440** | **+10** |

Consistent upgrade from Aron. Iron Head at L21 and Double-Edge at L27 both hit harder.

### Aggron

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | **80** | +10 |
| Atk | 110 | 110 | — |
| Def | 180 | 180 | — |
| SpA | 60 | 60 | — |
| SpD | 60 | **70** | +10 |
| Spe | 50 | 50 | — |
| **BST** | **530** | **550** | **+20** |

HP and SpD buffs make Aggron a more reliable wall. 60 SpD was an extreme weakness — 70 is still exploitable but less instantly lethal. 180 Def remains the defining stat.

## Learnset

### Aron (evolves at L16)

| Level | Move | BP | Type | Rock Head? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Tackle | 40 | Normal | No | Basic physical |
| 1 | Harden | — | Normal | — | Defense utility |
| 8 | **Take Down** | 90 | Normal | **Yes → 90 free** | First synergy. No recoil! Build turns on. |
| 12 | **Rock Throw** | 50 | Rock | No | Rock STAB comes online |
| 16 | **Metal Claw** | 50 | Steel | No | Evolution reward, Steel STAB |

### Lairon (evolves from Aron at L16, evolves into Aggron at L36)

| Level | Move | BP | Type | Rock Head? | Purpose |
|-------|------|----|------|-----------|---------|
| 21 | **Iron Head** | 80 | Steel | No | Steel STAB + 30% flinch |
| 27 | **Double-Edge** | 120 | Normal | **Yes → 120 free** | Power spike. 120 BP, no recoil. |
| 33 | **Earthquake** | 100 | Ground | No | Ground coverage — hits Fighting/Ground threats |

### Aggron (evolves from Lairon at L36)

| Level | Move | BP | Type | Rock Head? | Purpose |
|-------|------|----|------|-----------|---------|
| 36 | **Rock Polish** | — | Rock | No | +2 Speed setup — 50→100 Spe, enables sweeping |
| 42 | **Stone Edge** | 100 | Rock | No | Rock STAB, high crit ratio |
| 48 | **Head Smash** | 150 | Rock | **Yes → 150 free** | Endgame payoff. 150 BP STAB, zero recoil. |

## The Math

With 110 Atk and Rock Head:

| Move | BP | Rock Head | STAB | Effective |
|------|----|-----------|------|-----------|
| **Head Smash** | 150 | Free recoil | ×1.5 | **225 effective** |
| **Stone Edge** | 100 | — | ×1.5 | **150 effective** |
| **Double-Edge** | 120 | Free recoil | — | **120 effective** |
| **Iron Head** | 80 | — | ×1.5 | **120 effective** |
| **Take Down** | 90 | Free recoil | — | **90 effective** |
| **Earthquake** | 100 | — | — | **100 effective** |

**Choice Band Head Smash:** 150 BP STAB off 165 Atk (110 × 1.5 Band). This is nuclear.

**Rock Polish sweep:** After +2 Speed, Aggron hits 100 Spe — outspeeds most mid-game threats. Head Smash at 150 BP on a "fast" Aggron is a genuine lategame threat.

**Coverage logic:**
- Rock STAB (Head Smash/Stone Edge): hits Flying, Fire, Ice, Bug
- Steel STAB (Iron Head): hits Ice, Rock, Fairy
- Ground coverage (Earthquake): hits Fire, Poison, Rock, Steel — the Fighting/Steel checks
- Double-Edge: neutral coverage

**Optimal 4-move sets:**
- **Wall:** Iron Head / Double-Edge / Earthquake / Rock Polish (setup into sweep)
- **Choice Band:** Head Smash / Iron Head / Earthquake / Double-Edge
- **Endgame:** Head Smash / Stone Edge / Earthquake / Iron Head

## Ideal Items

1. **Choice Band** — 110 Atk × 1.5 = 165. Head Smash at 150 BP STAB off 165 Atk is one of the highest raw-damage outputs in the game. Being locked is fine — Aggron switches into the right matchup and nukes.
2. **Leftovers** — Passive recovery. Aggron has no healing moves, and with 180 Def it can tank physical hits repeatedly. Leftovers extends how long it can wall.
3. **Assault Vest** — Patches SpD (70→105 effective). Turns Aggron into a two-way wall that can take both physical and special hits. Limits you to attacking moves, but Aggron's kit is all attacking moves anyway.

## Core Strategy

### The Recoil-Free Tank
1. Aggron switches into a physical attacker (180 Def absorbs the hit)
2. Fire Head Smash for 150 BP Rock STAB with zero recoil
3. Repeat — no HP loss from recoil means Aggron stays healthy

### The Setup Sweeper
1. Switch in on a resisted move (Steel/Rock has 10 resistances)
2. Rock Polish → +2 Speed (50 → 100)
3. Head Smash OHKOs anything that doesn't resist it

### When to Use Aggron
- **Physical tank:** 180 Def walls nearly anything physical
- **Nuke on switch:** Choice Band Head Smash forces immediate responses
- **Late-game cleanup:** Rock Polish turns it from slow wall to fast sweeper
- **NOT a special wall.** 70 SpD (80 HP) means any STAB Water/Fighting special move threatens it. Bring in on physical attackers, not special ones.

## Team Synergy

- Pairs with Pokemon that cover Fighting (Flying types, Psychic types, Ghost types) — Aggron's biggest threat
- Pairs with Pokemon that cover Water/Ground special attacks (Grass types, Water absorb users)
- Complements fast attackers — Aggron tanks hits while faster teammates clean up
- Stealth Rock setters benefit from Aggron's resistance to Rock (takes 0.25x from Stealth Rock entry)

## Matchup Analysis

**Strong vs:** Flying (Rock/Steel STAB), Ice (Rock/Steel STAB), Dragon (Iron Head), Normal (180 Def absorbs it), Psychic (180 Def + Steel resistance), Bug, Poison, Grass, Rock (10 resistances total)

**Weak vs:** Fighting (4x — KO if they hit first), Ground (4x — Earthquake is lethal), Water (2x special, bypasses 180 Def), Fire (2x — bypasses 180 Def on special)

**Key vulnerability:** 70 SpD means STAB Water/Fighting/Ground **special** moves are threatening even with 80 HP. Rock Polish + Head Smash is the offensive answer; Assault Vest is the defensive answer.

**Filter hidden ability note:** Reduces 4x hits to effectively 3x. A Fighting STAB move at 2x becomes 1.5x, a 4x becomes 3x — survivable with 180 Def investment.
