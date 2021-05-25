// import { CookieStorage } from "redux-persist-cookie-storage";
import storage from "redux-persist/lib/storage";

const PersistConfig = () => ({
  key: "root",
  storage,
  // storage: new CookieStorage(clientServerCookie /*, options */),
  // stateReconciler(inboundState, originalState) {
  // Ignore state from cookies, only use preloadedState from window object
  // 	return originalState;
  // },
  blacklist: [
    // "modalLogin",
  ],
  // whitelist: ["personDetails"],
});

export default PersistConfig;
