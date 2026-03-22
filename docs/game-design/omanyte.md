---
name: Omanyte
dex_number: 138
status: designed
ability: Swift Swim
role: Rain Shell Smasher
ideal_items: White Herb, Damp Rock, Choice Specs
evolution_line: [Omanyte, Omastar]
---

# Omanyte / Omastar - Rebalance Notes

## Design Philosophy
Omastar is a rain-powered special sweeper that uses Swift Swim to fix its terrible Speed, then Shell Smash to become unstoppable. Rock/Water is a unique typing -- Water STAB gets rain boost while Rock STAB covers Flying and Fire types that try to check Water teams. The build follows the "condition -> payoff" pattern: set rain (via teammate or Rain Dance), Swift Swim doubles Speed, then Shell Smash pushes SpA and Spe to absurd levels. The tradeoff is clear -- Omastar is slow and dead without rain, but in rain it's one of the scariest special attackers in the game.

This line appears on Roxanne's gym team at L12 (Omanyte with Swift Swim, Water Gun/Ancient Power/Withdraw/Bite), previewing the rain synergy early for players.

## Ability Changes

- **Ability 1: Swift Swim** -- Speed doubles in rain. Core identity -- transforms Omastar from a slow fossil into a terrifying sweeper.
- **Ability 2: Shell Armor** -- Prevents critical hits. Defensive backup for a bulkier Assault Vest set.
- **Hidden: Weak Armor** -- When hit physically, -1 Def, +2 Spe. Risky alternative that doesn't need rain.

## Stat Changes

### Omanyte

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 35 | 35 | - |
| Atk | 40 | 40 | - |
| Def | 100 | 100 | - |
| SpA | 90 | 90 | - |
| SpD | 55 | 55 | - |
| Spe | 35 | 35 | - |
| **BST** | **355** | **355** | **0** |

No stat changes needed. 90 SpA is already excellent for a pre-evolution, and 100 Def is solid. The low 35 Speed is the whole point -- Swift Swim exists to fix it.

### Omastar

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 70 | 70 | - |
| Atk | 60 | 60 | - |
| Def | 125 | 125 | - |
| SpA | 115 | 115 | - |
| SpD | 70 | 70 | - |
| Spe | 55 | **60** | +5 |
| **BST** | **495** | **500** | **+5** |

Minimal touch. 115 SpA is already scary. 125 Def lets it survive a physical hit to set up Shell Smash. The +5 Speed takes it to 60, which means 120 in rain -- enough to outspeed most threats after Swift Swim, and after Shell Smash (+2 Spe) it reaches effectively 240 base, which is uncatchable. The BST bump is tiny because Omastar's stats are already well-distributed for this role.

## Learnset

### Omanyte (evolves at 40)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Water Gun | 40 | Water | Basic Water STAB |
| 1 | Withdraw | -- | Water | +1 Def, early bulk |
| 8 | **Ancient Power** | 60 | Rock | First synergy -- Rock STAB, 10% omni-boost. Build turns on with dual STAB. |
| 12 | **Bite** | 60 | Dark | Coverage for Psychic/Ghost. Also on Roxanne's Omanyte at L12. |
| 16 | **Rain Dance** | -- | Water | Evolution level. Sets its own rain -- Swift Swim activates. Self-sufficient. |

### Omastar (evolves from Omanyte at 40)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 16 | **Rain Dance** | -- | Water | Evolution reward -- now the build is fully online. |
| 21 | **Surf** | 90 | Water | Upgraded Water STAB. 90 BP x 1.5 STAB x 1.5 rain = 202 effective. |
| 27 | **Shell Smash** | -- | Normal | The big setup move. +2 Atk/SpA/Spe, -1 Def/SpD. Omastar's signature play. |
| 33 | **Ice Beam** | 90 | Ice | Coverage for Grass (4x weakness) and Dragon. |
| 36 | **Power Gem** | 80 | Rock | Special Rock STAB. Reliable, no drawbacks. |
| 42 | **Earth Power** | 90 | Ground | Coverage for Electric types that threaten it. |
| 48 | **Hydro Pump** | 110 | Water | Ultimate Water nuke. 110 x 1.5 STAB x 1.5 rain = 247 effective. |

## The Math

With 115 SpA + Swift Swim (2x Speed in rain) + rain (1.5x Water moves):

### Base (no setup, rain active)

| Move | BP | Rain | STAB | Effective |
|------|----|------|------|-----------|
| **Hydro Pump** | 110 | x1.5 | x1.5 | **247** |
| **Surf** | 90 | x1.5 | x1.5 | **202** |
| **Power Gem** | 80 | -- | x1.5 | **120** |
| **Ice Beam** | 90 | -- | -- | **90** |
| **Earth Power** | 90 | -- | -- | **90** |
| **Ancient Power** | 60 | -- | x1.5 | **90** |

### After Shell Smash (+2 SpA = 2x multiplier, rain active)

| Move | BP | Rain | STAB | Shell Smash | Effective |
|------|----|------|------|-------------|-----------|
| **Hydro Pump** | 110 | x1.5 | x1.5 | x2 | **494** |
| **Surf** | 90 | x1.5 | x1.5 | x2 | **405** |
| **Power Gem** | 80 | -- | x1.5 | x2 | **240** |
| **Ice Beam** | 90 | -- | -- | x2 | **180** |
| **Earth Power** | 90 | -- | -- | x2 | **180** |

**Shell Smash Surf in rain:** 405 effective BP off 115 base SpA (effectively 230 after +2). This OHKOs almost anything that doesn't resist Water.

**Speed math:**
- Base 60 Spe -> in rain (Swift Swim): 120 effective
- After Shell Smash (+2 Spe): 240 effective in rain
- Without rain, base 60 is slow. Omastar NEEDS rain to function.

**Coverage logic:**
- Water STAB in rain hits everything neutrally except Water/Dragon/Grass
- Ice Beam covers Grass (4x super effective on Grass/anything) and Dragon
- Earth Power covers Electric types and opposing Rock types
- Power Gem covers Fire, Flying, Ice, Bug
- Between rain-boosted Water + Ice + Ground + Rock, almost nothing is safe

## Ideal Items

1. **White Herb** -- Negates Shell Smash's -1 Def/-1 SpD penalty on first use. Omastar keeps its 125 Def intact while getting +2 SpA/Spe. This is the setup sweeper's dream -- all upside, no downside for one turn.
2. **Damp Rock** -- Extends rain from 5 turns to 8 turns. If Omastar is setting its own rain with Rain Dance, this gives 7 turns of Swift Swim + rain-boosted Water moves instead of 4. Best when Omastar is the rain setter rather than a teammate.
3. **Choice Specs** -- 1.5x SpA without needing to set up. Skip Shell Smash entirely -- just switch in during rain and nuke with 172 effective SpA. Surf in rain at 202 effective BP off 172 SpA is immediately threatening. For players who don't want to spend a turn setting up.

## Core Strategy

### The Rain Smash
1. Rain is set (by teammate's Drizzle/Rain Dance, or Omastar's own Rain Dance)
2. Swift Swim activates -- Omastar goes from 60 Speed to 120 effective. Now it outspeeds most threats.
3. Shell Smash -- +2 SpA, +2 Spe, -1 Def, -1 SpD. SpA is now effectively 230, Speed is 240 in rain.
4. Surf/Hydro Pump in rain -- 405/494 effective BP. One-shots everything that doesn't resist Water.
5. Ice Beam for Grass types, Earth Power for Electric types. Nothing walls this.

### The No-Setup Set
- Choice Specs + Swift Swim in rain
- No setup needed, just switch in and fire off Surf/Hydro Pump
- 172 effective SpA with rain-boosted Water moves is immediately dangerous
- Use when Shell Smash is too risky (opponent has priority, Omastar can't afford -1 Def)

### When to Use Omastar
- **Rain sweeper:** The primary role. Set rain, Shell Smash, sweep.
- **Late-game cleaner:** If the opponent's team is weakened, Shell Smash + Swift Swim finishes the game.
- **Wallbreaker:** Choice Specs in rain breaks through special walls with raw power.
- **NOT without rain.** 60 Speed is awful. Without rain, Omastar gets outsped by everything and dies before it can do anything.

## Team Synergy

- **Rain setters are mandatory.** Pelipper (Drizzle), Swampert (Rain Dance), or any teammate with Rain Dance. Omastar CAN self-set with Rain Dance, but that costs a moveslot and a turn.
- **Pairs with physical attackers** -- after Omastar breaks special walls, physical sweepers clean up. Omastar draws special hits, physical partners draw physical hits.
- **Covers Fire/Rock/Ground** that threaten Steel types on the team.
- **Grass types are the biggest threat** -- pair with something that handles Grass (Fire type, Poison type, Flying type).
- **Electric types threaten it** -- pair with a Ground type that absorbs Electric moves (Swampert is perfect -- it also sets rain).
- **Priority users on the team** help clean up what Omastar weakens, since rain turns can be limited.

## Matchup Analysis

**Strong vs:** Fire (Water STAB + rain), Rock (Water/Ground coverage), Ground (Water STAB), Steel (Earth Power + rain Water), Flying (Power Gem + Ice Beam), Ice (Water STAB), Bug (Power Gem).
**Weak vs:** Grass (4x super effective, even Ice Beam might not save it if they're fast/bulky), Electric (super effective, fast), opposing Water types (resist its main STAB, rain helps them too), specially bulky Pokemon like Blissey.
**Key vulnerability:** Completely rain-dependent. If rain expires or is overwritten by sun, Omastar loses Swift Swim speed AND the 1.5x Water boost. It becomes a sitting duck with 60 Speed. Also, Shell Smash drops defenses -- priority moves like Mach Punch or Aqua Jet can pick off a -1 Def Omastar before it attacks.
