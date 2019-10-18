import { StyleSheet, Dimensions } from 'react-native'

const { width: winWidth, height: winHeight } = Dimensions.get('window')

export default {
  alignCenter: {
    flex: 3,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    alignSelf: 'center',
    marginBottom: 7
  },
  submitButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 12,
    fontSize: 50,

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
  },
  codeWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 200,
  },
  eventPhotos: {
    overflow: 'hidden',
    width: 100,
    aspectRatio: 2,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 50,
  },


  eventBox:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
  },

  createEventText: {
    color:'#595959',
  },
  spacer: {
    marginTop: 8,
  },
  mockDescribe: {
    width: 300,
    height: 200,
    backgroundColor: '#F7F8FC',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderStyle: 'solid',
    borderRadius: 10,
    marginTop: 30,

  }

}
