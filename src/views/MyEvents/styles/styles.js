import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');


export default {
  text: {
    marginBottom: 8,
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventPhotoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 2,
  },
  eventPhotos: {
    overflow: 'hidden',
    width: 280,
    aspectRatio: 2,
    borderRadius: 10,
    marginBottom: 30,
  }

}
