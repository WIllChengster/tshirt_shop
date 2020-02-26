import React, { useContext, useEffect } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../context/cart-context';
import { formatPrice, getSubtotal } from '../helpers/pricing';
import quantifiedCart from '../helpers/quantifyCart';
import { useHistory, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie'


const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        padding: theme.spacing(6),
        [theme.breakpoints.up('xs')]: {
            width: '80%'
        },
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    total: {
        marginTop: theme.spacing(3)
    },
    noBorder: {
        border: "none"
    },
    spacing: {
        '&>*': {
            borderBottom: '1.5px double'
        }
    },
}))


const CompleteCheckout = () => {
    const { cart, updateCart } = useContext(CartContext);
    const [cookie, setCookie] = useCookies(['checkoutCart'])
    let newCart = cookie.checkoutCart;
    console.log(cookie)


    useEffect(() => {
        console.log('update cart')
        updateCart([])
    }, [])


    const classes = useStyles()
    const history = useHistory()


    const invoiceSubtotal = getSubtotal(newCart, false);
    return (
        <Paper className={classes.root} >
            <Typography variant="h5" >Thank you for your purchase!</Typography>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                    </TableRow>
                    <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Price ($)</TableCell>
                        <TableCell align="right">Sum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {quantifiedCart(newCart).map((item, index) => (
                        <TableRow key={index} className={index === quantifiedCart(cart).length - 1 ? classes.spacing : ''} >
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.quantity}</TableCell>
                            <TableCell align="right">${formatPrice(item.price)}</TableCell>
                            <TableCell align="right">${formatPrice(item.price * item.quantity)}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow >
                        <TableCell className={classes.noBorder} >
                            &nbsp;
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} />
                        <TableCell rowSpan={2}>Total</TableCell>
                        <TableCell align="right">${formatPrice(invoiceSubtotal)}</TableCell>
                    </TableRow>
                </TableBody>

            </Table>

            <Button onClick={() => history.push('/')} variant="contained">Continue Shopping</Button>
        </Paper>
    )

}

export default CompleteCheckout