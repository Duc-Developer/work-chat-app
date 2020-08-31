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

export function addFriendRequest(data) {
    return {
        type: type.ADD_FRIEND_REQUEST,
        payload: data
    }
}

export function addFriendRequestSuccess(data) {
    return {
        type: type.ADD_FRIEND_REQUEST_SUCCESS,
        payload: data
    }
}

export function addFriendRequestFail(data) {
    return {
        type: type.ADD_FRIEND_REQUEST_FAIL,
        payload: data
    }
}

export function friendAcept(data) {
    return {
        type: type.FRIEND_ACEPT,
        payload: data
    }
}

export function friendAceptSuccess(data) {
    return {
        type: type.FRIEND_ACEPT_SUCCESS,
        payload: data
    }
}

export function friendAceptFail(data) {
    return {
        type: type.FRIEND_ACEPT_FAIL,
        payload: data
    }
}