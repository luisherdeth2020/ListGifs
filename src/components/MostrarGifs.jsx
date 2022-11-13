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

async function fetchData(keyword){
	const apiKey = `LMKcBVBub91y9rp048zM7xM9FkhdT8Zq`;
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
	const response = await fetch(apiURL)
	const responseJson = await response.json()
	const { data = [] } = responseJson;
	return getArray(data)
}


function MostrarGifs({ keyword }) {
	const [figura, setFigura] = useState([]);
	const [query, setQuery] = useState("")
	const [isSubmit,setIsSubmit] = useState(false);

	const handleQuery = (e)=>{
		setQuery(e.target.value)
	}
	const handleSearch = (e)=>{
		e.preventDefault()
		setIsSubmit(true)
	}
	useEffect(()=>{
		fetchData(keyword)
			.then(data=>{
				setFigura(data)
			})
	},[keyword])

	useEffect(() => {
		if(isSubmit){
			fetchData(query)
			.then(data=>{
				setFigura(data)
				setIsSubmit(false)
			})
		}
		
	}, [isSubmit]);

	return (
		<>
			<Search  
				handleSearch={handleSearch}
				handleQuery={handleQuery}
				query={query}
				/>
			<ListGifs listadeGifs={figura} />
		</>
	);
}

export default MostrarGifs;
