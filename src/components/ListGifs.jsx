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
//  No hemos podido validar a algunos/todos los pasajeros. Acuda al mostrador de visados/billetes de Ryanair para que comprueben su documentación antes de dirigirse a la puerta de embarque. Haz clic en “Ir al pago” para continuar con tu reserva. 