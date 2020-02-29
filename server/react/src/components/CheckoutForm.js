import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { formatPrice } from '../helpers/pricing';
import CountrySelector from './countrySelector';
import { Button, Typography, CircularProgress, TextField } from '@material-ui/core';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { useHistory } from 'react-router-dom'
import { green } from '@material-ui/core/colors';
import { useCookies } from 'react-cookie'

const useStyles = makeStyles(theme => ({
    margins: {
        '& > *': {
            margin: theme.spacing(2.5),
        }
    },
    formContainer: {
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'white',
            width: '70%',
            padding: theme.spacing(6),
            margin: 'auto',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            borderRadius: '4px',
        }
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
    },
    button: {
        backgroundColor: green[500],
        display: 'block',
        margin: `${theme.spacing(3)}px 0 0 auto`,
        // marginTop: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
            marginTop: theme.spacing(3),

        },

    },
    inputContainer: {
        '& > *': {
            margin: theme.spacing(2.5),
            width: 150,
        },
        // display: 'flex',
        [theme.breakpoints.down('xs')]: {

            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            // alignItems: 'center',
            // flexDirection: 'column'
        }
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
        },
    },
    invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
    },

};


const CheckoutForm = (props) => {
    const [cookie, setCookie] = useCookies(['checkoutCart'])
    const history = useHistory();
    const classes = useStyles();
    const { cart, setCart } = useContext(CartContext)
    const [loading, toggleLoading] = useState(false)
    const [error, setError] = useState('')
    const [shipping, setShipping] = useState({
        street: '',
        postal_code: '',
        city: '',
        country: '',
        phone: '',
    })

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log('submitting...');
        toggleLoading(true)
        axios.post('/api/payments/paymentIntent', { cart: cart }).then(res => {
            props.stripe.confirmCardPayment(res.data, {
                payment_method: {
                    card: props.elements.getElement('card'),
                    billing_details: {
                        name: 'Jane Doe',
                        address: {
                            city: null,
                            country: null,
                            line1: null,
                            line2: null,
                            postal_code: "42424",
                            state: null
                        },
                    },
                },

            }).then(result => {
                if (result.error) {
                    setError(result.error.message);
                    toggleLoading(false)
                } else {
                    setError('');
                    setCookie('checkoutCart', cart)
                    history.push('/complete_checkout')
                }
            })
        })
    }
    const getSubtotal = (cart) => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price
        }
        return formatPrice(total)
    }

    const handleShipping = (event) => {
        console.log(event.target.value);
        setShipping({
            ...shipping,
            [event.target.id]: event.target.value
        })
    }
    const handleCountry = (value) => {
        if (!value) {
            setShipping({
                ...shipping,
                country: ''
            })
        } else {
            setShipping({
                ...shipping,
                country: value.label
            })
        }


    }

    const stripeHandle = (e) => {
        console.log(e)
    }
    console.log(shipping);

    return (
        <div className={classes.formContainer} >

            <form className={loading ? classes.formDim : ''} onSubmit={handleSubmit} >
                <Typography>Billing Details</Typography>
                <Typography variant="subtitle2" >
                    You can copy and paste the following test cards to trigger different scenarios:
                </Typography>
                <Typography variant="subtitle2">Default US card:	4242 4242 4242 4242</Typography>
                <Typography variant="subtitle2">Authentication required:	4000 0027 6000 3184</Typography>
                <Typography variant="subtitle2" >
                    exp, cvc, and zip can be anything
                </Typography>
                <div className={classes.margins}>
                    <Typography>
                        Subtotal ({cart.length} item{cart.length === 1 ? '' : 's'}): ${getSubtotal(cart)}
                    </Typography>
                    <CardElement onChange={stripeHandle} style={style} />
                    <Typography variant="subtitle1" color="error">{error}</Typography>

                </div>

                <Typography>Shipping Address</Typography>

                <div className={`${classes.inputContainer}`} >
                    <TextField onChange={(e) => handleShipping(e)} value={shipping.street} id="street" label="Street Address" required />
                    <TextField onChange={(e) => handleShipping(e)} value={shipping.postal_code} id="postal_code" label="Postal Code" type="number" required />
                    <TextField onChange={(e) => handleShipping(e)} value={shipping.city} id="city" label="City" required />
                    <CountrySelector changeMethod={(val) => handleCountry(val)} value={shipping.country} id="country" required />
                    <TextField onChange={(e) => handleShipping(e)} value={shipping.phone} id="phone" label="Phone Number" type="number" required />
                </div>
                <Button className={classes.button} variant="contained" type="submit" >Complete Purchase</Button>
            </form>
            <div className={loading ? classes.spinnerContainer : classes.nospinner} >
                <CircularProgress />
            </div>
        </div>

    )
}
export default injectStripe(CheckoutForm);