import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import "./assets/style/app.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Marketplace from "./components/Marketplace/Marketplace";
import Ratings from "./components/Ratings/Ratings";
import Competitions from "./components/Сompetitions/Competitions";
import Organizations from "./components/Organizations/Organizations";

import Modal from "./components/Modal/Modal";
import Menu from "./components/Menu/Menu";

function App() {
  const [modal, setModal] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened || modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
    }
  }, [menuOpened, modal]);

  return (
    <>
      <div className="app">
        <Header
          modal={modal}
          openModal={setModal}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        {modal && <Modal modal={modal} setModal={setModal} />}
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
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
