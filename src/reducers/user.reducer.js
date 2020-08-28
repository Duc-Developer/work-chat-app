import { userConstants as userType } from '../constants';

const initialState = {}

export const userReducer = (state =initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case userType.UPDATE_USER_SUCCESS:
            alert("Cập nhật dữ liệu người dùng thành công!")
            return payload;
        case userType.UPDATE_USER_FAIL:
            alert("Cập nhật thất bại, hãy kiểm tra lại đường truyền!")
            return state;
        default:
            return state;
    }
}