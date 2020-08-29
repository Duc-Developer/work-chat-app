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

export const updateUserProfile = (userId, data) => {
    const { image, } = data;

    switch (typeof (image)) {
        case undefined:
            let uploadTask = storage
                .ref()
                .child(`avatars/avatarOf${userId}`).put(image);
            return uploadTask.on('state_changed',
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
        case "string":
            return database
                .ref("users/" + userId)
                .set({
                    ...data,
                    image: image
                })
                .then(snap => snap)
                .catch(error => error);
        default:
            return database
                .ref("users/" + userId)
                .set({
                    ...data,
                    image: "https://picsum.photos/200"
                })
                .then(snap => snap)
                .catch(error => error);
    }
}

export const createValueForUserApi = (path, data) => {
    return database
        .ref(path)
        .update(data)
        .catch(error => error);
}