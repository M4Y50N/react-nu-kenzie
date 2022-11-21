import "./styles.css";

export const Button = ({ id, className, type, textContent, onClkCallBack }) => {
	return (
		<>
			<button id={id} className={className} type={type} onClick={onClkCallBack}>
				{textContent}
			</button>
		</>
	);
};
