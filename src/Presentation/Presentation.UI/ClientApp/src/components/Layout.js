import React from 'react';
import NavMenu from './Menu/Index';
import Grid from '@material-ui/core/Grid';

export default function Layout(props) {
    return (
        <Grid container spacing={3}>
            <Grid item xl={12}>
                <NavMenu />
            </Grid>
            <Grid item xl={1}></Grid>
            <Grid item xl={10}>
                {props.children}
            </Grid>
            <Grid item xl={1}></Grid>
        </Grid>
    );
}


