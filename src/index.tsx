import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import "./index.css";

import Calculator from "./components";
import configureStore from "./configureStore";

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Calculator />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
