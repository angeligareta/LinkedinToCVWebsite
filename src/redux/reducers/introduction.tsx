import { REPLACE_INTRODUCTION, INTRODUCTION_LOADING, INTRODUCTION_FAILED } from "../constants/index";
import { introductionInitialState, IIntroductionState, IIntroductionAction } from "../actions/introduction";

/**
 * Introduction Reducer receives an state and an action and returns a new state depending on the action type.
 * It respects the inmutability property of Redux and does not mutate the old state, it creates a copy of it.
 * 
 * In this case, when it receives the action to replace the introduction state or it is informed of an error, 
 * it sets the isLoading flag to false and updates the introduction state or the errMess.
 * 
 * @param state State with the default value of an initial state.
 * @param action Action that receives the reducer.
 */
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