import React, { Component } from 'react';
import { Button, Left, Right, Body, Header, Title, Icon } from 'native-base';

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>{this.props.headerTitle}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;
