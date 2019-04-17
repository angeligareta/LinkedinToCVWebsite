import { REPLACE_EXPERIENCE, EXPERIENCE_LOADING, EXPERIENCE_FAILED } from "../constants";
import { experienceInitialState, IExperienceState, IExperienceAction } from "../actions/experience";

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
