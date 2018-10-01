import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { createDrawerNavigator } from 'react-navigation';

import CategoryList from './components/categories/CategoryList';

const CustomApp = createDrawerNavigator(CategoryList);

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
    return <CustomApp />;
  }
}
