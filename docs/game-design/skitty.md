---
name: Skitty / Delcatty
dex_numbers: [300, 301]
status: implemented
ability: Normalize
role: Normalize Special Sweeper
evolution_line: [Skitty, Delcatty]
---

# Skitty / Delcatty — The Normalize Special Sweeper

## Build Identity

Delcatty is a **special sweeper** that uses Normalize to convert every move into Normal-type STAB, combining with the built-in 1.2× Normalize boost and Normal STAB for an effective **1.8× multiplier on every single attack** — Shadow Ball, Thunderbolt, Ice Beam, anything.

---

## Ability: Normalize

**Effect (Gen 7+ implementation already in engine):**
- All moves become Normal type
- All converted moves receive a 1.2× damage boost (the "-ate" multiplier)
- Delcatty is Normal type → STAB applies → **1.5× × 1.2× = 1.8× effective on everything**

**Why this works:** The SKILL.md "every move benefits" pattern. You can't pick a bad move — Thunderbolt, Shadow Ball, Hyper Voice, Ice Beam — all become 1.8× STAB Normal hits. The ability shapes the entire moveset: coverage moves become STAB moves.

**Key interactions:**
- Shadow Ball (80 BP) → Normal type → 1.8× = effectively **144 BP**
- Thunderbolt (90 BP) → Normal type → 1.8× = effectively **162 BP**
- Hyper Voice (90 BP) → Normal type → 1.8× = effectively **162 BP**
- Double-Edge (120 BP) → Normal type → 1.8× + recoil = effectively **216 BP**

---

## Stat Changes

### Skitty (BST: 260 → 355)

```
HP:  55  (+5)   ██████████
ATK: 50  (+5)   █████████
DEF: 50  (+5)   █████████
SPA: 65  (+30)  ████████████
SPD: 55  (+20)  ██████████
SPE: 80  (+30)  ██████████████
```

**Total BST:** 260 → **355** (+95)

### Delcatty (BST: 380 → 490)

```
HP:  75  (+5)   █████████████
ATK: 75  (+10)  █████████████
DEF: 70  (+5)   ████████████
SPA: 100 (+45)  █████████████████
SPD: 75  (+20)  █████████████
SPE: 95  (+5)   ████████████████
```

**Total BST:** 380 → **490** (+110)

**Stat design rationale:**
- Sp. Attack 100 is the primary offensive stat — Normalize rewards a strong SpA base
- Speed 95 lets Delcatty outspeed most mid-game threats before investing EVs
- Balanced defenses (75/70/75) give enough bulk to set up Calm Mind once or twice

---

## Evolution

- Skitty → Delcatty at **Level 16** (was: Moon Stone — removed gating)
- Route 116 encounter: Skitty at L7–8, evolves naturally at L16

---

## Full Learnset

### Skitty (Levels 1–12, evolves at 16)

| Level | Move | Type | Cat | Power | Purpose |
|-------|------|------|-----|-------|---------|
| 1 | Tackle | Normal | Physical | 40 | Basic STAB |
| 1 | Growl | Normal | Status | — | Attack drop |
| **8** | **Return** | Normal | Physical | 102 | **First synergy — STAB build "turns on"** |
| **12** | **Sing** | Normal | Status | — | **Sleep utility — set up or sweep** |

### Delcatty (Level 1 inherited + Level 16+)

| Level | Move | Type | Cat | Power | Purpose |
|-------|------|------|-----|-------|---------|
| 1 | Tackle | Normal | Physical | 40 | Inherited |
| 1 | Growl | Normal | Status | — | Inherited |
| 1 | Return | Normal | Physical | 102 | Inherited |
| 1 | Sing | Normal | Status | — | Inherited |
| **16** | **Hyper Voice** | Normal | Special | 90 | **Main STAB — spread move, never misses vs sleep** |
| **21** | **Calm Mind** | Psychic | Status | — | **Setup — SpA+SpD → sweeping** |
| 27 | Shadow Ball | Ghost | Special | 80 | Coverage → Normal STAB via Normalize |
| 33 | Wish | Normal | Status | — | Recovery / team support |
| 42 | Thunderbolt | Electric | Special | 90 | Coverage → Normal STAB via Normalize |
| 48 | Double-Edge | Normal | Physical | 120 | Strongest Normal STAB, recoil risk |

---

## Competitive Movesets

### Calm Mind Sweeper (Recommended)
```
Delcatty @ Silk Scarf
Ability: Normalize
Nature: Timid (+Speed, -Attack)
EVs: 252 SpA / 252 Spe / 4 HP

- Calm Mind
- Hyper Voice
- Shadow Ball
- Thunderbolt / Wish
```
**Strategy:** Calm Mind once or twice → Hyper Voice spam. Everything is 1.8× STAB. Silk Scarf adds another 20% on top. After +1 Calm Mind, Delcatty's effective SpA on Hyper Voice: **100 × 1.5 × 1.2 × 1.2 × 1.2 = ~260 effective SpA.**

### Choice Specs Wallbreaker
```
Delcatty @ Choice Specs
Ability: Normalize
Nature: Timid (+Speed, -Attack)
EVs: 252 SpA / 252 Spe / 4 HP

- Hyper Voice
- Shadow Ball
- Thunderbolt
- Return
```
**Strategy:** Immediate wallbreaking power. No setup needed. Choice Specs + Normalize + STAB = everything hits extremely hard from turn 1.

### Wish Support
```
Delcatty @ Leftovers
Ability: Normalize
Nature: Bold (+Def, -Attack)
EVs: 252 HP / 128 Def / 128 SpD

- Wish
- Sing
- Calm Mind
- Hyper Voice
```
**Strategy:** Use Sing to put opponents to sleep, Wish for self-heal and team support, Calm Mind to gradually set up, Hyper Voice as the payoff.

---

## Ideal Items

| Rank | Item | Why |
|------|------|-----|
| #1 | **Silk Scarf** | +20% Normal moves stacks with Normalize's 1.8×. Total effective multiplier becomes ~2.16×. |
| #2 | **Choice Specs** | Immediate wallbreaking without setup. 100 SpA → 150 effective, plus Normalize 1.8×. |
| #3 | **Leftovers** | For Wish + Calm Mind tank set — sustainable recovery. |

---

## Core Strategy

**The pitch:** Delcatty turns every coverage move in the game into a Normal STAB hit with 1.8× effective power. You don't build a moveset for coverage — you build it for power level, PP, and secondary effects. Sing puts enemies to sleep. Calm Mind boosts SpA and SpD. Hyper Voice is the consistent heavy hitter. Shadow Ball and Thunderbolt exist because they have good power and PP, and via Normalize they hit just as hard as Hyper Voice.

**Two-turn cycle:** Sing (sleep) → Calm Mind → sweep. Or: turn 1 Hyper Voice, pivot with Wish if low.

---

## Team Synergy

- **Ghost types** — Delcatty's moves all become Normal via Normalize. Ghost types are now immune to everything Delcatty does. Needs a teammate to handle Ghosts.
- **Rock/Steel types** — Normal type has no SE coverage. Partner needs to cover hard walls.
- **Hazard setters** — Delcatty forces switches with Sing + threat of sweep. Stealth Rock on switch-in adds pressure.
- **Physical sweeper partners** — Delcatty is SpA-focused. A physical partner (Hariyama, Aggron) handles what Delcatty can't.

---

## Weaknesses

- **Ghost immunity** — Normalize makes all moves Normal. Ghost types are completely immune to every move Delcatty uses. Hardest counter.
- **Fighting weakness** — Normal type has a Fighting weakness. Physical fighters OHKO with Fighting moves.
- **No true coverage** — Silk Scarf/Normalize gives raw power but no type advantage. Resistant walls don't take SE damage, just neutral 1.8× hits.
- **Setup reliance** — Best set needs Calm Mind and Sing to truly shine. Opponents can exploit the turns spent setting up.

---

## Status
✅ **Implemented**
- Skitty: 55/50/50/65/55/80 (355 BST)
- Delcatty: 75/75/70/100/75/95 (490 BST)
- Ability: Normalize (primary), Cute Charm (secondary), Wonder Skin (hidden)
- Evolution: Level 16 (removed Moon Stone)
- Learnset: Skitty gets Return at L8, Sing at L12; Delcatty gets Hyper Voice→Calm Mind→Shadow Ball→Wish→Thunderbolt→Double-Edge
