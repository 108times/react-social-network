import React from 'react';
import c from './Header.module.css'
import svg from '../a.svg'


const Header = () => {
	return (
		<header className={c.header}>
			<div className={c.logo}>
				<img className={c.image} src={svg} alt="" width='30' height='30'/>
			</div>
		</header>
	)
}

export default Header