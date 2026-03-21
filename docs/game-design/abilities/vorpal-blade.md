---
name: Vorpal Blade
status: custom
original_effect: null
new_effect: "All slicing moves always critically hit"
pokemon: [Gallade]
---

# Vorpal Blade

## Effect (Custom Ability)
All slicing moves (moves with the `.slicingMove = TRUE` flag) are guaranteed critical hits. No setup required -- every cut is a perfect cut.

## Design Pattern
Same pattern as Merciless (guaranteed crits on poisoned targets) but without needing a condition. Merciless requires poison setup; Vorpal Blade is always active on slicing moves. Chosen over Sharpness (which gives the same 1.5x math) because guaranteed crits are more exciting -- crit animations, ignoring defense boosts, and opening Sniper as an alt ability.

## Affected Moves
- Psycho Cut (70 -> 105 effective, Psychic STAB)
- Night Slash (70 -> 105 effective, Dark coverage)
- Leaf Blade (90 -> 135 effective, Grass coverage)
- Sacred Sword (90 -> 135 effective, Fighting STAB, ignores def boosts)
- Stone Axe (65 -> 97 effective, Rock coverage + sets Stealth Rock)

## Implementation
Same code pattern as Merciless in `battle_util.c` -- check if move has `.slicingMove = TRUE`, force critical hit.

## Pokemon Using This
- **Gallade** -- Vorpal blade master. 130 Atk with guaranteed crits on every slicing move. No setup needed -- just pick the right blade for the matchup. Crits ignore defense boosts, so Curse/Iron Defense walls can't stop Gallade. Swords Dance + crit = absurd damage. Hidden ability Sniper (2.25x crits) is the glass cannon variant.
