import styles from './ListGifs.module.css';

const ListGifs = ({ listadeGifs }) => {
	return (
		<div className={styles.container}>
			<div className={styles.container__list}>
				{listadeGifs.map((item) => (
					<div key={item.id} className={styles.container__gifs}>
						<img src={item.url} alt={item.title} />
						<p>{item.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default ListGifs;
