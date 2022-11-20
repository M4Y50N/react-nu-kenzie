import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import { Input, Label } from "../../components/Input";
import { Select, Option } from "../../components/Select";

import trash from "../../assets/img/trash.svg";

import "./styles.css";

import { useState } from "react";

const data = [];

export const Dashboard = () => {
	const [total, setTotal] = useState(0),
		[desc, setDesc] = useState("");

	function addResume() {
		setTotal(total + 1);
		data.push("sua mae");
	}

	return (
		<>
			<Header />
			<main className="container">
				<div className="resumeHead">
					<div className="addResumo">
						<div className="description">
							<Label For="desc" textContent={"Descrição"} />
							<Input
								onChangeCallBack={(e) => setDesc(e.target.value)}
								placeholder={"Digite aqui sua descrição"}
							/>
							<span>Ex: Compra de roupas</span>
						</div>
						<div className="insertValues">
							<div>
								<Label For="value" textContent={"Valor"} />
								<div className="inputValue">
									<Input placeholder={1} />
									<span>R$</span>
								</div>
							</div>
							<div className="divSelect">
								<Label For={"typeValue"} textContent={"Tipo de Valor"} />
								<Select name="typeEntry" id="typeEntry">
									<Option value={"entrada"} textContent={"Entrada"} />
									<Option value={"saida"} textContent={"Saída"} />
									<Option value={"todos"} textContent={"Todos"} />
								</Select>
							</div>
						</div>
						<Button onClkCallBack={addResume} textContent={"Inserir Valor"} />
					</div>
					{data.length ? <Total total={total} /> : false}
				</div>
				<div className="resumeBody">
					<div className="filterOptions">
						<h4>Resumo financeiro</h4>
						<div className="options">
							<Button textContent={"Todos"} />
							<Button textContent={"Entrada"} />
							<Button textContent={"Despensas"} />
						</div>
					</div>
					<ul className="resumeList">
						<h3> Você ainda não possui nenhum lançamento</h3>
						<li className="itemEmp"></li>
						<li className="itemEmp"></li>
						<li className="itemEmp"></li>

						<li className="item">
							<h4>Descrição Resumo</h4>
							<div className="control">
								<div className="controlValue">
									R$
									<span className="controlAmount"> 5000</span>
								</div>

								<Button textContent={<img src={trash} alt="trash" />} />
							</div>
							<div className="typeEntry">Entrada</div>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};
