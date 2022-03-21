import * as actionTypes from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USERS_START:
    case actionTypes.CREATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case actionTypes.LOAD_USERS_ERROR:
    case actionTypes.CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
