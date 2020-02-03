import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles( theme => ({
    icon: {
        color: 'white',
    },
    title: {
        flexGrow: 1
    }
}))

const Navbar = () => {

    const classes = useStyles();

    return(
        <AppBar position="static" >
            <Toolbar>
                <Typography className={classes.title} variant="h6">T-Shirt shop</Typography>
                <IconButton>
                    <Badge badgeContent={0} showZero color="error" >
                        <ShoppingCartIcon className={classes.icon}/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar