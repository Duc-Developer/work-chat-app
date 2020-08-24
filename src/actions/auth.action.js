import { authConstants } from '../constants'

const {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} = authConstants

export function registerRequest(data) {
    return {
        type: REGISTER_REQUEST,
        payload: data
    }
}

export function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export function registerFail(data) {
    return {
        type: REGISTER_FAIL,
        payload: data
    }
}

export function loginRequest(data) {
    return {
        type: LOGIN_REQUEST,
        payload: data
    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function loginFail(data) {
    return {
        type: LOGIN_FAIL,
        payload: data
    }
}