import React from 'react'
import {
  View,
  Text,
  Header,
  Footer,
  Content,
  Container,
  Button, Icon, Left, Right,
} from 'native-base'
import styles from './styles/styles';
import styleTemplate from '../templates/styleTemplate'

class MyEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <Container>
        <Header
          style={styleTemplate.header}
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon
                style={styleTemplate.menu}
                name="menu" />
            </Button>
          </Left>
          <Right>
            <Text>PixE</Text>
          </Right>
        </Header>
        <Content>
           <View style={styles.alignCenter}>
             <Text>
               My EVENTS
             </Text>
           </View>
        </Content>
        <Footer
          style={styleTemplate.footer}
        />
      </Container>
    );
  }
}

MyEvents.propTypes = {};

export default MyEvents;
