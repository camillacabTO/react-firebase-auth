import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.auth = firebase.auth()
    this.database = firebase.database()
  }

  signUpUser = (email, password) => {
    console.log('Inside signUp')
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  signInUser = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  signOut = () => {
    return this.auth.signOut()
  }
  resetUserPassword = email => {
    return this.auth.sendPasswordResetEmail(email)
  }
  updateUserPassword = password => {
    return this.auth.currentUser.updatePassword(password)
  }

  user = id => this.database.ref(`users/${id}`) // returns a reference to this user.

  users = () => this.database.ref('users')
}

export default Firebase
