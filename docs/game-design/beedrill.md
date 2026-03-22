---
name: Beedrill
dex_number: 15
status: designed
ability: Merciless
role: Poison Setup Sweeper
evolution_line: [Weedle, Kakuna, Beedrill]
ideal_items: Loaded Dice, Scope Lens, Choice Band
---

# Weedle / Kakuna / Beedrill - Rebalance Notes

## Design Philosophy

Beedrill is a **Poison Setup Sweeper** — it poisons the opponent with Poison Powder, then Merciless turns every move into a guaranteed critical hit. The payoff is Pin Missile: with Loaded Dice guaranteeing 4-5 hits and Merciless making every hit a crit, Beedrill lands 4-5 guaranteed crits in a single turn. That's the fantasy. Poison Powder → Pin Missile is one of the most explosive 2-turn combos in the early game.

The Weedle line appears on Bug Catcher teams on Route 102 and in Petalburg Woods, so players encounter it very early. The design makes it competitive and fun to use throughout the whole game — not just a cute early-game Bug type that gets boxed.

## Ability Changes

- **Ability 1: Merciless** — Moves always critical hit against poisoned targets. Core identity. Every move in the learnset is good; the moment the opponent is poisoned, every hit is a crit.
- **Ability 2: Sniper** — Critical hits deal 2.25× damage instead of 1.5×. Alt build: Focus Energy → guaranteed high crit rate → Sniper amplifies each one. Pairs with Scope Lens.
- **Hidden: Hustle** — Attack × 1.5, accuracy × 0.8. Raw power glass cannon build. No setup required; just hit hard and accept the misses.

## Stat Changes

### Weedle

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | **45** | +5 |
| Atk | 35 | **45** | +10 |
| Def | 30 | **35** | +5 |
| SpA | 20 | 20 | — |
| SpD | 20 | **25** | +5 |
| Spe | 50 | **60** | +10 |
| **BST** | **195** | **230** | **+35** |

Still fragile early-game caterpillar, but has just enough speed and attack to threaten Bug Catchers and not feel completely useless.

### Kakuna

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 45 | **50** | +5 |
| Atk | 25 | 25 | — |
| Def | 50 | **60** | +10 |
| SpA | 25 | 25 | — |
| SpD | 25 | **30** | +5 |
| Spe | 35 | 35 | — |
| **BST** | **205** | **225** | **+20** |

Kakuna is a cocoon. It just needs to survive 3 levels before Beedrill hatches. Buffed Defense gives it a fighting chance against repeated hits.

### Beedrill

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 65 | **75** | +10 |
| Atk | 90 | **115** | +25 |
| Def | 40 | 40 | — |
| SpA | 45 | 45 | — |
| SpD | 80 | 80 | — |
| Spe | 75 | **105** | +30 |
| **BST** | **395** | **460** | **+65** |

115 Attack + 105 Speed + Merciless guaranteed crits = genuinely scary sweeper. Beedrill is still frail (40 Def), so it needs to hit first and hit hard. The speed buff makes it faster than most mid-game threats, letting it execute the Poison Powder → Pin Missile combo before it gets knocked out.

## Learnset

### Weedle (evolves to Kakuna at L7)

| Level | Move | BP | Type | Notes |
|-------|------|----|------|-------|
| 1 | Poison Sting | 15 | Poison | STAB intro — 30% poison chance sets up the Merciless combo |
| 1 | String Shot | — | Normal | Slows opponents — creates setup windows |
| 5 | **Poison Powder** | — | Poison | **First synergy move** — this is when the build turns on. Weedle can now set up the Merciless combo at L5. |

Weedle evolves at L7, so the learnset is intentionally short. Poison Powder at L5 means it contributes meaningfully before evolving, and carries the move into Kakuna and Beedrill.

### Kakuna (evolves to Beedrill at L10)

| Level | Move | BP | Type | Notes |
|-------|------|----|------|-------|
| 7 | Harden | — | Normal | Cocoon phase. One defensive tool while waiting to hatch. |

Kakuna can't really fight. Its job is to survive until L10.

### Beedrill (evolves from Kakuna at L10)

| Level | Move | BP | Type | Merciless? | Notes |
|-------|------|----|------|-----------|-------|
| 10 | Fury Attack | 15×2-5 | Normal | Yes (if poisoned) | Multi-hit evolution welcome. Builds crit combos. |
| 10 | Twineedle | 25×2 | Bug | Yes (if poisoned) | STAB, 2 guaranteed crits vs poisoned. 30% poison per hit stacks. |
| 12 | **Pin Missile** | 25×2-5 | Bug | **Yes → 5 crits** | **The signature move.** With Loaded Dice: 5 guaranteed crits = 187 effective STAB power. Insane. |
| 16 | Agility | — | Psychic | — | Speed double — outrun everything mid-game after setup |
| 21 | **Poison Jab** | 80 | Poison | **Yes → 120 effective** | Reliable STAB that poisons on contact (30%). Lead with this if Poison Powder misses. |
| 27 | **X-Scissor** | 80 | Bug | **Yes → 120 effective** | Strong Bug STAB when you need reliable damage instead of RNG multi-hit |
| 33 | U-Turn | 70 | Bug | Yes (if poisoned) | Pivot out after poisoning — come back later for guaranteed crits |
| 36 | Swords Dance | — | Normal | — | +2 Attack multiplier. Swords Dance → Pin Missile = 5 crits off massive Attack |
| 42 | Fell Stinger | 50 | Bug | Yes (if poisoned) | +3 Attack boost on KO. Snowball sweep if you get a kill. |
| 48 | Toxic Spikes | — | Poison | — | Passive hazard poisoning — automatically sets up Merciless for future switchins |

## The Math

With 115 Atk + Merciless (1.5× on crits) vs a poisoned target:

| Move | BP | Crit? | STAB | Effective | Notes |
|------|----|-------|------|-----------|-------|
| **Pin Missile (5 hits)** | 25×5 | ×1.5 | ×1.5 | **281** | Requires Loaded Dice for guaranteed 5 hits |
| **Pin Missile (4 hits)** | 25×4 | ×1.5 | ×1.5 | **225** | Loaded Dice floor |
| **Poison Jab** | 80 | ×1.5 | ×1.5 | **180** | Reliable, no RNG |
| **X-Scissor** | 80 | ×1.5 | ×1.5 | **180** | Reliable Bug STAB |
| **Twineedle (2 hits)** | 25×2 | ×1.5 | ×1.5 | **112** | Hits twice, can stack poison |
| Fury Attack (5 hits) | 15×5 | ×1.5 | — | **112** | Only Normal type, no STAB |

**Swords Dance Beedrill math:**
After +2 Attack (172 effective Atk):
- Pin Missile (5 hits): 172 Atk × 25×5 BP × 1.5 (crit) × 1.5 (STAB) = **equivalent to 590 base-power STAB move**. Basically nothing survives.

**Loaded Dice is key:** Without it, Pin Missile averages 3.17 hits. With Loaded Dice, minimum 4 hits (floor raised to 4). The design depends on reliable multi-hit crits.

## Ideal Items

1. **Loaded Dice** — Raises minimum hits to 4, making Pin Missile consistently land 4-5 hits. Each hit is a guaranteed crit with Merciless. This is the core item that makes the build absurd. Never run Beedrill without it.
2. **Scope Lens** — +1 crit stage. Combined with Sniper (alt ability), crits deal 2.25×. Even with Merciless, Scope Lens makes Pin Missile hits against non-poisoned targets more likely to crit.
3. **Choice Band** — 115 × 1.5 = 172 Atk. For the player who just wants to Poison Jab/X-Scissor everything without setup. Locked into one move but Beedrill's coverage is solid enough.

## Core Strategy

### The Combo
1. Lead with Poison Powder → opponent is poisoned
2. Pin Missile → 4-5 guaranteed crits × 1.5× crit multiplier × 1.5× STAB = **~280 effective power in one move**
3. Most things die. If not, one more Pin Missile finishes the job.
4. If Poison Powder would miss (30% miss rate), use Poison Jab instead — 30% chance to poison on contact

### Setup Variant
1. Use Agility (+2 Speed) to ensure Beedrill is faster than everything
2. Swords Dance (+2 Attack) if you have time
3. Poison Powder → Pin Missile off boosted Attack = game over

### Pivot Variant
1. Toxic Spikes on switch-in — poisons everything on the opponent's side automatically
2. U-Turn out
3. Come back later when opponents are already poisoned → guaranteed Merciless crits without spending a turn on Poison Powder

### When to Use Beedrill
- Against bulky Pokemon that need to be critted down
- As a lead to quickly poison and sweep sweepers
- Pivot support (U-Turn) to bring in teammates safely after weakening the opponent
- NOT ideal against Steel types (immune to Poison) or Ghost types (Pin Missile doesn't hit Ghost)

## Comparisons vs Other Early-Game Bugs

| | Surskit | Wurmple → Beautifly | Beedrill |
|---|---------|---------------------|----------|
| **Role** | Speed/Utility | SpA Attacker | Physical Crit Sweeper |
| **Ability** | Swift Swim | Compound Eyes | Merciless |
| **Niche** | Rain team support | Compound Eyes accuracy | Guaranteed crits on poisoned |
| **Best Move** | Scald in rain | Hurricane (never misses) | Pin Missile (5 guaranteed crits) |
| **Fantasy** | "Rain makes me untouchable" | "I never miss" | "I crit 5 times in one turn" |

Each Bug fills a completely different slot. Beedrill is the pure damage dealer of the trio.

## Team Synergy

- **Pairs with:** Toxic Spikes setters (Roselia, Tentacool) — pre-poison opponents so Merciless is already active when Beedrill comes in
- **Pairs with:** Taillow/Fearow — both check Fighting types that threaten Beedrill; Beedrill covers Electric/Rock that threaten birds
- **Pairs with:** Bulky pivots (Swampert, Noctowl) — absorb hits while Beedrill is resting or setting up
- **Covers:** Grass, Psychic, Fairy types with Bug + Poison STAB
- **Covered by:** Fire and Flying resist threats; Rock types (don't run Beedrill into Geodude)

## Matchup Analysis

**Strong vs:** Grass types (4× weakness to Poison), Psychic types, Fairy types, other Bug types, Ground types (immune to Poison Jab's poison but still takes crit damage)

**Weak vs:** Fire (4× from Bug/Poison perspective), Flying (super effective), Psychic (super effective), Rock (takes ×2 from Bug), Steel (immune to Poison, resists Bug)

**Key vulnerability:** Beedrill is slow by default (105 Speed without Agility) compared to late-game threats. The Poison Powder setup turn is dangerous — if the opponent uses that turn to KO Beedrill, the whole combo fails. Use it on slower targets or after Agility setup.

**Steel immunity note:** Poison Jab deals 0 damage to Steel types (immune to Poison). Pin Missile and X-Scissor hit Steel for 0.5× resisted. Beedrill has no neutral coverage into Steel — bring a Fire, Ground, or Fighting teammate.
