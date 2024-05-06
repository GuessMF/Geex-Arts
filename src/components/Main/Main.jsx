import Advertisement from "../Articles/Advertisement/Advertisement";
import Filter from "../Articles/Filter/Filter";
import Interview from "../Articles/Interview/Interview";
import "./main.scss";
import React from "react";

export default function Main() {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="main__content">
          <Interview />
        </div>
        <div className="main__sidebar">
          <Filter />
          <Advertisement />
        </div>
      </div>
    </main>
  );
}
