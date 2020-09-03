import { roomConstants as roomType } from '../constants'

const initialState = {
    userInbox: {},
    messages: []
}

export function roomReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case roomType.CALL_ROOM_SUCCESS:
            return payload;
        case roomType.CALL_ROOM_FAIL:
            return state;
        case roomType.SEND_MESSAGE_SUCCESS:
            return payload;
        case roomType.SEND_MESSAGE_FAIL:
            return state;
        default:
            return state;
    }
}