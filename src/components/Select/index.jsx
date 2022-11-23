import "./styles.css";

export const Select = ({ name, id, options, onChangeCallBack, value }) => {
	return (
		<select name={name} id={id} value={value} onChange={onChangeCallBack}>
			{options.map((option, i) => {
				return (
					<option key={i} value={option.value}>
						{option.label}
					</option>
				);
			})}
		</select>
	);
};
