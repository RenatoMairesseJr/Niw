import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5),
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
}));

export default function SnackbarMessageError(props) {
    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={props.showMessage}
            onClose={props.onCloseClick}
        >
            <SnackbarContent
                className={classes.error}
                message={<span id="message-id"><ErrorIcon className={classes.icon} /> {props.message} </span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={clsx(classes.close, classes.error)}
                        onClick={props.onCloseClick}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
}


