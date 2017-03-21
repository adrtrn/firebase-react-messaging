import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB2GZNCK_4h05wrb7m-Yb4tsOkUSM1Rhck",
  authDomain: "react-messenger-72394.firebaseapp.com",
  databaseURL: "https://react-messenger-72394.firebaseio.com",
  storageBucket: "react-messenger-72394.appspot.com",
  messagingSenderId: "791809663148"
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
