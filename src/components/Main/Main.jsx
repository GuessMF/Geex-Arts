import Advertisement from "../Articles/Advertisement/Advertisement";
import AdvertismentMain from "../Articles/AdvMain/AdvertismentMain";
import Filter from "../Articles/Filter/Filter";
import Interview from "../Articles/Interview/Interview";
import LatestNews from "../Articles/LatestNews/LatestNews";
import Results from "../Articles/Results/Results";
import Subscriptions from "../Articles/Subscriptions/Subscriptions";

import "./main.scss";
import React from "react";
import Greeting from "../Articles/Greeting/Greeting";
import Persons from "../Articles/Persons/Persons";
import Stages from "../Articles/Stages/Stages";
import Entry from "../Articles/Entry/Entry";

export default function Main() {
  return (
    <main className="main">
      <div className="wrapper">
        <div className="main__content">
          <Interview />
          <Results />
          <AdvertismentMain />
          <Greeting />
          <Persons />
          <Stages />
          <Entry />
        </div>
        <div className="main__sidebar">
          <Filter />
          <Advertisement />
          <Subscriptions />
          <LatestNews />
        </div>
      </div>
    </main>
  );
}
