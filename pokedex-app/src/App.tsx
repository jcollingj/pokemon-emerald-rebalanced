import { useState, useCallback } from "react";
import { HomePage } from "./components/HomePage";
import { AbilitiesPage } from "./components/AbilitiesPage";
import { WeatherPage } from "./components/WeatherPage";
import { PokemonPage } from "./components/PokemonPage";
import { TrainersPage } from "./components/TrainersPage";
import { GymLeadersPage } from "./components/GymLeadersPage";
import { RoutesPage } from "./components/RoutesPage";
import { MovesPage } from "./components/MovesPage";
import { HoennMapPage } from "./components/HoennMapPage";
import { X, BookOpen, Swords, Zap, Users, Trophy, MapPin, Map, CloudSun, Home } from "lucide-react";
import "./index.css";

export interface Tab {
  id: string;
  type: string;
  title: string;
  params?: Record<string, any>;
  pinned?: boolean;
}

const NAV_ITEMS = [
  { type: "pokemon", label: "Pokedex", icon: BookOpen },
  { type: "moves", label: "Moves", icon: Swords },
  { type: "abilities", label: "Abilities", icon: Zap },
  { type: "trainers", label: "Trainers", icon: Users },
  { type: "gym-leaders", label: "Gym Leaders", icon: Trophy },
  { type: "routes", label: "Routes", icon: MapPin },
  { type: "map", label: "Map", icon: Map },
  { type: "weather", label: "Weather", icon: CloudSun },
];

const PAGE_TITLES: Record<string, string> = {
  home: "Home",
  pokemon: "Pokedex",
  moves: "Moves",
  abilities: "Abilities",
  trainers: "Trainers",
  "gym-leaders": "Gym Leaders",
  routes: "Routes",
  map: "Map",
  weather: "Weather",
};

let tabCounter = 0;

export function App() {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  const openTab = useCallback((type: string, params?: Record<string, any>) => {
    const paramKey = params ? JSON.stringify(params) : "";

    setTabs((prev) => {
      const existing = prev.find(
        (t) => t.type === type && (paramKey ? JSON.stringify(t.params) === paramKey : !t.params)
      );
      if (existing) {
        setActiveTabId(existing.id);
        return prev;
      }

      tabCounter++;
      const newTab: Tab = {
        id: `${type}-${tabCounter}`,
        type,
        title: params?.title || PAGE_TITLES[type] || type,
        params,
      };
      setActiveTabId(newTab.id);
      return [...prev, newTab];
    });
  }, []);

  const closeTab = useCallback((tabId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setTabs((prev) => {
      const idx = prev.findIndex((t) => t.id === tabId);
      const remaining = prev.filter((t) => t.id !== tabId);

      if (tabId === activeTabId) {
        if (remaining.length > 0) {
          const newIdx = Math.min(idx, remaining.length - 1);
          setActiveTabId(remaining[newIdx].id);
        } else {
          setActiveTabId(null);
        }
      }

      return remaining;
    });
  }, [activeTabId]);

  const navigate = useCallback((path: string) => {
    const type = path.replace(/^\//, "") || "home";
    openTab(type);
  }, [openTab]);

  const activeTab = tabs.find((t) => t.id === activeTabId);

  const renderContent = () => {
    if (!activeTab) {
      return <HomePage navigate={navigate} openTab={openTab} />;
    }
    switch (activeTab.type) {
      case "home": return <HomePage navigate={navigate} openTab={openTab} />;
      case "pokemon": return <PokemonPage navigate={navigate} />;
      case "moves": return <MovesPage navigate={navigate} />;
      case "abilities": return <AbilitiesPage navigate={navigate} />;
      case "trainers": return <TrainersPage navigate={navigate} />;
      case "gym-leaders": return <GymLeadersPage navigate={navigate} />;
      case "routes": return <RoutesPage navigate={navigate} />;
      case "map": return <HoennMapPage navigate={navigate} />;
      case "weather": return <WeatherPage navigate={navigate} />;
      default: return <HomePage navigate={navigate} openTab={openTab} />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Tab bar across the top like a browser */}
      <div className="tab-bar">
        {/* Home tab - always present */}
        <div
          className={`tab-item ${!activeTab ? "active" : ""}`}
          onClick={() => setActiveTabId(null)}
        >
          <Home size={12} />
          <span>Home</span>
        </div>

        {tabs.map((tab) => {
          const navItem = NAV_ITEMS.find((n) => n.type === tab.type);
          const Icon = navItem?.icon;
          return (
            <div
              key={tab.id}
              className={`tab-item ${tab.id === activeTabId ? "active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {Icon && <Icon size={12} />}
              <span className="truncate">{tab.title}</span>
              <button
                className="tab-close"
                onClick={(e) => closeTab(tab.id, e)}
              >
                <X size={10} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Main layout: sidebar + content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="app-sidebar">
          <div className="px-3 py-3">
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Database
            </div>
          </div>
          <nav className="flex-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab?.type === item.type;
              return (
                <div
                  key={item.type}
                  className={`sidebar-item ${isActive ? "active" : ""}`}
                  onClick={() => openTab(item.type)}
                >
                  <item.icon size={15} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Content area */}
        <div className="page-content">
          <div className="p-5 animate-fade-in" key={activeTab?.id ?? "home"}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
