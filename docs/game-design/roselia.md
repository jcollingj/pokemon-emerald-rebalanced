---
name: Roselia
dex_number: 315
status: designed
ability: Triage
role: Priority Drain Mage
ideal_items: Big Root, Black Sludge, Wise Glasses
evolution_line: [Roselia]
---

# Roselia - Rebalance Notes

## Design Philosophy
Roselia is a priority drain mage — a special attacker that uses Triage to turn every draining move into a priority move. Giga Drain, Mega Drain, Absorb, and Leech Seed all move first, meaning Roselia constantly heals itself while attacking before the opponent can respond. Despite modest bulk, Roselia is deceptively hard to kill because it never lets the opponent hit first when it's draining.

Without Roserade in Gen 1-3, Roselia needs to stand on its own. 100 SpA is genuinely strong for a single-stage Pokemon. Triage gives it a unique combat loop that no other Pokemon in the game replicates: attack, heal, repeat — and always go first doing it.

## Ability Changes

- **Ability 1: Triage** — HP-draining moves gain +3 priority. Core identity. Giga Drain, Mega Drain, Absorb, and Draining Kiss all become priority moves. Leech Seed also gains priority for setup.
- **Ability 2: Natural Cure** — Status heals on switch-out. Solid utility backup. Roselia can absorb Toxic/status and pivot out.
- **Hidden: Poison Point** — Contact moves may poison. Filler, not exciting but thematic.

### Why Triage?

Triage solves two problems at once:
1. **Speed problem** — 65 Speed is mediocre. Roselia would normally get outsped and KO'd before it can do anything meaningful. Triage bypasses speed entirely on its key moves.
2. **Bulk problem** — 50/45/80 defenses are thin. But when every attack also heals you AND moves first, effective bulk is much higher than the numbers suggest.

The result: Roselia plays like a vampire that's impossible to race. You can't outspeed its drain moves. You have to either one-shot it or resist Grass.

## Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 50 | **60** | +10 |
| Atk | 60 | 40 | -20 |
| Def | 45 | **50** | +5 |
| SpA | 100 | **110** | +10 |
| SpD | 80 | **90** | +10 |
| Spe | 65 | 65 | - |
| **BST** | **400** | **415** | **+15** |

**Rationale:**
- **110 SpA** — Roselia's main selling point. Giga Drain at 110 SpA with priority hits hard AND heals a lot.
- **60 HP / 50 Def / 90 SpD** — Modest bump to survive a hit. SpD is higher because Roselia is a Grass/Poison type that naturally tanks special Grass/Water hits. Not bulky enough to wall, but bulky enough that drain-healing keeps it alive.
- **40 Atk** — Roselia has zero business attacking physically. Dumped to redistribute.
- **65 Spe** — Unchanged. Speed doesn't matter when your key moves have +3 priority.

## Learnset

| Level | Move | BP | Type | Priority? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Absorb | 20 | Grass | **+3 (Triage)** | Starting drain move — weak but priority |
| 1 | Growth | — | Normal | — | Setup utility |
| 8 | **Mega Drain** | 40 | Grass | **+3 (Triage)** | Upgrade to Absorb. Build turns on — 40 BP priority drain at L8 is legit |
| 12 | **Poison Sting** | 30 | Poison | No | Secondary STAB, 30% poison chance |
| 16 | **Leech Seed** | — | Grass | **+3 (Triage)** | Priority Leech Seed is disgusting. Seed first, then drain. Double healing every turn. |
| 21 | Stun Spore | — | Grass | — | Status utility for when you can't drain (Grass-types) |
| 24 | **Venoshock** | 65 | Poison | No | 130 BP if target is poisoned. Pairs with Poison Sting/Toxic for burst |
| 27 | **Giga Drain** | 75 | Grass | **+3 (Triage)** | The signature move. 75 BP + STAB + priority + drain. This is why you use Roselia. |
| 33 | Toxic | — | Poison | — | Sets up Venoshock combo. Also stacks with Leech Seed for passive damage |
| 36 | **Sludge Bomb** | 90 | Poison | No | Heavy Poison STAB. 30% poison chance enables Venoshock follow-up |
| 40 | Synthesis | — | Grass | **+3 (Triage)** | Priority heal (50% HP). Emergency button when low. |
| 44 | **Draining Kiss** | 50 | Fairy | **+3 (Triage)** | Fairy coverage + drain + priority. Hits Dragon/Fighting/Dark that Grass/Poison struggle with. |
| 48 | **Petal Dance** | 120 | Grass | No | Non-priority nuke. When you need raw power over priority. Locks you in but 120 BP STAB is massive. |

### Key Move Interactions

**Triage-boosted moves (all +3 priority):**
- Absorb (20 BP) — weak but it's free chip + heal
- Mega Drain (40 BP) — early game workhorse
- Giga Drain (75 BP, STAB = 112.5 effective) — the bread and butter
- Draining Kiss (50 BP) — Fairy coverage
- Leech Seed — priority seeding, opponent can't KO you before seed lands
- Synthesis — priority 50% heal

**Non-priority moves (for when you need raw damage):**
- Venoshock (65/130 BP) — burst on poisoned targets
- Sludge Bomb (90 BP, STAB = 135 effective) — best raw damage
- Petal Dance (120 BP, STAB = 180 effective) — ultimate nuke, but locked

## The Math

With 110 SpA and Triage (+3 priority on drain moves):

| Move | BP | STAB | Effective | Priority? | Drain |
|------|----|------|-----------|-----------|-------|
| **Giga Drain** | 75 | x1.5 | **112.5** | +3 | 50% dealt |
| **Draining Kiss** | 50 | — | **50** | +3 | 75% dealt |
| **Mega Drain** | 40 | x1.5 | **60** | +3 | 50% dealt |
| Sludge Bomb | 90 | x1.5 | **135** | No | — |
| Venoshock (poisoned) | 130 | x1.5 | **195** | No | — |
| Petal Dance | 120 | x1.5 | **180** | No | — |

**Big Root Giga Drain:** 112.5 effective BP, drains 50% of damage dealt, Big Root boosts drain by 30%. So drain = 50% x 1.3 = 65% of damage returned as HP. Roselia attacks first AND heals 65% of what it dealt. That's a sustain machine.

**Toxic + Leech Seed + Giga Drain loop:**
1. Turn 1: Priority Leech Seed (opponent seeded before they can move)
2. Turn 2: Toxic (poison ticks + seed drain + residual)
3. Turn 3+: Priority Giga Drain every turn. You're healing from three sources: Giga Drain, Leech Seed, and watching Toxic tick up.

**Venoshock burst combo:**
1. Sludge Bomb (135 effective, 30% poison)
2. If poisoned: Venoshock (195 effective) — massive spike damage
3. Fall back to priority Giga Drain to sustain

## Ideal Items

1. **Big Root** — Drain moves heal 30% more. Giga Drain heals 65% of damage dealt instead of 50%. This is Roselia's signature item — it turns the sustain loop from strong to obscene. Every priority drain keeps Roselia topped off.
2. **Black Sludge** — Passive 1/16 HP heal per turn (Poison-type only). Stacks with Leech Seed and drain healing. For a more passive, tanky approach. Also punishes Trick/Switcheroo users who steal it.
3. **Wise Glasses** — 1.1x special move damage. More damage = more drain healing. Generic but effective when you want both damage and sustain without committing to Big Root.

## Core Strategy

### The Drain Loop
1. Lead or switch Roselia in on a Water/Electric/Grass special attacker it resists
2. Priority Leech Seed (goes first at +3, guaranteed to land before opponent moves)
3. Priority Giga Drain every turn afterward. You attack first, heal off the damage, and Leech Seed heals you more at end of turn
4. Opponent is stuck: they can't outspeed your drain, and every turn you heal back chip damage
5. If they switch to a Grass-type (immune to Leech Seed + resist Giga Drain): Sludge Bomb or Venoshock

### When to Use Roselia
- **Anti-special wall:** Roselia soaks Water, Electric, Grass, and Fighting special attacks while draining back HP
- **Stall breaker (ironically):** Priority Leech Seed + Toxic + drain means Roselia out-sustains most defensive Pokemon
- **Mid-game sustain:** When your team needs a Pokemon that can stay healthy through multiple exchanges without items like Leftovers
- **NOT vs physical attackers.** 60/50 physical bulk crumbles to Earthquake, Return, etc. Roselia is a special-side fighter.

## Roselia vs Other Grass-Types

| | Sceptile | Breloom | Ludicolo | Roselia |
|---|---------|---------|----------|---------|
| **Role** | Speed sweeper | Priority physical | Rain staller | Priority drain mage |
| **Ability** | Unburden | Technician | Rain Dish | Triage |
| **Attack stat** | Mixed → Physical | 130 Atk | SpA (rain) | 110 SpA |
| **Speed solution** | Unburden doubles | Mach Punch priority | Doesn't need it | Triage priority |
| **Survivability** | Low (glass cannon) | Moderate | High (rain healing) | High (drain healing) |
| **Fantasy** | "I consume my item and go nuclear" | "Weak moves hit like trucks" | "Rain makes me unkillable" | "I heal faster than you hurt me" |

Each Grass-type fills a completely different role. Roselia is unique as the special-attacking priority drain user.

## Team Synergy

- **Pairs with physical walls** that cover Roselia's physical weakness (Swampert, Nosepass)
- **Pelipper/Drizzle** teammate is interesting — rain weakens Roselia's Fire weakness but also weakens Synthesis healing. Mixed bag.
- **Beedrill** can poison targets with Poison Sting, then Roselia can Venoshock for burst
- **Covers Water/Ground/Rock types** that threaten Fire and Ground teammates
- Roselia absorbs Toxic Spikes on entry (Poison-type), keeping the team clean

## Matchup Analysis

**Strong vs:** Water (resist + drain), Electric (resist), Grass (Sludge Bomb), Fighting (resist), Fairy (Sludge Bomb). Special attackers in general.
**Weak vs:** Fire (super effective, can't drain enough), Ice (super effective), Flying (super effective), Psychic (super effective), Physical attackers in general.
**Key vulnerability:** Any strong physical attacker one-shots through the drain healing. Roselia's priority means nothing if the opponent lives the Giga Drain and retaliates physically for a KO.

## Encounter Context

Roselia appears on trainer Daisy's team at Route 103, Level 14. At that point it knows Absorb, Growth, Mega Drain, and Poison Sting. Mega Drain with Triage priority at L14 is a noticeable threat — the player's team won't expect a priority drain move from a trainer's Pokemon, and it keeps Roselia healthy through the fight. This is a "teach the player about the mechanic" encounter.
