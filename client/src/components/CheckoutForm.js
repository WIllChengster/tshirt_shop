import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import { CardElement } from 'react-stripe-elements';


const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        margin: 'auto',
        padding: theme.spacing(6),
    }
}))

const CheckoutForm = (props) => {
    console.log(props);
    const classes = useStyles();
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
    return (
        <Paper className={classes.root} >
            <CardElement style={style}/>
        </Paper>
    )
}
export default CheckoutForm