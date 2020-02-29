import React from 'react';
import { CartContext } from '../context/cart-context';
import { makeStyles } from '@material-ui/core/styles'

import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles( theme => ({
    icon: {
        color: 'white',
    }
}))

const ContextCartButton = (props) => {

    const classes = useStyles();

    return(
        <CartContext.Consumer>
            {
                ({cart}) => (
                    <IconButton {...props} >
                        <Badge badgeContent={cart.length} showZero color="error" >
                            <ShoppingCartIcon className={classes.icon}/>
                        </Badge>
                    </IconButton>
                )
            }

        </CartContext.Consumer>
    )
}

// ContextCartButton.contextType = CartContext;

export default ContextCartButton;