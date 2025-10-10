import { HomePage } from "./components/HomePage";
import { AbilitiesPage } from "./components/AbilitiesPage";
import { WeatherPage } from "./components/WeatherPage";
import { PokemonPage } from "./components/PokemonPage";
import { TrainersPage } from "./components/TrainersPage";
import { GymLeadersPage } from "./components/GymLeadersPage";
import { RoutesPage } from "./components/RoutesPage";
import { MovesPage } from "./components/MovesPage";
import { useRoute } from "./hooks/useRoute";
import "./index.css";

export function App() {
  const { route, navigate } = useRoute();

  const renderPage = () => {
    switch (route) {
      case '/abilities':
        return <AbilitiesPage navigate={navigate} />;
      case '/weather':
        return <WeatherPage navigate={navigate} />;
      case '/pokemon':
        return <PokemonPage navigate={navigate} />;
      case '/trainers':
        return <TrainersPage navigate={navigate} />;
      case '/gym-leaders':
        return <GymLeadersPage navigate={navigate} />;
      case '/routes':
        return <RoutesPage navigate={navigate} />;
      case '/moves':
        return <MovesPage navigate={navigate} />;
      case '/':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="container mx-auto p-8 relative z-10">
      {renderPage()}
    </div>
  );
}

export default App;
