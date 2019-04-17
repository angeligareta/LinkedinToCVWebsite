import { REPLACE_EDUCATION, EDUCATION_LOADING, EDUCATION_FAILED } from "../constants";
import { educationInitialState, IEducationState, IEducationAction } from "../actions/education";

/**
 * Education Reducer receives an state and an action and returns a new state depending on the action type.
 * It respects the inmutability property of Redux and does not mutate the old state, it creates a copy of it.
 * 
 * In this case, when it receives the action to replace the education state or it is informed of an error, 
 * it sets the isLoading flag to false and updates the education state or the errMess.
 * 
 * @param state State with the default value of an initial state.
 * @param action Action that receives the reducer.
 */
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