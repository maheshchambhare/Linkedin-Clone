import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser)

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
