import React from 'react';
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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons(true);
  }

  render() {
    const { pokemons, fetchPokemons } = this.props;
    const { loading } = this.state;
    return (
      <ScreenWrapper>
        <ThemeToggleContainer />
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <InfiniteListContainer spinnerLoading={loading}>
          <InfiniteList
            toggleSpinner={status => {
              this.setState({ loading: status });
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
