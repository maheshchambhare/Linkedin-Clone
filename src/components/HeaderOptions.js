import React from "react";
import "./headeroption.css";
import { Avatar } from "@material-ui/core";
function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="header-option">
      {Icon && <Icon className="headeroption-icon" />}
      {avatar && <Avatar className="headeroption-icon" src={avatar} />}
      <h3 className="headeroption-title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
