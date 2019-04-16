import { REPLACE_EXPERIENCE } from "../constants";

const initialState = {
  experience: []
};

export const experienceReducer = (state = initialState, action) => {
  if (action.type === REPLACE_EXPERIENCE) {
    return {
      ...state,
      experience: [].concat(action.payload.experience)
    };
  }
  return state;
};
