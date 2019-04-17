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
    payload: { portfolio: portfolioArray }
  };
}

export function portfolioLoading(): IPortfolioAction {
  return { type: PORTFOLIO_LOADING };
}

export function portfolioFailed(errmess: string): IPortfolioAction {
  return {
    type: PORTFOLIO_FAILED,
    payload: errmess
  };
}

export function fetchPortfolio(): (dispatch: Dispatch<IPortfolioAction>) => void {
  return function(dispatch: Dispatch<IPortfolioAction>) {
    setTimeout(() => {
      dispatch(replacePortfolio(PORTFOLIO));
    }, 3000);
  };
}

export interface IPortfolioState {
  portfolio: Array<any>
} 

export interface IPortfolioAction {
  type: string,
  payload?: IPortfolioState | string
}

export const portfolioInitialState: IPortfolioState = {
  portfolio: []
}

export function portfolioIsError(payload: IPortfolioAction["payload"]): payload is string {
  return (payload instanceof String);
}
