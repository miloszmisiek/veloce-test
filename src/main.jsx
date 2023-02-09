import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalCSS from "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);
