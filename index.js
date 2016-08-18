// var fs = require('fs');
// function upperCaseRead(pokemon, done) {
// 	fs.readFile(pokemon, function(err, pokemon){
// 		done(null, pokemon.toString().toUpperCase());
// 	})
// }

// upperCaseRead('pokemons.txt', function(err, pokemon){
// 	console.log(pokemon);
// })

var document = require('global/document');

var ul = document.createElement('ul');
var pokemons = ['pikachu', 'charmander', 'zubat'];

pokemons.forEach(function(pokemon) {
	var li = document.createElement('li');
	li.innerText = pokemon;
	ul.appendChild(li);
});

// document.body.appendChild(ul);

console.log(ul.toString());