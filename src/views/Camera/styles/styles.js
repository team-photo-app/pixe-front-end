import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');


export default {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#F7F8FC",
    padding: 0,
  },
  mb10: {
    marginBottom: 10
  }
};
