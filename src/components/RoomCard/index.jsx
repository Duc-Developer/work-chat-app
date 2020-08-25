import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';
import { RoomCardUseStyles as useStyles } from '../../style'

RoomCard.propTypes = {
    data: PropTypes.object
}

RoomCard.defaultProps = {
    data: {
        image: "https://picsum.photos/200",
        Fname: "some-one",
        message: "Welcome to chat app, you can chat anything with other people!",
        time: "22/12"
    }
}

export default function RoomCard(props) {

    const classes = useStyles()
    const { image, Fname, message, time } = props.data
    return <div className={classes.root}>
        <div className={classes.avatar}>
            <img src={image} alt="user-avatar" width="100px" />
        </div>
        <div className={classes.information}>
            <div className={classes.titleHeader}>
                <Typography variant="h6">
                    {Fname}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="subtitle1">
                    {time}
                </Typography>
            </div>
            <Typography
                className={classes.message}
                color="textSecondary"
                variant="subtitle1">
                {message}
            </Typography>
        </div>
    </div>
}