---
name: Anorith
dex_number: 347
status: designed
ability: Tough Claws
role: Contact Wallbreaker
ideal_items: Choice Band, Life Orb, Assault Vest
evolution_line: [Anorith, Armaldo]
---

# Anorith / Armaldo - Rebalance Notes

## Design Philosophy
Armaldo is a slow, armored wallbreaker that uses Tough Claws to turn every contact move into a sledgehammer. At 125 Atk with a 1.3x multiplier on contact moves, Armaldo doesn't need to be fast — it hits so hard that whatever switches in takes massive damage. Aqua Jet provides priority to pick off weakened threats despite 45 Speed.

The build shapes the moveset in a concrete way: you pick contact moves over non-contact alternatives. X-Scissor over Leech Life, Stone Edge over Rock Slide (wait — Stone Edge IS contact), Liquidation over Surf. Every slot matters because Tough Claws only rewards the right move choices.

This is the "slow physical nuke" archetype — the opposite of Fearow's speed-based glass cannon. Armaldo doesn't outspeed anything. It walks in, takes a hit on 75/100/80 bulk, and hits back twice as hard.

## Boss Context
Roxanne uses Anorith at L14 with Focus Sash + Battle Armor. That's the GYM version — passive ability, defensive item, meant to survive a hit and punish. The player's version is different: Tough Claws turns Anorith from a defensive fossil into an offensive monster.

## Ability Changes

- **Ability 1: Tough Claws** — Contact moves deal 1.3x damage. Core identity — every attacking move in the kit is a contact move, so every move benefits.
- **Ability 2: Battle Armor** — Cannot be struck by critical hits. Defensive backup option. This is what Roxanne's version uses.
- **Hidden: Swift Swim** — Doubles Speed in rain. Alternative build for rain teams — patches 45 Speed to 90 effective in rain.

## Stat Changes

### Anorith (evolves at 40 — vanilla)

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 45 | 45 | - |
| Atk | 95 | 95 | - |
| Def | 50 | 50 | - |
| SpA | 40 | 40 | - |
| SpD | 50 | 50 | - |
| Spe | 75 | 75 | - |
| **BST** | **355** | **355** | **-** |

Anorith's stats are already solid for a pre-evolution. 95 Atk is exceptional — it hits hard from the moment you get it. No stat changes needed. Evolution stays at vanilla L40 — instead of rushing the evolution, the learnset is designed so Anorith is fun and viable for the entire time before evolving.

### Armaldo

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 75 | **85** | +10 |
| Atk | 125 | 125 | - |
| Def | 100 | 100 | - |
| SpA | 70 | 70 | - |
| SpD | 80 | 80 | - |
| Spe | 45 | 45 | - |
| **BST** | **495** | **505** | **+10** |

125 Atk is already elite. 100 Def is already tanky on the physical side. The only weakness is HP — 75 is low for something that wants to take a hit before hitting back. Bumping to 85 HP gives Armaldo the bulk to actually switch in and do its job. Speed stays at 45 — Armaldo doesn't need speed, it needs to survive long enough to swing.

## Learnset

### Anorith (evolves at 40 — vanilla)

Anorith needs good moves early since it won't evolve until L40. The learnset front-loads contact moves so Tough Claws kicks in immediately.

| Level | Move | BP | Type | Contact? | Purpose |
|-------|------|----|------|----------|---------|
| 1 | Scratch | 40 | Normal | Yes (52) | Basic contact move |
| 1 | Harden | — | Normal | — | Early bulk |
| 8 | **Fury Cutter** | 40→80→160 | Bug | **Yes (52+)** | First synergy move. Escalating contact Bug STAB — build turns on. |
| 12 | **Metal Claw** | 50 | Steel | **Yes (65)** | Steel coverage, contact. May raise Atk. Hits Rock/Ice/Fairy. |
| 18 | **Rock Blast** | 25×2-5 | Rock | No | Multi-hit Rock STAB — breaks Sash/Sturdy. On Roxanne's set. |
| 24 | **X-Scissor** | 80 | Bug | **Yes (104→156 STAB)** | Real Bug STAB — usable well before evolution. |
| 30 | **Aqua Jet** | 40 | Water | **Yes → 52** | +1 priority. Patches 75→52 effective with Tough Claws. |
| 36 | **Stone Edge** | 100 | Rock | **Yes → 130, STAB → 195** | Rock STAB nuke before evolution. |

### Armaldo (evolves from Anorith at 40)

Inherits all of Anorith's moves at L1. Post-evolution learnset adds power moves that reward evolving.

| Level | Move | BP | Type | Contact? | Purpose |
|-------|------|----|------|----------|---------|
| 1 | (all Anorith moves) | — | — | — | Retained via Move Reminder |
| 42 | **Aqua Tail** | 90 | Water | **Yes → 117** | Water coverage, contact. Hits Fire/Ground/Rock. |
| 46 | **Brick Break** | 75 | Fighting | **Yes → 97** | Fighting coverage, contact. Breaks screens. Hits Steel/Normal/Dark. |
| 52 | **Liquidation** | 85 | Water | **Yes → 110** | Upgraded water move. Contact. May lower Def. |
| 56 | **Earthquake** | 100 | Ground | No | Exception — not contact, but too important to skip. Ground coverage. |
| 62 | Swords Dance | — | Normal | — | Late-game setup. +2 Atk on an already monstrous 125 base = game over. |

## The Math

With 125 Atk + Tough Claws (1.3x on contact moves):

| Move | BP | Tough Claws | STAB | Effective |
|------|----|-------------|------|-----------|
| **Stone Edge** | 100 | ×1.3 = 130 | ×1.5 | **195** |
| **X-Scissor** | 80 | ×1.3 = 104 | ×1.5 | **156** |
| **Aqua Tail** | 90 | ×1.3 = 117 | — | **117** |
| **Liquidation** | 85 | ×1.3 = 110 | — | **110** |
| **Brick Break** | 75 | ×1.3 = 97 | — | **97** |
| **Metal Claw** | 50 | ×1.3 = 65 | — | **65** |
| **Aqua Jet** | 40 | ×1.3 = 52 | — | **52** |
| Earthquake | 100 | — | — | **100** |

**Choice Band Stone Edge:** 195 effective BP off 187 Atk (125 x 1.5 Band). This OHKOs almost anything that doesn't resist Rock.

**Coverage logic:**
- Rock + Bug STAB covers Grass, Psychic, Dark, Flying, Fire, Ice
- They resist Rock → X-Scissor (Bug hits Psychic/Dark/Grass)
- They resist Bug → Stone Edge (Rock hits Flying/Fire/Ice)
- Steel walls both STABs → Earthquake or Brick Break
- Water types → X-Scissor or Brick Break
- Aqua Jet picks off anything weakened regardless of Speed

**Optimal 4-move sets:**
- **Wallbreaker:** Stone Edge / X-Scissor / Earthquake / Aqua Jet
- **Coverage:** Stone Edge / X-Scissor / Brick Break / Aqua Tail
- **Setup:** Swords Dance / Stone Edge / X-Scissor / Aqua Jet
- **Band:** Stone Edge / X-Scissor / Liquidation / Brick Break

## Ideal Items

1. **Choice Band** — 125 Atk x 1.5 = 187 effective. Stone Edge at 195 effective BP off 187 Atk. Armaldo picks a contact move and obliterates whatever is in front of it. Being locked is fine — Armaldo is slow anyway and often only gets 1-2 attacks before switching.
2. **Life Orb** — 1.3x on everything + flexible moveset. Stacks with Tough Claws: contact moves get 1.3 x 1.3 = 1.69x effective multiplier. Recoil hurts but 85/100/80 bulk can take it.
3. **Assault Vest** — 1.5x SpDef. Turns 80 SpDef into effective 120. Armaldo becomes a mixed wall (100 Def / 120 effective SpDef) that still hits like a truck with Tough Claws. The tanky option.

## Core Strategy

### The Armored Wallbreaker
1. Armaldo switches in on something it resists or on a forced switch (Normal, Poison resist)
2. Pick the right contact move for the matchup — Stone Edge for neutral, X-Scissor for Psychic/Dark, Liquidation for Ground/Fire
3. Hit incredibly hard. 125 Atk + Tough Claws + STAB = most things take 50%+ even on resisted hits
4. Opponent brings in a faster threat → Aqua Jet to pick off if weakened, or take the hit on 85/100/80 bulk and swing back
5. Armaldo trades 1-for-1 at worst, often 2-for-1 because it's so hard to switch into

### When to Use Armaldo
- **Wallbreaking:** Choice Band Stone Edge breaks through physically bulky Pokemon
- **Mid-game pivot:** Switch in on resisted hits (Normal, Poison), force the opponent to react
- **Priority cleanup:** Aqua Jet means 45 Speed doesn't matter for finishing weakened threats
- **Swords Dance setup:** On a forced switch, +2 Atk with Tough Claws is gg — nothing survives
- **NOT a lead.** Armaldo is slow and wants to pick its spots. Don't send it in first.

## Armaldo vs Other Physical Attackers

| | Fearow | Raticate | Armaldo |
|---|--------|----------|---------|
| **Role** | Kamikaze nuke | Coverage attacker | Contact wallbreaker |
| **Ability** | Reckless | Strong Jaw | Tough Claws |
| **Atk** | 110 | 95 | 125 |
| **Speed** | 105 | 100 | 45 |
| **Bulk** | Paper (65/65/61) | Paper (55/60/70) | Tanky (85/100/80) |
| **Damage** | Extreme, suicidal | High, versatile | Extreme, sustainable |
| **Priority** | Quick Attack | Quick Attack | Aqua Jet |
| **Fantasy** | "I don't care if I die" | "I always have the right fang" | "Nothing walls me, nothing moves me" |

Armaldo is the slowest but tankiest and hardest-hitting. It doesn't outspeed threats — it outlasts them and overpowers them. Fearow dies in 2 turns; Armaldo can last 4-5 if played right.

## Team Synergy

- Pairs with fast Pokemon that cover Armaldo's Water/Steel weaknesses (Electric types, Grass types)
- Rain teams: Swift Swim Armaldo in rain doubles Speed to 90 — suddenly a sweeper instead of a wallbreaker
- Complements special attackers — Armaldo draws in physical walls, while special attackers draw in special walls
- Aqua Jet provides priority the team might lack
- Swords Dance + Aqua Jet is a late-game wincon if the opponent's team is chipped

## Matchup Analysis

**Strong vs:** Normal (resist), Poison (resist), Grass (Bug STAB SE), Psychic (Bug STAB SE), Dark (Bug STAB SE), Fire (Rock STAB SE + Water coverage), Flying (Rock STAB SE), Ice (Rock STAB SE + Brick Break)
**Weak vs:** Water (SE, and Armaldo's Water moves are off-type), Steel (resists both STABs — need Earthquake/Brick Break), Rock (high Def + SE with some), Ground (Earthquake SE)
**Key vulnerability:** 45 Speed means Armaldo always takes a hit first. Strong special attackers with Water/Steel moves can 2HKO before Armaldo gets going. Aqua Jet helps but only for weakened targets.
