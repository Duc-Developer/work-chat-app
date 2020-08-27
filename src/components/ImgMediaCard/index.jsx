import React from 'react';
import { ImgMediaCardUseStyles as useStyles } from '../../style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

ImgMediaCard.propTypes = {
    image: PropTypes.string,
    Fname: PropTypes.string,
    Lname: PropTypes.string,
    content: PropTypes.string
}

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const { image, Fname, Lname, content } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="user-profile-avatar"
                    height="140"
                    image={image}
                    title="user-profile-avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {Fname + Lname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Edit</Button>
            </CardActions>
        </Card>
    );
}
