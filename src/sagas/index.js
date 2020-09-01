import { all } from 'redux-saga/effects';
import { registerAction, loginAction } from './auth.saga';
import { controlMainBoardAction } from './control.saga';
import { updateProfileAction, addFriendRequestAction, friendAceptAction } from './user.saga';
import { callRoomAction } from './room.saga';

export default function* rootSaga() {
    yield all([
        registerAction(),
        loginAction(),
        controlMainBoardAction(),
        updateProfileAction(),
        addFriendRequestAction(),
        friendAceptAction(),
        callRoomAction()
    ])
}
