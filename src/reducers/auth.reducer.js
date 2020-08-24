import { authConstants } from '../constants'

const {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} = authConstants
const initialState = {}

export function authReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case REGISTER_SUCCESS:
            console.log("register success!")
            return payload
        case REGISTER_FAIL:
            console.log("register fail!")
            return state
        default:
            return state
    }
}