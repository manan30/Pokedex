import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

import ComponentWrapper from './styled';

const loading = false;

const fetchNewPokemons = cb => {
  const { fetchPokemons, toggleSpinner } = cb;
  setTimeout(() => {
    toggleSpinner(false);
    fetchPokemons(false);
  }, 2000);
};

const handleScroll = (e, cb) => {
  const element = e.target;
  const { toggleSpinner } = cb;

  if (
    (element.scrollHeight - element.scrollTop === element.clientHeight ||
      element.scrollHeight - element.scrollTop === element.clientHeight + 1) &&
    !loading
  ) {
    toggleSpinner(true);
    fetchNewPokemons(cb);
  }
};

const loadPokemons = pokemons => {
  return pokemons.map((item, i) => {
    const k = i;
    return <ListItem key={k}></ListItem>;
  });
};

const InfiniteList = props => {
  const { pokemons, fetchPokemons, toggleSpinner } = props;

  return (
    <ComponentWrapper
      onScroll={e => {
        handleScroll(e, { fetchPokemons, toggleSpinner });
      }}
    >
      {loadPokemons(pokemons)}
    </ComponentWrapper>
  );
};

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
