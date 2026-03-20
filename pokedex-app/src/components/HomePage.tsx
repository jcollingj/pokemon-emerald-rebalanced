import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface HomePageProps {
  navigate: (path: string) => void;
}

const pages = [
  {
    path: '/pokemon',
    title: 'Pokédex',
    description: 'Complete Pokédex with stats, abilities, and detailed information for all Pokémon',
    icon: '📖',
  },
  {
    path: '/moves',
    title: 'Moves',
    description: 'Browse all moves with power, accuracy, type, and detailed effects',
    icon: '⚔️',
  },
  {
    path: '/map',
    title: 'Hoenn Map',
    description: 'Interactive SVG map of the Hoenn region with all cities, towns, and routes',
    icon: '🗺️',
  },
  {
    path: '/routes',
    title: 'Routes & Areas',
    description: 'Explore routes with wild encounters, trainers, and items for each location',
    icon: '📍',
  },
  {
    path: '/trainers',
    title: 'Trainers',
    description: 'Browse all trainers in the game with their teams and battle information',
    icon: '👤',
  },
  {
    path: '/gym-leaders',
    title: 'Gym Leaders & Elite Four',
    description: 'Challenge the Gym Leaders and Elite Four with their specialized teams',
    icon: '🏆',
  },
  {
    path: '/abilities',
    title: 'Abilities',
    description: 'Browse and search all Pokémon abilities with descriptions and properties',
    icon: '⚡',
  },
  {
    path: '/weather',
    title: 'Weather',
    description: 'Weather conditions, effects, and related abilities in battle',
    icon: '🌦️',
  },
];

export function HomePage({ navigate }: HomePageProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Pokémon Emerald Database</h1>
        <p className="text-muted-foreground">
          Explore game data from Pokémon Emerald Rebalanced
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pages.map((page) => (
          <Card
            key={page.path}
            className="cursor-pointer transition-all hover:shadow-lg"
            onClick={() => navigate(page.path)}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">{page.icon}</span>
                <span>{page.title}</span>
              </CardTitle>
              <CardDescription>{page.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="ghost"
                className="w-full justify-between"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(page.path);
                }}
              >
                View {page.title}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}