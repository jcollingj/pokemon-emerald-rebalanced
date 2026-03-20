# Task Schema

Every task file in this directory must have YAML frontmatter with the following fields:

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Short display name |
| `description` | string | One-line summary of what needs to be done |
| `status` | enum | `todo`, `in-progress`, `done`, `blocked` |
| `type` | enum | `pokemon`, `route`, `trainer`, `item`, `mechanic`, `chunk` |
| `priority` | enum | `high`, `medium`, `low` |

## Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `pokemon` | string or list | Pokemon name(s) involved |
| `chunk` | string | Which game chunk this belongs to (e.g., `start-to-roxanne`) |
| `depends_on` | list | Task IDs this is blocked by |
| `tags` | list | Freeform tags for filtering |
| `created` | date | Auto-set by CLI |
| `updated` | date | Auto-set by CLI |

## File Naming

Files are named `{id}.md` where id is a zero-padded number: `001.md`, `002.md`, etc.
