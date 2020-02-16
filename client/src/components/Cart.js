import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { makeStyles } from '@material-ui/core/styles';
import { formatPrice } from '../helpers/pricing';

import DeleteIcon from '@material-ui/icons/Delete';
import { Typography, Paper, Grid, IconButton, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'



const useStyles = makeStyles( theme => ({
    header: {
        textAlign: 'center'
    },
    cartContainer: {
        display: 'flex',
        flexDirection:'column',
        width: '100%',
        justifyContent: 'center',
        marginTop: theme.spacing(6),
    },
    cartItem: {
        width: '70%',
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 'auto',
        marginTop: theme.spacing(2),
    },
    pic: {
        height: '100px',
    },
    itemInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    itemInfoButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    checkoutButton: {
        backgroundColor: 'green',
        margin: 'auto',
        display: 'block'
    },
    checkoutComponent: {
        margin: 'auto',
        textAlign:'center'
    }
}))

const Cart = () => {

    const classes = useStyles();
    const {cart, updateCart} = useContext(CartContext)

    let deleteItem = (index) => {
        const cartClone = cart.slice();
        cartClone.splice(index, 1);
        updateCart( cartClone );

    }

    let quantifiedCart = (inputCart) => {
        const cartOutput = [];
        for(let i = 0; i < inputCart.length; i++){
             if(cartOutput.length === 0){
                cartOutput.push({
                    ...inputCart[i],
                    quantity: 1,
                })
                continue;
            }

            let itemFound = false;
            for(let j = 0; j < cartOutput.length; j++){
                if( inputCart[i].shirt_id === cartOutput[j].shirt_id ){
                    cartOutput[j].quantity += 1;
                    itemFound = true
                    break;
                }
            }

            if( !itemFound ) {
                cartOutput.push({
                    ...inputCart[i],
                    quantity: 1,
                })
            }
            
        }

        return cartOutput
    }

    let EmptyCartComponent = <Paper elevation={3} className={classes.cartItem}  >
            <Typography>Your Cart is empty</Typography>
            <Typography>Start Shopping!</Typography>
        </Paper>
    
    let CartMap = quantifiedCart(cart).map( (item, index) => {
        return(
            <Paper evelation={3} key={'cart_item' + index} className={classes.cartItem} > 
                <Grid container >
                    <Grid item xs={3} >
                        <img className={classes.pic} src={item.img} alt="t-shirt"/>
                    </Grid>
                    <Grid item xs={9} className={classes.itemInfo} >
                        <Typography>{item.name}</Typography>
                        <Typography>${formatPrice(item.price)} </Typography>
                        <div className={classes.itemInfoButtons} >
                            <Typography variant="caption" >Quantity: {item.quantity} </Typography>
                            <Button size="small" color="primary" component={Link} to={`/item/${item.shirt_id}`}>Product Page</Button>
                            <IconButton onClick={() => deleteItem(index)} >
                                <DeleteIcon/>
                            </IconButton>
                        </div>

                    </Grid>
                </Grid>
            </Paper>
        )
    } )

    const getSubtotal = (cart) => {
        let total = 0;
        for( let i = 0; i<cart.length; i++){
            total += cart[i].price
        }
        return formatPrice(total)
    }

    let checkoutComponent = <div className={classes.checkoutComponent} >
        <Typography>
            Subtotal ({ cart.length } item{cart.length === 1 ? '': 's'}): ${getSubtotal(cart)}
        </Typography>
        <Button className={classes.checkoutButton} component={Link} to="/checkout" variant="contained" size="large" color="primary" >Checkout</Button>
    </div>
    let CheckoutButton = cart.length > 0 ? checkoutComponent : <div/>

    let UserCart = cart.length > 0 ? CartMap : EmptyCartComponent

    return(
        <div>
            <div className={classes.cartContainer}>
                {CheckoutButton}
                {UserCart}
            </div>
        </div>
    )
}


export default Cart