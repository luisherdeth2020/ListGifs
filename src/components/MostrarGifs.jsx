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
function MostrarGifs({ keyword }) {
	const [figura, setFigura] = useState([]);
	function getGifsObjetc({ keyword = 'panda' } = {}) {
		const apiKey = `LMKcBVBub91y9rp048zM7xM9FkhdT8Zq`;
		const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
		return fetch(apiURL)
			.then((response) => response.json())
			.then((resp) => {
				const { data = [] } = resp;
				const obtenerGifs = getArray(data);
				setFigura(obtenerGifs);
			});
	}

	useEffect(() => {
		getGifsObjetc({ keyword });
	}, []);

	return (
		<>
			<Search />
			<ListGifs listadeGifs={figura} />
		</>
	);
}

export default MostrarGifs;
