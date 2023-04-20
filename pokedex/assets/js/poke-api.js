const pokeApi = {};

function convertPokeApiResponseToPokemonModel(pokemonDetail) {
    const pokemon = new Pokemon();
    pokemon.id = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;
    pokemon.types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    [pokemon.type] = pokemon.types;
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiResponseToPokemonModel);
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
            .then((response) => response.json())
            .then((data) => data.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails)
            .catch((error) => console.error(error));
}