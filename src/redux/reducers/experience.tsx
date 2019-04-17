import { REPLACE_EXPERIENCE, EXPERIENCE_LOADING, EXPERIENCE_FAILED } from "../constants";
import { experienceInitialState, IExperienceState, IExperienceAction } from "../actions/experience";

/**
 * Experience Reducer receives an state and an action and returns a new state depending on the action type.
 * It respects the inmutability property of Redux and does not mutate the old state, it creates a copy of it.
 * 
 * In this case, when it receives the action to replace the experience state or it is informed of an error, 
 * it sets the isLoading flag to false and updates the experience state or the errMess.
 * 
 * @param state State with the default value of an initial state.
 * @param action Action that receives the reducer.
 */
export const experienceReducer = (state: IExperienceState = experienceInitialState, action: IExperienceAction): IExperienceState => {
  let emptyExperience = experienceInitialState.experience;

  switch (action.type) {
    case REPLACE_EXPERIENCE: 
      return {
        ...state,
        experience: emptyExperience.concat(action.payload.experience),
        isLoading: false,
      };
    case EXPERIENCE_LOADING:
      return { 
        ...experienceInitialState
      };
    case EXPERIENCE_FAILED:
      return {
        ...state,
        experience: emptyExperience,
        isLoading: false,
        errMess: action.payload.errMess
      }
    default:
      return state;
  }
};
