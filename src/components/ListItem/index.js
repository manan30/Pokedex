import React from 'react';
import PropTypes from 'prop-types';
import { CardBackground, CardText } from './styled';

const ListItem = props => {
  const { name } = props;

  return (
    <CardBackground>
      <CardText />
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
