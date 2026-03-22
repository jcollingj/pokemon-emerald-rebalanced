---
name: Delcatty
dex_number: 301
status: implemented
ability: Normalize
role: Normalize Special Sweeper
design_doc: docs/game-design/skitty.md
---

# Delcatty

**Build Identity:** A special sweeper that uses Normalize to convert every move into Normal-type STAB, achieving an effective **1.8× multiplier on every attack** — Shadow Ball, Thunderbolt, Hyper Voice, anything.

## Stats (BST: 490)

| Stat | Vanilla | Rebalanced |
|------|---------|------------|
| HP | 70 | 75 |
| ATK | 65 | 75 |
| DEF | 65 | 70 |
| SPA | 55 | 100 |
| SPD | 55 | 75 |
| SPE | 90 | 95 |
| **BST** | **380** | **490** |

## Abilities
- **Normalize** (primary) — All moves become Normal type + 1.2× boost. With STAB = 1.8× effective on everything.
- Cute Charm (secondary)
- Wonder Skin (hidden)

## Learnset

| Level | Move | Note |
|-------|------|------|
| 1 | Tackle | Inherited |
| 1 | Growl | Inherited |
| 1 | Return | Inherited |
| 1 | Sing | Inherited |
| **16** | **Hyper Voice** | Main STAB |
| **21** | **Calm Mind** | Setup |
| 27 | Shadow Ball | Coverage → Normal STAB |
| 33 | Wish | Recovery |
| 42 | Thunderbolt | Coverage → Normal STAB |
| 48 | Double-Edge | Nuke option |

## Core Strategy

Sing (sleep) → Calm Mind → Hyper Voice sweep. Every coverage move becomes 1.8× STAB. Ghost types are the hard counter (Normal immunity via Normalize).

## Ideal Items

1. **Silk Scarf** — Normal boost stacks → ~2.16× effective total
2. **Choice Specs** — Immediate wallbreaking without setup
3. **Leftovers** — Wish + Calm Mind sustainability

## Evolution
Evolves from Skitty at **Level 16** (Moon Stone requirement removed)
