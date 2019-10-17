import { StyleSheet, Dimensions } from 'react-native'

const { width: winWidth, height: winHeight } = Dimensions.get('window')


export default StyleSheet.create({
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
    marginBottom: 20

  },

  pictureWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },

  header: {
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#3f3e40',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 10
  },

  footer: {
    bottom: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    shadowColor: '#3f3e40',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1
  }
})
