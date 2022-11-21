import "./styles.css";

export const Total = ({ total }) => {
	return (
		<>
			<div className="totalHead">
				<div>
					<h4>Valor total:</h4>
					<div className="value">
						R$
						<span className="amount">{total}</span>
					</div>
				</div>
				<p>O valor se refere ao saldo</p>
			</div>
		</>
	);
};
