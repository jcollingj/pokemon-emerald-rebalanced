#!/usr/bin/env bun

import { readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';

interface PokemonData {
  id: number;
  name: string;
  abilities: string[];
}

interface TrainerMon {
  species: string;
  nickname?: string;
  level: number;
  heldItem?: string;
  moves?: string[];
  ability?: string;
  nature?: string;
  ivs?: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  evs?: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  shiny?: boolean;
  ball?: string;
}

interface Trainer {
  id: number;
  constantName: string;
  name: string;
  trainerClass: string;
  pic: string;
  gender: string;
  music: string;
  items?: string[];
  doubleBattle: boolean;
  aiFlags: string[];
  party: TrainerMon[];
  location?: string;
}

const GYM_LEADERS = [
  'ROXANNE', 'BRAWLY', 'WATTSON', 'FLANNERY',
  'NORMAN', 'WINONA', 'TATE_AND_LIZA', 'JUAN'
];

const ELITE_FOUR = ['SIDNEY', 'PHOEBE', 'GLACIA', 'DRAKE', 'WALLACE'];

async function buildTrainerLocationMap(projectRoot: string): Promise<Map<string, string>> {
  const trainerLocationMap = new Map<string, string>();
  const mapsDir = join(projectRoot, 'data/maps');

  try {
    const mapDirs = await readdir(mapsDir, { withFileTypes: true });

    for (const dir of mapDirs) {
      if (!dir.isDirectory()) continue;

      const mapName = dir.name;
      const scriptsPath = join(mapsDir, mapName, 'scripts.inc');

      try {
        const scriptsContent = await readFile(scriptsPath, 'utf-8');

        // Find all TRAINER_ references in the scripts
        const trainerMatches = scriptsContent.matchAll(/TRAINER_(\w+)/g);

        for (const match of trainerMatches) {
          const trainerConstant = match[0]; // Full TRAINER_XXX

          // Format the location name nicely
          let locationName = mapName
            .replace(/_/g, ' ')
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .replace(/\s+/g, ' ');

          // Clean up common patterns
          locationName = locationName
            .replace(/Route (\d+)/, 'Route $1')
            .replace(/Mt /g, 'Mt. ')
            .replace(/City /g, 'City - ')
            .replace(/Town /g, 'Town - ');

          trainerLocationMap.set(trainerConstant, locationName);
        }
      } catch (err) {
        // Skip maps without scripts.inc
        continue;
      }
    }
  } catch (err) {
    console.warn('Could not read maps directory:', err);
  }

  return trainerLocationMap;
}

async function parseTrainers() {
  const projectRoot = join(import.meta.dir, '../..');

  // Build trainer location map from map files
  console.log('Building trainer location map...');
  const trainerLocationMap = await buildTrainerLocationMap(projectRoot);

  // Load Pokemon data for ability lookups
  console.log('Loading Pokemon data...');
  const pokemonDataPath = join(import.meta.dir, '../src/data/pokemon.json');
  const pokemonData: PokemonData[] = JSON.parse(await readFile(pokemonDataPath, 'utf-8'));
  const pokemonMap = new Map<string, PokemonData>();
  pokemonData.forEach(p => {
    pokemonMap.set(p.name.toUpperCase(), p);
  });

  // Read trainer constants
  const opponentsPath = join(projectRoot, 'include/constants/opponents.h');
  const opponentsContent = await readFile(opponentsPath, 'utf-8');

  // Parse trainer ID map
  const trainerIdMap = new Map<string, number>();
  const trainerIdRegex = /#define\s+(TRAINER_\w+)\s+(\d+)/g;
  let match;

  while ((match = trainerIdRegex.exec(opponentsContent)) !== null) {
    const [, constantName, id] = match;
    trainerIdMap.set(constantName, parseInt(id, 10));
  }

  // Read species constants
  const speciesHeaderPath = join(projectRoot, 'include/constants/species.h');
  const speciesHeader = await readFile(speciesHeaderPath, 'utf-8');

  // Parse species name map
  const speciesNameMap = new Map<string, string>();
  const speciesIdRegex = /#define\s+(SPECIES_\w+)\s+(\d+)/g;

  while ((match = speciesIdRegex.exec(speciesHeader)) !== null) {
    const [, constantName] = match;
    if (constantName === 'SPECIES_NONE') continue;
    // Convert SPECIES_PIKACHU to "Pikachu"
    const name = constantName
      .replace('SPECIES_', '')
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
    speciesNameMap.set(constantName.replace('SPECIES_', '').toUpperCase(), name);
  }

  // Read trainers.party file
  const trainersPartyPath = join(projectRoot, 'src/data/trainers.party');
  const trainersPartyContent = await readFile(trainersPartyPath, 'utf-8');

  const trainers: Trainer[] = [];
  const gymLeaders: Trainer[] = [];

  // Split by trainer entries
  const trainerEntries = trainersPartyContent.split(/^===\s+/m).filter(Boolean);

  for (const entry of trainerEntries) {
    const lines = entry.split('\n');
    if (lines.length < 2) continue;

    // First line contains the trainer constant
    const trainerMatch = lines[0].match(/^(TRAINER_\w+)\s+===/);
    if (!trainerMatch) continue;

    const constantName = trainerMatch[1];
    const id = trainerIdMap.get(constantName);
    if (id === undefined) continue;

    // Parse trainer metadata
    let name = '';
    let trainerClass = '';
    let pic = '';
    let gender = '';
    let music = '';
    let items: string[] = [];
    let doubleBattle = false;
    let aiFlags: string[] = [];
    const party: TrainerMon[] = [];

    let i = 1;
    let inPokemon = false;
    let currentMon: Partial<TrainerMon> = {};

    while (i < lines.length) {
      const line = lines[i].trim();
      i++;

      if (!line || line.startsWith('/*') || line.startsWith('*')) continue;

      // Check if this is the start of a new trainer entry
      if (line.startsWith('TRAINER_')) break;

      // Parse trainer metadata
      if (line.startsWith('Name:')) {
        name = line.replace('Name:', '').trim();
      } else if (line.startsWith('Class:')) {
        trainerClass = line.replace('Class:', '').trim();
      } else if (line.startsWith('Pic:')) {
        pic = line.replace('Pic:', '').trim();
      } else if (line.startsWith('Gender:')) {
        gender = line.replace('Gender:', '').trim();
      } else if (line.startsWith('Music:')) {
        music = line.replace('Music:', '').trim();
      } else if (line.startsWith('Items:')) {
        items = line
          .replace('Items:', '')
          .split('/')
          .map(item => item.trim())
          .filter(Boolean);
      } else if (line.startsWith('Double Battle:')) {
        doubleBattle = line.includes('Yes');
      } else if (line.startsWith('AI:')) {
        aiFlags = line
          .replace('AI:', '')
          .split('/')
          .map(flag => flag.trim())
          .filter(Boolean);
      }
      // Parse Pokemon
      else if (line && !line.includes(':') && !line.startsWith('-')) {
        // Save previous Pokemon if exists
        if (inPokemon && currentMon.species) {
          party.push(currentMon as TrainerMon);
        }

        // Start new Pokemon
        inPokemon = true;
        currentMon = { level: 100, moves: [] };

        // Parse species line (may include nickname, gender, held item)
        // Format: [Nickname] (Species) [(M)/(F)] [@ Item]
        const nicknameMatch = line.match(/^([^\(]+)\s*\(/);
        const speciesMatch = line.match(/\(([^\)]+)\)|^([A-Z][a-z]+)/);
        const itemMatch = line.match(/@\s*(.+)/);

        if (nicknameMatch) {
          currentMon.nickname = nicknameMatch[1].trim();
        }

        if (speciesMatch) {
          let speciesStr = speciesMatch[1] || speciesMatch[2];
          speciesStr = speciesStr.replace('SPECIES_', '').trim().toUpperCase();
          currentMon.species = speciesNameMap.get(speciesStr) || speciesStr;
        }

        if (itemMatch) {
          let item = itemMatch[1].trim();
          item = item.replace('ITEM_', '');
          currentMon.heldItem = item
            .split('_')
            .map(word => word.charAt(0) + word.slice(1).toLowerCase())
            .join(' ');
        }
      } else if (line.startsWith('Level:')) {
        currentMon.level = parseInt(line.replace('Level:', '').trim(), 10);
      } else if (line.startsWith('Ability:')) {
        let ability = line.replace('Ability:', '').trim();

        // Check if it's a numeric ability slot (1, 2, or 3)
        const abilitySlot = parseInt(ability, 10);
        if (!isNaN(abilitySlot) && abilitySlot >= 1 && abilitySlot <= 3) {
          // Look up the pokemon's ability at this slot
          if (currentMon.species) {
            const pokemon = pokemonMap.get(currentMon.species.toUpperCase());
            if (pokemon) {
              // Try to get the ability at this slot
              const slotAbility = pokemon.abilities[abilitySlot - 1];
              if (slotAbility) {
                currentMon.ability = slotAbility;
              } else {
                // Fallback: if slot 3 doesn't exist, try slot 2, then slot 1
                currentMon.ability = pokemon.abilities[1] || pokemon.abilities[0] || `Slot ${abilitySlot}`;
              }
            } else {
              currentMon.ability = `Slot ${abilitySlot}`;
            }
          }
        } else {
          // It's an ability name
          ability = ability.replace('ABILITY_', '');
          currentMon.ability = ability
            .split('_')
            .map(word => word.charAt(0) + word.slice(1).toLowerCase())
            .join(' ');
        }
      } else if (line.startsWith('Nature:')) {
        let nature = line.replace('Nature:', '').trim();
        nature = nature.replace('NATURE_', '');
        currentMon.nature = nature.charAt(0) + nature.slice(1).toLowerCase();
      } else if (line.startsWith('Shiny:')) {
        currentMon.shiny = line.includes('Yes');
      } else if (line.startsWith('Ball:')) {
        let ball = line.replace('Ball:', '').trim();
        ball = ball.replace('ITEM_', '').replace('_BALL', ' Ball');
        currentMon.ball = ball
          .split('_')
          .map(word => word.charAt(0) + word.slice(1).toLowerCase())
          .join(' ');
      } else if (line.startsWith('IVs:')) {
        // Parse IVs: 12 HP / 12 Atk / 12 Def / 12 SpA / 12 SpD / 12 Spe
        const ivMatches = line.matchAll(/(\d+)\s+(HP|Atk|Def|SpA|SpD|Spe)/g);
        currentMon.ivs = { hp: 31, attack: 31, defense: 31, spAttack: 31, spDefense: 31, speed: 31 };

        for (const ivMatch of ivMatches) {
          const value = parseInt(ivMatch[1], 10);
          const stat = ivMatch[2];

          if (stat === 'HP') currentMon.ivs.hp = value;
          else if (stat === 'Atk') currentMon.ivs.attack = value;
          else if (stat === 'Def') currentMon.ivs.defense = value;
          else if (stat === 'SpA') currentMon.ivs.spAttack = value;
          else if (stat === 'SpD') currentMon.ivs.spDefense = value;
          else if (stat === 'Spe') currentMon.ivs.speed = value;
        }
      } else if (line.startsWith('EVs:')) {
        // Parse EVs: 252 HP / 128 Spe / 48 Def
        const evMatches = line.matchAll(/(\d+)\s+(HP|Atk|Def|SpA|SpD|Spe)/g);
        currentMon.evs = { hp: 0, attack: 0, defense: 0, spAttack: 0, spDefense: 0, speed: 0 };

        for (const evMatch of evMatches) {
          const value = parseInt(evMatch[1], 10);
          const stat = evMatch[2];

          if (stat === 'HP') currentMon.evs.hp = value;
          else if (stat === 'Atk') currentMon.evs.attack = value;
          else if (stat === 'Def') currentMon.evs.defense = value;
          else if (stat === 'SpA') currentMon.evs.spAttack = value;
          else if (stat === 'SpD') currentMon.evs.spDefense = value;
          else if (stat === 'Spe') currentMon.evs.speed = value;
        }
      } else if (line.startsWith('-')) {
        // Parse move
        let move = line.replace(/^-\s*/, '').trim();
        move = move.replace('MOVE_', '');
        const moveName = move
          .split('_')
          .map(word => word.charAt(0) + word.slice(1).toLowerCase())
          .join(' ');

        if (!currentMon.moves) currentMon.moves = [];
        currentMon.moves.push(moveName);
      }
    }

    // Save last Pokemon
    if (inPokemon && currentMon.species) {
      party.push(currentMon as TrainerMon);
    }

    if (!name || party.length === 0) continue;

    const trainer: Trainer = {
      id,
      constantName,
      name,
      trainerClass,
      pic,
      gender,
      music,
      items: items.length > 0 ? items : undefined,
      doubleBattle,
      aiFlags,
      party,
      location: trainerLocationMap.get(constantName),
    };

    trainers.push(trainer);

    // Check if this is a gym leader
    const isGymLeader = GYM_LEADERS.some(leader => constantName.includes(leader));
    const isEliteFour = ELITE_FOUR.some(e4 => constantName.includes(e4));

    if (isGymLeader || isEliteFour) {
      gymLeaders.push(trainer);
    }
  }

  // Sort trainers by ID
  trainers.sort((a, b) => a.id - b.id);
  gymLeaders.sort((a, b) => a.id - b.id);

  // Write trainers to JSON
  const trainersOutputPath = join(import.meta.dir, '../src/data/trainers.json');
  await writeFile(trainersOutputPath, JSON.stringify(trainers, null, 2));

  // Write gym leaders to JSON
  const gymLeadersOutputPath = join(import.meta.dir, '../src/data/gym-leaders.json');
  await writeFile(gymLeadersOutputPath, JSON.stringify(gymLeaders, null, 2));

  console.log(`✅ Parsed ${trainers.length} trainers and saved to ${trainersOutputPath}`);
  console.log(`✅ Parsed ${gymLeaders.length} gym leaders/Elite Four and saved to ${gymLeadersOutputPath}`);
}

// Run the parser
parseTrainers().catch(console.error);