import { put, takeEvery } from 'redux-saga/effects';
import { updateUserProfile, checkUserData, createValueForUserApi, removeData } from '../api/user.api';
import { updateProfileSuccess, updateProfileFail, addFriendRequestSuccess, addFriendRequestFail, friendAceptFail, friendAceptSuccess } from '../actions/user.action';
import { userConstants as userType } from '../constants'
import md5 from 'md5';
import { createRoomApi } from '../api/room.api';

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

function* friendAcept(action) {
    yield console.log("action acept: ", action)
    const userAcept = action.payload.user1;
    const userIsAcept = action.payload.user2;
    //xóa id user tại mục follow của người gửi
    let pathFollow = `users/${userIsAcept.userId}/following/${userAcept.userId}`; 
    //xóa id user tại mục request của mình
    let pathRequest = `users/${userAcept.userId}/friendRequest/${userIsAcept.userId}`;
    let error = yield createRoomApi(userAcept, userIsAcept);
    if(error) {
        yield put(friendAceptFail(action.payload));
        return;
    }
    yield removeData(pathFollow);
    yield removeData(pathRequest);
    yield put(friendAceptSuccess(action.payload));
}

export function* updateProfileAction() {
    yield takeEvery(userType.UPDATE_USER_REQUEST, updateProfile);
}

export function* addFriendRequestAction() {
    yield takeEvery(userType.ADD_FRIEND_REQUEST, addFriendRequest);
}

export function* friendAceptAction() {
    yield takeEvery(userType.FRIEND_ACEPT, friendAcept);
}