import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PokemonDetailPage.scss";
import PokemonMainInfo from "../../pages/PokemonDetailPage/PokemonMainInfo/PokemonMainInfo";
import PokemonStats from "../../pages/PokemonDetailPage/PokemonStats/PokemonStats";
import PokemonEvolutions from "../../pages/PokemonDetailPage/PokemonEvolutions/PokemonEvolutions";
import PokemonLocations from "../../pages/PokemonDetailPage/PokemonLocations/PokemonLocations";
import PokemonMoves from "../../pages/PokemonDetailPage/PokemonMoves/PokemonMoves";
import PokemonGames from "../../pages/PokemonDetailPage/PokemonGames/PokemonGames";
import PokeballSeparator from "../../components/PokeballSeparator/PokeballSeparator";

const PokemonDetailPage = () => {
  return <div className="pokemon-detail-page">
    <Header></Header>
    <p>PokemonDetailPage!</p>

    <PokemonMainInfo></PokemonMainInfo>
    <PokeballSeparator></PokeballSeparator>
    <PokemonStats></PokemonStats>
    <PokeballSeparator></PokeballSeparator>
    <PokemonEvolutions></PokemonEvolutions>
    <PokeballSeparator></PokeballSeparator>
    <PokemonLocations></PokemonLocations>
    <PokeballSeparator></PokeballSeparator>
    <PokemonMoves></PokemonMoves>
    <PokeballSeparator></PokeballSeparator>
    <PokemonGames></PokemonGames>
    <Footer></Footer>
  </div>;
};

export default PokemonDetailPage;
