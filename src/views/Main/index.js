import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../utils/router';

import ToggleSwitch from '../../components/ToggleSwitch';
import InfiniteList from '../../components/InfiniteList';

class Main extends React.Component {
  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons(true);
  }

  render() {
    const { pokemons, fetchPokemons } = this.props;
    return (
      <section>
        <ToggleSwitch onToggle={this.handleToggle} />
        {pokemons.length > 0 && (
          <InfiniteList pokemons={pokemons} fetchPokemons={fetchPokemons} />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  fetchPokemons: loadStatus => dispatch(API.loadPokemons(loadStatus))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

Main.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.any),
  fetchPokemons: PropTypes.func
};

Main.defaultProps = {
  pokemons: [],
  fetchPokemons: () => {}
};
