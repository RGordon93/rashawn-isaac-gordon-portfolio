import React from 'react';
import NukaCarousel from '../../Components/NukaCarousel/NukaCarousel'; 
import About from '../../Components/About/About'; 
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import Music from '../../Components/Music/Music';
import './Home.css';


const Home = () => {
    return (
			<>
				<NukaCarousel
				/>
				<About />
				<Portfolio />
                <Music />
				<Contact />
			</>
		);
};

export default Home;