import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        {/* Logo Image */}
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615356557~hmac=62a57ded8a3b60bcc339f0849f18cd10"
          alt="Linkedin"
        />
        <div className="header-search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Massaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQHsFbJMGcMvwg/profile-displayphoto-shrink_200_200/0/1611320636607?e=1619654400&v=beta&t=3nEV62b6sc8clCyvmJQ2d3dyasTtt_JV_d1C4xFbu-E"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
