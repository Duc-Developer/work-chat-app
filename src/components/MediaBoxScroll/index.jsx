import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const usestyles = makeStyles({
    root: {
        width: "350px",
        height: "230px",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none"
    },
    image: {
        maxWidth: "100px",
        margin: "5px",
        borderRadius: "10px",
        boxShadow: "5px 5px #dddddd"
    }
})

MediaBoxScroll.propTypes = {
    list: PropTypes.array
}

export default function MediaBoxScroll(props) {
    const { list } = props;
    const classes = usestyles();
    return <div className={classes.root}>
        <Grid container item >
            {
                list.map(item => {
                    return <Grid key={item.imageUrl} item xs={4}>
                        <img 
                        className={classes.image}
                        src={item.imageUrl} 
                        alt={item.imageUrl} />
                    </Grid>
                })
            }
        </Grid>
    </div>
}