import React from "react";
import "./filter.scss";
import all_icon from "../../../assets/icons/all_icon.svg";
import results_icon from "../../../assets/icons/results_icon.svg";
import video_icon from "../../../assets/icons/video_icon.svg";
import achievements_icon from "../../../assets/icons/achievements_icon.svg";
export default function Filter() {
  return (
    <article className="filter">
      <h2>Фильтр ленты</h2>
      <ul className="filter__list">
        <li>
          <img src={all_icon} />
          <p className="text">Все</p>
        </li>
        <li>
          <img src={results_icon} />
          <p className="text">Результаты соревнований</p>
        </li>
        <li>
          <img src={video_icon} />
          <p className="text">Видео</p>
        </li>
        <li>
          <img src={achievements_icon} />
          <p className="text">Достижения</p>
        </li>
      </ul>
    </article>
  );
}
