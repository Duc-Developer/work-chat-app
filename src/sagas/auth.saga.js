import { put, takeEvery } from 'redux-saga/effects'
import { registerSuccess, registerFail } from '../actions/auth.action'
import { authConstants } from '../constants'
import { createUserApi, getAllUserPromiseApi } from '../api'

const {
    REGISTER_REQUEST
} = authConstants

function* register(action) {
    const { payload } = action
    const { email } = payload

    let listUsers = yield getAllUserPromiseApi().then(snap => snap.val())
    for (var key in listUsers) {
        if(listUsers[key].email === email){
        yield put(registerFail({
                    error: "Email này đã được đăng ký, hãy thử lại với email khác"
                }))
                return
        }
    }

    let errorRes = yield createUserApi(payload)
    if(errorRes) {
        yield put(registerFail({
            error: "Gửi thông tin đến sever bị lỗi, vui lòng kiểm tra lại mạng!"
        }))
        return
    }
    yield put(registerSuccess(payload))
}

export function* registerAction() {
    yield takeEvery(REGISTER_REQUEST, register)
}