import React from "react";
import views_icon from "../../assets/icons/views_icon-white.svg";
import "./views.scss";

export default function Views({count}) {
  return (
    <div className="views">
      <img src={views_icon} style={{fill: "#000000"}} />
      <p className="text">{count}</p>
    </div>
  );
}
