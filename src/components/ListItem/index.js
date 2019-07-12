import React from 'react';
import PropTypes from 'prop-types';
import { CardBackground, CardImage, CardTextContainer } from './styled';

const ListItem = props => {
  const { name } = props;

  return (
    <CardBackground>
      <CardImage />
      <CardTextContainer />
    </CardBackground>
  );
};

ListItem.propTypes = {
  name: PropTypes.string
};

ListItem.defaultProps = {
  name: ''
};

export default ListItem;
