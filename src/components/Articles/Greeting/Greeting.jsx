import React from "react";
import "./greeting.scss";
import sub_1 from "../../../assets/images/Subscribers/sub_1.webp";
import rus from "../../../assets/images/Subscribers/rus.webp";
import sub from "../../../assets/icons/subtract_icon.svg";
import add_icon from "../../../assets/icons/add_friend_icon.svg";
import user from "../../../assets/images/Subscribers/sub_2.webp";

export default function Greeting() {
  return (
    <article className="greeting">
      <ul className="greeting__list">
        <li>24 февраля, 2024 в 15:55</li>
      </ul>

      <div className="subscriber">
        <div className="subscriber__photo">
          <img src={sub_1} className="" />
          <img src={rus} className="nationality" />
        </div>
        <div className="subscriber__content">
          <p className="text">
            Александр Магомедов <img src={sub} />{" "}
          </p>
          <ul className="subscriber__list">
            <li>Спортсмен</li>
            <li>•</li>
            <li>Призер Олимпийских игр, двукратный призер чемпионатов мира</li>
          </ul>
        </div>
        <button className="subscriber__add_btn">
          <img src={add_icon} />
        </button>
      </div>

      <div className="greeting__place">
        <ul>
          <li className="first"> 1</li>
          <li>
            <p className="text">Занял 1-е место</p>
          </li>
          <li>
            <p className="text">
              В Спортивном чемпионате 2024 по греко-римской борьбе среди юниоров
              до 24{" "}
            </p>
          </li>
        </ul>
      </div>

      <div className="social">
        <img src={user} />
        <p className="text">Дмитрий Зайцев</p>
        <p className="text">и еще 500 человек поздравили</p>
      </div>

      <button className="congratulate__btn">Поздравить</button>
    </article>
  );
}
