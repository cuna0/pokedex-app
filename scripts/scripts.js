let pokemonRepository = (function (pokemon) {
  let pokemonList = [{
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison']
  },
  {
    name: 'Ivysaur',
    height: 1,
    type: ['grass', 'poison']

  },
  {
    name: 'Venusaur',
    height: 2,
    type: ['grass', 'poison']
  }];


  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
      pokemonRepository.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  function getAll() {
    return pokemonList;
  }
  function showDetails(pokemon) {
    console.log(pokemon)

  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});