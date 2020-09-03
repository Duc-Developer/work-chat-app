import { authReducer } from "./auth.reducer";
import { combineReducers } from "redux";
import { controlReducer } from "./control.reducer";
import { userReducer } from "./user.reducer";
import { roomReducer } from "./room.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    control: controlReducer,
    user: userReducer,
    room: roomReducer
})