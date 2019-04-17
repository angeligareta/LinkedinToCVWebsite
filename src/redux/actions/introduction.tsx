/**
 * Introduction Action Creator
 * 
 * This file contains the action creators for the main actions that the Introduction reducer can receive. Besides,
 * it includes the initial state for introduction state and the interfaces for both the introduction state and the introduction action.
 * 
 * It has four types:
 *  - replaceIntroduction: Sends an action with a new introduction array received and updates the loading state flag to false.
 *  - introductionLoading: Sends an action with the initial state and the loading state flag to true.
 *  - introductionFailed: Sends an action with an error message received and updates the loading state to false.
 *  - fetchEducation: Thunk action that dispatches the introductionLoading action and it fetches the introduction information.
 */
import {
  REPLACE_INTRODUCTION,
  INTRODUCTION_LOADING,
  INTRODUCTION_FAILED
} from "../constants/index";

import { INTRODUCTION } from "../../assets/introduction";
import { Dispatch } from "react";

export function replaceIntroduction(introductionArray: IIntroductionState["introduction"]): IIntroductionAction {
  return {
    type: REPLACE_INTRODUCTION,
    payload: { ...introductionInitialState, isLoading: false, introduction: introductionArray }
  };
}

export function introductionLoading(): IIntroductionAction {
  return { 
    type: INTRODUCTION_LOADING, 
    payload: { ...introductionInitialState }
  };
}

export function introductionFailed(errMess: string): IIntroductionAction {
  return {
    type: INTRODUCTION_FAILED,
    payload: { ...introductionInitialState, isLoading: false, errMess: errMess }
  };
}

export function fetchIntroduction(): (dispatch: Dispatch<IIntroductionAction>) => void {
  return function(dispatch: Dispatch<IIntroductionAction>) {
    dispatch(introductionLoading());

    setTimeout(() => {
      dispatch(replaceIntroduction(INTRODUCTION));
    }, 3000);
  };
}

export interface IIntroductionState {
  introduction: Array<string>,
  isLoading: boolean,
  errMess: string | null
} 

export interface IIntroductionAction {
  type: string,
  payload: IIntroductionState
}

export const introductionInitialState: IIntroductionState = {
  introduction: [],
  isLoading: true,
  errMess: null
}