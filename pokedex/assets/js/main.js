const pokemonsListElement = document.querySelector('.pokemons');

pokeApi.getPokemons()
        .then((pokemons) => {
            pokemonsListElement.innerHTML += pokemons.map(convertPokemonToHtml).join('');
        });

function tratarPokemon(pokemon) {
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return pokemon;
}

function convertPokemonToHtml(pokemon) {
    const pokemonTratado = tratarPokemon(pokemon);
    return `
        <li class="pokemon">
            <span class="number">#${pokemonTratado.id}</span>
            <span class="name">${(pokemonTratado.name)}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToHtml(pokemonTratado.types).join('')}
                </ol>
                <img src="${pokemonTratado.photo}" alt="${(pokemonTratado.name)}">
            </div>
        </li>
    `;
}

function convertPokemonTypesToHtml(types) {
    return types.map((type) => `<li class="type">${type}</li>`)
}
