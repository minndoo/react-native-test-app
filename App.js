import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Body,
  Text,
  Drawer,
  Button,
  Icon,
} from 'native-base';

import Sidebar from './components/partials/Sidebar';
import AppFooter from './components/partials/AppFooter';
import AppBody from './components/partials/AppBody';

export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({
      loading: false,
    });
  }
  render() {
    const { loading } = this.state;
    if (loading) return <Text>Loading</Text>;
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.openDrawer}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <AppBody />
          <AppFooter />
        </Container>
      </Drawer>
    );
  }
}
