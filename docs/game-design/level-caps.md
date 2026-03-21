# Level Cap System

The game uses a **hard level cap** tied to badge progression. Pokemon at or above the cap gain zero experience. Rare Candies also cannot bypass the cap.

## Current Level Caps

| Milestone | Level Cap |
|-----------|-----------|
| Pre-Badge 1 | 14 |
| Badge 1 (Roxanne) | 19 |
| Badge 2 (Brawly) | 24 |
| Badge 3 (Wattson) | 29 |
| Badge 4 (Flannery) | 31 |
| Badge 5 (Norman) | 33 |
| Badge 6 (Winona) | 42 |
| Badge 7 (Tate & Liza) | 46 |
| Badge 8 (Wallace) | 58 |
| Post-Champion | 100 |

## Design Implications

- Trainer ace levels should be at or near the cap for their segment to create meaningful fights.
- Pokemon that evolve at high levels (e.g. level 36+) won't reach their final form until later segments — plan learnsets accordingly.
- The tight caps at Badges 4-5 (31, 33) mean mid-game Pokemon need to be useful without relying on high-level moves.
- The jump from Badge 6 (42) to Badge 7 (46) is only 4 levels, while Badge 5 to 6 jumps 9 levels — pacing varies.

## Configuration

All settings live in `include/config/caps.h`. The cap values themselves are in `src/caps.c` in `sLevelCapFlagMap`.

Available cap types:
- **Hard cap** (current): Zero exp at/above cap
- **Soft cap**: Reduced exp above cap (scales down by 1/4, 1/8, 1/16, 1/32, 1/64 per level over)
- **None**: No cap

Additional options:
- `B_RARE_CANDY_CAP` — whether Rare Candies respect the cap (currently TRUE)
- `B_LEVEL_CAP_EXP_UP` — bonus exp for Pokemon below the cap (currently FALSE)

## EV Cap System

There is also an EV cap system (disabled by default) that can scale total EVs by badge progress. Currently set to `EV_CAP_NONE`. If enabled with `EV_CAP_FLAG_LIST`, EVs scale from ~1/17 of max at Badge 1 up to full at Champion.
