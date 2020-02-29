import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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
}))

const Navbar = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const redirect = (route) => history.push(route)


    return (
        <AppBar position="static" >
            <Toolbar>
                <div className={classes.title} >
                    <Typography className={classes.titleText} onClick={() => redirect('/')} variant="h6">T-Shirt shop</Typography>

                </div>
                <ContextCartButton onClick={() => redirect('/cart')} />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;