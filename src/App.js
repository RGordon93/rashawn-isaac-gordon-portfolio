import './App.css';
import React from 'react';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Music from './Components/Music/Music';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  return (
		<Router>
			<div>
				<Header />
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/portfolio' exact component={Portfolio} />
				<Route path='/music' exact component={Music} />
				<Route path='/contact' exact component={Contact} />
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
