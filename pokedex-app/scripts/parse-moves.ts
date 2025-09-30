#!/usr/bin/env bun

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

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