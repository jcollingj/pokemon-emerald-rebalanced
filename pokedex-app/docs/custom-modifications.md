# Custom Pokémon Modifications Guide

This guide explains how to add custom balance changes and modification proposals for Pokémon in the Pokédex app.

## Overview

The custom modifications system allows you to:
- Propose or document stat changes
- Track ability additions/changes/removals
- Document Pokémon-specific move modifications
- Add design notes and reasoning
- Mark changes as "implemented" or "proposed"

All modifications are stored in JSON files and automatically merged with Pokémon data during parsing.

## Location

Custom modifications are stored in:
```
/pokedex-app/custom-data/pokemon/
```

Each Pokémon gets its own JSON file named after the Pokémon (lowercase, no spaces or special characters).

## File Naming Convention

- **Jigglypuff** → `jigglypuff.json`
- **Farfetch'd** → `farfetchd.json` (remove special characters)
- **Mr. Mime** → `mrmime.json` (remove periods and spaces)
- **Nidoran♀** → `nidoranf.json` (replace symbols)

## JSON Structure

```json
{
  "name": "Pokemon Name",
  "modifications": {
    "implemented": false,
    "statChanges": {
      "hp": {
        "current": 100,
        "proposed": 120,
        "notes": "Reason for the change"
      },
      "attack": { ... },
      "defense": { ... },
      "speed": { ... },
      "spAttack": { ... },
      "spDefense": { ... }
    },
    "abilityChanges": [
      {
        "type": "add",
        "ability": "Ability Name",
        "notes": "Why this ability makes sense"
      }
    ],
    "moveChanges": [
      {
        "move": "Move Name",
        "modification": "Description of how the move changes for this Pokémon",
        "notes": "Reasoning behind the change"
      }
    ],
    "generalNotes": [
      "Overall design philosophy",
      "Competitive viability thoughts",
      "Thematic considerations"
    ]
  }
}
```

## Field Descriptions

### `implemented` (boolean)
- `false` (default): Yellow border, 🔧 icon, "Proposed Modifications"
- `true`: Green border, ✅ icon, "Implemented Modifications"

### `statChanges` (object, optional)
For each stat you want to modify, include:
- `current`: The current base stat value
- `proposed`: The proposed new value
- `notes`: Explanation for why this change

Available stats: `hp`, `attack`, `defense`, `speed`, `spAttack`, `spDefense`

### `abilityChanges` (array, optional)
Each ability change should have:
- `type`: One of `"add"`, `"replace"`, or `"remove"`
- `ability`: The ability name
- `notes`: Explanation

### `moveChanges` (array, optional)
For Pokémon-specific move modifications:
- `move`: The move name
- `modification`: How the move works differently for this Pokémon
- `notes`: Why this change makes sense thematically/mechanically

### `generalNotes` (array, optional)
Array of strings containing:
- Overall design philosophy
- Competitive viability analysis
- Thematic considerations
- Balance reasoning

## Examples

### Example 1: Stat Buffs Only (Jigglypuff)

```json
{
  "name": "Jigglypuff",
  "modifications": {
    "implemented": false,
    "statChanges": {
      "hp": {
        "current": 115,
        "proposed": 130,
        "notes": "Increase HP to make Jigglypuff more viable as a defensive wall"
      },
      "defense": {
        "current": 20,
        "proposed": 35,
        "notes": "Slight defense buff to help survive physical attacks"
      }
    },
    "generalNotes": [
      "Jigglypuff needs buffs to be competitively viable",
      "Focus on the sleep/rest theme as its unique identity"
    ]
  }
}
```

### Example 2: Complex Changes (Delibird)

```json
{
  "name": "Delibird",
  "modifications": {
    "implemented": true,
    "statChanges": {
      "attack": {
        "current": 55,
        "proposed": 85,
        "notes": "Significant attack buff to make Present more threatening"
      },
      "speed": {
        "current": 75,
        "proposed": 95,
        "notes": "Increase speed to be a faster support/offense hybrid"
      }
    },
    "moveChanges": [
      {
        "move": "Present",
        "modification": "For Delibird only: 50% heal ally 25% HP, 50% deal 120 BP damage (no self-harm)",
        "notes": "Make Present actually usable and embody the gift-giving theme"
      }
    ],
    "generalNotes": [
      "Delibird is one of the weakest Pokémon and needs major help",
      "Lean into the support/surprise attacker role"
    ]
  }
}
```

## Workflow

### 1. Create Modification File

Create a new JSON file in `/pokedex-app/custom-data/pokemon/`:

```bash
touch custom-data/pokemon/charizard.json
```

### 2. Add Modification Data

Edit the file with your proposed changes following the JSON structure above.

### 3. Regenerate Pokémon Data

Run the parser to merge your modifications:

```bash
bun scripts/parse-pokemon.ts
```

You should see output like:
```
✅ Parsed 1279 Pokémon and saved to pokemon.json
📝 Loaded custom modifications for 4 Pokémon
```

### 4. View in Pokédex

Start the dev server (if not already running):
```bash
bun dev
```

Navigate to the Pokémon's page to see the modifications displayed.

## Display in UI

Modifications appear as a collapsible card on the Pokémon detail page:

- **Proposed** (yellow border, 🔧): Changes being considered
- **Implemented** (green border, ✅): Changes already applied to ROM

The card shows:
1. **Stat Changes**: Current → Proposed with visual comparison
2. **Ability Changes**: Labeled ADD/REMOVE/REPLACE with color coding
3. **Move-Specific Changes**: Modification description + reasoning
4. **General Notes**: Bullet-point list of design thoughts

## Tips

- **Start small**: You don't need to fill in every field
- **Be specific**: Clear notes help communicate the vision
- **Consider theme**: Make sure changes fit the Pokémon's identity
- **Track implementation**: Use the `implemented` flag to track progress
- **Iterate**: You can always update the files and re-run the parser

## Validation

The parser will:
- Skip files that don't exist (not all Pokémon need modifications)
- Ignore malformed JSON (with a warning)
- Match Pokémon by name (case-insensitive, removes special characters)

If a Pokémon isn't showing modifications, check:
1. File name matches Pokémon name (lowercase, no special chars)
2. JSON is valid (use a JSON validator)
3. Parser ran successfully (`bun scripts/parse-pokemon.ts`)

## Integration with ROM Development

These modifications are **proposals only** - they don't automatically update the ROM code.

To actually implement changes:
1. Document them here first
2. Manually update the ROM data files in `/src/data/pokemon/`
3. Update ROM move/ability logic if needed
4. Set `"implemented": true` in the modification file
5. Re-run the parser

This creates a single source of truth for planned vs. implemented changes.