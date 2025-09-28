import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';
import abilitiesData from '../data/abilities.json';

interface Ability {
  id: number;
  name: string;
  description: string;
  aiRating: number;
  breakable?: boolean;
  cantBeSwapped?: boolean;
  cantBeTraced?: boolean;
  cantBeSuppressed?: boolean;
  cantBeOverwritten?: boolean;
  failsOnMaxGuard?: boolean;
}

const abilities = abilitiesData as Ability[];

export function AbilitySearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAbilities = useMemo(() => {
    const term = searchTerm.toLowerCase();
    if (!term) return abilities;

    return abilities.filter(ability =>
      ability.name.toLowerCase().includes(term) ||
      ability.description.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const getRatingBadge = (rating: number) => {
    if (rating >= 8) return 'Excellent';
    if (rating >= 6) return 'Strong';
    if (rating >= 4) return 'Good';
    if (rating >= 2) return 'Average';
    return 'Weak';
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search abilities by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>

      <div className="text-sm text-muted-foreground">
        Found {filteredAbilities.length} of {abilities.length} abilities
      </div>

      <ScrollArea className="h-[600px]">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredAbilities.map((ability) => (
            <Card key={ability.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{ability.name}</CardTitle>
                  <Badge variant="outline">
                    {getRatingBadge(ability.aiRating)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {ability.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {ability.breakable && (
                    <Badge variant="secondary" className="text-xs">
                      Breakable
                    </Badge>
                  )}
                  {ability.cantBeSwapped && (
                    <Badge variant="secondary" className="text-xs">
                      Can't Swap
                    </Badge>
                  )}
                  {ability.cantBeTraced && (
                    <Badge variant="secondary" className="text-xs">
                      Can't Trace
                    </Badge>
                  )}
                  {ability.cantBeSuppressed && (
                    <Badge variant="secondary" className="text-xs">
                      Can't Suppress
                    </Badge>
                  )}
                  {ability.cantBeOverwritten && (
                    <Badge variant="secondary" className="text-xs">
                      Can't Overwrite
                    </Badge>
                  )}
                  {ability.failsOnMaxGuard && (
                    <Badge variant="secondary" className="text-xs">
                      Max Guard Fail
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>AI Rating: {ability.aiRating}/10</span>
                  <span>ID: #{ability.id}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}