import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./modules";
import { fromJS } from "immutable";

const persistConfig = {
  key: "root",
  storage,
  transforms: [fromJS({})],
  whitelist: ["calculations"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
