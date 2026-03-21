---
name: Corphish
dex_number: 341
status: designed
ability: Sheer Force
role: Setup Bruiser
ideal_items: Life Orb, Choice Band, Sitrus Berry
evolution_line: [Corphish, Crawdaunt]
---

# Corphish / Crawdaunt - Rebalance Notes

## Design Philosophy
Crawdaunt is a slow, hard-hitting setup bruiser that uses Sheer Force to squeeze extra damage out of moves with secondary effects — then patches its low Speed with Aqua Jet. The key interaction: **Life Orb + Sheer Force skips the recoil on boosted moves**, giving Crawdaunt a free 1.69x multiplier (1.3x Sheer Force x 1.3x Life Orb) with zero HP cost. Swords Dance turns this into a sweeper that hits like a freight train and can't be worn down by its own item.

This is the "condition -> payoff" pattern. Swords Dance is the setup, Sheer Force + Life Orb is the engine, Aqua Jet is the speed patch. The player executes a plan: set up, then steamroll.

### Crawdaunt vs Sharpedo — Same Type, Opposite Fantasy

Both are Water/Dark physical attackers. That's where the similarity ends:

| | Sharpedo | Crawdaunt |
|---|----------|-----------|
| **Speed** | 95 (fast) | 55 (slow) |
| **Bulk** | 70/40/40 (paper) | 63/85/55 (moderate) |
| **Ability** | Rough Skin / Speed Boost | Sheer Force |
| **Fantasy** | "I outspeed and kill before they move" | "I set up, then nothing stops me" |
| **Longevity** | 1-2 turns, dies fast | 3-4 turns with Life Orb (no recoil) |
| **Item** | Life Orb (takes recoil) | Life Orb (no recoil!) |
| **Priority** | None needed (fast) | Aqua Jet (patches Speed) |
| **Playstyle** | Hit-and-run / revenge killer | Setup sweeper / wallbreaker |

Sharpedo is a glass cannon that goes first. Crawdaunt is a bruiser that goes second, tanks a hit, sets up, and then bulldozes through the rest of the team with boosted priority.

### Crawdaunt vs Armaldo — Claw Bros, Different Jobs

Both are slow physical attackers with claw themes. But their abilities push them in different directions:

| | Armaldo | Crawdaunt |
|---|---------|-----------|
| **Ability** | Tough Claws (1.3x contact) | Sheer Force (1.3x on secondary-effect moves) |
| **Setup** | No (straight wallbreaker) | Yes (Swords Dance) |
| **Priority** | Aqua Jet | Aqua Jet |
| **Best item** | Choice Band | Life Orb (no recoil) |
| **Fantasy** | "Every hit hurts" | "I get stronger each turn" |

Armaldo is the immediate wallbreaker. Crawdaunt is the snowball — weaker turn 1, stronger turns 2+.

## Type Changes

- **Corphish: Water -> Water/Dark** — Gets the Dark typing from the start. Thematically fits the "Ruffian" category. Mechanically gives it STAB Bite early.

## Ability Changes

- **Ability 1: Sheer Force** — Moves with secondary effects (flinch, stat drops, etc.) lose the effect but deal 1.3x damage. Core identity. Shapes every move choice — you pick Liquidation over Waterfall because the defense drop gets converted to damage.
- **Ability 2: Shell Armor** — Crits can't land. Defensive backup for players who want to tank.
- **Hidden: Adaptability** — 2x STAB instead of 1.5x. Alternative build that favors pure Water/Dark STAB over coverage.

### Why Sheer Force?

1. **It shapes the moveset.** You actively choose moves WITH secondary effects over ones without. Crabhammer (high crit = not boosted) vs Liquidation (Def drop = boosted). The player makes meaningful decisions.
2. **Life Orb synergy is the build's engine.** Sheer Force suppresses Life Orb recoil on boosted moves. This means Crawdaunt gets 1.3x (Sheer Force) x 1.3x (Life Orb) = 1.69x damage for FREE. On a 120 Atk Pokemon with Swords Dance, this is terrifying.
3. **It fits the lore.** Corphish/Crawdaunt are brutes — "once it grips prey with its large pincers, it will never let go." Sheer Force = no finesse, just raw power. Secondary effects don't matter when you hit hard enough.

## Stat Changes

### Corphish

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 43 | 43 | - |
| Atk | 80 | **85** | +5 |
| Def | 65 | 65 | - |
| SpA | 50 | 50 | - |
| SpD | 35 | 35 | - |
| Spe | 35 | 35 | - |
| **BST** | **308** | **313** | **+5** |

Small bump to Attack so Corphish hits hard enough to feel rewarding before evolution. 85 Atk with Sheer Force + Bite/Vise Grip makes it a legitimate threat for Route 102.

### Crawdaunt

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 63 | **73** | +10 |
| Atk | 120 | 120 | - |
| Def | 85 | **90** | +5 |
| SpA | 90 | **70** | -20 |
| SpD | 55 | **60** | +5 |
| Spe | 55 | 55 | - |
| **BST** | **468** | **468** | **0** |

No BST change — it's a stat redistribution. Crawdaunt doesn't use SpA, so those points go to HP and defenses. 73/90/60 bulk means it can actually take a hit to set up Swords Dance, which is the entire build. 120 Atk is already monstrous with Sheer Force + Life Orb; no need to buff it.

## Learnset

### Corphish (evolves at 30)

| Level | Move | BP | Type | Sheer Force? | Purpose |
|-------|------|----|------|-------------|---------|
| 1 | Vise Grip | 55 | Normal | No | Basic move — claw identity |
| 1 | Leer | — | Normal | — | Utility |
| 8 | **Bite** | 60 | Dark | **Yes (flinch) -> 78, STAB -> 117** | First synergy move. Build turns on. |
| 12 | **Rock Smash** | 40 | Fighting | **Yes (Def drop) -> 52** | Coverage + Sheer Force demo |
| 16 | **Bubble Beam** | 65 | Water | **Yes (Spe drop) -> 84, STAB -> 127** | Water STAB, Sheer Force boosted |
| 20 | Knock Off | 65 | Dark | No (no secondary consumed) | Utility + Dark STAB |
| 24 | Harden | — | Normal | — | Defensive utility before evo |
| 27 | **Crabhammer** | 100 | Water | No (high crit, not boosted) | Big Water STAB nuke |

### Crawdaunt (evolves from Corphish at 30)

| Level | Move | BP | Type | Sheer Force? | Purpose |
|-------|------|----|------|-------------|---------|
| 30 | **Aqua Jet** | 40 | Water | No | Evolution reward — +1 priority patches Speed |
| 33 | **Crunch** | 80 | Dark | **Yes (Def drop) -> 104, STAB -> 156** | Upgraded Bite. Dark STAB nuke. |
| 36 | **Swords Dance** | — | Normal | — | The setup move. This is what makes the build. |
| 39 | **Liquidation** | 85 | Water | **Yes (Def drop) -> 110, STAB -> 166** | Primary Water STAB — Sheer Force boosted. |
| 42 | **Night Slash** | 70 | Dark | No (high crit) | Alt Dark STAB for when you want crits over Sheer Force |
| 45 | **Rock Slide** | 75 | Rock | **Yes (flinch) -> 97** | Coverage for Flying/Bug/Ice |
| 48 | **Dragon Claw** | 80 | Dragon | No | Late-game Dragon coverage — hits most things neutrally |

### Move Choice Logic

Sheer Force creates actual decisions:
- **Liquidation vs Crabhammer:** Liquidation (85 BP -> 110 with Sheer Force, 166 with STAB) vs Crabhammer (100 BP, 150 STAB, high crit chance). Liquidation wins on average, Crabhammer wins on variance. The player picks based on playstyle.
- **Crunch vs Night Slash:** Crunch (80 -> 104 with Sheer Force, 156 STAB) vs Night Slash (70, 105 STAB, high crit). Same decision — consistency vs crit gambling.
- **Aqua Jet isn't boosted** but it doesn't need to be. After +2 Swords Dance, even unboosted Aqua Jet off 240 effective Atk kills weakened targets.

## The Math

### Base Crawdaunt: 120 Atk + Sheer Force (1.3x) + Life Orb (1.3x, no recoil)

| Move | BP | Sheer Force | STAB | Life Orb | Effective BP | Recoil? |
|------|----|-------------|------|----------|-------------|---------|
| **Liquidation** | 85 | x1.3 = 110 | x1.5 | x1.3 | **215** | **No** |
| **Crunch** | 80 | x1.3 = 104 | x1.5 | x1.3 | **203** | **No** |
| **Rock Slide** | 75 | x1.3 = 97 | — | x1.3 | **127** | **No** |
| **Crabhammer** | 100 | — | x1.5 | x1.3 | **195** | Yes (10%) |
| **Aqua Jet** | 40 | — | x1.5 | x1.3 | **78** | Yes (10%) |
| **Dragon Claw** | 80 | — | — | x1.3 | **104** | Yes (10%) |

### After Swords Dance (+2 Atk = 240 effective Atk)

| Move | Effective BP | Off 240 Atk | Notes |
|------|-------------|-------------|-------|
| **Liquidation** | 215 | OHKOs almost everything neutral | No recoil |
| **Crunch** | 203 | OHKOs Psychic/Ghost types | No recoil |
| **Rock Slide** | 127 | Solid coverage hit | No recoil |
| **Aqua Jet** | 78 | Priority finisher off 240 Atk | +1 priority |

**The recoil-free Life Orb is the build.** Crawdaunt gets to use Life Orb like it's free — Swords Dance once, then sweep with boosted priority and zero chip damage. Sharpedo with Life Orb kills itself in 3-4 attacks. Crawdaunt doesn't.

### Choice Band Alternative

120 Atk x 1.5 (Band) = 180 effective Atk. Liquidation at 110 Sheer Force BP + STAB = 165 effective BP off 180 Atk. Hits hard immediately without setup. Loses Swords Dance flexibility but doesn't need a setup turn.

## Ideal Items

1. **Life Orb** — THE item. Sheer Force + Life Orb = 1.69x damage, zero recoil on boosted moves. Crawdaunt can Swords Dance without worrying about chipping itself down. This is what makes the build unique — no other Water/Dark Pokemon gets free Life Orb.
2. **Choice Band** — 120 Atk x 1.5 = 180. Immediate wallbreaking power without setup. Pick the right move, hit hard. For players who don't want to set up.
3. **Sitrus Berry** — Restores HP after tanking a hit to Swords Dance. The safe option — ensures Crawdaunt survives to sweep even against stronger opponents.

## Core Strategy

### The Bruiser Setup
1. Switch Crawdaunt in on something it threatens (Psychic, Ghost, Fire types flee from Water/Dark STAB)
2. Swords Dance on the switch — 73/90/60 bulk survives most neutral hits
3. Liquidation (215 effective BP, no recoil) sweeps. Aqua Jet picks off faster threats.
4. Crawdaunt stays healthy because Life Orb recoil is suppressed. It can sweep 2-3 Pokemon.

### When to Use Crawdaunt
- **Mid-game wallbreaker:** Available via Good Rod on Route 102, strong by Lv 30 evolution
- **Late-game setup sweeper:** Swords Dance + Aqua Jet is a classic endgame win condition
- **Life Orb abuser:** The Sheer Force + Life Orb combo is unique in the game — no other Pokemon does this
- **NOT a lead.** Crawdaunt is slow and needs a turn to set up. Bring it in when you have momentum.

### Optimal 4-Move Sets
- **Sweeper:** Swords Dance / Liquidation / Crunch / Aqua Jet
- **Coverage:** Swords Dance / Liquidation / Crunch / Rock Slide
- **Band:** Liquidation / Crunch / Aqua Jet / Rock Slide
- **Crits build (Adaptability):** Crabhammer / Night Slash / Dragon Claw / Aqua Jet

## Team Synergy

- **Grass/Electric types** appreciate Crawdaunt removing Water/Psychic threats
- **Fast Pokemon** pair well — Crawdaunt handles the bulky things, speed demons handle the fast things
- Crawdaunt attracts Fighting/Fairy/Bug/Grass moves — pair with things that resist those (Flying, Poison, Fire)
- Aqua Jet + Swords Dance means Crawdaunt doesn't need speed support, freeing team slots

## Matchup Analysis

**Strong vs:** Psychic (double super effective Dark STAB), Ghost (Crunch), Fire (Water STAB), Ground (Water STAB), Rock (Water + Fighting coverage). After Swords Dance, most neutral matchups are won.

**Weak vs:** Fairy (super effective, resists Dark), Fighting (super effective, strong physical hits overwhelm even buffed bulk), Grass (4x on Water/Dark? No — 2x Water, neutral Dark), Bug (2x, and U-Turn pivots away before Crawdaunt sets up). Electric types that outspeed.

**Key vulnerability:** Crawdaunt MUST get the Swords Dance off. If it's forced out or KO'd before setup, the build never turns on. Taunt also shuts it down. Fast special attackers with super effective coverage (Grass, Electric, Fairy) can KO before Crawdaunt moves.
