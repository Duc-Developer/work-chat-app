import { mainBoardControlConstants as typeControl } from '../constants'

const initialState = "userProfile";
// action.payload can be 'userProfile' 'ChatOnBoard' 'SettingBoard'
export function controlReducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case typeControl.CONTROL_REQUEST_SUCCESS:
            console.log(payload)
            console.log("control main board success!");
            return payload;
        case typeControl.CONTROL_REQUEST_FAIL:
            console.log("control main board fail!");
            return state;
        default:
            return state
    }
}