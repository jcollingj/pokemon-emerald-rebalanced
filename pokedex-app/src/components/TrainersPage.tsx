import { useState, useEffect, useMemo, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search } from "lucide-react";

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

interface TrainersPageProps {
  navigate: (path: string) => void;
}

export function TrainersPage({ navigate }: TrainersPageProps) {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("id");
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch trainers:", err);
        setLoading(false);
      });
  }, []);

  const allClasses = useMemo(() => {
    const classes = new Set<string>();
    trainers.forEach((t) => classes.add(t.trainerClass));
    return Array.from(classes).sort();
  }, [trainers]);

  const filteredAndSortedTrainers = useMemo(() => {
    let filtered = trainers;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((t) =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.trainerClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.id.toString().includes(searchTerm)
      );
    }

    // Filter by class
    if (classFilter !== "all") {
      filtered = filtered.filter((t) => t.trainerClass === classFilter);
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "id":
        sorted.sort((a, b) => a.id - b.id);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "class":
        sorted.sort((a, b) => a.trainerClass.localeCompare(b.trainerClass));
        break;
      case "partySize":
        sorted.sort((a, b) => b.party.length - a.party.length);
        break;
    }

    return sorted;
  }, [trainers, searchTerm, classFilter, sortBy]);

  // Auto-focus search input on mount
  useEffect(() => {
    if (!selectedTrainer && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [selectedTrainer]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (selectedTrainer || document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.min(prev + 1, filteredAndSortedTrainers.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.min(prev + 4, filteredAndSortedTrainers.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 4, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredAndSortedTrainers[highlightedIndex]) {
          setSelectedTrainer(filteredAndSortedTrainers[highlightedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTrainer, highlightedIndex, filteredAndSortedTrainers]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchTerm, classFilter, sortBy]);

  useEffect(() => {
    if (!selectedTrainer) {
      const highlightedElement = document.querySelector(`[data-trainer-index="${highlightedIndex}"]`);
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [highlightedIndex, selectedTrainer]);

  if (loading) {
    return <div className="text-center py-8">Loading trainers...</div>;
  }

  if (selectedTrainer) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => setSelectedTrainer(null)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">
                  {selectedTrainer.name}
                </CardTitle>
                <CardDescription className="text-lg">{selectedTrainer.trainerClass}</CardDescription>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>ID: {selectedTrainer.id}</div>
                <div>{selectedTrainer.gender}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Trainer Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Pic</div>
                <div className="font-medium">{selectedTrainer.pic}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Music</div>
                <div className="font-medium">{selectedTrainer.music}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Battle Type</div>
                <div className="font-medium">{selectedTrainer.doubleBattle ? 'Double Battle' : 'Single Battle'}</div>
              </div>
              {selectedTrainer.items && selectedTrainer.items.length > 0 && (
                <div>
                  <div className="text-muted-foreground">Items</div>
                  <div className="font-medium">{selectedTrainer.items.join(', ')}</div>
                </div>
              )}
            </div>

            {/* AI Flags */}
            {selectedTrainer.aiFlags.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">AI Flags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTrainer.aiFlags.map((flag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary rounded-md text-sm">
                      {flag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Party */}
            <div>
              <h3 className="font-semibold mb-3">Party ({selectedTrainer.party.length})</h3>
              <div className="space-y-4">
                {selectedTrainer.party.map((mon, idx) => (
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
        <h1 className="text-4xl font-bold">Trainers</h1>
        <div className="w-24" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
          <CardDescription>
            Found {filteredAndSortedTrainers.length} of {trainers.length} trainers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  placeholder="Search by name, class, or ID... (CMD+/)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={classFilter} onValueChange={setClassFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {allClasses.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    {cls}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="id">ID</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="class">Class</SelectItem>
                <SelectItem value="partySize">Party Size</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAndSortedTrainers.map((t, index) => (
          <Card
            key={t.id}
            data-trainer-index={index}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              index === highlightedIndex ? 'ring-4 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => setSelectedTrainer(t)}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{t.name}</span>
                <span className="text-sm text-muted-foreground">#{t.id}</span>
              </CardTitle>
              <CardDescription className="text-base font-semibold text-foreground">
                {t.trainerClass}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm text-muted-foreground">
                {t.party.length} Pokémon
              </div>
              <div className="text-xs">
                {t.party.map((mon, idx) => (
                  <span key={idx}>
                    {mon.species} (Lv. {mon.level})
                    {idx < t.party.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              {t.doubleBattle && (
                <div className="pt-2">
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-semibold">
                    Double Battle
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}