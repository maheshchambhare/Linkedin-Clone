import React from "react";
import "./sidebar.css";
import {Avatar} from "@material-ui/core"

function Sidebar() {

    const recentItems = (topic) => {
        return (
        <div className="sidebar-recent">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
        );
    }


  return <div className="sidebar">
      <div className="sidebar-top">
          <img src="https://i.pinimg.com/originals/8a/68/e9/8a68e9b36465706dc43d1c6e5ca1312f.jpg" alt="Cover Image"/>
          <Avatar className="sidebar-avatar"/>
          <h2>Mahesh</h2>
          <h4>chambharem7@gmail.com</h4>
      </div>
      <div className="sidebar-stats">
          <div className="sidebar-stat">
              <p>Who vieved You</p>
              <p className="sidebar-statnum">50,450</p>
          </div>
          <div className="sidebar-stat">
              <p>vieves on Post</p>
              <p className="sidebar-statnum">1,02,156</p>
          </div>
      </div>
      <div className="sidebar-bottom">
          <p>Recent</p>
          {recentItems("reactjs")}
          {recentItems("programming")}
          {recentItems("javascript")}
      </div>
  </div>;
}

export default Sidebar;
