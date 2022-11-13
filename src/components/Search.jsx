import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
function Search() {
	const [query, setQuery] = useSearchParams();
	const search = query.get('search');
	// const navigate = useNavigate()
	const hundledSubmit = (e) => {
		e.preventDefault();
		// navigate('/?search=' + searchText);
	};
	return (
		<form className={styles.search__container} onSubmit={hundledSubmit}>
			<div className={styles.search__box}>
				<input
					className={styles.search__input}
					type="text"
					value={search ?? ''}
					autoFocus
					placeholder='Title'
					aria-label="Search Giphys"
					onChange={(e) => {
						const valor = e.target.value;
						setQuery({ search: valor });
						// navigate('/?search=' + valuu);
					}}
				/>
				<button className={styles.search__button} type="submit">
					<FaSearch size={20} />
				</button>
			</div>
		</form>
	);
}
export default Search;
