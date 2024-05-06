import React from "react";

import "./header.scss";
import logo from "../../assets/icons/logo.webp";
import home_icon from "../../assets/icons/home_icon.svg";
import bag_icon from "../../assets/icons/bag_icon.svg";
import users_icon from "../../assets/icons/users_icon.svg";
import trophy_icon from "../../assets/icons/trophy_icon.svg";
import building_icon from "../../assets/icons/building_icon.svg";
import {NavLink} from "react-router-dom";

export default function Header() {
  return (
    <div className="row">
      <img src={logo} />
      <nav>
        <ul>
          <NavLink to="/">
            <img src={home_icon} /> HOME
          </NavLink>

          <NavLink to="/users">
            <img src={users_icon} /> USERS
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
