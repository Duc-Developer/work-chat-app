import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

// composeEnhancers dùng để debug với redux depveloper tools,
// bạn có thể  ko dùng nếu ko thích
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store