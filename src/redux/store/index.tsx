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

/**
 * Structure of the Application's State. For each field in this object, 
 * there is one associated data structure of the substate type, in order 
 * to be consistent when the state is used in the application. 
 */
export interface IState {
  introduction: IIntroductionState,
  qualification: IQualificationState,
  education: IEducationState,
  experience: IExperienceState,
  portfolio: IPortfolioState,
  userData: IUserDataState
}

/**
 * Structure of the Dispatch events that our app can trigger.
 */
export interface IStateDispatch {
  fetchIntroduction: () => void,
  fetchQualifications: () => void,
  fetchEducation: () => void,
  fetchExperience: () => void,
  fetchPortfolio: () => void,
  fetchUserData: () => void
}

/**
 * Store that combines the reducers created in separated files (best practice).
 * Besides, it uses two middlewares:
 *  - Thunk Middleware: In order to have more control when an action is dispatched.
 *  - Redux Logger: Very useful to see all the updates of the app state in the console.
 */
const store = createStore(
  combineReducers({
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
