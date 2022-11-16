import { useState, useEffect } from 'react';
import ListGifs from './ListGifs';
import Search from './Search';

function getArray(item) {
	const gifs = item.map((figura) => ({
		url: figura.images.downsized_medium.url,
		title: figura.title,
		id: figura.id,
	}));
	return gifs;
}

async function fetchData(keyword) {
	const apiKey = `LMKcBVBub91y9rp048zM7xM9FkhdT8Zq`;
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=12&offset=0&rating=g&lang=en`;
	const response = await fetch(apiURL);
	const responseJson = await response.json();
	const { data = [] } = responseJson;
	return getArray(data);
}

function MostrarGifs({ keyword }) {
	const [figura, setFigura] = useState([]);
	const [query, setQuery] = useState('');
	const [isSubmit, setIsSubmit] = useState(false);

	// Manipular consulta
	const handleQuery = (e) => {
		setQuery(e.target.value);
	};
	// Busqueda
	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim().length <= 0) {
			document.getElementById('jose').style.borderColor = '1px solid #dc3545';

			document.querySelector('.error__input').innerHTML = '¡No puede estar vacío!😭';
			setIsSubmit(false);
		} else {
			document.getElementById('jose').style.borderColor = 'green';
			document.getElementById('test').innerHTML = '';
			setIsSubmit(true);
		}
	};
	useEffect(() => {
		fetchData(keyword)
		.then((data) => {
			setFigura(data);
		});
	}, []);

	useEffect(() => {
		if (isSubmit) {
			fetchData(query)
			.then((data) => {
				setFigura(data);
				setIsSubmit(false);
			});
		}
	}, [isSubmit]);

	return (
		<>
			<Search query={query} handleSearch={handleSearch} handleQuery={handleQuery} />
			<ListGifs listadeGifs={figura} />
		</>
	);
}

export default MostrarGifs;
