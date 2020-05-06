import { HOTELSITES } from "../shared/hotelsites";
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
  hotelsites: HOTELSITES,
  comments: COMMENTS,
  partners: PARTNERS,
  promotions: PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
