import React from "react";
import ReactDOM from "react-dom/client";

import GlobalProvider from "./GlobalContext";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
