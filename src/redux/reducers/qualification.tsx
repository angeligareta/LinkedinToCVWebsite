import { REPLACE_QUALIFICATION } from "../constants/index";
import { qualificationInitialState, qualificationIsError, IQualificationState, IQualificationAction } from "../actions/qualification";

export const qualificationReducer = (state: IQualificationState = qualificationInitialState, action: IQualificationAction): IQualificationState => {
  if (action.type === REPLACE_QUALIFICATION && action.payload && !qualificationIsError(action.payload)) {
    let emptyQualification = qualificationInitialState.qualification;
    
    return {
      ...state,
      qualification: emptyQualification.concat(action.payload.qualification)
    };
  }
  return state;
};
