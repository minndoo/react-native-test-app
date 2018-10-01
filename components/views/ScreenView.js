import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from 'native-base';

import AppHeader from '../partials/AppHeader';
import AppFooter from '../partials/AppFooter';
import AppBody from '../partials/AppBody';

const ScreenView = ({ navigation }) => {
  return (
    <Container>
      <AppHeader headerTitle={navigation.state.key} />
      <AppBody />
      <AppFooter />
    </Container>
  );
};

export default ScreenView;
