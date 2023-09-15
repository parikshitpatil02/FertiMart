import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK6wv0oVPRerGx-71RmZDZXd6sZod_VqE",
  authDomain: "challenge-987cf.firebaseapp.com",
  projectId: "challenge-987cf",
  storageBucket: "challenge-987cf.appspot.com",
  messagingSenderId: "264678300935",
  appId: "1:264678300935:web:0deef43cbe3c84e95ab9a2",
  measurementId: "G-NR82Z7J7QT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};