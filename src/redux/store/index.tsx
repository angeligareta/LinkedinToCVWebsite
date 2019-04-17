import { createStore, applyMiddleware, combineReducers } from "redux";

import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";

import { introductionReducer } from "../reducers/introduction";
import { qualificationReducer } from "../reducers/qualification";
import { educationReducer } from "../reducers/education";
import { experienceReducer } from "../reducers/experience";
import { portfolioReducer } from "../reducers/portfolio";
import { userDataReducer } from "../reducers/userData";

import { IIntroductionState } from "../actions/introduction";
import { IQualificationState } from "../actions/qualification";
import { IEducationState } from "../actions/education";
import { IExperienceState } from "../actions/experience";
import { IPortfolioState } from "../actions/portfolio";
import { IUserDataState } from "../actions/userData";

export interface IState {
  introduction: IIntroductionState,
  qualification: IQualificationState,
  education: IEducationState,
  experience: IExperienceState,
  portfolio: IPortfolioState,
  userData: IUserDataState
}

export interface IStateDispatch {
  fetchIntroduction: () => void,
  fetchQualifications: () => void,
  fetchEducation: () => void,
  fetchExperience: () => void,
  fetchPortfolio: () => void,
  fetchUserData: () => void
}

const store = createStore(
  combineReducers({
    // IMPORTANT: Create object for combining reducers
    introduction: introductionReducer,
    qualification: qualificationReducer,
    education: educationReducer,
    experience: experienceReducer,
    portfolio: portfolioReducer,
    userData: userDataReducer
  }),
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
