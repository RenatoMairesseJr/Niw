import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowX: "auto"
    },
    boxShadow: {
        boxShadow: 'none',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    },
    textColorMenu: {
        color: '#7F1399',
        padding: 10
    },
    textColorUser: {
        color: 'white',
        marginTop: '-20px',
        marginRight: '50px',
    },
    grow: {
        flexGrow: 0,
    },
    rightToolbar: {
        marginLeft: "auto",
    },
    centerToolbar: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 0
    },
    menuIcon: {
        marginRight: 50,
        marginLeft: 0,
        marginTop: 0
    },
    button: {
        paddingTop: 0
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const { menuList } = props;
    return (
        <div className={classes.root}>
            <AppBar position="relative" color="default" className={classes.boxShadow}>
                <section className={classes.rightToolbar}>
                    <Toolbar>
                        <Typography className={classes.textColorUser}><strong>Welcome</strong></Typography>
                    </Toolbar>
                </section>

                <section >
                    <Toolbar className={classes.menuIcon}>
                        <Typography variant="h6" className={classes.textColorMenu}> <strong>Number Into Words</strong></Typography>
                    </Toolbar>
                </section>

                <section className={classes.centerToolbar}>
                    <Toolbar>
                        {menuList.map((item, index) => {
                            return (
                                <NavLink key={index} className={classes.textColorMenu}
                                    exact to={'/' + item.replace(" ", "")}
                                    activeClassName="active"
                                    variant="subtitle1">
                                    <strong>{item}</strong>
                                </NavLink>
                            )
                        })}
                    </Toolbar>
                </section>
            </AppBar>
        </div>
    );
}