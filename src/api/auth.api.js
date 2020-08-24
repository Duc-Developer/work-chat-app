import { database } from '../firebase'
import md5 from 'md5'

export function createUserApi(data) {
    const { password } = data
    const errors = []
    database
        .ref()
        .child("users/")
        .push({
            ...data,
            password: md5(password)
        })
        .catch(error => {
            errors.push(error)
        })
    return errors[0]
}

export async function getAllUserPromiseApi() {
    return database
        .ref("users/")
        .once("value")
}