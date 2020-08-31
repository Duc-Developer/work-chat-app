import { database, storage } from '../firebase';

export default function getAllRoomsForUserApi(id, path) {
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
