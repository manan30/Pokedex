const fetchPokemons = data => {
  return { type: 'FETCH_POKEMONS', data };
};

const actions = { fetchPokemons };

export default actions;
