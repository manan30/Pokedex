import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

import ComponentWrapper from './styled';

class InfiniteList extends Component {
  handleScroll = e => {
    const { toggleSpinner } = this.props;
    const element = e.target;

    if (
      element.scrollHeight - element.scrollTop === element.clientHeight ||
      element.scrollHeight - element.scrollTop === element.clientHeight + 1
    ) {
      toggleSpinner(true);
      this.fetchNewPokemons();
    }
  };

  loadPokemons = () => {
    const { pokemons } = this.props;
    console.log(pokemons);

    return pokemons.map((item, i) => {
      const k = i;
      return <ListItem key={k}></ListItem>;
    });
  };

  fetchNewPokemons = () => {
    const { fetchPokemons, toggleSpinner } = this.props;
    setTimeout(() => {
      fetchPokemons(false);
      toggleSpinner(false);
    }, 4000);
  };

  render() {
    return (
      <ComponentWrapper onScroll={this.handleScroll}>
        {this.loadPokemons()}
      </ComponentWrapper>
    );
  }
}

InfiniteList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.any),
  fetchPokemons: PropTypes.func,
  toggleSpinner: PropTypes.func
};

InfiniteList.defaultProps = {
  pokemons: [],
  fetchPokemons: () => {},
  toggleSpinner: () => {}
};

export default InfiniteList;
