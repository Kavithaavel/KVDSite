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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
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

  return fetch(baseUrl + "hotelsites")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `##Error##- ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((hotelsites) => dispatch(addHotelsites(hotelsites)))
    .catch((error) => dispatch(hotelsitesFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((error) => dispatch(promotionsFailed(error.message)));
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
