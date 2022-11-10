import { useState, useEffect } from 'react';
import ListGifs from './ListGifs';

const [figura, setFigura] = useState([]);

function getArray(item) {
	const gifs = item.map((figura) => ({
		url: figura.images.downsized_medium.url,
		title: figura.title,
		id: figura.id,
	}));
	return gifs;
}
function MostrarGifs() {
	function getGifsObjetc({ keyword = 'panda' } = {}) {
		const apiKey = `LMKcBVBub91y9rp048zM7xM9FkhdT8Zq`;
		const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
		return fetch(apiURL)
			.then((response) => response.json())
			.then((resp) => {
				const { data = [] } = resp;
				const obtenerGifs = getArray(data);
				// return obtenerGifs;
				setFigura(obtenerGifs);
			});
	}

	useEffect(() => {
		getGifsObjetc(apiURL)
		// getGifsObjetc({ keyword: 'messi' }).then((figura) => setFigura(figura));
	}, []);

	return <ListGifs listadeGifs={figura} />;
}

export default MostrarGifs;
