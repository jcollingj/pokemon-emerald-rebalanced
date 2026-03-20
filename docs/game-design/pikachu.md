---
name: Pikachu
dex_number: 25
status: implemented
ability: Static
role: Light Ball Specialist
evolution_line: [Pikachu, Raichu]
---

# Pikachu - The Light Ball Specialist

## Design Philosophy
Pikachu is the **iconic electric glass cannon** that becomes a powerhouse when holding its signature Light Ball item. With Transistor ability and 100 Speed, Pikachu hits incredibly hard while maintaining its fragile but fast identity.

## Base Stats (BST: 370)

```
HP:  45  ████████
ATK: 65  ████████████
DEF: 45  ████████
SPA: 60  ███████████
SPD: 55  ██████████
SPE: 100 ████████████████████
```

**Stat Changes from Vanilla:**
- HP: 35 → **45** (+10)
- Attack: 55 → **65** (+10)
- Defense: 30/40 → **45** (+5/+15)
- Speed: 90 → **100** (+10)
- Sp. Attack: 50 → **60** (+10)
- Sp. Defense: 40/50 → **55** (+5/+15)

**Total BST:** 300 → **370** (+70)

---

## Abilities

### ⚡ Transistor (Ability 1)
**Effect:** Boosts Electric-type moves by 50%
**Why:** Synergizes perfectly with Light Ball! Massive damage output on Electric STAB.

**Calculation:**
- Base Sp. Attack: 60
- With Light Ball: 60 × 2 = **120**
- Transistor boost: Electric moves use 120 × 1.5 = **180 effective Sp. Attack!**

### 🏎️ Motor Drive (Ability 2)
**Effect:** Immune to Electric moves, Speed +1 when hit by Electric attacks
**Why:**
- Speed control in Electric-heavy matchups
- Turns weakness into advantage
- Synergizes with 100 base Speed to become unstoppable

### 🎯 Lightning Rod (Hidden Ability)
**Effect:** Draws Electric moves in doubles, immune + Sp. Attack +1 when hit
**Why:**
- Doubles/Multi battle support
- Protects teammates from Electric
- Free Sp. Attack boosts

---

## Signature Item: Light Ball

**Effect:** Doubles both Attack and Sp. Attack stats

**Stats with Light Ball:**
- Attack: 65 → **130** (!)
- Sp. Attack: 60 → **120** (!)

**With Transistor:**
- Effective Electric Sp. Attack: **180**

**Wild Encounter:** Pikachu on Route 102 always holds Light Ball (rare item slot)

---

## Full Moveset Progression

### **Early Game (Levels 1-14)** - Power Spike Zone

| Level | Move | Type | Cat | Power | Acc | Effect |
|-------|------|------|-----|-------|-----|--------|
| 1 | **Thunder Shock** | Electric | Special | 40 | 100 | Basic STAB |
| 1 | Growl | Normal | Status | - | 100 | Lower Attack |
| 5 | Tail Whip | Normal | Status | - | 100 | Lower Defense |
| **8** | **Thunder Wave** | Electric | Status | - | 90 | **Paralyze (setup)** |
| **10** | **Nuzzle** | Electric | Physical | 20 | 100 | **100% paralyze + contact** |
| **12** | **Quick Attack** | Normal | Physical | 40 | 100 | **Priority +1** |
| **14** | **Volt Switch** | Electric | Special | 70 | 100 | **Pivot move!** |

**Early Game Strategy:**
- Thunder Shock with Transistor = 60 power STAB
- Thunder Wave for speed control
- Nuzzle for guaranteed paralyze + chip damage
- Quick Attack for priority revenge kills
- **Volt Switch for momentum** - Hit and switch!

### **Mid Game (Levels 16-30)** - Core Moveset

| Level | Move | Type | Cat | Power | Acc | Effect |
|-------|------|------|-----|-------|-----|--------|
| 16 | **Spark** | Electric | Physical | 65 | 100 | 30% paralyze chance |
| 18 | **Fake Out** | Normal | Physical | 40 | 100 | **Priority +3, flinch (1st turn only)** |
| 20 | **Discharge** | Electric | Special | 80 | 100 | 30% paralyze, hits all adjacent |
| 24 | **Thunderbolt** | Electric | Special | 90 | 100 | **Main STAB move** |
| 28 | **Agility** | Psychic | Status | - | - | **Speed +2 (setup)** |
| 30 | **Thunder Punch** | Electric | Physical | 75 | 100 | 10% paralyze, punch move |

**Mid Game Strategy:**
- Thunderbolt becomes main STAB (90 × 1.5 Transistor = 135 power!)
- Fake Out for guaranteed first-turn flinch
- Agility makes Pikachu unstoppable (200 Speed at +2!)
- Thunder Punch for physical coverage
- Discharge for spread damage in doubles

### **Late Game (Levels 31+)** - Full Arsenal

| Level | Move | Type | Cat | Power | Acc | Effect |
|-------|------|------|-----|-------|-----|--------|
| 34 | **Electro Ball** | Electric | Special | Var | 100 | More power vs slower foes |
| 38 | **Wild Charge** | Electric | Physical | 90 | 100 | 25% recoil, strongest physical STAB |
| 42 | **Thunder** | Electric | Special | 110 | 70 | 30% paralyze, strongest special STAB |
| 46 | **Volt Tackle** | Electric | Physical | 120 | 100 | **33% recoil, SIGNATURE MOVE** |
| 50 | **Light Screen** | Psychic | Status | - | - | Halves special damage for 5 turns |

**Late Game Strategy:**
- Thunder for max power (110 × 1.5 = 165 power!)
- Volt Tackle for physical nuke (120 × 1.5 = 180 power with Transistor!)
- Electro Ball scales with speed (up to 150 power vs slow targets)
- Light Screen for team support
- Wild Charge as reliable physical option

---

## Competitive Movesets

### **Special Sweeper (Recommended)**
```
Pikachu @ Light Ball
Ability: Transistor
Nature: Timid (+Speed, -Attack)
EVs: 252 Sp.Atk / 252 Speed / 4 HP

- Thunderbolt (main STAB, consistent)
- Volt Switch (pivot/momentum)
- Quick Attack (priority)
- Thunder Wave / Agility (speed control/setup)
```

**Role:** Fast special attacker with pivot utility
**Effective Stats:** 120 Sp.Atk → **180 on Electric moves**

### **Physical Attacker**
```
Pikachu @ Light Ball
Ability: Transistor
Nature: Jolly (+Speed, -Sp.Atk)
EVs: 252 Attack / 252 Speed / 4 HP

- Wild Charge / Volt Tackle (physical STAB)
- Quick Attack (priority)
- Fake Out (flinch)
- Volt Switch (pivot)
```

**Role:** Hit-and-run physical sweeper
**Effective Attack:** 130

### **Speed Demon**
```
Pikachu @ Light Ball
Ability: Motor Drive
Nature: Timid
EVs: 252 Sp.Atk / 252 Speed / 4 HP

- Agility (setup)
- Thunderbolt (STAB)
- Electro Ball (speed-based)
- Volt Switch (pivot)
```

**Role:** Setup sweeper, speed stacking
**At +2 Speed:** Outspeeds everything!

### **Doubles Support**
```
Pikachu @ Light Ball
Ability: Lightning Rod
Nature: Timid
EVs: 252 Sp.Atk / 252 Speed / 4 HP

- Discharge (spread damage)
- Fake Out (support flinch)
- Volt Switch (pivot)
- Light Screen (team support)
```

**Role:** Draws Electric attacks, protects partners

---

## Key Move Interactions

### **Transistor Synergies:**
- Thunder Shock: 40 → **60 power** early game
- Thunderbolt: 90 → **135 power** mid game
- Thunder: 110 → **165 power** late game
- Volt Tackle: 120 → **180 power** signature move!
- All Electric moves get 1.5× boost

### **Light Ball Calculations:**
| Move | Base | w/ Light Ball | w/ Transistor | Total |
|------|------|---------------|---------------|-------|
| Thunder Shock | 40 | 80 | 60 | Lv 1-9 |
| Thunderbolt | 90 | 180 | 135 | Main STAB |
| Thunder | 110 | 220 | 165 | Max power |
| Volt Tackle | 120 | 240 | 180 | Signature! |

### **Priority Moves:**
1. **Fake Out** (+3 priority) - First turn only, guaranteed flinch
2. **Quick Attack** (+1 priority) - Reliable revenge killer

### **Pivot Strategy:**
- Volt Switch → Deal damage → Switch out → Bring in counter
- Maintains momentum in battle
- Scouts opponent's team
- Avoids bad matchups

### **Speed Control:**
- Base 100 Speed outruns most threats
- Motor Drive: +1 Speed when hit by Electric (150 effective Speed)
- Agility: +2 Speed (200 effective Speed!)
- Thunder Wave: Paralyze opponents (50% Speed)

---

## Strengths

✅ **Offensive Powerhouse**
- With Light Ball + Transistor: 180 effective Sp. Attack on Electric moves
- 100 Speed outspeeds most early/mid-game Pokemon
- Both physical and special options

✅ **Pivot Utility**
- Volt Switch for momentum control
- Hit-and-run tactics
- Team support

✅ **Speed Control**
- Thunder Wave for paralysis
- Motor Drive for immunity + speed boost
- Agility for setup sweeping
- Naturally fast (100 base Speed)

✅ **Priority Access**
- Fake Out (first turn flinch)
- Quick Attack (revenge killer)
- Never gets outsped when it matters

✅ **Versatility**
- Multiple viable ability choices
- Physical, special, or mixed sets
- Singles or doubles viable
- Setup or hit-and-run playstyles

---

## Weaknesses

❌ **Extremely Fragile**
- 45/45/55 defenses = dies to strong hits
- Low HP (45) = small margin for error
- Recoil moves hurt (Volt Tackle, Wild Charge)

❌ **Light Ball Dependent**
- Without Light Ball: mediocre 60/65 offenses
- Needs item slot for signature gimmick
- Can't hold other items (Focus Sash, etc.)

❌ **Ground Weakness**
- Completely helpless vs Ground types
- Electric immunity + super effective = bad matchup
- Limited coverage options

❌ **One-Dimensional Coverage**
- Mostly Electric moves
- Struggles vs Electric-immune Pokemon
- Needs team support for coverage

---

## Counters & Checks

### **Hard Counters:**
- **Ground-types** - Immune to Electric, super effective STAB
  - Diglett, Sandshrew, Geodude, etc.
  - Pikachu literally cannot damage them

### **Soft Counters:**
- **Special Walls** - High Sp. Def tanks
  - Can survive even boosted hits
  - Wear down Pikachu slowly

- **Priority Users** - Revenge kill with priority
  - Mach Punch, Aqua Jet, etc.
  - Low HP = easy KO with priority

- **Physical Attackers** - Exploit low Defense
  - 45 Defense = gets 2HKO'd easily
  - Strong physical moves destroy Pikachu

### **Speed Counters:**
- **Faster Pokemon with Motor Drive/Lightning Rod**
  - Turn Electric moves into advantage
  - Outspeeding Pikachu is rare but deadly

---

## Team Synergies

### **Best Partners:**

1. **Ground-type Coverage**
   - Partner with Flying/Levitate Pokemon
   - Handle Ground-types that wall Pikachu
   - Example: Taillow, Dustox

2. **Pivot Cores**
   - Volt Switch → U-turn chains
   - Maintain momentum
   - Examples: Beautifly (U-turn), Dustox (U-turn)

3. **Rain Dance Teams**
   - Thunder becomes 100% accurate
   - Poliwag (Drizzle!) sets rain
   - 165 power Thunder with perfect accuracy!

4. **Entry Hazard Support**
   - Stealth Rock, Spikes, Sticky Web
   - Pikachu forces switches with Volt Switch
   - Chip damage adds up
   - Example: Dustox (Sticky Web)

5. **Lightning Rod Partners (Doubles)**
   - Pikachu draws Electric moves
   - Protects Water/Flying partners
   - Free Sp. Attack boosts

---

## Matchup Analysis

### **Route 102 Context:**

**vs Wild Pokemon (Levels 7-9):**
- ✅ Outspeeds everything (100 Speed)
- ✅ Thunder Shock OHKOs most with Transistor
- ✅ Quick Attack revenge kills
- ⚠️ Fragile, take chip damage

**vs Route 102 Trainers:**

**vs Calvin (Poochyena Lv9, Zigzagoon Lv8):**
- ✅ Thunderbolt OHKOs both
- ✅ Outspeeds easily
- ⚠️ Bite from Poochyena hurts

**vs Rick (Wurmple Lv11 - Technician):**
- ✅ Resistant to Bug moves
- ✅ Thunderbolt OHKO
- ✅ Easy matchup

**vs Tiana (Lotad Lv11, Marill Lv9):**
- ⚠️ Lotad resists Electric
- ⚠️ Marill has Huge Power
- Strategy: Volt Switch out vs Lotad

**vs Allen (Zigzagoon Lv11 - Belly Drum, Taillow Lv9):**
- ✅ Thunderbolt OHKOs Taillow
- ⚠️ Zigzagoon Belly Drum = threat
- Strategy: Quick Attack to revenge kill

---

## Progression Timeline

**Level 1-9:** Thunder Shock spam, learn Thunder Wave
**Level 10:** Nuzzle for guaranteed paralysis
**Level 12:** Quick Attack for priority
**Level 14:** **Volt Switch unlocked** - PIVOT META!
**Level 16-23:** Spark/Fake Out for utility
**Level 24:** **Thunderbolt** - main STAB online
**Level 28:** Agility for setup sweeping
**Level 30+:** Access to full moveset

---

## Design Notes

### **Why This Works:**

1. **Light Ball Identity** - Embraces signature item, doesn't work without it
2. **High Risk, High Reward** - Glass cannon with massive damage
3. **Speed Tier** - 100 Speed is perfect for early-game dominance
4. **Transistor Synergy** - Ability + item = insane power
5. **Versatility** - Multiple playstyles viable
6. **Competitive Viability** - Actually usable throughout game

### **Balance Considerations:**

- **Still fragile** - Low HP/Def means priority/strong hits KO
- **Item locked** - Needs Light Ball to be good
- **Coverage issues** - Ground types wall completely
- **No evolution pressure** - Pikachu stays Pikachu (no Raichu)

### **Learning Curve:**

- Easy to use: High Speed, strong moves
- Difficult to master: Requires good switching/prediction
- Rewards skill: Volt Switch mind games, setup timing
- Punishes mistakes: Low bulk = instant death

---

## Fun Facts

- ⚡ With Light Ball + Transistor: Pikachu hits as hard as most fully-evolved Pokemon
- 🏎️ At +2 Speed (Agility): Pikachu reaches 200 effective Speed!
- 🎯 Lightning Rod in doubles: Protects entire team from Electric moves
- 💥 Volt Tackle with Light Ball: 240 base power before Transistor boost!
- 🔄 Volt Switch: Damage + pivot = momentum king

---

## Status
✅ **Fully Implemented**
- Stats buffed to 45/65/45/60/55/100
- Abilities: Transistor / Motor Drive / Lightning Rod
- Full competitive moveset (18 moves!)
- Light Ball always held in wild encounters
- Early power spikes at Lv 8, 12, 14
- Pivot move at Lv 14
- Ready for testing!
