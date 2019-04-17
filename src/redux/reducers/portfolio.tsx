import { REPLACE_PORTFOLIO } from "../constants";
import { portfolioInitialState, portfolioIsError, IPortfolioState, IPortfolioAction } from "../actions/portfolio";

export const portfolioReducer = (state: IPortfolioState = portfolioInitialState, action: IPortfolioAction): IPortfolioState => {
  if (action.type === REPLACE_PORTFOLIO && action.payload && !portfolioIsError(action.payload)) {
    let emptyPortfolio = portfolioInitialState.portfolio;

    return {
      ...state,
      portfolio: emptyPortfolio.concat(action.payload.portfolio)
    };
  }
  return state;
};