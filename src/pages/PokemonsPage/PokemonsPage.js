import useFetch from "../../Hooks/useFetch";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PokemonsPage.scss";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const API_URL = `${process.env.REACT_APP_API_URL}/pokemon?offset=20&limit=2000`;

const PokemonsPage = () => {
  const [pokemonsData] = useFetch(API_URL);

  return (
    <div className="pokemons-page page">
      <Header></Header>

      <div className="page__content">
        <div className="pokemons-page__pokemon-list">{pokemonsData?.results?.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>)}</div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PokemonsPage;
