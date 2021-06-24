import React from 'react';
import rippleEffect , {setOffsetAttributes} from '../utils/RippleEffect';
import c from './Sidebar.module.css'

const itemClick = e => {
	rippleEffect(e)
	const currentlyActive = document.querySelector(`.${c.link}.${c.active}`)
	currentlyActive && currentlyActive.classList.remove(c.active)
	e.target.classList.add(c.active)
}

const Sidebar = () => {
	return (
			<nav className={c.sidebar}>
				<ul className={c.items}>
					<li className={c.item} ><a onClick={itemClick} className={`${c.link} ${c.active}`} href="#Profile">Profile</a></li>
					<li className={c.item} ><a onClick={itemClick} className={c.link} href="#Messages">Messages</a></li>
					<li className={c.item} ><a onClick={itemClick} className={c.link} href="#News">News</a></li>
					<li className={c.item} ><a onClick={itemClick} className={c.link} href="#Music">Music</a></li>
					<li className={c.item} ><a onClick={itemClick} className={c.link} href="#Settings">Settings</a></li>
				</ul>
			</nav>
	)
}




export default Sidebar