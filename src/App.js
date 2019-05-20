import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import id from 'shortid';
import actions from './store/actions/actions';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  fetchPokemons = () => {
    Axios.get(URL)
      .then(response => {
        console.log(actions.GENERATE_POKEDEX);
        // this.setState({ pokemons: response.data.results });
        this.props.dispatch({
          type: actions.GENERATE_POKEDEX,
          data: response.data.results
        });
      })
      .catch(e => console.log(e));
  };

  componentDidMount = () => {
    this.fetchPokemons();
  };

  render() {
    const { pokemons } = this.state;
    // console.log(pokemons);
    return (
      pokemons.length > 0 && (
        <div>
          {pokemons.map(pokemon => {
            return <h1 key={id.generate()}> {pokemon.name} </h1>;
          })}
          <br />
          <button
            type="button"
            onClick={() => {
              this.props.dispatch({
                type: 'test'
              });
            }}
          >
            Test Reducer
          </button>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);
