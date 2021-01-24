import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Rigga-Mortis-Logo.png';
import logo2 from '../../images/SOFAS-LOGO-1.png';



const Header = () => {
    return (
			<div>
				<img className='logo2' src={logo2}></img>
				<ul className='header-items'>
					<li>
						<Link to='/' style={{ color: '#ff6542', textDecoration: 'none' }}>
							HOME
						</Link>
					</li>
					{/* <li>
						<Link
							to='/about'
							style={{ color: 'black', textDecoration: 'none' }}>
							ABOUT
						</Link>
					</li> */}
					<li>
						<Link
							to='/portfolio'
							style={{ color: '#ff6542', textDecoration: 'none' }}>
							PORTFOLIO
						</Link>
					</li>
					<li>
						<Link
							to='/music'
							style={{ color: '#ff6542', textDecoration: 'none' }}>
							MUSIC
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							style={{ color: '#ff6542', textDecoration: 'none' }}>
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
		);
};

export default Header;