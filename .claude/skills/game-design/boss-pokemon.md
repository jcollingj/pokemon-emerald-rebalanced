# Boss Pokemon Battles

## Concept

Boss Pokemon are special, scripted encounters placed on routes or in dungeons. They are **overleveled, uncatchable wild Pokemon** that serve as optional mid-route challenges. Defeating a Boss Pokemon rewards the player with a **weaker (lower-level) version** of that same Pokemon.

This creates exciting "earn your Pokemon" moments and gives routes memorable landmarks beyond just tall grass.

## Design Rules

### Level & Difficulty
- Boss Pokemon should be **2-4 levels above the chunk's level cap** - enough to feel dangerous but not impossible
- They should have a **competitive moveset and ability** that makes the fight a real puzzle
- They may hold items (berries, Sitrus Berry, etc.) to make them tougher
- Consider giving them a boosted stat (like Totem Pokemon aura boosts) for extra challenge

### The Reward
- On defeat, the player receives a **weaker version** of the Boss Pokemon:
  - **5 levels below** the boss version (roughly at or slightly below the chunk's level cap)
  - Same species, but standard ability (not necessarily the boss's boosted one)
  - Can have egg moves or special moves as a bonus reward for the fight
- The reward Pokemon should still be immediately usable and fun

### Placement Guidelines
- **1 Boss Pokemon per chunk maximum** - keep them special
- Place them in memorable locations: blocking a path, guarding an item, at the end of a cave
- They should be **visible on the overworld** (not random encounters) so players can prepare
- The player should be able to return later if they can't beat it now
- Use a flag to track defeat so the encounter doesn't repeat

### Design Synergy
- The Boss Pokemon's build should **showcase** what that species can do in this rebalance
- It's a preview/advertisement - "this Pokemon is cool, and now you get one"
- The fight should teach the player about the Pokemon's strengths and strategy
- Consider boss species that aren't available in the wild in that chunk (makes the reward more exciting)

## Implementation Approach

Boss Pokemon battles use pokeemerald-expansion's scripted wild battle system:

### Map Script Structure
```
# In the map's scripts file:
1. Object event on the map (visible overworld sprite)
2. On interaction, trigger a scripted wild battle
3. Wild battle with FLAG_NO_CATCHING to prevent capture
4. On victory, check/set a flag
5. Use givemon to gift the reward Pokemon
6. Remove the overworld object (hide via flag)
```

### Key Implementation Details
- **Flag:** Each boss needs a unique flag (e.g., FLAG_DEFEATED_BOSS_SHROOMISH) in `include/constants/flags.h`
- **Object Event:** Add an overworld sprite in the map's `map.json` - use the Pokemon's overworld sprite if available, or an NPC substitute
- **Scripted Battle:** Use `setwildbattle` + `dowildbattle` with appropriate flags to prevent catching
- **Gift Pokemon:** Use `givemon` after victory to award the lower-level version
- **Persistence:** The flag hides the object event so it doesn't respawn

### Example Script Pseudocode
```
BossEncounter_Shroomish:
    lock
    faceplayer
    # Play boss encounter fanfare/cry
    playmoncry SPECIES_SHROOMISH
    msgbox "A powerful Shroomish blocks the path!"
    waitmoncry
    closemessage
    # Set up the overleveled boss
    setwildbattle SPECIES_SHROOMISH, 18, ITEM_SITRUS_BERRY
    dowildbattle
    # Check if player won
    compare VAR_RESULT, B_OUTCOME_WON
    goto_if_ne BossEncounter_Shroomish_Lost
    # Victory - give reward Pokemon
    setflag FLAG_DEFEATED_BOSS_SHROOMISH
    msgbox "The wild Shroomish looks impressed by your strength!"
    givemon SPECIES_SHROOMISH, 13, ITEM_NONE
    msgbox "You received a Shroomish!"
    removeobject VAR_LAST_TALKED
    release
    end

BossEncounter_Shroomish_Lost:
    msgbox "The powerful Shroomish stands its ground..."
    release
    end
```

## Boss Pokemon per Chunk (Template)

| Chunk | Boss Species | Boss Level | Cap | Reward Level | Location |
|-------|-------------|-----------|-----|-------------|----------|
| 1 (Rustboro) | TBD | ~18 | 15 | ~13 | TBD |
| 2 (Dewford) | TBD | ~24 | 20 | ~18 | TBD |
| ... | ... | ... | ... | ... | ... |

Fill this in as chunks are designed. Each boss should be a Pokemon that's exciting for that stage of the game and showcases the rebalance's design philosophy.
