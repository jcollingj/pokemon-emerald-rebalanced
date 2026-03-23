---
name: Oddish
dex_number: 43
status: implemented
ability: Effect Spore (reworked as "Spore Cloud")
role: Priority Status Spreader
ideal_items: Wide Lens, Black Sludge, Choice Specs
evolution_line: [Oddish, Gloom, Vileplume]
---

# Oddish / Gloom / Vileplume — Design Notes

## Design Brainstorm

Three distinct ability options were considered. The recommended option is **highlighted**.

---

### Option 1: Chlorophyll — The Solar Bloom

**Ability:** Chlorophyll (vanilla) — Speed doubles in harsh sunlight.

**Build identity:** A sun-powered special sweeper that uses Sleep Powder to disable threats, then fires Solar Beam with no charge turn under sunny skies.

**Signature interaction:** Sleep Powder → Solar Beam (instant in sun, 120 BP). The foe never gets a turn to interrupt.

**Pros:**
- Clear fantasy, self-explanatory — players immediately understand "sun + sleep + nuke"
- Strong math: 110 SpA + Solar Beam at 120 BP is threatening even without a held item
- Synthesis heals 2/3 HP in sun, giving real longevity
- No item required to activate (just sun support)

**Cons:**
- Sun-dependent — needs Drought or Sunny Day setup from a teammate or Vileplume itself
- Shiftry already has Chlorophyll as its alt ability — slight role overlap on sun teams
- Does not solve the L12-13 encounter window (Chlorophyll has no effect until sun is up, and sun setters are rare in early Segment 3)
- Speed even with Chlorophyll (~130 with boost) is modest; fast Electric types still revenge-kill

---

### ✅ Option 2 (RECOMMENDED): Effect Spore → "Spore Cloud" — Priority Status Spreader

**Ability:** Effect Spore reworked as **Spore Cloud** — *The user's powder and spore moves gain +1 priority.*

**Build identity:** A status control specialist that always puts enemies to sleep or paralyzes them before they can act, then punishes immobilized foes with 115 SpA.

**Signature interaction:** Priority Sleep Powder → free attack turn with Giga Drain or Petal Blizzard. The opponent can never interrupt the sleep — even faster Pokemon get put under before they move.

**Pros:**
- Fills a completely unique gap: no other Pokemon in the game does priority status spreading (Roselia does drain priority, Breloom does attack priority — Vileplume does *status* priority)
- Creates a clean 2-step combo: priority sleep → exploit with 115 SpA. The player feels clever every time.
- Works at all game stages — even Oddish at L12 with priority Stun Spore is a real threat on trainer teams
- Thematically perfect: Vileplume has the heaviest pollen load of any Pokemon; it chokes opponents with spores before they can react
- Doesn't require setup items or weather to function

**Cons:**
- Sleep is inherently powerful — balancing 100% priority sleep requires the player to respect the accuracy miss chance (75%)
- Still needs a strong non-priority attack to close out fights; raw 65 Spe isn't impressive outside priority moves

---

### Option 3: Corrosion — The Universal Poisoner (Unusual Option)

**Ability:** Corrosion — Can poison any Pokemon, including Steel and Poison types that are normally immune.

**Build identity:** A Poison-type specialist that bypasses immunity walls to poison any target, then nukes them with Venoshock for massive burst damage.

**Signature interaction:** Toxic (poisons Steel/Poison types like Lairon, Aggron, Magneton that are normally immune) → Venoshock (130 BP × 1.5 STAB = 195 effective). The Steel wall you thought was safe isn't.

**Pros:**
- Distinct anti-Steel niche that no current Poison type fills (Nidoking is self-poisoner; Tentacruel traps; Roselia drains)
- 115 SpA Venoshock is devastating once poison is applied
- Late-game Steel and Poison types become legitimate targets rather than hard counters

**Cons:**
- Reactive setup — needs Toxic to land first, then wait a turn for poison to apply before Venoshock pays off
- Overlaps thematically with Roselia's Toxic + Venoshock combo (though Roselia focuses on drain recovery, not burst)
- Doesn't solve Vileplume's 50 Speed — still gets outsped and KO'd before the setup pays off
- Less consistent in early game (Corrosion is wasted when poisoning normal-immune targets isn't relevant)

---

## Recommendation: Option 2 — Spore Cloud

Priority Sleep Powder is the freshest design space in the current roster. The "Spore Cloud" rework keeps Effect Spore's thematic flavor (Vileplume releases pollen) while making it tactically relevant. It fills a role nobody else occupies: *status first, every time*.

The combo is immediately legible — players encounter it on trainer Vileplume teams and instantly understand "oh, it always sleeps you before you move." When they catch their own, they feel the same power. The 2-step loop (priority sleep → 115 SpA nuke) clicks in the same satisfying way as Beedrill (poison → crit) or Nidoking (self-poison → Toxic Boost damage).

Chlorophyll is available as **Ability 2** for sun team alt builds. The sun sweeper fantasy still exists — it's just not the primary identity.

---

## Build Identity

**Vileplume is a priority status spreader that uses Spore Cloud to put enemies to sleep before they can act, then punishes immobilized foes with 115 SpA Grass and Poison coverage.**

---

## Ability Changes

- **Ability 1: Spore Cloud** (Effect Spore reworked) — Powder and spore moves gain +1 priority. Sleep Powder, Stun Spore, Poison Powder, and Spore all go first.
- **Ability 2: Chlorophyll** — Speed doubles in sun. Alt sweeper build for sun teams; Solar Beam with no charge + double speed is a legitimate threat.
- **Hidden: Stench** — 10% flinch chance. Vanilla flavor; no competitive relevance. Could be replaced but thematically fits the "noxious flower" identity.

---

## Stat Changes

### Oddish

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 45 | **50** | +5 |
| Atk | 50 | **35** | -15 |
| Def | 55 | 55 | — |
| SpA | 75 | **80** | +5 |
| SpD | 65 | **70** | +5 |
| Spe | 30 | **35** | +5 |
| **BST** | **320** | **325** | **+5** |

Oddish is a fragile seed absorbing nutrients. The SpA/SpD nudge previews Vileplume's special identity. Attack is deprioritized — Oddish has no business hitting physically.

### Gloom

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | **65** | +5 |
| Atk | 65 | **45** | -20 |
| Def | 70 | 70 | — |
| SpA | 85 | **92** | +7 |
| SpD | 75 | **82** | +7 |
| Spe | 40 | **50** | +10 |
| **BST** | **395** | **404** | **+9** |

Gloom's attack is dropped hard to reinforce the special identity established in Oddish. Speed uptick makes non-priority moves feel less sluggish during the L21-36 mid-game window.

### Vileplume

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 75 | **80** | +5 |
| Atk | 80 | **55** | -25 |
| Def | 85 | **90** | +5 |
| SpA | 110 | **115** | +5 |
| SpD | 90 | **100** | +10 |
| Spe | 50 | **65** | +15 |
| **BST** | **490** | **505** | **+15** |

**Rationale:**
- **65 Speed** — Vileplume doesn't need to be fast (it uses priority status), but 50 was cripplingly slow for its non-priority offensive moves. 65 gets it to a functional tier: faster than most walls, not racing offensive threats. With Chlorophyll it hits 130, which is competitive.
- **115 SpA** — The payoff stat. After priority sleep, every attack from Vileplume is punishing. Giga Drain at 115 SpA heals significant HP. Petal Dance is a nuke.
- **100 SpD** — Vileplume switches into special attacks to begin its status loop. 100 SpD gives it the survivability to actually take a hit before acting.
- **55 Atk** — Zero physical identity. Redistributed to SpA/SpD/Spe.

---

## Learnset

### Oddish

| Level | Move | BP | Type | Priority? | Purpose |
|-------|------|----|------|-----------|---------|
| 1 | Absorb | 20 | Grass | — | Basic STAB + drain |
| 1 | Sweet Scent | — | Normal | — | Lowers evasion; thematic |
| 8 | **Stun Spore** | — | Grass | **+1 (Spore Cloud)** | First synergy move — build turns on. Paralyze before foe acts. |
| 12 | **Sleep Powder** | — | Grass | **+1 (Spore Cloud)** | Second synergy move. Priority sleep is devastating — the build feels real. |
| 16 | Mega Drain | 40 | Grass | — | STAB sustain; Oddish needs something offensive |

### Gloom (evolves at L21)

| Level | Move | BP | Type | Priority? | Purpose |
|-------|------|----|------|-----------|---------|
| 21 | **Acid Spray** | 40 | Poison | — | Guaranteed -2 SpDef on the target. Drop their defenses, then nuke. |
| 27 | **Giga Drain** | 75 | Grass | — | Primary mid-game STAB. 75 BP + STAB + 50% HP drain = workhorse move. Pairs with Acid Spray's SpDef drop. |

### Vileplume (evolves via Leaf Stone)

| Level | Move | BP | Type | Priority? | Purpose |
|-------|------|----|------|-----------|---------|
| 33 | **Moonblast** | 95 | Fairy | — | Surprise coverage. Flowers bloom under moonlight — Fairy hits Dragon/Dark/Fighting types that Grass/Poison miss. |
| 36 | **Petal Blizzard** | 90 | Grass | — | Evolution reward. Raw power Grass STAB with no confusion lock. The default "nuke something" button. |
| 42 | **Sludge Bomb** | 90 | Poison | — | Heavy Poison STAB. 30% poison for chip. Handles Grass types immune to Sleep Powder. |
| 48 | **Petal Dance** | 120 | Grass | — | Endgame nuke. 120 BP STAB is massive. You put the foe to sleep first — they can't exploit the confusion lock. |

### Key Move Interactions

**Priority moves via Spore Cloud:**
- Stun Spore — paralyze before opponent acts
- Sleep Powder — sleep before opponent acts (accuracy 75%)
- Poison Powder — poison before opponent acts

**Spore Cloud exploit loop:**
1. Switch in on something Vileplume resists or that doesn't threaten it immediately
2. Priority Sleep Powder (goes before any non-priority move)
3. Free turn: Acid Spray (-2 SpDef), Giga Drain for healing, or Sludge Bomb coverage
4. Continue pressing Giga Drain while they sleep — drain + STAB on -2 SpDef target is massive
5. If they wake up: Sleep Powder again (75% accuracy, but they can't move first regardless)

**Grass-type counter:** Grass types are immune to Sleep Powder and resist Giga Drain. Against them: Sludge Bomb STAB or Moonblast.
**Overcoat/Leaf Guard counter:** Abilities that block powder moves. Against them: Sludge Bomb/Petal Blizzard raw attacks.

---

## The Math

With 115 SpA and Spore Cloud:

| Move | BP | STAB | Effective | Priority? | Notes |
|------|----|------|-----------|-----------|-------|
| **Sleep Powder** | — | — | — | **+1** | 75% accuracy; guaranteed to go first |
| **Stun Spore** | — | — | — | **+1** | Guaranteed to go first |
| **Giga Drain** | 75 | ×1.5 | **112.5** | — | +50% HP drained; 75% of target's damage returned as HP |
| **Petal Blizzard** | 90 | ×1.5 | **135** | — | Raw power STAB, no strings attached |
| **Sludge Bomb** | 90 | ×1.5 | **135** | — | 30% poison; wall breaker |
| **Petal Dance** | 120 | ×1.5 | **180** | — | Nuclear nuke, locks you in — use after foe is sleeping |
| **Moonblast** | 95 | — | **95** | — | Fairy coverage |

**Acid Spray + Giga Drain combo:**
- Acid Spray drops target to -2 SpDef (×0.5 to their SpDef effectively)
- Giga Drain: 112.5 effective → ~225 effective against -2 SpDef
- At 115 SpA, this bursts through most defensive Pokemon in 1-2 hits

---

## Ideal Items

1. **Wide Lens** — Raises Sleep Powder accuracy from 75% to 82.5%. This is Vileplume's signature item. Priority sleep is the entire gameplan — missing it is catastrophic. Wide Lens makes the build consistent. The math: 82.5% accuracy with priority means you land sleep before the opponent moves in roughly 5 out of 6 encounters.

2. **Black Sludge** — Passive 1/16 HP per turn (Poison-type only). Stacks with Giga Drain healing. For a longer-game approach: Vileplume cycles sleep → drain → passive heal and becomes surprisingly hard to wear down.

3. **Choice Specs** — For a more aggressive build, skip the sleep setup entirely. 1.5× on 115 SpA turns Giga Drain (168.75 effective STAB + drain) and Petal Dance (270 effective STAB) into wall-breaking tools. Sacrifices flexibility for raw power.

---

## Core Strategy

### The Sleep Loop (Primary)
1. Switch Vileplume into a special attacker it resists (Water, Electric, Grass, Fighting, Fairy)
2. **Priority Sleep Powder** — goes before the opponent regardless of speed. 82.5% with Wide Lens.
3. Free turn: **Acid Spray** to drop SpDef by 2 stages, OR **Giga Drain** to punish immediately
4. Cycle **Giga Drain** while target sleeps — STAB + 50% HP drain keeps Vileplume healthy
5. When target wakes up: **Sleep Powder** again. They can't move first.

### When to Use Vileplume
- **Anti-special attacker:** 80 HP / 100 SpD absorbs special hits before setting up sleep
- **Team controller:** Against teams where specific Pokemon need to be disabled (ace Pokemon, setup sweepers)
- **Sun teams:** Chlorophyll alt turns Vileplume into a 130-speed Solar Beam sweeper — different fantasy, same stats
- **NOT vs Grass types:** Immune to Sleep Powder and resist Giga Drain. Lead Sludge Bomb against Grass.
- **NOT vs Overcoat/Leaf Guard:** Bypass powder moves entirely. Use raw attacks.

### Sample Movesets

**Sleep Looper (Primary):**
- Sleep Powder / Giga Drain / Acid Spray / Sludge Bomb
- Item: Wide Lens
- Strategy: Priority sleep, exploit with SpDef drop and drain

**The Drain Sustainer:**
- Sleep Powder / Giga Drain / Moonblast / Sludge Bomb
- Item: Black Sludge
- Strategy: Passive healing + drain loop for extended fights

**Sun Sweeper (Chlorophyll build):**
- Sleep Powder / Solar Beam / Sludge Bomb / Moonblast
- Item: Heat Rock or Lum Berry
- Strategy: Set up sun, sleep the lead, fire 120 BP instant Solar Beams at double speed

---

## Vileplume vs Other Grass-Types

| | Sceptile | Breloom | Roselia | Shiftry | Vileplume |
|--|---------|---------|---------|---------|-----------|
| **Role** | Speed sweeper | Priority fighter | Priority drain mage | Escalating sweeper | Priority status spreader |
| **Ability** | Unburden | Technician | Triage | Contrary | Spore Cloud |
| **Priority move** | None (uses speed) | Mach Punch (+1 atk) | Drain moves (+3) | None | Sleep Powder/Stun Spore (+1) |
| **Fantasy** | "I go nuclear after using my item" | "Every weak move hits hard" | "I heal faster than you hurt me" | "Each attack makes me stronger" | "You can't move before I put you to sleep" |

Each Grass-type fills a different role. Vileplume is the only one with priority *status* — it controls the pace of battle differently than Roselia (damage+heal) or Breloom (raw priority attack).

---

## Team Synergy

- **Pelipper (Drizzle):** In rain, Water-boosted Scald from teammates is more threatening. Vileplume's Grass STAB is unaffected by rain. Priority sleep covers the Electric types that would threaten Pelipper/water Pokemon.
- **Blaziken / Torchic:** Vileplume's priority sleep controls faster threats that outspeed Blaziken. Blaziken covers Ice, Fire, and Bug types that threaten Vileplume.
- **Gardevoir / Ralts:** Both Special attackers. Vileplume puts something to sleep; Gardevoir nukes the next one in. Empathic Trace Gardevoir can actually copy Spore Cloud if it traces it — interesting doubles synergy.
- **Nidoking (Toxic Boost):** Nidoking self-poisons and sweeps; Vileplume puts the next threat to sleep so Nidoking can switch back in safely.

---

## Matchup Analysis

**Strong vs:** Water (resist + Giga Drain), Electric (resist), Grass (Sludge Bomb), Fighting (resist + sleep), Fairy (Sludge Bomb), Psychic (sleep + Sludge Bomb). Any non-Grass special attacker is fear for Vileplume.

**Weak vs:** Fire (4× weakness from Grass), Ice (super effective), Flying (super effective), Psychic (super effective from Poison). Physical attackers that can bypass the sleep turn.

**Key vulnerability:** Berries that cure sleep (Lum Berry, Chesto Berry) neutralize the entire gameplan on turn 1. Vileplume needs to exploit the sleep turn immediately with Acid Spray or Giga Drain rather than sitting on it.

**The Overcoat problem:** Pokemon with Overcoat or Leaf Guard are immune to powder moves. Against these opponents, Vileplume must play as a raw 115 SpA attacker — still functional but loses the priority advantage.

---

## Encounter Context

Oddish appears on Route 110 at levels 12-13 (uncommon). At L12-13, it knows Absorb, Sweet Scent, Stun Spore, and Sleep Powder — all four moves available by capture. The player encounters Stun Spore with +1 priority on trainer teams before they catch their own, introducing the mechanic as a threat first. When they catch Oddish and realize their Sleep Powder goes first against everything, the build clicks immediately.

At L21 (Gloom evolution), Acid Spray adds the SpDef-drop combo. The design is fully online by ~L27 with Giga Drain — well within the Segment 3 power window.

Leaf Stone evolution to Vileplume happens whenever the player chooses to use it (Stone available from shops post-Rustboro). The player can hold off for Petal Blizzard/Moonblast as level-up moves on Gloom if preferred, or evolve early for the stat boost.
