import { REPLACE_QUALIFICATION, QUALIFICATION_LOADING, QUALIFICATION_FAILED } from "../constants/index";
import { qualificationInitialState, IQualificationState, IQualificationAction } from "../actions/qualification";

/**
 * Qualification Reducer receives an state and an action and returns a new state depending on the action type.
 * It respects the inmutability property of Redux and does not mutate the old state, it creates a copy of it.
 * 
 * In this case, when it receives the action to replace the qualification state or it is informed of an error, 
 * it sets the isLoading flag to false and updates the qualification state or the errMess.
 * 
 * @param state State with the default value of an initial state.
 * @param action Action that receives the reducer.
 */
export const qualificationReducer = (state: IQualificationState = qualificationInitialState, action: IQualificationAction): IQualificationState => {
  let emptyExperience = qualificationInitialState.qualification;

  switch (action.type) {
    case REPLACE_QUALIFICATION: 
      return {
        ...state,
        qualification: emptyExperience.concat(action.payload.qualification),
        isLoading: false,
      };
    case QUALIFICATION_LOADING:
      return { 
        ...qualificationInitialState
      };
    case QUALIFICATION_FAILED:
      return {
        ...state,
        qualification: emptyExperience,
        isLoading: false,
        errMess: action.payload.errMess
      }
    default:
      return state;
  }
};
