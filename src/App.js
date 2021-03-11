import React from "react";

import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
