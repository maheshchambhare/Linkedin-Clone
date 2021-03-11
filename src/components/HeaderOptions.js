import React from "react";
import "./headeroption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function HeaderOptions({ avatar ,Icon, title , onClick }) {
    const user = useSelector(selectUser);
  
  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="headeroption-icon" />}
      {avatar && <Avatar className="headeroption-icon" src={user.photoUrl}>{user.email[0]}</Avatar>}
      <h3 className="headeroption-title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
