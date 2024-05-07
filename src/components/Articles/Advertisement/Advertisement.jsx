import React from "react";
import "./advertisement.scss";
import mini_logo from "../../../assets/icons/mini_logo.webp";

export default function Advertisement() {
  return (
    <article className="advertisement">
      <div className="advertisement__content">
        <div className="advertisement__content-top">
          <div className="advertisement__content-top__box">
            <img src={mini_logo} />
          </div>
          <h2>Велоспорт</h2>
          <h2>
            Москва <span>2024</span>
          </h2>
        </div>
        <div className="advertisement__content-bottom">
          <h1>Тур Альп-2024 Этап 3</h1>
        </div>
      </div>
    </article>
  );
}
