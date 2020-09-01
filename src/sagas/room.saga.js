import { roomConstants as roomType } from '../constants';
import { put, takeEvery } from 'redux-saga/effects'
import { callRoomSuccess } from '../actions/room.action';

function* callRoom(action) {
    let listMessages = [];
    const { messages, userInbox } = action.payload;
    for( var key in messages) {
        listMessages.push({
            ...messages[key],
        })
    }
    // console.log(action.payload);
    yield put(callRoomSuccess({
        userInbox: userInbox,
        messages: listMessages
    }))
}

export function* callRoomAction() {
    yield takeEvery(roomType.CALL_ROOM, callRoom);
}