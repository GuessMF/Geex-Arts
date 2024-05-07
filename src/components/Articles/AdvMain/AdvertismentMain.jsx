import React from "react";
import "./advMain.scss";

import advMain_bg from "../../../assets/images/advMain_bg.webp";
import advMain_footer from "../../../assets/images/advMain__footer.webp";

export default function AdvertismentMain() {
  return (
    <article
      className="advMain"
      style={{backgroundImage: `url(${advMain_bg})`}}
    >
      <div className="advMain__offer">
        <h3>
          Весенняя коллекция <br /> одежды
        </h3>
        <span>-30%</span>
      </div>

      <img className="advMain__footer" src={advMain_footer} />
    </article>
  );
}
