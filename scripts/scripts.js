let pokemonRepository = (function (pokemon) {
  let pokemonList = [ {
   name: 'Bulbasaur' ,
   height: 0.7 ,
   type: ['grass' , 'poison']
}, 
{ 
   name: 'Ivysaur' ,
   height: 1 ,
   type: ['grass' , 'poison']

},
{
   name: 'Venusaur' ,
   height: 2 ,
   type: ['grass' , 'poison']
}];

  function add() {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
   add: add,
   getAll: getAll
 };
})(); 
pokemonRepository.getAll().forEach(function(pokemon) {
 document.write(pokemon.name + pokemon.height + pokemon.type);
}); 