import React from 'react';
import image from '../../images/image.jpg';

const Home = () => {
    return (
			<div>
				<h1>Home</h1>
				<img className='photo' src={image}></img>
			</div>
		);
};

export default Home;