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

const PUBLIC_URL =
  import.meta.env.BASE_URL || "https://GuessMF.github.io/Geex-Arts";

const root = ReactDOM.createRoot(document.getElementById("root"));
//const history = createMemoryHistory();

root.render(
  <Router>
    <App />
  </Router>
);
