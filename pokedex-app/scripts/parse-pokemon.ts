#!/usr/bin/env bun

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface LevelUpMove {
  level: number;
  move: string;
}

interface StatChange {
  current: number;
  proposed: number;
  notes: string;
}

interface AbilityChange {
  type: 'add' | 'replace' | 'remove';
  ability: string;
  notes: string;
}

interface MoveChange {
  move: string;
  modification: string;
  notes: string;
}

interface Modifications {
  implemented?: boolean;
  statChanges?: {
    hp?: StatChange;
    attack?: StatChange;
    defense?: StatChange;
    speed?: StatChange;
    spAttack?: StatChange;
    spDefense?: StatChange;
  };
  abilityChanges?: AbilityChange[];
  moveChanges?: MoveChange[];
  generalNotes?: string[];
}

interface Pokemon {
  id: number;
  name: string;
  natDexNum: number;
  types: string[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    spAttack: number;
    spDefense: number;
    total: number;
  };
  abilities: string[];
  height: number;
  weight: number;
  description: string;
  categoryName: string;
  catchRate: number;
  expYield: number;
  genderRatio: string;
  eggCycles: number;
  friendship: number;
  growthRate: string;
  eggGroups: string[];
  bodyColor: string;
  levelUpLearnset: LevelUpMove[];
  teachableLearnset: string[];
  eggMoveLearnset: string[];
  modifications?: Modifications;
}

const bodyColorMap: Record<string, string> = {
  'BODY_COLOR_RED': 'Red',
  'BODY_COLOR_BLUE': 'Blue',
  'BODY_COLOR_YELLOW': 'Yellow',
  'BODY_COLOR_GREEN': 'Green',
  'BODY_COLOR_BLACK': 'Black',
  'BODY_COLOR_BROWN': 'Brown',
  'BODY_COLOR_PURPLE': 'Purple',
  'BODY_COLOR_GRAY': 'Gray',
  'BODY_COLOR_WHITE': 'White',
  'BODY_COLOR_PINK': 'Pink',
};

const growthRateMap: Record<string, string> = {
  'GROWTH_MEDIUM_FAST': 'Medium Fast',
  'GROWTH_ERRATIC': 'Erratic',
  'GROWTH_FLUCTUATING': 'Fluctuating',
  'GROWTH_MEDIUM_SLOW': 'Medium Slow',
  'GROWTH_FAST': 'Fast',
  'GROWTH_SLOW': 'Slow',
};

async function parsePokemon() {
  const projectRoot = join(import.meta.dir, '../..');

  // Read species constants
  const speciesHeaderPath = join(projectRoot, 'include/constants/species.h');
  const speciesHeader = await readFile(speciesHeaderPath, 'utf-8');

  // Read abilities constants
  const abilitiesHeaderPath = join(projectRoot, 'include/constants/abilities.h');
  const abilitiesHeader = await readFile(abilitiesHeaderPath, 'utf-8');

  // Read moves constants
  const movesHeaderPath = join(projectRoot, 'include/constants/moves.h');
  const movesHeader = await readFile(movesHeaderPath, 'utf-8');

  // Parse species ID map
  const speciesIdMap = new Map<string, number>();
  const speciesIdRegex = /#define\s+(SPECIES_\w+)\s+(\d+)/g;
  let match;

  while ((match = speciesIdRegex.exec(speciesHeader)) !== null) {
    const [, constantName, id] = match;
    speciesIdMap.set(constantName, parseInt(id, 10));
  }

  // Parse ability name map
  const abilityNameMap = new Map<string, string>();
  const abilityIdRegex = /#define\s+(ABILITY_\w+)\s+(\d+)/g;

  while ((match = abilityIdRegex.exec(abilitiesHeader)) !== null) {
    const [, constantName] = match;
    // Convert ABILITY_SPEED_BOOST to "Speed Boost"
    const name = constantName
      .replace('ABILITY_', '')
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
    abilityNameMap.set(constantName, name);
  }

  // Parse move name map
  const moveNameMap = new Map<string, string>();
  const moveIdRegex = /#define\s+(MOVE_\w+)\s+(\d+)/g;

  while ((match = moveIdRegex.exec(movesHeader)) !== null) {
    const [, constantName, id] = match;
    // Skip aliases (lines with multiple defines pointing to same move)
    if (constantName.includes('DOUBLE_SLAP') && constantName !== 'MOVE_DOUBLE_SLAP') continue;
    if (constantName.includes('THUNDER_PUNCH') && constantName !== 'MOVE_THUNDER_PUNCH') continue;
    if (constantName.includes('VISE_GRIP') && constantName !== 'MOVE_VISE_GRIP') continue;

    // Convert MOVE_VINE_WHIP to "Vine Whip"
    const name = constantName
      .replace('MOVE_', '')
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
    moveNameMap.set(constantName, name);
  }

  // Parse level-up learnsets
  const learnsetMap = new Map<string, LevelUpMove[]>();
  const learnsetGenFiles = [
    'gen_1.h',
    'gen_2.h',
    'gen_3.h',
    'gen_4.h',
    'gen_5.h',
    'gen_6.h',
    'gen_7.h',
    'gen_8.h',
    'gen_9.h',
  ];

  for (const genFile of learnsetGenFiles) {
    const learnsetPath = join(projectRoot, 'src/data/pokemon/level_up_learnsets', genFile);
    try {
      const learnsetContent = await readFile(learnsetPath, 'utf-8');

      // Parse learnsets - format: static const struct LevelUpMove sXXXLevelUpLearnset[] = {
      const learnsetRegex = /static const struct LevelUpMove s(\w+)LevelUpLearnset\[\]\s*=\s*\{([^}]+)\}/g;

      while ((match = learnsetRegex.exec(learnsetContent)) !== null) {
        const [, pokemonName, movesBlock] = match;
        const moves: LevelUpMove[] = [];

        // Parse individual moves: LEVEL_UP_MOVE(level, MOVE_NAME)
        const moveRegex = /LEVEL_UP_MOVE\(\s*(\d+),\s*(MOVE_\w+)\)/g;
        let moveMatch;

        while ((moveMatch = moveRegex.exec(movesBlock)) !== null) {
          const level = parseInt(moveMatch[1], 10);
          const moveConstant = moveMatch[2];
          const moveName = moveNameMap.get(moveConstant);

          if (moveName && moveConstant !== 'MOVE_NONE') {
            moves.push({ level, move: moveName });
          }
        }

        if (moves.length > 0) {
          learnsetMap.set(pokemonName.toUpperCase(), moves);
        }
      }
    } catch (err) {
      console.warn(`⚠️  Could not read learnset file ${genFile}: ${err}`);
    }
  }

  // Parse teachable learnsets (TMs/HMs/Move Tutors)
  const teachableLearnsetMap = new Map<string, string[]>();
  const teachableLearnsetPath = join(projectRoot, 'src/data/pokemon/teachable_learnsets.h');
  try {
    const teachableContent = await readFile(teachableLearnsetPath, 'utf-8');

    // Parse teachable learnsets - format: static const u16 sXXXTeachableLearnset[] = {
    const teachableRegex = /static const u16 s(\w+)TeachableLearnset\[\]\s*=\s*\{([^}]+)\}/g;

    while ((match = teachableRegex.exec(teachableContent)) !== null) {
      const [, pokemonName, movesBlock] = match;
      const moves: string[] = [];

      // Parse individual moves: MOVE_NAME,
      const moveRegex = /(MOVE_\w+)/g;
      let moveMatch;

      while ((moveMatch = moveRegex.exec(movesBlock)) !== null) {
        const moveConstant = moveMatch[1];
        const moveName = moveNameMap.get(moveConstant);

        if (moveName && moveConstant !== 'MOVE_UNAVAILABLE' && moveConstant !== 'MOVE_NONE') {
          moves.push(moveName);
        }
      }

      if (moves.length > 0) {
        teachableLearnsetMap.set(pokemonName.toUpperCase(), moves);
      }
    }
  } catch (err) {
    console.warn(`⚠️  Could not read teachable learnsets: ${err}`);
  }

  // Parse egg move learnsets
  const eggMoveLearnsetMap = new Map<string, string[]>();
  const eggMoveLearnsetPath = join(projectRoot, 'src/data/pokemon/egg_moves.h');
  try {
    const eggMoveContent = await readFile(eggMoveLearnsetPath, 'utf-8');

    // Parse egg move learnsets - format: static const u16 sXXXEggMoveLearnset[] = {
    const eggMoveRegex = /static const u16 s(\w+)EggMoveLearnset\[\]\s*=\s*\{([^}]+)\}/g;

    while ((match = eggMoveRegex.exec(eggMoveContent)) !== null) {
      const [, pokemonName, movesBlock] = match;
      const moves: string[] = [];

      // Parse individual moves: MOVE_NAME,
      const moveRegex = /(MOVE_\w+)/g;
      let moveMatch;

      while ((moveMatch = moveRegex.exec(movesBlock)) !== null) {
        const moveConstant = moveMatch[1];
        const moveName = moveNameMap.get(moveConstant);

        if (moveName && moveConstant !== 'MOVE_UNAVAILABLE' && moveConstant !== 'MOVE_NONE') {
          moves.push(moveName);
        }
      }

      if (moves.length > 0) {
        eggMoveLearnsetMap.set(pokemonName.toUpperCase(), moves);
      }
    }
  } catch (err) {
    console.warn(`⚠️  Could not read egg move learnsets: ${err}`);
  }

  const pokemon: Pokemon[] = [];

  // Read all gen family files
  const genFiles = [
    'gen_1_families.h',
    'gen_2_families.h',
    'gen_3_families.h',
    'gen_4_families.h',
    'gen_5_families.h',
    'gen_6_families.h',
    'gen_7_families.h',
    'gen_8_families.h',
    'gen_9_families.h',
  ];

  function parsePokemonBlock(speciesConstant: string, blockContent: string) {
    const id = speciesIdMap.get(speciesConstant);

    if (id === undefined || id === 0) return;

    // Extract fields
    const nameMatch = blockContent.match(/\.speciesName\s*=\s*_\("([^"]+)"\)/);
    const natDexMatch = blockContent.match(/\.natDexNum\s*=\s*NATIONAL_DEX_(\w+)/);
    const categoryMatch = blockContent.match(/\.categoryName\s*=\s*_\("([^"]+)"\)/);
    const heightMatch = blockContent.match(/\.height\s*=\s*(\d+)/);
    const weightMatch = blockContent.match(/\.weight\s*=\s*(\d+)/);
    const descMatch = blockContent.match(/\.description\s*=\s*COMPOUND_STRING\(\s*"([^"]+(?:\\n[^"]+)*)"\s*\)/);

    // Base stats
    const hpMatch = blockContent.match(/\.baseHP\s*=\s*(\d+)/);
    const attackMatch = blockContent.match(/\.baseAttack\s*=\s*(\d+)/);
    const defenseMatch = blockContent.match(/\.baseDefense\s*=\s*(\d+)/);
    const speedMatch = blockContent.match(/\.baseSpeed\s*=\s*(\d+)/);
    const spAttackMatch = blockContent.match(/\.baseSpAttack\s*=\s*(\d+)/);
    const spDefenseMatch = blockContent.match(/\.baseSpDefense\s*=\s*(\d+)/);

    // Types
    const typesMatch = blockContent.match(/\.types\s*=\s*MON_TYPES\(\s*TYPE_(\w+)(?:\s*,\s*TYPE_(\w+))?\s*\)/);

    // Abilities
    const abilitiesMatch = blockContent.match(/\.abilities\s*=\s*\{\s*(ABILITY_\w+)(?:\s*,\s*(ABILITY_\w+))?(?:\s*,\s*(ABILITY_\w+))?\s*\}/);

    // Other stats
    const catchRateMatch = blockContent.match(/\.catchRate\s*=\s*(\d+)/);
    // Handle conditional expYield
    let expYield = 0;
    const simpleExpMatch = blockContent.match(/\.expYield\s*=\s*(\d+),/);
    if (simpleExpMatch) {
      expYield = parseInt(simpleExpMatch[1], 10);
    } else {
      // Try to find in #if blocks
      const ifBlockMatch = blockContent.match(/#if\s+P_UPDATED_EXP_YIELDS[^#]*?\.expYield\s*=\s*(\d+)/);
      if (ifBlockMatch) {
        expYield = parseInt(ifBlockMatch[1], 10);
      }
    }

    const genderRatioMatch = blockContent.match(/\.genderRatio\s*=\s*(\w+)/);
    const eggCyclesMatch = blockContent.match(/\.eggCycles\s*=\s*(\d+)/);
    const friendshipMatch = blockContent.match(/\.friendship\s*=\s*(\w+)/);
    const growthRateMatch = blockContent.match(/\.growthRate\s*=\s*(\w+)/);
    const eggGroupsMatch = blockContent.match(/\.eggGroups\s*=\s*MON_EGG_GROUPS\(\s*EGG_GROUP_(\w+)(?:\s*,\s*EGG_GROUP_(\w+))?\s*\)/);
    const bodyColorMatch = blockContent.match(/\.bodyColor\s*=\s*(\w+)/);

    if (!nameMatch) return;

    const hp = hpMatch ? parseInt(hpMatch[1], 10) : 0;
    const attack = attackMatch ? parseInt(attackMatch[1], 10) : 0;
    const defense = defenseMatch ? parseInt(defenseMatch[1], 10) : 0;
    const speed = speedMatch ? parseInt(speedMatch[1], 10) : 0;
    const spAttack = spAttackMatch ? parseInt(spAttackMatch[1], 10) : 0;
    const spDefense = spDefenseMatch ? parseInt(spDefenseMatch[1], 10) : 0;

    const types: string[] = [];
    if (typesMatch) {
      const type1 = typesMatch[1];
      const type2 = typesMatch[2];

      // Convert type constants to proper names
      const type1Name = type1.split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
      types.push(type1Name);

      if (type2 && type2 !== type1) {
        const type2Name = type2.split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
        types.push(type2Name);
      }
    }

    const abilities: string[] = [];
    if (abilitiesMatch) {
      for (let i = 1; i <= 3; i++) {
        const abilityConstant = abilitiesMatch[i];
        if (abilityConstant && abilityConstant !== 'ABILITY_NONE') {
          const abilityName = abilityNameMap.get(abilityConstant) || abilityConstant;
          abilities.push(abilityName);
        }
      }
    }

    // Get learnsets for this Pokemon
    const pokemonNameUpper = nameMatch[1].toUpperCase().replace(/[^A-Z]/g, '');
    const learnset = learnsetMap.get(pokemonNameUpper) || [];
    const teachableLearnset = teachableLearnsetMap.get(pokemonNameUpper) || [];
    const eggMoveLearnset = eggMoveLearnsetMap.get(pokemonNameUpper) || [];

    const mon: Pokemon = {
      id,
      name: nameMatch[1],
      natDexNum: natDexMatch ? speciesIdMap.get(`SPECIES_${natDexMatch[1]}`) || id : id,
      types,
      baseStats: {
        hp,
        attack,
        defense,
        speed,
        spAttack,
        spDefense,
        total: hp + attack + defense + speed + spAttack + spDefense,
      },
      abilities,
      height: heightMatch ? parseInt(heightMatch[1], 10) : 0,
      weight: weightMatch ? parseInt(weightMatch[1], 10) : 0,
      description: descMatch ? descMatch[1].replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim() : '',
      categoryName: categoryMatch ? categoryMatch[1] : '',
      catchRate: catchRateMatch ? parseInt(catchRateMatch[1], 10) : 0,
      expYield,
      genderRatio: genderRatioMatch ? genderRatioMatch[1].replace('PERCENT_FEMALE', '').replace(/[()]/g, '') : 'Unknown',
      eggCycles: eggCyclesMatch ? parseInt(eggCyclesMatch[1], 10) : 0,
      friendship: friendshipMatch ? (friendshipMatch[1] === 'STANDARD_FRIENDSHIP' ? 70 : parseInt(friendshipMatch[1], 10)) : 70,
      growthRate: growthRateMatch ? (growthRateMap[growthRateMatch[1]] || growthRateMatch[1]) : 'Unknown',
      eggGroups: [],
      bodyColor: bodyColorMatch ? (bodyColorMap[bodyColorMatch[1]] || bodyColorMatch[1]) : 'Unknown',
      levelUpLearnset: learnset,
      teachableLearnset,
      eggMoveLearnset,
    };

    // Parse egg groups
    if (eggGroupsMatch) {
      const eg1 = eggGroupsMatch[1];
      const eg2 = eggGroupsMatch[2];

      if (eg1) {
        const name = eg1.split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
        mon.eggGroups.push(name);
      }
      if (eg2 && eg2 !== eg1) {
        const name = eg2.split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
        mon.eggGroups.push(name);
      }
    }

    pokemon.push(mon);
  }

  // Process each gen file
  for (const genFile of genFiles) {
    const genFilePath = join(projectRoot, 'src/data/pokemon/species_info', genFile);
    try {
      const genFileContent = await readFile(genFilePath, 'utf-8');

      // Parse Pokemon blocks manually to handle nested braces
      const lines = genFileContent.split('\n');
      let currentSpecies: string | null = null;
      let currentBlock = '';
      let braceDepth = 0;
      let inBlock = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Check for species definition
        const speciesMatch = line.match(/\[(SPECIES_\w+)\]\s*=/);
        if (speciesMatch) {
          // If we were already processing a block, parse it first
          if (currentSpecies && inBlock) {
            parsePokemonBlock(currentSpecies, currentBlock);
          }
          currentSpecies = speciesMatch[1];
          currentBlock = '';
          braceDepth = 0;
          inBlock = false;
          continue;
        }

        // Track braces
        if (currentSpecies) {
          if (line.includes('{') && !inBlock) {
            inBlock = true;
            braceDepth = 0;
          }

          if (inBlock) {
            currentBlock += line + '\n';
            braceDepth += (line.match(/{/g) || []).length;
            braceDepth -= (line.match(/}/g) || []).length;

            if (braceDepth === 0) {
              // We've found the closing brace
              parsePokemonBlock(currentSpecies, currentBlock);
              currentSpecies = null;
              currentBlock = '';
              inBlock = false;
            }
          }
        }
      }

      // Process last entry if exists
      if (currentSpecies && inBlock) {
        parsePokemonBlock(currentSpecies, currentBlock);
      }
    } catch (err) {
      console.warn(`⚠️  Could not read ${genFile}: ${err}`);
    }
  }

  // Sort by national dex number
  pokemon.sort((a, b) => a.natDexNum - b.natDexNum);

  // Load and merge custom modifications
  const customDataPath = join(import.meta.dir, '../custom-data/pokemon');
  let modificationsCount = 0;

  for (const mon of pokemon) {
    const customFilePath = join(customDataPath, `${mon.name.toLowerCase().replace(/[^a-z]/g, '')}.json`);

    try {
      const customFileContent = await readFile(customFilePath, 'utf-8');
      const customData = JSON.parse(customFileContent);

      if (customData.modifications) {
        mon.modifications = customData.modifications;
        modificationsCount++;
      }
    } catch (err) {
      // File doesn't exist or couldn't be parsed - that's okay, not all Pokémon need modifications
    }
  }

  // Write to JSON file
  const outputPath = join(import.meta.dir, '../src/data/pokemon.json');
  await writeFile(outputPath, JSON.stringify(pokemon, null, 2));

  console.log(`✅ Parsed ${pokemon.length} Pokémon and saved to ${outputPath}`);
  if (modificationsCount > 0) {
    console.log(`📝 Loaded custom modifications for ${modificationsCount} Pokémon`);
  }
}

// Run the parser
parsePokemon().catch(console.error);