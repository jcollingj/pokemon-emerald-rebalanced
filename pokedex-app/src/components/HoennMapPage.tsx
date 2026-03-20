import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HoennMapPageProps {
  navigate: (path: string) => void;
}

interface MapLocation {
  id: string;
  name: string;
  x: number;
  y: number;
  type: "city" | "town";
}

const locations: MapLocation[] = [
  { id: "littleroot", name: "Littleroot Town", x: 220, y: 520, type: "town" },
  { id: "oldale", name: "Oldale Town", x: 220, y: 420, type: "town" },
  { id: "petalburg", name: "Petalburg City", x: 100, y: 420, type: "city" },
  { id: "rustboro", name: "Rustboro City", x: 80, y: 280, type: "city" },
  { id: "dewford", name: "Dewford Town", x: 100, y: 620, type: "town" },
  { id: "slateport", name: "Slateport City", x: 350, y: 520, type: "city" },
  { id: "mauville", name: "Mauville City", x: 370, y: 370, type: "city" },
  { id: "verdanturf", name: "Verdanturf Town", x: 210, y: 340, type: "town" },
  { id: "fallarbor", name: "Fallarbor Town", x: 160, y: 150, type: "town" },
  { id: "lavaridge", name: "Lavaridge Town", x: 240, y: 230, type: "town" },
  { id: "fortree", name: "Fortree City", x: 440, y: 140, type: "city" },
  { id: "lilycove", name: "Lilycove City", x: 640, y: 210, type: "city" },
  { id: "mossdeep", name: "Mossdeep City", x: 760, y: 180, type: "city" },
  { id: "sootopolis", name: "Sootopolis City", x: 680, y: 310, type: "city" },
  { id: "pacifidlog", name: "Pacifidlog Town", x: 580, y: 480, type: "town" },
  { id: "evergrande", name: "Ever Grande City", x: 850, y: 420, type: "city" },
  { id: "battlefrontier", name: "Battle Frontier", x: 700, y: 540, type: "city" },
];

interface Route {
  from: string;
  to: string;
  waypoints?: [number, number][];
  isWater?: boolean;
}

const routes: Route[] = [
  { from: "littleroot", to: "oldale" },
  { from: "oldale", to: "petalburg" },
  { from: "oldale", to: "mauville", waypoints: [[220, 370], [370, 370]] },
  { from: "petalburg", to: "rustboro", waypoints: [[100, 370], [100, 280]] },
  { from: "rustboro", to: "verdanturf", waypoints: [[80, 340], [210, 340]] },
  { from: "rustboro", to: "fallarbor", waypoints: [[80, 200], [80, 150], [160, 150]] },
  { from: "verdanturf", to: "mauville" },
  { from: "fallarbor", to: "lavaridge", waypoints: [[240, 150], [240, 230]] },
  { from: "lavaridge", to: "mauville", waypoints: [[240, 310], [370, 310], [370, 370]] },
  { from: "mauville", to: "slateport", waypoints: [[370, 450], [350, 520]] },
  { from: "fortree", to: "mauville", waypoints: [[440, 230], [440, 370], [370, 370]] },
  { from: "fortree", to: "lilycove", waypoints: [[530, 140], [640, 140], [640, 210]] },
  { from: "lilycove", to: "mossdeep", isWater: true },
  { from: "mossdeep", to: "sootopolis", isWater: true, waypoints: [[760, 310], [680, 310]] },
  { from: "lilycove", to: "sootopolis", isWater: true, waypoints: [[640, 310], [680, 310]] },
  { from: "slateport", to: "pacifidlog", isWater: true, waypoints: [[450, 520], [580, 480]] },
  { from: "pacifidlog", to: "evergrande", isWater: true, waypoints: [[700, 480], [850, 480], [850, 420]] },
  { from: "dewford", to: "petalburg", isWater: true, waypoints: [[100, 560], [100, 420]] },
  { from: "dewford", to: "slateport", isWater: true, waypoints: [[200, 620], [350, 580], [350, 520]] },
  { from: "pacifidlog", to: "battlefrontier", isWater: true },
];

function getLocationPos(id: string): [number, number] {
  const loc = locations.find((l) => l.id === id);
  return loc ? [loc.x, loc.y] : [0, 0];
}

function buildPath(route: Route): string {
  const [fx, fy] = getLocationPos(route.from);
  const [tx, ty] = getLocationPos(route.to);
  let d = `M ${fx} ${fy}`;
  if (route.waypoints) {
    for (const [wx, wy] of route.waypoints) {
      d += ` L ${wx} ${wy}`;
    }
  }
  d += ` L ${tx} ${ty}`;
  return d;
}

export function HoennMapPage({ navigate }: HoennMapPageProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Hoenn Region Map</h1>
          <p className="text-muted-foreground">
            Explore the cities and towns of the Hoenn region
          </p>
        </div>
      </div>

      <div className="rounded-xl border bg-card overflow-hidden">
        <svg
          viewBox="0 0 960 700"
          className="w-full h-auto"
          style={{ background: "linear-gradient(180deg, #87CEEB 0%, #ADD8E6 100%)" }}
        >
          {/* Ocean water pattern */}
          <defs>
            <pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q10 5 20 10 Q30 15 40 10" fill="none" stroke="#7EC8E3" strokeWidth="0.5" opacity="0.4" />
            </pattern>
            <filter id="land-shadow">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
            </filter>
            <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8BC34A" />
              <stop offset="100%" stopColor="#689F38" />
            </linearGradient>
            <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Water texture */}
          <rect width="960" height="700" fill="url(#waves)" />

          {/* Main landmass */}
          <path
            d="M 40 250
               Q 30 200 60 130
               Q 80 90 140 80
               Q 200 70 280 90
               Q 320 80 380 100
               Q 430 90 500 100
               Q 560 110 600 150
               Q 650 160 680 180
               Q 700 160 730 155
               Q 760 145 790 150
               Q 810 155 815 170
               Q 820 190 810 210
               Q 795 230 780 240
               Q 750 260 700 270
               Q 670 275 650 260
               Q 620 240 600 260
               Q 580 280 560 310
               Q 540 340 520 360
               Q 500 380 480 400
               Q 460 420 440 440
               Q 420 460 400 470
               Q 380 480 360 470
               Q 340 460 320 470
               Q 300 480 280 490
               Q 260 500 250 530
               Q 240 560 220 570
               Q 200 580 170 570
               Q 140 560 120 540
               Q 100 520 80 500
               Q 60 480 50 450
               Q 40 420 35 380
               Q 30 340 35 300
               Z"
            fill="url(#landGrad)"
            stroke="#5D8C2F"
            strokeWidth="2"
            filter="url(#land-shadow)"
          />

          {/* Eastern islands - Mossdeep area */}
          <ellipse cx="760" cy="185" rx="50" ry="35" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1.5" filter="url(#land-shadow)" />

          {/* Sootopolis island */}
          <ellipse cx="680" cy="310" rx="30" ry="25" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1.5" filter="url(#land-shadow)" />
          {/* Sootopolis crater */}
          <ellipse cx="680" cy="308" rx="12" ry="10" fill="#5BA3D9" stroke="#4A8DBF" strokeWidth="1" />

          {/* Ever Grande island */}
          <ellipse cx="850" cy="410" rx="40" ry="30" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1.5" filter="url(#land-shadow)" />

          {/* Dewford island */}
          <path
            d="M 60 600 Q 80 580 130 585 Q 160 590 160 620 Q 155 650 120 660 Q 80 660 60 640 Z"
            fill="url(#landGrad)"
            stroke="#5D8C2F"
            strokeWidth="1.5"
            filter="url(#land-shadow)"
          />

          {/* Small decorative islands */}
          <ellipse cx="500" cy="500" rx="18" ry="12" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1" opacity="0.8" />
          <ellipse cx="300" cy="600" rx="15" ry="10" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1" opacity="0.8" />
          <ellipse cx="750" cy="450" rx="12" ry="8" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1" opacity="0.8" />
          <ellipse cx="850" cy="550" rx="14" ry="9" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1" opacity="0.8" />

          {/* Battle Frontier island */}
          <rect x="675" y="520" rx="8" ry="8" width="50" height="40" fill="url(#landGrad)" stroke="#5D8C2F" strokeWidth="1.5" filter="url(#land-shadow)" />

          {/* Routes - land routes */}
          {routes
            .filter((r) => !r.isWater)
            .map((route, i) => (
              <path
                key={`land-route-${i}`}
                d={buildPath(route)}
                fill="none"
                stroke="#B0BEC5"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.7"
              />
            ))}
          {routes
            .filter((r) => !r.isWater)
            .map((route, i) => (
              <path
                key={`land-route-inner-${i}`}
                d={buildPath(route)}
                fill="none"
                stroke="#CFD8DC"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
            ))}

          {/* Routes - water routes */}
          {routes
            .filter((r) => r.isWater)
            .map((route, i) => (
              <path
                key={`water-route-${i}`}
                d={buildPath(route)}
                fill="none"
                stroke="#4FC3F7"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="12 6"
                opacity="0.6"
              />
            ))}

          {/* Location markers and labels */}
          {locations.map((loc) => {
            const isHovered = hoveredLocation === loc.id;
            const isCity = loc.type === "city";
            const markerSize = isCity ? 10 : 7;
            const scale = isHovered ? 1.3 : 1;

            return (
              <g
                key={loc.id}
                onMouseEnter={() => setHoveredLocation(loc.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/routes")}
              >
                {/* Glow effect on hover */}
                {isHovered && (
                  <circle cx={loc.x} cy={loc.y} r={24} fill="url(#cityGlow)" />
                )}

                {/* Marker shadow */}
                <rect
                  x={loc.x - markerSize * scale / 2 + 1}
                  y={loc.y - markerSize * scale / 2 + 1}
                  width={markerSize * scale}
                  height={markerSize * scale}
                  rx={isCity ? 1 : 0}
                  fill="rgba(0,0,0,0.2)"
                />

                {/* Marker */}
                <rect
                  x={loc.x - markerSize * scale / 2}
                  y={loc.y - markerSize * scale / 2}
                  width={markerSize * scale}
                  height={markerSize * scale}
                  rx={isCity ? 1 : 0}
                  fill={isCity ? "#EF5350" : "#1E88E5"}
                  stroke={isCity ? "#C62828" : "#0D47A1"}
                  strokeWidth={1.5}
                />

                {/* City/Town name */}
                <text
                  x={loc.x}
                  y={loc.y + markerSize + 14}
                  textAnchor="middle"
                  fontSize={isHovered ? "13" : "11"}
                  fontWeight={isHovered ? "bold" : "600"}
                  fill="#1a1a1a"
                  stroke="#fff"
                  strokeWidth="3"
                  paintOrder="stroke"
                  style={{ transition: "font-size 0.15s" }}
                >
                  {loc.name}
                </text>
              </g>
            );
          })}

          {/* Legend */}
          <g transform="translate(20, 650)">
            <rect x="0" y="-12" width="180" height="42" rx="6" fill="rgba(255,255,255,0.85)" stroke="#ccc" strokeWidth="1" />
            <rect x="10" y="0" width="10" height="10" fill="#EF5350" stroke="#C62828" strokeWidth="1" />
            <text x="26" y="9" fontSize="11" fill="#333">City (Gym)</text>
            <rect x="100" y="0" width="10" height="10" fill="#1E88E5" stroke="#0D47A1" strokeWidth="1" />
            <text x="116" y="9" fontSize="11" fill="#333">Town</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
