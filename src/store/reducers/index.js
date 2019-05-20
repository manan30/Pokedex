import { combineReducers } from 'redux';
import actions from '../actions/actions';

const initialState = {};

const generatePokeDex = (state = initialState, action) => {
  console.log(state, action);

  switch (action.type) {
    case actions.GENERATE_POKEDEX: {
      console.log(action);
      const data = actions.generatePokedex(action.data);
      return data;
    }

    default:
      return state;
  }
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return { ...state, test: true };

    default:
      console.log('test');
      return state;
  }
};

const MasterReducer = combineReducers({ generatePokeDex, test });

export default MasterReducer;
