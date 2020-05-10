import * as ActionTypes from "./ActionTypes";
import { HOTELSITES } from "../shared/hotelsites";

export const addComment = (hotelsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    hotelsiteId: hotelsiteId,
    rating: rating,
    author: author,
    text: text,
  },
});

export const fetchHotelsites = () => (dispatch) => {
  dispatch(hotelsitesLoading());

  setTimeout(() => {
    dispatch(addHotelsites(HOTELSITES));
  }, 2000);
};

export const hotelsitesLoading = () => ({
  type: ActionTypes.HOTELSITES_LOADING,
});

export const hotelsitesFailed = (errMess) => ({
  type: ActionTypes.HOTELSITES_FAILED,
  payload: errMess,
});

export const addHotelsites = (hotelsites) => ({
  type: ActionTypes.ADD_HOTELSITES,
  payload: hotelsites,
});
