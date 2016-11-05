import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';

export default class ReactModoroNavigator extends Component {
  renderScene = () => {

  }

  configureScene = () => {

  }

  render () {
    return (
      <Navigator
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

