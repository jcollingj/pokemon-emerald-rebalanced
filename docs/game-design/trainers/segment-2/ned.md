---
name: Uned
class: Fisherman
route: Route 106
segment: 2
status: implemented
type: optional
---

# Ned (Fisherman) — Route 106

## Team
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Magikarp | 16 | Oran Berry | Moxie | Aqua Jet, Tackle, Flail |
| Clamperl | 17 | Eviolite | Shell Armor | Clamp, Water Gun, Whirlpool, Iron Defense |
| Tentacool | 18 | Toxic Orb | Poison Heal | Whirlpool, Acid Spray, Scald, Poison Sting |

## Puzzle
**The Setup Trap** — Ned's team sequences: threaten fast, stall the counter, then lock the player in a grind. Each Pokemon hands off a problem for the player to solve.

- **Magikarp** opens aggressively. At L16 with Oran Berry, it has enough survivability to threaten with Aqua Jet (Moxie on any KO). If the player brings a fast Electric or Grass type to counter it, that's the Pokemon Clamperl is waiting for.
- **Clamperl** is the anti-Physical wall. Eviolite doubles its bulk for a pre-evolution, Shell Armor means no critical hits, Iron Defense doubles its already-buffed Defense, and Clamp traps the player's Pokemon. The player's physical sweeper is now stuck, taking chip damage each turn from Clamp, while Clamperl tanks everything back. The puzzle: switch into a special attacker fast enough to break out.
- **Tentacool** closes. It activates Toxic Orb → Poison Heal immediately, Whirlpools whatever the player sends in (trapping + Attack drop), and grinds them out with Acid Spray into Scald. After Clamperl forced a specific switch, the player may not have their best answer for Tentacool ready.

The sequence: "threaten → force a switch → trap the forced-in Pokemon → finish with sustained healing."

## Design Notes
- Distinct from Elliot: Ned's angle is offensive sequencing and forced positioning, not passive double-healing. Elliot stalls; Ned manipulates.
- Clamperl has no custom design doc — vanilla Shell Armor and vanilla learnset. Iron Defense + Clamp is the standard Clamperl trap kit available at this level.
- Magikarp at L16 can still run Flail as a last-resort move — at low HP with Oran Berry nearly depleted, Flail reaches high BP, catching players who chip it thinking they're safe.
- Tentacool at L18 (near evolution at L30) still uses its pre-evolution moveset — Poison Heal + Whirlpool trap is already fully online at this level.
- Toxic Orb on Tentacool repeats Elliot's lesson item but in a new context: after Clamperl forced the player's hand, Tentacool's immunity to all other status conditions means the player can't easily cripple it back.
