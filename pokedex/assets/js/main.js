const pokemonsListElement = document.querySelector('.pokemons');

pokeApi.getPokemons()
        .then((pokemons) => {
            pokemonsListElement.innerHTML += pokemons.map(convertPokemonToHtml).join('');
        });

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.id}</span>
            <span class="name">${(pokemon.name)}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToHtml(pokemon.types).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${(pokemon.name)}">
            </div>
        </li>
    `;
}

function convertPokemonTypesToHtml(types) {
    return types.map((type) => `<li class="type ${type}">${type}</li>`)
}
