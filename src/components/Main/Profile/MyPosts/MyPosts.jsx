import c from './MyPosts.module.css'
import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';


const MyPosts = props => {
	return (
		<section className={c.content}>

			<h1 className={c.heading}>My posts</h1>

			<NewPost/>

			<div className={c.posts}>
				<Post message={`Hello! i agree.`}/>
				<Post message={`It is my first time visiting this website.`}/>
				<Post message={`I enjoy this place!!!`}/>
			</div>

		</section>
	)
}

export default MyPosts