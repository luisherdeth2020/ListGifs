import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

function Search({handleSearch,query,handleQuery}) {
	
	return (
		<form className={styles.search__container} onSubmit={handleSearch}>
			<div className={styles.search__box}>
				<input
					className={styles.search__input}
					type="text"
					value={query}
					autoFocus
					placeholder='Title'
					aria-label="Search Giphys"
					onChange={handleQuery}
				/>
				<button className={styles.search__button} type="submit">
					<FaSearch size={20} />
				</button>
			</div>
		</form>
	);
}
export default Search;
// Deuda técnica