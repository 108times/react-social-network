import React from 'react'
import c from './Main.module.css'
import Profile from './Profile/Profile';

const Main = () => {
	return (
		<main className={c.content}>
			<Profile/>
		</main>
	)
}



export default Main