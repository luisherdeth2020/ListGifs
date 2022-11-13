// import { App } from './pages';

function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default Index;
