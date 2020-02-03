import React from 'react';
import { CartContext } from '../context/cart-context'
import { makeStyles } from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'



const useStyles = makeStyles( theme => ({
    header: {
        textAlign: 'center'
    }
}))

const Cart = () => {

    const classes = useStyles();

    return(
        <div>
            <Typography className={classes.header} component="h3" >
                My Cart
            </Typography>
        </div>
    )
}


export default Cart