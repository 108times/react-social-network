import React from 'react';
import c from './Sidebar.module.css'
import './Sidebar.css'
import rippleEffect from '../Effects/RippleEffect/RippleEffect';

const itemClick = e => {
	const currentlyActive = document.querySelector(`.${c.link}.${c.active}`)
	currentlyActive && currentlyActive.classList.remove(c.active)
	e.target.classList.add(c.active)
}

const Sidebar = () => {
	return (
			<nav className={c.sidebar}>
				<ul className={c.items}>
					<li className={c.item} ><a data-effects='click-ripple,' onClick={itemClick} className={`${c.link} ${c.active}`} href="#Profile">Profile</a></li>
					<li className={c.item} ><a data-effects='click-ripple,' onClick={itemClick} className={c.link} href="#Messages">Messages</a></li>
					<li className={c.item} ><a data-effects='click-ripple,' onClick={itemClick} className={c.link} href="#News">News</a></li>
					<li className={c.item} ><a data-effects='click-ripple,' onClick={itemClick} className={c.link} href="#Music">Music</a></li>
					<li className={c.item} ><a data-effects='click-ripple,' onClick={itemClick} className={c.link} href="#Settings">Settings</a></li>
				</ul>
			</nav>
	)
}




export default Sidebar