import styles from './ListGifs.module.css';


const sharedOptions = async (shareData) => {
	try {
		await navigator.share({url:shareData});
	} catch (err) {
		console.error(err)
		return;
	}
};

const ListGifs = ({ listadeGifs }) => {
	return (
		<div className={styles.container}>
			<div className={styles.container__list}>
				{listadeGifs.map((item) => (
					<div key={item.id} className={styles.container__gifs}>
						<img src={item.url} alt={item.title} />
						<p>{item.title}</p>
						<button onClick={async() => await sharedOptions(item.url)} type="button">
							Compartir
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
export default ListGifs;
// https://media4.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-downsized-medium.gif?cid=e6f893cb4w867p2iyuiy36ej3rb1za22smcv8qqjpvpcxckf&rid=giphy-downsized-medium.gif&ct=g