import React from 'react';
import ReactPlayer from 'react-player';
import './Music.css';

const Music = () => {
    return (
			<div>
				<h2 className='video-title'>MUSIC VIDEOS</h2>
				<ReactPlayer
					className='epidemic-video'
					style={{
						border: '50px solid black',
						borderWidth: '30px',
					}}
					url='https://youtu.be/NJIgs6ZFN4s'
				/>
				<h3 className='epidemic-title'>"E P I D E M I C" 🇺🇸</h3> 
				<p className='epidemic-description'>
					End Police Brutality, environmental racism and systemic racism
				</p>
				<p className='epidemic-description'>Directed by Herman Jean-Noel</p>
				<p className='epidemic-description'>✍🏿 by Rashawn Isaac Gordon</p>
			</div>
		);
};

export default Music;