import { authReducer } from "./auth.reducer";
import { combineReducers } from "redux";
import { controlReducer } from "./control.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    control: controlReducer,
    user: userReducer
})