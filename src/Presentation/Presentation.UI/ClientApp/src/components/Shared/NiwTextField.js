import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: 0,
        margin: 0,
        //height: '100%',
    },
}));

export default function NiwTextField(props) {
    const classes = useStyles();

    function handleChange(e) {
        props.onChange(e.target.value);
    }

    return (
        <TextField
            type={props.type}
            className={classes.root}
            disabled={props.disabled}
            id={props.label.replace(/\s/g, '')}
            label={props.label}
            value={props.value ? props.value : ""}
            margin="dense"
            variant="outlined"
            fullWidth
            onChange={handleChange}
        />
    );
}