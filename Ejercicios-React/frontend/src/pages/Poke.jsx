import { useState, useEffect } from "react";
import PokeCard from "@components/PokeCard.jsx";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const CANTIDAD = 21;

const Poke = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`${BASE_URL}${id}`);
    if (!response.ok) {
      throw new Error(`Error en el fetch del pokemon: ${id}`);
    }
    return response.json();
  };

  useEffect(() => {
    // Se piden todos juntos y se guardan de una sola vez: asi quedan en orden
    // y no se duplican cuando React ejecuta el efecto dos veces en desarrollo
    const ids = Array.from({ length: CANTIDAD }, (_, i) => i + 1);

    Promise.all(ids.map(fetchPokemon))
      .then((data) => setPokemonData(data))
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los pokemon");
      });
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!pokemonData.length) {
    return <h1>Cargando pokemon...</h1>;
  }

  return (
    <div className="poke-grid">
      {pokemonData.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemonData={pokemon} />
      ))}
    </div>
  );
};

export default Poke;
