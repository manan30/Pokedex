import React from 'react';
import PropTypes from 'prop-types';
import { ToggleSwitchWrapper, Toggle, Ripple, ToggleBall } from './styled';

class ToggleSwitch extends React.Component {
  constructor() {
    super();
    this.state = { toggled: false };
  }

  handleToggle = e => {
    e.persist();
    e.preventDefault();

    this.setState(
      state => ({ toggled: !state.toggled }),
      () => console.log('toggled')
    );
  };

  render() {
    const { toggled } = this.state;
    return (
      <ToggleSwitchWrapper>
        <Toggle onClick={this.handleToggle} toggled={toggled} {...this.props}>
          <ToggleBall toggled={toggled} {...this.props} />
          <Ripple visible={toggled} {...this.props} />
        </Toggle>
      </ToggleSwitchWrapper>
    );
  }
}

ToggleSwitch.propTypes = {
  initial: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  width: PropTypes.number,
  padding: PropTypes.number,
  ballColor: PropTypes.string,
  ballColorActive: PropTypes.string,
  bgToggled: PropTypes.string,
  borderColor: PropTypes.string
};

ToggleSwitch.defaultProps = {
  initial: false,
  width: 80,
  padding: 3,
  ballColor: '#fff',
  ballColorActive: '#f5f5f5',
  bgToggled: '#22e222',
  borderColor: '#ddd'
};

export default ToggleSwitch;
