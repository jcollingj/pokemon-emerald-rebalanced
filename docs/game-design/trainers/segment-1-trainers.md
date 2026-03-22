---
segment: 1
name: Start to Rustboro Gym
status: in_progress
total_trainers: 39
designed: 5
---

# Segment 1 Trainers: Start to Rustboro Gym

## Design Rules
- All trainers have **3-6 Pokemon**
- Pokemon should be from the **local area** (what the player can catch nearby)
- A few surprise picks are fine, but most should be representative
- Every trainer is a **mini-puzzle** — competitive movesets, not filler
- Trainers should use Pokemon at appropriate levels for their route

---

## Route 101
*No trainers*

---

## Route 102

### Calvin (Youngster) — Optional

> **Puzzle: The Priority Swarm.** Every Pokemon on Calvin's team has a Quick Attack or priority threat. The twist: Zigzagoon's Pickup ability halves the first hit it takes (no item held), creating a surprise "why didn't that KO?" moment. Rattata immediately shows off the Strong Jaw identity. Nidoran♂ threatens poison on contact with Horn Attack. Player learns: priority doesn't win automatically, and contact moves have consequences.

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Rattata | 8 | — | Strong Jaw | Bite, Quick Attack, Tackle |
| Zigzagoon | 7 | — | Pickup | Quick Attack, Covet, Sand Attack |
| Nidoran♂ | 9 | — | Poison Point | Horn Attack, Leer, Tackle |

**Status:** designed

**Design Notes:**
- **Rattata (lead):** Opens with Bite (90 effective BP via Strong Jaw — 60 base × 1.5) or Quick Attack priority. First trainer that teaches the Strong Jaw build identity: every move in this rat's kit is powered up. Even at L8, Bite into Quick Attack puts real pressure on slower leads.
- **Zigzagoon (middle):** No item = Pickup active. First hit deals half damage — the player attacks expecting damage and gets a surprise. Covet can steal the player's held item (minor annoyance that teaches the move). Sand Attack drops accuracy, forcing the player to take damage they'd rather avoid.
- **Nidoran♂ (closer):** Horn Attack (65 BP Normal) with Poison Point means every contact hit risks 30% poison. Leer on switch-in drops Defense. The threat: if the player's Pokemon is poisoned here, they carry it into the next battle.
- **Team identity:** Fast priority pressure everywhere. Pickup surprise bulk teaches a new mechanic. Poison Point teaches status-by-contact. Answer: non-contact special moves or OHKO before Poison Point procs.

---

### Rick (Bug Catcher) — Optional

> **Puzzle: The Poison Pipeline.** Rick's team chains poison-setting into guaranteed crits. Weedle opens with Poison Sting chip. Nidoran♀ threatens contact poison with every hit (30% Poison Point). Then Beedrill closes — Merciless means every attack crits on a poisoned target. Five Twineedle hits on a poisoned Pokemon = five guaranteed crits. Player who doesn't have an Antidote or non-contact attacks gets demolished.

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Weedle | 7 | — | Poison Point | Poison Sting, String Shot |
| Nidoran♀ | 8 | — | Poison Point | Double Kick, Scratch, Tail Whip |
| Beedrill | 9 | — | Merciless | Twineedle, Poison Sting |

**Status:** designed

**Design Notes:**
- **Weedle (lead):** String Shot slows the player's Pokemon (-1 Speed). Poison Sting has a 10% poison chance as soft setup. A low-threat opener that lulls the player before Nidoran♀ escalates the poison threat.
- **Nidoran♀ (middle):** Double Kick hits twice (30 BP × 2), and each hit has a 30% Poison Point proc — so two chances per turn to poison. Scratch as a backup contact move. The player who spams contact attacks here almost certainly gets poisoned before Beedrill arrives.
- **Beedrill (closer):** Merciless = guaranteed crits on poisoned targets. Twineedle is 2 hits of Bug STAB (25 BP each); against a poisoned Pokemon, both crits (1.5× each), totaling 75 effective power with STAB. Poison Sting can poison the next incoming Pokemon to set up the loop again. If the player's current Pokemon is poisoned, Beedrill is terrifying. If not, it's manageable.
- **Team identity:** Teaches the Beedrill Merciless build at the very first trainer with evolved bugs. Answer: Antidotes, non-contact moves (special attacks), or Fire/Flying/Rock to OHKO Beedrill before it attacks.

---

### Tiana (Lass) — Optional

> **Puzzle: The Status Web.** Tiana's team wraps the player in layers of status and chip damage before the real threats arrive. Shroomish paralyzes or seeds immediately — but contact attackers risk Effect Spore. Zigzagoon's Pickup buys a free turn. Then Marill hits surprisingly hard with Huge Power (doubled Attack). Ralts closes with unexpected Fairy/Psychic type coverage. The player who tries to brute-force through with contact moves ends up paralyzed, seeded, and facing a slow grind.

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Shroomish | 7 | — | Effect Spore | Stun Spore, Leech Seed, Absorb |
| Zigzagoon | 7 | — | Pickup | Sand Attack, Covet, Quick Attack |
| Marill | 8 | — | Huge Power | Water Gun, Defense Curl, Tackle |
| Ralts | 8 | — | Trace | Confusion, Disarming Voice |

**Status:** designed

**Design Notes:**
- **Shroomish (lead):** Opens with Stun Spore (paralysis, -50% Speed) or Leech Seed (1/8 HP drain per turn). Effect Spore means contact attackers have a 30% chance to be poisoned, paralyzed, or put to sleep — punishing physical attackers who try to brute-force it. Absorb drains back HP. Forces the player to think about attack type, not just damage.
- **Zigzagoon (middle):** Pickup (no item = half damage on first hit) buys a surprise turn. Covet pokes for item theft. Sand Attack drops accuracy. Not a damage threat — a time-sink that lets Tiana's status support pile up. Player who ignores it gets worn down.
- **Marill (third):** Huge Power doubles base Attack (20 → 40 effective). Defense Curl boosts Defense before Water Gun — Marill can take a hit and fire back with neutral Water-type coverage. Looks fragile but hits harder than expected. Under Stun Spore's paralysis support, Marill's 40 effective Attack does real chip.
- **Ralts (closer):** Confusion (Psychic STAB) + Disarming Voice (Fairy STAB, never misses) give unexpected type coverage. If Shroomish successfully paralyzed the player's lead, Ralts' 55 base SpA (rebalanced) can finish weakened Pokemon. Teaches players the Ralts line exists and has real special power.
- **Team identity:** Status layering is the win condition, not raw damage. Answer: ranged special moves to bypass Effect Spore, Paralyz Heals to restore Speed, and prioritizing Shroomish before the web builds.

---

### Allen (Youngster) — Optional

> **Puzzle: The Glass Cannon Squadron.** Allen's team hits immediately and hits hard — no status tricks, no defensive gimmicks. The centerpiece is Pikachu with Light Ball and Transistor, which can threaten KOs on Pokemon well above its level. Taillow and Pidgey apply early offensive pressure. Zigzagoon has Pickup bulk to waste a turn. Then Pikachu closes — Light Ball doubles its SpA (120 effective), Transistor boosts Electric by 1.5× (180 effective), and Thunder Wave can cripple the player's fast Pokemon. Differentiated from Calvin: Calvin's puzzle is "survive the swarm"; Allen's is "kill the Pikachu before it paralyzes your team."

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Taillow | 8 | — | Guts | Peck, Quick Attack, Focus Energy |
| Zigzagoon | 7 | — | Pickup | Quick Attack, Tackle, Sand Attack |
| Pidgey | 7 | — | Keen Eye | Gust, Sand Attack, Quick Attack |
| Pikachu | 9 | Light Ball | Transistor | Thunder Shock, Thunder Wave, Growl |

**Status:** designed

**Design Notes:**
- **Taillow (lead):** Peck (35 BP Flying STAB) + Quick Attack priority creates immediate pressure. Focus Energy sets up crits on Peck. Guts means if the player tries to status Taillow, it gets 1.5× Attack — a counterplay trap. Fast and annoying opener that teaches: Flying types can be physical attackers.
- **Zigzagoon (middle):** Pickup (first hit halved, no item) is the familiar mechanic now seen twice on Route 102 — but here it's mid-order instead of lead, playing differently. Sand Attack drops accuracy. Used to burn a player turn while Allen saves Pikachu for a clean finish.
- **Pidgey (third):** Keen Eye prevents accuracy drops — Sand Attack from the player's side is useless. Gust (40 BP Flying, hits airborne targets) + its own Sand Attack creates layered chip. The player can't nerf Pidgey's accuracy before switching into Pikachu.
- **Pikachu (closer):** Light Ball doubles SpA to 120. Transistor boosts Electric moves 1.5×. Thunder Shock (40 BP) becomes 60 effective power off 120 effective SpA at L9 — devastating for this stage. Thunder Wave can paralyze the player's sweeper mid-battle, crippling their ability to outspeed Pikachu (base 100 Speed). Growl chips Attack for physical leads that survive.
- **Team identity:** Allen's team is an escalating offense sequence ending in Pikachu as the climax threat. Answer: save a Ground-type or Rock-type coverage move for Pikachu, or sacrifice a Pokemon to absorb Thunder Wave, then revenge-kill with priority. Teaches: Pikachu with Light Ball is a real threat even at L9, Electric immunity matters.

---

## Route 103

### Rival (Brendan/May) — MANDATORY

> Team varies based on player's starter choice. Rival always leads with the starter counter, then Zigzagoon, then Wingull.

#### Scenario A: Player chose Mudkip → Rival has Treecko

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Treecko | 7 | None | Unburden | Pound, Leer, Razor Leaf |
| Zigzagoon | 6 | None | Pickup | Tackle, Growl, Sand Attack |
| Wingull | 5 | None | Drizzle | Water Gun, Growl |

#### Scenario B: Player chose Treecko → Rival has Torchic

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Torchic | 7 | None | Speed Boost | Scratch, Growl, Bulk Up, Ember |
| Zigzagoon | 6 | None | Pickup | Tackle, Growl, Sand Attack |
| Wingull | 5 | None | Drizzle | Water Gun, Growl |

#### Scenario C: Player chose Torchic → Rival has Mudkip

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Mudkip | 7 | None | Rain Dish | Tackle, Growl, Mud-Slap |
| Zigzagoon | 6 | None | Pickup | Tackle, Growl, Sand Attack |
| Wingull | 5 | None | Drizzle | Water Gun, Growl |

**Status:** designed

**Design notes:**
- **Treecko** leads the Unburden identity immediately — physical hitter with high-crit Razor Leaf even before the item-consumption combo unlocks
- **Torchic** shows off the Speed Boost engine early — Bulk Up on turn 1 into Ember is real pressure, and the player sees Speed Boost ticking every turn even at this level
- **Mudkip** brings Mud-Slap (accuracy drop) + Rain Dish — sets up the defensive layering theme even without Rain Dance yet; if Wingull's Drizzle is active, Rain Dish heals Mudkip passively for extra tension
- **Zigzagoon** carries no item to activate Pickup's Multiscale-at-full-HP: the first hit does half damage, which surprises the player and teaches the Belly Drum build identity early. Cannot use Belly Drum yet (L14) but the behavior is already visible.
- **Wingull** is the surprise — found on Route 103 water, Drizzle activates on switch-in, immediately boosting Water Gun to 60 effective power. Teaches weather mechanics at the very start of the game. In Scenario C, Wingull's rain also activates Mudkip's Rain Dish, creating emergent synergy the player can observe.
- No items on any Pokemon — keeps the fight readable for new players while still showcasing each Pokemon's build identity
- Level curve (7 / 6 / 5) ensures the fight is a genuine challenge without being insurmountable with a solo starter

### Daisy (Aroma Lady) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Shroomish | 14 | | | |
| Roselia | 14 | | | |
**Status:** not_started
**Notes:** 2 Pokemon, needs expansion to 3-6. Higher level than other Route 103 trainers. Add Grass/Poison types.

### Miguel (Pokefan) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Skitty | 15 | Oran Berry | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Needs major expansion.

### Andrew (Fisherman) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Magikarp | 5 | | | |
| Tentacool | 10 | | | |
| Magikarp | 15 | | | |
**Status:** not_started
**Notes:** 3 Pokemon. Classic fisherman team. Add more Water types from the area.

### Pete (Swimmer M) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Tentacool | 15 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Expand with Water types.

### Isabelle (Swimmer F) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Marill | 15 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Expand with Water types.

### Amy & Liv (Twins) — Optional, Double Battle
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Plusle | 15 | | | |
| Minun | 15 | | | |
**Status:** not_started
**Notes:** Doubles team. Plusle/Minun are Gen 3. Keep the theme but add more Pokemon.

### Marcos (Guitarist) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Voltorb | 15 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Electric theme. Expand.

### Rhett (Black Belt) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Makuhita | 15 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Fighting theme. Expand.

---

## Route 104

### Billy (Youngster) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 8 | | | |
| Seedot | 8 | | | |
| Taillow | 7 | | | |
**Status:** not_started
**Notes:** 3 Pokemon. Needs movesets. Seedot is not in our Route 104 pool — consider swapping.

### Joey (Youngster) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Machop | 9 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Machop not locally available. Expand and adjust.

### Haley (Lass) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Lotad | 8 | | | |
| Shroomish | 8 | | | |
| Ralts | 7 | | | |
**Status:** not_started
**Notes:** 3 Pokemon, good variety from nearby routes.

### Janice (Lass) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Marill | 9 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Expand.

### Cindy (Lady) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 9 | Nugget | | |
| Ralts | 8 | | | |
**Status:** not_started
**Notes:** 2 Pokemon. Nugget is a money reward.

### Winston (Rich Boy) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 9 | Nugget | | |
| Poochyena | 8 | | | |
**Status:** not_started
**Notes:** 2 Pokemon. Paired with Cindy.

### Gina & Mia (Twins) — Optional, Double Battle
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Seedot | 9 | | | |
| Lotad | 9 | | | |
**Status:** not_started
**Notes:** Doubles team. Seedot not in our pool — consider swapping.

### Jerry (School Kid) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Ralts | 9 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Expand.

### Karen (School Kid) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Shroomish | 9 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Expand.

---

## Petalburg Woods

### Team Aqua Grunt — MANDATORY
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Carvanha | 9 | | Strong Jaw | Bite, Leer, Aqua Jet |
| Tentacool | 10 | | Poison Heal | Poison Sting, Water Gun, Whirlpool |
| Corphish | 10 | | Sheer Force | Vise Grip, Leer, Bite |
| Poochyena | 11 | | Guts | Quick Attack, Bite, Scary Face |

**Status:** designed

**Design Notes:**
- **Carvanha (lead):** Fast opener at 75 Spe. Opens with Leer to chip Defense, then threatens with Strong Jaw-boosted Bite (STAB Dark, 180 effective BP off a L9 Pokemon) or Aqua Jet for priority. Teaches the player that Team Aqua Pokemon are speed-oriented and hit hard.
- **Tentacool (middle):** The annoying pivot. Whirlpool traps the player's Pokemon (buffed: traps + Atk -1), then stacks Poison Sting chip. 100 base SpDef means it tanks special hits. Forces the player to burn turns while their Pokemon can't escape — a skill-check that teaches what Tentacool does.
- **Corphish (middle):** Raw bruiser. Sheer Force-boosted Bite (flinch effect converted to 78 BP, plus STAB Dark = 117 effective) hits hard at L10. Vise Grip is the backup if they're in a bad matchup. Reinforces the Water/Dark Team Aqua identity.
- **Poochyena (closer):** 85 HP bulk makes this the last mon standing feel surprisingly tanky. Quick Attack priority and Bite STAB force the player to close out efficiently. Scary Face on the switch-in slows the player's mon, giving it at least one extra Bite turn. Guts synergy is flavor — no item to activate it here, but the threat of status is thematic.

**Team Identity:** This team teaches three things: Water/Dark is fast and powerful (Carvanha), Aqua types can lock you down (Tentacool trapping), and Dark STAB hits hard across multiple Pokemon (Carvanha + Corphish + Poochyena). The player should feel like they survived a real fight, not a pushover.

### Lyle (Bug Catcher) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Wurmple | 6 | | | |
| Caterpie | 6 | | | |
| Weedle | 6 | | | |
**Status:** not_started
**Notes:** 3 basic bugs. Needs evolution and movesets.

### James (Bug Catcher) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Nincada | 8 | | | |
| Nincada | 8 | | | |
| Surskit | 7 | | | |
**Status:** not_started
**Notes:** 3 Pokemon. Better than Lyle's team. Needs movesets.

---

## Route 116

### Clark (Hiker) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 8 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Expand with cave/rock types.

### Devan (Hiker) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 8 | | | |
| Geodude | 8 | | | |
**Status:** not_started
**Notes:** 2 Geodude. Needs variety.

### Mike (Hiker) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Pelipper | 10 | | | Gust, Growl |
| Poochyena | 10 | | | Bite, Scary Face |
**Status:** not_started
**Notes:** 2 Pokemon. Pelipper seems odd for a Hiker. Adjust.

### Jose (Bug Catcher) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Wurmple | 8 | | | |
| Nincada | 8 | | | |
**Status:** not_started
**Notes:** 2 Pokemon. Expand with evolved bug forms.

### Johnson (Youngster) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Shroomish | 8 | | | |
| Lotad | 8 | | | |
**Status:** not_started
**Notes:** 2 Pokemon. Grass theme. Expand.

### Darian (Fisherman) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Magikarp | 9 | | | |
| Tentacool | 8 | | | |
**Status:** not_started
**Notes:** 2 Pokemon. Classic fisherman. Expand with Water types.

### Sarah (Lady) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Lotad | 8 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Expand.

### Dawson (Rich Boy) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 8 | Nugget | | |
| Poochyena | 8 | | | |
**Status:** not_started
**Notes:** 2 Pokemon. Money trainer.

---

## Rusturf Tunnel

### Team Aqua Grunt — MANDATORY
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Carvanha | 12 | — | Strong Jaw | Bite, Aqua Jet, Crunch, Leer |
| Tentacool | 12 | — | Poison Heal | Poison Sting, Water Gun, Whirlpool, Acid Spray |
| Wingull | 12 | — | Drizzle | Water Gun, Wing Attack, Supersonic, Water Pulse |
| Poochyena | 13 | — | Guts | Bite, Quick Attack, Howl, Swagger |
**Status:** designed
**Strategy:**
- **Carvanha** is the dangerous opener. Strong Jaw + STAB Crunch hits at 180 effective BP — the player immediately feels the escalation from Petalburg Woods. Aqua Jet provides priority Water STAB for revenge kills.
- **Tentacool** is the annoying middle mon. Whirlpool traps the player's Pokemon (+ lowers Atk by 1 per our design), then Acid Spray shreds SpDef by -2. If the player isn't careful, Tentacool forces a favorable trade.
- **Wingull** brings Drizzle on switch-in — passively boosts Water moves on any remaining Water types. A preview of rain team synergy the player will face more of later. Water Pulse's confusion chance is annoying, Wing Attack provides chip.
- **Poochyena** anchors at L13. Howl sets up Attack, Swagger may confuse the player's Pokemon — but Guts means if the player tries to status Poochyena back, it gets a 1.5x Attack boost. Quick Attack is priority revenge-kill bait. This grunt's team has a real identity: Dark/Water bites you, poisons you, confuses you.

---

## Rustboro Gym

### Josh (Youngster) — Gym Trainer
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 10 | | | Tackle |
**Status:** not_started
**Notes:** Only 1 Pokemon with 1 move. Needs major upgrade.

### Tommy (Youngster) — Gym Trainer
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 8 | | | |
| Geodude | 8 | | | |
**Status:** not_started
**Notes:** 2 Geodude. Needs variety — use other Rock types.

### Marc (Hiker) — Gym Trainer
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| *TBD* | | | | |
**Status:** not_started
**Notes:** Team not fully documented. Needs design.

### Roxanne (Leader) — MANDATORY
**Status:** designed
**Notes:** Full 6-Pokemon sandstorm team already designed. See segment doc.
