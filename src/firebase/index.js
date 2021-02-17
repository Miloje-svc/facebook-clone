import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBJ_7DEmD8frD7Uh5M4i_yWhtQQkG2ksFA",
  authDomain: "facebook-clone-84372.firebaseapp.com",
  databaseURL: "https://facebook-clone-84372.firebaseio.com",
  projectId: "facebook-clone-84372",
  storageBucket: "facebook-clone-84372.appspot.com",
  messagingSenderId: "296091067314",
  appId: "1:296091067314:web:cc2e4dfae3bc9411c53aab",
  measurementId: "G-D0T9FTCJGJ"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebaseApp.firestore()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { firebaseApp, auth, db, facebookProvider, }