import { mainBoardControlConstants as type } from '../constants'

export function controlMainBoard(request) {
    return {
        type: type.CONTROL_REQUEST,
        payload: request
    }
}

export function controlMainBoardSuccess(request) {
    return {
        type: type.CONTROL_REQUEST_SUCCESS,
        payload: request       
    }
}

export function controlMainBoardFail(request) {
    return {
        type: type.CONTROL_REQUEST_FAIL,
        payload: request       
    }    
}