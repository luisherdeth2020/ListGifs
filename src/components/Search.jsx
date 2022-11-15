import styles from './Search.module.css';
import './global.css'
import { FaSearch } from 'react-icons/fa';

function Search({ query, handleQuery, handleSearch }) {
	return (
		<>
			<form className={styles.container} onSubmit={handleSearch}>
				<div className={styles.search__box}>
					<input
						className={styles.search__input} id="jose"
						type="text"
						value={query}
						autoFocus
						placeholder="Search Giphy"
						aria-label="Search Giphys"
						onChange={handleQuery}
					/>
					<button className={styles.search__button} type="submit">
						<FaSearch size={20} />
					</button>
				</div>
			<div id="test" className="error__input"></div>
			</form>
		</>
	);
}
export default Search;
// Deuda técnica
