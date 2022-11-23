import "./styles.css";

export const Select = ({
	name,
	id,
	options,
	onChangeCallBack,
	defaultValue,
}) => {
	return (
		<select
			name={name}
			id={id}
			value={defaultValue}
			defaultValue={defaultValue}
			onChange={onChangeCallBack}
		>
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
