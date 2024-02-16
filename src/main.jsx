import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";

import { Provider } from "react-redux";

import { store } from "./store/store.js";
import { ProfileProvider } from "./hooks/ProfileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </Provider>
  </React.StrictMode>
);
