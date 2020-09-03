import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Modal from '@material-ui/core/Modal';
import { IconButton, Typography, Button } from '@material-ui/core';
import TextFieldController from '../Fields/TextFieldController';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';
import { addFriendRequest } from '../../actions/user.action';
import PropTypes from 'prop-types';

AddFriendFormModal.propTypes = {
    profile: PropTypes.object
}

function getModalStyle() {
    const top = 30;
    const left = 40;

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
        backgroundColor: "white",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AddFriendFormModal(props) {

    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const onSubmit = data => {
        dispatch(addFriendRequest({
            idRes: data.id,
            myProfile: {
                ...props.profile
            }
        }))
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Typography variant="h6" color="primary" align="center">
                KẾT NỐI ĐỂ GẦN NHAU HƠN
                </Typography>
            <form onSubmit={handleSubmit(onSubmit)} >
                <TextFieldController
                    fullWidth
                    placeholder="Để bảo mật chỉ có thể add friend bằng Id"
                    inputRef={register({
                        required: {
                            value: true,
                            message: "Nếu không có id chúng tôi bó tay!"
                        },
                        validate: value => {
                            return value !== props.profile.userId
                                || "Bạn đang kết bạn với chính mình à???"
                        }
                    })}
                    margin="normal"
                    color="primary"
                    label="UserId"
                    name="id" />
                {errors.id && <Alert severity="error" >{errors.id.message}</Alert>}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary" >
                    Add Friend
                    </Button>
            </form>
            <Typography
                align="center"
                variant="subtitle1"
                color="textSecondary">
                @DucJS Developer
                </Typography>
        </div>
    );

    return (
        <div>
            <IconButton type="button" onClick={handleOpen}>
                <AddBoxIcon />
            </IconButton>
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
