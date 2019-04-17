/**
 * Qualification Action Creator
 * 
 * This file contains the action creators for the main actions that the Qualification reducer can receive. Besides,
 * it includes the initial state for qualification state and the interfaces for both the qualification state and the qualification action.
 * 
 * It has four types:
 *  - replaceQualification: Sends an action with a new qualification array received and updates the loading state flag to false.
 *  - qualificationLoading: Sends an action with the initial state and the loading state flag to true.
 *  - qualificationFailed: Sends an action with an error message received and updates the loading state to false.
 *  - fetchEducation: Thunk action that dispatches the qualificationLoading action and it fetches the qualification information.
 */
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