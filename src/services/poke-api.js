
// Função auxiliar para formatar o objeto
function convertPokeApiDetailToPokemon(pokeDetail){
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    return {
        number: pokeDetail.id,
        name: pokeDetail.name,
        types: types,
        type: type,
        photo: pokeDetail.sprites.other.dream_world.front_default
    }
}
// Função principal para acessar a API
export const getPokemons = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    try {
        const response = await fetch(url)
        const jsonBody = await response.json()
        const pokemons = jsonBody.results

        const detailRequests = pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url)
            const pokeDetail = await response.json()
            return convertPokeApiDetailToPokemon(pokeDetail)
        })
        const pokemonsDetails = await Promise.all(detailRequests)

        return pokemonsDetails
    }
    catch(error) {
        console.error("Erro ao buscar pokémons", error)
        return []
    }
}