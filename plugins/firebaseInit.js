import * as firebase from 'firebase/app'
import credentials from '../credentials.js'

if (!firebase.apps.length) {
  const config = credentials.firebase
  firebase.initializeApp(config)
}

export default firebase
