import { put, takeEvery } from 'redux-saga/effects'
import { registerSuccess, registerFail } from '../actions/auth.action'
import { authConstants } from '../constants'

const {
    REGISTER_REQUEST
} = authConstants

function* register(action) {
    const { payload } = action
    // thực hiện api lên server
    yield put(registerSuccess(payload))
    // không thành công trả về fail
    // yield put(registerFail())
}

export function* registerAction() {
    yield takeEvery(REGISTER_REQUEST, register)
}