---
name: Nosepass
dex_number: 299
status: designed
ability: Sand Force
role: Sand Fortress / Defensive Pivot
ideal_items: Assault Vest, Leftovers, Smooth Rock
evolution_line: [Nosepass, Probopass]
---

# Nosepass / Probopass - Rebalance Notes

## Design Philosophy
Probopass is an immovable fortress that turns sandstorm into a siege engine. Sand Force boosts Rock/Ground/Steel moves by 1.3x, and sandstorm's passive 1.5x SpDef boost to Rock types makes Probopass's already monstrous 150 SpDef effectively **225 SpDef** in sand. It doesn't outspeed anything — it doesn't need to. It sets Stealth Rock, paralyzes threats with Thunder Wave, and grinds them down with Sand Force-boosted Power Gem and Flash Cannon. Body Press turns its 145 Def into offensive output. Probopass doesn't win fast. It wins by making sure you can't kill it.

Nosepass is Rock/Electric in this hack, reflecting its magnetic compass identity. On evolution to Probopass, it becomes Rock/Steel — gaining the steel armor and losing the pure Electric typing, but keeping Electric coverage moves. This type change on evolution creates a distinct shift: Nosepass is a quirky Electric-flavored Rock type that evolves into a true Steel fortress.

## Ability Changes

- **Ability 1: Sand Force** — Rock/Ground/Steel moves deal 1.3x damage in sand. Core identity — every offensive move benefits. Turns a wall into a wall that hits back.
- **Ability 2: Sturdy** — Survives any single hit at 1 HP from full. Safety net for getting Stealth Rock up.
- **Hidden: Magnet Pull** — Traps Steel types. Niche utility for team support, punishes Steel switch-ins.

## Stat Changes

### Nosepass

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 30 | **50** | +20 |
| Atk | 45 | **20** | -25 |
| Def | 135 | 135 | - |
| SpA | 45 | **90** | +45 |
| SpD | 90 | 90 | - |
| Spe | 30 | 30 | - |
| **BST** | **375** | **415** | **+40** |

Already rebalanced in the codebase. Attack dumped — Nosepass is a special attacker. 90 SpA lets Power Gem and Thunderbolt actually hurt. 135 Def + 90 SpD makes it a legitimate wall from the moment you catch it. Rock/Electric typing gives it unique STAB coverage.

### Probopass

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 60 | 60 | - |
| Atk | 55 | 55 | - |
| Def | 145 | 145 | - |
| SpA | 75 | 75 | - |
| SpD | 150 | 150 | - |
| Spe | 40 | **20** | -20 |
| **BST** | **525** | **505** | **-20** |

Speed dropped to 20. This is intentional. Probopass should always move last — its entire identity is absorbing hits and responding. The Speed loss is actually a gain: it guarantees Probopass moves after the opponent, which means Thunder Wave lands before they get a second chance to move. 145 Def makes Body Press hit like a truck (uses Def stat for damage). 150 SpDef in sandstorm is effectively 225 — almost nothing on the special side can break through. Rock/Steel typing gives 9 resistances and a Poison immunity.

## Learnset

### Nosepass (evolves at 16)

| Level | Move | BP | Type | Sand Force? | Purpose |
|-------|------|----|------|-------------|---------|
| 1 | Tackle | 40 | Normal | No | Basic move |
| 1 | Harden | — | Normal | — | Early bulk |
| 8 | **Power Gem** | 80 | Rock | **Yes → 104, STAB → 156** | First synergy move. Sand Force + STAB = build turns on. |
| 12 | **Thunder Wave** | — | Electric | — | Cripple faster threats. Core support move. |
| 16 | **Thunderbolt** | 90 | Electric | No | Evolution-level power spike. Strong STAB coverage (Rock/Electric). |

### Probopass (evolves from Nosepass at 16)

| Level | Move | BP | Type | Sand Force? | Purpose |
|-------|------|----|------|-------------|---------|
| 16 | **Flash Cannon** | 80 | Steel | **Yes → 104, STAB → 156** | Evolution reward. New Steel STAB with Sand Force boost. |
| 21 | **Stealth Rock** | — | Rock | — | Hazard support. Core team utility move. |
| 27 | **Body Press** | 80 | Fighting | No | Uses 145 Def stat for damage = effective 145 Atk move. Coverage vs Steel/Normal. |
| 33 | **Earth Power** | 90 | Ground | **Yes → 117** | Ground coverage, boosted by Sand Force. Hits Fire/Electric/Steel. |
| 36 | Iron Defense | — | Steel | — | Doubles Def to 290 → Body Press becomes nuclear. |
| 42 | **Sandstorm** | — | Rock | — | Self-sufficient sand setter. Activates own Sand Force + SpDef boost. |
| 48 | **Stone Edge** | 100 | Rock | **Yes → 130, STAB → 195** | Ultimate Rock nuke. High crit rate for breaking through walls. |

## The Math

### Sand Force Offense (75 SpA / 145 Def for Body Press)

Sand Force gives 1.3x to Rock, Ground, and Steel moves in sandstorm.

| Move | BP | Sand Force | STAB | Effective | Notes |
|------|----|------------|------|-----------|-------|
| **Power Gem** | 80 | ×1.3 = 104 | ×1.5 | **156** | Reliable Rock STAB, no miss chance |
| **Flash Cannon** | 80 | ×1.3 = 104 | ×1.5 | **156** | Steel STAB, may drop SpDef |
| **Stone Edge** | 100 | ×1.3 = 130 | ×1.5 | **195** | Rock nuke, high crit rate |
| **Earth Power** | 90 | ×1.3 = 117 | — | **117** | Ground coverage |
| **Body Press** | 80 | — | — | **80** | But uses 145 Def as Atk stat |
| **Thunderbolt** | 90 | — | — | **90** | Electric coverage, not boosted by Sand Force |

**Body Press math:** 80 BP with 145 "Atk" (from Def stat). After Iron Defense: 290 "Atk" + 80 BP. This hits harder than most dedicated Fighting types.

**Iron Defense + Body Press combo:** Iron Defense → 290 Def. Body Press now hits at 290 "Atk" with 80 BP. Very few things survive this, and Probopass can take hits all day while setting up.

### Defensive Math (in Sandstorm)

Probopass in sandstorm:
- **Physical:** 60 HP / 145 Def. Not amazing HP, but 145 Def shrugs off most physical hits that aren't super effective Fighting/Ground.
- **Special:** 60 HP / 150 SpDef × 1.5 (sandstorm Rock boost) = **effectively 225 SpDef.** Special attackers bounce off.
- **Assault Vest:** 150 SpDef × 1.5 (sand) × 1.5 (AV) = **effectively 337 SpDef.** This is absurd. Nothing special breaks through.

### Roxanne's Nosepass (L15, pre-evolution)

At L15, Nosepass knows: Tackle, Harden, Power Gem, Thunder Wave, and is about to learn Thunderbolt at 16.

Roxanne's set: **Power Gem / Thunderbolt / Thunder Wave / Rest** with **Chesto Berry**.
- Power Gem at 90 SpA + STAB = solid damage for a gym leader ace
- Thunderbolt provides coverage against Water types that try to counter Rock
- Thunder Wave cripples the player's sweeper
- Rest + Chesto Berry = full heal once, forcing the player to break through twice
- Sand Force activates off Larvitar's Sand Stream, making Power Gem even nastier

## Ideal Items

1. **Assault Vest** — 150 SpDef × 1.5 (sand) × 1.5 (AV) = 337 effective SpDef. Probopass becomes completely immune to special damage. Forces 4 attacks only, but Probopass has 4 good attacks: Power Gem / Flash Cannon / Earth Power / Body Press. The ultimate "you cannot kill me" item.
2. **Leftovers** — Passive recovery every turn. Probopass stays on the field forever. Allows running Stealth Rock and Thunder Wave alongside attacks. The consistent, reliable pick for a support set.
3. **Smooth Rock** — Extends sandstorm from 5 to 8 turns. If Probopass is your sand setter, this gives your whole team more turns of Sand Force / sand SpDef boost. Team-oriented pick.

**Other options:**
- **Air Balloon** — Removes Ground weakness entirely until popped. Lets Probopass switch into Earthquake users safely once. Ground is its biggest threat — removing it is huge.
- **Chesto Berry** — One-time Rest + full heal. Roxanne uses this, and it works in the player's hands too for an extra life.

## Core Strategy

### The Sand Fortress
1. Set Stealth Rock on the first turn. Probopass is slow but bulky enough to take a hit.
2. Thunder Wave the biggest threat. Now they're slower than Probopass's 20 Speed? Doesn't matter — they're paralyzed and might not move at all.
3. Start attacking with Sand Force-boosted Power Gem or Flash Cannon. 156 effective STAB in sand is real damage even off 75 SpA.
4. Body Press anything that tries to wall your special moves. 145 Def as attack stat catches Steel and Normal types off guard.
5. Probopass outlasts everything. It doesn't win in 2 turns. It wins in 10.

### The Assault Vest Tank
1. No utility moves — pure offense: Power Gem / Flash Cannon / Earth Power / Body Press.
2. 337 effective SpDef in sand means special attackers literally cannot dent Probopass.
3. Switch into any special attacker, eat the hit, fire back with the right coverage move.
4. Pair with a physical wall to complete the defensive core.

### Iron Defense Wincon
1. Late-game, when threats are weakened, set up Iron Defense.
2. 290 Def makes physical attacks bounce off AND doubles Body Press damage.
3. Body Press at 290 "Atk" + 80 BP 2HKOs almost everything neutral.
4. Probopass becomes both unkillable and a serious offensive threat.

### When to Use Probopass
- **Stealth Rock setter** that's nearly impossible to OHKO
- **Special wall** in sand — switch into any special attacker and shrug it off
- **Thunder Wave support** — cripple sweepers for your team
- **Late-game wincon** with Iron Defense + Body Press
- **NOT a lead in non-sand teams.** Without sandstorm, Probopass loses Sand Force and the SpDef boost. It needs sand.

## Team Synergy

- **Tyranitar / Hippowdon / Larvitar** — Sand Stream sets permanent sandstorm. Probopass doesn't waste a turn on Sandstorm and gets both Sand Force + SpDef boost for free. The ideal partner.
- **Physical sweepers** — Probopass's Thunder Wave + Stealth Rock softens teams for faster teammates to clean up.
- **Special walls** — Probopass handles the special side; pair with a physical attacker to deal with Fighting/Ground types that threaten it.
- **Ground-immune partners** — Flying types or Levitate users can switch into the Earthquakes that threaten Probopass.
- **Water/Grass types** — Cover Probopass's 4x weakness to Ground and Fighting.

## Matchup Analysis

**Strong vs:** Flying (resists), Normal (resists), Poison (immune), Fire (resists in sand), Ice (resists), Psychic (neutral but can't break through SpDef), Fairy (resists with Steel), Dragon (resists with Steel). Probopass walls most of the game's special attackers.

**Weak vs:** Fighting (4x effective, the biggest threat), Ground (4x effective — Air Balloon helps but one Earthquake ends Probopass), Water (2x effective, hits physical side), Grass (neutral but often special — sand SpDef handles it).

**Key vulnerability:** Probopass has two 4x weaknesses (Fighting and Ground). Fast Fighting types like Blaziken or Breloom OHKO through any amount of defense. Earthquake from anything with decent Atk is lethal. Probopass needs teammates that handle these threats — it can't do it alone.

## Nosepass vs Probopass Power Curve

| Level | Form | Key Moves | Role |
|-------|------|-----------|------|
| 1-7 | Nosepass | Tackle, Harden | Basic Rock type |
| 8-11 | Nosepass | Power Gem, Sand Force online | Build turns on — real damage |
| 12-15 | Nosepass | + Thunder Wave | Support toolkit emerging |
| 16 | **→ Probopass** | + Flash Cannon, Thunderbolt | Evolution spike — dual STAB, new Steel typing |
| 21-32 | Probopass | + Stealth Rock, Body Press | Full support kit + Fighting coverage |
| 33-41 | Probopass | + Earth Power | Ground coverage, Sand Force boosted |
| 42+ | Probopass | + Sandstorm, Stone Edge | Self-sufficient sand, ultimate Rock nuke |

The build turns on at level 8 with Power Gem. By 16, Probopass has dual STAB and Thunder Wave. By 27, it has the full fortress kit: hazards, paralysis, and Body Press for coverage. The late moves (Earth Power, Sandstorm, Stone Edge) are endgame rewards that complete the picture.
