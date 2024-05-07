import React from "react";
import "./persons.scss";

import card_1 from "../../../assets/images/Persons/card_1.webp";
import card_2 from "../../../assets/images/Persons/card_2.webp";
import card_3 from "../../../assets/images/Persons/card_3.webp";

import pers_1 from "../../../assets/images/Persons/person_1.webp";
import pers_2 from "../../../assets/images/Persons/person_2.webp";
import pers_3 from "../../../assets/images/Persons/person_3.webp";
import pers_4 from "../../../assets/images/Persons/person_4.webp";
import rus from "../../../assets/images/Persons/rus.webp";
import kaz from "../../../assets/images/Persons/kaz.webp";
import bel from "../../../assets/images/Persons/bel.webp";
import close from "../../../assets/icons/close.svg";

export default function Persons() {
  return (
    <article className="persons">
      <div
        className="persons__card"
        style={{backgroundImage: `url(${card_1})`}}
      >
        <button className="close__btn">
          <img src={close} />
        </button>

        <div className="persons__photo">
          <img src={pers_1} className="photo" />
          <img src={rus} className="nationality" />
        </div>

        <p className="text">
          Александр <br />
          Магомедов
        </p>

        <button className="subscribe__btn">Подписаться</button>
      </div>

      <div
        className="persons__card"
        style={{backgroundImage: `url(${card_2})`}}
      >
        <button className="close__btn">
          <img src={close} />
        </button>

        <div className="persons__photo">
          <img src={pers_2} className="photo" />
          <img src={kaz} className="nationality" />
        </div>

        <p className="text">
          Дмитрий <br /> Алексеев
        </p>

        <button className="subscribe__btn">Подписаться</button>
      </div>

      <div
        className="persons__card"
        style={{backgroundImage: `url(${card_3})`}}
      >
        <button className="close__btn">
          <img src={close} />
        </button>

        <div className="persons__photo">
          <img src={pers_3} className="photo" />
          <img src={rus} className="nationality" />
        </div>

        <p className="text">
          Амир <br /> Магомедов
        </p>

        <button className="subscribe__btn">Подписаться</button>
      </div>

      <div
        className="persons__card"
        style={{backgroundImage: `url(${card_2})`}}
      >
        <button className="close__btn">
          <img src={close} />
        </button>

        <div className="persons__photo">
          <img src={pers_4} className="photo" />
          <img src={bel} className="nationality" />
        </div>

        <p className="text">
          Наталья <br /> Шалесная
        </p>

        <button className="subscribe__btn">Подписаться</button>
      </div>
    </article>
  );
}
