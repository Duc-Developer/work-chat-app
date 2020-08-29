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
    const [defaultValues, setValue] = useState(null)

    useEffect(() => {
        let userId = sessionStorage.getItem("userId")
        async function getData() {
            let profile = await checkUserData("", userId)
            setValue(profile)
        }
        getData()
    }, [])

    return <div className="MainBoardController">
        {typeControl === "userProfile"
            && <div>
                {
                    !defaultValues
                        ? <Loading type="line" color="secondary" />
                        : <UserProfile defaultValues={defaultValues} />
                }
            </div>}
        {typeControl === "chatOnBoard" && <ChatOnBoard />}
    </div>
}