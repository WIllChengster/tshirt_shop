import React from 'react';
import { Button } from '@material-ui/core';
import { CartContext, cart } from '../context/cart-context';

const AddToCartButton = (props) => {
    return(
        <CartContext.Consumer>
            {
                ({cart, updateCart}) => {
                    return <Button size="small" color="primary" onClick={()=>updateCart([...cart, props.item])}>Add to Cart</Button>

                }
            }
        </CartContext.Consumer>
    )
}

export default AddToCartButton

