import React, { useState } from 'react';
import CallIcon from '@material-ui/icons/Call';
import AttachmentIcon from '@material-ui/icons/Attachment';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { ChatOnBoardUseStyles as useStyles } from '../../../style';
import { Typography, IconButton, Switch, FormControl, Input, Grid } from '@material-ui/core';
import PropTypes from 'prop-types'

ChatOnBoard.propTypes = {
    userCurrent: PropTypes.object,
    userOnChat: PropTypes.object
}

ChatOnBoard.defaultProps = {
    userCurrent: {
        image: "https://picsum.photos/200",
        Fname: "user-current"
    }
}

export default function ChatOnBoard(props) {

    const classes = useStyles();
    const [profileDisable, setDisable] = useState(false);
    const handleChange = (event) => {
        setDisable(event.target.checked);
    };

    return <div className={classes.root}>
        <div className={classes.nav}>
            <div className={classes.title}>
                <Typography variant="h6" align="center" >
                    {props.userCurrent.Fname}
                </Typography>
            </div>
            <div>
                <IconButton>
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
                            src={props.userCurrent.image}
                            alt="user-current"
                            width="100px" />
                    </div>
                    <div>
                        <Typography variant="h6">
                            {props.userCurrent.Fname}
                        </Typography>
                        <Typography
                            color="textSecondary"
                            variant="caption">
                            thời gian chat gần đây nhất
                    </Typography>
                    </div>
                </div>
                <div className={classes.bodyBox}>
                    this is body box
                </div>
                <div className={classes.footerBox}>
                    <Grid container >
                        <FormControl fullWidth>
                            <Grid item xs={12}>
                                <Input 
                                autoFocus
                                fullWidth
                                disableUnderline
                                placeholder="Viết gì đó đi..." />
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton>
                                    <AttachmentIcon fontSize="small" />
                                </IconButton>
                                <IconButton>
                                    <PhotoLibraryIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </FormControl>
                    </Grid>
                </div>
            </div>
            <div className={profileDisable===true ? classes.isDisable : classes.profile}>
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