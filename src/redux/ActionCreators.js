import * as ActionTypes from "./ActionTypes";

export const addComment = (hotelsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    hotelsiteId: hotelsiteId,
    rating: rating,
    author: author,
    text: text,
  },
});
