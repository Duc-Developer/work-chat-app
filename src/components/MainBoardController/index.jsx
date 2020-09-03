import React from 'react';
import UserProfile from './UserProfile';
import ChatOnBoard from './ChatOnBoard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkUserData } from '../../api/user.api';
import { useState } from 'react';
import Loading from '../Loading';
import './MainBoardController.css'

export default function MainBoardController() {

    let typeControl = useSelector(state => state.control);
    const [defaultValues, setValue] = useState({})
    const [size, setSize] = useState(null)

    const caculatorSchemaUser = (data) => {
        let size = 0;
        function caculator(obj) {
            for (var key in obj) {
                size = size + key.length
                if (typeof (obj[key]) === "object") {
                    caculator(obj[key])
                }
            };
        }
        if (data) {
            caculator(data);
            return size;
        }
    }

    useEffect(() => {
        let userId = sessionStorage.getItem("userId")
        async function getData() {
            let profile = await checkUserData("users", userId);
            let size = caculatorSchemaUser(profile);
            setValue(profile);
            setSize(size)
        }
        getData()
    }, [size])

    return <div className="MainBoardController">
        {typeControl === "userProfile"
            && <div>
                {
                    !size // !defaultValues
                        ? <Loading type="line" color="secondary" key="loading" />
                        : <UserProfile
                            defaultValues={defaultValues}
                            key="profile"
                            reRender={() => { setTimeout(() => { setSize(0) }, 2000) }} />
                }
            </div>}
        {typeControl === "chatOnBoard" && <div>
            {
                !size 
                ? <Loading type="line" color="secondary" key="loading" />
                : <ChatOnBoard userCurrent={defaultValues} />
            }
        </div> }
    </div>
}