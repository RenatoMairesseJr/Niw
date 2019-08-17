import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import NiwTextField from '../Shared/NiwTextField';
import TextFieldMultiline from '../Shared/TextFieldMultiline';
import NiwCircularProgress from '../Shared/CircularProgress/NiwCircularProgress';
import SnackbarMessageError from '../Shared/Snackbar/SnackbarMessageError';

import { HomeService } from './Service/HomeService';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
    },
    root: {
        flexGrow: 1,
    },
}));

export default function Home() {
    const classes = useStyles();
    const [states, setStates] = React.useState({
        name: "",
        numberSelected: null,
        NumberIntoWords: "",
        isLoanding: false,
        showMessage: false,
        message: ""
    })

    function nameOnChange(newName) {
        setStates({ ...states, name: newName })
    }

    function numberOnChange(newNumber) {
        setStates({ ...states, numberSelected: newNumber })
    }

    function onCloseSnackbarMessage() {
        setStates({ ...states, showMessage: false })
    }

    function convertOnClick() {
        console.log(states.numberSelected)
        if (states.name === "") {
            setStates({ ...states, showMessage: true, message: "Please, type your name" });
        } else {
            if (states.numberSelected === null || states.numberSelected === "") {
                setStates({ ...states, showMessage: true, message: "Please, type a number between 0 and 1,000,000" });
            }
            else {
                setStates({ ...states, isLoanding: true, showMessage: false, message: "" })

                HomeService.convertNumber(states.name, states.numberSelected)
                    .then(d => {

                        console.log(d.statusDescription);

                        if (d.status === 0) {
                            setStates({
                                ...states,
                                isLoanding: false,
                                showMessage: false,
                                message: "",
                                NumberIntoWords: d.dataReturn.name + ", the number " + d.dataReturn.inputNumber + " into words is " + d.dataReturn.numberIntoWords
                            });
                        } else {
                            setStates({
                                ...states,
                                isLoanding: false,
                                showMessage: true,
                                message: d.statusDescription
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        setStates({
                            isLoanding: false, showMessage: true, message: err
                        })
                    });
            }
        }
    }

    function resetOnClick() {
        setStates({ ...states, isLoanding: false, showMessage: false, message: "", name: "", numberSelected: null, NumberIntoWords: "" })
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={6}>
                        <NiwTextField type="text" label="Name" value={states.name} width="100%" disabled={false} onChange={nameOnChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <NiwTextField type="number" label="Number" value={states.numberSelected} width="100%" disabled={false} onChange={numberOnChange} />
                    </Grid>
                </Grid>

                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <TextFieldMultiline label="Response" value={states.NumberIntoWords} rowsMax={4} disabled={true} />
                    </Grid>
                </Grid>

                <Grid container className={classes.root} spacing={2} justify="flex-end">
                    <Grid item xs={10}></Grid>
                    <Grid item xs={1}>
                        {!states.isLoading &&
                            <Button variant="contained" color="primary" className={classes.button} onClick={convertOnClick}> Convert </Button>
                        }

                        {states.isLoading &&
                            <NiwCircularProgress />
                        }
                    </Grid>
                    <Grid item xs={1}> <Button variant="contained" color="primary" className={classes.button} onClick={resetOnClick}> Reset </Button> </Grid>
                </Grid>

                <SnackbarMessageError showMessage={states.showMessage} message={states.message} onCloseClick={onCloseSnackbarMessage} />
            </Paper>
            <br />
            <Grid container className={classes.root} spacing={2} justify="center">
                    <Typography variant="overline" display="block" gutterBottom>&copy; 2019 Renato Mairesse Jr</Typography>
            </Grid>
        </div>
    )
}