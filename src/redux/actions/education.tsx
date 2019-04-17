import {
  REPLACE_EDUCATION,
  EDUCATION_LOADING,
  EDUCATION_FAILED,
} from "../constants";

import { EDUCATION } from "../../assets/education";
import { Dispatch } from "react";

export function replaceEducation(educationArray: IEducationState["education"]): IEducationAction {
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

export function fetchEducation(): (dispatch: Dispatch<IEducationAction>) => void {
  return function(dispatch: Dispatch<IEducationAction>) {
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
  return (payload instanceof String);
}
