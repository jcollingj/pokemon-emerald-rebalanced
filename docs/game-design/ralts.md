---
name: Ralts
dex_number: 280
status: designed
ability: Trace (Reworked) / Justified
role: Special Pivot / Physical Anti-Dark
evolution_line: [Ralts, Kirlia, Gardevoir, Gallade]
---

# Ralts Line - Rebalance Notes

## Design Philosophy

The Ralts line features an **asymmetric split** (like Nidoran):

### Gardevoir - Empathic Special Pivot
- **Role:** Special attacker that gets stronger every time it switches in
- **Core Mechanic:** Reworked Trace — copies opponent's ability AND gets +1 SpA on entry
- **Strategy:** Pivot in and out to stack SpA boosts while adapting to opponents

### Gallade - Justified Dark-Slayer
- **Role:** Physical attacker that feeds on Dark-type moves
- **Core Mechanic:** Justified — immune to Dark moves, +1 Attack when hit by one
- **Strategy:** Switch into Dark moves for free Attack boosts, sweep with priority

---

## Shared Base: Ralts & Kirlia

### Ralts Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 28 | **40** | +12 |
| Atk | 25 | 25 | - |
| Def | 25 | **35** | +10 |
| SpA | 45 | **55** | +10 |
| SpD | 35 | **45** | +10 |
| Spe | 40 | 40 | - |
| **BST** | **198** | **240** | **+42** |

**Rationale:** Ralts is famously terrible early on. These buffs make it usable while still fragile. SpA bump means Confusion/Disarming Voice actually do damage.

### Kirlia Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 38 | **50** | +12 |
| Atk | 35 | 35 | - |
| Def | 35 | **45** | +10 |
| SpA | 65 | **80** | +15 |
| SpD | 55 | **65** | +10 |
| Spe | 50 | 50 | - |
| **BST** | **278** | **325** | **+47** |

### Kirlia Abilities
- **Ability 1:** Trace (standard — preview of Gardevoir's rework)
- **Ability 2:** Synchronize
- **Hidden:** Telepathy

### Shared Learnset (Ralts → Kirlia)

| Level | Move | Type | Purpose |
|-------|------|------|---------|
| 1 | Growl | Normal | Utility |
| 1 | Confusion | Psychic | Basic STAB |
| 8 | **Disarming Voice** | Fairy | Fairy STAB, never misses |
| 12 | **Psybeam** | Psychic | Stronger Psychic STAB |
| 14 | Calm Mind | Psychic | Setup move |
| 16 | Draining Kiss | Fairy | Sustain + STAB |
| 20 | Hypnosis | Psychic | Status — evolves at 20 into Kirlia |

---

## GARDEVOIR — Empathic Special Pivot

### Ability: Trace (Reworked)

**Vanilla Trace:** Copies the opponent's ability on switch-in.
**Reworked Trace:** Copies the opponent's ability on switch-in **AND gets +1 Special Attack**.

- Still copies the ability (sometimes useless, sometimes amazing — that's the fun)
- The guaranteed +1 SpA makes every switch-in valuable regardless of what you copy
- Encourages pivoting playstyle — switch out with Teleport, switch back in for another +1
- Thematically: Gardevoir "reads" the opponent empathically and grows stronger from understanding

### Gardevoir Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 68 | **78** | +10 |
| Atk | 65 | 65 | - |
| Def | 65 | **70** | +5 |
| SpA | 125 | **130** | +5 |
| SpD | 115 | **120** | +5 |
| Spe | 80 | **85** | +5 |
| **BST** | **518** | **548** | **+30** |

**Rationale:** 130 SpA base + Trace's +1 on entry = 195 effective SpA. After two pivots, 260 effective. Bulk just enough to take a hit and pivot out. Speed at 85 is decent but not overwhelming — encourages Teleport pivoting over raw speed.

### Gardevoir Learnset (evolves from Kirlia at 30 via level-up)

| Level | Move | Type | Purpose |
|-------|------|------|---------|
| 30 | **Moonblast** | Fairy | Evolution reward — 95 BP Fairy STAB |
| 33 | **Teleport** | Psychic | Pivot out (-6 priority) to come back for another Trace boost |
| 36 | **Shadow Ball** | Ghost | Coverage — hits Psychic/Ghost types |
| 40 | **Thunderbolt** | Electric | Coverage — hits Water/Flying |
| 44 | Psychic | Psychic | Strong Psychic STAB (90 BP) |
| 48 | **Future Sight** | Psychic | 120 BP delayed nuke — hits 2 turns later while pivoting |

### Gardevoir Core Strategy

1. **Switch in** → Trace copies ability + **+1 SpA**
2. Attack with Moonblast/Shadow Ball/Thunderbolt (130 + boost = huge)
3. **Teleport out** when threatened — negative priority so you take a hit first (bulk handles it)
4. **Switch back in** → another +1 SpA. Now at +2, 130 SpA = 260 effective
5. After 2-3 pivots, Gardevoir's SpA is absurd and it sweeps

**The pivot loop:** Trace in (+1) → attack → Teleport out → Trace in (+1) → attack. Each cycle Gardevoir gets stronger.

### Gardevoir Ideal Items
- **Choice Specs** — Immediate nuclear damage, relies on team pivoting
- **Leftovers** — Sustain for repeated pivoting
- **Eject Button** — Forces pivot after taking a hit, triggers Trace again on re-entry

---

## GALLADE — Vorpal Blade Master

### Ability: Vorpal Blade (Custom)

**Effect:** All slicing moves always critically hit.

This is the Merciless pattern applied to blades. Merciless guarantees crits on poisoned targets (condition → payoff). Vorpal Blade guarantees crits on all slicing moves (every move benefits). No setup required — every cut is a perfect cut.

**Why not Sharpness?** Same math (1.5x), but guaranteed crits are more exciting — the crit animation makes every hit feel devastating, crits ignore the target's defense boosts, and it opens up Sniper as an alt ability for 2.25x crit damage.

**Implementation:** Same pattern as Merciless in battle_util.c — check if move has `.slicingMove = TRUE`, force crit.

### Gallade Stats

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 68 | **78** | +10 |
| Atk | 125 | **130** | +5 |
| Def | 65 | **75** | +10 |
| SpA | 65 | 65 | - |
| SpD | 115 | **110** | -5 |
| Spe | 80 | **90** | +10 |
| **BST** | **518** | **548** | **+30** |

**Rationale:** 130 Atk with guaranteed crits on every slicing move is devastating. 90 Speed outspeeds key threats. Def buffed for physical exchanges. SpD dropped — Gallade is offensive, not a special wall.

### Gallade Learnset (evolves from Kirlia at 30 via Dawn Stone)

All slicing moves are marked with ⚔️:

| Level | Move | BP | Type | Vorpal? | Purpose |
|-------|------|----|------|---------|---------|
| 30 | ⚔️ **Psycho Cut** | 70 | Psychic | **Yes → 105 effective** | Evolution reward — Psychic STAB blade |
| 33 | ⚔️ **Night Slash** | 70 | Dark | **Yes → 105 effective** | Dark coverage blade |
| 36 | ⚔️ **Leaf Blade** | 90 | Grass | **Yes → 135 effective** | Grass coverage, massive power |
| 40 | Swords Dance | — | Normal | — | Setup — crits already ignore def boosts, SD just adds raw Atk |
| 44 | ⚔️ **Sacred Sword** | 90 | Fighting | **Yes → 135 effective, ignores def** | STAB nuke, cuts through everything |
| 48 | ⚔️ **Stone Axe** | 65 | Rock | **Yes → 97 effective + Stealth Rock** | Coverage + hazard setup on a crit |

### Gallade Core Strategy

1. Every slicing move is a guaranteed crit — no setup needed, just attack
2. Crits ignore the target's defense boosts — Gallade cuts through Curse/Iron Defense/etc.
3. Swords Dance if there's a free turn — crits + SD = absurd damage
4. Coverage is incredible: Psychic/Dark/Grass/Fighting/Rock all as guaranteed crits
5. Stone Axe sets Stealth Rock while dealing guaranteed-crit damage — utility + offense

**The blade fantasy:** Gallade doesn't need to set up a condition first (unlike Beedrill's poison). Every single attack is a perfect strike. You pick the right blade for the matchup and every cut lands devastatingly.

### Gallade The Math

With 130 Atk + Vorpal Blade (all crits = 1.5x, ignores defense boosts):
- **Psycho Cut:** 70 × 1.5 = 105 effective Psychic STAB
- **Night Slash:** 70 × 1.5 = 105 effective Dark coverage
- **Leaf Blade:** 90 × 1.5 = 135 effective Grass coverage
- **Sacred Sword:** 90 × 1.5 = 135 effective Fighting STAB (already ignores defense)
- **Stone Axe:** 65 × 1.5 = 97 effective Rock + sets Stealth Rock

After Swords Dance (+2 Atk): Sacred Sword = 135 effective with ~390 Atk. That kills almost anything.

### Gallade Ideal Items
- **Choice Band** — 130 Atk × 1.5 (Band) × 1.5 (crit) = triple-boosted slicing moves
- **Life Orb** — 1.3x damage on guaranteed crits, flexible moveset
- **Wide Lens** — If we add any lower-accuracy slicing moves

### Gallade Alt Ability
- **Ability 2: Steadfast** — +1 Speed when flinched, decent backup
- **Hidden: Sniper** — Crits deal 2.25x instead of 1.5x. Stacks with Vorpal Blade for absurd damage. The "glass cannon" variant.

---

## Why Pick One Over The Other?

| | Gardevoir | Gallade |
|---|-----------|---------|
| **Offense** | Special (130 SpA) | Physical (130 Atk) |
| **Ability** | Trace rework (+1 SpA on entry) | Vorpal Blade (slicing moves always crit) |
| **Playstyle** | Pivot in/out, snowball SpA | Every attack is a guaranteed crit |
| **Speed** | 85 (moderate) | 90 (faster) |
| **Bulk** | SpD focused (120) | Def focused (75) |
| **Key move** | Teleport (pivot loop) | Sacred Sword (135 effective STAB crit) |
| **Fantasy** | "I understand you" — reads opponents | "Every cut is perfect" — blade master |

## Team Synergy

- **Gardevoir** pairs with U-Turn/Volt Switch users for constant pivoting
- **Gallade** pairs with anything — no setup needed, just send it in and start cutting
- Both cover each other's weaknesses — Gardevoir handles special threats, Gallade physical
- Ralts on Route 102 is a long-term investment that pays off big at evolution
- Gallade's Stone Axe sets Stealth Rock for the team while dealing crit damage

## Matchup Analysis

### Gardevoir
**Strong vs:** Fighting, Dragon, Dark, Poison (with coverage)
**Weak vs:** Steel (resists both STABs), Poison, Ghost
**Key move:** Shadow Ball handles Ghost/Psychic that wall Fairy

### Gallade
**Strong vs:** Normal, Rock, Steel, Ice, Dark (coverage), Water/Ground (Leaf Blade)
**Weak vs:** Flying, Ghost, Fairy
**Key move:** Crits ignore defense boosts, so defensive walls can't stall Gallade out
