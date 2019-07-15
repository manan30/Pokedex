import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

import ComponentWrapper from './styled';

const loadPokemons = pokemons => {
  return pokemons.map((item, i) => {
    const k = i;
    return <ListItem key={k}></ListItem>;
  });
};

const InfiniteList = props => {
  const { pokemons, fetchPokemons, toggleSpinner } = props;
  const [loading, setLoading] = useState(false);

  const handleScroll = e => {
    e.preventDefault();

    const element = e.target;

    if (
      element.scrollHeight - element.scrollTop === element.clientHeight ||
      element.scrollHeight - element.scrollTop === element.clientHeight + 1
    ) {
      setLoading(true);
      toggleSpinner(true);
    }
  };

  const fetchNewPokemons = useCallback(() => {
    setTimeout(() => {
      fetchPokemons(false);
      setLoading(false);
    }, 2000);
  }, [fetchPokemons]);

  useEffect(() => {
    if (!loading) {
      toggleSpinner(false);
      return;
    }
    fetchNewPokemons();
  }, [fetchNewPokemons, loading, toggleSpinner]);

  return (
    <ComponentWrapper
      onScroll={e => {
        handleScroll(e);
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
