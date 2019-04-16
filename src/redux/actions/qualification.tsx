import {
  REPLACE_QUALIFICATION,
  QUALIFICATION_LOADING,
  QUALIFICATION_FAILED,
} from "../constants/index";

import { QUALIFICATION } from "../../assets/qualifications";

export function replaceQualification(qualificationArray: IQualificationState["qualification"]): IQualificationAction {
  return {
    type: REPLACE_QUALIFICATION,
    payload: { qualification: qualificationArray }
  };
}

export function qualificationLoading(): IQualificationAction {
  return { 
    type: QUALIFICATION_LOADING 
  };
}

export function qualificationFailed(errmess): IQualificationAction {
  return {
    type: QUALIFICATION_FAILED,
    payload: errmess
  };
}

export function fetchQualifications() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch(replaceQualification(QUALIFICATION));
    }, 3000);
  };
}

export interface IQualificationState {
  qualification: Array<string>
} 

export interface IQualificationAction {
  type: string,
  payload?: IQualificationState | string
}

export const qualificationInitialState: IQualificationState = {
  qualification: []
}

export function qualificationIsError(payload: IQualificationAction["payload"]): payload is string {
  return true;
}
