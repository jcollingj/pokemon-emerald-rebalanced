# EXP Share System

## Overview

The EXP Share in this ROM hack has been configured to work as a **party-wide Key Item** (Gen 6+ style) rather than a held item (Gen 5 style).

## Player Experience

### Obtaining the Item
- **Location:** Route 103 at coordinates (15, 8)
- **Timing:** Available early game, accessible after receiving your starter Pokemon
- **Type:** Key Item (non-consumable, toggleable)

### Usage
1. **Find:** Pick up the EXP Share item ball on Route 103
2. **Access:** Opens in Key Items pocket of the bag
3. **Toggle:** Use from the bag to turn ON/OFF
   - **ON:** All party Pokemon receive full experience from every battle
   - **OFF:** Only participating Pokemon receive experience

## Technical Implementation

### Configuration Settings

| Setting | File | Value |
|---------|------|-------|
| Item Type | `include/config/item.h` | `I_EXP_SHARE_ITEM = GEN_6` |
| Toggle Flag | `include/config/item.h` | `I_EXP_SHARE_FLAG = FLAG_EXP_SHARE_ENABLED` |

### Flags Used

| Flag | Purpose | Value |
|------|---------|-------|
| `FLAG_EXP_SHARE_ENABLED` | Tracks if EXP Share is ON/OFF | `0x20` |
| `FLAG_ITEM_ROUTE_103_EXP_SHARE` | Tracks if item was collected | `0x472` |

### Experience Distribution Settings

The ROM uses modern (Gen 6+) experience distribution mechanics:

- **`B_SPLIT_EXP = GEN_LATEST`:** All participating Pokemon get full experience (not split)
- **`B_TRAINER_EXP_MULTIPLIER = GEN_LATEST`:** Trainer battles no longer give 1.5x EXP multiplier
- **`B_SCALED_EXP = GEN_LATEST`:** Experience is weighted by level difference
- **`B_EXP_CATCH = GEN_LATEST`:** Pokemon get experience from catching
- **`B_UNEVOLVED_EXP_MULTIPLIER = GEN_LATEST`:** Unevolved Pokemon get ~1.2x EXP if past evolution level

## Design Rationale

### Why Party-Wide EXP Share?

1. **Reduced Grinding:** Players can level up their entire team without excessive grinding
2. **Team Flexibility:** Encourages players to build balanced teams rather than over-relying on a single Pokemon
3. **Quality of Life:** Modern Pokemon games have proven this system improves player experience
4. **Early Availability:** Placed on Route 103 to ensure players have access before team building becomes critical

### Why Toggleable?

- **Player Choice:** Some players prefer the traditional challenge of selective training
- **Difficulty Control:** Players can self-impose difficulty by turning it off
- **Nuzlocke Friendly:** Compatible with challenge runs where players may want different rules

## Balancing Considerations

### Difficulty Balance

With party-wide EXP Share enabled, the game may become easier. Consider:

- **Trainer Level Scaling:** Ensure gym leaders and important trainers scale appropriately
- **Level Caps:** Could implement soft/hard level caps to prevent over-leveling
- **Encounter Rates:** Wild Pokemon levels should provide meaningful challenge

### Current EXP Caps

- **Type:** `EXP_CAP_NONE` (no level caps currently applied)
- **Setting:** Defined in `include/config/caps.h`

If the game becomes too easy, consider adding level caps at major progression points.

## Related Systems

### Experience Scaling

The ROM uses level-based experience scaling (Gen 5, Gen 7+):
- Higher-level Pokemon receive less EXP from lower-level opponents
- Lower-level Pokemon receive more EXP from higher-level opponents
- This helps prevent extreme over-leveling

### EXP from Catching

Pokemon now gain experience from catching wild Pokemon (Gen 6+ feature), further rewarding team-building strategies.

## Future Considerations

### Potential Enhancements

1. **Visual Indicator:** Add a HUD element showing EXP Share status
2. **Tutorial Message:** Add an NPC near the item explaining how it works
3. **Alternative Locations:** Consider adding to PokeMart as a purchasable item for players who miss it
4. **Save the Player:** If implemented, could auto-give EXP Share at game start

### Balance Tweaks

Monitor playthrough data to determine if:
- Item should be moved to a later route
- Level caps should be implemented
- Trainer teams need stat/level adjustments

## Changelog

### October 9, 2025
- **Initial Implementation:** Configured EXP Share as Gen 6+ Key Item
- **Added to Route 103:** Placed at coordinates (15, 8) with elevation 3
- **Created Flags:** Defined `FLAG_EXP_SHARE_ENABLED` and `FLAG_ITEM_ROUTE_103_EXP_SHARE`

---

*For technical implementation details, see [`docs/tutorials/how_to_party_exp_share.md`](../tutorials/how_to_party_exp_share.md)*
