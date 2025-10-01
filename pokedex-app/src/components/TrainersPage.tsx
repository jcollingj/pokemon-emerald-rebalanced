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
  const [locationFilter, setLocationFilter] = useState<string>("all");
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

  const allLocations = useMemo(() => {
    const locations = new Set<string>();
    trainers.forEach((t) => {
      if (t.location) locations.add(t.location);
    });
    return Array.from(locations).sort((a, b) => {
      // Extract route numbers for proper sorting
      const routeA = a.match(/Route\s*(\d+)/);
      const routeB = b.match(/Route\s*(\d+)/);
      if (routeA && routeB) {
        return parseInt(routeA[1]) - parseInt(routeB[1]);
      }
      return a.localeCompare(b);
    });
  }, [trainers]);

  const filteredAndSortedTrainers = useMemo(() => {
    let filtered = trainers;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((t) =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.trainerClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.id.toString().includes(searchTerm) ||
        (t.location && t.location.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by class
    if (classFilter !== "all") {
      filtered = filtered.filter((t) => t.trainerClass === classFilter);
    }

    // Filter by location
    if (locationFilter !== "all") {
      filtered = filtered.filter((t) => t.location === locationFilter);
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
      case "location":
        sorted.sort((a, b) => {
          const locA = a.location || "zzz";
          const locB = b.location || "zzz";
          // Extract route numbers for proper sorting
          const routeA = locA.match(/Route\s*(\d+)/);
          const routeB = locB.match(/Route\s*(\d+)/);
          if (routeA && routeB) {
            return parseInt(routeA[1]) - parseInt(routeB[1]);
          }
          return locA.localeCompare(locB);
        });
        break;
    }

    // Limit to 50 results
    return sorted.slice(0, 50);
  }, [trainers, searchTerm, classFilter, locationFilter, sortBy]);

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
  }, [searchTerm, classFilter, locationFilter, sortBy]);

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
                {selectedTrainer.location && (
                  <CardDescription className="text-base mt-1">📍 {selectedTrainer.location}</CardDescription>
                )}
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
              <h3 className="font-semibold mb-2">Party ({selectedTrainer.party.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedTrainer.party.map((mon, idx) => (
                  <Card key={idx} className="p-3">
                    <div className="space-y-2">
                      {/* Header - Name, Level, Item */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm">
                            {mon.nickname ? `${mon.nickname} (${mon.species})` : mon.species}
                          </span>
                          <span className="text-xs font-bold">Lv. {mon.level}</span>
                        </div>
                        {mon.heldItem && (
                          <div className="text-xs text-muted-foreground">@ {mon.heldItem}</div>
                        )}
                      </div>

                      {/* Ability & Nature */}
                      <div className="text-xs space-y-0.5">
                        {mon.ability && (
                          <div><span className="text-muted-foreground">Ability:</span> {mon.ability}</div>
                        )}
                        {mon.nature && (
                          <div><span className="text-muted-foreground">Nature:</span> {mon.nature}</div>
                        )}
                      </div>

                      {/* IVs - Compact inline */}
                      {mon.ivs && (
                        <div className="text-xs">
                          <span className="text-muted-foreground">IVs:</span> {mon.ivs.hp} HP / {mon.ivs.attack} Atk / {mon.ivs.defense} Def / {mon.ivs.spAttack} SpA / {mon.ivs.spDefense} SpD / {mon.ivs.speed} Spe
                        </div>
                      )}

                      {/* EVs - Compact inline (only if they exist) */}
                      {mon.evs && Object.values(mon.evs).some(ev => ev > 0) && (
                        <div className="text-xs">
                          <span className="text-muted-foreground">EVs:</span> {mon.evs.hp > 0 && `${mon.evs.hp} HP`}{mon.evs.attack > 0 && ` / ${mon.evs.attack} Atk`}{mon.evs.defense > 0 && ` / ${mon.evs.defense} Def`}{mon.evs.spAttack > 0 && ` / ${mon.evs.spAttack} SpA`}{mon.evs.spDefense > 0 && ` / ${mon.evs.spDefense} SpD`}{mon.evs.speed > 0 && ` / ${mon.evs.speed} Spe`}
                        </div>
                      )}

                      {/* Moves - Compact */}
                      {mon.moves && mon.moves.length > 0 && (
                        <div className="text-xs">
                          <div className="text-muted-foreground mb-0.5">Moves:</div>
                          <div className="space-y-0.5">
                            {mon.moves.map((move, moveIdx) => (
                              <div key={moveIdx}>- {move}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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
            Showing {filteredAndSortedTrainers.length} of {trainers.length} trainers (limited to 50 max)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  placeholder="Search by name, class, location, or ID... (CMD+/)"
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

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="all">All Locations</SelectItem>
                {allLocations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
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
                <SelectItem value="location">Location</SelectItem>
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
              {t.location && (
                <CardDescription className="text-sm mt-1">📍 {t.location}</CardDescription>
              )}
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