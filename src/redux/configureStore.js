import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";

import { default as persistConfigFunc } from "./persistConfig";
import rootReducers from "./rootReducer";

export default function ConfigureStore() {
  const persistConfig = persistConfigFunc();

  let rootReducerCombine = persistCombineReducers(persistConfig, rootReducers);

  let composeEnhancers = compose;
  let middlewares = [thunk];

  // if (process.env.NODE_ENV !== "production" && typeof window === "object") {
  if (import.meta.env.MODE === "development" && typeof window === "object") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
  }

  const enhancers = [applyMiddleware(...middlewares)];

  // setting on client if no server
  // let predata = window.PRELOADED_STATE;

  // if (predata === undefined) {
  // predata = {};
  let predata = {};
  // }

  // if (predata.ip === undefined) {
  // const publicIp = require("public-ip");
  // predata.ip = await publicIp.v4();
  // predata.ip = await "";
  // }

  // debug
  // console.log("predata", predata);
  // console.log("window", window);
  // console.log("window.origin", window.origin);

  const store = createStore(
    rootReducerCombine,
    predata,
    composeEnhancers(...enhancers)
  );

  const persistor = persistStore(store, predata);

  return { store, persistor };
}
