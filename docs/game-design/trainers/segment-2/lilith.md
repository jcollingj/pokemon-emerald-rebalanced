---
name: Lilith
class: Battle Girl
route: Dewford Gym
segment: 2
status: implemented
type: mandatory
---

# Lilith (Battle Girl) — Dewford Gym

## Team
| Pokemon | Level | Item | Ability | Moves |
|---------|-------|------|---------|-------|
| Sableye | 18 | Sitrus Berry | Prankster | Will-O-Wisp, Feint Attack, Taunt, Shadow Sneak |
| Makuhita | 18 | None | Iron Fist | Mach Punch, Fire Punch, Drain Punch, Bulk Up |
| Hitmontop | 19 | Eviolite | Contrary | Triple Kick, Close Combat, Rapid Spin, Sucker Punch |

## Puzzle

Lilith is the hardest pre-Cristian trainer — a two-stage trap. Sableye leads and immediately fires Prankster Will-O-Wisp before the player can act, burning any physical attacker. Now the player's main sweeper is crippled. Makuhita bridges to Hitmontop: Mach Punch chips weakened targets, Drain Punch heals back burn damage on Makuhita if the fight drags. Hitmontop closes with the gym's nastiest mechanic: Contrary Close Combat. Every Close Combat use raises Hitmontop's Def and SpD by 1 instead of lowering them. After two uses, physical moves deal roughly 60% of their normal damage to it. The Eviolite doubles down on that defensive snowball. Players who try to brute-force Hitmontop watch it become unkillable. The answer is a fast special attacker unaffected by burn.

## Design Notes
- Sableye's burn before Hitmontop arrives is the setup — physical attackers are already crippled by the time Hitmontop enters
- Contrary Close Combat is the puzzle's climax: players who don't understand Contrary will see Hitmontop's Defense going up and panic
- Eviolite on Hitmontop compounds the Contrary bulk stack — after 2 CC uses + Eviolite, even neutral special moves struggle
- Sucker Punch is there to punish special attackers who try to OHKO Hitmontop — predicts the "answer" and punishes it
- Rapid Spin utility means Hitmontop can clear any Stealth Rock the player's team might be taking chip from
- Makuhita has no item intentionally — it's the transition piece; Sableye and Hitmontop are the stars, Makuhita is the filler threat between them
