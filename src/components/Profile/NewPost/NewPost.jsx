import c from './NewPost.module.css'
import React from 'react';
import Button from '../../Button/Button';

const NewPost = () => {
	return (
		<div className={c['new-post']}>
			<textarea className={c.text} name="new-post-message" id="" cols="30" rows="10" placeholder='Got something new?'></textarea>
			<Button className='primary' text={'Got something new?'}/>
		</div>
	)
}

export default NewPost