---
name: Seviper
dex_number: 336
status: designed
ability: Infiltrator
role: Screen-Breaking Mixed Attacker
ideal_items: Life Orb, Choice Specs, Choice Band
evolution_line: [Seviper]
---

# Seviper #336 — Design Doc

## Brainstorm: 3 Options

---

### Option 1: Infiltrator — "The Ambush Predator" ⭐ RECOMMENDED

**Ability:** Infiltrator — ignores the effects of the target's Substitute, Reflect, Light Screen, Aurora Veil, Mist, and Safeguard.

**Build Identity:** A mixed attacker that slithers past every defensive layer, making screens and Substitutes irrelevant.

**Signature Interaction:** Poison Jab + Sludge Bomb both go through Reflect and Light Screen at full damage. A screen-setter hoping to buy their team 3 turns of protection gets punished — Seviper hits as hard as if the screens were never there. Neither physical nor special walls stop it simultaneously.

**Pros:**
- Genuinely unique niche: no other Poison-type in the game breaks screens from both the physical and special side
- 100/100 mixed offense means the opponent cannot commit to one defense — they have to respect both Poison Jab AND Sludge Bomb
- Thematically perfect — "The Fang Snake" that infiltrates through defenses mirrors its Pokédex identity
- Zangoose (Toxic Boost) is already the rivalry's physical sweeper; Infiltrator gives Seviper a completely different role from its rival
- Dark-type moves (Night Slash, Crunch) also benefit — bypass Substitute AND get coverage on Psychic/Ghost types

**Cons:**
- Passive vs opponents who don't set up screens or Substitutes (though rare to never see them)
- 65 base Speed hurts — needs a Speed buff to reliably threaten before getting hit
- No self-sustain: once it's in, it hits hard but needs to hit first

---

### Option 2: Shed Skin — "The Molting Striker"

**Ability:** Shed Skin — 33% chance to cure a status condition each turn.

**Build Identity:** A durable mixed attacker that uses Rest as reliable recovery, waking up fast enough to keep the offensive pressure alive.

**Signature Interaction:** Rest + Shed Skin — sleep to full HP, then Shed Skin wakes Seviper up on average within 1–2 turns. Seviper can trade hits, Rest when low, and immediately threaten again. Opponents can't stall it with Toxic or Will-O-Wisp since status just rolls off.

**Pros:**
- Surprising longevity for an "attacker" — Rest+Shed Skin is a proven combo (Dragonite, Goodra) that's underused in early-game contexts
- Burns and poison can't whittle down Seviper's mixed offense; it sheds them and keeps attacking
- Thematically resonant: shedding your skin literally means renewal
- Doesn't need special setup — just attack, Rest when needed, repeat

**Cons:**
- 33% per turn is RNG — sometimes Shed Skin procs turn 1, sometimes you sleep through 3 turns and get swept
- Doesn't shape the learnset in an exciting way — most moves work fine regardless of Shed Skin
- Roselia already has a sustain-while-attacking identity (Triage drain loop); Shed Skin Seviper would feel thematically adjacent even if mechanically different
- Doesn't distinguish Seviper from vanilla — Shed Skin is its existing Ability 1 in the base data

---

### Option 3: Corrosion — "The Universal Venom" (Creative Pick)

**Ability:** Corrosion — can poison any Pokémon regardless of type, including Steel-types and Poison-types that are normally immune.

**Build Identity:** A poison-spreading utility attacker that enables poison combos for the whole team — Toxic hits Steel types, Beedrill gets Merciless crits, Nidoking gets Toxic Boost setups.

**Signature Interaction:** Corrosion + Toxic — Seviper switches in, Toxics a Steel-type (Aron, Magnemite) that no other Poison-type can touch, then either pivots to a teammate that exploits poison (Beedrill's Merciless, Nidoking's Toxic Boost) or keeps attacking with 100/100 mixed offense.

**Pros:**
- Completely unique: Corrosion is a Salandit/Salazzle ability — giving it to Seviper makes it the only early-game universal poisoner
- Team synergy is exceptional: poisons Steels for Beedrill (Merciless crits), Nidoqueen (Venoshock), and any teammate with poison-exploitation moves
- Very thematic — a snake specifically evolved to have venom that poisons *anything*, even things normally immune
- Creates cross-game tension: "do I toxic the Steel now or attack?"

**Cons:**
- Corrosion's value is entirely in the Toxic application — if poison is cured or the opponent switches, the ability contributed nothing to combat directly
- The mixed 100/100 offense becomes secondary to the utility role, making Seviper feel like support rather than a threat
- In-game trainers rarely use Steel-types in the early-mid game (Segment 3 context: Aron appears, Magnemite maybe), limiting the number of moments where Corrosion matters
- Feels more like a Gen 7 mechanic transplanted to an Emerald game — might not fit the simpler game context

---

## Recommendation: **Option 1 — Infiltrator**

> **Zangoose is already the rivalry's physical Poison sweeper (Toxic Boost).** Seviper should be something Zangoose can never be.

Infiltrator gives Seviper a role that is:
1. **Mechanically unique** — no other Poison-type in the roster breaks screens from both physical and special simultaneously
2. **Stat-aligned** — equal 100/100 Atk/SpA is wasted on a build that goes all-in on one side; Infiltrator rewards running both Poison Jab and Sludge Bomb
3. **Thematically coherent** — "The Fang Snake that infiltrates past your defenses" is a clean, memorable fantasy
4. **Structurally differentiated from the rival** — Zangoose hits hard in a straight line; Seviper punishes the opponent for trying to mitigate that with screens

The learnset design is also more exciting: both physical and special Poison moves matter, Dark coverage moves (Night Slash, Crunch) get Infiltrator's Substitute-bypassing bonus, and Coil becomes a powerful lategame setup that makes physical Infiltrator hits even more threatening.

---

## Stat Changes

| Stat | Vanilla | Rebalanced | Change |
|------|---------|------------|--------|
| HP | 73 | **80** | +7 |
| Atk | 100 | **100** | — |
| Def | 60 | **65** | +5 |
| SpA | 100 | **100** | — |
| SpD | 60 | **65** | +5 |
| Spe | 65 | **85** | +20 |
| **BST** | **458** | **495** | **+37** |

**Rationale:**
- **+20 Speed** — 65 is too slow for a mixed attacker in mid-game. 85 Speed puts Seviper at a meaningful bracket: outspeeds Zangoose (90 vanilla Speed... but Zangoose gets buffed too, so this number may need revisiting in context). Enough to feel threatening without being an automatic outspeeder.
- **+7 HP** — Modest bulk bump. A mixed attacker needs enough HP to take a hit before responding, not to wall.
- **+5 Def / +5 SpD** — Small defensive bumps so Seviper can absorb one hit from either side. Not a tank — just survivable enough to get its attack off.
- **Atk/SpA unchanged at 100/100** — These are strong enough. The stat story here is Speed and a bit of bulk, not raw power.

---

## Learnset (Infiltrator Build)

| Level | Move | BP | Type | Category | Purpose |
|-------|------|----|------|----------|---------|
| 1 | Wrap | 15 | Normal | Physical | Snake starter — trapping thematic |
| 1 | Leer | — | Normal | Status | Defense drop opener |
| 8 | **Poison Sting** | 30 | Poison | Physical | First STAB — 30% poison chance; build turns on, Infiltrator bypasses early Subs |
| 12 | **Bite** | 60 | Dark | Physical | Dark coverage that bypasses Substitute with Infiltrator |
| 16 | **Glare** | — | Normal | Status | Paralysis — thematic (snake's paralyzing stare), slows threats that outspeed |
| 21 | **Poison Jab** | 80 | Poison | Physical | Physical Poison STAB gets real — goes through Reflect at full damage |
| 24 | **Sludge Bomb** | 90 | Poison | Special | Special Poison STAB — now Seviper threatens both sides through screens |
| 27 | **Night Slash** | 70 | Dark | Physical | High crit ratio Dark coverage; bypasses Substitute |
| 33 | **Coil** | — | Poison | Status | +1 Atk / +1 Def / +1 Acc — powerful setup that makes physical Infiltrator hits devastating |
| 38 | **Crunch** | 80 | Dark | Physical | Stronger Dark move, -1 Def chance; bypasses Substitute |
| 42 | **Sludge Wave** | 95 | Poison | Special | AoE Poison nuke — hits through Light Screen at full power |
| 48 | **Gunk Shot** | 120 | Poison | Physical | Physical Poison nuke — 120 BP through Reflect, the payoff for staying in |

### Teachable Learnset (key additions)
- Flamethrower — hits Steel types (especially useful since Infiltrator doesn't help vs Steel's Poison immunity)
- Earthquake — coverage
- Shadow Ball — Special Ghost coverage
- Toxic — poison utility (note: does NOT bypass Steel/Poison immunity — use against Normal/other types)
- Iron Tail — Steel coverage
- Substitute — ironic: Seviper can use Sub while also punishing opponents for using Sub

---

## Ideal Items

1. **Life Orb** — 1.3x damage on all moves at the cost of 10% HP per turn. With 100/100 mixed offense and Infiltrator, Life Orb Seviper threatens everything through any defense. The recoil is acceptable given Seviper's 80 HP and the fact that screens/subs can't reduce its incoming "real" damage either.
2. **Choice Specs** — 1.5x SpA, locks into one move. When running special-focused set (Sludge Bomb / Sludge Wave / Flamethrower / Shadow Ball), screens in the way? Still full 1.5x damage through them.
3. **Choice Band** — 1.5x Atk, locks into one move. Post-Coil setup, a Choice Band Gunk Shot through Reflect is nearly unresistable at this segment of the game.

---

## Core Strategy

### The Screen-Breaker
1. Opponent sets Reflect or Light Screen to protect their team
2. Send in Seviper — Infiltrator means both Poison Jab and Sludge Bomb hit at full damage regardless
3. Mixed 100/100 offense means they can't just stack one defensive side; Reflect doesn't stop Sludge Bomb, Light Screen doesn't stop Poison Jab
4. Dark moves (Night Slash, Crunch) bypass Substitute for additional mindgames

### The Setup Variant
1. Use Glare to paralyze a faster threat (Seviper needs Speed investment, but some threats are faster)
2. Coil on the next turn — Atk/Def/Acc all +1
3. +1 Gunk Shot through Reflect, or Sludge Wave through Light Screen — devastating

### Item Choice Context
- **Life Orb** for the mixed sweeper role (run both Poison Jab and Sludge Bomb)
- **Choice Band** when going physical-only post-Coil: Glare → Coil → Band Gunk Shot
- **Choice Specs** for the special-focused Infiltrator set

---

## Team Synergy

- **Pairs naturally with screen-setting opponents** — any double battle or trainer rotation that uses screens walks into Seviper's niche
- **Zangoose (Toxic Boost)** — they share Poison moves in the route; Seviper draws out Reflects designed to wall Zangoose, then punishes them. Rival dynamic extends to the battlefield.
- **Beedrill (Merciless)** — Seviper Glares or poisons the target, Beedrill comes in for guaranteed crits on the poisoned Pokémon
- **Teammates with Earthquake** — Seviper's poison moves don't handle Steel/Ground types cleanly; Ground-type teammates cover that gap

---

## Matchup Notes

**Strong vs:** Screen setters (Reflect/Light Screen trainers), Sub-users (ignores Sub entirely), bulky special walls using Light Screen, anything weak to Poison or Dark
**Weak vs:** Steel types (Poison immune — need Flamethrower from teachable), Ground types (Earthquake), Psychic (super-effective vs Poison), faster sweepers before Glare lands
**Seviper vs Zangoose:** The rivalry plays out like this — Zangoose (Toxic Boost) is a direct linear physical sweeper that hits like a truck. Seviper punishes defensive responses to Zangoose. If the opponent stacks Reflect to stop Zangoose... switch to Seviper.

---

## Encounter Context

Seviper appears on Route 110 as a rare Poison-type (Level 13), rivaling Zangoose in the same encounter table. At Level 13 it knows Wrap, Leer, Poison Sting, and Bite — all four moves benefit from Infiltrator (Poison Sting through early Subs, Bite bypassing Sub). The build "turns on" immediately. By the time it reaches Level 21 (Poison Jab) and 24 (Sludge Bomb), the mixed Infiltrator identity is fully online ahead of Wattson's gym.
