import { useState, useEffect } from 'react';
import ListGifs from './ListGifs';

function getArray(item) {
	const gifs = item.map((figura) => ({
		url: figura.images.downsized_medium.url,
		title: figura.title,
		id: figura.id,
	}));
	return gifs;
}
const apiKey = `LMKcBVBub91y9rp048zM7xM9FkhdT8Zq`;
function GetGifsObjetc({ keyword = 'panda' } = {}) {
	const [figura, setFigura] = useState([]);
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

	fetch(apiURL)
		.then((response) => response.json())
		.then((resp) => {
			const { data = [] } = resp;
			const obtenerGifs = getArray(data);
			setFigura(obtenerGifs);
		});
	return <ListGifs listadeGifs={figura} />;
}
useEffect(() => {
	GetGifsObjetc({ keyword: 'messi' });
}, []);

export default GetGifsObjetc;
