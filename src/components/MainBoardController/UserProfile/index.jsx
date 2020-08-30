import React from 'react';
import { useForm } from "react-hook-form";
import { UserProfileUseStyles as useStyles } from '../../../style';
import TextFieldController from '../../Fields/TextFieldController';
import { Grid, Typography, Button } from '@material-ui/core';
import ImgMediaCard from '../../ImgMediaCard';
import CountrySelect from '../../Fields/CountrySelect';
import GenderCheckBox from '../../Fields/GenderCheckBox';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../actions/user.action';
import { useState } from 'react';


export default function UserProfile(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { defaultValues } = props;
    const [status, setStatus] = useState("profile");
    const { control, handleSubmit, register, errors } = useForm({ defaultValues });
    const onSubmit = data => {
        dispatch(updateProfile(data));
    };


    return <div className={classes.root}>
        {
            status === "profile" &&
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container >
                <Grid item xs={8}>
                    <Typography align="center" variant="h3" color="primary">
                        Your Profile
                    </Typography>
                </Grid>
                <Grid item container alignItems="center" xs={4}>
                    <Button type="submit" variant="contained" color="primary">
                        Create and Submit
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8} container spacing={2} >
                    <Grid item xs={8}>
                        <TextFieldController
                            inputRef={register}
                            name="company"
                            label="Công ty" />
                    </Grid>
                    <Grid item xs={4}>
                        <GenderCheckBox control={control} />
                        {errors.gender && <i>{errors.gender.message}</i>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldController
                            inputRef={register}
                            name="address"
                            label="Địa chỉ" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextFieldController
                            inputRef={register}
                            name="townShip"
                            label="Quận/Huyện" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextFieldController
                            inputRef={register}
                            name="city"
                            label="Thành phố" />
                    </Grid>
                    <Grid item xs={4}>
                        <CountrySelect control={control} />
                        {errors.country && <i>{errors.country.message}</i>}
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldController
                            inputRef={register}
                            multiline={true}
                            name="introduce"
                            rows={3}
                            variant="outlined"
                            label="Giới thiệu về bản thân" />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <ImgMediaCard
                        control={control}
                        errors={errors} />
                </Grid>
            </Grid>
        </form>
        }
        {
            status === "friends" &&
            <Grid container>
                <Grid container item xs={6}>
                    list follow here
                </Grid>
                <Grid container item xs={6}>
                    list request here
                </Grid>
            </Grid>
        }
        <Grid container>
            <Grid item xs={2}>
                <Button 
                onClick={() => {setStatus("friends")}}
                variant="contained" 
                color="secondary">
                    Friends
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button 
                onClick={() => {setStatus("profile")}}
                variant="contained" 
                color="secondary">
                    My Profile
                </Button>
            </Grid>
        </Grid>
    </div>
}