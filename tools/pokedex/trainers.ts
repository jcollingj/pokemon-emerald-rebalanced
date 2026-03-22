#!/usr/bin/env bun
/**
 * trainers - CLI tool for tracking trainer design progress.
 *
 * Usage:
 *   bun tools/pokedex/trainers.ts stats [--segment=N]
 *   bun tools/pokedex/trainers.ts list [--segment=N] [--status=STATUS]
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { join, resolve, dirname } from "path";
import { parseArgs } from "util";

const REPO_ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..", "..");
const TRAINERS_DIR = join(REPO_ROOT, "docs", "game-design", "trainers");

interface TrainerEntry {
  name: string;
  trainerClass: string;
  route: string;
  status: string;
  pokemonCount: number;
  mandatory: boolean;
}

function parseTrainerFile(path: string): { segment: number; name: string; status: string; trainers: TrainerEntry[] } {
  const content = readFileSync(path, "utf-8");
  const lines = content.split("\n");

  // Parse frontmatter
  let segment = 0;
  let fileStatus = "not_started";
  let fileName = "";
  let inFrontmatter = false;

  for (const line of lines) {
    if (line.trim() === "---") {
      inFrontmatter = !inFrontmatter;
      continue;
    }
    if (inFrontmatter) {
      const match = line.match(/^(\w+):\s*(.+)/);
      if (match) {
        if (match[1] === "segment") segment = parseInt(match[2]);
        if (match[1] === "status") fileStatus = match[2].trim();
        if (match[1] === "name") fileName = match[2].trim();
      }
    }
  }

  // Parse trainers from markdown
  const trainers: TrainerEntry[] = [];
  let currentRoute = "";
  let currentTrainer: Partial<TrainerEntry> | null = null;

  for (const line of lines) {
    // Route headers
    const routeMatch = line.match(/^## (.+)/);
    if (routeMatch && !routeMatch[1].startsWith("Design")) {
      currentRoute = routeMatch[1].trim();
    }

    // Trainer headers
    const trainerMatch = line.match(/^### (.+?) \((.+?)\)/);
    if (trainerMatch) {
      if (currentTrainer?.name) {
        trainers.push(currentTrainer as TrainerEntry);
      }
      const mandatory = line.includes("MANDATORY") || line.includes("Gym Trainer");
      currentTrainer = {
        name: trainerMatch[1].trim(),
        trainerClass: trainerMatch[2].trim(),
        route: currentRoute,
        status: "not_started",
        pokemonCount: 0,
        mandatory,
      };
    }

    // Status line
    if (line.startsWith("**Status:**") && currentTrainer) {
      currentTrainer.status = line.replace("**Status:**", "").trim();
    }

    // Count pokemon in tables (lines starting with |, not header/divider)
    if (line.match(/^\|[^-]/) && !line.includes("Pokemon") && currentTrainer && line.includes("|")) {
      const cells = line.split("|").filter(c => c.trim());
      if (cells.length >= 2 && cells[0].trim() !== "" && !cells[0].includes("---")) {
        currentTrainer.pokemonCount = (currentTrainer.pokemonCount || 0) + 1;
      }
    }
  }

  if (currentTrainer?.name) {
    trainers.push(currentTrainer as TrainerEntry);
  }

  return { segment, name: fileName, status: fileStatus, trainers };
}

function cmdStats(segmentFilter?: number): void {
  if (!existsSync(TRAINERS_DIR)) {
    console.log("No trainers directory found.");
    return;
  }

  const files = readdirSync(TRAINERS_DIR).filter(f => f.endsWith(".md")).sort();
  let allTrainers: TrainerEntry[] = [];

  for (const file of files) {
    const parsed = parseTrainerFile(join(TRAINERS_DIR, file));
    if (segmentFilter !== undefined && parsed.segment !== segmentFilter) continue;

    console.log(`\n=== Segment ${parsed.segment}: ${parsed.name} ===`);
    allTrainers.push(...parsed.trainers);
  }

  const counts = new Map<string, number>();
  let totalPokemon = 0;
  let needsExpansion = 0;

  for (const t of allTrainers) {
    counts.set(t.status, (counts.get(t.status) ?? 0) + 1);
    totalPokemon += t.pokemonCount;
    if (t.pokemonCount < 3) needsExpansion++;
  }

  console.log("\nTrainer Design Status:");
  console.log("─".repeat(35));

  const sorted = [...counts.entries()].sort(([, a], [, b]) => b - a);
  for (const [s, count] of sorted) {
    console.log(`  ${s.padEnd(20)} ${String(count).padStart(4)}`);
  }

  console.log("─".repeat(35));
  console.log(`  ${"Total trainers".padEnd(20)} ${String(allTrainers.length).padStart(4)}`);
  console.log(`  ${"Total Pokemon".padEnd(20)} ${String(totalPokemon).padStart(4)}`);
  console.log(`  ${"Need expansion (<3)".padEnd(20)} ${String(needsExpansion).padStart(4)}`);
}

function cmdList(segmentFilter?: number, statusFilter?: string): void {
  if (!existsSync(TRAINERS_DIR)) {
    console.log("No trainers directory found.");
    return;
  }

  const files = readdirSync(TRAINERS_DIR).filter(f => f.endsWith(".md")).sort();

  for (const file of files) {
    const parsed = parseTrainerFile(join(TRAINERS_DIR, file));
    if (segmentFilter !== undefined && parsed.segment !== segmentFilter) continue;

    const header = [
      "Route".padEnd(22),
      "Trainer".padEnd(18),
      "Class".padEnd(14),
      "#Mon".padStart(4),
      "Status".padEnd(15),
      "Type".padEnd(10),
    ].join("  ");

    console.log(`\n=== Segment ${parsed.segment}: ${parsed.name} ===`);
    console.log(header);
    console.log("─".repeat(90));

    for (const t of parsed.trainers) {
      if (statusFilter && t.status !== statusFilter) continue;
      const row = [
        t.route.padEnd(22),
        t.name.padEnd(18),
        t.trainerClass.padEnd(14),
        String(t.pokemonCount).padStart(4),
        t.status.padEnd(15),
        (t.mandatory ? "MANDATORY" : "optional").padEnd(10),
      ].join("  ");
      console.log(row);
    }
  }
}

// --- Main ---
function main(): void {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "stats": {
      const { values } = parseArgs({
        args: args.slice(1),
        options: {
          segment: { type: "string", short: "s" },
        },
        allowPositionals: false,
      });
      cmdStats(values.segment ? parseInt(values.segment) : undefined);
      break;
    }
    case "list": {
      const { values } = parseArgs({
        args: args.slice(1),
        options: {
          segment: { type: "string", short: "s" },
          status: { type: "string" },
        },
        allowPositionals: false,
      });
      cmdList(
        values.segment ? parseInt(values.segment) : undefined,
        values.status,
      );
      break;
    }
    default:
      console.log(`trainers - Track trainer design progress

Usage:
  trainers stats [--segment=N]
  trainers list [--segment=N] [--status=STATUS]`);
  }
}

main();
