import './App.css';
import React from 'react';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
		<Router>
			<div>
				<Header />
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/contact' exact component={Contact} />
			</div>
		</Router>
	);
}

export default App;
