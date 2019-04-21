/**
 * Portfolio Action Creator
 * 
 * This file contains the action creators for the main actions that the Portfolio reducer can receive. Besides,
 * it includes the initial state for portfolio state and the interfaces for both the portfolio state and the portfolio action.
 * 
 * It has four types:
 *  - replacePortfolio: Sends an action with a new portfolio array received and updates the loading state flag to false.
 *  - portfolioLoading: Sends an action with the initial state and the loading state flag to true.
 *  - portfolioFailed: Sends an action with an error message received and updates the loading state to false.
 *  - fetchEducation: Thunk action that dispatches the portfolioLoading action and it fetches the portfolio information.
 */
import {
  REPLACE_PORTFOLIO,
  PORTFOLIO_LOADING,
  PORTFOLIO_FAILED,
} from "../constants";

import { PORTFOLIO } from "../../assets/portfolio";
import { Dispatch } from "react";

export function replacePortfolio(portfolioArray: IPortfolioState["portfolio"]): IPortfolioAction {
  return {
    type: REPLACE_PORTFOLIO,
    payload: { ...portfolioInitialState, isLoading: false, portfolio: portfolioArray }
  };
}

export function portfolioLoading(): IPortfolioAction {
  return { 
    type: PORTFOLIO_LOADING, 
    payload: { ...portfolioInitialState }
  };
}

export function portfolioFailed(errMess: string): IPortfolioAction {
  return {
    type: PORTFOLIO_FAILED,
    payload: { ...portfolioInitialState, isLoading: false, errMess: errMess }
  };
}

export function fetchPortfolio(): (dispatch: Dispatch<IPortfolioAction>) => void {
  return function(dispatch: Dispatch<IPortfolioAction>) {
    dispatch(portfolioLoading())

    setTimeout(() => {
      dispatch(replacePortfolio(PORTFOLIO));
    }, 3000);
  };
}

export interface IProject {
  url: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface IPortfolioState {
  portfolio: Array<IProject>,
  isLoading: boolean,
  errMess: string | null
}

export interface IPortfolioAction {
  type: string,
  payload: IPortfolioState
}

export const portfolioInitialState: IPortfolioState = {
  portfolio: [],
  isLoading: true,
  errMess: null
}