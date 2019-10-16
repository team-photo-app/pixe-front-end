import React from 'react'
import {
  Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    // Right,
    // Badge
} from 'native-base';
import {NavigationActions} from 'react-navigation';
import {ScrollView, View} from 'react-native';

const routeData = [
  {
    name: "Gallery",
    route: "Gallery",
    icon: "albums"
  },
  {
    name: "Scanner",
    route: "ScannerPage",
    icon: "arrow-down"
  },
  {
    name: "Home",
    route: "Home",
    icon: "arrow-up"
  },
  {
    name: "Create Event",
    route: "EventCreate",
    icon: "arrow-down",
  },
  {
   name: "Landing",
   route: "Landing",
   icon: "arrow-up",
  },
  {
    name: "Join Event",
    route: "EventJoin",
    icon: "arrow-up",
  },
  {
    name: "Event List",
    route: "EventList",
    icon: "book"
  }
];



class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (

        <Container>
          <Content>
            <List
                dataArray={routeData}
                renderRow={data =>
                    <ListItem
                        button
                        noBorder
                        onPress={() => this.props.navigation.navigate(
                            data.route)}
                    >
                      <Left>
                        <Icon
                            active
                            name={data.icon}
                            style={{color: "#777", fontSize: 26, width: 30}}
                        />
                        <Text style={{color: "black"}}>
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

export default SideBar;
