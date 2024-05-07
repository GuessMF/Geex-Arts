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
import user_icon from "../../assets/icons/user.svg";
import arrow_icon from "../../assets/icons/arrow.svg";
import menu_icon from "../../assets/icons/menu.svg";
import close_icon from "../../assets/icons/close_menu.svg";

export default function Header({modal, openModal, menuOpened, setMenuOpened}) {
  const handleClick = () => {
    openModal(!modal);
  };

  const handlOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <img src={logo} />

        <button className="menu__btn" onClick={handlOpenMenu}>
          <img src={menuOpened ? close_icon : menu_icon} />
        </button>

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

        <div className="change_country">
          <img src={flag_icon} />
          <span>RU</span>
          <img src={arrow_icon} />
          <button className="auth__btn" onClick={handleClick}>
            <img src={user_icon} />
          </button>
        </div>
      </div>
    </header>
  );
}
