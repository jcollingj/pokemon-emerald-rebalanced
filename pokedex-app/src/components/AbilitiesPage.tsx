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
      <h1 className="text-xl font-bold">Abilities</h1>
      <AbilitySearch />
    </div>
  );
}