import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHwUHS59yYz6FQ36Aft4jRZET7J9BDi3Q",
  authDomain: "pixe-b18c8.firebaseapp.com",
  databaseURL: "pixe-b18c8.appspot.com",
  storageBucket: "gs://pixe-b18c8.appspot.com"
};

const superhotbase = firebase.initializeApp(firebaseConfig);

export default superhotbase;
