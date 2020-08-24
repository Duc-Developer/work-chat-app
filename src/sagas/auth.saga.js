import { put, takeEvery } from 'redux-saga/effects'
import { registerSuccess, registerFail, loginFail, loginSuccess } from '../actions/auth.action'
import { authConstants } from '../constants'
import { createUserApi, getAllUserPromiseApi } from '../api'
import md5 from 'md5'

const {
    REGISTER_REQUEST,
    LOGIN_REQUEST
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

function* login(action) {
    const { payload } = action
    const { email, password } = payload

    let listUsers = yield getAllUserPromiseApi().then(snap => snap.val())
    for (var key in listUsers) {
        if(listUsers[key].email !== email) {
            yield put(loginFail({
                error: "Không tồn tại người dùng, vui lòng thử lại!"
            }))
            return
        }
        if(listUsers[key].password !== md5(password)) {
            yield put(loginFail({
                error: "Mật khẩu nhập không đúng rồi!"
            }))
            return
        }
        yield put(loginSuccess(listUsers[key]))
        return
    }

}

export function* registerAction() {
    yield takeEvery(REGISTER_REQUEST, register)
}

export function* loginAction() {
    yield takeEvery(LOGIN_REQUEST, login)
}