import "./styles.css";

export const Input = ({ placeholder, onChangeCallBack }) => {
	return (
		<>
			<input
				type="text"
				onChange={onChangeCallBack}
				placeholder={placeholder}
			/>
		</>
	);
};

export const Label = ({ For, textContent }) => {
	return (
		<>
			<label htmlFor={For}>{textContent}</label>
		</>
	);
};
