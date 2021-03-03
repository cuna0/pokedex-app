let pokemonList = [
    {
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
    }
]; 
for(i = 0; i < pokemonList.length; i++) {
   if(pokemonList[i].height < 3) {
     document.write(pokemonList[i].name + ', ' + pokemonList[i].height)
    }
   
 }