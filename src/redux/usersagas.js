import * as actionTypes from "./actionTypes";
import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  createUserApi,
  deleteUserApi,
  loadUsersApi,
  updateUserApi,
} from "./api";
import {
  createUsersError,
  createUsersSuccess,
  deleteUsersError,
  deleteUsersSuccess,
  loadUsersError,
  loadUsersSuccess,
  updateUsersError,
  updateUsersSuccess,
} from "./actions";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 201) {
      yield delay(500);
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.response.data));
  }
}

function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUsersSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUsersError(error.response.data));
  }
}

function* onUpdateUserStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateUserApi, id, formValue);
    if (response.status === 200) yield put(updateUsersSuccess());
  } catch (error) {
    yield put(updateUsersError(error.response.data));
  }
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(actionTypes.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

function* onLoadUsers() {
  yield takeEvery(actionTypes.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUser() {
  yield takeLatest(actionTypes.CREATE_USER_START, onCreateUserStartAsync);
}

function* onUpdateUser() {
  yield takeLatest(actionTypes.UPDATE_USER_START, onUpdateUserStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
