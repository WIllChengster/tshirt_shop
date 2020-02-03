import React, { useState } from 'react';
import Navbar from './Navbar'
import Featured from './Featured';
import Item from './Item'
import 'typeface-roboto';
import './App.css';
import {CartContext} from '../context/cart-context'

const App = () => {

	const [cart, updateCart] = useState([]);

	

	return (
		<div>
			<CartContext.Provider value={({cart, updateCart})} >
				<Navbar/>
				<Item/>
			</CartContext.Provider>

		</div>
	);
}

export default App;
 