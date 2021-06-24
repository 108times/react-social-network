import React from 'react';
import './App.css'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<Sidebar/>
			<Main/>
		</div>
	)
}


export default App