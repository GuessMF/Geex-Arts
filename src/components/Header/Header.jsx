import React from "react";

import "./header.scss";
import logo from "../../assets/icons/logo.webp";
import home_icon from "../../assets/icons/home_icon.svg";
import bag_icon from "../../assets/icons/bag_icon.svg";
import users_icon from "../../assets/icons/users_icon.svg";
import trophy_icon from "../../assets/icons/trophy_icon.svg";
import building_icon from "../../assets/icons/building_icon.svg";
import flag_icon from "../../assets/icons/flag.svg";
import {NavLink} from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <img src={logo} />
        <nav className="header__nav">
          <ul>
            <NavLink to="/">
              <img src={home_icon} /> <p>Лента</p>
            </NavLink>

            <NavLink to="/marketplace">
              <img src={bag_icon} /> <p>Маркетплейс</p>
            </NavLink>

            <NavLink to="/ratings">
              <img src={users_icon} /> <p>Рейтинги</p>
            </NavLink>

            <NavLink to="/competitons">
              <img src={trophy_icon} /> <p>Соревнования</p>
            </NavLink>

            <NavLink to="/organizations">
              <img src={building_icon} /> <p>Организации</p>
            </NavLink>
          </ul>
        </nav>
        <div>
          <img src={flag_icon} />
        </div>
      </div>
    </header>
  );
}
