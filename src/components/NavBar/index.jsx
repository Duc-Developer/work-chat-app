import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logoApp from '../../images/work-chat-logo.png';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { NavBarUseStyles as useStyles } from '../../style';
import { useDispatch } from 'react-redux';
import { controlMainBoard } from '../../actions/mainBoardControl.action';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

NavBar.propTypes = {
    profile: PropTypes.object
}

NavBar.defaultProps = {
    profile: {
        image: "https://picsum.photos/200",
        Fname: "some-one"
    }
}

export default function NavBar(props) {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { image, Fname } = props.profile;

    const handleLogOut = () => {
        sessionStorage.removeItem("userId");
        history.push("/auth")
    };

    const handleClickAvatar = () => {
        dispatch(controlMainBoard("userProfile"))
    }
    

    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Button 
                onClick={() => {history.push("/")}}
                className={classes.logo}>
                    <img src={logoApp} alt="logo-app-bar" width="48px" />
                </Button>
                <FormControl className={classes.formInput}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        className={classes.inputRoot}
                        placeholder="Search…" />
                </FormControl>
                <Button onClick={handleClickAvatar}>
                    {image && <div className={classes.wrapAvatar}>
                        <Typography variant="h6">
                            {Fname}
                            </Typography>
                        <img
                        src={image}
                        alt="user-avatar"
                        width="64px"
                        className={classes.avatar} />
                    </div> }
                    {!image && <Avatar >{Fname}</Avatar>}
                </Button>
                <Button 
                onClick={handleLogOut}
                color="inherit">Đăng xuất</Button>
            </Toolbar>
        </AppBar>
    </div>
}