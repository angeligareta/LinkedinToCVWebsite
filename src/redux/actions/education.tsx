/**
 * Education Action Creator
 * 
 * This file contains the action creators for the main actions that the Education reducer can receive. Besides,
 * it includes the initial state for education state and the interfaces for both the education state and the education action.
 * 
 * It has four types:
 *  - replaceEducation: Sends an action with a new education array received and updates the loading state flag to false.
 *  - educationLoading: Sends an action with the initial state and the loading state flag to true.
 *  - educationFailed: Sends an action with an error message received and updates the loading state to false.
 *  - fetchEducation: Thunk action that dispatches the educationLoading action and it fetches the education information.
 */
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
    payload: { ...educationInitialState, isLoading: false, education: educationArray }
  };
}

export function educationLoading(): IEducationAction {
  return { 
    type: EDUCATION_LOADING,
    payload: { ...educationInitialState } 
  };
}

export function educationFailed(errMess: string): IEducationAction {
  return {
    type: EDUCATION_FAILED,
    payload: { ...educationInitialState, isLoading: false, errMess: errMess }
  };
}

export function fetchEducation(): (dispatch: Dispatch<IEducationAction>) => void {
  return function(dispatch: Dispatch<IEducationAction>) {
    dispatch(educationLoading())

    setTimeout(() => {
      dispatch(replaceEducation(EDUCATION));
    }, 3000);
  };
}

export interface IEducationState {
  education: Array<any>,
  isLoading: boolean,
  errMess: string | null
} 

export interface IEducationAction {
  type: string,
  payload: IEducationState
}

export const educationInitialState: IEducationState = {
  education: [],
  isLoading: true,
  errMess: null
}