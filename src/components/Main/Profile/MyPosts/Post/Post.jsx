import c from './Post.module.css';
import React from 'react';
import userImage from './assets/user.svg';
import like from './assets/like.svg';
import liked from './assets/liked.svg';
import comments from './assets/comments.svg';
import Button from '../../../../Button/Button';


const Post = ({
	message = 'Message text',
	likesCount = 0,
}) => {
	return (
		<div className={ c.post }>
			<div className={ c.body }>
				<img className={ c.avatar } src={ userImage } alt=""/>
				<p className={ c.message }>{ message }</p>
			</div>
			<div className={ c.buttons }>
				<div className={ c.likes } >

					<Button text={
						<img className={ c.icon } src={ like }
							 alt="like button"/> }
							effects={ null }
							className={ c.btn }/>

					<span className={ c.count }>{ likesCount }</span>
				</div>
				<div className={ c.comments } >
					<Button text={
						<img className={ c.icon } src={ comments }
							 alt="like button"/> }
							className={ c.btn }
							effects={ null }/>
					<span className={ c.count }>{ likesCount }</span>
				</div>
			</div>
		</div>
	);
};

export default Post;