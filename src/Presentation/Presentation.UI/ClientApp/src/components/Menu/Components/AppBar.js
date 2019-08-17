import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%'
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
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                    </Button>
                    <Typography variant="overline" className={classes.title}>
                        Number Into Words
                    </Typography>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        
                        {menuList.map((item, index) => {
                            return (
                                <MenuItem onClick={handleClose} key={index}>
                                    <Link component={RouterLink} to={"/" + item}>
                                        {item}
                                    </Link>
                                </MenuItem>
                            )
                        })}
                    </Menu>

                    
                    {!props.name && <Button color="inherit">Login</Button>}

                    {props.name && <Typography variant="overline" align="right" className={classes.title}>
                        Welcome {props.name}
                    </Typography>}

                </Toolbar>
            </AppBar>
        </div>
    );
}
