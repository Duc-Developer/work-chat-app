import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { MessageBoxUseStyles as useStyles } from '../../../../style'
import PropTypes from 'prop-types';

MessagesBox.propTypes = {
    image: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string,
    right: PropTypes.bool,
    imageUrl: PropTypes.string
}

MessagesBox.defaultProps = {
    right: false,
    imageUrl: "https://picsum.photos/id/237/200/300"
}

export default function MessagesBox(props) {

    const { image, message, time, right, imageUrl } = props;
    const classes = useStyles();

    return <Grid
        container
        item
        xs={12}
        className={right ? classes.rootRight : classes.rootLeft}
    >
        <Grid item >
            <div className={classes.avatar}>
                <img src={image} width="80px" alt="user-inbox-avatar" />
            </div>
        </Grid>
        <Grid
            item
            xs={8}
            className={right ? classes.messRight : classes.messLeft}
        >
            <div>
                <Typography
                    align={right ? "right" : "left"}
                    variant="subtitle1"
                    color="textSecondary">
                    {time}
                </Typography>
                <Typography
                    align={right ? "right" : "left"}
                    variant="body1">
                    {message}
                </Typography>
            </div>
        </Grid>
        {
            imageUrl && <Grid
                className={right ? classes.imageRight : classes.imageLeft}
                item xs={12}>
                <img width="200px" src={imageUrl} alt={time} />
            </Grid>
        }
    </Grid>
}