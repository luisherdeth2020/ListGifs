import styles from './ListGifs.module.css';

const ListGifs = ({ listadeGifs }) => {
	return (
		<div className={styles.list__pepe}>
			<div className={styles.list__container}>
				{listadeGifs.map((item) => (
					<div key={item.id} className={styles.list__gifs}>
						<img src={item.url} alt={item.title} />
						<p>{item.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default ListGifs;
// style={{ minWidth: '200px', minHeight: '460px' }}
