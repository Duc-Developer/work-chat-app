import React from 'react';
import { DashBoardUseStyles as useStyles } from '../../style';
import NavBar from '../NavBar';
import SideBarLeft from '../SideBar/SideBarLeft';

export default function DashBoard() {

    const classes = useStyles()
    return <div className={classes.root}>
        <NavBar />
        <SideBarLeft />
    </div>
}