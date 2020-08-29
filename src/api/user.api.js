import { database, storage } from '../firebase'

export const checkUserData = (userId, typeCheck) => {
    if (userId === "users") {
        return database.ref(`${userId}/${typeCheck}`)
            // .child(typeCheck)
            .once("value")
            .then(snapshot => {
                return snapshot.val()
            })
    } else {
        return database.ref("users/" + userId)
            .child(typeCheck)
            .once("value")
            .then(snapshot => {
                return snapshot.val()
            })
    }

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

    switch (typeof (image)) {
        case undefined:
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
                                    ...data,
                                    image: url
                                })
                        })
                })
            return;
        case "string":
            database
                .ref("users/" + userId)
                .set({
                    ...data,
                    image: image
                })
                .then(snap => snap)
                .catch(error => error);
            return;
        default:
            database
                .ref("users/" + userId)
                .set({
                    ...data,
                    image: "https://picsum.photos/200"
                })
                .then(snap => snap)
                .catch(error => error);
            return;
    }
}