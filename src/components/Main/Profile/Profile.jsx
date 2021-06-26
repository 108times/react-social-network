import React from 'react';
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Banner from './Banner/Banner';

const Profile = () => {
	return (
		<div className={c.profile}>
			<Banner/>

			<section className={c.info}>
				ava + description
			</section>

			<MyPosts/>
		</div>
	)
}

export default Profile