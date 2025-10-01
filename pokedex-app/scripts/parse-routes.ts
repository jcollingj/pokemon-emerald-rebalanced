#!/usr/bin/env bun

import { readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';

interface WildPokemon {
  species: string;
  minLevel: number;
  maxLevel: number;
  rate?: number;
}

interface WildEncounters {
  land?: WildPokemon[];
  water?: WildPokemon[];
  fishing?: {
    oldRod?: WildPokemon[];
    goodRod?: WildPokemon[];
    superRod?: WildPokemon[];
  };
  rockSmash?: WildPokemon[];
}

interface RouteTrainer {
  id: number;
  name: string;
  trainerClass: string;
  constantName: string;
}

interface RouteItem {
  item: string;
  hidden: boolean;
}

interface RouteData {
  name: string;
  displayName: string;
  trainers: RouteTrainer[];
  items: RouteItem[];
  wildEncounters: WildEncounters;
}

async function parseRoutes() {
  const projectRoot = join(import.meta.dir, '../..');
  const routes = new Map<string, RouteData>();

  // Parse wild encounters
  console.log('Parsing wild encounters...');
  const wildEncountersPath = join(projectRoot, 'src/data/wild_encounters.json');
  const wildData = JSON.parse(await readFile(wildEncountersPath, 'utf-8'));

  // Load species name map
  const speciesHeaderPath = join(projectRoot, 'include/constants/species.h');
  const speciesHeader = await readFile(speciesHeaderPath, 'utf-8');
  const speciesNameMap = new Map<string, string>();
  const speciesIdRegex = /#define\s+(SPECIES_\w+)\s+(\d+)/g;
  let match;

  while ((match = speciesIdRegex.exec(speciesHeader)) !== null) {
    const [, constantName] = match;
    if (constantName === 'SPECIES_NONE') continue;
    const name = constantName
      .replace('SPECIES_', '')
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
    speciesNameMap.set(constantName, name);
  }

  // Process wild encounters
  for (const group of wildData.wild_encounter_groups) {
    if (!group.for_maps) continue;

    for (const encounter of group.encounters) {
      const mapName = encounter.map.replace('MAP_', '');

      // Only process routes, caves, and similar areas
      if (!mapName.startsWith('ROUTE') && !mapName.includes('CAVE') && !mapName.includes('FOREST')) {
        continue;
      }

      const displayName = mapName
        .replace(/ROUTE(\d+)/, 'Route $1')
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/\s+/g, ' ');

      if (!routes.has(mapName)) {
        routes.set(mapName, {
          name: mapName,
          displayName,
          trainers: [],
          items: [],
          wildEncounters: {}
        });
      }

      const route = routes.get(mapName)!;

      // Parse land encounters
      if (encounter.land_mons) {
        route.wildEncounters.land = encounter.land_mons.mons.map((mon: any) => ({
          species: speciesNameMap.get(mon.species) || mon.species,
          minLevel: mon.min_level,
          maxLevel: mon.max_level
        }));
      }

      // Parse water encounters
      if (encounter.water_mons) {
        route.wildEncounters.water = encounter.water_mons.mons.map((mon: any) => ({
          species: speciesNameMap.get(mon.species) || mon.species,
          minLevel: mon.min_level,
          maxLevel: mon.max_level
        }));
      }

      // Parse fishing encounters
      if (encounter.fishing_mons) {
        route.wildEncounters.fishing = {};
        const fishMons = encounter.fishing_mons.mons;

        // Old Rod: indices 0-1
        route.wildEncounters.fishing.oldRod = fishMons.slice(0, 2).map((mon: any) => ({
          species: speciesNameMap.get(mon.species) || mon.species,
          minLevel: mon.min_level,
          maxLevel: mon.max_level
        }));

        // Good Rod: indices 2-4
        route.wildEncounters.fishing.goodRod = fishMons.slice(2, 5).map((mon: any) => ({
          species: speciesNameMap.get(mon.species) || mon.species,
          minLevel: mon.min_level,
          maxLevel: mon.max_level
        }));

        // Super Rod: indices 5-9
        route.wildEncounters.fishing.superRod = fishMons.slice(5, 10).map((mon: any) => ({
          species: speciesNameMap.get(mon.species) || mon.species,
          minLevel: mon.min_level,
          maxLevel: mon.max_level
        }));
      }

      // Parse rock smash encounters
      if (encounter.rock_smash_mons) {
        route.wildEncounters.rockSmash = encounter.rock_smash_mons.mons.map((mon: any) => ({
          species: speciesNameMap.get(mon.species) || mon.species,
          minLevel: mon.min_level,
          maxLevel: mon.max_level
        }));
      }
    }
  }

  // Parse trainers from existing trainers.json
  console.log('Loading trainer data...');
  const trainersPath = join(import.meta.dir, '../src/data/trainers.json');
  const trainers = JSON.parse(await readFile(trainersPath, 'utf-8'));

  for (const trainer of trainers) {
    if (!trainer.location) continue;

    // Map location to route name
    let routeName = trainer.location.toUpperCase().replace(/\s+/g, '').replace(/\./g, '');

    // Handle "Route 101" -> "ROUTE101"
    routeName = routeName.replace(/ROUTE(\d+)/, 'ROUTE$1');

    const route = routes.get(routeName);
    if (route) {
      route.trainers.push({
        id: trainer.id,
        name: trainer.name,
        trainerClass: trainer.trainerClass,
        constantName: trainer.constantName
      });
    }
  }

  // Parse items from map files
  console.log('Parsing items from maps...');
  const mapsDir = join(projectRoot, 'data/maps');
  const mapDirs = await readdir(mapsDir, { withFileTypes: true });

  for (const dir of mapDirs) {
    if (!dir.isDirectory()) continue;

    const mapName = dir.name.toUpperCase().replace(/\s+/g, '');
    const route = routes.get(mapName);
    if (!route) continue;

    try {
      const eventsPath = join(mapsDir, dir.name, 'events.inc');
      const eventsContent = await readFile(eventsPath, 'utf-8');

      // Find item events: ITEM_XXX, Common_EventScript_FindItem
      const itemRegex = /ITEM_(\w+).*?Common_EventScript_FindItem|ITEM_(\w+).*?Common_EventScript_HiddenItem/g;
      let itemMatch;

      while ((itemMatch = itemRegex.exec(eventsContent)) !== null) {
        const itemName = itemMatch[1] || itemMatch[2];
        const isHidden = eventsContent.includes('HiddenItem');

        const formattedItemName = itemName
          .split('_')
          .map(word => word.charAt(0) + word.slice(1).toLowerCase())
          .join(' ');

        route.items.push({
          item: formattedItemName,
          hidden: isHidden
        });
      }
    } catch (err) {
      // Skip maps without events.inc
      continue;
    }
  }

  // Convert to array and sort by route number
  const routesArray = Array.from(routes.values()).sort((a, b) => {
    const aNum = parseInt(a.name.match(/\d+/)?.[0] || '999');
    const bNum = parseInt(b.name.match(/\d+/)?.[0] || '999');
    return aNum - bNum;
  });

  // Write to JSON
  const outputPath = join(import.meta.dir, '../src/data/routes.json');
  await writeFile(outputPath, JSON.stringify(routesArray, null, 2));

  console.log(`✅ Parsed ${routesArray.length} routes and saved to ${outputPath}`);
}

// Run the parser
parseRoutes().catch(console.error);
