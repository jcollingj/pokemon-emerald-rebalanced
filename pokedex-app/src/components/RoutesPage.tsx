import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface WildPokemon {
  species: string;
  minLevel: number;
  maxLevel: number;
}

interface WildEncounters {
  land?: WildPokemon[];
  water?: WildPokemon[];
  fishing?: {
    oldRod?: WildPokemon[];
    goodRod?: WildPokemon[];
    superRod?: WildPokemon[];
  };
  rockSmash?: WildPokemon[];
}

interface RouteTrainer {
  id: number;
  name: string;
  trainerClass: string;
  constantName: string;
}

interface RouteItem {
  item: string;
  hidden: boolean;
}

interface RouteData {
  name: string;
  displayName: string;
  trainers: RouteTrainer[];
  items: RouteItem[];
  wildEncounters: WildEncounters;
}

interface RoutesPageProps {
  navigate: (path: string) => void;
}

export function RoutesPage({ navigate }: RoutesPageProps) {
  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/routes")
      .then((res) => res.json())
      .then((data) => {
        setRoutes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch routes:", err);
        setLoading(false);
      });
  }, []);

  const filteredRoutes = useMemo(() => {
    if (!searchTerm) return routes;

    return routes.filter((route) =>
      route.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [routes, searchTerm]);

  if (loading) {
    return <div className="text-center py-8">Loading routes...</div>;
  }

  if (selectedRoute) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => setSelectedRoute(null)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Routes
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{selectedRoute.displayName}</CardTitle>
            <CardDescription>
              {selectedRoute.trainers.length} trainers • {selectedRoute.items.length} items •{" "}
              {Object.keys(selectedRoute.wildEncounters).length} encounter types
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Wild Encounters */}
        <Card>
          <CardHeader>
            <CardTitle>Wild Encounters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedRoute.wildEncounters.land && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">🌱 Grass / Land</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {selectedRoute.wildEncounters.land
                    .filter((p, i, arr) => arr.findIndex(x => x.species === p.species) === i)
                    .map((pokemon, idx) => (
                      <Card key={idx} className="p-2">
                        <div className="text-sm font-medium">{pokemon.species}</div>
                        <div className="text-xs text-muted-foreground">
                          Lv. {pokemon.minLevel}
                          {pokemon.maxLevel !== pokemon.minLevel && `-${pokemon.maxLevel}`}
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            )}

            {selectedRoute.wildEncounters.water && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">🌊 Surfing</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {selectedRoute.wildEncounters.water
                    .filter((p, i, arr) => arr.findIndex(x => x.species === p.species) === i)
                    .map((pokemon, idx) => (
                      <Card key={idx} className="p-2">
                        <div className="text-sm font-medium">{pokemon.species}</div>
                        <div className="text-xs text-muted-foreground">
                          Lv. {pokemon.minLevel}
                          {pokemon.maxLevel !== pokemon.minLevel && `-${pokemon.maxLevel}`}
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            )}

            {selectedRoute.wildEncounters.fishing && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm">🎣 Fishing</h3>

                {selectedRoute.wildEncounters.fishing.oldRod && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Old Rod</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {selectedRoute.wildEncounters.fishing.oldRod.map((pokemon, idx) => (
                        <Card key={idx} className="p-2">
                          <div className="text-sm font-medium">{pokemon.species}</div>
                          <div className="text-xs text-muted-foreground">
                            Lv. {pokemon.minLevel}
                            {pokemon.maxLevel !== pokemon.minLevel && `-${pokemon.maxLevel}`}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {selectedRoute.wildEncounters.fishing.goodRod && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Good Rod</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {selectedRoute.wildEncounters.fishing.goodRod.map((pokemon, idx) => (
                        <Card key={idx} className="p-2">
                          <div className="text-sm font-medium">{pokemon.species}</div>
                          <div className="text-xs text-muted-foreground">
                            Lv. {pokemon.minLevel}
                            {pokemon.maxLevel !== pokemon.minLevel && `-${pokemon.maxLevel}`}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {selectedRoute.wildEncounters.fishing.superRod && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Super Rod</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {selectedRoute.wildEncounters.fishing.superRod.map((pokemon, idx) => (
                        <Card key={idx} className="p-2">
                          <div className="text-sm font-medium">{pokemon.species}</div>
                          <div className="text-xs text-muted-foreground">
                            Lv. {pokemon.minLevel}
                            {pokemon.maxLevel !== pokemon.minLevel && `-${pokemon.maxLevel}`}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {selectedRoute.wildEncounters.rockSmash && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">🪨 Rock Smash</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {selectedRoute.wildEncounters.rockSmash
                    .filter((p, i, arr) => arr.findIndex(x => x.species === p.species) === i)
                    .map((pokemon, idx) => (
                      <Card key={idx} className="p-2">
                        <div className="text-sm font-medium">{pokemon.species}</div>
                        <div className="text-xs text-muted-foreground">
                          Lv. {pokemon.minLevel}
                          {pokemon.maxLevel !== pokemon.minLevel && `-${pokemon.maxLevel}`}
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Trainers */}
        {selectedRoute.trainers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Trainers ({selectedRoute.trainers.length})</CardTitle>
              <CardDescription>Click a trainer to view in Trainers page</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedRoute.trainers.map((trainer) => (
                  <Card
                    key={trainer.id}
                    className="p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => navigate(`/trainers`)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-sm">{trainer.name}</div>
                          <Badge variant="outline" className="text-xs">{trainer.trainerClass}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Trainer #{trainer.id}
                        </div>
                      </div>
                      <Badge variant="secondary">View →</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Items */}
        {selectedRoute.items.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Items ({selectedRoute.items.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {selectedRoute.items.map((item, idx) => (
                  <Card key={idx} className="p-2">
                    <div className="text-sm font-medium">{item.item}</div>
                    {item.hidden && (
                      <Badge variant="outline" className="text-xs">Hidden</Badge>
                    )}
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        <h1 className="text-4xl font-bold">Routes & Areas</h1>
        <div className="w-24" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Routes & Areas</CardTitle>
          <CardDescription>
            {searchTerm ? (
              <>
                Found {filteredRoutes.length} of {routes.length} locations matching "{searchTerm}"
              </>
            ) : (
              <>
                Browse all {routes.length} locations - search by name to filter
              </>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Type to search routes, caves, forests... (e.g., 'route 103', 'cave', 'forest')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base"
              autoFocus
            />
          </div>
          {searchTerm && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Filtering: {searchTerm}</Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchTerm("")}
                className="h-6 px-2 text-xs"
              >
                Clear
              </Button>
            </div>
          )}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-center">Trainers</TableHead>
                  <TableHead className="text-center">Items</TableHead>
                  <TableHead className="text-center">Wild Encounters</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRoutes.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No routes found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRoutes.map((route) => (
                    <TableRow
                      key={route.name}
                      className="cursor-pointer"
                      onClick={() => setSelectedRoute(route)}
                    >
                      <TableCell className="font-medium">{route.displayName}</TableCell>
                      <TableCell className="text-center">
                        {route.trainers.length > 0 ? (
                          <Badge variant="secondary">{route.trainers.length}</Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {route.items.length > 0 ? (
                          <Badge variant="secondary">{route.items.length}</Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex gap-1 justify-center flex-wrap">
                          {route.wildEncounters.land && (
                            <Badge variant="outline" className="text-xs">🌱 Land</Badge>
                          )}
                          {route.wildEncounters.water && (
                            <Badge variant="outline" className="text-xs">🌊 Water</Badge>
                          )}
                          {route.wildEncounters.fishing && (
                            <Badge variant="outline" className="text-xs">🎣 Fish</Badge>
                          )}
                          {route.wildEncounters.rockSmash && (
                            <Badge variant="outline" className="text-xs">🪨 Rock</Badge>
                          )}
                          {Object.keys(route.wildEncounters).length === 0 && (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
