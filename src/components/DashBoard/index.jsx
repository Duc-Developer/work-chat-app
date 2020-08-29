import React, { useEffect } from 'react';
import { DashBoardUseStyles as useStyles } from '../../style';
import NavBar from '../NavBar';
import SideBarLeft from '../SideBar/SideBarLeft';
import MainBoardController from '../MainBoardController';
import { useHistory } from 'react-router-dom';
import { checkUserData } from '../../api/user.api';
import { useState } from 'react';
import Loading from '../Loading';

export default function DashBoard() {

    const classes = useStyles();
    const history = useHistory();
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        let userId = sessionStorage.getItem("userId");
        if (!userId) {
            history.push("/auth")
        }
        async function getUser() {
            let image = await checkUserData(userId, "image");
            let Fname = await checkUserData(userId, "Fname");
            setProfile({
                image: image,
                Fname: Fname,
                userId: userId
            })
        }
        getUser()
    }, [profile])

    return !profile
        ? <Loading type="circular" size="100px" />
        : <div >
            <NavBar profile={profile} />
            <div className={classes.root}>
                <SideBarLeft profile={profile} />
                <MainBoardController />
            </div>
        </div>
}