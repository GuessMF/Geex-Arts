import React from "react";
import "./latestnews.scss";
import calendar from "../../../assets/icons/calendar_icon.svg";

export default function LatestNews() {
  return (
    <article className="latestnews">
      <h2>Последние новости</h2>

      <ul className="latestnews__list">
        <li className="news">
          <h4>Спортивная борьба</h4>
          <p className="text">
            Первенство Московской области по спортивной борьбе (вольная борьба)
            среди юниоров до 24 лет
          </p>
          <div className="news__bottom">
            <img src={calendar} />
            <span>2 Апреля, 14:00</span>
          </div>
        </li>

        <li className="news">
          <h4>Велоспорт</h4>
          <p className="text">
            Рекорды Рушатся: Спортсмены Поднимают Планку Выше Во Всех
            Дисциплинах
          </p>
          <div className="news__bottom">
            <img src={calendar} />
            <span>29 Марта, 17:52</span>
          </div>
        </li>

        <li className="news">
          <h4>Тяжелая атлетика</h4>
          <p className="text">
            Неоспоримые Чемпионы: Триумф Спортивных Героев Вновь Встряхивает Мир
          </p>
          <div className="news__bottom">
            <img src={calendar} />
            <span>20 Марта, 17:22</span>
          </div>
        </li>
      </ul>

      <button className="view_all__btn">
        <p className="text">Смотреть всех</p>
      </button>
    </article>
  );
}
