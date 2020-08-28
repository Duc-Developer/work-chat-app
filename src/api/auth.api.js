import { database } from '../firebase';
import md5 from 'md5';

export function createUserApi(data) {
    const { password } = data;
    return database
        .ref()
        .child("users/")
        .push({
            ...data,
            password: md5(password)
        })
}

export function getAllUserId(path) {
    return database
        .ref(path)
        .once("value")
        .then(snap => snap.val())
}
