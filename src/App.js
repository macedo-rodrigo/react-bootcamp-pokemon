import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";
import PokemonDetailPage from "./pages/PokemonDetailPage/PokemonDetailPage";
import LocationDetailPage from "./pages/LocationDetailPage/LocationDetailPage";
import GamePage from "./pages/GamePage/GamePage";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";
import English from "./Lang/en.json";
import Spanish from "./Lang/es.json";

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState();

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);
  return (
    <div className="app">
      <LanguageSelector.Provider value={{ locale, setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/pokemons" element={<PokemonsPage></PokemonsPage>}></Route>
              <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage></PokemonDetailPage>}></Route>
              <Route path="/location/:locationName" element={<LocationDetailPage></LocationDetailPage>}></Route>
              <Route path="/game" element={<GamePage></GamePage>}></Route>
            </Routes>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
