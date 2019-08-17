import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: 0,
        margin: 0,
    },
}));

export default function TextFieldMultiline(props) {
    const classes = useStyles();

    function handleChange(e) {
        props.onChange(e.target.value);
    }

    return (
        <TextField
            className={classes.root}
            disabled={props.disabled}
            id={props.label.replace(/\s/g, '')}
            label={props.label}
            value={props.value ? props.value : ""}
            margin="dense"
            variant="outlined"
            fullWidth
            multiline
            rows={props.rowsMax}
            onChange={handleChange}
        />
    );
}