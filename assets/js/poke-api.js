
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10)=> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())         //converte a Response em Json
    .then((jsonBody) => jsonBody.results)        //extrai apenas o results do jsonBody
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailsRequest) => Promise.all(detailsRequest))  //espera todas as requisições terminarem
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.error(error))
}