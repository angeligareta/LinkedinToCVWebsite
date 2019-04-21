/**
 * Experience Action Creator
 * 
 * This file contains the action creators for the main actions that the Experience reducer can receive. Besides,
 * it includes the initial state for experience state and the interfaces for both the experience state and the experience action.
 * 
 * It has four types:
 *  - replaceExperience: Sends an action with a new experience array received and updates the loading state flag to false.
 *  - experienceLoading: Sends an action with the initial state and the loading state flag to true.
 *  - experienceFailed: Sends an action with an error message received and updates the loading state to false.
 *  - fetchEducation: Thunk action that dispatches the experienceLoading action and it fetches the experience information.
 */

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

export interface IExperience {
  position: string,
  company: string,
  startDate: string,
  endDate: string,
  facts: Array<string>
}

export interface IExperienceState {
  experience: Array<IExperience>,
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