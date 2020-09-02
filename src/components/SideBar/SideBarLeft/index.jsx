import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import { ButtonBase, InputBase, IconButton, Typography, FormControl } from '@material-ui/core';
import { SideBarLeftUseStyles as useStyles } from '../../../style'
import RoomCard from '../../RoomCard';
import { useDispatch } from 'react-redux';
import { controlMainBoard } from '../../../actions/mainBoardControl.action';
import AddFriendFormModal from '../../AddFriendFormModal';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllRoomsForUserApi } from '../../../api/room.api';
import Loading from '../../Loading'
import { callRoom } from '../../../actions/room.action';

export default function SideBarLeft(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const myId = sessionStorage.getItem("userId");
    const [listRooms, setListRooms] = useState([]);
    const [roomSearch, setRoomSearch] = useState([])

    const handleOnClick = (user, messages) => {
        dispatch(controlMainBoard("chatOnBoard"));
        // user ở đây là user mà userLogin đang chat cùng
        // messages ở đây là object(tính chất của firebase) nên ta cần chuyển nó về dạng [] ở saga
        dispatch(callRoom({
            userInbox: user,
            messages: messages
        }));

    };

    const handleSearch = (e) => {
        let search = e.target.value.toLowerCase();
        let result = listRooms.filter(item => {
            let users = item.users; //array 2 phan tu
            let fName1 = users[0].Fname;
            let fName2 = users[1].Fname
            if (fName1.toLowerCase().indexOf(search) !== -1
                || fName2.toLowerCase().indexOf(search) !== -1) {
                return item;
            }
        })
        setRoomSearch(result);
    }

    function findLastMess(obj) {
        let list = [];
        for (var key in obj) {
            list.push(obj[key])
        };
        return list[list.length - 1];
    }

    useEffect(() => {
        async function getData() {
            let defaultList = [];
            let rooms = await getAllRoomsForUserApi(myId, "rooms/");
            for (var key in rooms) {
                defaultList.push(rooms[key]);
            }
            return defaultList;
        }
        getData().then(
            res => {
                setListRooms(res)
            }
        );
    }, [listRooms.length, roomSearch.length]);

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
        {/* <FormControl> */}
        <div className={classes.search}>
            <SearchIcon />
            <InputBase
                fullWidth
                onChange={handleSearch}
                margin="dense"
                placeholder="Find name…" />
        </div>
        {/* </FormControl> */}
        <div className={classes.rooms}>
            <div className={classes.wrapRooms}>
                {
                    !listRooms.length
                        ? <Loading type="line" />
                        : <div>
                            {
                                !roomSearch.length
                                    ? listRooms.map((item) => {

                                        const { users, messages } = item;
                                        const userInbox = users[0].userId === myId
                                            ? users[1] : users[0];
                                        let lastMess = findLastMess(messages);

                                        return <div key={userInbox.userId}>
                                            <ButtonBase
                                                onClick={() => handleOnClick(userInbox, messages)}>
                                                <RoomCard
                                                    image={userInbox.image}
                                                    Fname={userInbox.Fname}
                                                    message={lastMess.title}
                                                    time={lastMess.time.slice(9)}
                                                />
                                            </ButtonBase>
                                        </div>
                                    })
                                    : roomSearch.map((item) => {

                                        const { users, messages } = item;
                                        const userInbox = users[0].userId === myId
                                            ? users[1] : users[0];
                                        let lastMess = findLastMess(messages);

                                        return <div key={userInbox.userId}>
                                            <ButtonBase
                                                onClick={() => handleOnClick(userInbox, messages)}>
                                                <RoomCard
                                                    image={userInbox.image}
                                                    Fname={userInbox.Fname}
                                                    message={lastMess.title}
                                                    time={lastMess.time.slice(9)}
                                                />
                                            </ButtonBase>
                                        </div>
                                    })
                            }
                        </div>
                }
            </div>
        </div>
    </div>
}