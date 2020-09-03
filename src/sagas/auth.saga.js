import { put, takeEvery } from 'redux-saga/effects';
import { registerSuccess, registerFail, loginFail, loginSuccess } from '../actions/auth.action';
import { authConstants as authType } from '../constants';
import { createUserApi, getAllUserId } from '../api';
import md5 from 'md5';
import { checkUserData } from '../api/user.api';

function* register(action) {
    const { payload } = action;
    const { email } = payload;
    const listKeys = [];
    const listUsers = []

    let listIds = yield getAllUserId("users/").then(res => res)
    for (var key in listIds) {
        listKeys.push(key)
    }
    for (var i = 0; i < listKeys.length; i++) {
        let mail = yield checkUserData(listKeys[i], "email");
        let pass = yield checkUserData(listKeys[i], "password");
        listUsers.push({
            userId: listKeys[i],
            email: mail,
            password: pass
        })
    }
    let mailMatch = listUsers.find(item => item.email === email);
    if (mailMatch) {
        yield put(registerFail({
            error: "Email này đã được đăng ký, hãy thử lại với email khác"
        }))
        return;
    }

    let userId = yield createUserApi(payload)
        .then(snap => snap.key)

    if (!userId) {
        yield put(registerFail({
            error: "Gửi thông tin đến sever bị lỗi, vui lòng kiểm tra lại mạng!"
        }));
        return;
    }
    yield put(registerSuccess({
        ...payload,
        userId: userId
    }));
}

function* login(action) {
    const { payload } = action;
    const { email, password } = payload;
    const listKeys = [];
    const listUsers = []

    let listIds = yield getAllUserId("users/").then(res => res)
    for (var key in listIds) {
        listKeys.push(key)
    }
    for (var i = 0; i < listKeys.length; i++) {
        let mail = yield checkUserData(listKeys[i], "email");
        let pass = yield checkUserData(listKeys[i], "password");
        listUsers.push({
            userId: listKeys[i],
            email: mail,
            password: pass
        })
    }
    let mailMatch = listUsers.find(item => item.email === email);
    if (!mailMatch) {
        yield put(loginFail({
            error: "Không tồn tại người dùng, vui lòng thử lại!"
        }));
        return;
    }
    if (mailMatch.password !== md5(password)) {
        yield put(loginFail({
            error: "Mật khẩu nhập không đúng rồi!"
        }));
        return;
    }
    yield put(loginSuccess(mailMatch));
    return;

}

export function* registerAction() {
    yield takeEvery(authType.REGISTER_REQUEST, register);
}

export function* loginAction() {
    yield takeEvery(authType.LOGIN_REQUEST, login);
}