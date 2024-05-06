import React from "react";
import {Routes, Route} from "react-router-dom";

import "./assets/style/app.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Users from "./components/Users/Users";
function App() {
  return (
    <>
      <div className="app">
        <Header />

        {/* <Main /> */}
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
