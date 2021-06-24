import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))

const setTheme = color => document.documentElement.className = color

setTheme('light')


const MyComponent = (
	<main>
		<h1 id='title'>Look ma!</h1>
	</main>
)
console.log(MyComponent)