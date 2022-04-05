import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBmV4ghVVhZCxkk8dTI3S4KcckDQseBtiQ",
  authDomain: "app-chatty-react.firebaseapp.com",
  projectId: "app-chatty-react",
  storageBucket: "app-chatty-react.appspot.com",
  messagingSenderId: "583143064412",
  appId: "1:583143064412:web:10f7d16063c02413d7b799"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app;


  