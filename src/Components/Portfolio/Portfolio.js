import React from 'react';
import './Portfolio.css'
import spaceman from '../../images/Spaceman-1.png'
import curatr from '../../images/Curatr-1.png'

const Portfolio = () => {
    return (
			<div>
				<h2 className='portfolio-title'>PROJECT #1</h2>
				<img
					className='spaceman-image hvr-wobble-to-bottom-right'
					// style={{
					// 	border: '50px solid black',
					// 	borderWidth: '30px',
					// }}
					src={spaceman}></img>
				<h4 className='project-title-1'>"S P A C E M A N"</h4>
				<p className='project-description'>
					Complex game using Vanilla Javascript, CSS & HTML
				</p>
				<a
					className='project-link'
					href='https://rgordon93.github.io/spaceman-project-1/'
					target='_blank'
					style={{ color: 'black', textDecoration: 'none' }}>
					D E M O
				</a>
				<a
					className='code-link'
					href='https://github.com/RGordon93/spaceman-project-1'
					target='_blank'
					style={{ color: 'black', textDecoration: 'none' }}>
					C O D E
				</a>
				<h2 className='portfolio-title'>PROJECT #2</h2>
				<img
					className='curatr-image hvr-wobble-to-bottom-right'
					src={curatr}
					style={{
						border: '50px solid black',
						borderWidth: '30px',
					}}></img>
				<h4 className='project-title-1'>"C U R A T R"</h4>
				<p className='project-description'>
					Fullstack MERN react app using mongoDB
				</p>
				<a
					className='project-link'
					href='https://curatrp3ga.herokuapp.com/'
					target='_blank'
					style={{ color: 'black', textDecoration: 'none' }}>
					D E M O
				</a>
				<a
					className='code-link'
					href='https://github.com/Davinki-Coders/Project-3-fe'
					target='_blank'
					style={{
						color: 'black',
						textDecoration: 'none',
					}}>
					F R O N T E N D
				</a>
				<a
					className='code-link'
					href='https://github.com/Davinki-Coders/Project-3-be'
					target='_blank'
					style={{
						color: 'black',
						textDecoration: 'none',
					}}>
					B A C K E N D
				</a>
			</div>
		);
};

export default Portfolio;