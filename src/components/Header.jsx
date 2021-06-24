import React from 'react';
import './Header.css'
import svg from '../a.svg'

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<img className='logo-img' src={svg} alt="" width='40' height='40'/>
			</div>
		</header>
	)
}

export default Header