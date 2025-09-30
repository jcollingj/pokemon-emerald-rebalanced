# Custom Pokémon Modifications

This directory contains custom modification data for Pokémon that you're considering for balance changes or buffs.

## File Structure

Each Pokémon gets its own JSON file in `pokemon/` named after the Pokémon (lowercase, no spaces).

Example: `pokemon/jigglypuff.json`

## JSON Format

```json
{
  "name": "Pokemon Name",
  "modifications": {
    "statChanges": {
      "hp": {
        "current": 100,
        "proposed": 120,
        "notes": "Explanation for why this change"
      },
      "attack": { ... },
      "defense": { ... },
      "speed": { ... },
      "spAttack": { ... },
      "spDefense": { ... }
    },
    "abilityChanges": [
      {
        "type": "add|replace|remove",
        "ability": "Ability Name",
        "notes": "Explanation"
      }
    ],
    "moveChanges": [
      {
        "move": "Move Name",
        "modification": "Description of how the move changes for this Pokémon",
        "notes": "Reasoning"
      }
    ],
    "generalNotes": [
      "Any general notes about this Pokémon's modifications",
      "Design philosophy",
      "Competitive viability thoughts"
    ]
  }
}
```

## Usage

When you run `bun scripts/parse-pokemon.ts`, it will automatically:
1. Parse the base Pokémon data from the ROM
2. Look for custom modification files in this directory
3. Merge the modification data with the Pokémon data
4. Display modifications in the Pokédex UI

The modifications are **proposals only** - they don't affect the actual ROM unless you manually implement them.