---
name: Zubat
dex_number: 41
status: designed
ability: Infiltrator
role: Screen Breaker / No-Item Sweeper
ideal_items: No Item (Acrobatics), Life Orb, Choice Band
evolution_line: [Zubat, Golbat, Crobat]
---

# Zubat / Golbat / Crobat - Design Brainstorm

## Context

Poison/Flying cave bat. 3-stage. Crobat has 130 Speed — the fastest fully-evolved Pokemon in early-to-mid game. Granite Cave common encounter (Segment 2). Vanilla abilities: **Inner Focus** (A1), **Infiltrator** (HA).

**Key constraint:** Brawly's Sableye on the Segment 2 gym team already uses Prankster. Crobat should not duplicate this role.

---

## Option 1: Infiltrator Screen Breaker ⭐ RECOMMENDED

**Ability:** Infiltrator (promoted from HA to A1)

> Bypasses Substitute, Reflect, Light Screen, Safeguard, Mist, and Aurora Veil.

**Build Identity:** A 130-Speed glass cannon that makes every opponent's defensive investment irrelevant — screens halve your damage, substitutes block your moves, and Crobat simply ignores all of it.

**Signature Interaction:** Acrobatics (no held item = 110 BP) + Infiltrator + STAB = **165 effective BP through any screen or sub, no setup required.** The player has to consciously not equip an item, which feels like a satisfying strategic choice.

**Full math:**
- Acrobatics (no item): 110 BP × 1.5 STAB × Infiltrator through Reflect = damage not halved by screen
- Poison Fang through Substitute: badly poisons the actual Pokémon, not the sub
- Cross Poison through Substitute: direct damage + crit chance

**Pros:**
- Infiltrator is already in the game's ability code — zero new implementation
- Unique roster niche: only Pokémon that actively punishes screen teams and sub-users
- The "no item" Acrobatics decision point is elegant — forces interesting item management
- 130 Speed means Crobat moves before setting screens too, so it can threaten before opponents set up

**Cons:**
- Glass cannon — Crobat dies to any strong hit (85/80/80 bulk isn't great)
- Acrobatics and Brave Bird compete; player has to pick between 110 BP (no item) vs. Life Orb 120 BP Brave Bird
- Less interesting in matchups where opponent isn't running screens or subs

**Items:**
1. **No Item** — Acrobatics at 110 BP + STAB + Infiltrator = 165 effective. THE build. Never hold an item.
2. **Life Orb** — Switches identity to Brave Bird nuker (120 BP × 1.3 × 1.5 = 234 effective), but Acrobatics drops to 55 BP. Different playstyle: raw power instead of screen-breaking.
3. **Choice Band** — 110 Atk × 1.5 = 165 effective Atk. Brave Bird hits hardest (270 effective) but you're locked in.

---

## Option 2: Serene Grace Flinch Machine

**Ability:** Serene Grace (secondary effect chance doubled)

**Build Identity:** A special attacker that exploits 130 Speed to move first every turn — Air Slash's flinch rate doubles to 60%, and since Crobat always moves first, opponents can barely act.

**Signature Interaction:** Air Slash (30% → 60% flinch with Serene Grace) + 130 Speed = **opponent flinches more than half the time, and can never outspeed Crobat to prevent it.** This is the Togekiss flinch strategy but on the fastest Pokémon in the room.

**Additional effects with Serene Grace:**
- Air Slash: 30% flinch → **60% flinch**
- Cross Poison: 10% poison → **20% poison** (worse for poison, better for stacking with Serene Grace)
- Poison Fang: 50% badly poison → **100% badly poison** — guaranteed badly poisons anything it hits

**Pros:**
- The 130 Speed + Serene Grace Air Slash combo is mechanically unique in the roster — Togekiss does this but slowly; Crobat does it at max speed
- Poison Fang at 100% badly-poisons is a strong secondary effect
- Leans into the "bat uses echolocation (air vibration)" flavor for Air Slash
- Special attacker identity differentiates Crobat from every other physical Flying type

**Cons:**
- 70 SpA is mediocre — needs significant stat redistribution toward SpA (say 95+) to threaten anything
- Air Slash is 75 BP even with full investment; need Choice Specs to make damage meaningful
- 60% flinch is annoying but not guaranteed — 40% chance to lose the flinch game and take a hit
- Serene Grace on a fragile Pokémon means you don't survive long enough to enjoy the flinch chain

**Items:**
1. **Choice Specs** — SpA boost makes 75 BP Air Slash actually threaten. Locked in, but Crobat only has one move worth using anyway.
2. **Life Orb** — Flexible moveset. Poison Fang (guaranteed badly poison), Air Slash (60% flinch), coverage moves.
3. **King's Rock** — Stacks with Serene Grace... but King's Rock + Serene Grace doesn't double-apply in modern mechanics. Don't bother.

---

## Option 3: Gale Wings First-Strike Attacker

**Ability:** Gale Wings (Flying-type moves have +1 priority when at full HP)

**Build Identity:** A burst attacker that opens every fight with a priority Brave Bird, then uses Roost to restore full HP and repeat — trading recoil for priority, healing it back, and striking again before anything can react.

**Signature Interaction:** Gale Wings Brave Bird (120 BP, +1 priority) → Roost (back to full HP, re-activate Gale Wings) → Brave Bird again. A priority 180-effective Flying nuke on demand, sustained by recovery.

**The loop:**
1. Come in at full HP → Gale Wings active
2. Brave Bird (+1 priority, 120 BP, STAB = 180 effective) — takes ~30 HP recoil
3. Roost → back to full HP → Gale Wings re-activates
4. Repeat. Opponent needs a non-Flying resist + a way to outspeed to stop you.

**At 130 Speed:** Without Gale Wings, Crobat already outruns almost everything. With Gale Wings at full HP, Brave Bird goes before Extreme Speed, Quick Attack, Mach Punch — every priority move in the game except +2.

**Pros:**
- Priority Brave Bird at 130 Speed + 110 Atk is genuinely threatening
- The Gale Wings + Roost sustain loop is self-contained and satisfying to execute
- 130 Speed means even without Gale Wings, Crobat is still the fastest thing in the fight
- Very different playstyle from Option 1 — burst + sustain vs. screen-breaking

**Cons:**
- Brave Bird recoil (1/3 damage) deactivates Gale Wings — you need to Roost every 2 turns, making you predictable
- Roost removes Flying type for one turn — suddenly vulnerable to Ground moves
- One Toxic or burn can prevent the Roost loop from keeping HP at full
- 30% recoil + setup time means you need 3 turns to do what Option 1 does in 1

**Items:**
1. **Leftovers** — Passive healing helps maintain the "full HP" threshold for Gale Wings across chip damage.
2. **Life Orb** — Brave Bird recoil + Life Orb recoil is brutal, but 234 effective BP with priority is a one-shot machine.
3. **Flying Gem** — One-time nuclear Brave Bird with priority. 120 × 1.5 (gem) × 1.5 (STAB) × priority = 270 effective in a surprise opening.

---

## Recommendation: Option 1 — Infiltrator Screen Breaker

**Why Option 1 wins:**

The "no item for Acrobatics" mechanic is the most creative and unique decision point in all three options. It forces the player to make an explicit choice to *not* equip an item — which feels clever, not arbitrary. Every other build in this game is "pick the right item for more power." Option 1 says "the right item is *no item*."

Infiltrator's ability to bypass screens and subs gives Crobat a **clear anti-meta identity**: it hard-counters double battles with screens, counters sub-passing teams, and threatens every Pokémon that hides behind a sub before attacking. No other Pokémon in the current design pool fills this role.

The 130 Speed seals it. Crobat moves first, bypasses defenses, and hits for 165 effective on Flying STAB before anything can respond. That's the fantasy.

Options 2 and 3 both require stat redistribution toward SpA (Option 2) or a Brave Bird recoil management loop (Option 3), whereas Option 1 works with Crobat's existing physical spread and requires zero new ability code.

**Potential concern: Is it too oppressive vs. screen teams?**
165 effective BP through screens sounds scary, but Crobat folds to any strong neutral hit — 85/80/80 bulk doesn't last. Screen teams win by stacking damage behind screens; Crobat breaks through one screen and then gets hit hard. The counterplay is real.

---

## Stat Changes (Recommended Option 1)

### Zubat

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 40 | **50** | +10 |
| Atk | 45 | **65** | +20 |
| Def | 35 | **45** | +10 |
| SpA | 30 | 30 | — |
| SpD | 40 | **50** | +10 |
| Spe | 55 | **80** | +25 |
| **BST** | **245** | **320** | **+75** |

Zubat is found in Granite Cave at L9-12 — it needs to feel fast and threatening immediately, not like a punching bag. 80 Speed at L9 means it noticeably outspeeds most early encounters. The Attack bump lets Poison Fang and Wing Attack actually sting.

### Golbat

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 75 | **80** | +5 |
| Atk | 80 | **90** | +10 |
| Def | 70 | **75** | +5 |
| SpA | 65 | 65 | — |
| SpD | 75 | **80** | +5 |
| Spe | 90 | **100** | +10 |
| **BST** | **455** | **490** | **+35** |

Middle stage: 100 Speed feels noticeably fast, 90 Atk gives Cross Poison some bite. Competitive with mid-game threats.

### Crobat

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 85 | **90** | +5 |
| Atk | 90 | **110** | +20 |
| Def | 80 | 80 | — |
| SpA | 70 | **65** | -5 |
| SpD | 80 | **85** | +5 |
| Spe | 130 | 130 | — |
| **BST** | **535** | **560** | **+25** |

Redirect SpA → Atk. Crobat is a physical attacker. 110 Atk means Acrobatics (165 effective) genuinely threatens everything. Speed stays at 130 — the defining stat. BST lands at 560, appropriate for a final-stage three-evolution line.

---

## Learnset (Recommended Option 1)

### Zubat (evolves at L22)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Leech Life | 80 | Bug | Draining STAB from L1 — vampire bat identity, keeps Zubat healthy early |
| 1 | Screech | — | Normal | -2 Def on the target; sets up Acrobatics to hit harder |
| 8 | **Poison Fang** | 50 | Poison | First synergy move: badly poisons through Substitute (Infiltrator). Build logic turns on: "I go through subs" |
| 12 | **Wing Attack** | 60 | Flying | Second synergy: Flying STAB. By L12 Zubat has both types and Infiltrator interacts with both |
| 16 | Confuse Ray | — | Normal | Bat utility — thematic status move |
| 22 | **Acrobatics** | 55/110 | Flying | Evolution power spike. No held item = 110 BP, STAB = 165 effective, Infiltrator bypasses screens |

### Golbat (L22 → Crobat via friendship)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 24 | **Cross Poison** | 70 | Poison | Primary Poison STAB with high crit rate. Goes through Substitute — direct damage + chance to poison |
| 28 | **Taunt** | — | Normal | 130 Speed (eventually) makes Taunt nearly automatic. Shuts down setup and stalling |
| 33 | **Steel Wing** | 70 | Steel | Coverage vs Rock/Ice types that threaten Flying. Bypasses Substitute too. |
| 36 | **Brave Bird** | 120 | Flying | Pre-Crobat power spike: 180 effective through screens. The "I'm holding Life Orb" build clicks here |

### Crobat (friendship → Crobat)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| (evo) | **Poison Jab** | 80 | Poison | Evolution reward: upgraded Poison STAB, 30% badly-poisons through Substitute. Replaces Cross Poison as primary Poison move. |
| 42 | **Aerial Ace** | 60 | Flying | Never misses. Reliable Flying coverage that always connects; good when opponent has evasion boosts. |
| 45 | **Haze** | — | Normal | Wipe all stat boosts. Anti-setup tool — uniquely effective because Infiltrator lets Crobat Haze through a Substitute. |
| 48 | **Brave Bird** | 120 | Flying | Final payoff: 180 effective Flying nuke, bypasses screens. The "full power" option when no-item Acrobatics needs a supplement. |

**Evolution note:** Friendship evolution is kept vanilla but should be considered for conversion to **Level 38** — friendship gating is frustrating in single-player and there's no gameplay reason to preserve it. Recommend noting this for implementation.

---

## Ideal Items (Option 1)

| Rank | Item | Why |
|------|------|-----|
| 1 | **No Item** | Acrobatics hits 110 BP (doubles when no item held) + STAB = 165 effective. Plus Infiltrator bypasses screens. This is the unique play — consciously NOT holding an item. |
| 2 | **Life Orb** | Switches build to Brave Bird spam (234 effective). Acrobatics drops to 55 BP. Trades screen-breaking for raw power. |
| 3 | **Choice Band** | 110 Atk × 1.5 = 165. Brave Bird = 270 effective. Sacrifices Acrobatics flexibility for maximum damage on one move. |

---

## Core Strategy

### The Screen Breaker
1. Switch Crobat in with **no held item**
2. Acrobatics: 110 BP, STAB, Infiltrator — Reflect halves physical damage, but Infiltrator ignores Reflect. Full 165 effective every time.
3. If the opponent hides behind Substitute: Acrobatics goes through the sub. Poison Jab can poison through the sub. Haze wipes their boosted stats through the sub.
4. Taunt before they can put up screens in the first place — at 130 Speed, Taunt lands before almost any setup move.

### The No-Item Sweep
- No item means Acrobatics is always 110 BP. The player never needs to use a held item slot.
- Screech on Zubat stage: -2 Def means Acrobatics hits even harder after one Screech.
- Pair with a Stealth Rock setter — Crobat sweeps after rocks are up and screens are down.

### Sample Movesets

**Screen Breaker (no item):**
Acrobatics / Cross Poison / Poison Jab / Taunt — No Item
"Break whatever they put up, poison through subs, Taunt before they set up."

**Power Sweeper (Life Orb):**
Brave Bird / Poison Jab / Cross Poison / Taunt — Life Orb
"Max damage, ignore Acrobatics, use Brave Bird + Poison Jab for dual STAB nukes."

**Speed Control:**
Acrobatics / Taunt / Haze / Leech Life — No Item
"Disrupt, wipe boosts through subs, sustain HP with Leech Life on subs."

---

## Team Synergy

- **Screen teams (Brawly, player-built):** Crobat is the hard answer. Literally the only Pokémon in the game that ignores screens while attacking.
- **Substitute abusers:** Poison Jab and Acrobatics through subs eliminates the "hide behind a sub and set up" strategy.
- **Stealth Rock setters (Geodude, Aron):** Crobat loves breaking screens while rocks chip away; pair these for entry hazard + screen breaking.
- **Poisoning synergy (Tentacruel, Nidoking):** Cross Poison through subs sets up a poison for Nidoking's Toxic Boost or Tentacruel's Venoshock.

---

## Matchup Analysis

**Strong vs:**
- Screen teams (Reflect/Light Screen/Aurora Veil mean nothing)
- Substitute users (Infiltrator goes right through)
- Setup sweepers (Taunt at 130 Speed shuts them down before they move)
- Psychic types (STAB Acrobatics/Brave Bird)
- Grass and Fighting types (Flying + Poison coverage)

**Weak vs:**
- Electric types (4x resistance irrelevant; 2x weakness on base form)
- Rock types (Stealth Rock strips 25% HP on switch-in; Rock Slide is super effective)
- Ice types (Ice Beam is SE, and Crobat's bulk doesn't absorb it)
- Any strong neutral hit (85/80/80 with 90 HP is not bulky)

**Key vulnerability:** Stealth Rock punishes every switch-in. Crobat needs a Rapid Spinner or Magic Bouncer on the team, or a teammate that can prevent rocks from going up.
