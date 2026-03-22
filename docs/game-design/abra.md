# Abra / Kadabra / Alakazam — The Life Orb Assassin

**Dex:** #063 / #064 / #065
**Type:** Psychic
**Route:** Route 116 (L7)
**Evolution:** Abra → Kadabra (L16) → Alakazam (L36, no trade required)

---

## Design Philosophy

Alakazam is the premier special sweeper of the early game. With 135 SpA and 120 Speed, it hits harder and faster than almost anything a player will encounter. The design goal is to make this identity **feel earned and mechanically coherent** — not just "big numbers."

**Magic Guard** is the keystone. By removing all indirect damage (Life Orb recoil, poison chip, hazard damage, weather damage), Magic Guard enables:
- **Life Orb with no downside** — 135 SpA × 1.3 = effective 175.5 SpA
- **Calm Mind setup safely** — can freely set up without chip slowly killing it
- **Recover as genuine sustain** — not wasted on hazard/weather mitigation

The result: a glass cannon that plays like a precision instrument. Fragile to direct hits, but immune to the chip damage that usually limits sweepers.

---

## Stats

### Abra (BST: 310)
```
HP:  25  ████
ATK: 20  ███
DEF: 15  ██
SPA: 105 ████████████████████
SPD: 55  ██████████
SPE: 90  █████████████████
```

### Kadabra (BST: 400)
```
HP:  40  ███████
ATK: 35  ██████
DEF: 30  █████
SPA: 120 ██████████████████████
SPD: 70  █████████████
SPE: 105 ████████████████████
```

### Alakazam (BST: 500)
```
HP:  55  ██████████
ATK: 50  █████████
DEF: 45  ████████
SPA: 135 █████████████████████████
SPD: 95  ██████████████████
SPE: 120 ██████████████████████
```

*No stat changes from vanilla — the numbers already tell the story.*

---

## Abilities

### Magic Guard (Primary — Ability 1)
**Effect:** Immune to all indirect damage (Life Orb recoil, hazards, weather, status chip, leech seed, etc.)

**Why it's the keystone:**
- Alakazam's core build is **Life Orb + Magic Guard**
- 135 SpA × 1.3 (Life Orb) = effective **175.5 SpA** — no recoil cost
- Calm Mind stacking is safe; Recover actually recovers HP instead of fighting attrition
- Positioned as Ability 1 so players encounter it immediately on wild Abra

**Effective damage math:**
| Move | Base BP | With Life Orb | STAB | Total Effective |
|------|---------|---------------|------|-----------------|
| Psychic | 90 | 117 | ×1.5 | **175 power** |
| Shadow Ball | 80 | 104 | — | 104 power |
| Focus Blast | 120 | 156 | — | 156 power |
| Future Sight | 120 | 156 | ×1.5 | **234 power** |

### Inner Focus (Ability 2)
**Effect:** Immune to flinching
**Why:** Protects the sweeper from being disrupted mid-setup or while outspeeding.

### Synchronize (Hidden Ability)
**Effect:** Reflects status conditions back to the inflictor
**Why:** Anti-paralysis tech. Alakazam hates speed drops more than anything; reflecting Thunder Wave punishes careless opponents.

---

## Learnset Design

### Core Synergy Loop
1. Switch in Alakazam with Magic Guard
2. Set up **Calm Mind** (+1 SpA/SpD) — immune to chip while doing so
3. Recover if needed — full HP recovery
4. Sweep with coverage: Psychic, Shadow Ball, Focus Blast, Dazzling Gleam, Energy Ball

### Abra (L1–16)

| Level | Move | Type | Cat | Power | Notes |
|-------|------|------|-----|-------|-------|
| 1 | Teleport | Normal | Status | — | Flavor/escape |
| 1 | Kinesis | Psychic | Status | — | Accuracy lowering |
| 4 | Confusion | Psychic | Special | 50 | Early STAB |
| 8 | **Calm Mind** | Psychic | Status | — | **Magic Guard synergy** — setup safely |
| 12 | Psybeam | Psychic | Special | 65 | Mid STAB |

**L8 is the build unlock.** Abra found at L7 gets Calm Mind at L8 — the player immediately sees the synergy.

### Kadabra (L16–36)

| Level | Move | Type | Cat | Power | Notes |
|-------|------|------|-----|-------|-------|
| 1 | Teleport, Kinesis, Confusion | — | — | — | Carries over |
| 8 | Calm Mind | Psychic | Status | — | Carries over |
| 12 | Psybeam | Psychic | Special | 65 | Carries over |
| 16 | **Shadow Ball** | Ghost | Special | 80 | Dark/Ghost coverage |
| 20 | **Recover** | Normal | Status | — | Magic Guard sustain — actual healing |
| 24 | **Dazzling Gleam** | Fairy | Special | 80 | Hits Dark types that wall Psychic |
| 27 | **Psychic** | Psychic | Special | 90 | Main STAB upgrade |
| 33 | **Energy Ball** | Grass | Special | 90 | Coverage vs Water/Rock/Ground |
| 36 | **Focus Blast** | Fighting | Special | 120 | Hits Dark/Normal/Steel/Rock/Ice |

### Alakazam (L36+)

| Level | Move | Notes |
|-------|------|-------|
| Inherits all Kadabra moves | — | — |
| 42 | **Nasty Plot** | +2 SpA — combined with Life Orb = nuclear damage |
| 48 | **Future Sight** | 120 BP Psychic delayed nuke — punishes switches |

---

## Competitive Movesets

### Life Orb Sweeper (Primary Build)
```
Alakazam @ Life Orb
Ability: Magic Guard
Nature: Timid (+Speed, -Attack)
EVs: 252 SpA / 252 Speed / 4 HP

- Psychic (main STAB)
- Shadow Ball (Ghost/Psychic coverage)
- Focus Blast (Dark/Normal/Steel coverage)
- Recover / Calm Mind (sustain or setup)
```
**Effective SpA: 175** (135 × 1.3 Life Orb, no recoil)

### Setup Sweeper
```
Alakazam @ Life Orb
Ability: Magic Guard

- Calm Mind (setup safely — no chip)
- Psychic
- Shadow Ball
- Focus Blast / Dazzling Gleam
```
**After +1 Calm Mind: 202 effective SpA**

### Speed Mirror (Anti-Status)
```
Alakazam @ Life Orb
Ability: Synchronize

- Psychic
- Shadow Ball
- Focus Blast
- Recover
```
**Why:** Punishes opponents who try to slow Alakazam with Thunder Wave.

---

## Coverage Map

| Target | Move | Rationale |
|--------|------|-----------|
| Ghost, Psychic | Shadow Ball | Hits things immune to Psychic |
| Dark | Dazzling Gleam | Dark types hard-wall Psychic; Fairy hits them |
| Normal, Steel, Ice, Rock | Focus Blast | Neutral on everything that resists Psychic |
| Water, Rock, Ground | Energy Ball | Secondary coverage layer |

**After Psychic + Shadow Ball + Focus Blast + Dazzling Gleam:** Alakazam hits every type for at least neutral damage except Dark (handled by Dazzling Gleam) and types weak to multiple moves.

---

## Weaknesses & Counterplay

- **55 HP / 45 Def** — any strong physical move OHKOs or 2HKOs
- **Bug, Ghost, Dark** moves hit super effectively — 4× weak to Pursuit (if that mechanic is in)
- **Focus Blast accuracy (70%)** — can whiff at critical moments
- **Setup dependent** — without Calm Mind, Alakazam hits hard but not overwhelmingly

---

## Route 116 Context

Abra appears at **Level 7** on Route 116. The player is typically at Level 7–10 here, coming from Rustboro.

- Abra caught at L7 → gets Calm Mind at L8 immediately
- Evolves to Kadabra at L16 (around Dewford/Slateport)
- Evolves to Alakazam at L36 (around Fortree City)
- Life Orb available mid-game unlocks the full build

---

## Design Notes

1. **Ability first**: Magic Guard determines everything. Stats are secondary.
2. **No power creep**: Stats unchanged from vanilla. The power comes from Magic Guard + Life Orb synergy.
3. **Calm Mind at L8**: Players who use Abra early get the synergy signal immediately — this is not a late-discovery design.
4. **Coverage is complete**: Psychic + Shadow Ball + Focus Blast + Dazzling Gleam covers all 18 types.
5. **Recover is real**: With Magic Guard, Recover isn't eaten by chip. It's a genuine 50% heal.
