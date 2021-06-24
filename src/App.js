import React from 'react';
import c from './App.module.css'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
	return (
		<div id='app' className={c.app}>
			<Header/>
			<Sidebar/>
			<Main/>
		</div>
	)
}


export default App