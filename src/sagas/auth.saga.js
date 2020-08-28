import { put, takeEvery } from 'redux-saga/effects';
import { registerSuccess, registerFail, loginFail, loginSuccess } from '../actions/auth.action';
import { authConstants as authType } from '../constants';
import { createUserApi, getAllUserPromiseApi } from '../api';
import md5 from 'md5';

function* register(action) {
    const { payload } = action;
    const { email } = payload;

    let listUsers = yield getAllUserPromiseApi().then(snap => snap.val())
    for (var key in listUsers) {
        if (listUsers[key].email === email) {
            yield put(registerFail({
                error: "Email này đã được đăng ký, hãy thử lại với email khác"
            }))
            return
        };
    };

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
    const mailResults = []
    const passResults = []

    let listUsers = yield getAllUserPromiseApi().then(snap => snap.val());
    // Vì thằng listUser lấy từ firebase rất đặc biệt nên t phải kiểm tra theo đường vòng như sau:
    for (var key in listUsers) {
        if (listUsers[key].email !== email) {
            mailResults.push("error")
        } else { mailResults.push("success") }
        if (listUsers[key].password !== md5(password)) {
        } else { passResults.push("success") }
    }
    if (mailResults.indexOf("success") === -1) {
        yield put(loginFail({
            error: "Không tồn tại người dùng, vui lòng thử lại!"
        }));
        return;
    }
    if (passResults.indexOf("success") === -1) {
       yield put(loginFail({
            error: "Mật khẩu nhập không đúng rồi!"
        }));
        return;
    }
    yield put(loginSuccess({
        ...listUsers[key],
        userId: key
    }));
    return;

}

export function* registerAction() {
    yield takeEvery(authType.REGISTER_REQUEST, register);
}

export function* loginAction() {
    yield takeEvery(authType.LOGIN_REQUEST, login);
}