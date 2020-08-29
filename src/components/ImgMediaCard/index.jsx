import React, { useState, useRef } from 'react';
import { ImgMediaCardUseStyles as useStyles } from '../../style'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Input, InputLabel } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import CheckPasswordModal from '../CheckPasswordModal';

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const inputImg = useRef(null);
    const [edit, setEdit] = useState(true);
    const [src, setSrc] = useState(null);
    const [passView, setPassView] = useState(null)
    const { control, errors } = props;
    const {
        Fname,
        Lname,
        image,
        phone,
        password,
        email
    } = control.defaultValuesRef.current

    const handleCheck = (result) => {
        setEdit(!result.status);  // password đúng result.status sẽ là true
        setPassView(result.passDecoded); // cho ng dùng nhìn thấy mật khẩu thay vì mật khẩu bị mã hóa mặc định lấy từ server
    }
    console.log(passView)

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => inputImg.current.click()} >
                <Controller
                    control={control}
                    name="image"
                    render={({ onChange }) => (<Input
                        type="file"
                        onChange={(e) => {
                            let url = URL.createObjectURL(e.target.files[0]);
                            setSrc(url);
                            onChange(e.target.files[0]);
                        }}
                        inputRef={inputImg}
                        id="file"
                        style={{ display: "none" }} />)}
                />
                <CardMedia
                    component="img"
                    alt="user-profile-avatar"
                    height="200"
                    image={!src ? image : src}
                    title="user-profile-avatar"
                />
            </CardActionArea>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
                            name="Fname"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Tên của bạn là cần thiết!"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Tên phải nhỏ hớn 10 ký tự!"
                                }
                            }}
                            render={({ onChange }) => (
                                <>
                                    <InputLabel htmlFor="Fname" >Tên: </InputLabel>
                                    <Input
                                        id="Fname"
                                        disableUnderline={edit}
                                        defaultValue={Fname}
                                        onChange={e => onChange(e.target.value)}
                                        readOnly={edit} />
                                </>
                            )}
                        />
                        {errors.Fname && <i>{errors.Fname.message}</i>}
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
                            name="Lname"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Họ của bạn là cần thiết!"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Họ phải nhỏ hớn 10 ký tự!"
                                }
                            }}
                            render={({ onChange }) => (
                                <>
                                    <InputLabel htmlFor="Lname">Họ: </InputLabel>
                                    <Input
                                        id="Lname"
                                        disableUnderline={edit}
                                        defaultValue={Lname}
                                        onChange={e => onChange(e.target.value)}
                                        readOnly={edit} />
                                </>
                            )}
                        />
                        {errors.Lname && <i>{errors.Lname.message}</i>}
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="phone"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Số điện thoại là cần thiết!"
                                }
                            }}
                            render={({ onChange }) => (<div>
                                <label><b>Phone: </b></label>
                                <Input
                                    type="tel"
                                    disableUnderline={edit}
                                    defaultValue={phone}
                                    onChange={e => onChange(e.target.value)}
                                    readOnly={edit} />
                            </div>)}
                        />
                        {errors.phone && <i>{errors.phone.message}</i>}
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Email là bắt buộc!"
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Email định dạng kiểu '@example.com' là bắt buộc!"
                                }
                            }}
                            render={({ onChange }) => (<div>
                                <label><b>Email: </b></label>
                                <Input
                                    type="email"
                                    disableUnderline={edit}
                                    defaultValue={email}
                                    onChange={e => onChange(e.target.value)}
                                    readOnly={edit} />
                            </div>)}
                        />
                        {errors.email && <i>{errors.email.message}</i>}
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Password là bắt buộc! "
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password phải trên 6 ký tự!"
                                }
                            }}
                            render={({ onChange }) => (<div>
                                <label><b>Password: </b></label>
                                {
                                    !passView && <Input
                                        name="password"
                                        type={edit ? "hidden" : "text"}
                                        disableUnderline={edit}
                                        defaultValue={password}
                                        onChange={e => onChange(e.target.value)}
                                    />
                                }
                                {
                                    passView && <Input
                                        name="password"
                                        type={edit ? "hidden" : "text"}
                                        disableUnderline={edit}
                                        defaultValue={passView}
                                        onChange={e => onChange(e.target.value)}
                                    />
                                }
                            </div>)}
                        />
                        {errors.password && <i>{errors.password.message}</i>}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <CheckPasswordModal handleCheck={handleCheck} />
            </CardActions>
        </Card>
    );
}
