import React from "react";
import logo from "../../assets/icons/logo.webp";
import home_icon from "../../assets/icons/home_icon.svg";
import bag_icon from "../../assets/icons/bag_icon.svg";
import users_icon from "../../assets/icons/users_icon.svg";
import trophy_icon from "../../assets/icons/trophy_icon.svg";
import building_icon from "../../assets/icons/building_icon.svg";
import flag_icon from "../../assets/icons/flag.svg";
import {NavLink} from "react-router-dom";
import user_icon from "../../assets/icons/user.svg";
import arrow_icon from "../../assets/icons/arrow.svg";
import menu_icon from "../../assets/icons/menu.svg";
import close_icon from "../../assets/icons/close_menu.svg";
import "./menu.scss";
export default function Menu({menuOpened, setMenuOpened}) {
  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <div className={menuOpened ? "menu opened" : "menu"}>
      <nav className="menu__nav">
        <ul>
          <NavLink to="/" onClick={handleClick}>
            <img src={home_icon} /> <p>Лента</p>
          </NavLink>

          <NavLink to="/marketplace" onClick={handleClick}>
            <img src={bag_icon} /> <p>Маркетплейс</p>
          </NavLink>

          <NavLink to="/ratings" onClick={handleClick}>
            <img src={users_icon} /> <p>Рейтинги</p>
          </NavLink>

          <NavLink to="/competitons" onClick={handleClick}>
            <img src={trophy_icon} /> <p>Соревнования</p>
          </NavLink>

          <NavLink to="/organizations" onClick={handleClick}>
            <img src={building_icon} /> <p>Организации</p>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
