import './Button.css'
import React from 'react';


const Button = ({
	text = 'Btn text',
	onclick = null,
	classList = ['secondary'],
	effects = ['click-ripple'],
	className = null
} = {}) => {
	return (
		<button onClick={onclick} data-effects = {effects.join(',')}  className={`btn ${(className ?? classList.join(' '))}`}>
			<span className='btn-text'>{text}</span>
		</button>
	)
}

export default Button