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
import { useEffect } from 'react';
import FriendCard from '../../FriendCard';


export default function UserProfile(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { defaultValues } = props;
    const [status, setStatus] = useState("profile");
    const [followingData, setFollowingData] = useState([]);
    const [friendRequestData, setFriendRequestData] = useState([]);
    const { control, handleSubmit, register, errors } = useForm({ defaultValues });
    
    const onSubmit = data => {
        dispatch(updateProfile(data));
    };
    
    useEffect(() => {
        let followings = [];
        let friendRequests = [];
        if(defaultValues) {
            for (var key in defaultValues.following) {
                followings.push({
                    ...defaultValues.following[key],
                    userId: key
                });
            }
            for (var i in defaultValues.friendRequest) {
                friendRequests.push({
                    ...defaultValues.friendRequest[i],
                    userId: key
                });
            }
        }
        setFollowingData(followings);
        setFriendRequestData(friendRequests);
    }, [followingData.length, friendRequestData.length]);

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
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Danh sách bạn đang theo dõi
                        </Typography>
                        {
                            followingData && 
                            followingData.map(item => {
                                return <Grid item xs={8} key={item.userId}>
                                    <FriendCard
                                    image={item.image}
                                    Fname={item.Fname}
                                    userId={item.userId}
                                    active1={false}
                                    nameButton2="unfollow"
                                    handleAction2={() => {console.log("unfollow")}}
                                    />
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>
                <Grid container item xs={6}>
                <Grid item xs={12}>
                        <Typography variant="h6">
                            Danh sách kết bạn chờ phản hồi
                        </Typography>
                        {
                            friendRequestData && 
                            friendRequestData.map(item => {
                                return <Grid item xs={8} key={item.userId}>
                                    <FriendCard
                                    image={item.image}
                                    Fname={item.Fname}
                                    userId={item.userId}
                                    nameButton1="acept"
                                    handleAction1={() => {console.log("acept")}}
                                    nameButton2="deny"
                                    handleAction2={() => {console.log("deny")}}
                                    />
                                </Grid>
                            })
                        }
                    </Grid>
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
                    Profile
                </Button>
            </Grid>
        </Grid>
    </div>
}