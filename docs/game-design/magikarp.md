---
name: Magikarp
dex_number: 129
status: designed
ability: Moxie
role: Snowball Setup Sweeper
ideal_items: Lum Berry, Life Orb, Choice Band
evolution_line: [Magikarp, Gyarados]
---

# Magikarp / Gyarados - Rebalance Notes

## Design Philosophy
Gyarados is a snowball setup sweeper that uses Moxie to chain KOs into an unstoppable rampage. Dragon Dance provides Speed and Attack, but Moxie means Gyarados doesn't need multiple boosts to hit hard enough — one kill and the snowball starts rolling. The fantasy is the classic Gyarados sweep: Dragon Dance on a predicted switch, Waterfall the first target, Moxie triggers, and now you're at +2 Attack / +1 Speed cleaning up the rest of the team.

This is distinct from Fearow (kamikaze nuke that dies in 2-3 turns) and Pidgeot (fast sustained Aerilate sweeper). Gyarados invests a turn setting up, but rewards that investment with a sweep that gets stronger with each KO instead of weaker from recoil.

## Ability Changes

**Magikarp:** Moxie (slot 1), Swift Swim (slot 2), Rattled (hidden). Moxie + Aqua Jet at level 14 means even Magikarp can start the snowball on weakened targets.

**Gyarados:**
- **Ability 1: Moxie** — KOing a target grants +1 Attack. Core identity. Every KO makes the next hit harder, which creates a chain reaction with Dragon Dance's Speed boost. This shapes the moveset: Gyarados wants reliable physical STAB and coverage that lets it chain kills without getting walled.
- **Ability 2: Intimidate** — -1 Attack on switch-in. Defensive fallback for players who want Gyarados as a physical check rather than a sweeper. Still useful, just not the intended build.
- **Hidden: Mold Breaker** — Ignores target abilities. Alt build for wallbreaking — hits through Sturdy, Levitate, etc. Pairs with Earthquake to ignore Levitate users.

### Why Moxie Over Intimidate

Intimidate is strong but passive. It doesn't shape what moves you pick — you'd run the same moveset regardless. Moxie transforms Gyarados's gameplan: you actively seek KOs to fuel the snowball. It makes Dragon Dance + Waterfall a 2-step combo (setup + trigger) rather than just "use your strongest moves." The player has to think about sequencing — which target do I kill first to get the Moxie boost for the harder target?

### Why Not Mold Breaker

Mold Breaker is a wallbreaker ability — it's about punching through one tough target. Gyarados's stats and movepool say "sweeper" more than "wallbreaker." 125 Attack is high but not extreme, and 81 Speed needs Dragon Dance support. Mold Breaker would make Gyarados a worse Rampardos. Moxie makes Gyarados a unique snowball threat.

## Stat Changes

### Magikarp

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 20 | **40** | +20 |
| Atk | 10 | **50** | +40 |
| Def | 55 | 55 | - |
| SpA | 15 | 15 | - |
| SpD | 20 | **40** | +20 |
| Spe | 80 | 80 | - |
| **BST** | **200** | **280** | **+80** |

Magikarp gets real stats so it can fight its way to evolution. 50 Atk means Aqua Jet does actual damage and Moxie KOs are realistic. 40/55/40 bulk means it survives a hit. Still clearly the weakest thing at its level, but now it's a functional Pokemon with Moxie + Aqua Jet hinting at the Gyarados sweep fantasy.

### Gyarados

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 95 | 95 | - |
| Atk | 125 | 125 | - |
| Def | 79 | 79 | - |
| SpA | 60 | 60 | - |
| SpD | 100 | 100 | - |
| Spe | 81 | **86** | +5 |
| **BST** | **540** | **545** | **+5** |

Gyarados is already strong at 540 BST. The only change is +5 Speed to hit 86, which matters because at +1 Speed (after Dragon Dance) Gyarados reaches 129 effective — enough to outrun most unboosted threats. Vanilla 81 at +1 is only 121, which gets outsped by base 100+ Pokemon. 86 at +1 = 129, clean enough to sweep.

The rest of the stats are untouched. 125 Attack is excellent, 95/79/100 bulk is enough to take a hit while setting up, and 60 SpA is a dump stat that confirms the physical identity.

## Learnset

### Magikarp

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Splash | - | Normal | Famously useless |
| 8 | Tackle | 40 | Normal | Can actually hit things now |
| 12 | Flail | - | Normal | Desperate power at low HP |
| 14 | **Aqua Jet** | 40 | Water | Priority Water STAB — hints at Gyarados's Moxie sweep fantasy |

Magikarp is still weak but functional. 50 Atk + Aqua Jet means it can actually contribute and trigger Moxie on weakened targets. The priority on Aqua Jet compensates for fights where 80 Speed isn't enough. This is the "earn your evolution" experience, but now you're earning it by fighting, not by hiding in the back of the party.

### Gyarados (evolves at 16)

| Level | Move | BP | Type | Moxie? | Purpose |
|-------|------|----|------|--------|---------|
| 1 | Tackle | 40 | Normal | - | Inherited |
| 1 | Leer | - | Normal | - | Defense drop utility |
| 16 | **Waterfall** | 80 | Water | **Yes — reliable KO move** | Evolution reward. Physical Water STAB, 20% flinch. The primary Moxie trigger. |
| 16 | **Bite** | 60 | Dark | **Yes — flinch + KO weak targets** | Second evolution move. 30% flinch, decent coverage. |
| 21 | **Dragon Dance** | - | Dragon | **Setup for sweep** | The setup move. +1 Atk / +1 Spe. Combined with Moxie, one DD + one kill = +2 Atk / +1 Spe. |
| 27 | **Crunch** | 80 | Dark | **Yes — upgraded Bite** | Replaces Bite as Dark coverage. Hits Psychic/Ghost types that resist Water. 20% Def drop. |
| 33 | **Ice Fang** | 65 | Ice | **Yes — Dragon/Grass coverage** | Covers Dragon and Grass types that wall Water. 10% freeze / 10% flinch. |
| 36 | **Earthquake** | 100 | Ground | **Yes — Electric coverage** | Hits Electric types super-effectively. Gyarados's 4x Electric weakness makes this critical coverage. |
| 42 | **Bounce** | 85 | Flying | **Yes — secondary STAB** | Flying STAB. Two-turn move but 30% paralysis, and Gyarados can use the invulnerable turn to stall. |
| 48 | **Thrash** | 120 | Normal | **Yes — endgame nuke** | 120 BP 2-3 turn rampage. After Moxie boosts, Thrash cleans up weakened teams. Confusion is fine because the game should be over. |

### Learnset Philosophy

Every move from level 16 onward is a physical attack that can score KOs and trigger Moxie. There are no wasted slots:

- **Waterfall** is the bread-and-butter — reliable STAB with flinch chance
- **Crunch** covers Psychic/Ghost types that resist Water
- **Ice Fang** covers Dragon/Grass types
- **Earthquake** covers Electric types (Gyarados's biggest weakness)
- **Bounce** gives Flying STAB for Grass/Fighting coverage

Dragon Dance is the only non-attacking move, and it's the setup that enables the Moxie snowball. The learnset is lean, aggressive, and every move is a potential Moxie trigger.

## The Math

### Dragon Dance + Moxie Snowball

Base 125 Atk, base 86 Spe:

| Boost State | Effective Atk | Effective Spe | How |
|-------------|---------------|---------------|-----|
| Unboosted | 125 | 86 | Just switched in |
| +1 DD | 187 | 129 | One Dragon Dance |
| +1 DD, +1 Moxie | 250 | 129 | DD + first KO |
| +1 DD, +2 Moxie | 312 | 129 | DD + two KOs |
| +2 DD, +2 Moxie | 375 | 172 | Two DDs + two KOs (overkill) |

At +1 DD / +1 Moxie (the realistic sweep state):
- **Waterfall:** 80 BP x 1.5 STAB = 120 effective off 250 Atk. This 2HKOs or OHKOs most neutral targets.
- **Earthquake:** 100 BP off 250 Atk. OHKOs Electric types that threaten Gyarados.
- **Crunch:** 80 BP off 250 Atk. Hammers Psychic/Ghost types.

The snowball is real: each KO makes the next one easier. After two Moxie boosts, even resisted hits chunk.

### Waterfall Damage at Key States

| Target | Unboosted | +1 DD | +1 DD +1 Moxie |
|--------|-----------|-------|-----------------|
| Neutral (80 Def) | ~45% | ~67% | ~90% |
| Resist (Water) | ~22% | ~33% | ~45% |

Neutral targets get OHKOd after one DD + one Moxie boost. That's the breakpoint the build is tuned around.

## Ideal Items

1. **Lum Berry** — Cures any status once. Gyarados's biggest setup risk is getting burned (halves Attack), paralyzed (ruins sweep speed), or put to sleep during Dragon Dance. Lum Berry gives one free setup turn against status-heavy leads. This is THE competitive Gyarados item.

2. **Life Orb** — 1.3x damage on all attacks. Stacks multiplicatively with Moxie and Dragon Dance. At +1 DD / +1 Moxie, Waterfall becomes: 80 x 1.5 STAB x 1.3 Life Orb = 156 effective off 250 Atk. The 10% HP recoil per attack eats into Gyarados's bulk, but the sweep should be fast enough that it doesn't matter.

3. **Choice Band** — 1.5x Attack, locked into one move. For non-Dragon Dance builds: just switch in, Waterfall, and let Moxie do the boosting. 125 x 1.5 = 187 Atk off the bat, and Moxie stacks on top. Simpler to use — no setup turn required — but less flexible.

## Core Strategy

### The Dragon Dance Sweep
1. Send Gyarados in on something it threatens or that can't hurt it (Ground-type, Fire-type, anything physical that Intimidate would check)
2. Dragon Dance on the predicted switch — now at +1 Atk / +1 Spe
3. Waterfall the incoming Pokemon. At 187 effective Atk with 120 effective BP, most neutral targets drop. Moxie triggers: now at +2 Atk / +1 Spe
4. Next target comes in. Gyarados picks the right coverage move (Crunch for Psychic/Ghost, Ice Fang for Dragon/Grass, Earthquake for Electric)
5. Each KO adds another +1 Atk via Moxie. By the third kill, Gyarados is at +4 Atk and nothing short of a dedicated wall survives

### When to Use Gyarados
- **Mid-game setup sweeper:** Find a free turn against something passive, Dragon Dance, and start the chain
- **Late-game cleaner:** If the opponent's team is weakened, one Dragon Dance + Moxie snowball finishes the game
- **Intimidate pivot (Ability 2):** Switch in on physical attackers to nerf their Attack, then Dragon Dance on the forced switch
- **NOT a lead.** Gyarados needs the opponent's team softened before it can sweep. It's the closer, not the opener.

## Gyarados vs Other Water Types

| | Gyarados | Swampert | Azumarill |
|---|----------|----------|-----------|
| **Role** | Snowball sweeper | Rain fortress tank | TBD |
| **Ability** | Moxie (KO = +1 Atk) | Rain Dish (heal in rain) | TBD |
| **Speed** | 86 (129 at +1) | 60 (slow tank) | 50 (slow) |
| **Bulk** | Good (95/79/100) | Excellent | Excellent (100 HP) |
| **Damage** | Escalating (Moxie) | Moderate, steady | TBD |
| **Fantasy** | "I get stronger with every kill" | "You can't kill me in rain" | TBD |

Gyarados and Swampert share Water typing but play completely differently. Swampert is a defensive wall that outlasts opponents. Gyarados is an offensive snowball that ends games quickly. No overlap.

## Team Synergy

- **Pairs with Electric-immune Ground types** — Gyarados's 4x Electric weakness means it needs a Ground-type teammate (Swampert, Nidoking) to switch into Thunderbolt/Thunder
- **Wants entry hazard support** — Stealth Rock / Spikes soften the opponent's team, turning 2HKOs into OHKOs for easier Moxie chains
- **Appreciates status absorbers** — Burns and paralysis ruin Gyarados's sweep. A teammate with Natural Cure or a cleric helps
- **Dragon Dance + Moxie loves weakened teams** — Pair with a wallbreaker (Fearow, Nidoking) that softens targets into Moxie KO range

## Matchup Analysis

**Strong vs:** Fire, Ground, Fighting, Bug, Water (resists), Grass-types (Ice Fang coverage). Anything physical (Intimidate on switch-in if running Ability 2).
**Weak vs:** Electric (4x, the biggest threat), Rock (resists Water + hits hard), bulky Water walls that can take Waterfall and status Gyarados.
**Key vulnerability:** Gyarados MUST avoid Electric moves. A single Thunderbolt from even a weak special attacker can OHKO through the 4x weakness. The 86 Speed before Dragon Dance means fast Electric types (Jolteon, Manectric) are hard counters unless Gyarados has already set up.
