import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  alignCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
})
