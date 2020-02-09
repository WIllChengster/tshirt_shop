import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom';

import { AppBar, Toolbar, Typography} from '@material-ui/core';
import ContextCartButton from './ContextCartButton'

const useStyles = makeStyles( theme => ({
    icon: {
        color: 'white',
    },
    title: {
        flexGrow: 1,
    },
    titleText: {
        display: "inline-block",
        "&:hover": {
            cursor: 'pointer'
        }
    }
}))

const Navbar = (props) => {

    const classes = useStyles();
    const redirect = (route) => props.history.push(route)

    return(
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

export default withRouter(Navbar);