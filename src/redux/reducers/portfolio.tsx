import { REPLACE_PORTFOLIO, PORTFOLIO_LOADING, PORTFOLIO_FAILED } from "../constants";
import { portfolioInitialState, IPortfolioState, IPortfolioAction } from "../actions/portfolio";

/**
 * Portfolio Reducer receives an state and an action and returns a new state depending on the action type.
 * It respects the inmutability property of Redux and does not mutate the old state, it creates a copy of it.
 * 
 * In this case, when it receives the action to replace the portfolio state or it is informed of an error, 
 * it sets the isLoading flag to false and updates the portfolio state or the errMess.
 * 
 * @param state State with the default value of an initial state.
 * @param action Action that receives the reducer.
 */
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