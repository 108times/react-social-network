import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import rippleEffect from './components/Effects/RippleEffect/RippleEffect';


ReactDOM.render(<App/>, document.getElementById('root'))

const setTheme = color => document.documentElement.className = color

setTheme('light')


// apply effects
// effects example -> data-effects = ['click-ripple, eventName-handlerName]'
const effects = {
	'ripple' : rippleEffect
}

const elementsWithEffects = document.querySelectorAll('[data-effects]')
elementsWithEffects.forEach((element) => {
	const elEffects = element.dataset.effects.split(',')
		for (let eff of elEffects) {
			const [eventName, handlerName] = [...eff.split('-')]
			const handler = effects[handlerName]
			element.addEventListener(eventName, handler)
		}

})

// const MyComponent = (
// 	<main>
// 		<h1 id='title'>Look ma!</h1>
// 	</main>
// )
// console.log(MyComponent)