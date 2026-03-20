import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { mkdtempSync, writeFileSync, rmSync, existsSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

import {
  parseSpecies,
  cardFilename,
  parseCard,
  writeCard,
  listCards,
  speciesToDisplayName,
  isAlternateForm,
  SPECIES_H,
  DESIGNS_DIR,
} from "./pokedex";

import type { PokemonCard, WriteCardData, DesignStatus } from "./pokedex";

// --- Species Parser ---

describe("parseSpecies", () => {
  test("returns a Map", () => {
    const species = parseSpecies(SPECIES_H);
    expect(species).toBeInstanceOf(Map);
  });

  test("has Bulbasaur at #1", () => {
    const species = parseSpecies(SPECIES_H);
    expect(species.get(1)).toBe("Bulbasaur");
  });

  test("has Pikachu at #25", () => {
    const species = parseSpecies(SPECIES_H);
    expect(species.get(25)).toBe("Pikachu");
  });

  test("excludes SPECIES_NONE (#0)", () => {
    const species = parseSpecies(SPECIES_H);
    expect(species.has(0)).toBe(false);
  });

  test("excludes alternate forms (Mega, Totem, etc.)", () => {
    const species = parseSpecies(SPECIES_H);
    for (const name of species.values()) {
      expect(name).not.toContain("Mega ");
      expect(name).not.toContain("Totem");
    }
  });
});

// --- Display Name ---

describe("speciesToDisplayName", () => {
  test("converts SPECIES_BULBASAUR to Bulbasaur", () => {
    expect(speciesToDisplayName("SPECIES_BULBASAUR")).toBe("Bulbasaur");
  });

  test("handles Nidoran F", () => {
    expect(speciesToDisplayName("SPECIES_NIDORAN_F")).toBe("Nidoran F");
  });

  test("handles special names", () => {
    expect(speciesToDisplayName("SPECIES_MR_MIME")).toBe("Mr. Mime");
    expect(speciesToDisplayName("SPECIES_HO_OH")).toBe("Ho-Oh");
    expect(speciesToDisplayName("SPECIES_PORYGON_Z")).toBe("Porygon-Z");
  });
});

// --- Alternate Form Detection ---

describe("isAlternateForm", () => {
  test("detects mega forms", () => {
    expect(isAlternateForm("SPECIES_CHARIZARD_MEGA_X")).toBe(true);
  });

  test("detects alolan forms", () => {
    expect(isAlternateForm("SPECIES_RATTATA_ALOLA")).toBe(true);
  });

  test("does not flag base forms", () => {
    expect(isAlternateForm("SPECIES_PIKACHU")).toBe(false);
    expect(isAlternateForm("SPECIES_BULBASAUR")).toBe(false);
  });
});

// --- Card Filename ---

describe("cardFilename", () => {
  test("generates zero-padded filename", () => {
    expect(cardFilename(1, "Bulbasaur")).toBe("001-bulbasaur.md");
    expect(cardFilename(25, "Pikachu")).toBe("025-pikachu.md");
    expect(cardFilename(248, "Tyranitar")).toBe("248-tyranitar.md");
  });

  test("handles special characters", () => {
    expect(cardFilename(29, "Nidoran F")).toBe("029-nidoran-f.md");
  });
});

// --- Card Parsing ---

describe("parseCard", () => {
  let tmpDir: string;

  beforeAll(() => {
    tmpDir = mkdtempSync(join(tmpdir(), "pokedex-test-"));
  });

  afterAll(() => {
    rmSync(tmpDir, { recursive: true });
  });

  test("parses YAML frontmatter", () => {
    const cardPath = join(tmpDir, "025-pikachu.md");
    writeFileSync(
      cardPath,
      "---\nname: Pikachu\ndex_number: 25\nstatus: implemented\nideal_items: Light Ball, Choice Specs, Focus Sash\n---\n# Pikachu\n"
    );

    const card = parseCard(cardPath);
    expect(card).not.toBeNull();
    expect(card!.name).toBe("Pikachu");
    expect(card!.dex_number).toBe("25");
    expect(card!.status).toBe("implemented");
    expect(card!.ideal_items).toBe("Light Ball, Choice Specs, Focus Sash");
  });

  test("returns null for files without frontmatter", () => {
    const cardPath = join(tmpDir, "no-frontmatter.md");
    writeFileSync(cardPath, "# Just a heading\n");
    expect(parseCard(cardPath)).toBeNull();
  });
});

// --- Write Card ---

describe("writeCard", () => {
  let tmpDir: string;

  beforeAll(() => {
    tmpDir = mkdtempSync(join(tmpdir(), "pokedex-write-"));
  });

  afterAll(() => {
    rmSync(tmpDir, { recursive: true });
  });

  test("writes card with frontmatter", () => {
    const cardPath = join(tmpDir, "001-bulbasaur.md");
    const data: WriteCardData = {
      name: "Bulbasaur",
      dex_number: 1,
      status: "not_started",
    };
    writeCard(cardPath, data);

    expect(existsSync(cardPath)).toBe(true);
    const content = Bun.file(cardPath).text();
    expect(content).resolves.toContain("name: Bulbasaur");
    expect(content).resolves.toContain("dex_number: 1");
    expect(content).resolves.toContain("status: not_started");
  });

  test("writes card with ideal_items", () => {
    const cardPath = join(tmpDir, "025-pikachu.md");
    const data: WriteCardData = {
      name: "Pikachu",
      dex_number: 25,
      status: "implemented",
      ability: "Transistor",
      ideal_items: "Light Ball, Choice Specs, Focus Sash",
    };
    writeCard(cardPath, data);

    const content = Bun.file(cardPath).text();
    expect(content).resolves.toContain("ideal_items: Light Ball, Choice Specs, Focus Sash");
  });
});

// --- List Cards ---

describe("listCards", () => {
  let tmpDir: string;

  beforeAll(() => {
    tmpDir = mkdtempSync(join(tmpdir(), "pokedex-list-"));
    writeCard(join(tmpDir, "001-bulbasaur.md"), {
      name: "Bulbasaur",
      dex_number: 1,
      status: "not_started",
    });
    writeCard(join(tmpDir, "025-pikachu.md"), {
      name: "Pikachu",
      dex_number: 25,
      status: "implemented",
      ideal_items: "Light Ball, Choice Specs, Focus Sash",
    });
    writeCard(join(tmpDir, "007-squirtle.md"), {
      name: "Squirtle",
      dex_number: 7,
      status: "designed",
    });
  });

  afterAll(() => {
    rmSync(tmpDir, { recursive: true });
  });

  test("lists all cards", () => {
    const cards = listCards(tmpDir);
    expect(cards).toHaveLength(3);
  });

  test("filters by status", () => {
    const cards = listCards(tmpDir, { status: "implemented" });
    expect(cards).toHaveLength(1);
    expect(cards[0].name).toBe("Pikachu");
  });

  test("sorts by dex number", () => {
    const cards = listCards(tmpDir);
    const numbers = cards.map((c) => parseInt(c.dex_number));
    expect(numbers).toEqual([1, 7, 25]);
  });

  test("searches by name", () => {
    const cards = listCards(tmpDir, { search: "pika" });
    expect(cards).toHaveLength(1);
    expect(cards[0].name).toBe("Pikachu");
  });

  test("includes ideal_items in results", () => {
    const cards = listCards(tmpDir, { search: "pikachu" });
    expect(cards[0].ideal_items).toBe("Light Ball, Choice Specs, Focus Sash");
  });
});

// --- Integration: All Cards Exist ---

describe("all cards exist", () => {
  test("every species in species.h has a design card", () => {
    const species = parseSpecies(SPECIES_H);
    const missing: string[] = [];

    for (const [dexNum, name] of [...species.entries()].sort(([a], [b]) => a - b)) {
      const fname = cardFilename(dexNum, name);
      const path = join(DESIGNS_DIR, fname);
      if (!existsSync(path)) {
        missing.push(`#${String(dexNum).padStart(3, "0")} ${name}`);
      }
    }

    if (missing.length > 0) {
      throw new Error(
        `${missing.length} Pokemon missing design cards. First 10: ${missing.slice(0, 10).join(", ")}`
      );
    }
  });
});
