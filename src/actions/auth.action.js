import { authConstants } from '../constants'

const {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
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