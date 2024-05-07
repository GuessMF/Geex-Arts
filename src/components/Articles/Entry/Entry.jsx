import React from "react";
import "./entry.scss";

import comment_icon from "../../../assets/icons/comment_icon.svg";
import views_icon from "../../../assets/icons/views_icon.svg";

import user1 from "../../../assets/images/interview/user_1.webp";
import video from "../../../assets/images/entry_video.webp";
import play_icon from "../../../assets/icons/play_icon.svg";

export default function Entry() {
  return (
    <article className="entry">
      <ul className="entry__list">
        <li>Спортивная Борьба</li>
        <li>•</li>
        <li>12 марта, 2024 в 16:03</li>
      </ul>
      <h2>Запись соревнования по вольной борьбе в Санкт-Петербурге</h2>

      <div className="video" style={{backgroundImage: `url(${video})`}}>
        <button className="play__btn">
          {" "}
          <img src={play_icon} />
        </button>
      </div>

      <ul className="entry__social">
        <li>
          <img src={views_icon} />
          <p className="text">82 K</p>
        </li>
        <li>
          <img src={comment_icon} />
          <p className="text">1</p>
        </li>
      </ul>

      <article className="interview__comment">
        <img src={user1} />
        <div className="interview__comment-content">
          <p className="text">Вадим Давыдов</p>
          <b>Романов молодец! 👍🏻</b>
          <div className="interview__comment-bottom">
            <p className="text">15 минут назад</p>
            <button>Ответить</button>
          </div>
        </div>
      </article>
    </article>
  );
}
