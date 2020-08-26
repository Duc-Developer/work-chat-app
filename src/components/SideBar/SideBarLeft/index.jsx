import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { ButtonBase, InputBase, IconButton, Typography, FormControl } from '@material-ui/core';

import { SideBarLeftUseStyles as useStyles } from '../../../style'
import RoomCard from '../../RoomCard';

export default function SideBarLeft() {

    const classes = useStyles();
    const listUsers = [1,2,3,4,5,5,6,6,7,7,8];

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
                margin="dense"
                placeholder="Search…" />
            </div>
        </FormControl>
        <div className={classes.rooms}>
            <div className={classes.wrapRooms}>
                {
                    listUsers && listUsers.map((item, index) => {
                        return <ButtonBase  key={index}>
                            <RoomCard />
                        </ButtonBase>
                    })
                }
            </div>
        </div>
    </div>
}