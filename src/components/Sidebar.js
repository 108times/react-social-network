import React from 'react';

const Sidebar = () => {
	return (
		<section className={'sidebar'}>
			<nav className={'navbar'}>
				<ul className={'links'}>
					<li className="item"><a href="">Profile</a></li>
					<li className="item"><a href="">Messages</a></li>
					{/*<li className="item"><a href=""></a></li>*/}
					{/*<li className="item"><a href="">Eius, fuga.</a></li>*/}
					{/*<li className="item"><a href="">Harum, nobis?</a></li>*/}
				</ul>
			</nav>
		</section>
	)
}

export default Sidebar