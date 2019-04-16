import { createStore, applyMiddleware, combineReducers } from "redux";

import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";

import { introductionReducer } from "../reducers/intro";
import { qualificationReducer } from "../reducers/qualification";
import { educationReducer } from "../reducers/education";
import { experienceReducer } from "../reducers/experience";

const store = createStore(
  combineReducers({
    // IMPORTANT: Create object for combining reducers
    introduction: introductionReducer,
    qualification: qualificationReducer,
    education: educationReducer,
    experience: experienceReducer
  }),
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
