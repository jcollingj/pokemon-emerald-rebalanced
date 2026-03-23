---
name: Zangoose
dex_number: 335
status: designed
ability: Scrappy
role: Unstoppable Forward Sweeper / No-Wall Physical Attacker
evolution_line: [Zangoose]
---

# Zangoose #335 — Design Doc

## Vanilla Stats

| Stat | Value |
|------|-------|
| HP | 73 |
| Atk | 115 |
| Def | 60 |
| SpA | 60 |
| SpD | 60 |
| Spe | 90 |
| **BST** | **458** |

**Type:** Normal
**Location:** Route 110, rare encounter (L13)
**Abilities (vanilla):** Immunity / None / Toxic Boost (HA)
**Vanilla Learnset highlights:** Scratch, Quick Attack, Swords Dance (L10), Fury Cutter, Slash, Crush Claw

---

## Design Context

Zangoose is a single-stage Normal-type with exceptional 115 Atk and solid 90 Speed. Its lore centers on a legendary rivalry with Seviper — the fierce Cat Ferret that claws through everything in its path. It appears rarely on Route 110 alongside Seviper. It needs to feel usable immediately at L13 (Segment 3 level cap is L24) and remain a compelling team member throughout.

**Key constraint:** Nidoking already uses **Toxic Boost** as its core identity (self-poison for 1.5× Atk boost). Heracross already uses **Guts + Facade** (status-activate + Facade 140 eff BP). Any Zangoose design must carve out distinct territory.

---

## Option A: Toxic Boost — "Poison Berserker"

### Ability
**Toxic Boost** — Raises Attack by 1.5× when poisoned. (This is the vanilla hidden ability, kept as primary.)

### Build Identity
A self-poisoning glass cannon that activates Toxic Orb on turn 1 and then hits for absurd Atk numbers — with Facade doubling in power when statused.

### Signature Interaction
**Toxic Orb → Facade**

When poisoned: Toxic Boost raises Atk by 1.5×, AND Facade's BP doubles from 70 to 140. Stack them:
`115 Atk × 1.5 × 140 eff BP = nuclear Normal STAB`

It's a clean 2-step combo: equip Toxic Orb, switch in, everything dies.

### Pros
- Highest damage ceiling of the three options — Facade + Toxic Boost stacking is genuinely scary
- Vanilla HA is already in the codebase, minimal implementation complexity
- Satisfying "activate item → sweep" loop that players immediately understand

### Cons
- **Duplicates Nidoking's core mechanic**: both are "equip Toxic Orb → get poisoned → 1.5× Atk" sweepers
- **Facade + status boost is also Heracross's thing** (Guts + Flame Orb → Facade 140 eff BP) — third Pokemon doing the same trick
- As a single-stage Normal type, Zangoose's coverage is more limited than Nidoking's multi-type attacks

---

## Option B: Scrappy — "No Escape Slasher" ✅ RECOMMENDED

### Ability
**Scrappy** — Normal and Fighting moves can hit Ghost-type Pokemon (removes the Ghost-type immunity to Normal/Fighting).

### Build Identity
The most complete forward sweeper in the game — no type can wall Zangoose's claws; it pursues its target regardless of what stands in the way.

### Signature Interaction
**L48 Extreme Speed vs. Ghost types**

Extreme Speed is +2 priority Normal STAB. Ghost types are normally immune to Normal moves. With Scrappy, Zangoose's priority Extreme Speed hits Ghost types for full damage — the only Pokemon in the game with a priority move that bypasses Ghost immunity.

After a Swords Dance, `+2 Atk × +2 priority Extreme Speed vs. Ghost` = a setup sweeper that can no longer be denied by the game's most common "wall Normal attackers" type.

### Pros
- **Completely unique niche** — no other Pokemon in the roster is a pure Normal sweeper that hits Ghosts; this is entirely Zangoose's identity
- **Thematically resonant**: Zangoose is so ferocious it claws through spirits; the rival of Seviper that can't be escaped
- **Clean single-player story**: players hitting a Ghost type with Extreme Speed and getting the kill feels like a revelation moment
- **No item dependency** — Scrappy works passively; Zangoose can hold Life Orb, Choice Band, or Lum Berry without needing a specific Orb
- **Early viability**: at L13 on Route 110, Zangoose's Quick Attack already hits Ghosts from turn 1

### Cons
- Less exciting item interaction than Toxic Boost (no 2-step "activate the build" combo)
- Ghost types are relatively rare in early-game Hoenn, so the ability is underutilized until mid-game
- Passive ability rather than a visible mechanical loop — harder to explain to newer players

---

## Option C: Tough Claws — "Claw Machine" (unusual)

### Ability
**Tough Claws** — Boosts the power of contact moves by 33%.

### Build Identity
A pure claw-type striker where every attack in the kit is powered up — Zangoose's entire learnset is contact moves that all benefit equally.

### Signature Interaction
**Swords Dance + Crush Claw with Tough Claws**

Crush Claw: 80 BP × 1.33 Tough Claws = **106 eff BP** with a 50% chance to lower the target's Defense. After Swords Dance (+2 Atk), Defense drops from Crush Claw set Zangoose to sweep. Every subsequent move against the now-Def-lowered target does escalating damage.

### Pros
- **Most thematically pure** — every Zangoose move is a claw/contact strike; Tough Claws rewards the entire kit equally
- **No item dependency** — Zangoose can run Life Orb (stacks with Tough Claws) for maximum output
- **Simple to understand**: "my cat hits harder because tough claws" requires no setup
- **No roster overlap**: no other Pokemon in the current roster uses Tough Claws

### Cons
- **Too passive** — +33% on all contact moves is strong but doesn't create a build identity or satisfying loop
- Doesn't differentiate Zangoose from "just a Normal physical attacker" — lacks a mechanical hook
- Swords Dance + Life Orb + Tough Claws is powerful but it's the same setup sweeper pattern as many other physical attackers

---

## Recommendation: Option B — Scrappy ✅

**Why Scrappy wins:**

1. **Nidoking owns Toxic Boost.** Both use the "equip Toxic Orb → get poisoned → 1.5× Atk" identity. Zangoose as a second Toxic Boost sweeper is weaker design than Zangoose as something genuinely different.

2. **The Ghost + Extreme Speed moment is unique in the entire game.** No other Pokemon has a +2 priority move that bypasses Ghost-type immunity. When a player uses Extreme Speed on a Gengar or Haunter and gets the kill, it's a "wait, that worked?!" moment they'll remember.

3. **"No Pokemon can wall Zangoose" is a clear identity statement.** Normal types are classically hard-countered by Ghosts (immune to all Normal moves) and Rock/Steel (resist Normal). Scrappy removes the hard counter entirely. Zangoose becomes the Pokemon that refuses to be stopped.

4. **Fits the rivalry lore.** Zangoose chases Seviper with relentless fury. An ability that means "nothing escapes, nothing walls me" is the ability-lore synergy the game is looking for.

5. **Tough Claws is a close second** and worth revisiting if another Pokemon wants Scrappy, but no current Hoenn route Pokemon needs it. Scrappy is rare even in competitive and gives Zangoose a completely unique identity.

---

## Recommended Design: Scrappy Zangoose

### Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 73 | **85** | +12 |
| Atk | 115 | 115 | — |
| Def | 60 | **70** | +10 |
| SpA | 60 | 60 | — |
| SpD | 60 | **70** | +10 |
| Spe | 90 | 90 | — |
| **BST** | **458** | **490** | **+32** |

**Rationale:** Zangoose's offensive stats are already excellent — 115 Atk and 90 Spe need no changes. The BST bump goes into survivability: +12 HP to survive priority hits and entry hazards, +10 to each Defense to survive one more hit while setting up Swords Dance. A single-stage with 490 BST is appropriate given no evolution gate.

### Ability Changes

**Ability 1:** Scrappy — Normal/Fighting moves hit Ghost types. Core build identity.
**Ability 2:** Immunity — Cannot be poisoned. Nod to the Seviper rivalry lore; also opens Toxic Orb-free sets that avoid chip damage.
**Hidden:** Toxic Boost — 1.5× Atk when poisoned. For players who want the classic competitive set; still a valid alternative playstyle.

### Learnset

| Level | Move | BP | Type | Notes |
|-------|------|----|------|-------|
| 1 | Scratch | 40 | Normal | Basic physical STAB opener |
| 1 | Leer | — | Normal | Utility, defense drop |
| 7 | Quick Attack | 40 | Normal | **Scrappy Quick Attack hits Ghosts from turn 1** — build turns on immediately |
| 8 | Fury Cutter | 40→80 | Bug | Escalating-power Bug STAB; great into Psychic types early on |
| 12 | Swords Dance | — | Normal | Setup move — +2 Atk after one turn |
| 16 | Slash | 70 | Normal | Strong STAB with high crit chance; first "real" STAB move |
| 21 | Night Slash | 70 | Dark | Dark coverage + high crit; hits Psychic/Ghost for coverage; thematically a slash |
| 27 | Crush Claw | 75 | Normal | **Mid-game power spike** — 50% Defense drop chance; hits Ghosts with Scrappy |
| 33 | Close Combat | 120 | Fighting | Coverage for Rock/Steel/Normal/Dark/Ice; also hits Ghosts with Scrappy |
| 42 | Facade | 70 | Normal | High-PP reliable STAB; for Hidden Ability Toxic Boost sets this doubles to 140 BP |
| 48 | **Extreme Speed** | 80 | Normal | **Capstone** — +2 priority, hits Ghosts with Scrappy; the signature payoff |

### Learnset Notes

- **L7 Quick Attack**: Scrappy means this +1 priority Normal move hits Ghost types immediately. At L13 when you catch Zangoose on Route 110, it already bypasses Ghost immunity.
- **L8 Fury Cutter**: Escalating Bug STAB. Doubles each turn (40 → 80 → 160). With Scrappy covering Ghost, Fury Cutter covers Psychic and Dark — fills coverage holes early.
- **L12 Swords Dance**: Vanilla had this at L10; kept in the L12 synergy slot. The whole build turns on here — one Swords Dance into Crush Claw starts the sweep.
- **L21 Night Slash**: Dark coverage that's still thematically a "slash." Hits Psychic and Ghost types (though Scrappy already handles Ghost with Normal moves). High crit chance plays into Zangoose's "relentless pressure" identity.
- **L27 Crush Claw**: The mid-game centerpiece. 75 BP, 50% to lower Defense — after Swords Dance, this starts chaining Defense drops on whatever comes in.
- **L48 Extreme Speed**: The capstone and the signature Scrappy moment. +2 priority Normal STAB that hits Ghost types. Players who understand what just happened will remember this for the rest of the game.

---

## The Math

Base Scrappy Zangoose (no item):
- **Crush Claw (post-SD):** 115 × 2 × 75 BP = **17,250 raw power** before type and defense
- **Extreme Speed (post-SD):** 115 × 2 × 80 BP = **18,400 raw power** at +2 priority — hits Ghost types

With Life Orb (1.3×):
- **Extreme Speed:** 115 × 2 × 80 × 1.3 = **23,920** — at +2 priority, hitting everything including Ghosts

With Choice Band (1.5×):
- **Crush Claw:** 115 × 1.5 × 75 = **12,937** with 50% Defense drop chance to chain

---

## Core Strategy

1. Lead or switch in — **Quick Attack** now threatens Ghost types that normally switch in safely
2. Predict a Ghost/Normal-immune switch-in → **Swords Dance** as they switch
3. **Crush Claw** sweeps, chaining Defense drops and hitting everything
4. Low HP or need to finish? **Extreme Speed** with +2 priority cleans up anything remaining — including Ghosts
5. Alternative: **Choice Band** set skips setup and abuses 115 Atk directly with Extreme Speed

---

## Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Life Orb** | 1.3× boost on every move — all of Zangoose's STAB moves benefit equally, and Swords Dance amplifies the multiplier |
| #2 | **Choice Band** | 1.5× Atk without setup — Extreme Speed with a Band at 115 Atk bypasses Ghost immunity and outspeeds with priority |
| #3 | **Lum Berry** | One-time status cure — protects the sweep from a Will-O-Wisp or sleep that would end the rampage |

---

## Team Synergy

- Pairs with **hazard setters** (Toxic Spikes, Stealth Rock) that chip opponents into Extreme Speed KO range
- Pairs with **U-turn/Volt Switch** pivots that give Zangoose a free switch-in to start setting up
- Complements **Ghost-type teammates** — Ghost attacks cover Fighting/Normal (Zangoose's weakness), Zangoose's Scrappy covers Ghost types back
- Loves **Encore support** — lock opponents into a setup move while Zangoose gets a free Swords Dance

---

## Matchup Analysis

**Strong vs:** Ghost types (Scrappy removes immunity), Psychic (Night Slash, Fury Cutter), Normal, Ice, Dark (Close Combat)
**Weak vs:** Rock-types (Crush Claw and Normal STAB are resisted; Close Combat handles them), Steel types (resist Normal; Close Combat covers)
**Key threats:** Steel types that resist Normal and have high Defense; Rock types before Close Combat comes online at L33; anything that outspeeds Zangoose and OHKOs before it can set up

---

## Design Checklist

- [x] Ability chosen and justified (Scrappy — completely unique Ghost-bypassing Normal sweeper niche)
- [x] Synergy moves show up early (Scrappy Quick Attack at L7 hits Ghosts immediately; SD at L12 turns on the build)
- [x] Stats reinforce build role (survivability boost for a setup sweeper; offensive stats already excellent)
- [x] Learnset follows standard schedule (single-stage curve, good moves by L24-27)
- [x] Clear niche — "No wall, no immunity" — no other Pokemon in the roster does this
- [x] Core strategy explainable in 2-3 sentences
