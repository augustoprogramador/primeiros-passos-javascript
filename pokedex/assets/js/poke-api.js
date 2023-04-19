const pokeApi = {};

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `http://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`;
    return fetch(url)
            .then((response) => response.json())
            .then((data) => data.results)
            .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url).then(response => response.json())))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails)
            .catch((error) => console.error(error));
}