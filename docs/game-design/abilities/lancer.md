---
name: Lancer
status: custom
original_effect: null
new_effect: "Piercing/horn moves deal 1.3x damage"
pokemon: [Seaking]
---

# Lancer

## Effect (Custom Ability)
All piercing and horn moves deal 1.3x damage. Same design pattern as Strong Jaw (biting moves x1.5) but at a 1.3x multiplier because Seaking has better bulk and sustain than Raticate.

## Qualifying Moves
Horn Attack, Horn Leech, Megahorn, Smart Strike, Poison Jab, Drill Run, Waterfall (piercing horn-first), Peck, Fury Attack, Horn Drill

## Key Interactions
- Waterfall (80 -> 104, STAB -> 156) -- 30% flinch preserved
- Horn Leech (75 -> 97) -- heals 50% of damage dealt, sustain engine
- Megahorn (120 -> 156) -- same power as STAB Waterfall
- Life Orb + Horn Leech partially offsets recoil (heals ~15%, costs 10%)

## Implementation
Same pattern as Strong Jaw -- check move flag (FLAG_PIERCING), apply 1.3x multiplier in damage calc.

## Pokemon Using This
- **Seaking** -- Sustain horn specialist. 100 Atk, 90/75/85 bulk. Every move is a horn/piercing move. Horn Leech provides built-in recovery that lets Seaking outlast opponents while hitting hard. Covers 6 types with horn moves. The "I impale everything and heal doing it" fantasy.
