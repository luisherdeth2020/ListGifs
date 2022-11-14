import MostrarGifs from '../components/MostrarGifs';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	// const query = useSearchParams();
	// const search = query.get('search');

	// const debouncedSearch = useDebounse(search, 300);
	return (
		<BrowserRouter>
			<Routes>
				{/* <Search /> */}
				{/* <Route path="/" element={<MostrarGifs />} /> */}
				<Route path="/" index element={<MostrarGifs keyword="messi" />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
// npm i gh-pages
// npm run build
// npm run deploy
