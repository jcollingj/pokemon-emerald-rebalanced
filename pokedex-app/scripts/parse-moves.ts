#!/usr/bin/env bun

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface AdditionalEffect {
  moveEffect: string;
  chance: number;
  self: boolean;
}

interface Move {
  id: number;
  name: string;
  description: string;
  type: string;
  category: string;
  power: number;
  accuracy: number;
  pp: number;
  priority: number;
  target: string;
  effect: string;
  additionalEffects?: AdditionalEffect[];
  flags: {
    makesContact?: boolean;
    ignoresProtect?: boolean;
    magicCoatAffected?: boolean;
    snatchAffected?: boolean;
    mirrorMoveBanned?: boolean;
    kingsRockAffected?: boolean;
    highCritRatio?: boolean;
    soundMove?: boolean;
    punchMove?: boolean;
    bitingMove?: boolean;
    slicingMove?: boolean;
    ballBombMove?: boolean;
    windMove?: boolean;
    danceMove?: boolean;
  };
}

const categoryMap: Record<string, string> = {
  'DAMAGE_CATEGORY_PHYSICAL': 'Physical',
  'DAMAGE_CATEGORY_SPECIAL': 'Special',
  'DAMAGE_CATEGORY_STATUS': 'Status',
};

const targetMap: Record<string, string> = {
  'MOVE_TARGET_SELECTED': 'Single Target',
  'MOVE_TARGET_DEPENDS': 'Varies',
  'MOVE_TARGET_USER_OR_SELECTED': 'User or Ally',
  'MOVE_TARGET_RANDOM': 'Random',
  'MOVE_TARGET_BOTH': 'Both Foes',
  'MOVE_TARGET_USER': 'User',
  'MOVE_TARGET_FOES_AND_ALLY': 'All Adjacent',
  'MOVE_TARGET_OPPONENTS_FIELD': "Opponent's Field",
  'MOVE_TARGET_ALL_BATTLERS': 'All Battlers',
  'MOVE_TARGET_USER_AND_ALLIES': 'User and Allies',
  'MOVE_TARGET_ALLY': 'Ally',
  'MOVE_TARGET_ALLIES': 'All Allies',
};

const moveEffectDescriptions: Record<string, string> = {
  'MOVE_EFFECT_SLEEP': 'May cause sleep',
  'MOVE_EFFECT_POISON': 'May poison the target',
  'MOVE_EFFECT_BURN': 'May burn the target',
  'MOVE_EFFECT_FREEZE': 'May freeze the target',
  'MOVE_EFFECT_PARALYSIS': 'May paralyze the target',
  'MOVE_EFFECT_TOXIC': 'May badly poison the target',
  'MOVE_EFFECT_FROSTBITE': 'May inflict frostbite',
  'MOVE_EFFECT_CONFUSION': 'May confuse the target',
  'MOVE_EFFECT_FLINCH': 'May cause flinching',
  'MOVE_EFFECT_ATK_PLUS_1': 'Raises Attack by 1 stage',
  'MOVE_EFFECT_DEF_PLUS_1': 'Raises Defense by 1 stage',
  'MOVE_EFFECT_SPD_PLUS_1': 'Raises Speed by 1 stage',
  'MOVE_EFFECT_SP_ATK_PLUS_1': 'Raises Special Attack by 1 stage',
  'MOVE_EFFECT_SP_DEF_PLUS_1': 'Raises Special Defense by 1 stage',
  'MOVE_EFFECT_ACC_PLUS_1': 'Raises Accuracy by 1 stage',
  'MOVE_EFFECT_EVS_PLUS_1': 'Raises Evasion by 1 stage',
  'MOVE_EFFECT_ATK_MINUS_1': 'Lowers Attack by 1 stage',
  'MOVE_EFFECT_DEF_MINUS_1': 'Lowers Defense by 1 stage',
  'MOVE_EFFECT_SPD_MINUS_1': 'Lowers Speed by 1 stage',
  'MOVE_EFFECT_SP_ATK_MINUS_1': 'Lowers Special Attack by 1 stage',
  'MOVE_EFFECT_SP_DEF_MINUS_1': 'Lowers Special Defense by 1 stage',
  'MOVE_EFFECT_ACC_MINUS_1': 'Lowers Accuracy by 1 stage',
  'MOVE_EFFECT_EVS_MINUS_1': 'Lowers Evasion by 1 stage',
  'MOVE_EFFECT_ATK_PLUS_2': 'Raises Attack by 2 stages',
  'MOVE_EFFECT_DEF_PLUS_2': 'Raises Defense by 2 stages',
  'MOVE_EFFECT_SPD_PLUS_2': 'Raises Speed by 2 stages',
  'MOVE_EFFECT_SP_ATK_PLUS_2': 'Raises Special Attack by 2 stages',
  'MOVE_EFFECT_SP_DEF_PLUS_2': 'Raises Special Defense by 2 stages',
  'MOVE_EFFECT_ACC_PLUS_2': 'Raises Accuracy by 2 stages',
  'MOVE_EFFECT_EVS_PLUS_2': 'Raises Evasion by 2 stages',
  'MOVE_EFFECT_ATK_MINUS_2': 'Lowers Attack by 2 stages',
  'MOVE_EFFECT_DEF_MINUS_2': 'Lowers Defense by 2 stages',
  'MOVE_EFFECT_SPD_MINUS_2': 'Lowers Speed by 2 stages',
  'MOVE_EFFECT_SP_ATK_MINUS_2': 'Lowers Special Attack by 2 stages',
  'MOVE_EFFECT_SP_DEF_MINUS_2': 'Lowers Special Defense by 2 stages',
  'MOVE_EFFECT_ACC_MINUS_2': 'Lowers Accuracy by 2 stages',
  'MOVE_EFFECT_EVS_MINUS_2': 'Lowers Evasion by 2 stages',
  'MOVE_EFFECT_RECHARGE': 'User must recharge next turn',
  'MOVE_EFFECT_ALL_STATS_UP': 'Raises all stats',
  'MOVE_EFFECT_REMOVE_STATUS': 'Removes status conditions',
  'MOVE_EFFECT_ATK_DEF_DOWN': 'Lowers Attack and Defense',
  'MOVE_EFFECT_DEF_SPDEF_DOWN': 'Lowers Defense and Special Defense',
  'MOVE_EFFECT_CLEAR_SMOG': 'Removes all stat changes from the target',
  'MOVE_EFFECT_RECOIL_HP_25': 'User takes 25% recoil damage',
  'MOVE_EFFECT_PAYDAY': 'Scatters coins',
};

async function parseMoves() {
  const projectRoot = join(import.meta.dir, '../..');

  // Read moves constants
  const movesHeaderPath = join(projectRoot, 'include/constants/moves.h');
  const movesHeader = await readFile(movesHeaderPath, 'utf-8');

  // Parse move ID map
  const moveIdMap = new Map<string, number>();
  const moveIdRegex = /#define\s+(MOVE_\w+)\s+(\d+)/g;
  let match;

  while ((match = moveIdRegex.exec(movesHeader)) !== null) {
    const [, constantName, id] = match;
    // Skip aliases
    if (constantName.includes('DOUBLE_SLAP') && constantName !== 'MOVE_DOUBLE_SLAP') continue;
    if (constantName.includes('THUNDER_PUNCH') && constantName !== 'MOVE_THUNDER_PUNCH') continue;
    if (constantName.includes('VISE_GRIP') && constantName !== 'MOVE_VISE_GRIP') continue;

    moveIdMap.set(constantName, parseInt(id, 10));
  }

  // Read moves info
  const movesInfoPath = join(projectRoot, 'src/data/moves_info.h');
  const movesInfoContent = await readFile(movesInfoPath, 'utf-8');

  const moves: Move[] = [];

  // Parse move blocks
  const lines = movesInfoContent.split('\n');
  let currentMove: string | null = null;
  let currentBlock = '';
  let braceDepth = 0;
  let inBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for move definition
    const moveMatch = line.match(/\[(MOVE_\w+)\]\s*=/);
    if (moveMatch) {
      // If we were already processing a block, parse it first
      if (currentMove && inBlock) {
        parseMoveBlock(currentMove, currentBlock);
      }
      currentMove = moveMatch[1];
      currentBlock = '';
      braceDepth = 0;
      inBlock = false;
      continue;
    }

    // Track braces
    if (currentMove) {
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
          parseMoveBlock(currentMove, currentBlock);
          currentMove = null;
          currentBlock = '';
          inBlock = false;
        }
      }
    }
  }

  // Process last entry if exists
  if (currentMove && inBlock) {
    parseMoveBlock(currentMove, currentBlock);
  }

  function parseMoveBlock(moveConstant: string, blockContent: string) {
    const id = moveIdMap.get(moveConstant);

    if (id === undefined || id === 0) return;

    // Extract fields
    const nameMatch = blockContent.match(/\.name\s*=\s*COMPOUND_STRING\("([^"]+)"\)/);
    const descMatch = blockContent.match(/\.description\s*=\s*COMPOUND_STRING\(\s*"([^"]+(?:\\n[^"]+)*)"\s*\)/);
    const typeMatch = blockContent.match(/\.type\s*=\s*TYPE_(\w+)/);
    const categoryMatch = blockContent.match(/\.category\s*=\s*(\w+)/);
    const effectMatch = blockContent.match(/\.effect\s*=\s*EFFECT_(\w+)/);
    const targetMatch = blockContent.match(/\.target\s*=\s*(MOVE_TARGET_\w+)/);

    // Power - handle conditionals
    let power = 0;
    const simplePowerMatch = blockContent.match(/\.power\s*=\s*(\d+),/);
    if (simplePowerMatch) {
      power = parseInt(simplePowerMatch[1], 10);
    } else {
      const ifPowerMatch = blockContent.match(/#if[^#]*?\.power\s*=\s*(\d+)/);
      if (ifPowerMatch) {
        power = parseInt(ifPowerMatch[1], 10);
      }
    }

    // Accuracy - handle conditionals and expressions
    let accuracy = 0;
    const simpleAccMatch = blockContent.match(/\.accuracy\s*=\s*(\d+),/);
    if (simpleAccMatch) {
      accuracy = parseInt(simpleAccMatch[1], 10);
    } else {
      const ternaryAccMatch = blockContent.match(/\.accuracy\s*=\s*[^?]+\?\s*(\d+)/);
      if (ternaryAccMatch) {
        accuracy = parseInt(ternaryAccMatch[1], 10);
      }
    }

    // PP
    const ppMatch = blockContent.match(/\.pp\s*=\s*(\d+)/);

    // Priority
    const priorityMatch = blockContent.match(/\.priority\s*=\s*(-?\d+)/);

    if (!nameMatch) return;

    // Parse additional effects
    const additionalEffects: AdditionalEffect[] = [];
    const additionalEffectsMatch = blockContent.match(/\.additionalEffects\s*=\s*ADDITIONAL_EFFECTS\(\{([^}]+(?:\{[^}]+\}[^}]*)*)\}\)/s);
    if (additionalEffectsMatch) {
      const effectsContent = additionalEffectsMatch[1];
      const moveEffectMatch = effectsContent.match(/\.moveEffect\s*=\s*(MOVE_EFFECT_\w+)/);
      const chanceMatch = effectsContent.match(/\.chance\s*=\s*(\d+)/);
      const selfMatch = effectsContent.includes('.self = TRUE');

      if (moveEffectMatch) {
        additionalEffects.push({
          moveEffect: moveEffectMatch[1],
          chance: chanceMatch ? parseInt(chanceMatch[1], 10) : 100,
          self: selfMatch,
        });
      }
    }

    const move: Move = {
      id,
      name: nameMatch[1],
      description: descMatch ? descMatch[1].replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim() : '',
      type: typeMatch ? typeMatch[1].split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ') : 'Normal',
      category: categoryMatch ? (categoryMap[categoryMatch[1]] || categoryMatch[1]) : 'Physical',
      power,
      accuracy,
      pp: ppMatch ? parseInt(ppMatch[1], 10) : 0,
      priority: priorityMatch ? parseInt(priorityMatch[1], 10) : 0,
      target: targetMatch ? (targetMap[targetMatch[1]] || targetMatch[1]) : 'Single Target',
      effect: effectMatch ? effectMatch[1].split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ') : '',
      additionalEffects: additionalEffects.length > 0 ? additionalEffects : undefined,
      flags: {},
    };

    // Parse boolean flags
    if (blockContent.includes('.makesContact = TRUE')) move.flags.makesContact = true;
    if (blockContent.includes('.ignoresProtect = TRUE')) move.flags.ignoresProtect = true;
    if (blockContent.includes('.magicCoatAffected = TRUE')) move.flags.magicCoatAffected = true;
    if (blockContent.includes('.snatchAffected = TRUE')) move.flags.snatchAffected = true;
    if (blockContent.includes('.mirrorMoveBanned = TRUE')) move.flags.mirrorMoveBanned = true;
    if (blockContent.includes('.kingsRockAffected = TRUE')) move.flags.kingsRockAffected = true;
    if (blockContent.includes('.highCritRatio = TRUE')) move.flags.highCritRatio = true;
    if (blockContent.includes('.soundMove = TRUE')) move.flags.soundMove = true;
    if (blockContent.includes('.punchingMove = TRUE')) move.flags.punchMove = true;
    if (blockContent.includes('.bitingMove = TRUE')) move.flags.bitingMove = true;
    if (blockContent.includes('.slicingMove = TRUE')) move.flags.slicingMove = true;
    if (blockContent.includes('.ballBombMove = TRUE')) move.flags.ballBombMove = true;
    if (blockContent.includes('.windMove = TRUE')) move.flags.windMove = true;
    if (blockContent.includes('.danceMove = TRUE')) move.flags.danceMove = true;

    moves.push(move);
  }

  // Sort by ID
  moves.sort((a, b) => a.id - b.id);

  // Write to JSON file
  const outputPath = join(import.meta.dir, '../src/data/moves.json');
  await writeFile(outputPath, JSON.stringify(moves, null, 2));

  console.log(`✅ Parsed ${moves.length} moves and saved to ${outputPath}`);
}

// Run the parser
parseMoves().catch(console.error);