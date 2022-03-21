import * as actionTypes from "./actionTypes";

// create
export const createUsersStart = (user) => ({
  type: actionTypes.CREATE_USER_START,
  payload: user,
});
export const createUsersSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});
export const createUsersError = (error) => ({
  type: actionTypes.CREATE_USER_ERROR,
  payload: error,
});

// read
export const loadUsersStart = () => ({ type: actionTypes.LOAD_USERS_START });
export const loadUsersSuccess = (users) => ({
  type: actionTypes.LOAD_USERS_SUCCESS,
  payload: users,
});
export const loadUsersError = (error) => ({
  type: actionTypes.LOAD_USERS_ERROR,
  payload: error,
});
