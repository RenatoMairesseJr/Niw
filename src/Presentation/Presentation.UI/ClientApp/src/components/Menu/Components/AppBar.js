import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const { menuList } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.menuIcon}>
                    <Typography variant="h6" className={classes.title}> <strong>Number Into Words</strong></Typography>

                    {menuList.map((item, index) => {
                        return (
                            <Button color="secondary" key={index}><NavLink className={classes.textColorMenu}
                                exact to={'/' + item.replace(" ", "")}
                                activeClassName="active"
                                variant="subtitle1">
                                <strong>{item}</strong>
                            </NavLink></Button>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </div>
    );
}