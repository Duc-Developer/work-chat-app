import { roomConstants as roomType } from '../constants'

const initialState = {
    userInbox: {},
    messages: []
}

export function roomReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case roomType.CALL_ROOM_SUCCESS:
            return action.payload;
        case roomType.CALL_ROOM_FAIL:
            console.log("fail");
            return state;
        default:
            return state;
    }
}