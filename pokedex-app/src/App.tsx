import { HomePage } from "./components/HomePage";
import { AbilitiesPage } from "./components/AbilitiesPage";
import { WeatherPage } from "./components/WeatherPage";
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
