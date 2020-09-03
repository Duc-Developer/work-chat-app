import { put, takeEvery } from 'redux-saga/effects';
import { controlMainBoardSuccess } from '../actions/mainBoardControl.action';
import { mainBoardControlConstants as typeControl } from '../constants'

function* controlMainBoard(action) {
    yield put(controlMainBoardSuccess(action.payload));
}

export function* controlMainBoardAction(){
    yield takeEvery(typeControl.CONTROL_REQUEST, controlMainBoard)
}