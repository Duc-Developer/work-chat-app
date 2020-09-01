import { roomConstants as type } from '../constants';

export function callRoom(data) {
    return {
        type: type.CALL_ROOM,
        payload: data
    };
};

export function callRoomSuccess(data) {
    return {
        type: type.CALL_ROOM_SUCCESS,
        payload: data
    };
};

export function callRoomFail(data) {
    return {
        type: type.CALL_ROOM_FAIL,
        payload: data
    };
};