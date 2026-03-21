#!/usr/bin/env bun
/**
 * pokedex - CLI tool for managing Pokemon design cards.
 *
 * Usage:
 *   bun tools/pokedex/pokedex.ts list [--status=STATUS] [--search=NAME] [--all]
 *   bun tools/pokedex/pokedex.ts show <name_or_number>
 *   bun tools/pokedex/pokedex.ts init
 *   bun tools/pokedex/pokedex.ts stats [--all]
 *
 * By default, only Gen 1-3 Pokemon (#1-386) are shown. Use --all for the full dex.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { join, resolve, basename, dirname } from "path";
import { parseArgs } from "util";

// --- Types ---

export type DesignStatus = "not_started" | "designed" | "implemented" | "in_progress";

export interface PokemonCard {
  name: string;
  dex_number: string;
  status: DesignStatus;
  ability?: string;
  role?: string;
  ideal_items?: string;
  design_doc?: string;
  evolution_line?: string;
  [key: string]: string | undefined;
}

export interface WriteCardData {
  name: string;
  dex_number: number | string;
  status: DesignStatus;
  ability?: string;
  role?: string;
  ideal_items?: string;
  design_doc?: string;
  evolution_line?: string;
}

export interface ListOptions {
  status?: DesignStatus;
  search?: string;
  all?: boolean;
}

const MAX_GEN3_DEX = 386;

// --- Constants ---

const REPO_ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..", "..");
export const SPECIES_H = join(REPO_ROOT, "include", "constants", "species.h");
export const DESIGNS_DIR = join(REPO_ROOT, "pokemon-designs");

const ALTERNATE_FORM_PATTERNS: string[] = [
  "_MEGA", "_ALOLA", "_GALAR", "_HISUI", "_PALDEA",
  "_TOTEM", "_GIGANTAMAX", "_BUSTED", "_STARTER",
  "_PRIMAL", "_ORIGIN", "_THERIAN", "_BLACK_", "_WHITE_",
  "_RESOLUTE", "_PIROUETTE", "_COSPLAY", "_ROCK_STAR",
  "_BELLE", "_POP_STAR", "_PHD", "_LIBRE",
  "_DOUSE", "_SHOCK", "_BURN", "_CHILL", "_FAN", "_MOW",
  "_HEAT", "_WASH", "_FROST", "_SPEED", "_DEFENSE", "_ATTACK",
  "_SANDY", "_TRASH", "_SUNSHINE", "_RAINY", "_SNOWY",
  "_ZEN", "_BLADE", "_SMALL", "_LARGE", "_SUPER",
  "_UNBOUND", "_MIDNIGHT", "_DUSK", "_SCHOOL",
  "_SENSU", "_PAU", "_POMPOM",
  "_COMPLETE", "_CORE", "_TEN_PERCENT",
  "_CROWNED", "_ETERNAMAX", "_NOICE", "_HANGRY",
  "_GULPING", "_GORGING", "_LOW_KEY", "_RAPID_STRIKE",
  "_ICE_RIDER", "_SHADOW_RIDER",
  "_BLOODMOON", "_CORNERSTONE", "_WELLSPRING", "_HEARTHFLAME",
  "_STELLAR", "_TERASTAL", "_COMBAT", "_BLAZE", "_AQUA",
];

const SKIP_SPECIES = new Set(["NONE", "EGG"]);

const SPECIAL_NAMES: Record<string, string> = {
  MR_MIME: "Mr. Mime",
  MR_RIME: "Mr. Rime",
  MIME_JR: "Mime Jr.",
  TYPE_NULL: "Type: Null",
  JANGMO_O: "Jangmo-o",
  HAKAMO_O: "Hakamo-o",
  KOMMO_O: "Kommo-o",
  TAPU_KOKO: "Tapu Koko",
  TAPU_LELE: "Tapu Lele",
  TAPU_BULU: "Tapu Bulu",
  TAPU_FINI: "Tapu Fini",
  HO_OH: "Ho-Oh",
  PORYGON_Z: "Porygon-Z",
  PORYGON2: "Porygon2",
};

// --- Core Functions ---

export function speciesToDisplayName(rawName: string): string {
  const name = rawName.replace("SPECIES_", "");

  if (name === "NIDORAN_F") return "Nidoran F";
  if (name === "NIDORAN_M") return "Nidoran M";
  if (name in SPECIAL_NAMES) return SPECIAL_NAMES[name];

  return name
    .split("_")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

export function isAlternateForm(rawName: string): boolean {
  const upper = rawName.toUpperCase();
  return ALTERNATE_FORM_PATTERNS.some((pattern) => upper.includes(pattern));
}

export function parseSpecies(speciesHPath: string): Map<number, string> {
  const species = new Map<number, string>();
  const content = readFileSync(speciesHPath, "utf-8");
  const pattern = /^#define\s+(SPECIES_\w+)\s+(\d+)\s*$/gm;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(content)) !== null) {
    const rawName = match[1];
    const dexNum = parseInt(match[2], 10);

    const short = rawName.replace("SPECIES_", "");
    if (SKIP_SPECIES.has(short) || dexNum === 0) continue;
    if (isAlternateForm(rawName)) continue;

    species.set(dexNum, speciesToDisplayName(rawName));
  }

  return species;
}

export function cardFilename(dexNumber: number, name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[.'':]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${String(dexNumber).padStart(3, "0")}-${slug}.md`;
}

export function parseCard(path: string): PokemonCard | null {
  const content = readFileSync(path, "utf-8");
  const lines = content.split("\n");

  if (!lines[0] || lines[0].trim() !== "---") return null;

  const card: Record<string, string> = {};
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") break;
    const colonIdx = lines[i].indexOf(":");
    if (colonIdx !== -1) {
      const key = lines[i].slice(0, colonIdx).trim();
      const value = lines[i].slice(colonIdx + 1).trim();
      card[key] = value;
    }
  }

  if (!card.name || !card.dex_number) return null;
  return card as unknown as PokemonCard;
}

export function writeCard(path: string, data: WriteCardData): void {
  const lines: string[] = ["---"];
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      lines.push(`${key}: ${value}`);
    }
  }
  lines.push("---");
  lines.push("");
  lines.push(`# ${data.name}`);
  lines.push("");

  writeFileSync(path, lines.join("\n"));
}

export function listCards(designsDir: string, options: ListOptions = {}): PokemonCard[] {
  const { status, search, all } = options;

  if (!existsSync(designsDir)) return [];

  const files = readdirSync(designsDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  const cards: PokemonCard[] = [];

  for (const file of files) {
    const card = parseCard(join(designsDir, file));
    if (!card) continue;

    const dexNum = parseInt(card.dex_number);
    if (!all && dexNum > MAX_GEN3_DEX) continue;

    if (status && card.status !== status) continue;
    if (search && !card.name.toLowerCase().includes(search.toLowerCase())) continue;

    cards.push(card);
  }

  cards.sort((a, b) => parseInt(a.dex_number) - parseInt(b.dex_number));
  return cards;
}

// --- CLI Commands ---

function cmdList(status?: string, search?: string, all?: boolean): void {
  const cards = listCards(DESIGNS_DIR, {
    status: status as DesignStatus | undefined,
    search,
    all,
  });

  if (cards.length === 0) {
    console.log("No Pokemon found matching criteria.");
    return;
  }

  const header = [
    "#".padStart(4),
    "Name".padEnd(20),
    "Status".padEnd(15),
    "Ability".padEnd(20),
    "Role".padEnd(20),
    "Items".padEnd(30),
  ].join("  ");

  const divider = [
    "─".repeat(4),
    "─".repeat(20),
    "─".repeat(15),
    "─".repeat(20),
    "─".repeat(20),
    "─".repeat(30),
  ].join("  ");

  console.log(header);
  console.log(divider);

  for (const c of cards) {
    const row = [
      (c.dex_number ?? "?").padStart(4),
      (c.name ?? "?").padEnd(20),
      (c.status ?? "?").padEnd(15),
      (c.ability ?? "-").padEnd(20),
      (c.role ?? "-").padEnd(20),
      (c.ideal_items ?? "-").padEnd(30),
    ].join("  ");
    console.log(row);
  }

  console.log(`\nTotal: ${cards.length}`);
}

function cmdShow(query: string): void {
  const q = query.toLowerCase();

  if (!existsSync(DESIGNS_DIR)) {
    console.log("No designs directory found.");
    return;
  }

  const files = readdirSync(DESIGNS_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();

  for (const file of files) {
    const path = join(DESIGNS_DIR, file);
    const card = parseCard(path);
    if (!card) continue;

    if (
      q === card.dex_number ||
      q === card.name.toLowerCase() ||
      file.toLowerCase().includes(q)
    ) {
      console.log(readFileSync(path, "utf-8"));
      return;
    }
  }

  console.log(`No Pokemon found matching '${query}'`);
}

function cmdInit(): void {
  mkdirSync(DESIGNS_DIR, { recursive: true });
  const species = parseSpecies(SPECIES_H);

  let created = 0;
  let skipped = 0;

  const sorted = [...species.entries()].sort(([a], [b]) => a - b);
  for (const [dexNum, name] of sorted) {
    const fname = cardFilename(dexNum, name);
    const path = join(DESIGNS_DIR, fname);

    if (existsSync(path)) {
      skipped++;
      continue;
    }

    writeCard(path, {
      name,
      dex_number: dexNum,
      status: "not_started",
    });
    created++;
  }

  console.log(`Created ${created} cards, skipped ${skipped} existing.`);
}

function cmdStats(all?: boolean): void {
  const cards = listCards(DESIGNS_DIR, { all });
  const counts = new Map<string, number>();

  for (const c of cards) {
    const s = c.status ?? "unknown";
    counts.set(s, (counts.get(s) ?? 0) + 1);
  }

  console.log("Pokemon Design Status:");
  console.log("─".repeat(30));

  const sorted = [...counts.entries()].sort(([, a], [, b]) => b - a);
  for (const [status, count] of sorted) {
    console.log(`  ${status.padEnd(20)} ${String(count).padStart(4)}`);
  }

  console.log("─".repeat(30));
  console.log(`  ${"Total".padEnd(20)} ${String(cards.length).padStart(4)}`);
}

// --- Main ---

function main(): void {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "list": {
      const { values } = parseArgs({
        args: args.slice(1),
        options: {
          status: { type: "string", short: "s" },
          search: { type: "string", short: "q" },
          all: { type: "boolean", default: false },
        },
        allowPositionals: false,
      });
      cmdList(values.status, values.search, values.all);
      break;
    }
    case "show": {
      const query = args[1];
      if (!query) {
        console.log("Usage: pokedex show <name_or_number>");
        process.exit(1);
      }
      cmdShow(query);
      break;
    }
    case "init":
      cmdInit();
      break;
    case "stats": {
      const { values: statsValues } = parseArgs({
        args: args.slice(1),
        options: {
          all: { type: "boolean", default: false },
        },
        allowPositionals: false,
      });
      cmdStats(statsValues.all);
      break;
    }
    default:
      console.log(`pokedex - Manage Pokemon design cards

Usage:
  pokedex list [--status=STATUS] [--search=NAME]
  pokedex show <name_or_number>
  pokedex init
  pokedex stats`);
  }
}

main();
