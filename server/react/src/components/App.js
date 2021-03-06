import React, { useState, useEffect } from 'react';
import { CartContext } from '../context/cart-context';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
import Navbar from './Navbar';
import Cart from './Cart';
import ItemGenerator from './ItemGenerator';
import ItemPage from './ItemPage';
import Checkout from './Checkout';
import CompleteCheckout from './CompleteCheckout';
import Registration from './Registration';
import { StripeProvider } from 'react-stripe-elements';
import { useCookies } from 'react-cookie';

import 'typeface-roboto';
import './App.css';

const useStyles = makeStyles( theme => ({
	container: {
		paddingTop: theme.spacing(2),
	},
	body: {
		backgroundColor: "#ffe7e7b0",
		minHeight: '100vh',
	}
}));

const App = () => {

	const classes = useStyles();

	const [cart, updateCart] = useState([]);
	const [cookie, setCookie] = useCookies(['cookie-cart'])


    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe('pk_test_9bOOBTZK3NSPutiIrXeRty8800jBF7EbxL'));
        } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
                // Create Stripe instance once Stripe.js loads
                setStripe(window.Stripe('pk_test_9bOOBTZK3NSPutiIrXeRty8800jBF7EbxL'));
            });
        }
	}, []);

	useEffect( () => {
		if(cart.length === 0){
			updateCart(cookie['cookie-cart'])
		} 
		console.log('set cookie')
	}, []);

	useEffect( () => {
		setCookie('cookie-cart', cart)
	},[cart.length])

	
	return (
		<StripeProvider stripe={stripe} >
		
			<div className={classes.body} >
				<CartContext.Provider value={({cart, updateCart})} >
					<Navbar/>
					<Container className={classes.container} >

						<Route exact path="/" >
							<ItemGenerator/>
						</Route>

						<Route path="/item/:id">
							<ItemPage/>
						</Route>

						<Route path="/cart">
							<Cart/>
						</Route>

						<Route path="/checkout">
							<Checkout/>
						</Route>

						<Route path="/complete_checkout" >
							<CompleteCheckout/>
						</Route>
						
						<Route path="/signup">
							<Registration/>
						</Route>

					</Container>

				</CartContext.Provider>

			</div>
		</StripeProvider>
	);
}

export default App;
 