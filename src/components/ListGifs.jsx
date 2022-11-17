import styles from './ListGifs.module.css';

const ListGifs = ({ listadeGifs }) => {
	return (
		<div className={styles.container}>
			<div className={styles.container__list}>
				{listadeGifs.map((item) => (
					<div key={item.id} className={styles.container__gifs}>
						<img src={item.url} alt={item.title} />
						<p>{item.title}</p>
						<button className={styles.button} role="button"
							onClick={() =>
								fetch(item.url)
									.then(function (response) {
										return response.blob();
									})
									.then(function (blob) {
										let file = new File([blob], 'picture.gif', { type: 'image/gif' });
										let filesArray = [file];

										if (navigator.canShare && navigator.canShare({ files: filesArray })) {
											navigator.share({
												files: filesArray,
											});
										}
									})
							}
							type="button"
						>
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
