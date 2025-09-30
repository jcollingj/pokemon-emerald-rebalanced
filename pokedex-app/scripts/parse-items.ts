#!/usr/bin/env bun

import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  pocket: string;
  sortType?: string;
  type?: string;
  battleUsage?: string;
  secondaryId?: number;
}

const pocketMap: Record<number, string> = {
  0: 'Items',
  1: 'Poké Balls',
  2: 'TMs & HMs',
  3: 'Berries',
  4: 'Key Items',
};

async function parseItems() {
  const projectRoot = join(import.meta.dir, '../..');

  // Read the items header file to get IDs
  const itemsHeaderPath = join(projectRoot, 'include/constants/items.h');
  const itemsHeader = await readFile(itemsHeaderPath, 'utf-8');

  // Read the items data file
  const itemsDataPath = join(projectRoot, 'src/data/items.h');
  const itemsData = await readFile(itemsDataPath, 'utf-8');

  // Parse item IDs from header
  const itemIdMap = new Map<string, number>();
  const idRegex = /#define\s+(ITEM_\w+)\s+(\d+)/g;
  let match;

  while ((match = idRegex.exec(itemsHeader)) !== null) {
    const [, constantName, id] = match;
    // Skip aliases (they have ITEM_ in the value, not just a number)
    const nextLine = itemsHeader.slice(match.index).split('\n')[0];
    if (!nextLine.includes('ITEM_')) {
      itemIdMap.set(constantName, parseInt(id, 10));
    }
  }

  // Parse item data
  const items: Item[] = [];

  // Parse item blocks
  const lines = itemsData.split('\n');
  let currentItem: string | null = null;
  let currentBlock = '';
  let braceDepth = 0;
  let inBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for item definition
    const itemMatch = line.match(/^\s*\[(ITEM_\w+)\]\s*=/);
    if (itemMatch) {
      // If we were already processing a block, parse it first
      if (currentItem && inBlock) {
        parseItemBlock(currentItem, currentBlock);
      }
      currentItem = itemMatch[1];
      currentBlock = '';
      braceDepth = 0;
      inBlock = false;
      continue;
    }

    // Track braces
    if (currentItem) {
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
          parseItemBlock(currentItem, currentBlock);
          currentItem = null;
          currentBlock = '';
          inBlock = false;
        }
      }
    }
  }

  // Process last entry if exists
  if (currentItem && inBlock) {
    parseItemBlock(currentItem, currentBlock);
  }

  function parseItemBlock(itemConstant: string, blockContent: string) {
    const id = itemIdMap.get(itemConstant);

    if (id === undefined || id === 0) return; // Skip ITEM_NONE

    // Extract fields
    const nameMatch = blockContent.match(/\.name\s*=\s*(?:ITEM_NAME|COMPOUND_STRING)\("([^"]+)"\)/);
    const descMatch = blockContent.match(/\.description\s*=\s*(?:COMPOUND_STRING|_)\(\s*"([^"]+(?:\\n[^"]+)*)"\s*\)/);

    // Handle multi-line descriptions
    let description = '';
    if (descMatch) {
      description = descMatch[1];
    } else {
      // Try to match multi-line COMPOUND_STRING descriptions
      const multiLineDescMatch = blockContent.match(/\.description\s*=\s*COMPOUND_STRING\(\s*([\s\S]*?)\)/);
      if (multiLineDescMatch) {
        const descContent = multiLineDescMatch[1];
        // Extract all quoted strings
        const quotedStrings = descContent.match(/"([^"]*)"/g);
        if (quotedStrings) {
          description = quotedStrings.map(s => s.slice(1, -1)).join(' ');
        }
      }
    }

    // Clean up description
    description = description.replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();

    // Extract price - handle conditionals
    let price = 0;
    const simplePriceMatch = blockContent.match(/\.price\s*=\s*(\d+),/);
    if (simplePriceMatch) {
      price = parseInt(simplePriceMatch[1], 10);
    } else {
      // Try ternary expressions
      const ternaryPriceMatch = blockContent.match(/\.price\s*=\s*[^?]+\?\s*(\d+)\s*:/);
      if (ternaryPriceMatch) {
        price = parseInt(ternaryPriceMatch[1], 10);
      }
    }

    // Extract pocket
    const pocketMatch = blockContent.match(/\.pocket\s*=\s*POCKET_(\w+)/);
    let pocketIndex = 0;
    if (pocketMatch) {
      const pocketName = pocketMatch[1];
      if (pocketName === 'ITEMS') pocketIndex = 0;
      else if (pocketName === 'POKE_BALLS') pocketIndex = 1;
      else if (pocketName === 'TM_HM') pocketIndex = 2;
      else if (pocketName === 'BERRIES') pocketIndex = 3;
      else if (pocketName === 'KEY_ITEMS') pocketIndex = 4;
    }

    if (!nameMatch) return;

    const item: Item = {
      id,
      name: nameMatch[1],
      description,
      price,
      pocket: pocketMap[pocketIndex] || 'Items',
    };

    items.push(item);
  }

  // Sort by pocket, then by ID
  items.sort((a, b) => {
    const pocketA = Object.values(pocketMap).indexOf(a.pocket);
    const pocketB = Object.values(pocketMap).indexOf(b.pocket);

    if (pocketA !== pocketB) {
      return pocketA - pocketB;
    }

    return a.id - b.id;
  });

  // Write to JSON file
  const outputPath = join(import.meta.dir, '../src/data/items.json');
  await writeFile(outputPath, JSON.stringify(items, null, 2));

  console.log(`✅ Parsed ${items.length} items and saved to ${outputPath}`);

  // Show breakdown by category
  const breakdown: Record<string, number> = {};
  items.forEach(item => {
    breakdown[item.pocket] = (breakdown[item.pocket] || 0) + 1;
  });

  console.log('\nItems by category:');
  Object.entries(breakdown).forEach(([pocket, count]) => {
    console.log(`  ${pocket}: ${count}`);
  });
}

// Run the parser
parseItems().catch(console.error);