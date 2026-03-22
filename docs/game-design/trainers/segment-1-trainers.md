---
segment: 1
name: Start to Rustboro Gym
status: in_progress
total_trainers: 39
designed: 4
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

**Puzzle: Belly Drum Zigzagoon — answer the setup sweeper or lose**

Calvin's team escalates: Nidoran M threatens contact-based poison, Rattata picks off weakened targets with Strong Jaw + priority, and Zigzagoon is the ace. With no held item, Pickup's Multiscale effect halves the first hit — Calvin will use Belly Drum immediately after tanking it. A Belly Drum Zigzagoon with Quick Attack at +6 Attack is nearly unstoppable. The player must answer Zigzagoon on turn 2 or face a sweep.

*Player needs: High-damage first strike, priority move of their own, or a Rock/Fighting/Ghost type to wall Zigzagoon's Normal moves.*

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Nidoran M | 7 | Oran Berry | Poison Point | Horn Attack, Poison Sting, Leer, Tackle |
| Rattata | 8 | Oran Berry | Strong Jaw | Quick Attack, Bite, Tail Whip, Tackle |
| Zigzagoon | 8 | None | Pickup | Belly Drum, Quick Attack, Headbutt, Sand Attack |

**Design Notes:**
- **Nidoran M** opens with Horn Attack (65 BP Normal STAB) and threatens contact poison via Poison Point. Softens the player's lead.
- **Rattata** cleans up with Quick Attack (priority) + Bite (Strong Jaw → 90 effective BP Dark). A faster, harder threat than it looks.
- **Zigzagoon (ace):** No item = Pickup Multiscale active. Tanks the hit at 50% damage, then Belly Drum. At +6 Attack, Quick Attack wins trades against almost anything at this level. Sand Attack chips in if the player switches. Headbutt is the strong option if Quick Attack doesn't finish.

**Status:** designed

---

### Rick (Bug Catcher) — Optional

**Puzzle: Shed Skin attrition — grind through the walls before running dry**

Rick's team is layered: Caterpie slows the player with guaranteed String Shot (Compound Eyes boosts accuracy to 100%, dropping Speed by 2 stages), Weedle threatens poison and punishes contact with Poison Point, and the two cocoon forms stack Harden while Shed Skin clears any status the player tries to apply. The player can't stall or status their way out — they need raw damage output to break through Harden before burning all their PP and items.

*Player needs: High-power STAB moves, Fire-type coverage, or a setup sweeper that can break through Defense boosts.*

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Caterpie | 6 | None | Compound Eyes | String Shot, Tackle |
| Weedle | 7 | None | Poison Point | Poison Sting, Bug Bite, String Shot |
| Silcoon | 8 | None | Shed Skin | Harden |
| Metapod | 8 | None | Shed Skin | Harden |

**Design Notes:**
- **Caterpie** opens with String Shot at 100% accuracy (Compound Eyes). -2 Speed on turn 1 means slower Pokemon lose the speed tie and take extra chip from Weedle.
- **Weedle** poisons with Poison Sting (chips 1/8 HP/turn) and punishes physical contact through Poison Point. Bug Bite has slight type coverage. The player is now managing both speed and poison.
- **Silcoon + Metapod (cocoons):** Each uses Harden repeatedly. Shed Skin clears Burn/Paralysis status 33% per turn, making status moves unreliable. Rick's finale is two stacked Defense walls. The player needs sustained damage or they run out of PP on Harden stacks while taking Poison chip.
- Rick is designed as a resource-drain trainer — the puzzle is whether the player brought enough firepower.

**Status:** designed

---

### Tiana (Lass) — Optional

**Puzzle: Rain stall + surprising Huge Power — the team hits harder than it looks**

Tiana's team is built around passive healing and sustained attrition, but she has two genuine offensive threats hidden inside a support shell. Lotad sets Rain Dance → activates Rain Dish healing and buffs Water moves, then Leech Seeds the player for sustained drain. Marill looks harmless at L7 but Huge Power doubles its Attack — Aqua Jet priority hits for 60 effective BP off doubled Attack, which 2HKOs many early-game Pokemon. Shroomish uses Bullet Seed + Mach Punch for Technician-boosted multi-hit and priority. Ralts can copy the player's starter ability with Trace.

*Player needs: Electric or Poison coverage to cut through Water/Grass types, and a fast physical attacker to answer Marill before it spams priority.*

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Lotad | 7 | Oran Berry | Rain Dish | Rain Dance, Leech Seed, Absorb, Water Gun |
| Marill | 7 | Oran Berry | Huge Power | Aqua Jet, Water Gun, Defense Curl, Tackle |
| Shroomish | 7 | None | Technician | Bullet Seed, Mach Punch, Stun Spore, Absorb |
| Ralts | 8 | Oran Berry | Trace | Confusion, Disarming Voice, Growl |

**Design Notes:**
- **Lotad (lead):** Immediately sets Rain Dance. Rain Dish heals 1/16 HP/turn in rain, Leech Seed drains opponent 1/8 HP/turn, Absorb steals HP directly. Stacked healing makes Lotad very hard to KO in the short window trainers allow. Oran Berry extends this further.
- **Marill:** The surprise threat. 30 base Atk × 2 (Huge Power) = 60 effective Atk at L7. Aqua Jet is a +1 priority 40 BP Water move — effective 60 BP with STAB off 60 Atk. That meaningfully threatens most L6-8 Pokemon. Defense Curl + Water Gun gives a backup option. Players who don't know Huge Power get caught off guard.
- **Shroomish:** Bullet Seed is 25 BP × 2-5 hits, each boosted by Technician (×1.5 → 37.5 per hit). Even at 2 hits that's 75 effective Grass STAB — good for the level. Mach Punch with Technician is 60 effective priority Fighting STAB. Stun Spore paralyzes for speed control. Absorb gives minor sustain.
- **Ralts (ace):** Trace copies the player's lead Pokemon's ability on switch-in. This can be extremely disruptive — if the player has Transistor, Pickup Multiscale, or Huge Power, Ralts now has it too. Disarming Voice (60 BP Fairy, never misses) + Confusion (50 BP Psychic, 10% confusion) are consistent damage. Oran Berry keeps it alive.

**Status:** designed

---

### Allen (Youngster) — Optional

**Puzzle: Speed control into evolved form — paralysis opens the door for Nidorino**

Allen's team is built around shutting down speed first. Pikachu leads with Thunder Wave (guaranteed -50% Speed on the target) or Nuzzle (auto-paralyze on contact) to lock down the player's fastest Pokemon. Once paralysis is applied, Nidoran F threatens additional contact poison via Poison Point and chips with Poison Sting. Nidorino is the ace — an evolved form that many players won't see coming on a Youngster, with solid physical stats and Poison Point punishing every contact move.

*Player needs: Ground-type STAB to threaten Pikachu, Psychic for Nidoran line, or Fire/Ice to avoid triggering Poison Point.*

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Pikachu | 8 | Oran Berry | Transistor | ThunderShock, Thunder Wave, Nuzzle, Quick Attack |
| Nidoran F | 7 | Oran Berry | Poison Point | Poison Sting, Scratch, Leer, Growl |
| Nidorino | 9 | Oran Berry | Poison Point | Horn Attack, Poison Sting, Leer, Tackle |

**Design Notes:**
- **Pikachu (lead):** Thunder Wave immediately paralyzes the player's lead (25% can't move + halved Speed). Nuzzle auto-paralyzes on contact. ThunderShock with Transistor = 60 effective Electric BP (1.5× ability boost) — enough to threaten at L8. Quick Attack for priority finishes. Oran Berry gives a second wind. Pikachu is the setup tool that makes everything else scarier.
- **Nidoran F:** After paralysis, Nidoran F's job is to punish. Poison Point means any contact move risks double-status (already paralyzed + now poisoned). Poison Sting chips HP. Nothing fancy — just friction and passive damage stacking.
- **Nidorino (ace):** The evolved form surprise. Most trainers on Route 102 have L6-8 basics. Nidorino at L9 has noticeably higher Attack and HP, and Poison Point punishes every physical hit the player throws. Horn Attack (65 BP Normal STAB) is solid for the level. The player who swept through Calvin and Tiana with a physical attacker now has to reconsider their contact-heavy strategy.
- Allen's design arc: Calvin teaches Belly Drum pressure, Allen teaches paralysis/poison stacking. Different angles on the "status punishes aggression" lesson.

**Status:** designed

---

## Route 103

### Rival (Brendan/May) — MANDATORY
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Starter counter | 5 | | | |
**Status:** not_started
**Notes:** First rival battle. Only 1 Pokemon currently — consider expanding?

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
| Poochyena | 10 | | | |
| Carvanha | 9 | | | |
**Status:** not_started
**Notes:** Story battle. 2 Pokemon, needs expansion to 3-4. Should feel threatening.

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
| Poochyena | 11 | | | |
**Status:** not_started
**Notes:** Only 1 Pokemon. Story battle — should be 3-4 Pokemon and feel like a real fight.

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
