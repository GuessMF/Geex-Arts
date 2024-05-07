import React from "react";
import "./results.scss";

import winner_1 from "../../../assets/images/Winners/winner_1.webp";
import winner_2 from "../../../assets/images/Winners/winner_2.webp";
import winner_3 from "../../../assets/images/Winners/winner_3.webp";

import lavr from "../../../assets/images/Winners/lavr.webp";

import video_1 from "../../../assets/images/Winners/video_1.webp";
import video_2 from "../../../assets/images/Winners/video_2.webp";
import video_3 from "../../../assets/images/Winners/video_3.webp";
import video_4 from "../../../assets/images/Winners/video_4.webp";

import Views from "../../LittleComponents/Views";

export default function Results() {
  return (
    <article className="results">
      <ul className="results__list">
        <li>Спортивная Борьба</li>
        <li>•</li>
        <li>12 марта, 2024 в 16:03</li>
      </ul>
      <h2>
        Результаты соревнования по чемпионату 2024 по спортивной борьбе
        (греко-римская борьба)
      </h2>

      <div className="results__winners">
        <div className="results__winner">
          <div className="results__photo">
            <img src={winner_2} />
            <div className="place second">2</div>
          </div>
          <p className="text">
            Дмитрий <br /> Романов
          </p>
        </div>

        <div className="results__winner">
          <div className="results__photo">
            <img src={lavr} className="lavr left" />
            <img src={winner_1} />
            <img src={lavr} className="lavr right" />
            <div className="place first">1</div>
          </div>
          <p className="text">
            Дмитрий <br /> Романов
          </p>
        </div>

        <div className="results__winner">
          <div className="results__photo">
            <img src={winner_3} />
            <div className="place third">3</div>
          </div>
          <p className="text">
            Дмитрий <br /> Романов
          </p>
        </div>
      </div>

      <h4>Лучшие моменты соревнования</h4>

      <div className="results__best">
        <article className="video" style={{backgroundImage: `url(${video_1})`}}>
          <Views count="4.1K" />
          <p className="video__time">04:15</p>
        </article>
        <article className="video" style={{backgroundImage: `url(${video_2})`}}>
          <Views count="392" />
          <p className="video__time">03:10</p>
        </article>
        <article className="video" style={{backgroundImage: `url(${video_3})`}}>
          <Views count="72.8 K" />
          <p className="video__time">02:01</p>
        </article>
        <article className="video" style={{backgroundImage: `url(${video_4})`}}>
          <Views count="5" />
          <p className="video__time">00:56</p>
        </article>
      </div>

      <button className="view_all__btn">Смотреть все</button>
    </article>
  );
}
