import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
// sockets files
import "./main.js";
import "./custom-hooks/sockets/initialSocket";
import "./sockets/addRequestNotificationSocket";
import "./sockets/notificationSocket";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);