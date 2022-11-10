const ListGifs = ({ listadeGifs }) => {
	return (
		<div>
			{listadeGifs.map((item) => (
				<ul>
					<li key={item.id}>
						<img src={item.url} alt={item.title} />
						<p>{item.title}</p>
					</li>
				</ul>
			))}
		</div>
	);
};
export default ListGifs;
