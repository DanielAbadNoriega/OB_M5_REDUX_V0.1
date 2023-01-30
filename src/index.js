import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { userStore } from "./store/config/storeConfig";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

//Styles
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Create a function with root to actualize the react app
const renderAppp = () =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

renderAppp();
userStore.subscribe(renderAppp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
