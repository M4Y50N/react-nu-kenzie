import { Button } from "../Button";
import { rmLocalStorage } from "../../assets/scripts/localStorage";

import "./styles.css";

export const Header = () => {
	return (
		<header>
			<nav className="container">
				<h3 className="logo">
					<span>Nu</span> Kenzie
				</h3>
				<Button textContent={"Inicio"} onClkCallBack={rmLocalStorage} />
			</nav>
		</header>
	);
};
