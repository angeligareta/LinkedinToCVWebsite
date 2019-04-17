/**
 * UserData Action Creator
 * 
 * This file contains the action creators for the main actions that the UserData reducer can receive. Besides,
 * it includes the initial state for userData state and the interfaces for both the userData state and the userData action.
 * 
 * It has four types:
 *  - replaceUserData: Sends an action with a new userData array received and updates the loading state flag to false.
 *  - userDataLoading: Sends an action with the initial state and the loading state flag to true.
 *  - userDataFailed: Sends an action with an error message received and updates the loading state to false.
 *  - fetchEducation: Thunk action that dispatches the userDataLoading action and it fetches the userData information.
 */
import {
  REPLACE_USER_DATA,
  USER_DATA_LOADING,
  USER_DATA_FAILED,
} from "../constants";

import { USER_DATA } from "../../assets/userData";
import { Dispatch } from "react";

export function replaceUserData(userDataArray: IUserDataState["userData"]): IUserDataAction {
  return {
    type: REPLACE_USER_DATA,
    payload: { ...userDataInitialState, isLoading: false, userData: userDataArray }
  };
}

export function userDataLoading(): IUserDataAction {
  return { 
    type: USER_DATA_LOADING,
    payload: { ...userDataInitialState } 
  };
}

export function userDataFailed(errMess: string): IUserDataAction {
  return {
    type: USER_DATA_FAILED,
    payload: { ...userDataInitialState, isLoading: false, errMess: errMess }
  };
}

export function fetchUserData(): (dispatch: Dispatch<IUserDataAction>) => void {
  return function(dispatch: Dispatch<IUserDataAction>) {
    dispatch(userDataLoading())

    setTimeout(() => {
      dispatch(replaceUserData(USER_DATA));
    }, 3000);
  };
}

export interface IUserSocialNetworks {
  name: string,
  link: string,
  icon?: string
}

export interface IUserData {
  backgroundImage: string,
  avatarImage: string,
  userName: string,
  userPosition: string,
  userSocialNetworks: IUserSocialNetworks[]
}

export interface IUserDataState {
  userData: IUserData,
  isLoading: boolean,
  errMess: string | null
} 

export interface IUserDataAction {
  type: string,
  payload: IUserDataState
}

export const userDataInitialState: IUserDataState = {
  userData: {
    backgroundImage: "",
    avatarImage:  "",
    userName:  "",
    userPosition:  "",
    userSocialNetworks: []
  },
  isLoading: true,
  errMess: null
}