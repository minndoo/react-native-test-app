import React, { Component } from 'react';
import { Content, Text } from 'native-base';

class AppBody extends Component {
  render() {
    return (
      <Content>
        <Text>{this.props.value}</Text>
      </Content>
    );
  }
}

export default AppBody;
