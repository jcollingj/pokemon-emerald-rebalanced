---
name: Rival (Brendan/May)
class: Rival
route: Route 110
segment: 3
status: designed
type: mandatory
---

# Rival Battle #2 — Route 110

**Trainer class:** Rival (Brendan/May)
**Location:** Route 110, north of Slateport City
**Level range:** L22–24
**Context:** The rival intercepts you heading north toward Mauville. They've been training since Dewford — their Wingull evolved, they picked up new Pokemon on Route 110, and their team is starting to feel like a real squad. This is the first fight where the rival uses an active team strategy (rain), not just a roster.

---

## Team

| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Pelipper | 22 | Damp Rock | Drizzle | Scald, Wing Attack, Roost, U-turn |
| Slugma | 22 | — | Weak Armor | Lava Plume, Rock Throw, Yawn, Will-O-Wisp |
| Breloom | 23 | — | Technician | Mach Punch, Bullet Seed, Force Palm, Stun Spore |
| Electrike | 23 | — | Surge Surfer | Electric Terrain, Spark, Bite, Charge |
| Grovyle | 24 | — | Unburden | Acrobatics, Horn Leech, Quick Attack, Razor Leaf |

---

## Puzzle

**The trap of imperfect rain.** Pelipper leads and instantly sets 8-turn rain. The player should feel like this is good news — rain weakens Fire moves, so the rival's own Slugma looks like dead weight. But every part of that read is wrong.

**What actually happens if you play reactively:**
1. Pelipper burns your physical attacker with Scald, then U-turns to safety
2. You send in a Fire/Rock answer to Pelipper and go after the "easy" Slugma
3. You hit Slugma physically → Weak Armor triggers → Slugma is suddenly fast and threatens Lava Plume or Will-O-Wisp burn
4. Breloom comes in — Bullet Seed and Mach Punch don't care about rain at all
5. Grovyle closes with Acrobatics at 110 BP (no held item = full power) — outrunning most of your team at L24

**The correct solve:**
1. **Pelipper** — Remove it with a 4× Electric hit (Pikachu), or a Rock move. Don't let it U-turn back in to reset rain. Priority: KO it before Scald burns stack.
2. **Slugma** — Don't attack physically. Use special moves (Scald irony aside, Water OHKO works in rain), status it, or hit from the special side. Slugma wants a Mach Punch or Earthquake. Don't give it one.
3. **Breloom** — It just evolved (Force Palm is its new move). Flying type or Psychic removes it cleanly. Stun Spore threatens before it fires off Mach Punch.
4. **Electrike** — Electric Terrain shuts off sleep moves while it's active (anti-Stun Spore, anti-Yawn). Prioritize removing it or send in a Ground type (immune to Electric, can Earthquake). Charge on turn 1 is the tell that it wants to nuke next turn.
5. **Grovyle** — The ace. No item means Acrobatics already runs at full 110 BP — Unburden never triggers here, but the ability name shows up on the menu. OHKO or revenge KO before it hits twice with Acrobatics + Quick Attack priority.

**What the fight teaches:**
- Rain teams exist: "Drizzle is a real mechanic — the rival uses it deliberately"
- Weak Armor counterplay: "Don't attack the thing that wants to be hit"
- Electric Terrain preview: "Manectric sets its own field — here's a taste of why that matters"
- Unburden preview: "Grovyle has Unburden — it would be terrifying with an item"
- Force Palm as Technician payoff: "Breloom just evolved and it already has a better move"

---

## Design Notes

- **Pelipper leading** establishes that the rival is now a rain-team trainer. This is the first time the player sees Drizzle in action from an opponent — a preview of the mechanic before they face rain-heavy routes.
- **Slugma as the trap** is intentional misdirection. "Fire type in rain = free kill" is the wrong read. Weak Armor + Lava Plume + Yawn makes it the most nuanced Pokemon on the rival's team despite being the most overlooked. The surprise is the point.
- **Breloom at L23** just evolved — Force Palm is fresh. The rival showing off a brand-new Breloom is characterization (they just caught/evolved this recently).
- **Electrike previewing Surge Surfer** before the player can catch one on Route 110 is the first exposure to Electric Terrain as a mechanic. Charge + Spark is low-power but shows the "charging electricity" identity. Electric Terrain blocking sleep is a subtle lesson (Stun Spore from Breloom won't work while terrain is up).
- **Grovyle with no item** means Unburden never activates, but Acrobatics already runs at 110 BP. This is a sneak preview: the player sees the ability, doesn't understand why it didn't fire, then realizes later when they get their own Treecko. The 110 BP Acrobatics at L24 Speed (100 base) still outspeeds most of the player's team.
- **No full optimization** — Slugma in rain is anti-synergistic for Fire moves. Breloom has no item. Electrike's Electric Terrain doesn't benefit the rest of the team. The rival is smart but not a gym leader. Each Pokemon is strong individually; the team doesn't form a perfect synergy web.
- **Level note** — Pelipper evolves at L25 per its design doc, but at L22 for narrative reasons: the rival has been grinding since Dewford, and showing an evolved Pelipper (with Damp Rock) signals that the rival is serious. The curated moveset (Scald, U-turn) reflects trainer-level design, not strict learnset gating.
