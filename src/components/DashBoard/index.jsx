import React from 'react'
import { DashBoardUseStyles as useStyles } from '../../style'

export default function DashBoard() {

    const classes = useStyles()
    return <div className={classes.root}>
        This is DashBoard
    </div>
}