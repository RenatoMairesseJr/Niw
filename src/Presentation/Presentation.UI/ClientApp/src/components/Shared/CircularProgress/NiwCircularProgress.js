import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
        //color: '#7F007F',
    },
}));

export default function NiwCircularProgress() {
    const classes = useStyles();

    return (
        <CircularProgress className={classes.root}/>
    );
}