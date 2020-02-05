import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context'
import { makeStyles } from '@material-ui/core/styles'

import { Typography, Paper } from '@material-ui/core'



const useStyles = makeStyles( theme => ({
    header: {
        textAlign: 'center'
    },
    cartContainer: {
        // display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(6),
    },
    cartItem: {
        width: '70%',
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 'auto'
    }
}))

const Cart = () => {

    const classes = useStyles();
    const {cart, updateCart} = useContext(CartContext)

    console.log(cart);

    let EmptyCartComponent = <Paper elevation={3} className={classes.cartItem} >
        <Typography>Your Cart is empty</Typography>
        <Typography>Start Shopping!</Typography>
        </Paper>
    
    let CartMap = cart.map( (item, index) => {
        return(
            <Paper evelation={3} key={index} className={classes.cartItem} > 
                
                <Typography>{item}</Typography>
            </Paper>
        )
    } )
    
    let UserCart = cart.length > 0 ? CartMap : EmptyCartComponent

    return(
        <div>
            <Typography className={classes.header} component="h3" >My Cart</Typography>
            <div className={classes.cartContainer}>
                {UserCart}
            </div>
        </div>
    )
}


export default Cart