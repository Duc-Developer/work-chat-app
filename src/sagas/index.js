import { all } from 'redux-saga/effects'
import { registerAction } from './auth.saga'

export default function* rootSaga() {
    yield all([
        registerAction()
    ])
}
