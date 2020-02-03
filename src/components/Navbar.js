import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import ContextCartButton from './ContextCartButton'
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
                <ContextCartButton/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar