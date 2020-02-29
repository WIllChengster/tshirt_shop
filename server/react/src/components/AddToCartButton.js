import React from 'react';
import { Button } from '@material-ui/core';
import { CartContext } from '../context/cart-context';

const AddToCartButton = (props) => {
    return(
        <CartContext.Consumer>
            {
                ({cart, updateCart}) => (
                    <Button {...props} onClick={()=>updateCart([...cart, props.item])}>Add to Cart</Button>
                )
            }
        </CartContext.Consumer>
    )
}

export default AddToCartButton

