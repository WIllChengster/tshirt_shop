import React, { useState } from 'react';
import { CartContext } from '../context/cart-context';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';
import Cart from './Cart';
import ItemGenerator from './ItemGenerator';

import 'typeface-roboto';
import './App.css';

const App = () => {

	const [cart, updateCart] = useState([]);

	

	return (
		<div>
			<CartContext.Provider value={({cart, updateCart})} >
				<Navbar/>

				<Route exact path="/" >
					<ItemGenerator/>
				</Route>

				<Route path="/cart">
					<Cart/>
				</Route>

			</CartContext.Provider>

		</div>
	);
}

export default App;
 