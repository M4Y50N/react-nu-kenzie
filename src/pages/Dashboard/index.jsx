import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Total } from "../../components/Total";
import { Input, Label } from "../../components/Input";
import { Select } from "../../components/Select";

import trash from "../../assets/img/trash.svg";

import "./styles.css";

import { useState } from "react";

export const Dashboard = () => {
	const [items, setItems] = useState([]);

	const [total, setTotal] = useState(0),
		[formData, setFormData] = useState({
			desc: "",
			value: "",
			typeEntry: "entrada",
		});

	const [filter, setFilter] = useState("todos");

	function addResume() {
		formData.typeEntry === "despesa"
			? setTotal(total - formData.value)
			: setTotal(total + formData.value);

		setItems(() => [...items, formData]);

		setFormData({
			desc: "",
			value: "",
			typeEntry: options[0].value,
		});

		document.querySelector("select").value = "entrada";
	}

	function submit(e) {
		e.preventDefault();
		addResume();
	}

	function delResume(index) {
		const idTarget = index;

		const exclusiveList = items.filter((e, i) => {
			return i !== idTarget;
		});

		setTotal(
			items[index].typeEntry === "entrada"
				? total - items[index].value
				: total + items[index].value
		);
		setItems(exclusiveList);
	}
	const filteredList = items.filter((item) => {
		return filter === "todos" ? true : item.typeEntry === filter;
	});

	function render() {
		return filteredList.map((elm, i) => {
			return (
				<li
					key={i}
					className={elm.typeEntry === "despesa" ? "item saida" : "item"}
				>
					<h4>{elm.desc}</h4>
					<div className="control">
						<div className="controlValue">
							R$
							<span className="controlAmount"> {elm.value}</span>
						</div>

						<Button
							onClkCallBack={() => {
								delResume(i);
							}}
							textContent={<img src={trash} alt="trash" />}
						/>
					</div>
					<div className="typeEntry">{elm.typeEntry}</div>
				</li>
			);
		});
	}

	const options = [
		{ value: "entrada", label: "Entrada" },
		{ value: "despesa", label: "Despesa" },
	];

	return (
		<>
			<Header />
			<main className="container">
				<div className="resumeHead">
					<form onSubmit={submit} className="addResumo">
						<div className="description">
							<Label For="desc" textContent={"Descrição"} />
							<Input
								value={formData.desc}
								onChangeCallBack={(e) =>
									setFormData({
										...formData,
										desc: e.target.value,
									})
								}
								placeholder={"Digite aqui sua descrição"}
							/>
							<span>Ex: Compra de roupas</span>
						</div>
						<div className="insertValues">
							<div>
								<Label For="value" textContent={"Valor"} />
								<div className="inputValue">
									<Input
										value={formData.value}
										onChangeCallBack={(e) =>
											setFormData({
												...formData,
												value: Number(e.target.value),
											})
										}
										placeholder={1}
									/>
									<span>R$</span>
								</div>
							</div>
							<div className="divSelect">
								<Label For={"typeValue"} textContent={"Tipo de Valor"} />
								<Select
									name="typeEntry"
									id="typeEntry"
									options={options}
									defaultValue={formData.typeEntry}
									onChangeCallBack={(e) =>
										setFormData({ ...formData, typeEntry: e.target.value })
									}
								/>
							</div>
						</div>
						{
							<Button
								type={"submit"}
								textContent={"Inserir Valor"}
								className={
									formData.desc === "" || formData.value === "" ? "disable" : ""
								}
							/>
						}
					</form>
					{items.length ? <Total total={total} /> : false}
				</div>
				<div className="resumeBody">
					<div className="filterOptions">
						<h4>Resumo financeiro</h4>
						<div className="options">
							<Button
								textContent={"Todos"}
								onClkCallBack={() => {
									setFilter("todos");
								}}
							/>
							<Button
								textContent={"Entrada"}
								onClkCallBack={() => {
									setFilter("entrada");
								}}
							/>
							<Button
								textContent={"Despesa"}
								onClkCallBack={() => {
									setFilter("despesa");
								}}
							/>
						</div>
					</div>
					<ul className="resumeList">
						{!items.length ? (
							<>
								<h3> Você ainda não possui nenhum lançamento</h3>
								<li className="itemEmp"></li>
								<li className="itemEmp"></li>
								<li className="itemEmp"></li>
							</>
						) : (
							render()
						)}
					</ul>
				</div>
			</main>
		</>
	);
};
