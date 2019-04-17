import {
  REPLACE_EXPERIENCE,
  EXPERIENCE_LOADING,
  EXPERIENCE_FAILED,
} from "../constants";

import { EXPERIENCE } from "../../assets/experience";
import { Dispatch } from "react";

export function replaceExperience(experienceArray: IExperienceState["experience"]): IExperienceAction {
  return {
    type: REPLACE_EXPERIENCE,
    payload: { ...experienceInitialState, isLoading: false, experience: experienceArray }
  };
}

export function experienceLoading(): IExperienceAction {
  return { 
    type: EXPERIENCE_LOADING,
    payload: { ...experienceInitialState }
  };
}

export function experienceFailed(errMess: string): IExperienceAction {
  return {
    type: EXPERIENCE_FAILED,
    payload: { ...experienceInitialState, isLoading: false, errMess: errMess }
  };
}

export function fetchExperience(): (dispatch: Dispatch<IExperienceAction>) => void {
  return function(dispatch: Dispatch<IExperienceAction>) {
    dispatch(experienceLoading())

    setTimeout(() => {
      dispatch(replaceExperience(EXPERIENCE));
    }, 3000);
  };
}

export interface IExperienceState {
  experience: Array<any>,
  isLoading: Boolean,
  errMess: string | null
} 

export interface IExperienceAction {
  type: string,
  payload: IExperienceState
}

export const experienceInitialState: IExperienceState = {
  experience: [],
  isLoading: true,
  errMess: null
}