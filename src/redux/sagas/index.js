import axios from "axios";
import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { navigate,  } from "../../navigation/NavigationService";
import { fetchFail, fetchSuccess, } from "../actions";
import ACTION_TYPES from "../constants";
// yield pauses and resume the generator functions
function* getUserList() {
  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/users', { headers: {} });
    if (response.status == 200) {
      yield put(fetchSuccess(response.data));
    navigate('ProfileScreen');
    } else {
      dispatch(fetchError('Invalid response'));
    }
  } catch (error) {
    yield put(fetchFail(error.message));
    dispatch(fetchError(error.message));
  }
}
function* appSagas() {
  yield takeLatest(ACTION_TYPES.API_PENDING, getUserList);
}
export default appSagas;