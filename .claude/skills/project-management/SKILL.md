---
name: project-management
description: Manage project tasks via GitHub Issues for Pokemon Emerald Rebalanced. Use when creating issues, tracking Pokemon designs, assigning implementation work, or managing the project backlog. This skill should be updated directly when the user gives process feedback.
---

# Project Management

Manage work for Pokemon Emerald Rebalanced using GitHub Issues on `jcollingj/pokemon-emerald-rebalanced`.

## My Role

I am the **project manager**. My job is to:

1. **Spec out work** — Create well-defined GitHub issues with full design specs, implementation requirements, and acceptance criteria
2. **Delegate to remote Claude** — Comment `@claude` on issues to trigger a remote Claude instance to implement the work
3. **Review output** — Monitor PRs created by remote Claude, review code quality, check against design specs
4. **Get user approval** — Present the work to Jacob for feedback before merging
5. **Merge when approved** — Close the loop by merging PRs and updating design card statuses

### Workflow

```
Spec issue → @claude comment → Remote Claude works → PR created → I review → Jacob approves → Merge
```

### What I should NOT do

- Implement code changes directly when remote Claude can handle it
- Merge without Jacob's approval
- Skip the review step

## Learning

**When Jacob gives feedback on this process, I should update THIS skill file directly.** This is my primary form of learning — process feedback gets encoded into the skill so future conversations follow the improved process.

## Issue Conventions

### Pokemon Design Issues

**Title format:** `pokedesign: <Pokemon Name> #<Dex Number>`

Examples:
- `pokedesign: Beedrill #015`
- `pokedesign: Poliwag #060`
- `pokedesign: Surskit #283`

**Issue body:** Include the full design notes — build identity, stat changes, ability changes, learnset, strategy, team synergy, and matchup analysis. Use the design doc format from `docs/game-design/` as a guide.

**Labels:** Add a `pokedesign` label.

### Implementation Issues

**Title format:** `implement: <Description>`

For non-Pokemon tasks (ability implementation, encounter table changes, move buffs, etc).

### Lifecycle

1. **Open** — Design is in progress or under discussion. Use issue comments to iterate.
2. **Ready to Implement** — Design is finalized. I comment `@claude` with implementation instructions to trigger remote Claude.
3. **PR Open** — Remote Claude has created a PR. I review it against the spec and present to Jacob.
4. **Merged** — Jacob approved, PR merged, issue closed. Update design card status to `implemented`.

### The @claude Comment

When commenting `@claude` to trigger implementation, the comment should include:

```markdown
@claude

## Task
<Clear description of what to implement>

## Files to Change
- `src/data/pokemon/species_info/gen_X_families.h` — Update stats and abilities
- `src/data/pokemon/level_up_learnsets/gen_X.h` — Update learnset
- `pokemon-designs/XXX-name.md` — Update status to implemented

## Design Spec
<Link to design doc or inline the key details>

## Acceptance Criteria
- [ ] Stats match design doc
- [ ] Ability changed to X
- [ ] Learnset follows the standard schedule
- [ ] Design card status updated to implemented
- [ ] Builds successfully (`make -j$(nproc)`)
```

### Creating Issues

```bash
gh issue create \
  --repo jcollingj/pokemon-emerald-rebalanced \
  --title "pokedesign: <Pokemon Name> #<Dex Number>" \
  --label pokedesign \
  --body "$(cat <<'EOF'
## Design Philosophy
<1-2 sentences on build identity>

## Ability Changes
- Vanilla: ...
- Rebalanced: ...

## Stat Changes
| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|

## Learnset
| Level | Move | Type | Purpose |
|-------|------|------|---------|

## Core Strategy
<How the build plays>

## Ideal Items
1. ...
2. ...
3. ...

## Acceptance Criteria
- [ ] Design approved by Jacob
- [ ] Implementation PR created
- [ ] Tests pass
- [ ] Design card updated
EOF
)"
```

### Querying Issues

```bash
# List all Pokemon design issues
gh issue list --repo jcollingj/pokemon-emerald-rebalanced --label pokedesign

# List open design issues
gh issue list --repo jcollingj/pokemon-emerald-rebalanced --label pokedesign --state open

# Check PRs from remote Claude
gh pr list --repo jcollingj/pokemon-emerald-rebalanced

# Review a specific PR
gh pr view <number> --repo jcollingj/pokemon-emerald-rebalanced
gh pr diff <number> --repo jcollingj/pokemon-emerald-rebalanced
```

## Development Approach

**Test-Driven Development (TDD):**
- Write failing tests first, then implement to make them pass
- Prioritize testing logic upfront before writing implementation code
- For tooling and scripts, use bun with `bun:test`

**Scope:** Gen 1-3 Pokemon only (#1-386)
