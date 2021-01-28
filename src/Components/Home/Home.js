import React from 'react';
import NukaCarousel from '../../Components/NukaCarousel/NukaCarousel'; 
import About from '../../Components/About/About'; 
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import Music from '../../Components/Music/Music';
import Footer from '../../Components/Footer/Footer';
import './Home.css';
import { FaChevronDown } from 'react-icons/fa';


const Home = () => {
    return (
			<>
				<NukaCarousel />
				<About />
				<FaChevronDown className='arrow hvr-icon-hang' />
				<Portfolio />
				<Music />
				<Contact />
				<Footer />
			</>
		);
};

export default Home;