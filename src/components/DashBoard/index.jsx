import React, { useEffect } from 'react';
import { DashBoardUseStyles as useStyles } from '../../style';
import NavBar from '../NavBar';
import SideBarLeft from '../SideBar/SideBarLeft';
import MainBoardController from '../MainBoardController';
import { useHistory } from 'react-router-dom';

export default function DashBoard() {

    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        let user = localStorage.getItem("userMail");
        if(!user) {
            history.push("/auth")
        }
    })

    return <div >
        <NavBar />
        <div className={classes.root}>
        <SideBarLeft />
        <MainBoardController />
        </div>
    </div>
}