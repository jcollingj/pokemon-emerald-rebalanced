---
name: Heracross
dex_number: 214
status: designed
ability: Guts
role: Guts Berserker (Flame Orb + Facade sweeper)
ideal_items: Flame Orb, Life Orb, Choice Band
evolution_line: [Heracross]
---

# Heracross — Rebalance Notes

## Build Identity

Heracross is a **Guts Berserker** that equips a Flame Orb to awaken its true power — burn activates Guts (+50% Atk, burn penalty ignored) *and* boosts Facade to 140 BP, creating a dual-synergy nuke that hits like almost nothing else in the game.

---

## Design Options (Brainstorm)

### Option A: Moxie — KO Snowballer

**Ability:** Moxie — +1 Attack on every KO.

**Build Identity:** A momentum sweeper that chains kills into an unstoppable force. First KO starts the avalanche; Megahorn punishes Psychic types on the way in.

**Signature Interaction:** Megahorn + Moxie + Life Orb — the first Psychic kill gives +1 Atk, and then every subsequent hit is 30–50% stronger than the last. Gets legitimately terrifying after 2 KOs.

**Pros:**
- Immediately rewarding — every kill is a tangible power spike
- Already validated on Brawly's team in the segment design
- Life Orb + Moxie math is exciting and transparent

**Cons:**
- Passive if the opponent doesn't die cleanly (misses, survives at 1 HP)
- Nidoking's Toxic Boost has a similar "one activation unlocks hell" feel; Moxie is different mechanically but narratively adjacent
- Setup-dependent on getting that first KO

---

### ✅ Option B: Guts — Iron Will Berserker *(RECOMMENDED)*

**Ability:** Guts — +50% Attack when statused, and the burn Attack penalty is ignored.

**Build Identity:** A deliberate masochist that equips a Flame Orb to awaken raw destructive power — burn becomes a weapon, Facade becomes a 140 BP nuke, and 125 Atk × 1.5 turns every hit into a wall of force.

**Signature Interaction:** Flame Orb + Facade — normally 70 BP, but becomes **140 BP when burned** AND Guts ignores the burn's Attack drop, so the effective Attack stat is 187.5. One switch-in, one Facade, and most things die.

**Pros:**
- Facade synergy is completely unique in the roster — no other Pokemon uses this combo
- Dual activation: one item (Flame Orb) simultaneously boosts Atk *and* Facade BP
- Megahorn provides Bug STAB for Psychic coverage that Nidoking can't replicate
- The "endure pain to hit harder" narrative is perfect for a beetle warrior
- 80/75/95 bulk with +10 HP survives the burn ticks long enough to matter

**Cons:**
- Flame Orb burns 1/16 HP per turn — needs to win fast or bring Leftovers support
- Less snowball feel than Moxie; power is constant rather than escalating
- Facade is Normal type, so Ghost types wall it (covered by Close Combat + Megahorn)

---

### Option C: Reckless — The Crashing Beetle *(Unusual Pick)*

**Ability:** Reckless (reworked from Swarm) — +20% BP on recoil/crash moves.

**Build Identity:** A high-risk charging fighter that gambles on High Jump Kick for maximum power — misses crash the user, but hits are among the most powerful Fighting attacks in the game.

**Signature Interaction:** High Jump Kick + Reckless — 130 BP Fighting STAB × 1.2 = **156 effective BP**, the highest single-hit Fighting move available. One clean HJK can OHKO anything that doesn't resist it.

**Pros:**
- Completely novel playstyle — forces the player to think before clicking HJK
- Thematic for a beetle: charging, reckless, all-in
- Distinct from Hariyama (Iron Fist punching) and Breloom (Technician priority)
- Double-Edge also gets the boost (120 × 1.2 = 144 eff BP Normal STAB)

**Cons:**
- HJK miss = 50% HP crash damage, immediately punished by opponent
- Swarm → Reckless is a thematic stretch (bug swarm vs reckless charging)
- Harder to pilot in-game where misses feel bad; less consistent than A or B
- Reckless is more of a skilled-player ability — less satisfying as a player-facing design in a single-player game

---

## Recommendation: Option B — Guts

**Why Guts over Moxie:** The issue already shows Brawly uses Heracross with Moxie. If the player eventually catches and trains their own Heracross, giving it the same Moxie set as the gym boss feels anticlimactic. Guts creates a completely different playstyle — equip Flame Orb, roll in, and hit for 187.5 effective Atk × 140 BP Facade before anyone can react. That's a unique identity no other Pokemon in the roster owns.

**Why Guts over Reckless:** In a single-player game, HJK misses create frustrating moments. Guts is consistent — the burn happens automatically each turn, the power is always active. More fun to pilot, less variance.

---

## Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 80 | **90** | +10 |
| Atk | 125 | 125 | — |
| Def | 75 | 75 | — |
| SpA | 40 | 40 | — |
| SpD | 95 | 95 | — |
| Spe | 85 | 85 | — |
| **BST** | **500** | **510** | **+10** |

**Rationale:** The only change is +10 HP. Heracross's vanilla stats are excellent — 125 Atk, 85 Speed, solid SpD. The HP bump from 80 → 90 helps sustain through Flame Orb burn ticks (1/16 per turn) so the build feels playable without being crippled by self-inflicted damage.

## Ability Changes

**Ability 1:** Guts — +50% Atk when statused (burn Attack penalty ignored). Core identity — shapes the entire build around Flame Orb activation.
**Ability 2:** Swarm — +50% Bug damage below 1/3 HP. Classic Heracross backup; flavor-accurate, provides a different damage spike if not using Flame Orb.
**Hidden:** Moxie — +1 Atk on KO. The snowball option for players who want momentum sweeping (and what Brawly uses).

---

## Learnset

Heracross is single-stage. Learnset follows the standard schedule, front-loaded with physical punishers and synergy moves.

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Horn Attack | 65 | Normal | Starter — horn charge, physical identity |
| 1 | Leer | — | Normal | Starter — Defense drop, intimidation |
| 8 | **Facade** | 70/140* | Normal | **Build turns on** — weak until Flame Orb equipped, then 140 BP; teaches the synergy early |
| 12 | **Brick Break** | 75 | Fighting | Fighting STAB + screen breaking; build feels real |
| 16 | Counter | — | Fighting | Retaliation — thematic for an endurance fighter |
| 21 | Aerial Ace | 60 | Flying | Coverage for Fighting types; Heracross can fly |
| 27 | **Megahorn** | 120 | Bug | Power spike — Bug STAB nuke, murders Psychic types |
| 33 | Bulk Up | — | Fighting | Setup option — +Atk/+Def turn for defensive pivots |
| 42 | **Close Combat** | 120 | Fighting | Endgame Fighting nuke — no-drawback on Guts sets |
| 48 | Reversal | 20-200 | Fighting | Final move — max power at low HP; synergizes with Flame Orb burn damage |

*Facade: 70 BP normally, 140 BP when burned/poisoned/paralyzed

---

## The Math

With 125 Atk → **187.5 effective Atk with Guts active (Flame Orb):**

| Move | BP | Effective Damage |
|------|----|-|
| **Facade (burned)** | 140 | 187.5 Atk × 140 BP — **26,250 damage units** — demolishes anything not Ghost |
| Megahorn | 120 | 187.5 Atk × 120 BP — OHKO or near-OHKO on Psychics |
| Brick Break | 75 | 187.5 Atk × 75 BP — solid Fighting coverage |
| Close Combat | 120 | 187.5 Atk × 120 BP — top-tier Fighting STAB |

With **Life Orb** stacked: Guts (1.5×) × Life Orb (1.3×) = **1.95× total multiplier** on all physical moves. Facade hits at nearly double vanilla strength.

**Reversal at low HP (Flame Orb chip):** After 4 turns of burn damage (~25% HP lost), Reversal reaches 150 BP. Combine with Guts = absurd damage on a predicted final hit.

---

## Core Strategy

1. Switch in → Flame Orb activates on end of turn → **Guts + Facade online**
2. Lead with **Facade** for immediate high damage — 140 BP Normal hits almost everything neutrally
3. **Megahorn** for Psychic types and Ghost types that wall Facade
4. **Brick Break** handles Rocks and breaks screens on defensive teams
5. **Bulk Up** on predicted switches to stack Atk further on top of Guts
6. Late game: **Reversal** when HP is low from burn — Flame Orb does the work of weakening you

---

## Ideal Items

| Rank | Item | Why |
|------|------|-----|
| **#1** | **Flame Orb** | Activates Guts (+50% Atk) AND transforms Facade to 140 BP simultaneously — one item does double duty |
| **#2** | **Life Orb** | Guts × Life Orb = 1.95× total multiplier, can switch moves. Best when team provides Toxic support instead |
| **#3** | **Choice Band** | For Moxie sets (hidden ability) — raw sweeping power when not using the Guts build |

---

## Team Synergy

- Pairs with Psychic killers who appreciate Megahorn chip (softening Alakazam for safe KOs)
- Aromatherapy support can cure the burn if needed to reset Reversal-based endgame plays
- Pairs well with Gardevoir (Heracross covers Dark/Bug threats, Gardevoir covers Fighting/Flying threats)
- **Toxic support from partner:** If a partner inflicts Toxic on Heracross (via Toxic Orb switch), activates Guts without the burn damage penalty — though Flame Orb is cleaner as a self-sufficient option

---

## Matchup Analysis

**Strong vs:** Psychic (Megahorn 2×, immune via Dark not present but SE Bug), Dark, Rock, Normal (Facade), Ghost with Fighting coverage
**Weak vs:** Flying (4×), Fire, Ground, Ice
**Key threat:** Flying types — Heracross has Aerial Ace in the kit but that's defense-first, not offense. A well-leveled Swellow outspeeds and 2HKOs. Ghost types wall Facade (Close Combat + Megahorn handle them).
