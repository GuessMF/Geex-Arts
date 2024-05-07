import React from "react";
import "./stages.scss";

import image1 from "../../../assets/images/Stages/image_1.webp";
import image2 from "../../../assets/images/Stages/image_2.webp";
import image3 from "../../../assets/images/Stages/image_3.webp";
import image4 from "../../../assets/images/Stages/image_4.webp";
import image5 from "../../../assets/images/Stages/image_5.webp";
import image6 from "../../../assets/images/Stages/image_6.webp";
import image7 from "../../../assets/images/Stages/image_7.webp";
import image8 from "../../../assets/images/Stages/image_8.webp";
import image9 from "../../../assets/images/Stages/image_9.webp";

import views_icon from "../../../assets/icons/views_icon.svg";
import comment_icon from "../../../assets/icons/comment_icon.svg";

export default function Stages() {
  return (
    <article className="stages">
      <ul className="stages__list">
        <li>Велоспорт</li>
        <li>•</li>
        <li>2 февраля, 2024 в 23:09</li>
      </ul>
      <h2>Этапы Тура Альп-2024</h2>

      <h4>Фото с соревнований</h4>

      <div className="stages__photos">
        <div style={{backgroundImage: `url(${image1})`}}></div>

        <div style={{backgroundImage: `url(${image2})`}}></div>
        <div style={{backgroundImage: `url(${image3})`}}></div>
        <div style={{backgroundImage: `url(${image4})`}}></div>
        <div style={{backgroundImage: `url(${image5})`}}></div>
        <div style={{backgroundImage: `url(${image6})`}}></div>
        <div style={{backgroundImage: `url(${image7})`}}></div>
        <div style={{backgroundImage: `url(${image8})`}}></div>
        <div style={{backgroundImage: `url(${image9})`}}>
          <span>+83</span>
        </div>
      </div>

      <ul className="stages__social">
        <li>
          <img src={views_icon} />
          <p className="text">4.1 K</p>
        </li>
        <li>
          <img src={comment_icon} />
          <p className="text">0</p>
        </li>
      </ul>
    </article>
  );
}
