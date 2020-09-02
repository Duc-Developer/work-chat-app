import React, { useState } from 'react';
import CallIcon from '@material-ui/icons/Call';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { ChatOnBoardUseStyles as useStyles } from '../../../style';
import { Typography, IconButton, Switch, Input, Grid, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import MessagesBox from './MessagesBox';
import SendIcon from '@material-ui/icons/Send';
import { useForm } from 'react-hook-form';
import { sendMessage } from '../../../actions/room.action';
import moment from 'moment'
import { useEffect } from 'react';
import { database, storage } from '../../../firebase';
import Loading from '../../Loading';
import { useRef } from 'react';
import * as ids from 'short-id';

ChatOnBoard.propTypes = {
    userCurrent: PropTypes.object,
}

ChatOnBoard.defaultProps = {
    userCurrent: {
        image: "https://picsum.photos/200",
        Fname: "user-current"
    }
}

export default function ChatOnBoard(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const userCurrentId = sessionStorage.getItem("userId");
    const { register, handleSubmit, setValue } = useForm();
    const { userCurrent } = props;
    const [profileDisable, setDisable] = useState(false);
    const roomData = useSelector(state => state.room);
    const { userInbox } = roomData;
    const [messages, setMessages] = useState([]);
    let imgRef = useRef(null);

    useEffect(() => {
        let path = userCurrentId < userInbox.userId
            ? userCurrentId + userInbox.userId
            : userInbox.userId + userCurrentId;
        async function getData() {
            let data = database.ref(`rooms/${path}/messages`);
            data.on("value", snap => {
                setMessages(snap.val());
            });
        }
        getData();
    }, [messages.length, userInbox.userId])

    const handleChange = (event) => {
        setDisable(event.target.checked);
    };

    const onSubmit = (input) => {
        let newMessages = [];
        let time = moment().format("hh:mm:ss DD-MM-YYYY");
        let messId = userCurrentId;
        let title = input.message;
        function uploadFile() {
            let newKey = ids.generate();
            let uploadTask = storage
                .ref()
                .child("images/" + newKey)
                .put(input.imgUpload);
            uploadTask
                .on("state_changed",
                    snap => snap,
                    error => console.log(error),
                    () => {
                        return uploadTask
                            .snapshot
                            .ref
                            .getDownloadURL()
                            .then(url => {
                                newMessages = [
                                    ...messages, // tạm thời, tí cần sửa lấy từ server
                                    {
                                        messId: messId,
                                        time: time,
                                        title: title,
                                        imageUrl: url
                                    }
                                ];
                                dispatch(sendMessage({
                                    userInbox: userInbox,
                                    messages: newMessages
                                }));
                            })
                    }
                ) 
        }
        if (input.imgUpload) {
            uploadFile();
        } else {
            newMessages = [
                ...messages, // tạm thời, tí cần sửa lấy từ server
                {
                    messId: messId,
                    time: time,
                    title: title
                }
            ];
            dispatch(sendMessage({
                userInbox: userInbox,
                messages: newMessages
            }));
        }
        setValue("message", "");
    }

    // body box cần truyền vào các thuộc tính sau:
    // userCurrent, userInbox, messages
    // riêng thuộc tính messages ta cần lắng nghe từ server

    return <div className={classes.root}>
        <div className={classes.nav}>
            <div className={classes.title}>
                <Typography variant="h6" align="center" >
                    {userInbox.Fname}
                </Typography>
            </div>
            <div>
                <IconButton onClick={() => { alert("Để tiết kiệm dung lượng firebase, tính năng này chỉ là thử nghiệm") }}>
                    <CallIcon color="primary" />
                </IconButton>
                <Switch
                    name="showProfile"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    checked={profileDisable}
                    onChange={handleChange} />
            </div>
        </div>
        <div className={classes.mainBoard}>
            <div className={classes.chatBox}>
                <div className={classes.headerBox}>
                    <div className={classes.avatar}>
                        <img
                            src={userInbox.image}
                            alt="user-inbox"
                            width="100px" />
                    </div>
                    <div>
                        <Typography variant="h6">
                            {userInbox.Fname}
                        </Typography>
                        {
                            !messages.length
                                ? <Loading type="circular" size="10px" />
                                : <Typography
                                    color="textSecondary"
                                    variant="caption">
                                    {messages[messages.length - 1].time}
                                </Typography>
                        }
                    </div>
                </div>
                <div className={classes.bodyBox}>
                    {messages.map((item, index) => {
                        let image;
                        let right;
                        if (item.messId === userInbox.userId) {
                            image = userInbox.image;
                            right = true;
                        } else {
                            image = userCurrent.image;
                            right = false;
                        }

                        return (
                            <MessagesBox
                                key={index}
                                image={image}
                                right={right}
                                message={item.title}
                                time={item.time}
                            />
                        )
                    })}
                </div>
                <div className={classes.footerBox}>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Grid container >
                            <Grid container alignItems="center" item xs={10}>
                                <Input
                                    autoFocus
                                    fullWidth
                                    name="message"
                                    inputRef={register({ required: true })}
                                    disableUnderline
                                    placeholder="Viết gì đó đi..." />
                            </Grid>
                            <Grid item container direction="row" justify="flex-end" xs={2} >
                                <Button
                                    onClick={() => { setValue("message", "") }}
                                    color="primary">
                                    Clear
                                    </Button>
                                <IconButton type="submit">
                                    <SendIcon color="primary" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <IconButton onClick={() => { imgRef.current.click() }}>
                                <PhotoLibraryIcon fontSize="small" />
                            </IconButton>
                            <Box component="div" display="none">
                                <input
                                    name="imgUpload"
                                    ref={imgRef}
                                    type="file"
                                    onChange={(e) => {
                                        if (e.target.files[0]) {
                                            setValue("message", e.target.files[0].name);
                                            setValue("imgUpload", e.target.files[0]);
                                        }
                                    }} />
                            </Box>
                        </Grid>
                    </form>
                </div>
            </div>
            <div className={profileDisable === true ? classes.isDisable : classes.profile}>
                <Typography variant="h6">
                    Thông tin hội thoại
            </Typography>
                <div className={classes.mediaBox}>
                    all media is here
            </div>
                <div className={classes.fileBox}>
                    all file link is here
            </div>
            </div>
        </div>
    </div>
}