import React from 'react';
import { useForm } from "react-hook-form";
import { UserProfileUseStyles as useStyles } from '../../../style';
import TextFieldController from '../../Fields/TextFieldController';
import { Grid, Typography, Button } from '@material-ui/core';
import ImgMediaCard from '../../ImgMediaCard';
import CountrySelect from '../../Fields/CountrySelect';
import GenderCheckBox from '../../Fields/GenderCheckBox';
import { updateUserProfile } from '../../../api/user.api';

const defaultValues = {
    Fname: "",
    Lname: "",
    townShip: "",
    address: "",
    city: "",
    country: { code: "VN", label: "Vietnam", phone: "84" },
    gender: "",
    company: "",
    phone: "",
    image: "https://picsum.photos/200",
    email: "",
    password: ""
}

export default function UserProfile() {

    const classes = useStyles();
    const { control, handleSubmit, register, errors } = useForm({ defaultValues });
    const onSubmit = data => {
        console.log(data);
        let userId = sessionStorage.getItem("userId");
        // sửa lại input email, chuyển api vào saga, thêm validate cho input
        // updateUserProfile(userId, data)
    };

    return <div className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
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
                    <ImgMediaCard control={control} />
                </Grid>
                <Grid item xs={12}>
                    Danh Sách kết bạn và chờ kết bạn hiển thị ở đây
                </Grid>
            </Grid>
        </form>

    </div>
}