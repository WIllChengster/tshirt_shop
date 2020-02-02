import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const Navbar = () => {
    return(
        <AppBar>
            <Toolbar>
                <Typography variant="h6">T-Shirt shop</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar