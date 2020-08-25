import React from 'react';
import { UserProfileUseStyles as useStyles } from '../../../style';

export default function UserProfile() {

    const classes = useStyles();
    
    return <div className={classes.root}>
        This is userProfile
    </div>
}