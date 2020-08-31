import { put, takeEvery } from 'redux-saga/effects';
import { updateUserProfile, checkUserData, createValueForUserApi } from '../api/user.api';
import { updateProfileSuccess, updateProfileFail, addFriendRequestSuccess, addFriendRequestFail } from '../actions/user.action';
import { userConstants as userType } from '../constants'
import md5 from 'md5';

function* updateProfile(action) {
    let { payload } = action;
    let userId = sessionStorage.getItem("userId");
    let oldPass = yield checkUserData(userId, "password");
    if(oldPass === payload.password) {
        let error = yield updateUserProfile(userId, payload);  
        if(error) {
            yield put(updateProfileFail(payload));
            return;
        }  
    }else {
        let error = yield updateUserProfile(userId, {
            ...payload,
            password: md5(payload.password)
        });
        if(error) {
            yield put(updateProfileFail(payload));
            return;
        }
    }
    yield put(updateProfileSuccess(payload))
}

function* addFriendRequest(action) {
    let { payload } = action;
    let { idRes, myProfile } = payload;
    let { userId } = myProfile;
    let myFriendRequest = yield checkUserData(userId, "friendRequest");

    for (var key in myFriendRequest) {
        if(key === idRes) {
            yield put(addFriendRequestFail(payload));
            return;
        }
    }
    let friendImage = yield checkUserData(idRes,"image");
    let friendFname = yield checkUserData(idRes,"Fname");
    let pathOfFriend = `users/${idRes}/friendRequest/${userId}/`;
    let myPath = `users/${userId}/following/${idRes}`
    let res1 = yield createValueForUserApi(myPath, {
        Fname: friendFname,
        image: friendImage
    } );
    let res2 = yield createValueForUserApi(pathOfFriend, {
        Fname: myProfile.Fname,
        image: myProfile.image
    });
    if(!res1 && !res2) {
        yield put(addFriendRequestSuccess(payload));
        return;
    }else {
        yield put(addFriendRequestFail(payload));
        return;
    }
}

export function* updateProfileAction() {
    yield takeEvery(userType.UPDATE_USER_REQUEST, updateProfile)
}

export function* addFriendRequestAction() {
    yield takeEvery(userType.ADD_FRIEND_REQUEST, addFriendRequest)
}