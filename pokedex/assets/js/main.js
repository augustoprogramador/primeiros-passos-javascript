const pokemonsListElement = document.querySelector('.pokemons');
const loadMoreButton = document.querySelector('#loadMoreButton');
const maxRecords = 151;
const limit = 10;
let offset = 0;

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

loadPokemonItens(offset, limit);


loadMoreButton.addEventListener('click', () => {
    offset += limit;
    
    const qtdRecordsNextPage = offset + limit;
    
    if (qtdRecordsNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.style.display = 'none';
        return;
    }
    
    loadPokemonItens(offset, limit);
})
 
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit)
            .then((pokemons) => {
                pokemonsListElement.innerHTML += pokemons.map(convertPokemonToHtml).join('');
            });
}
