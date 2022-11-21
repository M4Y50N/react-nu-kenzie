import { Button } from "../../components/Button";
import illustration from "../../assets/img/illustration.png";

import { addLocalStorage } from "../../assets/scripts/localStorage";

import "./styles.css";

export const Home = () => {
	return (
		<>
			<div className="home">
				<div className="container">
					<main>
						<div className="head">
							<h3>
								<span>Nu</span> Kenzie
							</h3>
							<h2>Centralize o controle das suas finanças</h2>
							<p>de forma rápida e segura</p>
							<Button textContent={"Iniciar"} onClkCallBack={addLocalStorage} />
						</div>
						<div className="body">
							<img src={illustration} alt="illustration" />
						</div>
					</main>
				</div>
			</div>
		</>
	);
};
