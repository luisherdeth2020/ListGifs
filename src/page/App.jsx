import MostrarGifs from '../components/MostrarGifs';
import { BrowserRouter, Routes, Route, useSearchParams, Navigate } from 'react-router-dom';

// import { useLocation } from 'react-router-dom';

function App() {
	// const query = useSearchParams();
	// const search = query.get('search');

	// const debouncedSearch = useDebounse(search, 300);
	return (
		<BrowserRouter>
			<Routes>
				{/* <Search /> */}
				{/* <Route path="/" element={<MostrarGifs />} /> */}
				<Route path="/" element={<MostrarGifs  keyword="messi" />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
// npm i gh-pages
// npm run build
// npm run deploy
