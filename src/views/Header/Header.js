import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  Body,
  Left,
  Right,
  Icon
} from "native-base";
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
                    color="black"
                    name="menu" />
              </Button>
            </Left>
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
