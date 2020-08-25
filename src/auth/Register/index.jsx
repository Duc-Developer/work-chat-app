import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import logoApp from '../../images/work-chat-logo.png'
import { useForm } from 'react-hook-form'
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux'
import { registerRequest } from '../../actions/auth.action'
import { RegisterUseStyles as useStyles } from '../../style'

export default function Register(props) {

    const classes = useStyles(props)
    const dispatch = useDispatch()
    const { register, errors, handleSubmit } = useForm()

    const onSubmit = (data) => {
        dispatch(registerRequest(data))
    }

    return <div className={classes.root}>
        <div className={classes.logo}>
            <img src={logoApp} alt="logo-app" width="96px" />
        </div>
        <div className={classes.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            inputRef={register({
                                required: {
                                    value: true,
                                    message: "Tên của bạn là cần thiết!"
                                }
                            })}
                            name="Fname"
                            label="First Name"
                            type="text"
                            color="primary" />
                        {errors.Fname && <div><i>{errors.Fname.message}</i></div>}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            inputRef={register({
                                required: {
                                    value: true,
                                    message: "Họ của bạn là cần thiết! "
                                }
                            })}
                            name="Lname"
                            label="Last Name"
                            type="text"
                            color="primary" />
                        {errors.Lname && <div><i>{errors.Lname.message}</i></div>}
                    </Grid>
                </Grid>
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
                        Đăng Ký
                        </Button>
                </div>
            </form>
        </div>
        <div>
            <p>
                Nếu đã có tài khoản vui lòng chọn
            <a href="/auth/login"> Đăng nhập</a>
            </p>
        </div>
    </div>
}