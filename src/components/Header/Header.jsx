import React from 'react';
import c from './Header.module.css'
import svg from './a.svg'


const Header = () => {
	return (
		<header className={c.header} >
			<div className={c.logo} data-effects='click-ripple,'>
				<img alt='logo' className={c.image} src={svg} width='30' height='30'/>
			</div>
		</header>
	)
}

export default Header