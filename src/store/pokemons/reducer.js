const initialState = {
  pokemons: [],
  pokemonDetails: [],
  total: 0,
  next: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS': {
      const response = action.data;
      return {
        ...state,
        next: response.next,
        pokemons: state.pokemons.concat(response.results),
        total: response.count
      };
    }

    case 'FETCH_POKEMON_DETAILS': {
      const response = action.data;
      return {
        next: response.next,
        pokemons: state.pokemons.concat(response.results),
        total: response.count
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
