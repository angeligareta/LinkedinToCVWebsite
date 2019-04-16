import { REPLACE_QUALIFICATION } from "../constants/index";

const initialState = {
  qualification: []
};

export const qualificationReducer = (state = initialState, action) => {
  if (action.type === REPLACE_QUALIFICATION) {
    return {
      ...state,
      qualification: [].concat(action.payload.qualification)
    };
  }
  return state;
};
