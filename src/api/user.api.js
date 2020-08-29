import { database, storage } from '../firebase'
import md5 from 'md5'

export const checkUserData = (userId, typeCheck) => {
    if (userId === "users") {
        return database.ref(`${userId}/${typeCheck}`)
            // .child(typeCheck)
            .once("value")
            .then(snapshot => {
                return snapshot.val()
            })
    }
    return database.ref("users/" + userId)
        .child(typeCheck)
        .once("value")
        .then(snapshot => {
            return snapshot.val()
        })
}

export const updateUserProfile = async (userId, data) => {
    const {
        Fname,
        Lname,
        image,
        address,
        city,
        company,
        country,
        email,
        gender,
        introduce,
        phone,
        password,
        townShip } = data;
    if (typeof (image) !== "string") {
        let uploadTask = storage
            .ref()
            .child(`avatars/avatarOf${userId}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => { },
            (errors) => errors.message,
            () => {
                uploadTask
                    .snapshot
                    .ref
                    .getDownloadURL()
                    .then(url => {
                        database
                            .ref("users/" + userId)
                            .set({
                                Fname: Fname,
                                Lname: Lname,
                                address: address,
                                city: city,
                                company: company,
                                country: country,
                                email: email,
                                gender: gender,
                                introduce: introduce,
                                phone: phone,
                                password: md5(password),
                                townShip: townShip,
                                image: url
                            })
                    })
            })
        return;
    } else {
        return database
            .ref("users/" + userId)
            .set({
                Fname: Fname,
                Lname: Lname,
                address: address,
                city: city,
                company: company,
                country: country,
                email: email,
                gender: gender,
                introduce: introduce,
                phone: phone,
                password: md5(password),
                townShip: townShip,
                image: image
            })
            .then(snap => snap)
            .catch(error => error)
    }
}