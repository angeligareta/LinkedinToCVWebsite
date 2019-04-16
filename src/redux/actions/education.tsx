import {
  REPLACE_EDUCATION,
  EDUCATION_LOADING,
  EDUCATION_FAILED,
} from "../constants";

import { EDUCATION } from "../../assets/education";

export function replaceEducation(educationArray: IEducationState["education"]): IEducationAction {
  console.log("ADDING EDUCATION");

  return {
    type: REPLACE_EDUCATION,
    payload: { education: educationArray }
  };
}

export function educationLoading(): IEducationAction {
  return { type: EDUCATION_LOADING };
}

export function educationFailed(errmess: string): IEducationAction {
  return {
    type: EDUCATION_FAILED,
    payload: errmess
  };
}

export function fetchEducation() {
  console.log("DISPATCHING EDUCATION");

  return function(dispatch) {
    setTimeout(() => {
      dispatch(replaceEducation(EDUCATION));
    }, 3000);
  };
}

export interface IEducationState {
  education: Array<any>
} 

export interface IEducationAction {
  type: string,
  payload?: IEducationState | string
}

export const educationInitialState: IEducationState = {
  education: []
}

export function educationIsError(payload: IEducationAction["payload"]): payload is string {
  return true;
}
