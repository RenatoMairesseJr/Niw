import React from 'react';
import NavMenu from './Menu/Index';
import Grid from '@material-ui/core/Grid';

export default function Layout(props) {
    return (
        <Grid container spacing={4}>
            <Grid container spacing={3}>
                <Grid item xl={12}>
                    <NavMenu />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xl={2}></Grid>
                <Grid item xl={8}>
                    {props.children}
                </Grid>
                <Grid item xl={2}></Grid>
            </Grid>
        </Grid>
    );
}


