# How to Implement Party-Wide EXP Share

This guide explains how to configure the EXP Share to work as a party-wide Key Item (Gen 6+ style) and add it as a findable item in the overworld.

## Contents
1. [Overview](#overview)
2. [Configuration Changes](#configuration-changes)
3. [Adding as a Findable Item](#adding-as-a-findable-item)
4. [How It Works](#how-it-works)
5. [Troubleshooting](#troubleshooting)

## Overview

In Gen 6+, the EXP Share was changed from a held item to a Key Item that toggles party-wide experience sharing. This guide shows you how to:
- Convert EXP Share from a held item (Gen 5 style) to a Key Item (Gen 6+ style)
- Set up the flag system for toggling
- Add the item to your game world as a findable item

**Note:** This implementation was done on pokeemerald-expansion version 1.13.0+.

## Configuration Changes

### Step 1: Configure EXP Share as a Key Item

Edit `include/config/item.h`:

```c
// Change this line from GEN_5 to GEN_6
#define I_EXP_SHARE_ITEM        GEN_6       // In Gen6+, the Exp. Share was changed from a held item to a Key item
```

**File:** `include/config/item.h` (line 31)

### Step 2: Set Up the Toggle Flag

You need to assign a flag that will track whether the EXP Share is enabled or disabled.

#### 2a. Create the Flag

Edit `include/constants/flags.h`:

```c
// Find an unused flag and rename it
// Before:
#define FLAG_UNUSED_0x020    0x20 // Unused Flag

// After:
#define FLAG_EXP_SHARE_ENABLED    0x20 // Toggles party-wide EXP Share (Gen6+ Key Item)
```

**File:** `include/constants/flags.h` (around line 46)

**Important:** Make sure you choose a flag that's truly unused. You can search for any flag marked as "Unused Flag" in the file.

#### 2b. Link the Flag to EXP Share Config

Edit `include/config/item.h`:

```c
// Change from:
#define I_EXP_SHARE_FLAG        0           // If this flag is set, every Pokémon in the party will gain experience

// To:
#define I_EXP_SHARE_FLAG        FLAG_EXP_SHARE_ENABLED  // If this flag is set, every Pokémon in the party will gain experience
```

**File:** `include/config/item.h` (line 30)

## Adding as a Findable Item

To make the EXP Share available to the player, you can add it as a findable item on a route.

### Step 1: Create an Item Flag

Edit `include/constants/flags.h` to add a flag for tracking whether the item has been collected:

```c
// Find an unused item flag (search for FLAG_UNUSED)
// Before:
#define FLAG_UNUSED_0x472                                           0x472 // Unused Flag

// After:
#define FLAG_ITEM_ROUTE_103_EXP_SHARE                               0x472
```

**File:** `include/constants/flags.h` (around line 1191)

### Step 2: Add Item to Map

Edit the map's JSON file where you want to place the item. For example, Route 103:

**File:** `data/maps/Route103/map.json`

Add a new object event in the `object_events` array:

```json
{
  "graphics_id": "OBJ_EVENT_GFX_ITEM_BALL",
  "x": 15,
  "y": 8,
  "elevation": 3,
  "movement_type": "MOVEMENT_TYPE_LOOK_AROUND",
  "movement_range_x": 0,
  "movement_range_y": 0,
  "trainer_type": "TRAINER_TYPE_NONE",
  "trainer_sight_or_berry_tree_id": "ITEM_EXP_SHARE",
  "script": "Common_EventScript_FindItem",
  "flag": "FLAG_ITEM_ROUTE_103_EXP_SHARE"
}
```

**Key Parameters:**
- `x`, `y`: Tile coordinates where the item will appear
- `elevation`: Height level (usually 0 or 3)
- `trainer_sight_or_berry_tree_id`: Set to `ITEM_EXP_SHARE` (constant from `include/constants/items.h`)
- `flag`: Your newly created flag from Step 1

### Step 3: Rebuild the ROM

```bash
make clean
make -j$(nproc)
```

## How It Works

### Player Perspective

1. **Finding the Item:** The player walks up to the item ball on Route 103 (or wherever you placed it) and picks it up
2. **Key Item:** The EXP Share appears in the Key Items pocket of the bag
3. **Using It:** When the player uses the EXP Share from the bag:
   - **First use:** Turns it ON → `FLAG_EXP_SHARE_ENABLED` is set
   - **Second use:** Turns it OFF → `FLAG_EXP_SHARE_ENABLED` is cleared
4. **In Battle:**
   - **When ON:** All party Pokémon receive full experience from battles
   - **When OFF:** Only participating Pokémon receive experience

### Technical Details

The pokeemerald-expansion framework handles the EXP distribution logic based on:
- `I_EXP_SHARE_ITEM` setting (GEN_5 = held item, GEN_6+ = Key item)
- `I_EXP_SHARE_FLAG` status (checked during battle experience calculation)

When `I_EXP_SHARE_ITEM >= GEN_6`:
- The item becomes a Key Item that can be toggled
- Using it from the bag toggles `I_EXP_SHARE_FLAG`
- The battle system checks this flag to determine if all party members get EXP

## Troubleshooting

### Build Error: "YouNeedToSetAFlagToUseGen6ExpShare"

**Error Message:**
```
src/item_use.c:246:14: error: size of array 'YouNeedToSetAFlagToUseGen6ExpShare' is negative
```

**Cause:** You set `I_EXP_SHARE_ITEM` to `GEN_6` but didn't set `I_EXP_SHARE_FLAG` to a valid flag.

**Solution:** Make sure you completed Step 2 of [Configuration Changes](#configuration-changes).

### Item Doesn't Appear in Game

**Possible Causes:**
1. The map JSON wasn't properly saved
2. The coordinates are out of bounds for the map
3. The flag is already set (item was already collected)

**Solution:**
- Verify the JSON syntax is correct (no missing commas, brackets)
- Check the map dimensions in Porymap or the map editor
- Use the debug menu to clear the item flag if testing

### Item Appears but Can't Be Picked Up

**Possible Causes:**
1. Wrong `script` value (should be `Common_EventScript_FindItem`)
2. Wrong `trainer_sight_or_berry_tree_id` (should be `ITEM_EXP_SHARE`)

**Solution:** Double-check the object event configuration matches the example exactly.

### Battle Scripts Error: `setgraphicalstatchangevalues`

**Error Message:**
```
data/battle_scripts_1.s:XXXX: Error: bad instruction `setgraphicalstatchangevalues'
```

**Cause:** This is a leftover from an older pokeemerald-expansion version. The command was removed in v1.13.0.

**Solution:** Find and remove the deprecated command from your battle scripts:
```asm
# Remove these two lines:
setgraphicalstatchangevalues
playanimation BS_ATTACKER, B_ANIM_STATS_CHANGE, sB_ANIM_ARG1

# The functionality is now handled automatically in statbuffchange
```

See the [v1.13.0 changelog](../../changelogs/1.13.x/1.13.0.md) for more details on this refactor.

## Alternative: Always-On EXP Share

If you want EXP Share to be always active without requiring the player to find or toggle it:

### Option 1: Set Flag at Game Start

Add this to your new game initialization script (in `data/scripts/birch_speech.inc` or similar):

```
setflag FLAG_EXP_SHARE_ENABLED
```

### Option 2: Skip the Key Item Entirely

Keep `I_EXP_SHARE_ITEM` at `GEN_5` and manually set the flag at game start. This gives you party-wide EXP without the item.

## Summary of Files Modified

| File | Purpose | Lines Modified |
|------|---------|----------------|
| `include/config/item.h` | Configure EXP Share type and flag | Lines 30-31 |
| `include/constants/flags.h` | Define toggle flag and item flag | Lines ~46, ~1191 |
| `data/maps/Route103/map.json` | Add findable item to map | Add object event |

## References

- **EXP Share Item ID:** `ITEM_EXP_SHARE` (461) defined in `include/constants/items.h`
- **Common Item Script:** `Common_EventScript_FindItem` handles standard item pickup
- **Item Flags:** Typically in range `0x45A` - `0x4FF` in `include/constants/flags.h`

---

*This guide was created as part of the Pokemon Emerald Rebalanced project documentation.*
