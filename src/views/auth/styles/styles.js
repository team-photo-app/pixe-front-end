
import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');


export default {

  alignCenter: {
    flex: 3,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#F7F8FC",
    padding: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 300,
  },

  authButtons: {
    position: 'absolute',
    bottom: 0,
    borderColor: 'black',
    backgroundColor: '#FFFEFF',
  },

  pixiLogo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    padding: null,
    marginTop: 200,
    marginBottom: 50,
  },
  footer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
    bottom: 0,
  },
  login: {

    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: 300,
    bottom: 0,
  }
}
