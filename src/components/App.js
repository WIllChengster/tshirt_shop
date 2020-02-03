import React from 'react';
import Navbar from './Navbar'
import Featured from './Featured';
import Item from './Item'
import 'typeface-roboto';
import './App.css';

function App() {
	return (
		<div>
			<Navbar/>
			{/* <Featured/> */}
			<Item/>
		</div>
	);
}

export default App;
 