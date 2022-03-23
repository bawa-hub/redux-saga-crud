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

// UPDATE
export const updateUsersStart = (user) => ({
  type: actionTypes.UPDATE_USER_START,
  payload: user,
});
export const updateUsersSuccess = () => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
});
export const updateUsersError = (error) => ({
  type: actionTypes.UPDATE_USER_ERROR,
  payload: error,
});

// delete
export const deleteUsersStart = (useId) => ({
  type: actionTypes.DELETE_USER_START,
  payload: useId,
});
export const deleteUsersSuccess = (userId) => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  payload: userId,
});
export const deleteUsersError = (error) => ({
  type: actionTypes.DELETE_USER_ERROR,
  payload: error,
});
