import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Hotelsites } from "./hotelsites";
import { Comments } from "./comments";
import { Partners } from "./partners";
import { Promotions } from "./promotions";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      hotelsites: Hotelsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
