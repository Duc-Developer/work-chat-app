import { put, takeEvery } from 'redux-saga/effects';
import { updateUserProfile } from '../api/user.api';
import { updateProfileSuccess, updateProfileFail } from '../actions/user.action';
import { userConstants as userType } from '../constants'

function* updateProfile(action) {
    let { payload } = action;
    let userId = sessionStorage.getItem("userId");
    let error = yield updateUserProfile(userId, payload);
    if(error) {
        yield put(updateProfileFail(payload));
        return;
    }
    yield put(updateProfileSuccess(payload))
}

export function* updateProfileAction() {
    yield takeEvery(userType.UPDATE_USER_REQUEST, updateProfile)
}