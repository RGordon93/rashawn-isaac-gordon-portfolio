import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import image from '../../images/Rigga-Mortis-Logo.png';

const Header = () => {
    return (
			<div>
                <img className="logo" src={image}></img>
				<ul className="header-items">
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		);
};

export default Header;