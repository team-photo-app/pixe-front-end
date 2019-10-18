import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');


export default {

  alignCenter: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    padding: 0,
  },

  pictureSize: {
    height: 100,
    width: 100,
    marginLeft: 2,
    marginBottom: 20,
    borderRadius: 5,

  },

  pictureWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginLeft: 2,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  lightBox: {
    backgroundColor: 'black',
    opacity: .5,
  },
}
