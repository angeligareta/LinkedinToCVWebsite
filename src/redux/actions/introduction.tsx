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