import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { ButtonBase, InputBase, IconButton, Typography, FormControl } from '@material-ui/core';
import { SideBarLeftUseStyles as useStyles } from '../../../style'
import RoomCard from '../../RoomCard';
import { useDispatch } from 'react-redux';
import { controlMainBoard } from '../../../actions/mainBoardControl.action';
import AddFriendFormModal from '../../AddFriendFormModal';
import { useEffect } from 'react';
import { useState } from 'react';
import getAllRoomsForUserApi from '../../../api/room.api';
import Loading from '../../Loading'

export default function SideBarLeft(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const myId = sessionStorage.getItem("userId");
    const [listRooms, setListRooms] = useState([]);

    const handleOnClick = (e) => {
        dispatch(controlMainBoard("chatOnBoard"))
    };

    useEffect(() => {
        let defaultList = [];
        async function getData() {
            let rooms = await getAllRoomsForUserApi(myId, "rooms/");
            for (var key in rooms) {
                defaultList.push(rooms[key]);
            }
        }
        getData();
        console.log("enddasd")
            setListRooms(defaultList)

    }, []);

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
            {/* <IconButton>
                <AddBoxIcon />
            </IconButton> */}
            <AddFriendFormModal profile={props.profile} />
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
                    !listRooms.length ? <Loading type="inline" /> : listRooms.map((item) => {

                        const { users } = item;
                        const userInbox = users[0].userId === myId
                            ? users[1] : users[0];
   
                        return <div key={userInbox.userId}>
                            <ButtonBase
                                onClick={handleOnClick}>
                                <RoomCard
                                    image={userInbox.image}
                                    Fname={userInbox.Fname}
                                />
                            </ButtonBase>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}