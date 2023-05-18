const ataque = {
  nome: 'Investida',
  dano: 40,
  tipo: 'Normal',
  precisao: 100
}

const pokemon1 = {
  nome: 'Bulbasaur',
  tipo: 'Grama',
  nivel: 5,
  ataques: [ataque]
}

pokemon1.ataques.push({
  nome: 'Folha Navalha',
  dano: 45,
  tipo: 'Grama',
  precisao: 100
})

const copiaPokemon1 = {
  ...pokemon1,
  nome: 'Squirtle',
  tipo: 'Água',
  ataques: [ataque]
}

copiaPokemon1.ataques.push({
  nome: 'Jato de Água',
  dano: 40,
  tipo: 'Água',
  precisao: 100
})

const pokedex = [pokemon1,copiaPokemon1]

console.log(pokedex)
