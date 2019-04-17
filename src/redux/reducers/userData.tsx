import { REPLACE_USER_DATA, USER_DATA_LOADING, USER_DATA_FAILED } from "../constants";
import { userDataInitialState, IUserDataState, IUserDataAction } from "../actions/userData";

/**
 * UserData Reducer receives an state and an action and returns a new state depending on the action type.
 * It respects the inmutability property of Redux and does not mutate the old state, it creates a copy of it.
 * 
 * In this case, when it receives the action to replace the userData state or it is informed of an error, 
 * it sets the isLoading flag to false and updates the userData state or the errMess.
 * 
 * @param state State with the default value of an initial state.
 * @param action Action that receives the reducer.
 */
export const userDataReducer = (state: IUserDataState = userDataInitialState, action: IUserDataAction): IUserDataState => {
  let emptyUserData = userDataInitialState.userData;

  switch (action.type) {
    case REPLACE_USER_DATA: 
      return {
        ...state,
        userData: {
          ...emptyUserData,
          ...action.payload.userData
        },
        isLoading: false,
      };
    case USER_DATA_LOADING:
      return { 
        ...userDataInitialState
      };
    case USER_DATA_FAILED:
      return {
        ...state,
        userData: emptyUserData,
        isLoading: false,
        errMess: action.payload.errMess
      }
    default:
      return state;
  }
};