import { authConstants as type } from '../constants';

export function registerRequest(data) {
    return {
        type: type.REGISTER_REQUEST,
        payload: data
    }
}

export function registerSuccess(data) {
    return {
        type: type.REGISTER_SUCCESS,
        payload: data
    }
}

export function registerFail(data) {
    return {
        type: type.REGISTER_FAIL,
        payload: data
    }
}

export function loginRequest(data) {
    return {
        type: type.LOGIN_REQUEST,
        payload: data
    }
}

export function loginSuccess(data) {
    return {
        type: type.LOGIN_SUCCESS,
        payload: data
    }
}

export function loginFail(data) {
    return {
        type: type.LOGIN_FAIL,
        payload: data
    }
}