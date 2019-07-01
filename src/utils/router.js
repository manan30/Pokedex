import axios from 'axios';
import actions from '../store/pokemons/actions';
import store from '../store';
import constants from './constants';

const loadPokemons = (initialLoad = false) => {
  return dispatch => {
    return axios
      .get(
        initialLoad
          ? `${constants.POKEMON_URL}offset=0&limit=20`
          : store.getState().next
      )
      .then(resp => dispatch(actions.fetchPokemons(resp.data)))
      .catch(err => console.log(err));
  };
};

export default { loadPokemons };
