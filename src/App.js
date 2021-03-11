import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { auth } from "./components/Addfirebase";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {

    // Stays Logged in After Refresh

    
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))

      }else {
        dispatch(logout());
      }
    })
  })

  return (
    <div className="App">
      <Header />

      {!user ? (<Login />) : (
      <div className="app-body">
        <Sidebar />
        <Feed />
      </div>
    )}
   </div>
  );
}

export default App;
