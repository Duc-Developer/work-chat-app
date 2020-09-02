import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { RoomCardUseStyles as useStyles } from '../../style';

RoomCard.propTypes = {
    image: PropTypes.string,
    Fname: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string
}

RoomCard.defaultProps = {
    image: "https://picsum.photos/200",
    Fname: "some-one",
    message: "Welcome to chat app, you can chat anything with other people!",
    time: ""
}

export default function RoomCard(props) {

    const classes = useStyles();
    const { image, Fname, message, time } = props
    return <div className={classes.root}>
        <Grid item xs={2} className={classes.avatar}>
            <img src={image} alt="user-avatar" width="100px" />
        </Grid>
        <Grid container item xs={8} className={classes.information}>
            <Grid container item xs={12} className={classes.titleHeader}>
                <Grid item xs={2}>
                <Typography variant="h6">
                    {Fname}
                </Typography>
                </Grid>
                <Grid item xs={10}>
                <Typography
                    align="right"
                    color="textSecondary"
                    variant="subtitle1">
                    {time}
                </Typography>
                </Grid>
            </Grid>
            <Typography
                align="left"
                className={classes.message}
                color="textSecondary"
                variant="subtitle1">
                {message}
            </Typography>
        </Grid>
    </div>
}