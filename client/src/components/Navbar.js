import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import ContextCartButton from './ContextCartButton'

const useStyles = makeStyles(theme => ({
    icon: {
        color: 'white',
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    titleText: {
        display: "inline-block",
        "&:hover": {
            cursor: 'pointer'
        }
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}))

const Navbar = (props) => {

    const classes = useStyles();
    const redirect = (route) => props.history.push(route)
    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (state) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawer(state);
    };

    return (
        <AppBar position="static" >
            <Toolbar>
                <Drawer open={drawer} onClose={toggleDrawer(false)} >
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            <ListItem button key={'account'}>
                                <ListItemText primary={'account'} />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <IconButton className={classes.icon} onClick={toggleDrawer(true)} >
                    <MenuIcon />
                </IconButton>
                <div className={classes.title} >
                    <Typography className={classes.titleText} onClick={() => redirect('/')} variant="h6">T-Shirt shop</Typography>

                </div>
                <ContextCartButton onClick={() => redirect('/cart')} />
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Navbar);