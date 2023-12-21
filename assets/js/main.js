const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
let limit = 50;
let offset = 0;

function pokemonToLi(pokemon) {
  return `
  <li onclick="getPokemonStats(${pokemon.number})" class="pokemon ${pokemon.type}">
  <span class="number">${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
      <ol class="types">
      ${pokemon.types
        .map((type) => `<li class="type ${type}">${type}</li>`)
        .join('')}
      </ol>
      <img src="${pokemon.photo}"
          alt="${pokemon.name}">
  </div>
</li>`;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(pokemonToLi).join('');
    pokemonList.innerHTML = newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
  limit += 25;

  loadPokemonItens(offset, limit);
});

function getPokemonStats(number) {
  pokeApi.getPokemonsDetail({ url: `https://pokeapi.co/api/v2/pokemon/${number}` })
    .then((pokemon) => {
      const html = `
        <section class="top ${pokemon.type}">
          <nav>
            <ol class="navbar">
              <li onclick="location.reload()">
              <i class="fa-solid fa-arrow-left"></i>
              </li>
              <li>
              <i class="fa-regular fa-heart"></i>
              </li>
            </ol>
          </nav>
          <div class="info">
            <h1>${pokemon.name}</h1>
            <h2>${pokemon.number}</h2>
          </div>
          <div class="types">
            ${pokemon.types
              .map((type) => `<li class="type-stats ${type}">${type}</li>`)
              .join('')}
          </div>
          <div class="pokemon-image">
            <img src="${pokemon.photo}"
            alt="${pokemon.name}">
          </div>
        </section>
        <section class="bottom-about">
          <div class="nav-about">
            <h3>About</h3>
          </div>
          <ol class="content-about">
            <li>Specie: ${pokemon.species}</li>
            <li>Height: ${pokemon.height}m</li>
            <li>Weight: ${pokemon.weight}kg</li>
            <li>Habilities: ${pokemon.abilities.join(', ')}</li>
          </ol>
        </section>
      `;

      document.querySelector('.content').innerHTML = html;
    });
}


