import { put, takeEvery } from 'redux-saga/effects';
import { updateUserProfile, checkUserData } from '../api/user.api';
import { updateProfileSuccess, updateProfileFail } from '../actions/user.action';
import { userConstants as userType } from '../constants'
import md5 from 'md5';

function* updateProfile(action) {
    let { payload } = action;
    let userId = sessionStorage.getItem("userId");
    let oldPass = yield checkUserData(userId, "password");
    if(oldPass === payload.password) {
        let error = yield updateUserProfile(userId, payload);  
        if(error) {
            yield put(updateProfileFail(payload));
            return;
        }  
    }else {
        let error = yield updateUserProfile(userId, {
            ...payload,
            password: md5(payload.password)
        });
        if(error) {
            yield put(updateProfileFail(payload));
            return;
        }
    }
    yield put(updateProfileSuccess(payload))
}

export function* updateProfileAction() {
    yield takeEvery(userType.UPDATE_USER_REQUEST, updateProfile)
}