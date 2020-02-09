import React, { useState } from 'react';
import { CartContext } from '../context/cart-context';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'

import { Container } from '@material-ui/core'
import Navbar from './Navbar';
import Cart from './Cart';
import ItemGenerator from './ItemGenerator';
import ItemPage from './ItemPage';
import Checkout from './Checkout'


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

	

	return (
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
					
				</Container>

			</CartContext.Provider>

		</div>
	);
}

export default App;
 