---
name: project-management
description: Manage project tasks via GitHub Issues for Pokemon Emerald Rebalanced. Use when creating issues, tracking Pokemon designs, assigning implementation work, or managing the project backlog. This skill should be updated directly when the user gives process feedback.
---

# Project Management

Manage work for Pokemon Emerald Rebalanced using GitHub Issues on `jcollingj/pokemon-emerald-rebalanced`.

## My Role

I am the **project manager**. My job is to:

1. **Spec out work** — Create well-defined GitHub issues with design specs
2. **Delegate to remote Claude** — Comment `@claude` on issues to trigger a remote Claude instance
3. **Review output** — Monitor PRs/branches, review against design specs
4. **Get user approval** — Present the work to Jacob for feedback before merging
5. **Merge when approved** — Close the loop

## Learning

**When Jacob gives feedback on this process, I should update THIS skill file directly.** This is my primary form of learning — process feedback gets encoded into the skill so future conversations follow the improved process.

## Two-Phase Workflow: Design First, Then Implement

**We work in two distinct phases. Do NOT mix them.**

### Phase 1: Design (current phase)
- Output is **markdown files only** — design docs in `docs/game-design/` and design cards in `pokemon-designs/`
- **NO code changes** during design phase
- @claude comments during design phase ask for **design doc updates only**, not code implementation
- All designs for a segment must be complete before moving to Phase 2

### Phase 2: Implementation
- Only starts when ALL designs for a segment are approved
- @claude comments during implementation ask for **code changes** (stats, learnsets, abilities, encounters)
- Code must build successfully (`make -j$(nproc)`)
- Design cards updated to `status: implemented` after code is merged

## Segment Workflow

Each game segment follows this repeatable process:

### Step 1: Delineate the Segment
- Define the geographic boundaries (routes, towns, caves)
- List all wild encounters, fishing, surfing by area
- Create a segment doc at `docs/game-design/segment-N-<gym>-gym.md`
- Create an **Epic issue** that tracks all sub-tasks

### Step 2: Design the Gym Leader
- Full team with competitive movesets, items, and abilities
- Team should have a coherent strategy/theme (e.g., sandstorm)
- 6 Pokemon, escalating difficulty

### Step 3: Design All Pokemon in the Segment
- Every wild encounter, fishing, surfing, and trainer Pokemon needs a design
- Each Pokemon gets a design doc + design card
- Create individual `pokedesign:` issues for each
- Label with `design` and the segment label (e.g., `segment-1`)

### Step 4: Design Held Items & Key Items
- What items are available in this segment?
- Which items support the Pokemon builds available?
- TMs, evolution items, competitive items (Choice Band, Life Orb, etc.)

### Step 5: Design All Trainers
- Every trainer in the segment gets a team
- **3-6 Pokemon per trainer**, drawn from the area's encounter pool
- Teams should be representative of what the player can catch nearby
- A few "surprise" Pokemon are fine but most should be local
- Competitive movesets — every trainer is a mini-puzzle

### Step 6: Review & Approve All Designs
- Jacob reviews all designs for the segment
- Iterate on feedback
- Once ALL designs are approved → move to Phase 2 (implementation)

### Step 7: Implement (Phase 2)
- Batch implement all designs via @claude
- Run tests, verify builds
- Merge PRs, update statuses

## Issue Conventions

### Labels

| Label | Purpose |
|-------|---------|
| `pokedesign` | Pokemon design task |
| `design` | Currently in design phase (markdown only) |
| `implement` | Ready for code implementation |
| `segment-1` | Part of Segment 1 (Start → Rustboro Gym) |
| `epic` | Parent tracking issue for a segment |
| `trainer` | Trainer team design |
| `items` | Item placement design |

### Issue Types

**Epic:** `Segment N: <Start> to <Gym> — Epic`
- Tracks all sub-tasks for a segment
- Contains checklist of all design/implementation work

**Pokemon Design:** `pokedesign: <Pokemon Name> #<Dex Number>`
- Individual Pokemon build design
- Links to design doc

**Trainer Design:** `trainer: <Route/Area> trainers`
- Trainer teams for a specific area

**Item Design:** `items: <Segment> held items and pickups`
- Item placement for a segment

### The @claude Comment

**During Design Phase:**
```markdown
@claude

## Task
<What design doc changes to make>

## Files to Change
- `docs/game-design/<name>.md` — Create/update design doc
- `pokemon-designs/XXX-name.md` — Update design card

## Design Principles
Read `.claude/skills/pokemon-design/SKILL.md` for design rules.

## Output
Markdown files only. Do NOT change any source code files.
```

**During Implementation Phase:**
```markdown
@claude

## Task
<What code changes to implement>

## Files to Change
- `src/data/pokemon/species_info/gen_X_families.h` — Update stats and abilities
- `src/data/pokemon/level_up_learnsets/gen_X.h` — Update learnset
- `pokemon-designs/XXX-name.md` — Update status to implemented

## Acceptance Criteria
- [ ] Stats match design doc
- [ ] Builds successfully (`make -j$(nproc)`)
```

### Querying Issues

```bash
# List all design issues for a segment
gh issue list --repo jcollingj/pokemon-emerald-rebalanced --label segment-1 --label design

# List issues ready for implementation
gh issue list --repo jcollingj/pokemon-emerald-rebalanced --label implement

# Check PRs
gh pr list --repo jcollingj/pokemon-emerald-rebalanced
```

## Scope

**Gen 1-3 Pokemon only (#1-386)**
