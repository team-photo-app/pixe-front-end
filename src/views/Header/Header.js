import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Body,
  Left,
  Right,
  Icon, Text,
} from 'native-base'
import styles from "./styles";
import { withNavigation } from 'react-navigation';

class PixeHeader extends Component {


  render() {
    return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon
                    style="black"
                    name="menu" />
              </Button>
            </Left>
            <Right>
            <Text>PixE</Text>
          </Right>
            <Body>
              <Title>Gallery</Title>
            </Body>
            <Right />
          </Header>
        </Container>
    );
  }
}

export default withNavigation(PixeHeader);
