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
        case userType.ADD_FRIEND_REQUEST_SUCCESS:
            alert("Gửi yêu cầu kết bạn thành công!");
            return state;
        case userType.ADD_FRIEND_REQUEST_FAIL:
            alert("Kiểm tra lại danh sách chờ kết bạn hoặc đường truyền!");
            return state;
        case userType.FRIEND_ACEPT_SUCCESS:
            alert("Kết bạn thành công, reload lại trang nhé!")
            return state;
        case userType.UPDATE_USER_FAIL:
            alert("Opp... có gì đó ko ổn xảy ra, thử lại nhé!")
            return state;
        default:
            return state;
    }
}