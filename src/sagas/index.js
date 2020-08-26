import { all } from 'redux-saga/effects'
import { registerAction, loginAction } from './auth.saga'

export default function* rootSaga() {
    yield all([
        registerAction(),
        loginAction()
    ])
}
