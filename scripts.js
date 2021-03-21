let pokemonRepository = (function (pokemon) {
    let pokemonList = [];
  
    function LoadList() {
      return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(data => {
          data.results.forEach(item => {
            var pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon)
          })
        })
        .catch(function (e) {
          console.error(e)
        })
    }
  
    function LoadDetails(pokemon) {
      return fetch(pokemon.detailsUrl)
        .then(response => response.json())
        .then(data => {
          pokemon.height = data.height;
          pokemon.imageUrl = data.sprites.front_default;
          pokemon.weight = data.weight
          modal(pokemon)
         
  
        })
        .catch(function (e) {
          console.error(e)
        })
    }
    function modal(pokemon){
       // Get the modal
          var modal = document.getElementById('details-modal');
          modal.style.display = 'block';
  
  
  
          document.getElementById('title').innerHTML = "Name is " + pokemon.name;
          document.getElementById('img').src = pokemon.imageUrl
          document.getElementById('height').innerHTML = "Height is " + pokemon.height;
          document.getElementById('weight').innerHTML = "Weight is " + pokemon.weight;
          var colseBtn = document.getElementById('close-btn');
          colseBtn.onclick = function () {
            modal.style.display = 'none';
           
          }
          document.addEventListener('keyup', (e) => {
            if (e.code === "Escape") {
              modal.style.display = 'none';
            }
  
          });
  
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = 'none';
            }
          }
    }
    function add(pokemon) {
      if (
        typeof pokemon === 'object' &&
        'name' in pokemon &&
        'detailsUrl' in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log('pokemon is not correct');
      }
    }
  
    function getAll() {
      return pokemonList;
    }
    function showDetails(pokemon) {
      LoadDetails(pokemon)
      
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
      addListItem: addListItem,
      LoadList: LoadList,
    };
  })();
  pokemonRepository.LoadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });