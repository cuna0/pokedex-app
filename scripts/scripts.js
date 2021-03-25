let pokemonRepository = (function (pokemon) {
  let pokemonList = [];

  function LoadList() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151%27')
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((item) => {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function LoadDetails(pokemon) {
    return fetch(pokemon.detailsUrl)
      .then((response) => response.json())
      .then((data) => {
        pokemon.height = data.height;
        pokemon.imageUrl = data.sprites.front_default;
        pokemon.weight = data.weight;
        pokemon.types = data.types;
        modal(pokemon);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function modal(pokemon) {
    var pTypes = '';
    pokemon.types.forEach(function (item) {
      pTypes = pTypes + ',' + item.type.name
    });

    // Get the modal
    var modal = document.getElementById('pokemonModal');

    document.getElementById('title').innerHTML = pokemon.name;
    document.getElementById('img').src = pokemon.imageUrl;
    document.getElementById('height').innerHTML = 'Height:  ' + pokemon.height + ' meters';
    document.getElementById('weight').innerHTML = 'Weight: ' + pokemon.weight + ' pounds';
    document.getElementById('type').innerHTML = 'Type(s): ' + pTypes.substring(1);
  }
  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  function getAll() {
    return pokemonList;
  }
  function showDetails(pokemon) {
    LoadDetails(pokemon);
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    listpokemon.classList.add('list-group-item', 'col-md-4', 'col-sm-6');
    let button = document.createElement('button');

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-outline-primary', 'btn-block');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    LoadList: LoadList,
  };
})();
pokemonRepository.LoadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

$(document).ready(function () {
  $('#inputSearch').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('#pokemon-list li').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});