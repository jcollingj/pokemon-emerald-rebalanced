import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Cloud, Zap, Shield, Package } from "lucide-react";
import weatherData from "../data/weather.json";

interface WeatherPageProps {
  navigate: (path: string) => void;
}

export function WeatherPage({ navigate }: WeatherPageProps) {
  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        className="gap-2"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Weather Conditions</h1>
        <p className="text-muted-foreground">
          All weather effects, abilities, and interactions in battle
        </p>
      </div>

      {/* Weather Conditions */}
      <div className="space-y-4">
        {weatherData.weathers.map((weather) => (
          <Card key={weather.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">{weather.icon}</span>
                <span>{weather.name}</span>
                {weather.duration && (
                  <Badge variant="outline" className="ml-auto">
                    {typeof weather.duration === 'number'
                      ? `${weather.duration} turns`
                      : weather.duration}
                  </Badge>
                )}
              </CardTitle>
              {weather.note && (
                <CardDescription>{weather.note}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Effects */}
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Battle Effects
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {weather.effects.map((effect, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Summon */}
              <div className="grid md:grid-cols-2 gap-4">
                {weather.summonMoves.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Summoning Moves</h4>
                    <div className="flex flex-wrap gap-1">
                      {weather.summonMoves.map((move) => (
                        <Badge key={move} variant="secondary">
                          {move}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {weather.summonAbilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Summoning Abilities</h4>
                    <div className="flex flex-wrap gap-1">
                      {weather.summonAbilities.map((ability) => (
                        <Badge key={ability} variant="secondary">
                          {ability}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Beneficial Abilities */}
              {weather.beneficialAbilities.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Beneficial Abilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {weather.beneficialAbilities.map((ability) => (
                      <div key={ability.name} className="text-sm">
                        <span className="font-medium">{ability.name}:</span>{" "}
                        <span className="text-muted-foreground">{ability.effect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Immune Types */}
              {weather.immuneTypes && (
                <div>
                  <h4 className="font-semibold text-sm mb-2">Immune Types</h4>
                  <div className="flex gap-1">
                    {weather.immuneTypes.map((type) => (
                      <Badge key={type} variant="outline">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Neutralizing Abilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            Weather Neutralizing Abilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {weatherData.neutralizingAbilities.map((ability) => (
              <div key={ability.name}>
                <span className="font-medium">{ability.name}:</span>{" "}
                <span className="text-muted-foreground">{ability.effect}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weather Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Weather-Related Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-3">
            {weatherData.items.map((item) => (
              <div key={item.name}>
                <span className="font-medium">{item.name}:</span>{" "}
                <span className="text-muted-foreground text-sm">{item.effect}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}