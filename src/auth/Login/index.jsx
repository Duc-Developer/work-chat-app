import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import logoApp from '../../images/work-chat-logo.png';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../actions/auth.action';
import { loginUseStyles as useStyles} from '../../style';

export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (data) => {
        dispatch(loginRequest(data))
    };
    
    return <div className={classes.root}>
        <div className={classes.logo}>
            <img src={logoApp} alt="logo-app" width="96px" />
        </div>
        <div className={classes.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        inputRef={register({
                            required: {
                                value: true,
                                message: "Email là cần thiết! "
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Email định dạng kiểu '@example.com' là bắt buộc!"
                            }
                        })}
                        margin="normal"
                        name="email"
                        label="Email"
                        type="email"
                        color="primary" />
                </Grid>
                {errors.email && <Alert severity="error">
                    {errors.email.message}
                </Alert>}
                <Grid item xs={12} >
                    <TextField
                        fullWidth
                        inputRef={register({
                            required: {
                                value: true,
                                message: "Password là bắt buộc! "
                            },
                            minLength: {
                                value: 6,
                                message: "Password phải trên 6 ký tự!"
                            }
                        })}
                        margin="normal"
                        name="password"
                        label="Password"
                        type="password"
                        color="primary" />
                </Grid>
                {errors.password && <Alert severity="error">
                    {errors.password.message}
                </Alert>}
                <div className={classes.onSubmit}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit">
                        Đăng nhập
                </Button>
                </div>
            </form>
        </div>
        <div>
            <p>
                Nếu chưa có tài khoản vui lòng chọn
            <a href="/auth/register"> Đăng ký</a>
            </p>
        </div>
    </div>
}