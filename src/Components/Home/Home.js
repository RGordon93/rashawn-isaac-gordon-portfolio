import React from 'react';
import NukaCarousel from '../../Components/NukaCarousel/NukaCarousel'; 
import About from '../../Components/About/About'; 
import Portfolio from '../../Components/Portfolio/Portfolio';
import './Home.css';


const Home = () => {
    return (
             <>
             <NukaCarousel className='photo-box'/>
             <About />
             <Portfolio />
             </>
				
		);
};

export default Home;