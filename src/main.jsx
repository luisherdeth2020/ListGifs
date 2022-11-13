import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App  from './page/App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// ReactDOM.render(
// 	<BrowserRouter>
// 		<Routes>
// 			<Route path="/" element={<App />} />
// 			<Route path="*" element={<Navigate replace to="/" />} />
// 		</Routes>
// 	</BrowserRouter>,
// 	document.getElementById('root')
// );
