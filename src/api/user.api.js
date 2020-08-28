import { database, storage } from '../firebase'
import md5 from 'md5'

export const checkUserPassword = (userId) => {
    // let passwordRes = []
    return database.ref("users/" + userId)
            .child("password")
            .once("value")
            .then(snapshot => {
                // passwordRes.push(snapshot.val())
                return snapshot.val()
            })
    // return passwordRes[0]
}

export const updateUserProfile = (userId, data) => {
    let imageFile = []
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
        townShip } = data
    if(typeof(image) !== "string") {
        storage.ref(`avatars/${image.name}`)
                .put(image)
                .snapshot
                .ref
                .getDownloadURL()
                .then(url => {
                    imageFile.push(url)
                })
    } else {
        imageFile.push(image)
    }
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
            image: imageFile[0]
        })
}