import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { checkUserPassword } from '../../api/user.api';
import Alert from '@material-ui/lab/Alert';
import md5 from 'md5';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function CheckPasswordModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState("password");
    const [pass, setPass] = React.useState("");
    const [error, setError] = React.useState("")

    const handleShow = () => {
        switch (type) {
            case "password":
                setType("text");
                return;
            case "text":
                setType("password");
                return;
            default:
                return type;
        }
    }

    const handleOnClick = async () => {
        let userId = sessionStorage.getItem("userId")
        let password = await checkUserPassword(userId)
        if (md5(pass) === password) {
            props.handleCheck(true)
            setOpen(false)
        } else {
            setError("Đừng cố hack làm gì :)))")
        }
    }

    const handleChange = (e) => {
        setPass(e.target.value)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <p id="simple-modal-description">
                Bạn cần nhập mật khẩu để chỉnh sửa thông tin này.
            </p>
            <form>
                <label htmlFor="inputPassword" >Mật khẩu: </label>
                <Input
                    id="inputPassword"
                    type={type}
                    onChange={handleChange}
                    color="primary"
                    name="passwordCheck"
                    disableUnderline
                    autoFocus />
                {(type === "password") && <IconButton onClick={handleShow}>
                    <VisibilityIcon />
                </IconButton>}
                {(type === "text") && <IconButton onClick={handleShow}>
                    <VisibilityOffIcon />
                </IconButton>}
                <Button
                    onClick={handleOnClick}
                    color="primary"
                    variant="contained">
                    Check
                </Button>
            </form>
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );

    return (
        <div>
            <Button type="button" color="primary" onClick={handleOpen}>
                Edit
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
