import { REPLACE_USER_DATA, USER_DATA_LOADING, USER_DATA_FAILED } from "../constants";
import { userDataInitialState, IUserDataState, IUserDataAction } from "../actions/userData";

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