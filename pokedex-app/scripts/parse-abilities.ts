#!/usr/bin/env bun

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface Ability {
  id: number;
  name: string;
  description: string;
  aiRating: number;
  breakable?: boolean;
  cantBeSwapped?: boolean;
  cantBeTraced?: boolean;
  cantBeSuppressed?: boolean;
  cantBeOverwritten?: boolean;
  failsOnMaxGuard?: boolean;
}

async function parseAbilities() {
  const projectRoot = join(import.meta.dir, '../..');

  // Read the abilities header file to get IDs and constant names
  const abilitiesHeaderPath = join(projectRoot, 'include/constants/abilities.h');
  const abilitiesHeader = await readFile(abilitiesHeaderPath, 'utf-8');

  // Read the abilities data file to get names and descriptions
  const abilitiesDataPath = join(projectRoot, 'src/data/abilities.h');
  const abilitiesData = await readFile(abilitiesDataPath, 'utf-8');

  // Parse ability IDs from header
  const abilityIdMap = new Map<string, number>();
  const idRegex = /#define\s+(ABILITY_\w+)\s+(\d+)/g;
  let match;

  while ((match = idRegex.exec(abilitiesHeader)) !== null) {
    const [, constantName, id] = match;
    abilityIdMap.set(constantName, parseInt(id, 10));
  }

  // Parse ability data
  const abilities: Ability[] = [];
  const abilityBlockRegex = /\[(ABILITY_\w+)\]\s*=\s*\{([^}]+)\}/g;

  while ((match = abilityBlockRegex.exec(abilitiesData)) !== null) {
    const [, abilityConstant, blockContent] = match;
    const id = abilityIdMap.get(abilityConstant);

    if (id === undefined || id === 0) continue; // Skip ABILITY_NONE

    // Extract fields from block content
    const nameMatch = blockContent.match(/\.name\s*=\s*_\("([^"]+)"\)/);
    const descMatch = blockContent.match(/\.description\s*=\s*COMPOUND_STRING\("([^"]+(?:\\n[^"]+)*)"\)/);
    const aiRatingMatch = blockContent.match(/\.aiRating\s*=\s*(\d+)/);

    if (!nameMatch || !descMatch) continue;

    const ability: Ability = {
      id,
      name: nameMatch[1],
      description: descMatch[1].replace(/\\n/g, ' ').trim(),
      aiRating: aiRatingMatch ? parseInt(aiRatingMatch[1], 10) : 0,
    };

    // Parse boolean flags
    if (blockContent.includes('.breakable = TRUE')) ability.breakable = true;
    if (blockContent.includes('.cantBeSwapped = TRUE')) ability.cantBeSwapped = true;
    if (blockContent.includes('.cantBeTraced = TRUE')) ability.cantBeTraced = true;
    if (blockContent.includes('.cantBeSuppressed = TRUE')) ability.cantBeSuppressed = true;
    if (blockContent.includes('.cantBeOverwritten = TRUE')) ability.cantBeOverwritten = true;
    if (blockContent.includes('.failsOnMaxGuard = TRUE')) ability.failsOnMaxGuard = true;

    abilities.push(ability);
  }

  // Sort abilities by ID
  abilities.sort((a, b) => a.id - b.id);

  // Write to JSON file
  const outputPath = join(import.meta.dir, '../src/data/abilities.json');
  await writeFile(outputPath, JSON.stringify(abilities, null, 2));

  console.log(`✅ Parsed ${abilities.length} abilities and saved to ${outputPath}`);
}

// Run the parser
parseAbilities().catch(console.error);