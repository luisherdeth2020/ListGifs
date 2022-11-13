import MostrarGifs from '../components/MostrarGifs';
import { BrowserRouter, Routes, Route, useSearchParams, Navigate } from 'react-router-dom';

function App() {
	const query = useSearchParams();
	const search = query.get('search');

	const debouncedSearch = useDebounse(search, 300);
	return (
		// <Search />
		// <BrowserRouter>
		<Header>
			<Routes>
				{/* <Route path="/" element={<MostrarGifs />} /> */}
				<Route path="/" element={<MostrarGifs key={debouncedSearch} keyword="messi" />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Header>
		// </BrowserRouter>
	);
}

export default App;
// npm i gh-pages
// npm run build
// npm run deploy
