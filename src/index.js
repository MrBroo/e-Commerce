import React from "react";
import ReactDOM from "react-dom/client";
import "./main/index.css";
import App from "./App";
import { initialState } from "./home/reducer";
import reducer from "./home/reducer";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./home/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </BrowserRouter>
);
