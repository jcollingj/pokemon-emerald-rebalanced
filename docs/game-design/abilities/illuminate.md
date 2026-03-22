---
name: Illuminate
status: modified
original_effect: "Doubles wild encounter rate"
new_effect: "Beam and light-based moves deal 1.3x damage"
pokemon: [Staryu, Starmie]
---

# Illuminate

## Original Effect
Doubles the rate of wild Pokémon encounters. No combat effect. Essentially useless in battle.

## Reworked Effect
Beam and light-based moves deal **1.3x damage**.

## Boosted Moves

| Move | Type | Base BP | Effective BP | Notes |
|------|------|---------|--------------|-------|
| Psybeam | Psychic | 65 | 84.5 | Psychic beam — early synergy on Staryu |
| Power Gem | Rock | 80 | 104 | Rock beam — thematic (gem core) |
| Aurora Beam | Ice | 65 | 84.5 | Ice beam — beautiful thematic fit |
| Signal Beam | Bug | 75 | 97.5 | Signal light — Bug/Dark/Psychic coverage |
| Flash Cannon | Steel | 80 | 104 | Steel light cannon |
| Charge Beam | Electric | 50 | 65 | Electric beam + 70% SpA boost chance |
| Ice Beam | Ice | 90 | 117 | TM — best Ice coverage, excellent with Illuminate |
| Solar Beam | Grass | 120 | 156 | Nuke option in sun |

## NOT Boosted (Intentional)
- **Psychic** — not a beam; forces interesting Psybeam vs Psychic decision
- **Surf / Hydro Pump** — not beams; creates Water coverage tension (Surf vs Ice Beam)
- **Thunderbolt** — not a beam; TeachableTM but Charge Beam is the "beam" Electric option

## Design Notes

**Why rework Illuminate?**
The vanilla ability has zero combat utility. "Doubles encounter rate" is negligible and actively annoying (more random encounters). A rework was needed.

**Why beam moves specifically?**
Staryu and Starmie are explicitly "star that shoots light beams." Every attack animation involves rays or beams of energy from the gem. The ability name "Illuminate" directly suggests empowering light — a perfect thematic fit. The boosted move list reads like Starmie's natural moveset.

**The design pattern:**
This follows the "every move benefits" pattern from Mega Launcher (Blastoise). The key innovation is that the boost is *selective* — Psychic and Surf are not boosted even though they're Starmie's strongest STAB moves. This creates genuine moveset decisions:
- Psybeam (84.5 effective) is often better than Psychic (90) with Illuminate online
- Ice Beam (117 effective) beats Surf (90) for neutral coverage, despite Surf being STAB

**The math with 115 SpA (Starmie):**
- Illuminate alone: ~150 effective SpA on beams
- + Choice Specs: ~225 effective SpA on beams
- This is Choice Specs Alakazam-tier damage with 4-type coverage

## Pokemon Using This

- **Staryu / Starmie** — Beam Mage identity. Starmie's natural level-up learnset includes Psybeam, Power Gem, Aurora Beam, Signal Beam, and Flash Cannon — all boosted. Combined with TM Ice Beam, Starmie achieves 5-type beam coverage with no dead moves. The fastest Water type in the game becomes an offensive beam cannon with genuine type-coverage depth.
