import firebase from 'react-native-firebase'

export function login ({ email, password }) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) => console.log(value))
}

export function signUp ({ email, password, displayName }) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo)
      userInfo.user.updateProfile({ displayName: displayName.trim() })
        .then(() => {})
    })
}

export function signOut (onSignedOut) {
  firebase.auth().signOut()
    .then(() => {
      console / log('Signed out')
      onSignedOut()
    })
}

export function subscribeToAuthChanges (authStateChanged) {
  firebase.auth().onAuthStateChanged((user) => {
    authStateChanged(user)
  })
}
