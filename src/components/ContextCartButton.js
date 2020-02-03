import React, {useContext} from 'react';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles'

import { CartContext } from '../context/cart-context';

const useStyles = makeStyles( theme => ({
    icon: {
        color: 'white',
    }
}))

const ContextCartButton = () => {

    const classes = useStyles();
    const cart = useContext(CartContext);

    // let cart = this.context;
    console.log(cart);

    return(
        <CartContext.Consumer>
            {
                ({cart}) => {
                    console.log(cart);
                    return  (
                    <IconButton>
                        <Badge badgeContent={cart.length} showZero color="error" >
                            <ShoppingCartIcon className={classes.icon}/>
                        </Badge>
                    </IconButton>
                )}
            }

        </CartContext.Consumer>
    )
}

// ContextCartButton.contextType = CartContext;

export default ContextCartButton