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

export async function getAllUserPromiseApi() {
    return database
        .ref("users/")
        .once("value");
}