import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
//import { HOTELSITES } from "../shared/hotelsites";

export const addComment = (hotelsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    hotelsiteId: hotelsiteId,
    rating: rating,
    author: author,
    text: text,
  },
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchHotelsites = () => (dispatch) => {
  dispatch(hotelsitesLoading());

  // setTimeout(() => {
  //   dispatch(addHotelsites(HOTELSITES));
  // }, 2000);
  return fetch(baseUrl + "hotelsites")
    .then((response) => response.json())
    .then((hotelsites) => dispatch(addHotelsites(hotelsites)));
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

export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)));
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMess) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess,
});

export const addPromotions = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});
