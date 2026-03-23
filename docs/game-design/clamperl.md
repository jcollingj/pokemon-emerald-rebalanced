---
name: Clamperl / Huntail / Gorebyss
dex_numbers: [366, 367, 368]
status: designed
huntail_ability: Shed Skin
huntail_role: Coil Setup Sweeper
huntail_ideal_items: Lum Berry, Leftovers, Life Orb
gorebyss_ability: Parasitic Needle (rework of Hydration)
gorebyss_role: Drain Mage
gorebyss_ideal_items: Big Root, Leftovers, Choice Specs
evolution_line: [Clamperl, Huntail / Gorebyss]
---

# Clamperl / Huntail / Gorebyss — Design Brainstorm

## Context

Route 106, Good Rod encounter, Segment 2 (Dewford arc). Clamperl is a branching evolution:
- **Deep Sea Tooth** → **Huntail** (physical split, 104 Atk)
- **Deep Sea Scale** → **Gorebyss** (special split, 114 SpA)

Both final evolutions share the same defensive profile (105 Def, 75 SpD) and the same crippling Speed (52). Both are pure Water type. The design goal is to make each branch feel meaningfully different — not just "one is physical, one is special."

---

## Clamperl — Base Form

### Build Notes

Clamperl doesn't need to be a powerhouse — it's a transitional form that evolves by item use at any level. The design goal is for it to be functional and foreshadow both branches.

**Ability 1: Shell Armor** — Prevents critical hits. Thematic (it's literally in a shell). Works fine.
**Ability 2: Swift Swim** — Doubles Speed in rain. Replaces Rattled (a passive +1 Speed reactive ability that doesn't shape moveset choices). Swift Swim is thematic for an ocean Pokémon and hints at Huntail/Gorebyss's vanilla Swift Swim ability.

**Stat Adjustments:**

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 35 | 45 | +10 |
| Atk | 64 | 64 | — |
| Def | 85 | 85 | — |
| SpA | 74 | 74 | — |
| SpD | 55 | 55 | — |
| Spe | 32 | 32 | — |
| **BST** | **345** | **355** | **+10** |

Small HP bump so it doesn't instantly die before the player can farm the evolution items.

**Clamperl Learnset:**

| Level | Move | Type | Notes |
|-------|------|------|-------|
| 1 | Clamp | Normal | Trapping — the whole Clamperl identity |
| 1 | Water Gun | Water | Basic STAB |
| 8 | Whirlpool | Water | Trapping water move — deep-sea theme, foreshadows both branches |
| 12 | Iron Defense | Normal | +2 Def — foreshadows Huntail's bulk build |
| 16 | Water Pulse | Water | Special STAB — foreshadows Gorebyss build |
| 21 | Brine | Water | 65 BP, doubles below half HP — offensive utility |
| 27 | Clamp | Normal | Stronger trap: useful before item evolution |

---

## Huntail — Physical Branch (#367)

### Vanilla Stats
55 / 104 / 105 / 94 / 75 / 52 — BST 485

The profile: hard-hitting, physically tanky, **very slow**. A deep-sea serpent that lures prey with a bioluminescent tail, then drags them into the dark. The design should lean into this — slow, patient, inevitable.

Vanilla abilities: Swift Swim / Water Veil (HA).
Key vanilla moves: Bite, Ice Fang, Crunch, Aqua Tail, Coil, Sucker Punch, Whirlpool, Screech.

---

### Option 1: Shed Skin + Coil — Serpentine Setup Sweeper ⭐ RECOMMENDED

**Ability:** Shed Skin — 33% chance each turn to heal a status condition.

**Why Shed Skin?**
Huntail is a serpentine deep-sea creature. Snakes shed their skin. The ability fits the Pokémon visually and thematically, and it *shapes the moveset*: Coil is the centerpiece setup move, and Shed Skin prevents status (burn, paralysis) from interrupting the sweep. Without Shed Skin, one burn or paralyze ends the run. With Shed Skin, Huntail just shrugs it off and coils again.

**Build Identity:**
"A patient serpent that coils around its prey — Coil piles on Attack, Defense, and Accuracy each turn, and Shed Skin makes sure no status move can stop the squeeze."

**Signature Interaction:**
**Coil + Aqua Tail** — Coil boosts Attack (+1) and Accuracy (+1), which makes Aqua Tail (90% accurate) effectively 100% accurate while hitting harder. After two Coils, Aqua Tail off 115 Atk at +2 is devastating. Shed Skin means you can Coil even into Scald without fear of burn shutting down the sweep.

**Learnset:**

| Level | Move | BP | Type | Notes |
|-------|------|----|------|-------|
| 1 | Bite | 60 | Dark | STAB starter, flinch chance |
| 1 | Water Gun | 40 | Water | Basic STAB |
| 8 | **Aqua Tail** | 90 | Water | First synergy move — strong STAB; accuracy becomes 100% after Coil |
| 12 | **Crunch** | 80 | Dark | Second STAB, Defense drop chance, pairs with Coil's Acc boost |
| 16 | Scary Face | — | Normal | Speed control; sets up safe Coil turns |
| 21 | **Coil** | — | Poison | THE setup move — +1 Atk, +1 Def, +1 Acc. Build goes online. |
| 27 | Ice Fang | 65 | Ice | Coverage vs Grass/Dragon/Flying |
| 33 | **Sucker Punch** | 80 | Dark | Priority — patches Speed problem; KOs weakened threats |
| 36 | Screech | — | Normal | -2 Def on enemy, sets up Aqua Tail nuke |
| 42 | Waterfall | 80 | Water | Reliable STAB with flinch, never misses |
| 48 | **Iron Head** | 80 | Steel | Coverage vs Fairy/Ice (Huntail's worst matchups) |

**Pros:**
- Coil is perfectly thematic for a serpentine Pokémon — no stretch required
- Shed Skin + Coil = status-immune setup. Burn and paralysis are the normal counters to physical sweepers; this completely shuts that down
- After 2 Coils: +2 Atk, +2 Def (hard to break), 100% accurate Aqua Tail + Crunch
- Sucker Punch patches the Speed problem for weakened/faster foes

**Cons:**
- Still needs at least one turn to set up
- Base 75 Speed means it gets outsped and hit before the first Coil

**Items:**
| Rank | Item | Why |
|------|------|-----|
| 1 | **Lum Berry** | One-time status cure while Shed Skin handles the rest. The Coil turn is the most vulnerable point — Lum Berry + Shed Skin = near-total status immunity. |
| 2 | **Leftovers** | Sustain during Coil setup turns. With boosted Def, Huntail can take hits while healing passively. |
| 3 | **Life Orb** | For offensive play without setup — 1.3x on Aqua Tail + Crunch hits very hard off 115 Atk. |

---

### Option 2: Moxie + Sucker Punch — Ambush Assassin

**Ability:** Moxie — +1 Attack when Huntail knocks out a Pokémon.

**Build Identity:**
"A deep-sea predator lurking in total darkness — Sucker Punch strikes first from the shadows, and every kill makes the next bite stronger."

The slow serpent problem is solved differently here: instead of setting up, Huntail uses +1 priority Sucker Punch (80 BP Dark STAB) to outpace opponents that would normally outspeed it. Each KO with Moxie makes the next Sucker Punch or Aqua Tail more powerful, creating a snowball effect.

**Signature Interaction:**
**Sucker Punch + Moxie** — KO something with priority, get +1 Atk. Now the next Sucker Punch is +1 stronger, and Aqua Tail is punishing anything that tries to switch in. The catch: Sucker Punch only fires if the opponent is using an attacking move — Substitute or status moves bait it into failing. This creates real mind-game tension.

**Pros:**
- Priority fixes the Speed problem immediately, no setup turn needed
- Moxie snowball is exciting when it works
- Sucker Punch mind games add a skill dimension

**Cons:**
- Sucker Punch fails against Substitute or non-attacking moves — exploitable
- Moxie is already on Heracross (Brawly's gym team) — feels less fresh
- Without a Coil sweep, less late-game scaling than Option 1

**Items:**
| Rank | Item | Why |
|------|------|-----|
| 1 | **Choice Band** | 115 Atk × 1.5 = 172 off Sucker Punch + STAB at +1 Moxie is devastating |
| 2 | **Life Orb** | Flexible moveset — switch between Sucker Punch and Aqua Tail as needed |
| 3 | **Lum Berry** | Without Shed Skin, a well-timed burn ruins this build |

---

### Option 3 (Unusual): "Abyssal Hunter" — Physical Rain Attacker

**Ability:** Swift Swim reworked to **"Abyssal Hunter"** — In rain, Attack doubles (instead of Speed doubling).

**The Concept:**
Huntail sinks to the crushing depths of the ocean where even light can't reach. In rough seas (rain), it becomes an unstoppable physical predator. This is a **completely unique niche**: the roster has special rain attackers (Kingdra) and defensive rain users (Swampert), but no *physical rain attacker*. Abyssal Hunter is the rain team's physical powerhouse.

**Build Identity:**
"A deep-sea predator that thrives in the storm — in rain, Attack doubles, and STAB Waterfall at 1.5× weather boost off 2× base Attack becomes one of the most powerful physical attacks in the game."

**Signature Interaction:**
**Rain Dance + Waterfall + Abyssal Hunter** — Math: 80 BP × 1.5 (STAB) × 1.5 (Rain weather) × 2.0 (Abyssal Hunter) = **360 effective BP** off base 115 Atk. With a Choice Band, this becomes obscene. The tradeoff: Huntail is still slow (52 Speed), so it takes hits while setting up rain or waiting for a rain setter.

**Pros:**
- Completely unique niche on the roster: no other physical rain attacker
- Differentiates from Kingdra (special rain) and Swampert (defensive rain)
- The damage math is genuinely absurd and exciting
- Good rain team synergy — pairs beautifully with a Pelipper Drizzle setter

**Cons:**
- Requires rain (either personal Rain Dance turn or a dedicated rain setter teammate)
- 52 Speed means Huntail eats hits — needs rain before it can threaten
- Heavily team-dependent; mediocre outside of rain

**Items:**
| Rank | Item | Why |
|------|------|-----|
| 1 | **Damp Rock** | Extends Rain Dance to 8 turns — maximizes the Abyssal Hunter window |
| 2 | **Choice Band** | 115 Atk × 1.5 × doubled by ability = Waterfall at 360 eff BP off 172 Atk |
| 3 | **Life Orb** | Flexible moveset in rain without committing to one move |

---

### ⭐ Huntail Recommendation: Option 1 (Shed Skin + Coil)

**Why Option 1 wins:**
- The cleanest ability-learnset synergy: Shed Skin makes the player think "I should set up Coil," and Coil is tailor-made for a serpentine Pokémon. No explanation needed — it clicks immediately.
- Status immunity during setup is a compelling power fantasy that doesn't exist on other Pokémon in the roster.
- Option 3 (Abyssal Hunter) is exciting for team builders but requires too much external support to feel satisfying for a casual playthrough.
- Option 2 (Moxie + Sucker Punch) is fun but predictable, and Moxie is already Heracross's thing.

**Potential concern: Is Coil too slow for a 52 Speed Pokémon?**
The stat rebalance addresses this: redistributing SpA points into Speed and HP brings Huntail to 75 Speed — not fast, but functional. With Coil's Defense boost, it can tank a hit while setting up. And the Scary Face → Coil sequence lets it control slower Pokémon while setting up freely.

---

### Huntail Stat Adjustments

Redistribute SpA into Speed, HP, and Attack (SpA not needed for a pure physical attacker):

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 55 | 70 | +15 |
| Atk | 104 | 115 | +11 |
| Def | 105 | 105 | — |
| SpA | 94 | 60 | **-34** |
| SpD | 75 | 75 | — |
| Spe | 52 | 75 | **+23** |
| **BST** | **485** | **500** | **+15** |

75 Speed is meaningful — outspeeds anything below that threshold, which is a large chunk of mid-game Pokémon. After Coil's Accuracy boost, Aqua Tail never misses. With Shed Skin, status won't interrupt the sweep.

---

## Gorebyss — Special Branch (#368)

### Vanilla Stats
55 / 84 / 105 / 114 / 75 / 52 — BST 485

The profile: high SpA, physically tanky, same crushing Speed problem as Huntail. A pink sea creature that lures in prey with its beauty and drains their body fluids through a thin tubular mouth. The design should lean into this — elegant, predatory, draining.

Vanilla abilities: Swift Swim / Hydration (HA).
Key vanilla moves: Water Pulse, Amnesia, Psychic, Surf, Agility, Aqua Ring.

---

### Option 1: "Spring Water" (Hydration Rework) — Offensive Rain Healer

**Ability:** Hydration reworked to **"Spring Water"** — In rain, Water-type moves restore 25% of damage dealt as HP.

**Build Identity:**
"A rain-fed predator that heals by attacking — every Surf or Scald in rain restores a quarter of the damage dealt, making it nearly impossible to wear down as long as the storm lasts."

**Signature Interaction:**
**Rain Dance + Scald + Spring Water** — Scald in rain: STAB (1.5×) + rain (1.5×) + 25% heal on hit. Scald burns physical attackers who try to bully Gorebyss, and Spring Water heals the chip damage. The Pokémon sustains itself *through aggression*, not passive recovery like Leftovers.

**Pros:**
- "Heal by attacking" is a genuinely distinct niche from Swampert's "heal by existing (Rain Dish)"
- Scald burn + Spring Water healing = extremely hard to chip down
- Thematic: draining Pokémon, now drains in the literal sense in rain

**Cons:**
- Requires rain to function (team support needed)
- Shares the rain archetype with Swampert and Kingdra — three rain Pokémon might feel redundant
- Without rain, it's just a slow special attacker

**Items:**
| Rank | Item | Why |
|------|------|-----|
| 1 | **Damp Rock** | Extended rain = extended Spring Water healing |
| 2 | **Leftovers** | Stacks with Spring Water for sustained survival |
| 3 | **Choice Specs** | When you don't need the sustain — just nuke with Hydro Pump |

---

### Option 2: "Mesmerize" (Own Tempo Rework) — Hypnotic Setup Sweeper

**Ability:** Own Tempo reworked to **"Mesmerize"** — Gorebyss cannot be confused, AND when it uses Amnesia, it also gains +1 Speed (in addition to the normal +2 SpA).

**Build Identity:**
"The beautiful creature hypnotizes its prey into stillness — one Amnesia gives both +2 SpA and +1 Speed, creating a partial Shell Smash effect that instantly makes Gorebyss threatening."

**Signature Interaction:**
**Amnesia + Mesmerize** — One move gives +2 SpA and +1 Speed. After Amnesia: 120 SpA at +2 = effectively 360 SpA, and Speed jumps from 70 to 105 (after stat adjustment). That's enough to threaten most of the metagame. Two Amnesias = unstoppable.

**Pros:**
- Amnesia is a classic Gorebyss move — feels authentic to the Pokémon's history
- +2 SpA + +1 Spe from a single move is very strong without being as broken as Shell Smash (+2 everything at cost of -1 defenses)
- Confusion immunity means the opponent can't Confuse Ray-stall the setup

**Cons:**
- Still needs a setup turn to go online
- "Setup special sweeper" is an archetype that exists in many forms already
- Mesmerize requires implementing a custom ability effect (triggering Speed boost on Amnesia use)

**Items:**
| Rank | Item | Why |
|------|------|-----|
| 1 | **Sitrus Berry** | Survives the setup turn to get the Amnesia off |
| 2 | **Life Orb** | Post-Amnesia, every hit does enormous damage |
| 3 | **Choice Specs** | Skip the setup — just use raw 120 SpA + STAB Hydro Pump |

---

### Option 3: "Parasitic Needle" — Drain Mage ⭐ RECOMMENDED (UNUSUAL)

**Ability:** Hydration reworked to **"Parasitic Needle"** — Draining moves deal 1.5× damage AND restore 75% of HP dealt (instead of the normal 50%).

**The Concept:**
Gorebyss's lore says it drains the body fluids of prey through its thin tubular mouth. *It literally drains things for a living.* This ability leans all the way into that identity. Every drain move becomes a significant attack AND a significant heal — Gorebyss is almost impossible to wear down because every time it attacks, it recovers health.

**The unusual part:** To take full advantage of Parasitic Needle, Gorebyss needs to run *non-Water STAB* moves: Giga Drain (Grass), Draining Kiss (Fairy), and Leech Seed (Grass). This gives Gorebyss an unusual cross-type attacking profile for a pure Water type — Water for primary STAB, Grass and Fairy for drain synergy.

**Build Identity:**
"A life-draining predator that doesn't just survive — it thrives the more it attacks. Every Giga Drain is 75 effective BP that heals 75% of damage dealt. It doesn't kill you quickly; it slowly, elegantly drains you dry."

**Signature Interaction:**
**Giga Drain + Parasitic Needle** — 50 BP × 1.5 (ability) = 75 effective BP off 120 SpA, heals 75% of damage dealt. This isn't spectacular damage, but the heal is enormous: off 120 SpA, Giga Drain might deal 80-120 HP to a typical target — and Gorebyss heals 60-90 HP from it. Gorebyss loops between Scald (raw Water STAB) and Giga Drain (heal back what you took). The opponent is in a war of attrition they can't win.

**Against Water-immune or Water-resistant foes:** Giga Drain covers Water/Grass dual types and Grass types. Draining Kiss covers Dragon types that resist Water.

**Learnset:**

| Level | Move | BP | Type | Notes |
|-------|------|----|------|-------|
| 1 | Water Pulse | 60 | Water | STAB starter (confusion chance) |
| 1 | Whirlpool | 35 | Water | Trapping — locks in prey while draining |
| 8 | **Giga Drain** | 75 | Grass | First drain move — 75% heal with Parasitic Needle. Build turns on. |
| 12 | **Surf** | 90 | Water | Primary Water STAB. Pair with Giga Drain: nuke or heal as needed. |
| 16 | Aqua Ring | — | Water | Passive HP regen stacks with drain healing. Hard to kill. |
| 21 | **Scald** | 80 | Water | STAB + burn chance. Physically attackers get burned trying to break Gorebyss. |
| 27 | **Draining Kiss** | 75 | Fairy | Second drain move — 75% heal, Dragon/Dark/Fighting coverage. |
| 33 | Psychic | 90 | Psychic | Coverage vs Poison types that resist Water+Grass |
| 36 | **Leech Seed** | — | Grass | Passive drain, combines with Aqua Ring and Giga Drain for oppressive sustain |
| 42 | **Hydro Pump** | 110 | Water | High-power nuke when you need burst damage |
| 48 | **Shadow Ball** | 80 | Ghost | Coverage vs Psychic/Ghost types |

**Pros:**
- Completely unique role on the roster — no other Pokémon is a "drain mage"
- Perfectly matches the Pokémon's lore (drains body fluids through a tubular mouth)
- Creates interesting moveset decisions: Scald for raw power or Giga Drain to heal back chip damage?
- Aqua Ring + Leech Seed + Giga Drain drain stack makes Gorebyss extremely hard to wear down
- Unusual: a Water-type that actively benefits from running Grass and Fairy attacking moves

**Cons:**
- Drain moves (Giga Drain) are not STAB — some will feel the sting of weaker non-STAB hits
- Against opponents with Heal Block, the entire build collapses
- Leech Seed is blocked by Grass types (which Giga Drain hits neutrally anyway, so not catastrophic)

**Items:**
| Rank | Item | Why |
|------|------|-----|
| 1 | **Big Root** | Boosts HP restored by draining moves by 30%. With Parasitic Needle at 75% recovery, Big Root pushes the heal even higher — Giga Drain restores close to 100% of damage dealt. Also boosts Leech Seed and Aqua Ring recovery. |
| 2 | **Leftovers** | Stacks with drains + Aqua Ring + Leech Seed for oppressive passive sustain. |
| 3 | **Choice Specs** | Skip the drain sustain and just nuke with Hydro Pump off 120 SpA. |

---

### ⭐ Gorebyss Recommendation: Option 3 (Parasitic Needle)

**Why Option 3 wins:**
- No other Pokémon in the roster does this. Blastoise covers (Mega Launcher), Kingdra crits (Sniper), Starmie beams (Illuminate), Sharpedo bites (Strong Jaw). Gorebyss *drains*. The role is completely distinct.
- The Pokémon's lore literally describes draining body fluids. The ability is the lore made mechanical.
- The unusual decision to run Grass and Fairy drain moves on a Water-type creates interesting team-building and in-battle decisions.
- Big Root is a rarely-used item in the game; Parasitic Needle makes it the #1 choice on Gorebyss, giving the item a meaningful home.

**Why not Option 2 (Mesmerize)?**
Amnesia sweeper is a clean design, but "setup into sweeper" is an archetype that exists. The "Mesmerize" ability requires a custom implementation (Speed boost on Amnesia), and the resulting build is less distinct from other setup sweepers.

**Why not Option 1 (Spring Water)?**
Good design, but rain is already heavily represented by Swampert (Rain Dish tank) and Kingdra (Swift Swim optional). Three rain-dependent Water types in the same segment is too much archetype overlap.

---

### Gorebyss Stat Adjustments

Redistribute Attack into SpA, HP, and SpD (Attack irrelevant for a drain mage; wants SpA for bigger hits = bigger heals):

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 55 | 75 | **+20** |
| Atk | 84 | 54 | **-30** |
| Def | 105 | 95 | -10 |
| SpA | 114 | 120 | +6 |
| SpD | 75 | 90 | +15 |
| Spe | 52 | 61 | +9 |
| **BST** | **485** | **495** | **+10** |

Higher HP means more room to take damage before draining back — important for a sustain playstyle. Higher SpD means it can tank special hits from Grass and Electric types that resist Water. Higher SpA makes Giga Drain hit harder, which makes the heals bigger. Speed stays low (61) because drain mages don't need to outspeed — they outlast.

---

## The Split in Summary

| | Huntail | Gorebyss |
|---|---------|----------|
| **Ability** | Shed Skin | Parasitic Needle |
| **Role** | Coil Setup Sweeper | Drain Mage |
| **Primary moves** | Aqua Tail, Crunch, Coil | Scald, Giga Drain, Draining Kiss |
| **Best item** | Lum Berry | Big Root |
| **Fantasy** | "Set up Coil, become unstoppable" | "Drain everything dry, never die" |
| **Speed** | 75 (functional) | 61 (slow, outlasts instead) |
| **Stat focus** | Attack + Defense | SpA + SpD + HP |
| **Playstyle** | Aggressive setup | Attrition/sustain |

Both Pokemon share the deep-sea Clamperl origin and the Water typing. But they play completely differently — one is a coiling physical sweeper, the other is a parasitic drain mage. The player's choice of which item to use on Clamperl matters, and both branches are rewarding.

---

## Open Questions

1. **"Parasitic Needle" implementation**: Does the 1.5× damage multiplier stack with STAB and other modifiers as expected? Should test that Giga Drain damage is appropriately weighted at 75% heal.
2. **Big Root + Parasitic Needle stacking**: If Big Root adds another 30% on top of the 75% recovery... how close does that get to 100%? May need playtesting to confirm it isn't healing more than damage dealt.
3. **Huntail's Speed**: 75 Speed post-rebalance feels right, but could consider 70 if it feels too fast for a deep-sea serpent. The theme favors being slow; 75 is the minimum to make it playable.
4. **Leech Seed on Gorebyss**: Grass types block Leech Seed and resist Giga Drain — is this a meaningful coverage hole? Probably fine since Gorebyss has Scald for Grass coverage anyway.
