import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/default-avatar.jpeg'
import { FriendCardUseStyles as useStyles } from '../../style'

FriendCard.propTypes = {
    image: PropTypes.string,
    Fname: PropTypes.string,
    userId: PropTypes.string,
    nameButton1: PropTypes.string,
    nameButton2: PropTypes.string,
    handleAction1: PropTypes.func,
    handleAction2: PropTypes.func,
    active1: PropTypes.bool,
    active2: PropTypes.bool,
}

FriendCard.defaultProps = {
    image: defaultAvatar,
    handleAction1: () => { },
    handleAction2: () => { },
    active1: true,
    active2: true,
    nameButton1: "action1",
    nameButton2: "action2",
}

export default function FriendCard(props) {

    const {
        image,
        Fname,
        userId,
        nameButton1,
        nameButton2,
        handleAction1,
        handleAction2,
        active1,
        active2,
    } = props
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {Fname}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    {
                        active1 && <Button
                            onClick={handleAction1}
                            variant="contained"
                            color="primary">
                            {nameButton1}
                        </Button>
                    }
                    {
                        active2 && <Button
                            onClick={handleAction2}
                            variant="contained"
                            color="default">
                            {nameButton2}
                        </Button>
                    }
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={image}
                title={`avatarOf${userId}`}
            />
        </Card>
    );
}
