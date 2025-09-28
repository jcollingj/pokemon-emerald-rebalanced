import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AbilitySearch } from "./AbilitySearch";

interface AbilitiesPageProps {
  navigate: (path: string) => void;
}

export function AbilitiesPage({ navigate }: AbilitiesPageProps) {
  return (
    <div className="space-y-4">
      <Button
        variant="ghost"
        className="gap-2"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>

      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Pokémon Abilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AbilitySearch />
        </CardContent>
      </Card>
    </div>
  );
}