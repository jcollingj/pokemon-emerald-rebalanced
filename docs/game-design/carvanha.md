---
name: Carvanha
dex_number: 318
status: brainstorm
evolution_line: [Carvanha, Sharpedo]
---

# Carvanha / Sharpedo - Brainstorm

## The Problem

Vanilla Sharpedo has Rough Skin, which is a passive reactive ability that doesn't shape moveset choices at all. It's exactly the kind of ability the design philosophy says to replace. Sharpedo is already a glass cannon (70/40/40 bulk) so chip damage on contact doesn't fit its identity -- it dies before Rough Skin matters.

Sharpedo is Water/Dark with 120 Atk and 95 Speed. It's a shark. It bites things. The build should be about biting.

## Key Constraint: Not Raticate

Raticate already owns the "Strong Jaw + fang coverage across every type" niche. Raticate's identity is "I always have the right fang for the matchup" -- breadth of coverage. Sharpedo needs a DIFFERENT biting identity even though it uses biting moves.

**Raticate = coverage breadth (6 types of fangs, pick the right one)**
**Sharpedo = raw STAB bite power (Water + Dark bites hit HARD)**

Sharpedo's Water/Dark typing is the key differentiator. It has two STAB types on biting moves: Crunch (Dark, 80 BP) and Fishious Rend (Water, 85 BP that doubles if moving first). Plus Psychic Fangs for coverage. The fantasy is a shark that moves first and tears through everything with raw STAB damage, not type coverage.

## Availability Note

Carvanha appears on the Team Aqua Grunt's team in Petalburg Woods at L9. The player doesn't catch it there, but it's an early showcase. Wild Carvanha are available later (Route 118/119 via fishing). Sharpedo evolves at L30.

---

## Ability Option 1: Strong Jaw (focused STAB build)

**The pitch:** Same ability as Raticate, but the moveset emphasizes STAB biting power instead of type coverage. Sharpedo's two STAB types (Water + Dark) both have biting moves, so Strong Jaw acts as a universal STAB amplifier.

**How it differentiates from Raticate:**
- Raticate has 6 fang types but no STAB on any of them except Hyper Fang (Normal)
- Sharpedo has Crunch (Dark STAB + Strong Jaw) and Fishious Rend (Water STAB + Strong Jaw + doubles if faster)
- Sharpedo's damage on its main moves is dramatically higher because STAB and Strong Jaw stack

**The math (120 Atk):**

| Move | BP | Strong Jaw | STAB | Speed Bonus | Effective |
|------|----|------------|------|-------------|-----------|
| **Fishious Rend** | 85 | x1.5 = 127 | x1.5 = 191 | x2 if faster = **382** | The nuke |
| **Crunch** | 80 | x1.5 = 120 | x1.5 | — | **180** |
| **Jaw Lock** | 80 | x1.5 = 120 | x1.5 | — | **180** (traps) |
| **Psychic Fangs** | 85 | x1.5 = 127 | — | — | **127** (breaks screens) |
| **Bite** | 60 | x1.5 = 90 | x1.5 | — | **135** (flinch) |
| **Poison Fang** | 50 | x1.5 = 75 | — | — | **75** (toxic poison) |

**Fishious Rend is the centerpiece.** At 382 effective BP when moving first, off 120 Atk, this is one of the hardest single hits in the game. The entire build revolves around going first -- 95 Speed already outspeeds most, and the payoff for outspeeding is enormous.

**Pros:**
- Simple, immediately understandable: "shark bites hard, bites first"
- Fishious Rend + Strong Jaw + STAB creates genuinely exciting math
- Clear differentiation from Raticate: Sharpedo has 2 moves at 180+ effective, Raticate has 1 (Hyper Fang at 180) and everything else is 97-127
- Speed matters -- creates tension around outspeeding (if you're slower, Fishious Rend is just 127 effective)

**Cons:**
- Same ability name as Raticate, which might feel like overlap even if the build plays differently
- Fishious Rend at 382 effective might be TOO strong -- could be format-warping
- Limited coverage: Water + Dark is walled by Fairy types and some Water types

**Items:**
1. **Choice Band** -- 120 x 1.5 = 180 Atk. Fishious Rend at 382 effective off 180 Atk. Absurd. Locked into one move, but when that move is Fishious Rend, who cares?
2. **Choice Scarf** -- Guarantees outspeeding for the Fishious Rend double. 95 x 1.5 = 142 effective Speed. Trades damage for reliability.
3. **Life Orb** -- 1.3x on everything, flexible moveset. Recoil hurts on 70 HP but Sharpedo isn't surviving long anyway.

---

## Ability Option 2: Custom "Feeding Frenzy" (biting moves get +1 priority at low HP)

**The pitch:** A new ability. When Sharpedo is below 33% HP, all biting moves gain +1 priority. This turns Sharpedo into a "berserker finisher" -- the lower its HP, the more dangerous it becomes because it always bites first.

**Thematic fit:** Sharks have a "feeding frenzy" response to blood in the water. The idea that a wounded Sharpedo becomes MORE aggressive and impossible to outspeed is flavorful and mechanically unique.

**How it plays:**
1. Sharpedo comes in, uses Crunch/Fishious Rend at normal speed (95 is already good)
2. It takes a hit, drops below 33%
3. Now ALL its biting moves are priority -- Crunch, Fishious Rend, Psychic Fangs all go first
4. Fishious Rend in particular benefits enormously from this -- guaranteed to move first means guaranteed double damage (170 effective STAB, no Strong Jaw boost)

**Pros:**
- Completely unique -- no other Pokemon has this ability
- Creates an exciting clutch moment: "Sharpedo is at 15 HP and it's still terrifying"
- Synergizes with glass cannon stats: 70/40/40 bulk means you're at low HP fast
- Fishious Rend interaction is clean: priority = move first = double damage = guaranteed 255 effective BP (85 x 2 x 1.5 STAB)
- Could run Focus Sash to guarantee the activation

**Cons:**
- New ability means implementation work (custom ability code)
- Might be too niche -- if Sharpedo OHKOs things, it never drops to 33% to activate
- Priority stacking with other priority moves in the meta could be complex
- Without Strong Jaw, base damage is lower: Crunch is 120 (STAB) instead of 180

**Items:**
1. **Focus Sash** -- Guarantees surviving to activate Feeding Frenzy. At 1 HP, Fishious Rend with priority = 255 effective.
2. **Life Orb** -- Speeds up getting to low HP while boosting damage. Self-destructive synergy.
3. **Sitrus Berry** -- Anti-synergy with the ability, but extends longevity for 2 priority turns instead of 1.

---

## Ability Option 3: Strong Jaw + Speed Boost (keep HA as Speed Boost)

**The pitch:** Strong Jaw as Ability 1 (replacing Rough Skin), keep Speed Boost as Hidden Ability. This gives Sharpedo TWO distinct builds: Strong Jaw for immediate STAB power, Speed Boost for snowball sweeping.

**Strong Jaw build:** Same as Option 1 -- Fishious Rend at 382 effective when faster.

**Speed Boost build:** Each turn Sharpedo gets +1 Speed. After one Protect, it outspeeds everything. Fishious Rend always doubles. The math is different:
- Fishious Rend: 85 x 2 (faster) x 1.5 (STAB) = 255 effective BP off 120 Atk
- No Strong Jaw, but guaranteed double because Speed Boost ensures you're always faster
- After 2 boosts, Sharpedo is uncatchable

**The tradeoff:**
- Strong Jaw: Higher single-hit damage (382 vs 255 on Fishious Rend), but no Speed insurance
- Speed Boost: Lower per-hit but guaranteed double, snowballs over turns

**Pros:**
- Two legitimate builds on one Pokemon (replay value)
- Speed Boost is already coded and on Sharpedo vanilla
- Strong Jaw differentiates the main build from Raticate via STAB stacking
- Players can choose: immediate power vs. setup sweeper

**Cons:**
- Speed Boost + Fishious Rend might be the "correct" answer and invalidate Strong Jaw
- Speed Boost is already on vanilla Sharpedo as HA, so it's not a fresh design
- If Speed Boost is too good, Strong Jaw becomes the "wrong" choice

**Items (Strong Jaw):** Choice Band / Choice Scarf / Life Orb (same as Option 1)
**Items (Speed Boost):** Life Orb / Focus Sash / Leftovers (Protect stalling)

---

## Recommended Direction: Option 1 (Strong Jaw, STAB power)

**Why Option 1 wins:**
- Simplest to implement (no custom abilities)
- Clearest differentiation from Raticate: same ability, totally different moveset and role
- Fishious Rend is the signature interaction that makes this build unique in the entire roster
- The speed-dependent damage of Fishious Rend creates natural counterplay (priority moves, Trick Room, faster Pokemon all reduce Sharpedo's output)

**Potential concern: Is Fishious Rend too strong?**
382 effective BP is massive, but consider:
- Sharpedo has 70/40/40 bulk -- literally any neutral hit chunks it
- It's a shark with Fishious Rend, not a bulky mon abusing it
- Dracovish was problematic in competitive because it had decent bulk (90/100/80) AND Strong Jaw + Fishious Rend. Sharpedo has neither the bulk nor the typing to abuse it the same way
- Water/Dark is resisted by common types (Fairy, Fighting, Grass, Bug)
- Choice Band locks you in, and Fishious Rend is only 127 effective if you DON'T outspeed

**Recommendation:** Go with Option 1 but consider dropping Speed Boost as HA to prevent the Speed Boost + Protect + Fishious Rend snowball. Replace HA with something less synergistic (Intimidate? Swift Swim for rain teams?).

---

## Stat Adjustments

Vanilla Sharpedo is already well-statted for this build. Minor tweaks to sharpen the glass cannon identity:

### Carvanha

| Stat | Vanilla | Suggested | Change |
|------|---------|-----------|--------|
| HP | 45 | 45 | - |
| Atk | 90 | 90 | - |
| Def | 20 | 20 | - |
| SpA | 65 | **45** | -20 |
| SpD | 20 | 20 | - |
| Spe | 65 | **75** | +10 |
| **BST** | **305** | **295** | **-10** |

Shift SpA to Speed. Carvanha is a physical attacker -- it doesn't need 65 SpA. 75 Speed at L9 (Petalburg Woods showcase) means it outspeeds most early-game threats, letting the player see Fishious Rend's double damage in action immediately.

### Sharpedo

| Stat | Vanilla | Suggested | Change |
|------|---------|-----------|--------|
| HP | 70 | 70 | - |
| Atk | 120 | 120 | - |
| Def | 40 | 40 | - |
| SpA | 95 | **65** | -30 |
| SpD | 40 | 40 | - |
| Spe | 95 | **105** | +10 |
| **BST** | **460** | **440** | **-20** |

Same philosophy: dump SpA into Speed. 105 Speed outspeeds the vast majority of the game, making Fishious Rend's double damage condition almost guaranteed. The BST actually drops, but the effective power goes up because every stat point is where it needs to be.

Alternatively, keep BST neutral by putting some SpA points into HP (70 -> 80) for slightly more switch-in opportunities. Glass cannons still need to switch in once.

---

## Learnset Direction

### Carvanha (evolves at 30)

| Level | Move | BP | Type | Biting? | Purpose |
|-------|------|----|------|---------|---------|
| 1 | Bite | 60 | Dark | **Yes** | STAB + synergy from L1. Build is online immediately. |
| 1 | Leer | -- | Normal | -- | Utility |
| 8 | **Aqua Jet** | 40 | Water | No | +1 priority Water STAB. Guarantees moving first for chip. |
| 12 | **Crunch** | 80 | Dark | **Yes -> 120, STAB -> 180** | Dark nuke. Build is fully real now. |
| 16 | Scary Face | -- | Normal | -- | Speed control -- sets up Fishious Rend doubles |
| 21 | **Poison Fang** | 50 | Poison | **Yes -> 75** | Badly poisons bulky targets. Utility bite. |
| 27 | **Psychic Fangs** | 85 | Psychic | **Yes -> 127** | Fighting coverage + breaks screens |

### Sharpedo (evolves from Carvanha at 30)

| Level | Move | BP | Type | Biting? | Purpose |
|-------|------|----|------|---------|---------|
| 30 | **Fishious Rend** | 85 | Water | **Yes -> 127, STAB -> 191, if faster -> 382** | Evolution reward. THE move. |
| 33 | **Jaw Lock** | 80 | Dark | **Yes -> 120, STAB -> 180** | Traps opponent -- forces them to take the next Fishious Rend |
| 36 | Taunt | -- | Dark | -- | Prevents recovery/setup. Aggressive utility. |
| 42 | **Liquidation** | 85 | Water | No | Reliable Water STAB when you can't guarantee outspeeding |
| 48 | Swords Dance | -- | Normal | -- | Late-game setup option. +2 Atk Fishious Rend is game-ending. |

### Key Learnset Decisions

- **Aqua Jet at L8** gives Carvanha a priority Water STAB early. This is important because at L9 (Petalburg Woods), the Aqua Grunt's Carvanha should feel fast and threatening.
- **Fishious Rend at evolution (L30)** is the power spike that makes Sharpedo feel like a reward for training Carvanha. Before 30, you have Crunch as your nuke. After 30, the damage is absurd.
- **No elemental fangs (Fire/Ice/Thunder)** -- that's Raticate's thing. Sharpedo's biting moves are Bite, Crunch, Fishious Rend, Jaw Lock, Psychic Fangs, Poison Fang. All either STAB or utility, not type coverage.
- **Jaw Lock at L33** creates a unique play pattern: trap the opponent, then Fishious Rend next turn. Since they can't switch, they have to eat it.

---

## Item Synergy

| Rank | Item | Why |
|------|------|-----|
| 1 | **Choice Band** | 120 Atk x 1.5 = 180. Fishious Rend at 382 effective off 180 Atk. The hardest single hit in the game from a non-legendary. Lock-in is fine because Fishious Rend is your best move in most matchups. |
| 2 | **Choice Scarf** | 105 Spe x 1.5 = 157 effective. Guarantees outspeeding everything for the Fishious Rend double. Trades raw power for reliability. |
| 3 | **Life Orb** | 1.3x damage, flexible moveset. Crunch + Fishious Rend + Psychic Fangs without locking in. Recoil is irrelevant on a 70 HP glass cannon. |

---

## Niche Comparison

| | Raticate | Sharpedo |
|---|----------|----------|
| **Ability** | Strong Jaw | Strong Jaw |
| **Role** | Coverage attacker | STAB power assassin |
| **# of fang types** | 6 (every type) | 3-4 (Water, Dark, Psychic, Poison) |
| **Best single hit** | Hyper Fang (180 eff) | Fishious Rend (382 eff) |
| **Fantasy** | "Right fang for every matchup" | "I bite first, I bite hardest" |
| **Speed** | 100 | 105 |
| **Bulk** | 55/60/70 (frail) | 70/40/40 (paper) |
| **Coverage weakness** | Fighting types | Fairy, Grass, Fighting |

The differentiation is clear: Raticate spreads damage across many types, Sharpedo concentrates damage into two STAB types for maximum single-target destruction. They share an ability but play completely differently.

---

## Open Questions

1. **Should Speed Boost stay as HA?** Speed Boost + Fishious Rend is potentially degenerate (Protect turn 1, then guaranteed doubles forever). Could replace with Swift Swim (rain synergy, thematic) or Intimidate (shark is scary, utility on switch-in).
2. **Is Fishious Rend at 382 effective too much?** It requires outspeeding AND is on a 70/40/40 body. Dracovish was broken because of 90/100/80 bulk. Sharpedo dies to a stiff breeze. Probably fine, but worth playtesting.
3. **Jaw Lock play pattern:** Trapping + Fishious Rend next turn is a 2-turn combo. Is this too oppressive, or is it fair because Sharpedo might die to the trapped Pokemon's attack? Needs testing.
4. **Carvanha evolution level:** Vanilla is 30, which is late. Could consider 28 to get Fishious Rend earlier, but 30 is a clean number.
