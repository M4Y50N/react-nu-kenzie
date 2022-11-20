import "./styles.css";

export const Button = ({ textContent, onClkCallBack }) => {
	return (
		<>
			<button onClick={onClkCallBack}>{textContent}</button>
		</>
	);
};
