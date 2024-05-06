import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/index.css";
import {BrowserRouter as Router} from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
//const history = createMemoryHistory();

root.render(
  <Router basename="/Geex-Arts">
    <App />
  </Router>
);
