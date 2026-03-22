---
name: Staryu
dex_number: 120
status: designed
ability: Natural Cure
role: Hit-and-Run Special Sweeper
ideal_items: Choice Specs, Life Orb, Eject Button
evolution_line: [Staryu, Starmie]
---

# Staryu / Starmie - Design Notes

## Build Identity

Starmie is a fast special sweeper that uses **Natural Cure** to pivot freely without fear of status conditions. It clicks coverage moves, takes a hit, switches out to clear any status, and comes back clean. 115 SpA + 115 Speed is elite — it outruns most of the roster and hits hard with perfect 4-move coverage.

Starmie's niche: **the fastest, broadest special attacker available**. It doesn't need a gimmick — the raw stats and coverage are the gimmick.

## Encounter Location

Staryu replaces Toxapex as the Route 104 surfing encounter (Gen 1-3 only). Requires Surf to access — a deliberate "come back later" reward. Players who return to Route 104 post-Surf find a strong special attacker waiting.

## Ability

**Natural Cure** — status conditions heal on switch-out.

Why this works:
- Starmie's role is hit-and-run: deal damage, switch out, come back fresh. Natural Cure is a direct mechanical reward for that playstyle.
- The opponent's most reliable way to slow down a fast sweeper is status (paralysis cuts Speed, poison drains HP, burn limits longevity). Natural Cure neutralizes all of this.
- Every switch-out "resets" Starmie — it returns with full health-to-role efficiency. No dead turns burning Lum Berry or sitting with burn damage.
- Starmie can stay aggressive instead of playing defensively around status.

Why NOT Analytic (1.3x when moving last): Starmie is 115 Speed — it nearly always moves first. Analytic is self-contradicting on the fastest sweeper in the early roster.

Why NOT Illuminate rework: Could be interesting, but Natural Cure creates a cleaner, more immediately understandable build identity that doesn't require a custom ability.

## Stat Changes

### Staryu

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | 30 | — |
| Atk | 45 | 45 | — |
| Def | 55 | 55 | — |
| SpA | 70 | **75** | +5 |
| SpD | 55 | 55 | — |
| Spe | 85 | 85 | — |
| **BST** | **340** | **345** | **+5** |

Staryu should be fun to use before evolving. 75 SpA + 85 Speed is enough to threaten things with Water Pulse and Confusion in the mid-game. The small SpA bump ensures it feels capable, not just a "wait for Water Stone" mon.

### Starmie

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | — |
| Atk | 75 | 75 | — |
| Def | 85 | 85 | — |
| SpA | 100 | **115** | +15 |
| SpD | 85 | 85 | — |
| Spe | 115 | 115 | — |
| **BST** | **520** | **535** | **+15** |

The 115/115 SpA+Speed symmetry is the design statement. Starmie doesn't need anything else — it's already the fastest special attacker in the relevant portion of the game, and 115 SpA means every coverage move threatens OHKOs on neutral targets. The 15 SpA points bring it from "solid" to "elite."

## Evolution

**Water Stone** (vanilla) — no change. Staryu evolves whenever the player uses a Water Stone. Make sure Staryu is worth using before the evolution — the learnset is designed to give Staryu a complete, fun kit by the time the player has Surf.

## Learnset

### Staryu

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| 1 | Tackle | 40 | Normal | Basic starter move |
| 1 | Water Gun | 40 | Water | Early Water STAB |
| 8 | **Water Pulse** | 60 | Water | First synergy move — Water STAB with 20% confuse chance. Better than Water Gun, gives Staryu a real move to use. |
| 12 | **Confusion** | 50 | Psychic | Second synergy move — previews Water/Psychic dual-STAB. Staryu starts feeling like a real special attacker. |
| 16 | **Recover** | — | Normal | Major utility. Natural Cure + Recover = Staryu can take hits and heal, making it a surprisingly durable early-game attacker. |
| 21 | **Swift** | 60 | Normal | Coverage — always hits. Useful for accuracy-lowering opponents. Thematic (star-shaped body launching star projectiles). |
| 27 | **Power Gem** | 80 | Rock | Rock coverage. Thematic — Starmie's gem core. Hits Fire/Ice/Flying types. |

### Starmie (inherits Staryu's kit, learns new moves on level-up after evolving)

| Level | Move | BP | Type | Purpose |
|-------|------|----|------|---------|
| Evo | **Surf** | 90 | Water | Evolution reward. Main Water STAB upgrade from Water Pulse. Immediately stronger on evolution. |
| 21 | **Psychic** | 90 | Psychic | Core Psychic STAB. Starmie's dual-type coverage clicks — Surf + Psychic hits everything neutrally except Water/Dark/Psychic resists. |
| 27 | **Power Gem** | 80 | Rock | Already in kit from Staryu. Rock + Water + Psychic covers nearly the entire game. |
| 33 | **Cosmic Power** | — | Psychic | +1 Def/SpD. Thematic (star, cosmic). Sets up a more durable Starmie if the player wants a bulkier set. |
| 36 | **Recover** | — | Normal | Already in kit from Staryu. Still valuable post-evolution. |
| 42 | **Hydro Pump** | 110 | Water | High-risk, high-reward Water STAB. The "win now" move when you need max damage on Water. |
| 48 | **Psystrike** | 100 | Psychic | Signature-tier Psychic. Hits Sp.Def stat but calculates vs. Def. The endgame Psychic nuke. |

### Teachable Moves (TMs / Move Tutors)

These belong in the teachable learnset, not level-up — thematically "taught" rather than naturally developed:

- **Thunderbolt** — Electric coverage for Water types
- **Ice Beam** — Ice coverage for Grass/Dragon types
- **Shadow Ball** — Ghost coverage for Psychic mirrors
- **Dazzling Gleam** — Fairy coverage option
- **Calm Mind** — Setup option for bulkier sets

## The Math

### Why 115/115 SpA+Speed is elite

At 115 Speed, Starmie outspeeds the vast majority of trainers through the mid-game. Combined with 115 SpA and Choice Specs:

| Move | BP | Effective (Choice Specs) | Target |
|------|----|--------------------------|--------|
| Surf | 90 | 90 x 1.5 (STAB) x 1.5 (Specs) = **202** | Everything neutral |
| Psychic | 90 | 90 x 1.5 (STAB) x 1.5 (Specs) = **202** | Poison/Fighting types |
| Power Gem | 80 | 80 x 1.5 (Specs) = **120** | Fire/Ice/Flying types |
| Hydro Pump | 110 | 110 x 1.5 (STAB) x 1.5 (Specs) = **247** | Maximum water output |

202 effective BP from both STABs at Choice Specs is a high-damage floor. Most things in the mid-game simply don't survive.

### Natural Cure + Pivot

Natural Cure pays off over a match:
- Turn 1-3: Starmie sweeps — deal damage, opponents try to status it
- Turn 4: Starmie eats a Toxic or Thunder Wave
- Turn 5: Switch out → status cured. Come back clean next turn
- Turn 6: Back to sweeping

The key: Starmie doesn't lose **longevity** from status. A paralyzed Starmie (half speed) is no longer threatening. But with Natural Cure, that paralysis gets cured the moment you pivot out. The sweeper never permanently loses its role.

## Ideal Items

1. **Choice Specs** — 1.5x SpA. 115 SpA x 1.5 = effective 172 SpA. Surf at 202 effective BP. The definitive Starmie item — locked into one move, but Starmie's moves are so strong that being locked is fine. Switch out with Natural Cure when needed, reselect on re-entry.

2. **Life Orb** — 1.3x SpA, flexible moveset. Starmie can run Surf / Psychic / Power Gem / Recover and not be locked in. Recoil stings on 60 HP, but Natural Cure doesn't fix recoil — use Recover to compensate. Better for matchups where you need to switch move type frequently.

3. **Eject Button** — Ejects Starmie out when it takes a hit, automatically triggering Natural Cure. Niche but synergistic: you're rewarded for taking the hit by clearing your status AND getting a free switch-in for a teammate. Thematic with the hit-and-run identity.

## Core Strategy

### Hit-and-Run Sweeper (Primary)

1. Lead Starmie or send it in on a slow special attacker
2. Click the coverage move that hits the matchup hard
3. If opponent doesn't die, switch out (Natural Cure clears any status inflicted)
4. Starmie comes back clean next turn — no lasting damage from status
5. Repeat until opponent team runs out of answers

Starmie forces the opponent to answer two questions: "How do I survive the hit?" and "If I status it, it just switches out." Most teams can't answer both.

### Late-Game Cleaner

Starmie's 115 Speed means it often gets the last hit as teams are weakened:
1. Wait until bulky threats are chipped down
2. Send Starmie in
3. Surf / Psychic / Power Gem into weakened targets for clean OHKOs
4. Natural Cure means any status it picked up earlier is gone

### Cosmic Power Bulky Set (Tech option)

1. Switch Starmie in on a special attacker
2. Cosmic Power to +1 Def/SpD
3. Now Starmie can take hits from BOTH sides
4. Recover to sustain, Surf + Psychic to damage
5. A bulkier Starmie that natural cure heals status on forced switches

### Sample Movesets

**Choice Specs Sweeper (Primary):**
- Surf / Psychic / Power Gem / Ice Beam (TM)
- Item: Choice Specs
- Strategy: Click the right move, pivot with Natural Cure

**Life Orb Coverage:**
- Surf / Psychic / Power Gem / Recover
- Item: Life Orb
- Strategy: Flexible coverage + Recover to offset recoil

**Bulky Tech:**
- Surf / Psychic / Cosmic Power / Recover
- Item: Leftovers
- Strategy: Setup wall that Natural Cure keeps clean

## Niche Comparison

Starmie should occupy a distinct role from other Water types in the roster:

| | Starmie | Swampert | Tentacruel | Pelipper |
|---|---------|----------|------------|----------|
| **Role** | Fast special sweeper | Rain fortress | Trapping poison tank | Rain setter |
| **Ability** | Natural Cure | Stamina | Poison Heal | Drizzle |
| **Speed** | 115 (fastest) | 60 (slow) | 85 (moderate) | 65 (slow) |
| **Bulk** | Low (60/85/85) | Defensive | Special (SpDef) | Mixed |
| **Fantasy** | "I always outspeed and click the right move" | "I become unkillable" | "You're trapped in here with me" | "It's always raining" |

Starmie is the only pure speed-based special sweeper in the Water lineup. It doesn't tank, it doesn't set up weather — it just outruns things and fires.

## Team Synergy

- **Physical attackers (Taillow, Zigzagoon):** Starmie soft-checks Poison, Fire, and Fighting types that wall physical attackers. Starmie's special coverage + their physical presence = balanced offensive core.
- **Status users (Toxic, Sleep Powder):** Natural Cure means Starmie doesn't need a Lum Berry slot. This frees up items on teammates who might want Lum Berry more.
- **Hazard removers:** Starmie naturally provides Rapid Spin (Staryu learns it via TM), keeping hazards off for fast, fragile teammates.
- **Slow, bulky teammates:** Starmie handles threats that would demolish slow tanks (Dragon, Flying resists), then pivots back in.

## Matchup Analysis

**Strong vs:** Poison (Psychic STAB), Fire (Surf STAB), Rock (Surf STAB), Ground (Surf STAB), Fighting (Psychic STAB). Most opponents without Electric/Grass moves.

**Weak vs:** Electric (4x or 2x from Thunderbolt/Thunder), Grass (Grass STAB hits both Water types), Ghost (resists Psychic and Normal), Dark (immune to Psychic). Strong priority moves (Extreme Speed, Bullet Punch) threaten low-HP Starmie.

**Key vulnerability:** 60 HP means Starmie cannot absorb many hits — it either OHKOs or gets threatened in return. Electric moves in particular are dangerous (common coverage on many trainers). It needs to switch in safely, not on a predicted neutral hit.
