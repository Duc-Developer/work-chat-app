import { roomConstants as roomType } from '../constants';
import { put, takeEvery } from 'redux-saga/effects'
import { callRoomSuccess, sendMessageSuccess } from '../actions/room.action';

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

function* sendMessage(action) {
    yield put(sendMessageSuccess(action.payload));
}

export function* sendMessageAction() {
    yield takeEvery(roomType.SEND_MESSAGE, sendMessage);
}

export function* callRoomAction() {
    yield takeEvery(roomType.CALL_ROOM, callRoom);
}