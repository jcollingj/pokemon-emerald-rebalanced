---
name: Corsola
dex_number: 222
status: designed
ability: Regenerator
role: Hazard Support Pivot
ideal_items: Leftovers, Rocky Helmet, Eject Button
evolution_line: [Corsola]
---

# Corsola - Rebalance Notes

## Design Philosophy
Corsola is a team support pivot that uses Regenerator to repeatedly switch in, set hazards, spread status, and heal passively. It's the coral reef — the ecosystem foundation that makes everything around it thrive. It doesn't kill things. It annoys them, chips them down with hazards and burns, then pivots out to heal a third of its HP for free. It comes back and does it again. And again. Corsola is the Pokemon your opponent never wants to see switch in for the third time.

This fills a niche no other designed Pokemon covers: **a dedicated hazard-setting support pivot**. Pelipper sets rain. Gardevoir pivots for offense. Corsola pivots for control — Stealth Rock, Scald burns, Recover, and infinite Regenerator healing make it a persistent nuisance that enables its teammates rather than fighting for itself.

## Why Regenerator?

Corsola already has Regenerator as its hidden ability in vanilla — we're just promoting it to Ability 1 and building the entire kit around it.

The synergy is clean: Regenerator rewards switching. Switching rewards having utility moves worth using each time you come in. Stealth Rock + Scald + Recover + a pivot move means every switch-in is productive, and every switch-out heals you. The loop never ends.

This is a **defensive layering** pattern like Swampert's Rain Dish kit, but instead of weather-dependent, it's self-sufficient. Corsola doesn't need rain, sand, or any setup. It just needs to exist and keep switching.

## Ability Changes

- **Ability 1: Regenerator** — Heals 33% max HP on switch-out. Core identity — enables infinite pivoting.
- **Ability 2: Natural Cure** — Cures status on switch-out. Backup option that also rewards switching.
- **Hidden: Rough Skin** — Deals 1/8 damage to attackers on contact. Punishes physical attackers who try to break through.

## Stat Changes

### Corsola (single-stage)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 65 | **85** | +20 |
| Atk | 55 | 55 | - |
| Def | 95 | **100** | +5 |
| SpA | 65 | **75** | +10 |
| SpD | 95 | **100** | +5 |
| Spe | 35 | 35 | - |
| **BST** | **410** | **450** | **+40** |

**Why these changes:**
- **85 HP** is critical. Regenerator heals a percentage of max HP, so higher HP = more healing per switch. At 85 HP, Regenerator restores roughly 28 HP per switch-out — that's substantial.
- **100/100 defenses** make it a true mixed wall. It can take hits from both sides, which is what a pivot needs — you don't always get to choose what attacks you.
- **75 SpA** is enough for Scald to threaten burns and chip damage. Corsola isn't trying to sweep — it just needs enough bite that opponents can't completely ignore it.
- **35 Speed** stays rock bottom. Corsola is slow. That's fine — it's a tank. It moves last, takes the hit, does its job, switches out, heals. Slow speed also means it almost always takes a hit before pivoting, which is actually an advantage: it absorbs damage for its teammate.

## Learnset

| Level | Move | Type | BP | Purpose |
|-------|------|------|----|---------|
| 1 | Tackle | Normal | 40 | Basic attack |
| 1 | Harden | Normal | — | Early defense |
| 8 | **Scald** | Water | 80 | First synergy move — 30% burn punishes physical attackers. STAB. The bread-and-butter. |
| 12 | **Stealth Rock** | Rock | — | Second synergy move — hazard setting is THE reason to use Corsola. Build turns on here. |
| 16 | **Recover** | Normal | — | Reliable healing stacks with Regenerator for near-unkillable longevity |
| 21 | Ancient Power | Rock | 60 | Rock STAB, 10% all-stat boost is a fun bonus |
| 27 | **Toxic** | Poison | — | Cripples walls and tanks that try to stall Corsola out |
| 33 | Mirror Coat | Psychic | — | Punishes special attackers who think they can 2HKO |
| 36 | **Power Gem** | Rock | 80 | Strong special Rock STAB — leverages the 75 SpA |
| 42 | Earth Power | Ground | 90 | Coverage for Steel and Electric types that resist Water/Rock |
| 48 | **Liquidation** | Water | 85 | Strongest Water STAB — 20% defense drop chance adds utility |

### Key TM/Tutor Moves
- **Flip Turn** (Water, 60 BP, pivots out) — THE move for Regenerator. Attack + switch = free healing. This is what makes the build sing.
- **Knock Off** (Dark, 65 BP) — Removes items from opponents, crippling Leftovers/Choice users
- **Ice Beam** (Ice, 90 BP) — Coverage for Grass and Dragon types
- **Calm Mind** (Psychic) — Alternative wincon for a bulky setup variant
- **Light Screen / Reflect** — Team support screens

## The Math

### Regenerator Value
- 85 HP = roughly 310-340 HP at level 50 depending on EVs/IVs
- Regenerator heals 33% = ~103-112 HP per switch
- In a typical game, Corsola switches in 3-4 times = 310-450 free HP healed
- That's effectively **doubling its total HP pool** over the course of a battle

### Scald Burn Math
- Scald: 80 BP x 1.5 STAB = 120 effective
- 30% burn chance means over 3 Scalds, there's a 66% chance of inflicting burn
- Burn halves physical attack AND deals 1/8 max HP per turn
- A burned physical attacker attacking into 100 Def Corsola is doing almost nothing

### Flip Turn Pivot Loop
- Flip Turn: 60 BP x 1.5 STAB = 90 effective
- Corsola switches out after hitting → heals 33% HP
- Comes back later → Stealth Rock is already up → Scald for burns → Flip Turn out → heal again
- The opponent is taking chip damage every time they switch (Stealth Rock) while Corsola heals for free

### Rocky Helmet Punish
- If running Rocky Helmet: contact moves deal 1/6 max HP back to attacker
- Combined with Scald burns: physical attackers lose HP from Rocky Helmet + burn residual
- With Rough Skin (hidden ability): 1/8 + 1/6 = ~29% per contact. Brutal.

## Ideal Items

1. **Leftovers** — Passive healing stacks with Regenerator. Between switching out (33%) and Leftovers ticks (6.25% per turn), Corsola is perpetually topped off. The consistent, reliable choice.
2. **Rocky Helmet** — Punishes physical contact moves with 1/6 recoil. Combined with Scald burns, physical attackers destroy themselves attacking Corsola. Aggressive support.
3. **Eject Button** — When hit, Corsola auto-switches out, triggering Regenerator immediately. Essentially turns the first hit Corsola takes into free healing + a free switch for a teammate. Excellent for getting hazards up and bouncing.

## Core Strategy

### The Pivot Loop
1. Lead Corsola or bring it in on a resisted hit (Water, Normal, Fire, Ice, Flying, Poison)
2. Turn 1: **Stealth Rock** — get hazards up immediately
3. Turn 2: **Scald** — fish for burns on whatever switches in. 30% is generous over multiple attempts
4. When Corsola is at ~50% HP: **Flip Turn** out to a teammate, heal 33% on the way out
5. Later: bring Corsola back in. It's at ~83% HP. Scald again. Flip Turn again. Heal again.
6. Repeat until the opponent's team is chipped to death by Stealth Rock + burns + gradual pressure

### The Ideal Moveset
```
Corsola @ Leftovers
Ability: Regenerator
- Stealth Rock
- Scald
- Flip Turn
- Recover
```

Stealth Rock for hazards. Scald for damage + burns. Flip Turn to pivot and trigger Regenerator. Recover for when you need to stay in. Every move serves the strategy.

### Alternative Sets
```
Corsola @ Rocky Helmet
Ability: Regenerator
- Stealth Rock
- Scald
- Toxic
- Recover
```
More stall-oriented. Toxic cripples bulky Pokemon that Scald can't burn (Fire types, Guts users). Rocky Helmet punishes contact moves.

## Corsola vs The Other Rock Types

| | Corsola | Cradily | Probopass |
|---|---------|---------|-----------|
| **Role** | Hazard support pivot | Special drain tank | Sand fortress |
| **Ability** | Regenerator (heal on switch) | Storm Drain (absorb Water) | Sand Force (1.3x in sand) |
| **Typing** | Water/Rock | Rock/Grass | Rock/Steel |
| **Speed** | 35 (slow) | 43 (slow) | 20 (slowest) |
| **Bulk** | 85/100/100 (mixed) | High HP, SpD focused | High Def, SpD focused |
| **Damage** | Low (support) | Moderate (drain moves) | Moderate (sand boosted) |
| **Niche** | Sets hazards, pivots, burns | Absorbs Water, never dies | Sand sweeper/wall hybrid |
| **Fantasy** | "I never go away" | "You can't kill me" | "Sandstorm empowers me" |

Corsola is the glue Pokemon. It doesn't win by itself — it wins by making everything else on the team better. Stealth Rock punishes switches, Scald burns cripple physical attackers, and Regenerator means Corsola is always healthy enough to do it again.

## Team Synergy

- **Rain teams** — Corsola resists Fire (which threatens Ludicolo/Breloom). Stealth Rock punishes opponents switching to counter rain sweepers. Flip Turn brings in a rain sweeper safely.
- **Fearow/Swellow** — These glass cannons love Stealth Rock softening opponents before they come in to nuke. Corsola takes Rock/Electric hits they can't.
- **Blaziken** — Corsola covers Water (immune via typing), sets rocks, burns physical walls that block Blaziken. Blaziken covers Grass/Electric that threaten Corsola.
- **Sceptile** — Corsola handles Ice/Fire/Flying that threaten Sceptile. Sceptile handles Grass/Electric that threaten Corsola.

## Matchup Analysis

**Strong vs:** Fire, Ice, Normal, Flying, Poison (resists via typing). Physical attackers in general (Scald burns + 100 Def). Hyper offense teams (Stealth Rock + pivot loop bleeds them).
**Weak vs:** Grass (4x), Electric (2x), Ground (2x), Fighting (2x). Taunt shuts down the support set. Strong special Grass attackers like Sceptile delete it.
**Key vulnerability:** Corsola does almost no damage. If the opponent has a cleric or Rapid Spin user, Corsola's chip damage gets erased. It needs teammates that can actually close out games.

## Availability

Caught via Good Rod on Route 104. Available early-mid game, which is perfect — Stealth Rock + Regenerator gives the player a support backbone for the rest of the game. Pairs naturally with Pelipper (same route, rain setter) and Azumarill (same route, physical attacker) for a Water-heavy squad.
