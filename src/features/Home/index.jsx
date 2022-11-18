import { Button } from "../../components/Button";
import illustration from "../../assets/img/illustration.png";

import "./styles.css";

export const Home = () => {
	return (
		<>
			<div className="home">
				<div className="container">
					<div className="head">
						<h3>
							<span>Nu</span> Kenzie
						</h3>
						<h2>Centralize o controle das suas finanças</h2>
						<p>de forma rápida e segura</p>
						<Button name={"Iniciar"} />
					</div>
					<div className="body">
						<img src={illustration} alt="illustration" />
					</div>
				</div>
			</div>
		</>
	);
};
