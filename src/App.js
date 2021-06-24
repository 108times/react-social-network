import React from 'react';
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<div id='app'>
			<Header/>
			<Sidebar/>
			<Main/>
		</div>
	)
}


export default App