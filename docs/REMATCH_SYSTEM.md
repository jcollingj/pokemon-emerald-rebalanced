# Pokémon Emerald Rematch System

## Overview

Pokémon Emerald features a sophisticated rematch system that allows players to rebattle Gym Leaders, Elite Four members, and regular trainers. This document explains how the system works based on the game's source code.

## How Gym Leader Rematches Work

### Unlock Requirements

1. **Beat the Elite Four** - The `FLAG_SYS_GAME_CLEAR` flag must be set
2. **Complete New Mauville** (for Wattson only) - The `FLAG_WATTSON_REMATCH_AVAILABLE` flag unlocks Wattson for rematches

### Rematch Triggers

Gym Leader rematches are triggered automatically through two main ways:

#### 1. After Wild Battles
- **Trigger Rate**: Every 60 wild battles (`GAME_STAT_WILD_BATTLES % 60 == 0`)
- Implemented in `src/battle_setup.c:909-913`

```c
static void TryUpdateGymLeaderRematchFromWild(void)
{
    if (GetGameStat(GAME_STAT_WILD_BATTLES) % 60 == 0)
        UpdateGymLeaderRematch();
}
```

#### 2. After Trainer Battles
- **Trigger Rate**: Every 20 trainer battles (`GAME_STAT_TRAINER_BATTLES % 20 == 0`)
- Implemented in `src/battle_setup.c:915-919`

```c
static void TryUpdateGymLeaderRematchFromTrainer(void)
{
    if (GetGameStat(GAME_STAT_TRAINER_BATTLES) % 20 == 0)
        UpdateGymLeaderRematch();
}
```

### Rematch Selection Algorithm

When a rematch check occurs, the game uses the following algorithm (from `src/gym_leader_rematch.c`):

1. **Random Check**: 30% chance to proceed (`Random() % 100 <= 30`)
2. **Leader Pool Selection**:
   - If New Mauville is complete: All 8 Gym Leaders available
   - If not: 7 Gym Leaders available (Wattson excluded)
3. **Priority System**:
   - Finds the leader with the **lowest rematch level** who hasn't been marked for rematch yet
   - Multiple leaders at the same level? Randomly picks one
4. **Max Rematch Cap**:
   - Before New Mauville: Only rematch level 1 available
   - After New Mauville: Up to rematch level 5 available

### Rematch Versions

Each Gym Leader has **5 battle versions**:

| Version | Constant Suffix | Description | Levels |
|---------|----------------|-------------|---------|
| 1 | `_1` | Initial Gym Battle | 12-55 |
| 2 | `_2` | Rematch 1 | 47-52 |
| 3 | `_3` | Rematch 2 | 52-57 |
| 4 | `_4` | Rematch 3 | 57-62 |
| 5 | `_5` | Rematch 4 | 62-66 |

Example constants from `include/constants/opponents.h`:
```c
#define TRAINER_ROXANNE_1   265  // Initial battle
#define TRAINER_ROXANNE_2   770  // Rematch 1
#define TRAINER_ROXANNE_3   771  // Rematch 2
#define TRAINER_ROXANNE_4   772  // Rematch 3
#define TRAINER_ROXANNE_5   773  // Rematch 4
```

## Gym Leader Availability

### Before New Mauville Completion
```c
REMATCH_ROXANNE
REMATCH_BRAWLY
// Wattson not available
REMATCH_FLANNERY
REMATCH_NORMAN
REMATCH_WINONA
REMATCH_TATE_AND_LIZA
REMATCH_JUAN
```

### After New Mauville Completion
All 8 Gym Leaders available, including Wattson.

## Elite Four Rematches

The Elite Four and Champion also have rematch versions:

| Trainer | Type | Rematch Constant |
|---------|------|------------------|
| Sidney | Dark | `REMATCH_SIDNEY` |
| Phoebe | Ghost | `REMATCH_PHOEBE` |
| Glacia | Ice | `REMATCH_GLACIA` |
| Drake | Dragon | `REMATCH_DRAKE` |
| Wallace | Water (Champion) | `REMATCH_WALLACE` |

Elite Four rematches are classified separately in the code starting at `REMATCH_ELITE_FOUR_ENTRIES`.

## Regular Trainer Rematches

Regular trainers also have rematch systems:

- **69 rematchable trainers** (from `REMATCH_ROSE` to `REMATCH_KIRA_AND_DAN`)
- Uses the Match Call feature via PokéNav
- Different mechanics than Gym Leaders

Special trainers category starts at `REMATCH_WALLY_VR` (Wally in Victory Road).

## Technical Implementation

### Key Files

- **`src/gym_leader_rematch.c`** - Main rematch logic
- **`src/battle_setup.c`** - Battle triggers and rematch ID resolution
- **`src/match_call.c`** - Match Call/PokéNav system for regular trainers
- **`include/constants/rematches.h`** - Rematch constants and indices

### Save Data Storage

Rematch progress is stored in:
```c
gSaveBlock1Ptr->trainerRematches[REMATCH_ID]
```

This array tracks which rematch level each trainer is at.

### Rematch Check Function

```c
void UpdateGymLeaderRematch(void)
{
    if (FlagGet(FLAG_SYS_GAME_CLEAR) && (Random() % 100) <= 30)
    {
        if (FlagGet(FLAG_WATTSON_REMATCH_AVAILABLE))
            UpdateGymLeaderRematchFromArray(GymLeaderRematches_AfterNewMauville, 8, 5);
        else
            UpdateGymLeaderRematchFromArray(GymLeaderRematches_BeforeNewMauville, 7, 1);
    }
}
```

## Player Experience

### Triggering a Rematch

1. Beat the Elite Four
2. Complete New Mauville (optional, for all leaders)
3. Battle wild Pokémon or trainers
4. Every 60 wild battles or 20 trainer battles: 30% chance for a rematch to become available
5. Return to the Gym to battle the leader again

### Progression

- Leaders use **progressively stronger teams** with each rematch
- Final rematch teams (version 5) are level 62-66
- Teams include fully evolved Pokémon and held items
- Higher IV values and more strategic movesets

## Configuration

The system can be toggled with:
```c
#if FREE_MATCH_CALL == FALSE
// Rematch system enabled
#endif
```

When `FREE_MATCH_CALL` is enabled, the traditional rematch system is disabled.

## VS Seeker Integration

The code also supports VS Seeker integration (from later games):
```c
if (FlagGet(I_VS_SEEKER_CHARGING) && (I_VS_SEEKER_CHARGING != 0))
    return GetRematchTrainerIdVSSeeker(trainerId);
```

This allows for alternative rematch mechanics via the VS Seeker item.

---

*Documentation generated from Pokémon Emerald Expansion source code analysis*