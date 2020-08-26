import { authReducer } from "./auth.reducer";
import { combineReducers } from "redux";
import { controlReducer } from "./control.reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    control: controlReducer
})