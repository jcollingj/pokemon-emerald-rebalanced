import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface TrainerMon {
  species: string;
  nickname?: string;
  level: number;
  heldItem?: string;
  moves?: string[];
  ability?: string;
  nature?: string;
  ivs?: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  evs?: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  shiny?: boolean;
  ball?: string;
}

interface Trainer {
  id: number;
  constantName: string;
  name: string;
  trainerClass: string;
  pic: string;
  gender: string;
  music: string;
  items?: string[];
  doubleBattle: boolean;
  aiFlags: string[];
  party: TrainerMon[];
  location?: string;
}

interface GymLeadersPageProps {
  navigate: (path: string) => void;
}

const GYM_LEADER_INFO: Record<string, { badge: string; type: string; location: string; order: number }> = {
  'ROXANNE': { badge: 'Stone Badge', type: 'Rock', location: 'Rustboro City', order: 1 },
  'BRAWLY': { badge: 'Knuckle Badge', type: 'Fighting', location: 'Dewford Town', order: 2 },
  'WATTSON': { badge: 'Dynamo Badge', type: 'Electric', location: 'Mauville City', order: 3 },
  'FLANNERY': { badge: 'Heat Badge', type: 'Fire', location: 'Lavaridge Town', order: 4 },
  'NORMAN': { badge: 'Balance Badge', type: 'Normal', location: 'Petalburg City', order: 5 },
  'WINONA': { badge: 'Feather Badge', type: 'Flying', location: 'Fortree City', order: 6 },
  'TATE_AND_LIZA': { badge: 'Mind Badge', type: 'Psychic', location: 'Mossdeep City', order: 7 },
  'JUAN': { badge: 'Rain Badge', type: 'Water', location: 'Sootopolis City', order: 8 },
};

const ELITE_FOUR_INFO: Record<string, { type: string; order: number }> = {
  'SIDNEY': { type: 'Dark', order: 1 },
  'PHOEBE': { type: 'Ghost', order: 2 },
  'GLACIA': { type: 'Ice', order: 3 },
  'DRAKE': { type: 'Dragon', order: 4 },
  'WALLACE': { type: 'Water', order: 5 },
};

export function GymLeadersPage({ navigate }: GymLeadersPageProps) {
  const [leaders, setLeaders] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLeader, setSelectedLeader] = useState<Trainer | null>(null);

  useEffect(() => {
    fetch("/api/gym-leaders")
      .then((res) => res.json())
      .then((data) => {
        setLeaders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch gym leaders:", err);
        setLoading(false);
      });
  }, []);

  const getLeaderInfo = (leader: Trainer) => {
    const baseName = leader.constantName.replace(/_\d+$/, '').replace('TRAINER_', '');
    return GYM_LEADER_INFO[baseName] || ELITE_FOUR_INFO[baseName];
  };

  const isEliteFour = (leader: Trainer) => {
    const baseName = leader.constantName.replace(/_\d+$/, '').replace('TRAINER_', '');
    return baseName in ELITE_FOUR_INFO;
  };

  const gymLeaders = leaders.filter(l => !isEliteFour(l));
  const eliteFour = leaders.filter(l => isEliteFour(l));

  // Group by base name and get all versions
  const getAllVersions = (trainers: Trainer[]) => {
    const grouped = new Map<string, Trainer[]>();
    trainers.forEach(trainer => {
      const baseName = trainer.constantName.replace(/_\d+$/, '').replace('TRAINER_', '');
      if (!grouped.has(baseName)) {
        grouped.set(baseName, []);
      }
      grouped.get(baseName)!.push(trainer);
    });
    // Sort each group by ID
    grouped.forEach(versions => versions.sort((a, b) => a.id - b.id));
    return grouped;
  };

  const groupedGymLeaders = getAllVersions(gymLeaders);
  const groupedEliteFour = getAllVersions(eliteFour);

  // Sort by gym order
  const sortedGymLeaderNames = Array.from(groupedGymLeaders.keys()).sort((a, b) => {
    const infoA = GYM_LEADER_INFO[a];
    const infoB = GYM_LEADER_INFO[b];
    return (infoA?.order || 0) - (infoB?.order || 0);
  });

  const sortedEliteFourNames = Array.from(groupedEliteFour.keys()).sort((a, b) => {
    const infoA = ELITE_FOUR_INFO[a];
    const infoB = ELITE_FOUR_INFO[b];
    return (infoA?.order || 0) - (infoB?.order || 0);
  });

  const getVersionNumber = (trainer: Trainer) => {
    const match = trainer.constantName.match(/_(\d+)$/);
    return match ? parseInt(match[1], 10) : 1;
  };

  if (loading) {
    return <div className="text-center py-8">Loading gym leaders...</div>;
  }

  if (selectedLeader) {
    const info = getLeaderInfo(selectedLeader);
    const isE4 = isEliteFour(selectedLeader);

    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => setSelectedLeader(null)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl">
                  {selectedLeader.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  {isE4 ? 'Elite Four' : 'Gym Leader'}
                </CardDescription>
              </div>
              <div className="text-right">
                {info && (
                  <div className="space-y-1">
                    {!isE4 && 'badge' in info && (
                      <div className="text-lg font-semibold">{info.badge}</div>
                    )}
                    <div className="text-sm text-muted-foreground">{info.type} Type</div>
                    {!isE4 && 'location' in info && (
                      <div className="text-sm text-muted-foreground">{info.location}</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Trainer Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Version</div>
                <div className="font-medium">
                  {selectedLeader.constantName.match(/_(\d+)$/)?.[1] || '1'}
                </div>
              </div>
              {selectedLeader.items && selectedLeader.items.length > 0 && (
                <div>
                  <div className="text-muted-foreground">Items</div>
                  <div className="font-medium">{selectedLeader.items.join(', ')}</div>
                </div>
              )}
              <div>
                <div className="text-muted-foreground">Battle Type</div>
                <div className="font-medium">{selectedLeader.doubleBattle ? 'Double Battle' : 'Single Battle'}</div>
              </div>
            </div>

            {/* AI Flags */}
            {selectedLeader.aiFlags.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">AI Flags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedLeader.aiFlags.map((flag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary rounded-md text-sm">
                      {flag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Party */}
            <div>
              <h3 className="font-semibold mb-3">Party ({selectedLeader.party.length})</h3>
              <div className="space-y-4">
                {selectedLeader.party.map((mon, idx) => (
                  <Card key={idx}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          {mon.nickname ? `${mon.nickname} (${mon.species})` : mon.species}
                        </CardTitle>
                        <div className="text-sm font-bold">Lv. {mon.level}</div>
                      </div>
                      {mon.heldItem && (
                        <CardDescription>@ {mon.heldItem}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {mon.ability && (
                          <div>
                            <span className="text-muted-foreground">Ability:</span> {mon.ability}
                          </div>
                        )}
                        {mon.nature && (
                          <div>
                            <span className="text-muted-foreground">Nature:</span> {mon.nature}
                          </div>
                        )}
                        {mon.shiny && (
                          <div className="col-span-2">
                            <span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs">✨ Shiny</span>
                          </div>
                        )}
                      </div>

                      {/* IVs */}
                      {mon.ivs && (
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">IVs</div>
                          <div className="grid grid-cols-6 gap-1 text-xs">
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.ivs.hp}</div>
                              <div className="text-muted-foreground">HP</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.ivs.attack}</div>
                              <div className="text-muted-foreground">Atk</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.ivs.defense}</div>
                              <div className="text-muted-foreground">Def</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.ivs.spAttack}</div>
                              <div className="text-muted-foreground">SpA</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.ivs.spDefense}</div>
                              <div className="text-muted-foreground">SpD</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.ivs.speed}</div>
                              <div className="text-muted-foreground">Spe</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* EVs */}
                      {mon.evs && Object.values(mon.evs).some(ev => ev > 0) && (
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">EVs</div>
                          <div className="grid grid-cols-6 gap-1 text-xs">
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.evs.hp}</div>
                              <div className="text-muted-foreground">HP</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.evs.attack}</div>
                              <div className="text-muted-foreground">Atk</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.evs.defense}</div>
                              <div className="text-muted-foreground">Def</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.evs.spAttack}</div>
                              <div className="text-muted-foreground">SpA</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.evs.spDefense}</div>
                              <div className="text-muted-foreground">SpD</div>
                            </div>
                            <div className="text-center p-1 bg-muted rounded">
                              <div className="font-semibold">{mon.evs.speed}</div>
                              <div className="text-muted-foreground">Spe</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Moves */}
                      {mon.moves && mon.moves.length > 0 && (
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Moves</div>
                          <div className="space-y-1">
                            {mon.moves.map((move, moveIdx) => (
                              <div key={moveIdx} className="px-2 py-1 bg-muted rounded text-sm">
                                - {move}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
        <h1 className="text-4xl font-bold">Gym Leaders & Elite Four</h1>
        <div className="w-24" />
      </div>

      {/* Gym Leaders */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Gym Leaders</h2>
        <div className="space-y-8">
          {sortedGymLeaderNames.map((baseName) => {
            const versions = groupedGymLeaders.get(baseName)!;
            const info = GYM_LEADER_INFO[baseName];
            const firstVersion = versions[0];
            const rematches = versions.slice(1);

            return (
              <div key={baseName} className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">{firstVersion.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {info.location} • {info.type} Type • {info.badge}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {/* First Battle */}
                  <Card
                    className="cursor-pointer transition-all hover:shadow-lg border-2 border-primary"
                    onClick={() => setSelectedLeader(firstVersion)}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between text-base">
                        <span>Initial Battle</span>
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded font-bold">
                          #{info.order}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-xs space-y-1">
                        {firstVersion.party.map((mon, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{mon.species}</span>
                            <span className="text-muted-foreground font-semibold">Lv. {mon.level}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Rematches */}
                  {rematches.map((rematch) => {
                    const versionNum = getVersionNumber(rematch);
                    return (
                      <Card
                        key={rematch.id}
                        className="cursor-pointer transition-all hover:shadow-lg border-2 border-amber-500"
                        onClick={() => setSelectedLeader(rematch)}
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center justify-between text-base">
                            <span>Rematch {versionNum - 1}</span>
                            <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded font-bold">
                              v{versionNum}
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="text-xs space-y-1">
                            {rematch.party.map((mon, idx) => (
                              <div key={idx} className="flex justify-between">
                                <span>{mon.species}</span>
                                <span className="text-muted-foreground font-semibold">Lv. {mon.level}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Elite Four */}
      {groupedEliteFour.size > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Elite Four & Champion</h2>
          <div className="space-y-8">
            {sortedEliteFourNames.map((baseName) => {
              const versions = groupedEliteFour.get(baseName)!;
              const info = ELITE_FOUR_INFO[baseName];
              const firstVersion = versions[0];
              const rematches = versions.slice(1);

              return (
                <div key={baseName} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">{firstVersion.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {info.order === 5 ? 'Champion' : 'Elite Four'} • {info.type} Type
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {/* First Battle */}
                    <Card
                      className="cursor-pointer transition-all hover:shadow-lg border-2 border-purple-500"
                      onClick={() => setSelectedLeader(firstVersion)}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between text-base">
                          <span>Initial Battle</span>
                          <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded font-bold">
                            #{info.order}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-xs space-y-1">
                          {firstVersion.party.map((mon, idx) => (
                            <div key={idx} className="flex justify-between">
                              <span>{mon.species}</span>
                              <span className="text-muted-foreground font-semibold">Lv. {mon.level}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Rematches */}
                    {rematches.map((rematch) => {
                      const versionNum = getVersionNumber(rematch);
                      return (
                        <Card
                          key={rematch.id}
                          className="cursor-pointer transition-all hover:shadow-lg border-2 border-pink-500"
                          onClick={() => setSelectedLeader(rematch)}
                        >
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center justify-between text-base">
                              <span>Rematch {versionNum - 1}</span>
                              <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded font-bold">
                                v{versionNum}
                              </span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div className="text-xs space-y-1">
                              {rematch.party.map((mon, idx) => (
                                <div key={idx} className="flex justify-between">
                                  <span>{mon.species}</span>
                                  <span className="text-muted-foreground font-semibold">Lv. {mon.level}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}