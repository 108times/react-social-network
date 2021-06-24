import React from 'react';
import c from './Sidebar.module.css'

const Sidebar = () => {
	return (
			<nav className={c.sidebar}>
				<ul className={c.items}>
					<li className={c.item}><a className={c.link} href="">Profile</a></li>
					<li className={c.item}><a className={c.link} href="">Messages</a></li>
					<li className={c.item}><a className={c.link} href="">News</a></li>
					<li className={c.item}><a className={c.link} href="">Music</a></li>
					<li className={c.item}><a className={c.link} href="">Settings</a></li>
				</ul>
			</nav>
	)
}

export default Sidebar