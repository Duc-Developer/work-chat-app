import React, { useState } from 'react';
import CallIcon from '@material-ui/icons/Call';
import AttachmentIcon from '@material-ui/icons/Attachment';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { ChatOnBoardUseStyles as useStyles } from '../../../style';
import { Typography, IconButton, Switch, Input, Grid } from '@material-ui/core';
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import MessagesBox from './MessagesBox';
import SendIcon from '@material-ui/icons/Send';
import { useForm } from 'react-hook-form';
import { sendMessage } from '../../../actions/room.action';
import moment from 'moment'

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
    const { register, handleSubmit, setValue } = useForm();
    const { userCurrent } = props;
    const [profileDisable, setDisable] = useState(false);
    const roomData = useSelector(state => state.room);
    const { userInbox, messages } = roomData;

    const handleChange = (event) => {
        setDisable(event.target.checked);
    };
   
    const onSubmit = (input) => {
        let time = moment().format("hh:mm:ss DD-MM-YYYY");
        let messId = sessionStorage.getItem("userId")
        let title = input.message;
        dispatch(sendMessage({
            userInbox: userInbox,
            messages: [
                ...messages, // tạm thời, tí cần sửa lấy từ server
                {
                    messId: messId,
                    time: time,
                    title: title
                }
            ]
        }));
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
                        <Typography
                            color="textSecondary"
                            variant="caption">
                            {messages[messages.length - 1].time}
                        </Typography>
                    </div>
                </div>
                <div className={classes.bodyBox}>
                    {messages && messages.map((item, index) => {
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
                            <Grid item xs={12}>
                                <Input
                                    autoFocus
                                    fullWidth
                                    name="message"
                                    inputRef={register({ required: true })}
                                    disableUnderline
                                    placeholder="Viết gì đó đi..." />
                            </Grid>
                            <Grid item >
                                <IconButton type="submit">
                                    <SendIcon color="primary" />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton>
                                    <AttachmentIcon fontSize="small" />
                                </IconButton>
                                <IconButton>
                                    <PhotoLibraryIcon fontSize="small" />
                                </IconButton>
                            </Grid>
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