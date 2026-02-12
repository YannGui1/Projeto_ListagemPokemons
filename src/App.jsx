import { useState, useEffect } from 'react';
import { getPokemons } from './services/poke-api';
import PokemonCard from './components/pokemonCard';
import './assets/App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([]);   // Estado da lista
  const [offset, setOffset] = useState(0);        // Estado da paginação
  const [hasMore, setHasMore] = useState(true);   // Controla se botão aparece

  const limit = 10;
  const maxRecords = 151;

  //  Função que carrega os dados
  const loadPokemonItems = async (offset, limit) => {
    try {
      const newPokemons = await getPokemons(offset, limit);

      //  Adiciona os novos pokemons à lista antiga
      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
          const newPokemons = await getPokemons(0, limit);
          setPokemons(newPokemons); 
      } catch (error) {
          console.log(error);
      }
  };

  loadData();
  }, []);

  // Botão "Load More"
  const handleLoadMore = () => {
    const nextOffset = offset + limit;

    setOffset(nextOffset);
    
    const qtdRecordsWithNextPage = nextOffset + limit;

    if(qtdRecordsWithNextPage >= maxRecords){
      const newLimit = maxRecords - nextOffset;
      loadPokemonItems(nextOffset, newLimit);
      setHasMore(false); 
    } else {
      loadPokemonItems(nextOffset, limit);
    }
  };

  return (
     <section className="content">
      <h1>Pokedex React</h1>

      <ol className="pokemons" id="pokemonList">
        {pokemons.map((pokemon) => ( // Renderiza um "Card" para cada pokemon"
          <PokemonCard key={pokemon.number} pokemon={pokemon} />
        ))}
      </ol>
      <div className="pagination">
        {hasMore && (
          <button
            id="loadMoreButton"
            type="button"
            onClick={handleLoadMore} >
              Load More
            </button>
        )}
      </div>
     </section>
  );
};

export default App
