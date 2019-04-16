import { REPLACE_EDUCATION } from "../constants";
import { educationInitialState, educationIsError, IEducationState, IEducationAction } from "../actions/education";

export const educationReducer = (state: IEducationState = educationInitialState, action: IEducationAction): IEducationState => {
  if (action.type === REPLACE_EDUCATION && action.payload && !educationIsError(action.payload)) {
    let emptyEducation = educationInitialState.education;

    return {
      ...state,
      education: emptyEducation.concat(action.payload.education)
    };
  }
  return state;
};