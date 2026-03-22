---
segment: 1
name: Start to Rustboro Gym
status: complete
total_trainers: 38
designed: 38
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
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Poochyena | 7 | None | Guts | Bite, Quick Attack, Scary Face, Tackle |
| Rattata | 7 | None | Strong Jaw | Bite, Quick Attack, Tackle, Tail Whip |
| Nidoran M | 8 | None | Poison Point | Horn Attack, Poison Sting, Leer, Tackle |
**Status:** designed
**Notes:** Dark/Poison physical attacker theme. See `trainers/segment-1/calvin.md`.

### Rick (Bug Catcher) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Wurmple | 6 | None | Technician | Poison Sting, Tackle, String Shot, Pin Missile |
| Silcoon | 7 | None | Shed Skin | Harden, Tackle |
| Cascoon | 7 | None | Shed Skin | Harden, Tackle |
| Beautifly | 9 | None | Tinted Lens | Bug Buzz, Gust, Absorb, Sleep Powder |
**Status:** designed
**Notes:** Wurmple evolution showcase. See `trainers/segment-1/rick.md`.

### Tiana (Lass) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 7 | None | Pickup | Tackle, Growl, Sand Attack, Headbutt |
| Shroomish | 8 | None | Technician | Bullet Seed, Mach Punch, Absorb, Stun Spore |
| Marill | 8 | None | Huge Power | Aqua Jet, Water Gun, Tackle, Defense Curl |
| Lotad | 7 | None | Rain Dish | Absorb, Leech Seed, Water Gun, Growl |
**Status:** designed
**Notes:** Priority lesson — Mach Punch, Aqua Jet. See `trainers/segment-1/tiana.md`.

### Allen (Youngster) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Taillow | 7 | None | Guts | Pluck, Wing Attack, Growl, Quick Attack |
| Pidgey | 7 | None | Aerilate | Tackle, Quick Attack, Sand Attack, Gust |
| Zigzagoon | 8 | None | Pickup | Tackle, Growl, Sand Attack, Headbutt |
**Status:** designed
**Notes:** Bird boy — Normal/Flying theme. See `trainers/segment-1/allen.md`.

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
| Tentacool | 13 | Toxic Orb | Poison Heal | Whirlpool, Acid Spray, Poison Sting, Water Gun |
| Marill | 14 | None | Huge Power | Aqua Jet, Play Rough, Defense Curl, Water Gun |
| Poliwag | 14 | None | Swift Swim | Hypnosis, Rain Dance, Water Pulse, Mud Shot |

**Status:** designed

**Design notes:**
- **Tentacool (lead):** Opens with Whirlpool to trap the player's Pokemon (buffed: traps + Atk -1) and immediately stacks Acid Spray (-2 SpDef on the trapped target). Toxic Orb activates Poison Heal on turn 1 — she's now healing 1/8 HP per turn and can't be statused. Forces the player to burn their trapped Pokemon's turn while Daisy's team chunks them down.
- **Marill (anchor):** Huge Power doubles Atk (30 base → 60 effective). Aqua Jet is priority Water STAB with 60 effective BP — comes in after Tentacool softens the target. Play Rough covers Dragon/Fighting. A surprisingly hard hit for Route 103. No item to underscore "just raw power."
- **Poliwag (closer):** Hypnosis is the wild card — if the player expects a standard Water fight and Poliwag sleeps their best counter, the match becomes much harder. Rain Dance into Water Pulse under Swift Swim is also a credible threat (Swift Swim doubles Speed in rain). Mud Shot chips and slows.
- **Mini-puzzle:** Tentacool traps + debuffs, Marill closes with priority, Poliwag disrupts with sleep. The player is punished for leaving a weakened Pokemon in against Tentacool — they can't switch out of Whirlpool.

---

### Miguel (Pokefan) — Optional

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Wingull | 13 | None | Drizzle | Wing Attack, Water Pulse, Supersonic, Water Gun |
| Poliwag | 14 | None | Swift Swim | Hypnosis, Rain Dance, Water Pulse, Mud Shot |
| Marill | 14 | None | Huge Power | Aqua Jet, Play Rough, Defense Curl, Water Gun |
| Squirtle | 15 | None | Mega Launcher | Water Pulse, Rapid Spin, Aura Sphere, Tail Whip |

**Status:** designed

**Design notes:**
- **Wingull (lead):** Drizzle sets rain on entry — immediately boosts Water moves by 1.5× and sets up Swift Swim. Supersonic confuses on turn 1 while rain is being taken advantage of. Water Pulse (60 BP → 90 in rain) is real pressure even without Mega Launcher.
- **Poliwag (middle):** Swift Swim doubles Speed in rain — suddenly an otherwise slow Pokemon outspeeds most of the player's team. Hypnosis from a fast Pokemon is brutal (the player can't outspeed to preempt). Water Pulse hits for 90 effective BP in rain off 70 rebalanced SpA.
- **Marill (pivot):** Huge Power Aqua Jet is priority physical Water STAB — still hits hard even as the rain setup is being established. Play Rough for coverage. The rain isn't required for Marill to function, which makes the team harder to play around.
- **Squirtle (closer):** Mega Launcher + Aura Sphere (Fighting, never misses) is the surprise. The player likely isn't expecting a Fighting-type coverage move from a Water trainer at this point. Water Pulse off 65 SpA with Mega Launcher = 90 effective BP.
- **Mini-puzzle:** Miguel is teaching the player "rain teams exist." Wingull sets up → Poliwag goes first → Marill cleans up with priority → Squirtle has unexpected coverage. The player who doesn't recognize the rain loop will lose to Poliwag's surprise speed.

---

### Andrew (Fisherman) — Optional

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Magikarp | 13 | None | Moxie | Aqua Jet, Tackle, Splash |
| Tentacool | 14 | Toxic Orb | Poison Heal | Whirlpool, Acid Spray, Poison Sting, Water Gun |
| Magikarp | 15 | None | Moxie | Aqua Jet, Flail, Tackle |
| Poliwag | 14 | None | Swift Swim | Hypnosis, Rain Dance, Water Pulse, Mud Shot |

**Status:** designed

**Design notes:**
- **Magikarp L13 (lead):** Aqua Jet (priority Water STAB, 50 rebalanced Atk) surprises players who expect Magikarp to be useless. It's still weak but Moxie means even one KO on a weakened target turns it into a real threat. A taste of the Gyarados sweep fantasy.
- **Tentacool (middle):** The genuinely dangerous mon. Whirlpool traps + Acid Spray shreds SpDef, Poison Heal + Toxic Orb makes it nearly unkillable while the trap ticks. Forces the player to either stay in and get ground down or wait out the trap.
- **Magikarp L15 (third):** Flail deals up to 200 BP at low HP — at 1 HP, Flail is a terror. Andrew has "trained" this Magikarp to hang on at low health. The player has to decide whether to quick-kill it or risk the Flail. Moxie means if it somehow gets a KO, the next Aqua Jet hits even harder.
- **Poliwag (closer):** Hypnosis as the final disruptor. After surviving Tentacool's trap and the Magikarp threats, a sleep move is extremely annoying. Rain Dance + Water Pulse is a fallback offensive line.
- **Mini-puzzle:** The player must respect Tentacool but also not let Magikarp L15 accumulate Flail value. Andrew tests "can you close out a fight without letting desperation tactics pay off?"

---

### Pete (Swimmer M) — Optional

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Wingull | 14 | None | Drizzle | Wing Attack, Water Pulse, Supersonic, Water Gun |
| Poliwag | 14 | None | Swift Swim | Hypnosis, Rain Dance, Water Pulse, Mud Shot |
| Tentacool | 15 | Toxic Orb | Poison Heal | Whirlpool, Acid Spray, Poison Sting, Water Gun |

**Status:** designed

**Design notes:**
- **Wingull (lead):** Drizzle on entry + Supersonic immediately puts the player's lead in confusion. Wing Attack for Flying STAB chip. The rain + confusion combination means the player is forced to act through adverse conditions from turn 1.
- **Poliwag (middle):** Hypnosis threatens sleep — the player's Pokemon may already be confused from Supersonic, and now it's asleep too. Rain Dance is redundant (Wingull already set it) but can be used to reset rain if it runs out. Swift Swim under rain is the real payoff — outspeeds everything.
- **Tentacool (closer):** The confused/weakened Pokemon left after the status barrage gets Whirlpoold and ground out. Acid Spray softens SpDef so Tentacool's offense actually matters. Poison Heal keeps it up through the entire trap sequence.
- **Mini-puzzle:** Pete's puzzle is "status denial." The player who doesn't have a status cure or a fast attacker will spend multiple turns hitting themselves or sleeping. Every turn of confusion/sleep buys Tentacool a free trap application. The player learns that disruption stacks.

---

### Isabelle (Swimmer F) — Optional

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Wingull | 14 | None | Drizzle | Wing Attack, Water Pulse, Water Gun, Roost |
| Marill | 15 | None | Huge Power | Aqua Jet, Play Rough, Defense Curl, Water Gun |
| Squirtle | 14 | None | Mega Launcher | Water Pulse, Rapid Spin, Aura Sphere, Tail Whip |

**Status:** designed

**Design notes:**
- **Wingull (lead):** Drizzle sets rain. Roost gives Wingull real longevity — it can tank a hit, Roost back to full, and keep rain cycling. Wing Attack + Water Pulse (90 BP in rain off 60 SpA) is real damage pressure. Isabelle's Wingull doesn't die immediately unlike other trainers' leads.
- **Marill (sweeper):** Huge Power + rain = Aqua Jet goes from 60 effective BP to 90 effective BP with STAB and rain boost (40 BP × 2 Huge Power × 1.5 STAB × 1.5 rain = 180 effective damage). Play Rough catches Dragon/Dark types. Defense Curl into Aqua Jet is a pseudo-setup. At L15, Marill with rain-boosted Aqua Jet is a genuine threat.
- **Squirtle (coverage):** Mega Launcher Aura Sphere (80 BP, never misses, Fighting type) is the surprise. Water Pulse (90 BP with Mega Launcher) under rain is 135 effective BP. Rapid Spin clears any hazards the player might have set. Squirtle's type diversity (Water + Fighting + spin utility) makes it hard to answer with one Pokemon.
- **Mini-puzzle:** Isabelle tests the player's understanding of priority mechanics. Rain boosts everything, Marill's Aqua Jet is much harder than it looks, and Squirtle's Aura Sphere covers the types the player might bring to resist Water.

---

### Amy & Liv (Twins) — Optional, Double Battle

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Minun | 15 | Sitrus Berry | Friend Guard | Follow Me, Nuzzle, ThunderShock, Growl |
| Plusle | 15 | None | Plus | Charge Beam, Nuzzle, ThunderShock, Growl |
| Marill | 15 | None | Huge Power | Aqua Jet, Play Rough, Defense Curl, Water Gun |
| Squirtle | 15 | None | Mega Launcher | Water Pulse, Rapid Spin, Aura Sphere, Tail Whip |

**Status:** designed

**Design notes:**
- **Opening pair — Minun + Plusle:**
  - **Turn 1:** Minun uses Follow Me — all single-target moves from both player slots redirect to Minun (95/75/95 bulk + Sitrus Berry). Plusle uses Charge Beam: 50 BP Electric STAB + 70% chance to raise SpA by +1. Plus ability gives 1.5× SpA when Minun (Minus) is adjacent — Plusle opens at 172 effective SpA.
  - **Turn 2:** Minun uses Nuzzle (paralysis) on the faster of the two player Pokemon. Plusle Charge Beams again — now potentially at 172 × 1.5 (if +1 triggered) = 258 effective SpA ThunderShock.
  - **Turn 3+:** If Follow Me and Charge Beam stacking has gone well, Plusle's ThunderShock hits at 40 BP × boosted SpA. The player must deal with one paralyzed Pokemon trying to kill Minun while Plusle fires from behind.
- **Bench — Marill + Squirtle:** If Minun falls, Marill comes in with Huge Power Aqua Jet priority. If Plusle falls, Squirtle brings Aura Sphere (never-miss Fighting coverage). The bench ensures the fight has legs even after the core duo is broken.
- **Mini-puzzle:** The classic Plusle/Minun doubles dilemma. Kill Minun first? Hard — 95 HP / 75 Def / Friend Guard + Sitrus Berry. Kill Plusle first? Can't — Follow Me redirects single-target hits to Minun. Use spread moves? Unlikely the player has them at Route 103. The player probably loses one Pokemon to Nuzzle paralysis and has to scramble.

---

### Marcos (Guitarist) — Optional

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Voltorb | 15 | None | Galvanize | Thunder Wave, Sonic Boom, Self-Destruct, Tackle |
| Wingull | 14 | None | Drizzle | Water Gun, Wing Attack, Supersonic, Growl |
| Marill | 14 | None | Huge Power | Aqua Jet, Play Rough, Defense Curl, Water Gun |

**Status:** designed

**Design notes:**
- **Voltorb (lead):** Thunder Wave paralyzes on turn 1 — the player's lead is now at 25% Speed and has a 25% chance to lose their turn each round. Sonic Boom deals fixed 20 damage regardless of type — bypasses resistances. The real threat is Self-Destruct: Galvanize converts it to Electric type (156 effective BP with STAB) at 110 Speed. The player must decide: do I KO Voltorb quickly (but I'm paralyzed and slower), or switch and let it paralyze the next Pokemon?
- **Wingull (middle):** Drizzle activates on switch-in. Supersonic stacks confusion on top of the paralysis Voltorb applied. Water Gun and Wing Attack are the offense. The paralysis + confusion combination means the player's active Pokemon may fail to act for several turns.
- **Marill (closer):** Huge Power Aqua Jet is the clean-up priority move after the player has been worn down. Play Rough for Fairy coverage. No item to keep the math clean, but 60 effective Atk + priority Water STAB still deals real chip.
- **Mini-puzzle:** Voltorb is the Bomb Problem — kill it now (while paralyzed, at risk of turn loss) or let it stay in and apply more Thunder Waves on switches. Self-Destruct can erase a weakened team member. Marcos tests "can you play through status pressure and close out a bomb threat?"

---

### Rhett (Black Belt) — Optional

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Makuhita | 15 | None | Iron Fist | Fake Out, Mach Punch, Fire Punch, Tackle |
| Tentacool | 14 | Toxic Orb | Poison Heal | Whirlpool, Acid Spray, Poison Sting, Water Gun |
| Poliwag | 14 | None | Swift Swim | Hypnosis, Rain Dance, Water Pulse, Mud Shot |

**Status:** designed

**Design notes:**
- **Makuhita (lead):** Fake Out on turn 1 guarantees a flinch and free chip damage — the player loses their first move. Mach Punch is +1 priority Iron Fist Fighting STAB (48 effective BP) — Makuhita acts before most Pokemon every subsequent turn. Fire Punch (90 effective BP with Iron Fist) covers the Grass types a player might bring to exploit the Water team members. A Fighting type on a "Water route" trainer is the surprise.
- **Tentacool (middle):** Whirlpool traps the Pokemon that survived Makuhita's Fake Out + Mach Punch. Acid Spray immediately shreds SpDef. Poison Heal + Toxic Orb makes it nearly unkillable while the trap runs. The player who "safely" switched into Tentacool to get away from Makuhita is now stuck.
- **Poliwag (closer):** Hypnosis is the disruption wildcard from what looks like a straightforward fighting trainer. After surviving Fake Out, Mach Punch chip, and a Tentacool trap, a sleep move on the player's last healthy Pokemon is devastating. Rain Dance + Swift Swim fallback if Hypnosis is blocked.
- **Mini-puzzle:** Rhett punishes passive play. Fake Out forces the player to take chip or switch (into Tentacool's trap). Mach Punch means the player can't outspeed Makuhita. The player needs a Ghost type (immune to Fake Out + Mach Punch) or a fast spread move to break Rhett's momentum — unlikely at Route 103.

---

## Route 104

### Billy (Youngster) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 8 | None | Pickup | Tackle, Growl, Sand Attack, Headbutt |
| Taillow | 8 | None | Guts | Pluck, Wing Attack, Growl, Quick Attack |
| Poochyena | 9 | None | Guts | Bite, Quick Attack, Scary Face, Tackle |
**Status:** designed
**Notes:** Straightforward brawler. See `trainers/segment-1/billy.md`.

### Joey (Youngster) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Machop | 9 | None | Guts | Low Kick, Leer, Focus Energy, Karate Chop |
| Poochyena | 8 | None | Guts | Bite, Quick Attack, Scary Face, Tackle |
| Marill | 8 | None | Huge Power | Aqua Jet, Water Gun, Tackle, Defense Curl |
**Status:** designed
**Notes:** Fighting + Dark + Water coverage. See `trainers/segment-1/joey.md`.

### Haley (Lass) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Lotad | 8 | None | Rain Dish | Absorb, Leech Seed, Water Gun, Growl |
| Shroomish | 9 | None | Technician | Bullet Seed, Mach Punch, Absorb, Stun Spore |
| Ralts | 9 | None | Trace | Confusion, Disarming Voice, Growl, Psybeam |
**Status:** designed
**Notes:** Drain-and-status team. See `trainers/segment-1/haley.md`.

### Janice (Lass) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Marill | 9 | None | Huge Power | Aqua Jet, Play Rough, Water Gun, Defense Curl |
| Wingull | 8 | None | Drizzle | Water Gun, Wing Attack, Growl, Water Pulse |
| Surskit | 8 | None | Swift Swim | Water Gun, Silver Wind, Quick Attack, Bubble |
**Status:** designed
**Notes:** Proto-rain team. See `trainers/segment-1/janice.md`.

### Cindy (Lady) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 9 | Nugget | Pickup | Tackle, Headbutt, Sand Attack, Growl |
| Ralts | 9 | None | Trace | Confusion, Disarming Voice, Growl, Calm Mind |
| Skitty | 9 | None | Normalize | Fake Out, Tackle, Sing, Growl |
**Status:** designed
**Notes:** Money trainer + status disruption. See `trainers/segment-1/cindy.md`.

### Winston (Rich Boy) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 9 | Nugget | Pickup | Tackle, Headbutt, Sand Attack, Growl |
| Poochyena | 9 | None | Guts | Bite, Quick Attack, Howl, Tackle |
| Wingull | 8 | None | Drizzle | Water Gun, Wing Attack, Supersonic, Growl |
**Status:** designed
**Notes:** Money trainer + offensive momentum. See `trainers/segment-1/winston.md`.

### Gina & Mia (Twins) — Optional, Double Battle
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Lotad | 9 | None | Rain Dish | Rain Dance, Leech Seed, Absorb, Water Gun |
| Wingull | 9 | None | Drizzle | Water Pulse, Wing Attack, Growl, Supersonic |
| Marill | 9 | None | Huge Power | Aqua Jet, Play Rough, Water Gun, Defense Curl |
| Surskit | 9 | None | Swift Swim | Silver Wind, Water Gun, Quick Attack, Bubble |
**Status:** designed
**Notes:** Doubles rain team. See `trainers/segment-1/gina-mia.md`.

### Jerry (School Kid) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Ralts | 9 | None | Trace | Confusion, Disarming Voice, Growl, Calm Mind |
| Wingull | 8 | None | Drizzle | Water Gun, Wing Attack, Supersonic, Growl |
| Taillow | 9 | None | Guts | Wing Attack, Pluck, Quick Attack, Growl |
**Status:** designed
**Notes:** Setup + weather + status punishment. See `trainers/segment-1/jerry.md`.

### Karen (School Kid) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Shroomish | 9 | None | Technician | Bullet Seed, Mach Punch, Stun Spore, Absorb |
| Wurmple | 8 | None | Technician | Pin Missile, Poison Sting, Tackle, String Shot |
| Marill | 9 | None | Huge Power | Aqua Jet, Water Gun, Play Rough, Defense Curl |
**Status:** designed
**Notes:** Technician theme. See `trainers/segment-1/karen.md`.

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
| Wurmple | 6 | None | Technician | Tackle, Poison Sting, String Shot, Pin Missile |
| Silcoon | 7 | None | Shed Skin | Harden, Tackle |
| Beautifly | 9 | None | Tinted Lens | Bug Buzz, Gust, Sleep Powder, Absorb |
| Caterpie | 7 | None | Shield Dust | Tackle, String Shot, Bug Bite |
**Status:** designed
**Notes:** Beautifly-path showcase. See `trainers/segment-1/lyle.md`.

### James (Bug Catcher) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Nincada | 8 | None | Speed Boost | Scratch, Sand Attack, Harden, Mud Slap |
| Cascoon | 7 | None | Shed Skin | Harden, Tackle |
| Dustox | 9 | None | Prankster | Confusion, Poison Powder, Venoshock, Protect |
| Surskit | 8 | None | Swift Swim | Silver Wind, Water Gun, Quick Attack, Bubble |
**Status:** designed
**Notes:** Dustox-path showcase. See `trainers/segment-1/james.md`.

---

## Route 116

### Clark (Hiker) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 9 | None | Stamina | Defense Curl, Rollout, Rock Throw, Tackle |
| Geodude | 9 | None | Sturdy | Rock Throw, Bulldoze, Tackle, Defense Curl |
| Makuhita | 10 | None | Iron Fist | Fake Out, Mach Punch, Tackle, Focus Energy |
**Status:** designed
**Notes:** Intro to Geodude Stamina + Rollout. See `trainers/segment-1/clark.md`.

### Devan (Hiker) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 9 | None | Stamina | Defense Curl, Rollout, Bulldoze, Tackle |
| Nincada | 9 | None | Speed Boost | Scratch, Sand Attack, Mud Slap, Harden |
| Makuhita | 10 | None | Iron Fist | Mach Punch, Fire Punch, Fake Out, Tackle |
**Status:** designed
**Notes:** Variety with Nincada + accuracy drops. See `trainers/segment-1/devan.md`.

### Mike (Hiker) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Makuhita | 10 | None | Iron Fist | Mach Punch, Fire Punch, Bulk Up, Fake Out |
| Geodude | 10 | None | Stamina | Defense Curl, Rollout, Rock Throw, Bulldoze |
| Geodude | 11 | None | Sturdy | Rock Throw, Bulldoze, Stealth Rock, Tackle |
**Status:** designed
**Notes:** Hardest Hiker — Makuhita lead + Stealth Rock. See `trainers/segment-1/mike.md`.

### Jose (Bug Catcher) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Nincada | 9 | None | Speed Boost | Scratch, Sand Attack, Mud Slap, Harden |
| Dustox | 10 | None | Prankster | Poison Powder, Venoshock, Confusion, Protect |
| Beautifly | 10 | None | Tinted Lens | Bug Buzz, Air Cutter, Sleep Powder, Absorb |
**Status:** designed
**Notes:** Advanced Bug Catcher with both Wurmple evolutions. See `trainers/segment-1/jose.md`.

### Johnson (Youngster) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Poochyena | 9 | None | Guts | Bite, Quick Attack, Howl, Scary Face |
| Taillow | 9 | None | Guts | Wing Attack, Quick Attack, Pluck, Growl |
| Skitty | 10 | None | Normalize | Fake Out, Tackle, Sing, Growl |
**Status:** designed
**Notes:** Guts duo + Normalize Skitty. See `trainers/segment-1/johnson.md`.

### Darian (Fisherman) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Magikarp | 9 | None | Moxie | Tackle, Aqua Jet, Flail, Splash |
| Tentacool | 9 | None | Poison Heal | Whirlpool, Poison Sting, Water Gun, Acid Spray |
| Horsea | 10 | None | Sniper | Water Gun, Smokescreen, Bubble, Leer |
**Status:** designed
**Notes:** Water escalation: joke fish, trapper, sniper. See `trainers/segment-1/darian.md`.

### Sarah (Lady) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Skitty | 10 | None | Normalize | Fake Out, Sing, Tackle, Growl |
| Ralts | 10 | None | Trace | Confusion, Disarming Voice, Calm Mind, Growl |
| Eevee | 10 | None | Adaptability | Swift, Wish, Tackle, Growl |
**Status:** designed
**Notes:** Rare and elegant — Skitty, Ralts, Eevee. See `trainers/segment-1/sarah.md`.

### Dawson (Rich Boy) — Optional
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Zigzagoon | 10 | Nugget | Pickup | Headbutt, Tackle, Sand Attack, Growl |
| Poochyena | 10 | None | Guts | Bite, Quick Attack, Howl, Scary Face |
| Abra | 10 | None | Magic Guard | Confusion, Calm Mind, Teleport, Kinesis |
**Status:** designed
**Notes:** Money trainer with surprise Abra. See `trainers/segment-1/dawson.md`.

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
| Geodude | 10 | None | Stamina | Defense Curl, Rollout, Rock Throw, Tackle |
| Larvitar | 10 | None | Sand Stream | Rock Slide, Bite, Leer, Tackle |
| Aron | 11 | None | Heavy Metal | Tackle, Harden, Metal Claw, Headbutt |
**Status:** designed
**Notes:** Gym intro fight. See `trainers/segment-1/josh.md`.

### Tommy (Youngster) — Gym Trainer
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Geodude | 11 | None | Stamina | Defense Curl, Rollout, Bulldoze, Rock Throw |
| Omanyte | 11 | None | Swift Swim | Water Gun, Ancient Power, Bite, Withdraw |
| Larvitar | 12 | None | Sand Stream | Rock Slide, Crunch, Stealth Rock, Leer |
**Status:** designed
**Notes:** Mid-tier gym trainer with fossil preview. See `trainers/segment-1/tommy.md`.

### Marc (Hiker) — Gym Trainer
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Larvitar | 12 | Smooth Rock | Sand Stream | Stealth Rock, Rock Slide, Crunch, Protect |
| Geodude | 12 | Wide Lens | Stamina | Defense Curl, Rollout, Rock Throw, Bulldoze |
| Nosepass | 13 | Leftovers | Sand Force | Power Gem, Thunder Wave, Rock Throw, Tackle |
**Status:** designed
**Notes:** Hardest gym trainer — direct Roxanne preview. See `trainers/segment-1/marc.md`.

### Roxanne (Leader) — MANDATORY
**Status:** designed
**Notes:** Full 6-Pokemon sandstorm team already designed. See segment doc.
