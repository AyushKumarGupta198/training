import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './userSlice';
import axios from 'axios';

function* fetchUserData(action) {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users/1');
    yield put(fetchUserSuccess(response.data)); 
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

function* watchFetchUserRequest() {
  yield takeEvery(fetchUserRequest.type, fetchUserData);
}

export default watchFetchUserRequest;
