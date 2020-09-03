import { authConstants as authType } from '../constants';

const initialState = {};

export function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case authType.REGISTER_SUCCESS:
            alert(`${payload.email} được đăng ký thành công`);
            sessionStorage.setItem("userId", payload.userId);
            return payload; // {Fname, Lname, email, password}
        case authType.REGISTER_FAIL:
            alert(payload.error);
            return payload; // {error: ....}

        case authType.LOGIN_SUCCESS:
            alert("Đăng nhập thành công!");
            sessionStorage.setItem("userId", payload.userId);
            return payload
        case authType.LOGIN_FAIL:
            alert(payload.error)
            return payload;
        default:
            return state;
    }
}