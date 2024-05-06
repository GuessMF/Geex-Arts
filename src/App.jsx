import React from "react";
import {Routes, Route} from "react-router-dom";

import "./assets/style/app.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Marketplace from "./components/Marketplace/Marketplace";
import Ratings from "./components/Ratings/Ratings";
import Competitions from "./components/Сompetitions/Competitions";
import Organizations from "./components/Organizations/Organizations";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/competitons" element={<Competitions />} />
          <Route path="/organizations" element={<Organizations />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
