import { REPLACE_INTRODUCTION, INTRODUCTION_LOADING, INTRODUCTION_FAILED } from "../constants/index";
import { introductionInitialState, IIntroductionState, IIntroductionAction } from "../actions/introduction";

export const introductionReducer = (state: IIntroductionState = introductionInitialState, action: IIntroductionAction): IIntroductionState => {
  let emptyExperience = introductionInitialState.introduction;

  switch (action.type) {
    case REPLACE_INTRODUCTION: 
      return {
        ...state,
        introduction: emptyExperience.concat(action.payload.introduction),
        isLoading: false
      };
    case INTRODUCTION_LOADING:
      return { 
        ...introductionInitialState
      };
    case INTRODUCTION_FAILED:
      return {
        ...state,
        introduction: emptyExperience,
        isLoading: false,
        errMess: action.payload.errMess
      }
    default:
      return state;
  }
}