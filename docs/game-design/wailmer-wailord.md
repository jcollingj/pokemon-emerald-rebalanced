---
name: Wailmer
dex_number: 320
status: designed
ability: Blubber (Water Veil rework)
role: HP Battery Water Spout Nuker
ideal_items: Choice Specs, Leftovers, Sitrus Berry
evolution_line: [Wailmer, Wailord]
---

# Wailmer / Wailord — Design Brainstorm

## Context

- **Availability:** Good Rod, Routes 105/106 (mid-game)
- **Vanilla stats — Wailmer:** 130 HP / 70 Atk / 35 Def / 70 SpA / 35 SpD / 60 Spe (BST 400)
- **Vanilla stats — Wailord:** 170 HP / 90 Atk / 45 Def / 90 SpA / 45 SpD / 60 Spe (BST 500)
- **Vanilla abilities:** Water Veil (burn immunity), Oblivious (taunt/attract immunity), Pressure (HA)
- **Key identity:** The highest HP of any non-legendary Pokemon. Enormous, slow, whale.

## Existing Water Roles (Must Not Duplicate)

| Pokemon | Role | Ability |
|---------|------|---------|
| Mudkip/Swampert | Rain Tank | Rain Dish (heal + def in rain) |
| Poliwag/Poliwrath | Rain Sweeper | Swift Swim |
| Marill/Azumarill | Physical Wallbreaker | Huge Power + Belly Drum |
| Gyarados | Snowball Sweeper | Moxie + Dragon Dance |
| Blastoise | Pulse Mage | Mega Launcher |
| Sharpedo | STAB Bite Assassin | Strong Jaw + Fishious Rend |

**Open niche:** HP-anchored sustain nuker, sound specialist, or defensive HP fortress.

---

## Option 1: "Water Spout Cannon" ⭐ RECOMMENDED

### Ability: Rework Water Veil → **Blubber**

**New effect:** Heals 1/8 max HP at the end of each turn. Wailord's insulating blubber continuously restores its body moisture and vitality. Burn immunity is dropped — the mechanic identity moves from "don't get burned" (passive/irrelevant) to "stay healthy" (active, build-shaping).

**Why this ability shapes the learnset:** Blubber makes you want to:
1. Have moves that make Wailord hard to hit (Amnesia, Dive's invulnerable turn)
2. Use Water Spout, which scales with remaining HP — the healing directly extends Water Spout's power window
3. Run Leftovers on top for 2/8 = 25% HP recovery per turn

### Build Identity

A slow, indestructible HP battery that fires **Water Spout** nukes. Wailord is the only Pokemon in the game that meaningfully extends Water Spout's peak-power window with its 170 HP — and Blubber healing lets it recover back into that window after taking damage.

### Signature Interaction

**Water Spout + Blubber + 170 HP:**
- Water Spout deals damage proportional to remaining HP (150 BP at full HP, scaling down to 1 BP at 1 HP)
- Wailord's 170 HP means it has 42 more HP of Water Spout "range" than the next bulkiest user
- Blubber restores ~21 HP/turn (1/8 of 170) — meaning after eating a 60% hit, Wailord recovers back into the 90%+ threshold in ~2 turns
- With Leftovers stacked: 21 + 10 = ~31 HP per turn restored. The Water Spout window doesn't close.

**The math at peak power (Choice Specs, 115 SpA):**

| HP Remaining | Water Spout BP | Effective SpA (Specs) | STAB? |
|---|---|---|---|
| 100% | 150 | 172 | Yes → 225 effective |
| 75% | 112 | 172 | Yes → 168 effective |
| 50% | 75 | 172 | Yes → 112 effective |
| Below 50%: switch to Surf (90 BP) | 90 | 172 | Yes → 135 effective |

At 100% HP: Water Spout is effectively **225 BP** off 172 SpA. Nothing survives.

### Stat Changes

**Wailmer:**

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 130 | 130 | — |
| Atk | 70 | 60 | -10 |
| Def | 35 | 40 | +5 |
| SpA | 70 | 85 | +15 |
| SpD | 35 | 50 | +15 |
| Spe | 60 | 55 | -5 |
| **BST** | **400** | **420** | **+20** |

**Wailord:**

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 170 | 170 | — |
| Atk | 90 | 80 | -10 |
| Def | 45 | 55 | +10 |
| SpA | 90 | 115 | +25 |
| SpD | 45 | 65 | +20 |
| Spe | 60 | 60 | — |
| **BST** | **500** | **545** | **+45** |

Trimmed physical Attack to signal the special identity. SpA gets a meaningful buff so Water Spout hits at a level the player notices. SpD bump means Wailord isn't just a big target for every special move.

### Learnset

#### Wailmer (available ~L20, evolves at L40)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Splash | — | Normal | Thematic flavor (it's a baby whale) |
| 1 | Water Gun | 40 | Water | Early STAB |
| 8 | **Water Pulse** | 60 | Water | First synergy move — Water STAB with 20% confusion chance. Build begins. |
| 12 | **Aqua Ring** | — | Water | Passive healing stacks with Blubber. HP sustain turns on. |
| 16 | Dive | 80 | Water | Stronger STAB, invulnerable turn buys healing time |
| 21 | Body Slam | 85 | Normal | Reliable Normal coverage, 30% paralysis |
| 27 | **Surf** | 90 | Water | Reliable Water STAB for when Wailmer is below Water Spout threshold |
| 33 | Amnesia | — | Psychic | +2 SpDef — this whale becomes a mixed tank |
| 36 | Heavy Slam | — | Steel | 3980 kg Wailmer? Maximum power vs almost everything (120 BP). Physical surprise. |

#### Wailord (evolves at L40)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 40 | **Water Spout** | 150→1 | Water | THE evolution reward. This is why you trained Wailmer. |
| 42 | Rest | — | Psychic | Full HP restore → Blubber kicks back in immediately after 2-turn sleep → Water Spout at 150 BP again |
| 45 | Hyper Voice | 90 | Normal | Coverage if something resists Water. Solid neutral STAB. |
| 48 | **Hydro Pump** | 110 | Water | Backup nuke when HP is low and Water Spout isn't worth it |

### Ideal Items

| Rank | Item | Why |
|------|------|-----|
| 1 | **Choice Specs** | 115 SpA × 1.5 = 172 effective. Water Spout at 225 effective BP. Lock into Water Spout and win. |
| 2 | **Leftovers** | Stacks with Blubber: 1/8 + 1/16 = ~19% HP per turn. Prolongs Water Spout peak window by 2-3 extra turns. |
| 3 | **Sitrus Berry** | Emergency +25% HP restoration after a big hit — gets Wailord back into prime Water Spout territory instantly. |

### Core Strategy

**The Peak Window:**
1. Switch Wailord in when at full HP
2. Water Spout → devastating (225 effective BP, Choice Specs)
3. Take a hit — Blubber restores 21 HP/turn
4. If Leftovers equipped: 31 HP/turn recovery means 2-3 turns restores from 60% → 90%
5. Rest → returns to 170/170 HP → Water Spout is back at full power
6. When HP doesn't justify Water Spout: Surf for reliable 135 effective BP, Hydro Pump for 165 effective BP

**The Rest Trick:**
- Rest restores to full HP → Water Spout immediately returns to 150 BP
- After 2 sleep turns, Wailord wakes up at 170 HP
- Blubber's 21 HP/turn healing during sleep turns means even during Rest, Wailord is "refueling"

### Pros
- Completely unique mechanic: HP actively shapes damage output. No other Water Pokemon plays this way.
- 170 HP is a genuine advantage, not just a big number on the stat screen
- Water Spout creates memorable moments — one-shot at full HP is exciting
- Rest creates a recovery loop that the player has to manage strategically
- Blubber is the most thematically fitting ability for a whale (insulating blubber = warmth/healing)

### Cons
- Slow (60 Speed) — taking a hit before firing is expected, which is fine with the HP sustain but limits offensive tempo
- Water Spout diminishes with damage — predictable play pattern if the player doesn't protect HP
- Mostly single-typing (Water only) — no secondary type for coverage or defensive benefits
- Late evolution (L40) means Wailmer spends a long stretch without Water Spout

---

## Option 2: "Leviathan Wall" — Physical Fortress

### Ability: Rework Oblivious → **Thick Blubber**

**New effect:** Takes halved damage from physical moves (functionally Fluffy, minus the Fire weakness). Keeps the original "oblivious to danger" flavor — Wailord is too large and too unbothered to feel physical hits properly. Taunt immunity stays as a secondary property (classic Oblivious territory).

### Build Identity

A 170 HP physical fortress that uses setup moves to become an unkillable mixed wall. Where Mudkip is a rain-dependent tank, Wailord is a stat-based wall that doesn't care about weather.

### Signature Interaction

**Thick Blubber + Curse + Amnesia:**
- Thick Blubber halves physical damage → effective physical defense doubles from 45 to 90
- Amnesia: +2 SpDef (45 → 90 after one use, 135 after two)
- Curse: +1 Atk, +1 Def (boosts physical resilience further)
- After Curse + Amnesia: effectively 130+ Def / 135 SpDef / 170 HP — essentially unkillable at that point

Wailord hits back with Body Slam / Heavy Slam (120 BP from 3980 kg weight) to make walls respect it. At +1 Atk from Curse: Heavy Slam OHKOs most things.

### Stat Changes

**Wailord:**

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 170 | 170 | — |
| Atk | 90 | 100 | +10 |
| Def | 45 | 65 | +20 |
| SpA | 90 | 70 | -20 |
| SpD | 45 | 75 | +30 |
| Spe | 60 | 55 | -5 |
| **BST** | **500** | **535** | **+35** |

Pump defenses since Thick Blubber makes physical defense a major asset. Atk bump rewards Curse sets. Dump SpA to signal the build is physical/mixed defense, not special offense.

### Ideal Items

| Rank | Item | Why |
|------|------|-----|
| 1 | **Leftovers** | Sustain for the wall. 170 HP Leftovers = 10 HP/turn passive. |
| 2 | **Rocky Helmet** | Contact damage on top of Thick Blubber. Physical attackers take 1/6 HP per contact + halved damage — extremely discouraging to attack Wailord physically. |
| 3 | **Assault Vest** | Boosts SpDef by 1.5x, further shoring up the special side. Trades setup moves for raw resilience. |

### Pros
- Doesn't require weather setup (unlike Mudkip)
- Heavy Slam from 3980 kg is a genuinely threatening physical move even on a "wall"
- Thick Blubber + Curse + Amnesia is an escalating setup combo — gets scarier each turn

### Cons
- Overlaps somewhat with Nidoqueen (special wall) and Mudkip (physical tank) in role feel
- Slow and relies on setup to become threatening offensively
- Fairy/Electric/Grass types bypass the physical resistance and exploit the special side before setup

---

## Option 3: "Whale Song" — Sound Specialist (Creative Pick)

### Ability: Rework Oblivious → **Resonance**

**New effect:** All sound-based moves deal 1.5x damage (Boomburst, Hyper Voice, Disarming Voice, Echoed Voice, Snore). Whales are the most famous sound-makers in the animal kingdom — humpback whale songs carry for hundreds of miles. Wailord finally fights the way it was born to.

This is the "creative/surprise" option. No current Pokemon uses sound as a primary offense tool. Wailord would own this niche completely.

### Build Identity

A slow, hulking special attacker that fires **Boomburst nukes** while using 170 HP as a damage sponge between shots. Where Blastoise has Mega Launcher for typed pulse moves, Wailord has Resonance for raw-power sound moves.

### Signature Interaction

**Boomburst + Resonance + Choice Specs:**

| Base | Resonance | Choice Specs | STAB | Effective |
|------|-----------|--------------|------|-----------|
| 140 BP | ×1.5 = 210 | ×1.5 = 315 | No (Normal) | **315 effective BP** off 115 SpA |

315 effective BP is the hardest non-Z-move, non-Dynamax, non-recharge hit in the game. Every turn. The 170 HP means Wailord can eat a couple hits before Choice Specs forces a switch.

Wailord doesn't need STAB on Boomburst — 315 effective power is more than enough. Surf provides the Water STAB when Normal doesn't cut it (Ghost types), and with 115 SpA + Specs it's still 202 effective BP.

### Stat Changes

**Wailord:**

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 170 | 170 | — |
| Atk | 90 | 75 | -15 |
| Def | 45 | 50 | +5 |
| SpA | 90 | 115 | +25 |
| SpD | 45 | 60 | +15 |
| Spe | 60 | 65 | +5 |
| **BST** | **500** | **535** | **+35** |

Dump physical Attack (Boomburst doesn't care), boost SpA significantly, minor Speed bump so Wailord isn't always last.

### Learnset Highlights

- L1: Growl, Water Gun
- L8: **Echoed Voice** (sound move — Resonance triggers, power escalates each turn: 40 → 80 → 120 → 160 → 200 BP)
- L12: Surf (Water STAB, Resonance doesn't apply but needed for coverage)
- L21: **Disarming Voice** (Fairy-type sound — never misses, Resonance = 90 effective BP)
- L27: **Hyper Voice** (90 BP Normal sound → 135 effective with Resonance)
- L36: Amnesia (+2 SpDef, hard to kill)
- L40: **Boomburst** (evolution reward — 140 BP → 210 with Resonance → 315 with Specs)

### Ideal Items

| Rank | Item | Why |
|------|------|-----|
| 1 | **Choice Specs** | Boomburst at 315 effective BP. Hit-and-switch. |
| 2 | **Life Orb** | 1.3x on all moves, flexible — can use Surf, Hyper Voice, Boomburst freely. |
| 3 | **Expert Belt** | If Disarming Voice's Fairy typing or Surf's Water typing gets a super-effective hit, +20% on top of Resonance. |

### Pros
- Completely unique niche in the roster — no other Pokemon currently uses sound offense
- Thematically PERFECT for a whale (whale song is iconic)
- Boomburst + Resonance + Specs creates the most absurd single-number damage in any design doc so far
- Disarming Voice (never-miss) + Resonance gives reliable coverage against Dragon/Dark/Fighting

### Cons
- Boomburst is Normal-type — no STAB, and Ghost types are completely immune
- Slow (even with +5 Speed bump), gets hit before it fires
- No built-in sustain (unlike Option 1's Blubber healing) — relies purely on 170 HP as buffer
- Could feel "frustrating" to opponents since Boomburst can't be blocked by type resistance (hits everything neutral or super-effective)

---

## Recommendation: Option 1 — Water Spout Cannon ⭐

**Why:**

The **Blubber + Water Spout + 170 HP** trio is mechanically elegant in a way that no other current design matches. The 170 HP stat — which in vanilla Wailord is just a weird number that doesn't do much — becomes the actual point of the build. The higher the HP, the more Water Spout damage. The ability keeps the HP high. The loop is clean, exciting, and completely unique.

The gameplay reads like this: "I have 170 HP. As long as I stay above 85 HP, my Water Spout hits like a freight train. Blubber makes sure a single hit doesn't permanently destroy that window. When I'm running low, Rest gets me back to 170 HP and we do it again."

That's a fantasy no other Pokemon in this game delivers. Option 3 (Whale Song) is a close second for its creativity and thematic fit, and would be an excellent alternative if you want a sound specialist in the roster. But Option 1 is the design that makes Wailord feel like WAILORD — a massive, inexorable force that's hard to stop because it just keeps healing back up.

Option 2 (Leviathan Wall) is solid but too similar to existing wall roles, and the "halved physical damage" mechanic is shared by multiple real games' defensive Pokemon — it doesn't feel as fresh.

---

## Open Questions

1. **Ability name:** "Blubber" is a new ability. Should it reuse the Water Veil slot with updated mechanics, or be implemented as a brand new ability ID? The Blubber ability actually exists in Gen 8+ data but with different effects — confirm implementation path.
2. **Water Spout timing:** The move comes at L40 (evolution). That means Wailmer players don't access the signature move until evolving. Does the Wailmer early learnset feel satisfying enough with Water Pulse + Aqua Ring + Surf?
3. **Rest interaction:** The Rest → full HP → Blubber healing loop is potentially very strong in long fights. Is this fine given Wailord's 60 Speed (always moves last, sleep turns actually matter)?
4. **Stat spread:** Is 115 SpA too much or not enough? At full HP, Choice Specs Water Spout is effectively ~225 BP. That one-shots almost everything. Is that the intended power level for a L40+ evolution?
