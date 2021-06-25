import c from './Banner.module.css';
import React from 'react';

const Banner = () => {
	return (
		<section className={c.banner}>
			<div className={c.overlay}></div>
			<img className={c.image} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
		</section>
	)
}

export default Banner