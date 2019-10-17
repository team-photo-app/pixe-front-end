import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');


export default {

  alignCenter: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  pictureSize: {
    height: 100,
    width: 100,
    marginLeft: 2,
    marginBottom: 20,
  },

  pictureWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginLeft: 2,
    marginBottom: 20,
  },
  lightBox: {
    backgroundColor: 'black',
    opacity: .5,
  },

  contain: {
    flex: 1,
    height: 150,
  }
}