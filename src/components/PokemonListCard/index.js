import React from 'react';
import PropTypes from 'prop-types';
import { CardBackground, CardText } from './styled';

const PokemonListCard = props => {
  const { name } = props;
  return (
    <CardBackground>
      <CardText>Example Lastname </CardText>
    </CardBackground>
  );
};

PokemonListCard.propTypes = {
  name: PropTypes.string
};

PokemonListCard.defaultProps = {
  name: ''
};

export default PokemonListCard;
