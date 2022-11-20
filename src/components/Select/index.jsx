import "./styles.css";

export const Select = ({ name, id, children }) => {
	return (
		<select name="" id="">
			{children}
		</select>
	);
};

export const Option = ({ value, textContent }) => {
	return <option value={value}>{textContent}</option>;
};
