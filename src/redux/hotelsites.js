//import { HOTELSITES } from "../shared/hotelsites";
import * as ActionTypes from "./ActionTypes";

export const Hotelsites = (
  state = {
    isLoading: true,
    errMess: null,
    hotelsites: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_HOTELSITES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        hotelsites: action.payload,
      };
    case ActionTypes.HOTELSITES_LOADING:
      return { ...state, isLoading: true, errMess: null, hotelsites: [] };
    case ActionTypes.HOTELSITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
