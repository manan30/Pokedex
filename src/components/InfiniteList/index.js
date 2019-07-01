import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentWrapper, ListWrapper } from './styled';
import PokemonListCard from '../PokemonListCard';

class InfiniteList extends Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  handleScroll = e => {
    const element = e.target;
    if (
      element.scrollHeight - element.scrollTop === element.clientHeight ||
      element.scrollHeight - element.scrollTop === element.clientHeight + 1
    ) {
      this.setState({ loading: true });
    }
  };

  loadPokemons = () => {
    const { pokemons } = this.props;

    return pokemons.map((item, i) => {
      const k = i;
      return <PokemonListCard key={k}></PokemonListCard>;
    });
  };

  fetchNewPokemons = () => {
    const { fetchPokemons } = this.props;
    setTimeout(() => {
      fetchPokemons(false);
      this.setState({ loading: false });
    }, 4000);
  };

  render() {
    const { loading } = this.state;
    return (
      <ComponentWrapper onScroll={this.handleScroll}>
        <ListWrapper>{this.loadPokemons()}</ListWrapper>
        {loading && <p> Loading... </p> && this.fetchNewPokemons()}
      </ComponentWrapper>
    );
  }
}

InfiniteList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.any),
  fetchPokemons: PropTypes.func
};

InfiniteList.defaultProps = {
  pokemons: [],
  fetchPokemons: () => {}
};

export default InfiniteList;
