import { REPLACE_EDUCATION } from "../constants";

const initialState = {
  education: []
};

export const educationReducer = (state = initialState, action) => {
  if (action.type === REPLACE_EDUCATION) {
    return {
      ...state,
      education: [].concat(action.payload.education)
    };
  }
  return state;
};
