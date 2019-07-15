import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../utils/api';

// import ToggleSwitch from '../../components/ToggleSwitch';
import SearchBar from '../../components/SearchBar';
import InfiniteList from '../../components/InfiniteList';
import LoadingSpinner from '../../components/LoadingSpinner';

import {
  ScreenWrapper,
  ThemeToggleContainer,
  SearchBarContainer,
  InfiniteListContainer,
  LoadingSpinnerContainer
} from './styled';

const Main = props => {
  const [loading, setLoading] = useState(false);
  const { pokemons, fetchPokemons } = props;

  useEffect(() => {
    fetchPokemons(true);
  }, [fetchPokemons]);

  return (
    <ScreenWrapper>
      <ThemeToggleContainer />
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <InfiniteListContainer spinnerLoading={loading}>
        <InfiniteList
          toggleSpinner={status => {
            setLoading(status);
          }}
          pokemons={pokemons}
          fetchPokemons={fetchPokemons}
        />
      </InfiniteListContainer>
      {loading && (
        <LoadingSpinnerContainer>
          <LoadingSpinner />
        </LoadingSpinnerContainer>
      )}
    </ScreenWrapper>
  );
};

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
