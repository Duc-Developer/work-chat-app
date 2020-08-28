import { userConstants as type } from '../constants';

export function updateProfile(data) {
    return {
        type: type.UPDATE_USER_REQUEST,
        payload: data
    }
}

export function updateProfileSuccess(data) {
    return {
        type: type.UPDATE_USER_SUCCESS,
        payload: data
    }
}

export function updateProfileFail(data) {
    return {
        type: type.UPDATE_USER_FAIL,
        payload: data
    }
}