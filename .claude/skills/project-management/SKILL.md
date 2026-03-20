---
name: project-management
description: Manage project tasks via GitHub Issues for Pokemon Emerald Rebalanced. Use when creating issues, tracking Pokemon designs, assigning implementation work, or managing the project backlog.
---

# Project Management

Manage work for Pokemon Emerald Rebalanced using GitHub Issues on `jcollingj/pokemon-emerald-rebalanced`.

## Issue Conventions

### Pokemon Design Issues

**Title format:** `pokedesign: <Pokemon Name> #<Dex Number>`

Examples:
- `pokedesign: Beedrill #015`
- `pokedesign: Poliwag #060`
- `pokedesign: Surskit #283`

**Issue body:** Include the full design notes — build identity, stat changes, ability changes, learnset, strategy, team synergy, and matchup analysis. Use the design doc format from `docs/game-design/` as a guide.

**Labels:** Add a `pokedesign` label if available.

### Lifecycle

1. **Open** — Design is in progress or under discussion. Use the issue comments to iterate on the design.
2. **Ready to Implement** — When the design is finalized, add a comment with exactly `@claude` to signal it's ready for code implementation.
3. **Closed** — Implementation is complete and verified.

### Creating a Pokemon Design Issue

```bash
gh issue create \
  --title "pokedesign: <Pokemon Name> #<Dex Number>" \
  --body "$(cat <<'EOF'
## Design Philosophy
<1-2 sentences on build identity>

## Type Changes
- Vanilla: ...
- Rebalanced: ...

## Stat Changes
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP   |         |            |        |
| Atk  |         |            |        |
| Def  |         |            |        |
| SpA  |         |            |        |
| SpD  |         |            |        |
| Spe  |         |            |        |

## Ability Changes
- Vanilla: ...
- Rebalanced: ...
- Rationale: ...

## Learnset
| Level | Move | Type | Purpose |
|-------|------|------|---------|
|       |      |      |         |

## Core Strategy
<How the build plays>

## Team Synergy
<What teammates complement this Pokemon>

## Matchup Analysis
<Key favorable and unfavorable matchups>
EOF
)"
```

### Assigning for Implementation

When a design is finalized and ready to be implemented in code, add a comment to the issue with exactly:

```
@claude
```

This signals that the design is approved and ready for code changes.

### Querying Issues

```bash
# List all Pokemon design issues
gh issue list --search "pokedesign: in:title"

# List open design issues
gh issue list --search "pokedesign: in:title is:open"

# List issues ready for implementation (assigned to claude)
gh issue list --search "pokedesign: in:title @claude in:comments"
```

## Development Approach

**Test-Driven Development (TDD):**
- Write failing tests first, then implement to make them pass
- Prioritize testing logic upfront before writing implementation code
- For tooling and scripts, use Python's `unittest` (no external dependencies)
