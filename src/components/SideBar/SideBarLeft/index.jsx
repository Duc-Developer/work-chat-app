import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { InputBase, IconButton, Typography, FormControl } from '@material-ui/core';

import { SideBarLeftUseStyles as useStyles } from '../../../style'

export default function SideBarLeft() {

    const classes = useStyles()
    return <div className={classes.root}>
        <div className={classes.header}>
            <IconButton>
                <SettingsIcon />
            </IconButton>
            <Typography
                variant="h6"
                color="primary"
                align="center">
                Work Chat
            </Typography>
            <IconButton>
                <AddBoxIcon />
            </IconButton>
        </div>
        <FormControl>
            <div className={classes.search}>
                <SearchIcon />
                <InputBase
                autoFocus
                margin="dense"
                placeholder="Search…" />
            </div>
        </FormControl>
        <div className={classes.rooms}>
            <div className={classes.wrapRooms}>
                list rooms here
            </div>
        </div>
    </div>
}