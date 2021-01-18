import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Rigga-Mortis-Logo.png';



const Header = () => {
    return (
			<div>
				<img className='logo' src={logo}></img>
				<ul className='header-items'>
					<li>
						<Link to='/' style={{ color: '#0E41FB', textDecoration: 'none' }}>
							HOME
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							style={{ color: '#0E41FB', textDecoration: 'none' }}>
							ABOUT
						</Link>
					</li>
					<li>
						<Link
							to='/portfolio'
							style={{ color: '#0E41FB', textDecoration: 'none' }}>
							Programming
						</Link>
					</li>
					<li>
						<Link
							to='/music'
							style={{ color: '#0E41FB', textDecoration: 'none' }}>
							MUSIC
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							style={{ color: '#0E41FB', textDecoration: 'none' }}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		);
};

export default Header;