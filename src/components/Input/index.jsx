import "./styles.css";

export const Input = ({ placeholder, value, onChangeCallBack }) => {
	return (
		<>
			<input
				type="text"
				value={value}
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
