import React, { Component } from 'react';
import { Button, Footer, FooterTab, Text } from 'native-base';

class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
