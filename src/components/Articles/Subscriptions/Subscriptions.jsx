import React from "react";
import "./subscriptions.scss";
import add_icon from "../../../assets/icons/add_friend_icon.svg";
import sub_1 from "../../../assets/images/Subscribers/sub_1.webp";
import sub_2 from "../../../assets/images/Subscribers/sub_2.webp";
import sub_3 from "../../../assets/images/Subscribers/sub_3.webp";
import sub_4 from "../../../assets/images/Subscribers/sub_4.webp";
import sub_5 from "../../../assets/images/Subscribers/sub_5.webp";
import rus from "../../../assets/images/Subscribers/rus.webp";
import sub from "../../../assets/icons/subtract_icon.svg";

export default function Subscriptions() {
  return (
    <article className="subscriptions">
      <h2>Интересные подписки</h2>

      <ul className="subscriptions__list">
        <li className="subscriber">
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
              <li>Призер Олимпийских...</li>
            </ul>
          </div>
          <button className="subscriber__add_btn">
            <img src={add_icon} />
          </button>
        </li>
        <li className="subscriber">
          <div className="subscriber__photo">
            <img src={sub_2} className="" />
            <img src={rus} className="nationality" />
          </div>
          <div className="subscriber__content">
            <p className="text">
              Дмитрий Зайцев <img src={sub} />{" "}
            </p>
            <ul className="subscriber__list">
              <li>Судья</li>
              <li>•</li>
              <li>Заслуженный судья и сек...</li>
            </ul>
          </div>
          <button className="subscriber__add_btn">
            <img src={add_icon} />
          </button>
        </li>
        <li className="subscriber">
          <div className="subscriber__photo">
            <img src={sub_3} className="" />
            <img src={rus} className="nationality" />
          </div>
          <div className="subscriber__content">
            <p className="text">Светлана Бессонова</p>
            <ul className="subscriber__list">
              <li>Спортсмен</li>
              <li>•</li>
              <li>Призер Олимпийских...</li>
            </ul>
          </div>
          <button className="subscriber__add_btn">
            <img src={add_icon} />
          </button>
        </li>
        <li className="subscriber">
          <div className="subscriber__photo">
            <img src={sub_4} className="" />
            <img src={rus} className="nationality" />
          </div>
          <div className="subscriber__content">
            <p className="text">Андрей Романов</p>
            <ul className="subscriber__list">
              <li>Спортсмен</li>
              <li>•</li>
              <li>Мастер спорта СССР...</li>
            </ul>
          </div>
          <button className="subscriber__add_btn">
            <img src={add_icon} />
          </button>
        </li>
        <li className="subscriber">
          <div className="subscriber__photo">
            <img src={sub_5} className="" />
            <img src={rus} className="nationality" />
          </div>
          <div className="subscriber__content">
            <p className="text">
              Анастасия Землякова <img src={sub} />{" "}
            </p>
            <ul className="subscriber__list">
              <li>Тренер</li>
              <li>•</li>
              <li>Тренер по гандболу</li>
            </ul>
          </div>
          <button className="subscriber__add_btn">
            <img src={add_icon} />
          </button>
        </li>
      </ul>

      <button className="view_all__btn">
        <p className="text">Смотреть всех</p>
      </button>
    </article>
  );
}
