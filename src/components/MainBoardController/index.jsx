import React from 'react';
import UserProfile from './UserProfile';
import ChatOnBoard from './ChatOnBoard';
import { useSelector } from 'react-redux';

export default function MainBoardController() {

    let typeControl = useSelector(state => state.control)

    return <div className="MainBoardController">
        {typeControl === "userProfile" && <UserProfile />}
        {typeControl === "chatOnBoard" && <ChatOnBoard />}
    </div>
}