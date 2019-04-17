import {
  REPLACE_QUALIFICATION,
  QUALIFICATION_LOADING,
  QUALIFICATION_FAILED,
} from "../constants/index";

import { QUALIFICATION } from "../../assets/qualifications";
import { Dispatch } from "react";

export function replaceQualification(qualificationArray: IQualificationState["qualification"]): IQualificationAction {
  return {
    type: REPLACE_QUALIFICATION,
    payload: { ...qualificationInitialState, isLoading: false, qualification: qualificationArray }
  };
}

export function qualificationLoading(): IQualificationAction {
  return { 
    type: QUALIFICATION_LOADING, 
    payload: { ...qualificationInitialState }
  };
}

export function qualificationFailed(errMess: string): IQualificationAction {
  return {
    type: QUALIFICATION_FAILED,
    payload: { ...qualificationInitialState, isLoading: false, errMess: errMess }
  };
}

export function fetchQualifications(): (dispatch: Dispatch<IQualificationAction>) => void {
  return function(dispatch: Dispatch<IQualificationAction>): void {
    dispatch(qualificationLoading())

    setTimeout(() => {
      dispatch(replaceQualification(QUALIFICATION));
    }, 3000);
  };
}

export interface IQualificationState {
  qualification: Array<string>,
  isLoading: boolean,
  errMess: string | null
} 

export interface IQualificationAction {
  type: string,
  payload: IQualificationState
}

export const qualificationInitialState: IQualificationState = {
  qualification: [],
  isLoading: true,
  errMess: null
}