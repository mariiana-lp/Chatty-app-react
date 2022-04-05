import "./App.css";
import React, { Component, useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { auth } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./components/PrivateRute"

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, [isAuth]);

  return(
    <Router>
      <Routes>
        <Route path="" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  )
}

export default App;
