import { REPLACE_QUALIFICATION, QUALIFICATION_LOADING, QUALIFICATION_FAILED } from "../constants/index";
import { qualificationInitialState, IQualificationState, IQualificationAction } from "../actions/qualification";

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
