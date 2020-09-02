import { database, storage } from '../firebase';
import moment from 'moment';

export const createRoomApi = (item1, item2) => {
    const now = moment().format("hh:mm:ss DD-MM-YYYY")

    let path = item1.userId < item2.userId
        ? (item1.userId + item2.userId)
        : item2.userId + item1.userId;
    let data = {
        users: [
            { ...item1 },
            { ...item2 }
        ],
        messages: {
            "bot": {
                time: now,
                title: `Chúc mừng ${item1.Fname} và ${item2.Fname} đã trở thành bạn bè`
            }
        }
    }
    return database
        .ref(`rooms/${path}`)
        .update(data)
        .catch(error => error);
}

export const getAllRoomsForUserApi = (id, path) => {
    return database
            .ref(path)
            .once("value")
            .then(snap => {
                let results = {};
                let list = snap.val();
                for(var key in list) {
                    if(key.indexOf(id) !== -1) {
                        results = {
                            ...results,
                            [key]: list[key]
                        }
                    }
                }
                return results;
            })
}

