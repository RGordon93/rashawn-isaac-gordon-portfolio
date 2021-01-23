import React from 'react';
import image from '../../images/image.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.jpg';
import image6 from '../../images/image6.jpg';
import Carousel from 'nuka-carousel';
import './NukaCarousel.css';

const NukaCarousel = () => {
    return (
			<div>
				<Carousel
					withoutControls={true}
					autoplay={true}
					autoplayInterval={3000}>
					<img className='photo' src={image6}></img>
					<img className='photo' src={image2}></img>
					<img className='photo' src={image3}></img>
					{/* <img className='photo' src={image4}></img> */}
					{/* <img className='photo' src={image5}></img> */}
				</Carousel>
			</div>
		);
};

export default NukaCarousel;