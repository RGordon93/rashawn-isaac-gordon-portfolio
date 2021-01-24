import React from 'react';
import './Contact.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineFile } from 'react-icons/ai';


const Contact = () => {
    return (
			<div className='contact-links'>
				<h2 className='contact-title'>C O N T A C T</h2>
				<p className='contact-paragraph'>
					Looking forward to speaking with you
				</p>
				<AiFillLinkedin className='linkedin-logo' />
				<a
					className='linkedin-link'
					href='https://www.linkedin.com/in/rashawn-isaac-gordon/'
					style={{ color: 'black' }}
					target='_blank'>
					LINKEDIN
				</a>
				<AiFillGithub className='github-logo' />
				<a
					className='github-link'
					href='https://github.com/RGordon93'
					style={{ color: 'black' }}
					target='_blank'>
					GITHUB
				</a>
				<AiOutlineFile className='resume-logo' />
				<a
					className='resume-link'
					href=''
					style={{ color: 'black' }}
					target='_blank'>
					RESUME
				</a>
			</div>
		);
};

export default Contact;