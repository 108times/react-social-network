import c from './Post.module.css'
import React from 'react';
import userImage from './user.svg'

const Post = ({
	message = 'Message text'
}) => {
	return (
		<div className={c.post}>
			<img className={c.avatar} src={userImage} alt=""/>
			<p className={c.message}>{message}</p>
			<div className={c.buttons}>

			</div>
		</div>
	)
}

export default Post