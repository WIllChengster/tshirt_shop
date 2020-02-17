import React, { useContext } from 'react';
import { Elements } from 'react-stripe-elements';
import { Redirect } from 'react-router-dom';
import { CartContext } from '../context/cart-context'

import InjectedCheckoutForm from './CheckoutForm';

const Checkout = () => {
    const {cart} = useContext(CartContext)

    if(!cart.length){
        // return(<Redirect to="/cart"/>)
    }

    return (
        <Elements>
            <InjectedCheckoutForm />
        </Elements>
    )
}
export default Checkout