import { REPLACE_EXPERIENCE } from "../constants";
import { experienceInitialState, experienceIsError, IExperienceState, IExperienceAction } from "../actions/experience";

export const experienceReducer = (state: IExperienceState = experienceInitialState, action: IExperienceAction): IExperienceState => {
  if (action.type === REPLACE_EXPERIENCE && action.payload && !experienceIsError(action.payload)) {
    let emptyExperience = experienceInitialState.experience;

    return {
      ...state,
      experience: emptyExperience.concat(action.payload.experience)
    };
  }
  return state;
};
