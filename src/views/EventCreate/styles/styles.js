import { StyleSheet, Dimensions } from 'react-native'

const { width: winWidth, height: winHeight } = Dimensions.get('window')

export default {

  text: {
    alignSelf: 'center',
    marginBottom: 7
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formBox: {
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },
  submit: {
    position: 'absolute',
    bottom: 0
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 1
  }
}
