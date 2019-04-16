import {
  REPLACE_EXPERIENCE,
  EXPERIENCE_LOADING,
  EXPERIENCE_FAILED,
} from "../constants";

import { EXPERIENCE } from "../../assets/experience";

export function replaceExperience(experienceArray: IExperienceState["experience"]): IExperienceAction {
  console.log("ADDING EDUCATION");

  return {
    type: REPLACE_EXPERIENCE,
    payload: { experience: experienceArray }
  };
}

export function experienceLoading(): IExperienceAction {
  return { type: EXPERIENCE_LOADING };
}

export function experienceFailed(errmess: string): IExperienceAction {
  return {
    type: EXPERIENCE_FAILED,
    payload: errmess
  };
}

export function fetchExperience() {
  console.log("DISPATCHING EDUCATION");

  return function(dispatch) {
    setTimeout(() => {
      dispatch(replaceExperience(EXPERIENCE));
    }, 3000);
  };
}

export interface IExperienceState {
  experience: Array<any>
} 

export interface IExperienceAction {
  type: string,
  payload?: IExperienceState | string
}

export const experienceInitialState: IExperienceState = {
  experience: []
}

export function experienceIsError(payload: IExperienceAction["payload"]): payload is string {
  return true;
}
