import { useState, useEffect, useMemo, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search } from "lucide-react";
import { InfoCard } from "./InfoCard";

interface LevelUpMove {
  level: number;
  move: string;
}

interface StatChange {
  current: number;
  proposed: number;
  notes: string;
}

interface AbilityChange {
  type: 'add' | 'replace' | 'remove';
  ability: string;
  notes: string;
}

interface MoveChange {
  move: string;
  modification: string;
  notes: string;
}

interface Modifications {
  implemented?: boolean;
  statChanges?: {
    hp?: StatChange;
    attack?: StatChange;
    defense?: StatChange;
    speed?: StatChange;
    spAttack?: StatChange;
    spDefense?: StatChange;
  };
  abilityChanges?: AbilityChange[];
  moveChanges?: MoveChange[];
  generalNotes?: string[];
}

interface Move {
  id: number;
  name: string;
  description: string;
  type: string;
  category: string;
  power: number;
  accuracy: number;
  pp: number;
  priority: number;
  target: string;
  effect: string;
  flags: {
    makesContact?: boolean;
    ignoresProtect?: boolean;
    magicCoatAffected?: boolean;
    snatchAffected?: boolean;
    mirrorMoveBanned?: boolean;
    kingsRockAffected?: boolean;
    highCritRatio?: boolean;
    soundMove?: boolean;
    punchMove?: boolean;
    bitingMove?: boolean;
    slicingMove?: boolean;
    ballBombMove?: boolean;
    windMove?: boolean;
    danceMove?: boolean;
  };
}

interface Pokemon {
  id: number;
  name: string;
  natDexNum: number;
  types: string[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    spAttack: number;
    spDefense: number;
    total: number;
  };
  abilities: string[];
  height: number;
  weight: number;
  description: string;
  categoryName: string;
  catchRate: number;
  expYield: number;
  genderRatio: string;
  eggCycles: number;
  friendship: number;
  growthRate: string;
  eggGroups: string[];
  bodyColor: string;
  levelUpLearnset: LevelUpMove[];
  modifications?: Modifications;
}

interface PokemonPageProps {
  navigate: (path: string) => void;
}

const typeColors: Record<string, string> = {
  Normal: "bg-gray-400",
  Fire: "bg-red-500",
  Water: "bg-blue-500",
  Grass: "bg-green-500",
  Electric: "bg-yellow-400",
  Ice: "bg-cyan-300",
  Fighting: "bg-orange-700",
  Poison: "bg-purple-500",
  Ground: "bg-yellow-600",
  Flying: "bg-indigo-300",
  Psychic: "bg-pink-500",
  Bug: "bg-lime-500",
  Rock: "bg-yellow-800",
  Ghost: "bg-purple-700",
  Dragon: "bg-indigo-600",
  Dark: "bg-gray-800",
  Steel: "bg-gray-500",
  Fairy: "bg-pink-300",
};

export function PokemonPage({ navigate }: PokemonPageProps) {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("dex");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [openInfoCards, setOpenInfoCards] = useState<Array<{id: string, type: 'move' | 'ability', data: Move | Ability}>>([]);
  const [modificationsExpanded, setModificationsExpanded] = useState(true);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  interface Ability {
    id: number;
    name: string;
    description: string;
    aiRating: number;
  }

  useEffect(() => {
    fetch("/api/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch pokemon:", err);
        setLoading(false);
      });
  }, []);

  // Sync openInfoCards to URL
  useEffect(() => {
    if (selectedPokemon && openInfoCards.length > 0) {
      const cardIds = openInfoCards.map(card => card.id).join(',');
      const url = new URL(window.location.href);
      url.searchParams.set('cards', cardIds);
      window.history.replaceState({}, '', url.toString());
    } else if (selectedPokemon) {
      const url = new URL(window.location.href);
      url.searchParams.delete('cards');
      window.history.replaceState({}, '', url.toString());
    }
  }, [openInfoCards, selectedPokemon]);

  // Restore openInfoCards from URL on Pokemon selection
  useEffect(() => {
    if (selectedPokemon) {
      const url = new URL(window.location.href);
      const cardsParam = url.searchParams.get('cards');
      if (cardsParam) {
        const cardIds = cardsParam.split(',');
        const cardsToRestore: Array<{id: string, type: 'move' | 'ability', data: Move | Ability}> = [];

        const restoreCards = async () => {
          for (const cardId of cardIds) {
            if (cardId.startsWith('move-')) {
              const moveId = cardId.replace('move-', '');
              try {
                const response = await fetch(`/api/moves/${moveId}`);
                if (response.ok) {
                  const moveData = await response.json();
                  cardsToRestore.push({ id: cardId, type: 'move', data: moveData });
                }
              } catch (err) {
                console.error('Failed to restore move card:', err);
              }
            } else if (cardId.startsWith('ability-')) {
              const abilityId = cardId.replace('ability-', '');
              try {
                const response = await fetch('/api/abilities');
                if (response.ok) {
                  const abilities: Ability[] = await response.json();
                  const abilityData = abilities.find(a => a.id === parseInt(abilityId));
                  if (abilityData) {
                    cardsToRestore.push({ id: cardId, type: 'ability', data: abilityData });
                  }
                }
              } catch (err) {
                console.error('Failed to restore ability card:', err);
              }
            }
          }
          setOpenInfoCards(cardsToRestore);
        };

        restoreCards();
      }
    }
  }, [selectedPokemon]);

  const handleMoveClick = async (moveName: string) => {
    try {
      const response = await fetch(`/api/moves/search?name=${encodeURIComponent(moveName)}`);
      if (response.ok) {
        const moveData = await response.json();
        const cardId = `move-${moveData.id}`;

        // Check if this card is already open
        if (!openInfoCards.find(card => card.id === cardId)) {
          setOpenInfoCards(prev => [...prev, { id: cardId, type: 'move', data: moveData }]);
        }
      } else {
        console.error("Move not found:", moveName);
      }
    } catch (err) {
      console.error("Failed to fetch move:", err);
    }
  };

  const handleAbilityClick = async (abilityName: string) => {
    try {
      const response = await fetch('/api/abilities');
      if (response.ok) {
        const abilities: Ability[] = await response.json();
        const abilityData = abilities.find(a => a.name.toLowerCase() === abilityName.toLowerCase());

        if (abilityData) {
          const cardId = `ability-${abilityData.id}`;

          // Check if this card is already open
          if (!openInfoCards.find(card => card.id === cardId)) {
            setOpenInfoCards(prev => [...prev, { id: cardId, type: 'ability', data: abilityData }]);
          }
        }
      }
    } catch (err) {
      console.error("Failed to fetch ability:", err);
    }
  };

  const closeInfoCard = (cardId: string) => {
    setOpenInfoCards(prev => prev.filter(card => card.id !== cardId));
  };

  const allTypes = useMemo(() => {
    const types = new Set<string>();
    pokemon.forEach((p) => p.types.forEach((t) => types.add(t)));
    return Array.from(types).sort();
  }, [pokemon]);

  const filteredAndSortedPokemon = useMemo(() => {
    let filtered = pokemon;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.natDexNum.toString().includes(searchTerm)
      );
    }

    // Filter by type
    if (typeFilter !== "all") {
      filtered = filtered.filter((p) => p.types.includes(typeFilter));
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "dex":
        sorted.sort((a, b) => a.natDexNum - b.natDexNum);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "total":
        sorted.sort((a, b) => b.baseStats.total - a.baseStats.total);
        break;
      case "hp":
        sorted.sort((a, b) => b.baseStats.hp - a.baseStats.hp);
        break;
      case "attack":
        sorted.sort((a, b) => b.baseStats.attack - a.baseStats.attack);
        break;
      case "defense":
        sorted.sort((a, b) => b.baseStats.defense - a.baseStats.defense);
        break;
      case "speed":
        sorted.sort((a, b) => b.baseStats.speed - a.baseStats.speed);
        break;
    }

    return sorted;
  }, [pokemon, searchTerm, typeFilter, sortBy]);

  // Auto-focus search input on mount
  useEffect(() => {
    if (!selectedPokemon && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [selectedPokemon]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD+/ or CTRL+/ to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      // Only handle navigation keys when not in a text input and not viewing a Pokemon
      if (selectedPokemon || document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.min(prev + 1, filteredAndSortedPokemon.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.min(prev + 4, filteredAndSortedPokemon.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setHighlightedIndex((prev) => Math.max(prev - 4, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredAndSortedPokemon[highlightedIndex]) {
          setSelectedPokemon(filteredAndSortedPokemon[highlightedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPokemon, highlightedIndex, filteredAndSortedPokemon]);

  // Reset highlighted index when filters change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchTerm, typeFilter, sortBy]);

  // Scroll highlighted Pokemon into view
  useEffect(() => {
    if (!selectedPokemon) {
      const highlightedElement = document.querySelector(`[data-pokemon-index="${highlightedIndex}"]`);
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [highlightedIndex, selectedPokemon]);

  if (loading) {
    return <div className="text-center py-8">Loading Pokémon...</div>;
  }

  if (selectedPokemon) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => setSelectedPokemon(null)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to List
        </Button>

        <div className="flex gap-6">
          {/* Left Column - Pokemon Info */}
          <div className="flex-1 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  {selectedPokemon.types.map((type) => (
                    <span
                      key={type}
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${typeColors[type] || 'bg-gray-400'}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <CardTitle>
                  #{selectedPokemon.natDexNum.toString().padStart(3, '0')} {selectedPokemon.name}
                </CardTitle>
                <CardDescription>{selectedPokemon.categoryName} Pokémon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Base Stats - Dense with Total at Top */}
                <div>
                  <h3 className="font-semibold mb-3">Base Stats</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-primary/10 rounded-lg">
                      <span className="font-bold text-lg">Total</span>
                      <span className="text-2xl font-bold text-primary">{selectedPokemon.baseStats.total}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm">HP</span>
                        <span className="font-bold">{selectedPokemon.baseStats.hp}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm">Attack</span>
                        <span className="font-bold">{selectedPokemon.baseStats.attack}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm">Defense</span>
                        <span className="font-bold">{selectedPokemon.baseStats.defense}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm">Sp. Atk</span>
                        <span className="font-bold">{selectedPokemon.baseStats.spAttack}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm">Sp. Def</span>
                        <span className="font-bold">{selectedPokemon.baseStats.spDefense}</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="text-sm">Speed</span>
                        <span className="font-bold">{selectedPokemon.baseStats.speed}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Abilities - Clickable */}
                <div>
                  <h3 className="font-semibold mb-2">Abilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPokemon.abilities.map((ability, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAbilityClick(ability)}
                        className="px-3 py-1 bg-secondary hover:bg-secondary/80 rounded-md text-sm transition-colors cursor-pointer"
                      >
                        {ability}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Level-Up Moves */}
                {selectedPokemon.levelUpLearnset && selectedPokemon.levelUpLearnset.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Level-Up Moves ({selectedPokemon.levelUpLearnset.length})</h3>
                    <div className="space-y-1 max-h-[400px] overflow-y-auto">
                      {selectedPokemon.levelUpLearnset.map((move, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleMoveClick(move.move)}
                          className="w-full flex items-center justify-between p-2 rounded hover:bg-muted transition-colors cursor-pointer text-left"
                        >
                          <span className="text-sm">{move.move}</span>
                          <span className="text-xs text-muted-foreground font-semibold">Lv. {move.level}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metadata at Bottom */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Pokémon Data</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-muted-foreground">Height</div>
                      <div className="font-medium">{(selectedPokemon.height / 10).toFixed(1)}m</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Weight</div>
                      <div className="font-medium">{(selectedPokemon.weight / 10).toFixed(1)}kg</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Catch Rate</div>
                      <div className="font-medium">{selectedPokemon.catchRate}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Base Exp</div>
                      <div className="font-medium">{selectedPokemon.expYield}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Growth Rate</div>
                      <div className="font-medium">{selectedPokemon.growthRate}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Egg Cycles</div>
                      <div className="font-medium">{selectedPokemon.eggCycles}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-muted-foreground mb-1">Egg Groups</div>
                      <div className="flex gap-2">
                        {selectedPokemon.eggGroups.map((eg, idx) => (
                          <span key={idx} className="px-2 py-1 bg-muted rounded text-xs">{eg}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedPokemon.modifications && (
              <Card className={selectedPokemon.modifications.implemented ? "border-green-500 border-2" : "border-yellow-500 border-2"}>
                <CardHeader className={selectedPokemon.modifications.implemented ? "bg-green-50 dark:bg-green-950" : "bg-yellow-50 dark:bg-yellow-950"}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span>{selectedPokemon.modifications.implemented ? '✅' : '🔧'}</span>
                        {selectedPokemon.modifications.implemented ? 'Implemented Modifications' : 'Proposed Modifications'}
                      </CardTitle>
                      <CardDescription>
                        {selectedPokemon.modifications.implemented
                          ? `Balance changes that have been implemented for ${selectedPokemon.name}`
                          : `Balance changes being considered for ${selectedPokemon.name}`
                        }
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setModificationsExpanded(!modificationsExpanded)}
                    >
                      {modificationsExpanded ? '▼' : '▶'}
                    </Button>
                  </div>
                </CardHeader>
                {modificationsExpanded && (
                  <CardContent className="space-y-6 pt-6">
                    {selectedPokemon.modifications.statChanges && Object.keys(selectedPokemon.modifications.statChanges).length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 text-lg">Stat Changes</h3>
                        <div className="space-y-3">
                          {Object.entries(selectedPokemon.modifications.statChanges).map(([stat, change]) => (
                            <div key={stat} className="p-3 bg-muted rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium capitalize">{stat === 'spAttack' ? 'Sp. Attack' : stat === 'spDefense' ? 'Sp. Defense' : stat}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-red-600 dark:text-red-400 font-bold">{change.current}</span>
                                  <span>→</span>
                                  <span className="text-green-600 dark:text-green-400 font-bold">{change.proposed}</span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">{change.notes}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedPokemon.modifications.abilityChanges && selectedPokemon.modifications.abilityChanges.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 text-lg">Ability Changes</h3>
                        <div className="space-y-3">
                          {selectedPokemon.modifications.abilityChanges.map((change, idx) => (
                            <div key={idx} className="p-3 bg-muted rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                  change.type === 'add' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                  change.type === 'remove' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                }`}>
                                  {change.type.toUpperCase()}
                                </span>
                                <span className="font-medium">{change.ability}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{change.notes}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedPokemon.modifications.moveChanges && selectedPokemon.modifications.moveChanges.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 text-lg">Move-Specific Changes</h3>
                        <div className="space-y-3">
                          {selectedPokemon.modifications.moveChanges.map((change, idx) => (
                            <div key={idx} className="p-3 bg-muted rounded-lg">
                              <div className="font-medium mb-2">{change.move}</div>
                              <div className="text-sm mb-2 p-2 bg-background rounded border">
                                {change.modification}
                              </div>
                              <p className="text-sm text-muted-foreground italic">{change.notes}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedPokemon.modifications.generalNotes && selectedPokemon.modifications.generalNotes.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 text-lg">General Notes</h3>
                        <ul className="space-y-2">
                          {selectedPokemon.modifications.generalNotes.map((note, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-muted-foreground">•</span>
                              <span className="text-sm">{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            )}

          </div>

          {/* Right Column - Info Cards */}
          <div className="w-[400px] flex-shrink-0 space-y-4">
            {openInfoCards.length === 0 && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground text-sm">
                    Click on moves or abilities to view details here
                  </div>
                </CardContent>
              </Card>
            )}
            {openInfoCards.map((card) => (
              <InfoCard
                key={card.id}
                title={card.type === 'move' ? (card.data as Move).name : (card.data as Ability).name}
                description={card.type === 'move' ? 'Move Details' : 'Ability Details'}
                onClose={() => closeInfoCard(card.id)}
              >
                {card.type === 'move' ? (
                  <div className="space-y-4">
                    {(() => {
                      const move = card.data as Move;
                      return (
                        <>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                                typeColors[move.type] || 'bg-gray-400'
                              }`}
                            >
                              {move.type}
                            </span>
                            <span className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                              {move.category}
                            </span>
                          </div>

                          {move.description && (
                            <p className="text-sm text-muted-foreground">{move.description}</p>
                          )}

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <div className="text-xs text-muted-foreground">Power</div>
                              <div className="text-lg font-bold">
                                {move.power > 0 ? move.power : '—'}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Accuracy</div>
                              <div className="text-lg font-bold">
                                {move.accuracy > 0 ? `${move.accuracy}%` : '—'}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">PP</div>
                              <div className="text-lg font-bold">{move.pp}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground">Priority</div>
                              <div className="text-lg font-bold">
                                {move.priority > 0 ? `+${move.priority}` : move.priority}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Target</div>
                            <div className="text-sm font-medium">{move.target}</div>
                          </div>

                          <div>
                            <div className="text-xs text-muted-foreground mb-1">Effect</div>
                            <div className="text-sm">{move.effect}</div>
                          </div>

                          {Object.keys(move.flags).length > 0 && (
                            <div>
                              <div className="text-xs text-muted-foreground mb-2">Flags</div>
                              <div className="flex flex-wrap gap-1">
                                {Object.entries(move.flags)
                                  .filter(([, value]) => value === true)
                                  .map(([flag]) => (
                                    <span key={flag} className="px-2 py-1 bg-secondary rounded text-xs">
                                      {flag.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {(() => {
                      const ability = card.data as Ability;
                      return (
                        <>
                          <p className="text-sm">{ability.description}</p>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">AI Rating</div>
                            <div className="text-lg font-bold">{ability.aiRating}/10</div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </InfoCard>
            ))}
          </div>
        </div>
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
        <h1 className="text-4xl font-bold">Pokédex</h1>
        <div className="w-24" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
          <CardDescription>
            Found {filteredAndSortedPokemon.length} of {pokemon.length} Pokémon
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  placeholder="Search by name or number... (CMD+/)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {allTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dex">Pokédex #</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="total">Base Stat Total</SelectItem>
                <SelectItem value="hp">HP</SelectItem>
                <SelectItem value="attack">Attack</SelectItem>
                <SelectItem value="defense">Defense</SelectItem>
                <SelectItem value="speed">Speed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAndSortedPokemon.map((p, index) => (
          <Card
            key={p.id}
            data-pokemon-index={index}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              index === highlightedIndex ? 'ring-4 ring-primary ring-offset-2' : ''
            }`}
            onClick={() => setSelectedPokemon(p)}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>#{p.natDexNum.toString().padStart(3, '0')}</span>
                <span className="text-sm text-muted-foreground">BST: {p.baseStats.total}</span>
              </CardTitle>
              <CardDescription className="text-lg font-semibold text-foreground">
                {p.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex gap-2">
                {p.types.map((type) => (
                  <span
                    key={type}
                    className={`px-2 py-1 rounded-full text-white text-xs font-medium ${typeColors[type] || 'bg-gray-400'}`}
                  >
                    {type}
                  </span>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                {p.abilities.join(", ")}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}