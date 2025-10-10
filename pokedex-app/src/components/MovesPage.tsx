import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AdditionalEffect {
  moveEffect: string;
  chance: number;
  self: boolean;
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
  additionalEffects?: AdditionalEffect[];
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

interface MovesPageProps {
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

const categoryColors: Record<string, string> = {
  Physical: "bg-orange-500",
  Special: "bg-purple-500",
  Status: "bg-gray-500",
};

const moveEffectDescriptions: Record<string, string> = {
  'MOVE_EFFECT_SLEEP': 'May cause sleep',
  'MOVE_EFFECT_POISON': 'May poison the target',
  'MOVE_EFFECT_BURN': 'May burn the target',
  'MOVE_EFFECT_FREEZE': 'May freeze the target',
  'MOVE_EFFECT_PARALYSIS': 'May paralyze the target',
  'MOVE_EFFECT_TOXIC': 'May badly poison the target',
  'MOVE_EFFECT_FROSTBITE': 'May inflict frostbite',
  'MOVE_EFFECT_CONFUSION': 'May confuse the target',
  'MOVE_EFFECT_FLINCH': 'May cause flinching',
  'MOVE_EFFECT_ATK_PLUS_1': 'Raises Attack by 1 stage',
  'MOVE_EFFECT_DEF_PLUS_1': 'Raises Defense by 1 stage',
  'MOVE_EFFECT_SPD_PLUS_1': 'Raises Speed by 1 stage',
  'MOVE_EFFECT_SP_ATK_PLUS_1': 'Raises Special Attack by 1 stage',
  'MOVE_EFFECT_SP_DEF_PLUS_1': 'Raises Special Defense by 1 stage',
  'MOVE_EFFECT_ACC_PLUS_1': 'Raises Accuracy by 1 stage',
  'MOVE_EFFECT_EVS_PLUS_1': 'Raises Evasion by 1 stage',
  'MOVE_EFFECT_ATK_MINUS_1': 'Lowers Attack by 1 stage',
  'MOVE_EFFECT_DEF_MINUS_1': 'Lowers Defense by 1 stage',
  'MOVE_EFFECT_SPD_MINUS_1': 'Lowers Speed by 1 stage',
  'MOVE_EFFECT_SP_ATK_MINUS_1': 'Lowers Special Attack by 1 stage',
  'MOVE_EFFECT_SP_DEF_MINUS_1': 'Lowers Special Defense by 1 stage',
  'MOVE_EFFECT_ACC_MINUS_1': 'Lowers Accuracy by 1 stage',
  'MOVE_EFFECT_EVS_MINUS_1': 'Lowers Evasion by 1 stage',
  'MOVE_EFFECT_ATK_PLUS_2': 'Raises Attack by 2 stages',
  'MOVE_EFFECT_DEF_PLUS_2': 'Raises Defense by 2 stages',
  'MOVE_EFFECT_SPD_PLUS_2': 'Raises Speed by 2 stages',
  'MOVE_EFFECT_SP_ATK_PLUS_2': 'Raises Special Attack by 2 stages',
  'MOVE_EFFECT_SP_DEF_PLUS_2': 'Raises Special Defense by 2 stages',
  'MOVE_EFFECT_ACC_PLUS_2': 'Raises Accuracy by 2 stages',
  'MOVE_EFFECT_EVS_PLUS_2': 'Raises Evasion by 2 stages',
  'MOVE_EFFECT_ATK_MINUS_2': 'Lowers Attack by 2 stages',
  'MOVE_EFFECT_DEF_MINUS_2': 'Lowers Defense by 2 stages',
  'MOVE_EFFECT_SPD_MINUS_2': 'Lowers Speed by 2 stages',
  'MOVE_EFFECT_SP_ATK_MINUS_2': 'Lowers Special Attack by 2 stages',
  'MOVE_EFFECT_SP_DEF_MINUS_2': 'Lowers Special Defense by 2 stages',
  'MOVE_EFFECT_ACC_MINUS_2': 'Lowers Accuracy by 2 stages',
  'MOVE_EFFECT_EVS_MINUS_2': 'Lowers Evasion by 2 stages',
  'MOVE_EFFECT_RECHARGE': 'User must recharge next turn',
  'MOVE_EFFECT_ALL_STATS_UP': 'Raises all stats',
  'MOVE_EFFECT_REMOVE_STATUS': 'Removes status conditions',
  'MOVE_EFFECT_ATK_DEF_DOWN': 'Lowers Attack and Defense',
  'MOVE_EFFECT_DEF_SPDEF_DOWN': 'Lowers Defense and Special Defense',
  'MOVE_EFFECT_CLEAR_SMOG': 'Removes all stat changes from the target',
  'MOVE_EFFECT_RECOIL_HP_25': 'User takes 25% recoil damage',
  'MOVE_EFFECT_PAYDAY': 'Scatters coins',
};

function getAdditionalEffectDescription(effect: AdditionalEffect): string {
  const baseDescription = moveEffectDescriptions[effect.moveEffect] || effect.moveEffect;
  const target = effect.self ? 'the user' : 'the target';

  // Replace generic target mentions with specific target
  let description = baseDescription.replace(/the target|the user/i, target);

  // For stat changes, add "of the user" or "of the target"
  if (baseDescription.includes('Raises') || baseDescription.includes('Lowers')) {
    if (!description.includes(' of ')) {
      description = description + (effect.self ? ' of the user' : '');
    }
  }

  // Add chance if not 100%
  if (effect.chance < 100) {
    return `${effect.chance}% chance: ${description}`;
  }

  return description;
}

export function MovesPage({ navigate }: MovesPageProps) {
  const [moves, setMoves] = useState<Move[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [selectedMove, setSelectedMove] = useState<Move | null>(null);

  useEffect(() => {
    fetch("/api/moves")
      .then((res) => res.json())
      .then((data) => {
        setMoves(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch moves:", err);
        setLoading(false);
      });
  }, []);

  const filteredMoves = moves.filter((move) => {
    const matchesSearch = move.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || move.type === typeFilter;
    const matchesCategory = categoryFilter === "all" || move.category === categoryFilter;
    return matchesSearch && matchesType && matchesCategory;
  });

  const types = Array.from(new Set(moves.map((m) => m.type))).sort();
  const categories = ["Physical", "Special", "Status"];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading moves...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold">Move Database</h1>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search moves..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {types.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredMoves.length} of {moves.length} moves
      </div>

      {selectedMove ? (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CardTitle className="text-2xl">{selectedMove.name}</CardTitle>
                <Badge className={`${typeColors[selectedMove.type]} text-white`}>
                  {selectedMove.type}
                </Badge>
                <Badge className={`${categoryColors[selectedMove.category]} text-white`}>
                  {selectedMove.category}
                </Badge>
              </div>
              <Button variant="ghost" onClick={() => setSelectedMove(null)}>
                Close
              </Button>
            </div>
            <CardDescription>{selectedMove.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Power</div>
                <div className="text-lg font-semibold">
                  {selectedMove.power === 0 ? "—" : selectedMove.power}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
                <div className="text-lg font-semibold">
                  {selectedMove.accuracy === 0 ? "—" : `${selectedMove.accuracy}%`}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">PP</div>
                <div className="text-lg font-semibold">{selectedMove.pp}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Priority</div>
                <div className="text-lg font-semibold">
                  {selectedMove.priority > 0 ? `+${selectedMove.priority}` : selectedMove.priority}
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-1">Target</div>
              <div className="font-medium">{selectedMove.target}</div>
            </div>

            {selectedMove.effect && (
              <div>
                <div className="text-sm text-muted-foreground mb-1">Effect</div>
                <div className="font-medium">{selectedMove.effect}</div>
              </div>
            )}

            {selectedMove.additionalEffects && selectedMove.additionalEffects.length > 0 && (
              <div>
                <div className="text-sm text-muted-foreground mb-2">Additional Effects</div>
                <div className="space-y-1">
                  {selectedMove.additionalEffects.map((effect, idx) => (
                    <div key={idx} className="font-medium text-sm bg-blue-50 dark:bg-blue-950 p-2 rounded">
                      {getAdditionalEffectDescription(effect)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Object.keys(selectedMove.flags).length > 0 && (
              <div>
                <div className="text-sm text-muted-foreground mb-2">Flags</div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedMove.flags)
                    .filter(([_, value]) => value)
                    .map(([key]) => (
                      <Badge key={key} variant="outline">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </Badge>
                    ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-2">
          {filteredMoves.map((move) => (
            <Card
              key={move.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedMove(move)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="font-semibold text-lg min-w-[180px]">{move.name}</div>
                    <Badge className={`${typeColors[move.type]} text-white`}>
                      {move.type}
                    </Badge>
                    <Badge className={`${categoryColors[move.category]} text-white`}>
                      {move.category}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="text-center min-w-[60px]">
                      <div className="text-muted-foreground text-xs">Power</div>
                      <div className="font-semibold">
                        {move.power === 0 ? "—" : move.power}
                      </div>
                    </div>
                    <div className="text-center min-w-[60px]">
                      <div className="text-muted-foreground text-xs">Acc</div>
                      <div className="font-semibold">
                        {move.accuracy === 0 ? "—" : `${move.accuracy}%`}
                      </div>
                    </div>
                    <div className="text-center min-w-[60px]">
                      <div className="text-muted-foreground text-xs">PP</div>
                      <div className="font-semibold">{move.pp}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
