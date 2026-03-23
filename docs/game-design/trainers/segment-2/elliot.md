---
name: Uelliot
class: Fisherman
route: Route 106
segment: 2
status: implemented
type: optional
---

# Elliot (Fisherman) — Route 106

## Team
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Magikarp | 15 | None | Moxie | Aqua Jet, Tackle, Flail |
| Tentacool | 16 | Toxic Orb | Poison Heal | Whirlpool, Acid Spray, Scald, Poison Sting |
| Wailmer | 17 | Oran Berry | Blubber | Water Pulse, Aqua Ring, Dive, Water Gun |

## Puzzle
**The Healing Wall** — Elliot's team stacks passive recovery to outlast the player. The puzzle is recognizing that you need to press offensively before the healing accumulates.

- **Magikarp** opens as a trap. At L15 it seems harmless, but Moxie + Aqua Jet means any unguarded KO starts a chain. Players who let it pick off a weakened lead will learn fast.
- **Tentacool** immediately activates its Toxic Orb, converting the "downside" into Poison Heal (1/8 HP per turn). It then Whirlpools the player's Pokemon — trapping them and lowering their Attack. Acid Spray strips SpDef so Scald hits hard. The trapped target can't escape while Tentacool heals.
- **Wailmer** is the double-layer sustain: Blubber (1/8 HP/turn) + Aqua Ring (1/16 HP/turn) = nearly 19% HP restored per turn. Dive's invulnerable turn buys extra healing time. The player must burst it down before the recovery makes it impossible to kill.

The through-line: everything is getting healthier while you're not. Don't stall — attack.

## Design Notes
- Tentacool at L16 has exactly Scald from the design doc. Whirlpool + Acid Spray + Scald + Poison Sting is the full "trap and grind" kit at this level.
- Wailmer at L17 has Aqua Ring (L12) and Dive (L16) — both designed moves, both in-range.
- Magikarp as the opener is a misdirect: the player sees a Magikarp and relaxes, then either takes Flail damage at low HP or accidentally feeds it a Moxie kill via Aqua Jet.
- Toxic Orb on Tentacool is the lesson item. The player sees a Pokemon holding a Toxic Orb and expects it to be a liability — then watches Tentacool tank hits and heal through them.
