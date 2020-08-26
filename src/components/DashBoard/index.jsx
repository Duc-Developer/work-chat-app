import React from 'react';
import { DashBoardUseStyles as useStyles } from '../../style';
import NavBar from '../NavBar';
import SideBarLeft from '../SideBar/SideBarLeft';
import MainBoardController from '../MainBoardController';

export default function DashBoard() {

    const classes = useStyles()
    return <div >
        <NavBar />
        <div className={classes.root}>
        <SideBarLeft />
        <MainBoardController />
        </div>
    </div>
}