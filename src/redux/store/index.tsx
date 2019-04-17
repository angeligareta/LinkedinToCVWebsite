import { createStore, applyMiddleware, combineReducers } from "redux";

import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";

import { introductionReducer } from "../reducers/intro";
import { qualificationReducer } from "../reducers/qualification";
import { educationReducer } from "../reducers/education";
import { experienceReducer } from "../reducers/experience";
import { portfolioReducer } from "../reducers/portfolio";

import { IIntroductionState } from "../actions/intro";
import { IQualificationState } from "../actions/qualification";
import { IEducationState } from "../actions/education";
import { IExperienceState } from "../actions/experience";
import { IPortfolioState } from "../actions/portfolio";

export interface IState {
  introduction: IIntroductionState,
  qualification: IQualificationState,
  education: IEducationState,
  experience: IExperienceState,
  portfolio: IPortfolioState
}

export interface IStateDispatch {
  fetchIntroduction: () => void,
  fetchQualifications: () => void,
  fetchEducation: () => void,
  fetchExperience: () => void,
  fetchPortfolio: () => void
}

const store = createStore(
  combineReducers({
    // IMPORTANT: Create object for combining reducers
    introduction: introductionReducer,
    qualification: qualificationReducer,
    education: educationReducer,
    experience: experienceReducer,
    portfolio: portfolioReducer
  }),
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
