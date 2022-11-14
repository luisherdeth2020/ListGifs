const ListGifs = ({ listadeGifs }) => {
	return (
		<div>
				<ul>
			{listadeGifs.map((item) => (
					<li key={item.id}>
						<img src={item.url} alt={item.title} />
						<p>{item.title}</p>
					</li>
			))}
				</ul>
		</div>
	);
};
export default ListGifs;
