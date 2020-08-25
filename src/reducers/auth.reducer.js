import { authConstants as authType } from '../constants';

const initialState = {};

export function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case authType.REGISTER_SUCCESS:
            console.log("register success!");
            alert(`${payload.email} được đăng ký thành công`);
            localStorage.setItem("userMail", payload.email);
            return payload; // {Fname, Lname, email, password}
        case authType.REGISTER_FAIL:
            alert(payload.error);
            return payload; // {error: ....}

        case authType.LOGIN_SUCCESS:
            console.log("Login success!");
            alert("Đăng nhập thành công!");
            localStorage.setItem("userMail", payload.email);
            console.log(payload);
            return payload
        case authType.LOGIN_FAIL:
            alert(payload.error)
            return payload;
        default:
            return state;
    }
}