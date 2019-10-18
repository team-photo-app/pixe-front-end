import React from 'react'
import styles from './styles'
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  View
  // Badge
} from 'native-base'
import { Image } from 'react-native'

const routeData = [
  {
    name: 'Gallery',
    route: 'Gallery',
    icon: 'albums'
  },
  {
    name: 'Join Event',
    route: 'JoinEvent',
    icon: 'ios-color-wand'
  },
  {
    name: 'My Events',
    route: 'MyEvents', // MyEvents
    icon: 'pizza'
  },
  {
    name: 'Create Event',
    route: 'EventCreate',
    icon: 'ios-megaphone'
  },
  {
    name: 'Log Out',
    route: 'LoginView',
    icon: 'car'
  }
]

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (

      <Container>
        <Content>
          <Right>
            <Icon
              onPress={() => this.props.navigation.closeDrawer()}
              name='ios-close'
              style={{color:'#595959'}}
            />
            <View
            style={styles.alignCenter}>
            <Image
              style={styles.pixiBreak}
              source={require('../../../assets/pixe_md.png')}
            />
            <Image
              style={styles.userProfile}
              source={require('../../../assets/kim.png')}
            />
            <Text
              style={{color:'#595959', marginBottom: 50}}
            >
            Kim D.</Text>
            </View>
          </Right>
          <List

            keyExtractor={(item, idx) => idx.toString()}
            dataArray={routeData}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: '#777', fontSize: 26, width: 30 }}
                  />
                  <Text style={{ color: 'black' }}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    )
  }
}

export default SideBar
