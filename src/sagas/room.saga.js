import { roomConstants as roomType } from '../constants';
import { put, takeEvery } from 'redux-saga/effects'
import { callRoomSuccess, sendMessageSuccess, sendMessageFail } from '../actions/room.action';
import { updateMessages } from '../api/room.api';

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
    const { userInbox, messages } = action.payload;
    let id1 = userInbox.userId;
    let id2 = sessionStorage.getItem("userId");
    // yield console.log(messages)
    let error = yield updateMessages(id1, id2, messages);
    if(!error) {
        yield put(sendMessageSuccess(action.payload));
        return;
    }else {
        yield put(sendMessageFail(action.payload));
    }
}

export function* sendMessageAction() {
    yield takeEvery(roomType.SEND_MESSAGE, sendMessage);
}

export function* callRoomAction() {
    yield takeEvery(roomType.CALL_ROOM, callRoom);
}