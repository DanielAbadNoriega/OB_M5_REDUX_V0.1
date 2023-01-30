import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

// REDUX
import { Provider, useDispatch } from "react-redux";

// CONFIG FUNCTION APP STORE
import { userStore } from "./store/config/storeConfig";

// ACTIONS
import { createUser, filterUser } from "./store/actions/userActions";

// STYLES
import "bootstrap/dist/css/bootstrap.css";

let userAppStore = userStore();
userAppStore.subscribe(() =>
  console.log("[ App ] Store: ", userAppStore.getState())
);
userAppStore.dispatch(filterUser("USER"));
userAppStore.dispatch(createUser("USER 2", ".2"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={userAppStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
