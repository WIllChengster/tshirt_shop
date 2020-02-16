import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { formatPrice } from '../helpers/pricing';

import { Paper, Button, Typography } from '@material-ui/core';
import { CardElement, injectStripe } from 'react-stripe-elements';


const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        margin: 'auto',
        padding: theme.spacing(6),
    }, margins: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    }
}))
const style = {
    base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
            color: "#aab7c4"
        }
    },
    invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
    }
};

const CheckoutForm = (props) => {
    const classes = useStyles();
    const {cart, updateCart} = useContext(CartContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting...')
        axios.post('/api/payments/paymentIntent', {cart: cart}).then(res => {
            props.stripe.confirmCardPayment(res.data, {
                payment_method: {
                    card: props.elements.getElement('card'),
                    billing_details: {
                        name: 'Jane Doe',
                    },
                }

            })
        })
    }
    const getSubtotal = (cart) => {
        let total = 0;
        for( let i = 0; i<cart.length; i++){
            total += cart[i].price
        }
        return formatPrice(total)
    }
    return (
        <Paper className={classes.root} >
            <Typography>
                Subtotal ({ cart.length } item{cart.length === 1 ? '': 's'}): ${getSubtotal(cart)}
            </Typography>
            <form onSubmit={handleSubmit} >
                <CardElement className={classes.margins} style={style} />
                <Button  >Submit</Button>
            </form>
        </Paper>
    )
}
export default injectStripe(CheckoutForm);