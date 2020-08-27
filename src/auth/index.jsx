
import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import logoApp from '../images/work-chat-logo.png'
import Register from './Register'
import Login from './Login'
import { Toolbar, Button, makeStyles, ButtonBase, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    isDisable: {
        display: "none"
    },
    root: {
        flexGrow: 1
    },
    home: {
        flexGrow: 1
    },
    title: {
        textAlign: "center"
    },

})

export default function Auth() {

    const match = useRouteMatch();
    const history = useHistory();
    const classes = useStyles();

    const [check, setCheck] = useState(false);

    useEffect(() => {
        let path = window.location.pathname;
        if (path === "/auth/login" || path === "/auth/register") {
            setCheck(true);
        } else {
            setCheck(false);
        }
    })

    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <div className={classes.home}>
                    <ButtonBase onClick={() => { history.push("/") }} >
                        <img src={logoApp} alt="logo-app-bar" width="36px" />
                    </ButtonBase>
                </div>
                <Button
                    onClick={() => { history.push(`${match.url}/login`) }}
                    color="inherit">
                    Đăng nhập
                </Button>
                <Button
                    onClick={() => { history.push(`${match.url}/register`) }}
                    color="inherit">
                    Đăng ký
                </Button>
            </Toolbar>
        </AppBar>
        <div className={check ? classes.isDisable : classes.title}>
            <h1>Bạn cần đăng nhập hoặc đăng ký để sử dụng ứng dụng</h1>
            <img src={logoApp} alt="logo-background" width="240px" />
            <Typography variant="h5">
                Work more effectively with WORK CHAT
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Create by @DucJS Developer
            </Typography>
        </div>
        <Switch>
            <Route exact path={`${match.url}/register`}>
                <Register />
            </Route>
            <Route exact path={`${match.url}/login`}>
                <Login />
            </Route>
        </Switch>
    </div>
}