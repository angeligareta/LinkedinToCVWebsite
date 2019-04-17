import { REPLACE_PORTFOLIO, PORTFOLIO_LOADING, PORTFOLIO_FAILED } from "../constants";
import { portfolioInitialState, IPortfolioState, IPortfolioAction } from "../actions/portfolio";

export const portfolioReducer = (state: IPortfolioState = portfolioInitialState, action: IPortfolioAction): IPortfolioState => {
  let emptyExperience = portfolioInitialState.portfolio;

  switch (action.type) {
    case REPLACE_PORTFOLIO: 
      return {
        ...state,
        portfolio: emptyExperience.concat(action.payload.portfolio),
        isLoading: false,
      };
    case PORTFOLIO_LOADING:
      return { 
        ...portfolioInitialState
      };
    case PORTFOLIO_FAILED:
      return {
        ...state,
        portfolio: emptyExperience,
        isLoading: false,
        errMess: action.payload.errMess
      }
    default:
      return state;
  }
};