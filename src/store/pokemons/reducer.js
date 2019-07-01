const initialState = {
  pokemons: [],
  total: 0,
  next: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS': {
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
