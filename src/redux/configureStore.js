import { createStore, combineReducers } from "redux";
//import { Reducer, initialState } from "./reducer";
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
    })
  );

  return store;
};
