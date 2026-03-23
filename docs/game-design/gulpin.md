---
name: Gulpin/Swalot
dex_number: 316/317
status: designed
ability: Simple
role: Stockpile Fortress
ideal_items: Leftovers, Black Sludge, Sitrus Berry
evolution_line: [Gulpin, Swalot]
---

# Gulpin/Swalot - Rebalance Notes

## Design Philosophy

Swalot is the Stockpile Fortress — a Pokemon that uses Simple to double every Stockpile buff, then decides whether to cash in with a full heal (Swallow), a 300 BP physical nuke (Spit Up), or a 260 BP continuous special attacker (Stored Power). The player faces a meaningful decision each turn: keep stacking, cash out for damage, or save yourself with a full heal.

Simple doubles all stat changes, so 3 Stockpiles = +6 Def and +6 SpD (12 total stat stages). That's an impenetrable fortress. The payoffs:
- **Spit Up** at 3 stacks = 300 BP (one-shot most things)
- **Swallow** at 3 stacks = full heal (reset to do it again)
- **Stored Power** = 20 + (12 × 20) = **260 BP** every turn — a continuous STAB-scaled nuke that scales with every buff still active

The player discovers Stored Power as the hidden payoff: instead of a one-time Spit Up nuke, you can stay buffed at +6/+6 and fire 260 BP Stored Power repeatedly.

## Approved Design

**Ability: Simple** — All stat changes (both positive and negative) are doubled.

### The Three-Payoff System

| Payoff | Stacks | Effect | When to Use |
|--------|--------|--------|-------------|
| **Spit Up** | 3 | 300 BP special nuke | When you need to finish something NOW |
| **Swallow** | 3 | Full HP heal | When you need to survive and reset |
| **Stored Power** | 3 (active) | 260 BP special every turn | When you're safe behind +6/+6 and want sustained damage |

**The Math:**
- Stockpile 1: +1 Def / +1 SpD → Simple doubles → **+2 Def / +2 SpD**
- Stockpile 2: +1 Def / +1 SpD → Simple doubles → **+4 Def / +4 SpD**
- Stockpile 3: +1 Def / +1 SpD → Simple doubles → **+6 Def / +6 SpD** (max)
- Total stat stages = 12
- Stored Power = 20 + (12 × 20) = **260 BP**

### Why Simple Over the Other Options?

Three options were evaluated:

**Option 1 (original): Gluttony — Setup Glutton.** Belly Drum + Sitrus Berry + Belch triple chain. Good synergy, but single-use and required a safe setup window. Interesting but fragile.

**Option 2: Corrosion — Universal Poisoner.** Toxic any type including Steel. Strong counter-meta niche but reactive and passive.

**⭐ Option 3 (APPROVED): Simple — The Stockpile Fortress.** The Stockpile/Swallow/Spit Up/Stored Power system gives the player a real decision tree every turn. The +6/+6 defensive fortress is nearly unkillable once set up, and the three distinct payoffs (nuke, heal, sustained damage) create genuine tactical depth. High HP (100+) is load-bearing — more bulk to absorb hits while stacking. 100% thematic: Swalot absorbs and stores everything.

## Stat Changes

### Gulpin

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | **75** | +5 |
| Atk | 43 | 43 | — |
| Def | 53 | 53 | — |
| SpA | 43 | **50** | +7 |
| SpD | 53 | 53 | — |
| Spe | 40 | 40 | — |
| **BST** | **302** | **314** | **+12** |

### Swalot

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 100 | **105** | +5 |
| Atk | 73 | 65 | -8 |
| Def | 83 | 83 | — |
| SpA | 73 | **90** | +17 |
| SpD | 83 | 83 | — |
| Spe | 55 | 55 | — |
| **BST** | **467** | **481** | **+14** |

**Rationale:**
- **105 HP** — More HP = more turns to Stockpile = stronger Swallow healing = larger Spit Up.
- **90 SpA** — Both Spit Up and Stored Power are special moves. 90 SpA makes 260 BP Stored Power genuinely threatening. Not a glass cannon SpA — a respectable "earned your payoff" power level.
- **65 Atk** — Redistributed to SpA. Physical moves are not this Pokemon's game.
- **Defense stats unchanged** — Simple already effectively gives Swalot +6/+6 at 3 Stockpiles. The base 83/83 is fine — the buffs are the selling point, not the base.

## Learnset

### Gulpin

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Pound | 40 | Normal | Filler starter |
| 1 | Yawn | — | Normal | Early sleep disruption — creates safe Stockpile window |
| 5 | Poison Gas | — | Poison | Poison utility for early game |
| 10 | Amnesia | — | Psychic | Early stat buff (doubled by Simple: +4 SpD in one use!) |
| 12 | **Stockpile** | — | Normal | Core setup move — begins the fortress |
| 16 | **Stored Power** | 20+ | Psychic | KEY PAYOFF: 260 BP after 3 stacks with Simple |
| 18 | **Swallow** | — | Normal | Full heal payoff — empty the stacks to survive |
| 20 | **Spit Up** | 100/200/300 | Normal | Damage payoff — nuke proportional to stacks |
| 24 | **Sludge** | 65 | Poison | Poison STAB for when you're not setting up |

### Swalot (continues from Gulpin, adds these)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 28 | **Sludge Bomb** | 90 | Poison | Better Poison STAB; 30% poison chance |
| 32 | **Body Slam** | 85 | Normal | Physical coverage; 30% paralysis |
| 36 | **Toxic** | — | Poison | Status for stall; synergizes with walls-up playstyle |
| 40 | **Shadow Ball** | 80 | Ghost | Coverage vs Psychic/Ghost that resist Poison |
| 44 | **Gunk Shot** | 120 | Poison | Nuke-level Poison STAB for physical cleanup |

### Key Move Interactions

**Stored Power — the hidden payoff:**
- At 3 Stockpiles with Simple: +6 Def / +6 SpD = 12 active stat stages
- Stored Power = 20 + (12 × 20) = **260 BP Psychic**
- Fires EVERY TURN while the boosts are active (unlike Spit Up which resets stacks)
- With 90 SpA, this hits like a freight train from behind a +6/+6 wall

**The decision tree at max stacks:**
1. **Stored Power** — Continuous 260 BP each turn. Stay walled, keep firing.
2. **Spit Up** — 300 BP one-time burst. Cash everything in; stacks reset.
3. **Swallow** — Full heal. Reset HP; stacks consumed. Then Stockpile again.

**Yawn + Stockpile synergy:**
- Yawn → opponent falls asleep next turn
- Stockpile twice while they sleep → +4/+4 (or more) without taking damage
- Wake-up turn: they're confused/panicking while you're already fortified

**Amnesia interaction:**
- Amnesia raises SpD by 2 → Simple doubles → **+4 SpD in one move**
- Stack before Stockpile for a different approach: SpD-first tanking
- Or use Amnesia + Stockpile for absurd SpD totals

## Ideal Items

1. **Leftovers** — Passive 1/16 HP per turn. This matters on a fortress that plans to spend 3-4 turns stacking. Free HP every turn you're setting up.
2. **Black Sludge** — Same as Leftovers but punishes Trick users (poisons them). Poison-type exclusive — thematic.
3. **Sitrus Berry** — Emergency button at 50% HP during setup. Buys one more turn to finish stacking.

## Core Strategy

### Route 110 Pickup (L12-20)

Gulpin found at L12-13 on Route 110. By L20, it should have Stockpile, Stored Power, Swallow, and Spit Up. This is a complete kit — a player who catches Gulpin at L12 and understands Simple will have a surprisingly competent fortress by the time they reach Mauville.

### The Setup Loop

1. **Turn 1:** Yawn the opponent (they sleep next turn)
2. **Turn 2:** Stockpile (opponent asleep — free +2/+2)
3. **Turn 3:** Stockpile again (still asleep — +4/+4)
4. **Turn 4:** They wake up. You're behind +4/+4 walls. Options:
   - Fire Stored Power (already 180 BP at 8 stat stages!)
   - Stockpile one more time (+6/+6 max)
5. **Turn 5+:** At max stacks, fire Stored Power (260 BP) every turn OR Spit Up for 300 BP OR Swallow for full heal

### When to Use Swalot

- **Slow, tanky opponents:** Swalot is the nightmare matchup for anything that can't OHKO it before stacks accumulate
- **Stall/status teams:** High SpD + Swallow + Toxic turns Swalot into a stall mirror
- **Mid-game pivot:** When the team needs a reliable defensive anchor that also punishes being underestimated
- **NOT vs fast special attackers:** Swalot's 55 Speed means it never goes first. Anything that can spam high-power special moves will prevent setup.

## Encounter Context

Gulpin found at L12-13 on Route 110 (grass, common). First appears around 3-4 hours into the game. At L12-13, it has Pound, Yawn, and Poison Gas — nothing scary. But Stockpile unlocks at L12, and by L16-20, a Gulpin that's been trained has the full Stockpile/Stored Power/Swallow/Spit Up kit.

The Trick House on Route 110 uses Gulpin in "The Boom Room" (Selfdestruct/Explosion gimmick) — but that's a trainer Gulpin serving a specific role. Wild Gulpin caught by the player evolves into something completely different.

Evolution at L26 is vanilla. By the time Swalot evolves, it should have all four payoff moves and be ready to use them.
