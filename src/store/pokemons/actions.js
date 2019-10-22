const fetchPokemons = data => {
  return { type: 'FETCH_POKEMONS', data };
};

const fetchDetails = data => {
  return { type: 'FETCH_POKEMON_DETAILS', data };
};

const actions = { fetchPokemons, fetchDetails };

export default actions;
