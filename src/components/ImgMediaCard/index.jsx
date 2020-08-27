import React, { useState } from 'react';
import { ImgMediaCardUseStyles as useStyles } from '../../style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import { Grid, Input } from '@material-ui/core';

ImgMediaCard.propTypes = {
    image: PropTypes.string,
    Fname: PropTypes.string,
    Lname: PropTypes.string,
    phone: PropTypes.string,
    onChange: PropTypes.func,
}

ImgMediaCard.defaultProps = {
    image: "https://picsum.photos/200",
    Fname: "Fname",
    Lname: "Lname",
    phone: "0911662463",
    onChange: () => {}
}

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const [edit, setEdit] = useState(true);
    const { image, Fname, Lname, phone } = props;

    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="user-profile-avatar"
                    height="200"
                    image={image}
                    title="user-profile-avatar"
                />
            </CardActionArea>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Input
                            label="Fname"
                            disableUnderline={edit}
                            defaultValue={Fname}
                            onChange={props.onChange}
                            readOnly={edit} />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            label="Lname"
                            disableUnderline={edit}
                            defaultValue={Lname}
                            onChange={event => {console.log(event.target.value)}}
                            readOnly={edit} />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            label="phone"
                            disableUnderline={edit}
                            defaultValue={phone}
                            onChange={props.onChange}
                            readOnly={edit} />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button
                    onClick={handleEdit}
                    size="small"
                    color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
}
