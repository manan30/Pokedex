import React from 'react';
import { connect } from 'react-redux';
import PokemonListCard from './components/PokemonListCard';

const App = () => {
  return (
    <div>
      <PokemonListCard />
    </div>
  );
};

const mapStateToProps = state => ({ state });

export default App;
// export default connect(mapStateToProps)(App);
