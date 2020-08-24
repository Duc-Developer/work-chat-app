import { authConstants } from '../constants'

const {
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGIN_SUCCESS,
    LOGIN_FAIL
} = authConstants
const initialState = {}

export function authReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case REGISTER_SUCCESS:
            console.log("register success!")
            alert(`${payload.email} được đăng ký thành công`)
            localStorage.setItem("userMail", payload.email)
            return payload // {Fname, Lname, email, password}
        case REGISTER_FAIL:
            alert(payload.error)
            return payload // {error: ....}

        case LOGIN_SUCCESS:
            console.log("Login success!")
            alert("Đăng nhập thành công!")
            localStorage.setItem("userMail", payload.email)
            console.log(payload)
            return payload
        case LOGIN_FAIL:
            alert(payload.error)
            return payload
        default:
            return state
    }
}