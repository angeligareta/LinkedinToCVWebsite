import { REPLACE_EDUCATION, EDUCATION_LOADING, EDUCATION_FAILED } from "../constants";
import { educationInitialState, IEducationState, IEducationAction } from "../actions/education";

export const educationReducer = (state: IEducationState = educationInitialState, action: IEducationAction): IEducationState => {
  let emptyEducation = educationInitialState.education;

  switch (action.type) {
    case REPLACE_EDUCATION: 
      return {
        ...state,
        education: emptyEducation.concat(action.payload.education),
        isLoading: false,
      };
    case EDUCATION_LOADING:
      return { 
        ...educationInitialState
      };
    case EDUCATION_FAILED:
      return {
        ...state,
        education: emptyEducation,
        isLoading: false,
        errMess: action.payload.errMess
      }
    default:
      return state;
  }
};