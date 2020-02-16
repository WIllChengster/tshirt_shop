import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { formatPrice } from '../helpers/pricing';

import { Paper, Button, Typography, CircularProgress } from '@material-ui/core';
import { CardElement, injectStripe } from 'react-stripe-elements';


const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        margin: 'auto',
        padding: theme.spacing(6),
    }, 
    margins: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    }, 
    formContainer: {
        position:'relative'
    },
    spinnerContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    formDim: {
        opacity: .3
    },
    nospinner: {
        display: 'none',
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
    },

};

const CheckoutForm = (props) => {
    const classes = useStyles();
    const {cart} = useContext(CartContext)
    const [loading, toggleLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting...')
        toggleLoading(true)
        axios.post('/api/payments/paymentIntent', {cart: cart}).then(res => {
            props.stripe.confirmCardPayment(res.data, {
                payment_method: {
                    card: props.elements.getElement('card'),
                    billing_details: {
                        name: 'Jane Doe',
                    },
                }
            }).then( result => {
                if(result.error){
                    setError(result.error.message);
                } else {
                    setError('');
                    console.log(result.paymentIntent)
                }
                toggleLoading(false)
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
            <div className={classes.formContainer} >
                <form className={ (loading) ? classes.formDim : ''} onSubmit={handleSubmit} >
                    <div className={classes.margins}>
                        <CardElement  style={style} />
                        <Typography variant="subtitle1" color="error">{error}</Typography>
                    </div>
                    <Button variant="contained" type="submit" >Submit</Button>
                </form>
                <div className={loading ? classes.spinnerContainer: classes.nospinner} >
                    <CircularProgress/>
                </div>
            </div>

        </Paper>
    )
}
export default injectStripe(CheckoutForm);