import React from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import logoApp from '../images/work-chat-logo.png';
import Register from './Register';
import Login from './Login';
import { Toolbar, Button, makeStyles, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    home: {
        flexGrow: 1
    },
    title: {
        textAlign: "center"
    }
})

export default function Auth() {

    const match = useRouteMatch();
    const history = useHistory();
    const classes = useStyles();
    
    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <div className={classes.home}>
                    <ButtonBase onClick={() => {history.push("/")}} >
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
        <h1 className={classes.title}>
            Bạn cần đăng nhập hoặc đăng ký để sử dụng ứng dụng
        </h1>
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