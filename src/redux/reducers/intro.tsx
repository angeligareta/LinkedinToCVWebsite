import { REPLACE_INTRODUCTION} from "../constants/index";
import { introductionInitialState, introductionIsError, IIntroductionState, IIntroductionAction } from "../actions/intro";

export const introductionReducer = (state: IIntroductionState = introductionInitialState, action: IIntroductionAction): IIntroductionState => {
  if (action.type === REPLACE_INTRODUCTION && action.payload && !introductionIsError(action.payload)) {
    let emtpyIntroduction = introductionInitialState.introduction;
    
    return {
      ...state,
      introduction: emtpyIntroduction.concat(action.payload.introduction)
    };
  }
  else {
    console.log(action.type + " NOT DEFINED ACTION");
  }  
  return state;
}