import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadingUseStyles as useStyles } from '../../style'
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';


Loading.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    thickness: PropTypes.number,
    value: PropTypes.number,
    valueBuffer: PropTypes.number,
    type: PropTypes.string
}

Loading.defaultProps = {
    color: "primary",
    size: "50px",
    thickness: 3,
}

export default function Loading(props) {
    const { color, size, thickness, valueBuffer, value, type } = props
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                type === "line" &&
                <div className={classes.line}>
                    <LinearProgress
                        valueBuffer={valueBuffer}
                        value={value}
                        color={color} />
                </div>
            }
            {
                type === "circular" &&
                <div className={classes.circular}>
                    <CircularProgress
                        value={value}
                        thickness={thickness}
                        color={color}
                        size={size} />
                </div>
            }
        </div>
    );
}
