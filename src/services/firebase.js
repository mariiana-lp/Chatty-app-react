import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '@firebase/firestore'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBmV4ghVVhZCxkk8dTI3S4KcckDQseBtiQ",
  authDomain: "app-chatty-react.firebaseapp.com",
  databaseURl: "https://app-chatty-react-default-rtdb.firebaseio.com/",
  projectId: "app-chatty-react",
  storageBucket: "app-chatty-react.appspot.com",
  messagingSenderId: "583143064412",
  appId: "1:583143064412:web:10f7d16063c02413d7b799"
};

const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore();
//const auth = firebase.getAuth(app);
export {db};


  