import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

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