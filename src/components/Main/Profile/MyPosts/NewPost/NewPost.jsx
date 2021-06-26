import c from './NewPost.module.css'
import React from 'react';
import Button from '../../../../Button/Button';

const clickHandler = e => {
	console.log(e)
	const options = document.querySelector('.' + c.options)
	options.classList.add(c.shown)


	e.target.addEventListener('onmouseout', function handler(e) {
		console.log('qee')
		options.classList.remove(c.shown)

	}, {
		once: true
	})
}

const NewPost = () => {
	return (
		<div className={c['new-post']} onClick={clickHandler}>
			<textarea className={c.text} name="new-post-message" id="" cols="30" rows="10" placeholder='Got something new?'></textarea>
			<div className={c.options} data-shown={false}>
				<Button  className={`primary ${c.btn}`} text={'Publish'}/>
			</div>
		</div>
	)
}

export default NewPost