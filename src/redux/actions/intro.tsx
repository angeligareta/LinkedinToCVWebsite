import {
  REPLACE_INTRODUCTION,
  INTRODUCTION_LOADING,
  INTRODUCTION_FAILED
} from "../constants/index";

import { INTRODUCTION } from "../../assets/intro";

export function replaceIntroduction(introductionArray): IIntroductionAction {
  console.log("ADDING");
  return {
    type: REPLACE_INTRODUCTION,
    payload: { introduction: introductionArray }
  };
}

export function introductionsLoading(): IIntroductionAction {
  return { type: INTRODUCTION_LOADING };
}

export function introductionsFailed(errmess: string): IIntroductionAction {
  return {
    type: INTRODUCTION_FAILED,
    payload: errmess
  };
}

export function fetchIntroduction() {
  console.log("DISPATCHING 1");

  return function(dispatch) {
    setTimeout(() => {
      dispatch(replaceIntroduction(INTRODUCTION));
    }, 3000);
  };
}

export interface IIntroductionState {
  introduction: Array<string>
} 

export interface IIntroductionAction {
  type: string,
  payload?: IIntroductionState | string
}

export const introductionInitialState: IIntroductionState = {
  introduction: []
}

export function introductionIsError(payload: IIntroductionAction["payload"]): payload is string {
  return true;
}