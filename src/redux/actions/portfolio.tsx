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

export interface IPortfolioState {
  portfolio: Array<any>,
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