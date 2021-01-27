import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Rigga-Mortis-Logo.png';
import logo2 from '../../images/SOFAS-LOGO-1.png';



const Header = () => {
    return (
			<div className="header">
				<img className='logo2' src={logo2}></img>
				<ul className='header-items'>
					<li className='header-home'>
						<Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
							HOME
						</Link>
					</li>
					{/* <li>
						<Link
							to='/about'
							style={{ color: '#ff6542', textDecoration: 'none' }}>
							ABOUT
						</Link>
					</li> */}
					<li className='header-portfolio'>
						<Link
							to='/portfolio'
							style={{ color: 'black', textDecoration: 'none' }}>
							PORTFOLIO
						</Link>
					</li>
					<li className='header-music'>
						<Link
							to='/music'
							style={{ color: 'black', textDecoration: 'none' }}>
							MUSIC
						</Link>
					</li>
					<li className='header-contact'>
						<Link
							to='/contact'
							style={{ color: 'black', textDecoration: 'none' }}>
							CONTACT
						</Link>
					</li>
				</ul>
                
				
			</div>
		);
};

export default Header;