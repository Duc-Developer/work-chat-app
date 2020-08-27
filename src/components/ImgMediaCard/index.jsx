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
import { Controller } from 'react-hook-form';

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
    onChange: () => { }
}

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const [edit, setEdit] = useState(true);
    const { image, Fname, Lname, phone, control } = props;

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
                        <Controller
                            control={control}
                            name="Fname"
                            render={({ onChange }) => (<Input
                                label="Fname"
                                disableUnderline={edit}
                                defaultValue={Fname}
                                onChange={e => onChange(e.target.value)}
                                readOnly={edit} />)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controller
                            control={control}
                            name="Lname"
                            render={({ onChange }) => (<Input
                                label="Lname"
                                name="Lname"
                                disableUnderline={edit}
                                defaultValue={Lname}
                                onChange={e => onChange(e.target.value)}
                                readOnly={edit} />)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="phone"
                            render={({ onChange }) => (<Input
                                label="phone"
                                name="phone"
                                disableUnderline={edit}
                                defaultValue={phone}
                                onChange={e => onChange(e.target.value)}
                                readOnly={edit} />)}
                        />
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
