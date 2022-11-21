export const addLocalStorage = () => {
	localStorage.setItem("start", true);
	window.location.reload();
};

export const rmLocalStorage = () => {
	localStorage.removeItem("start");
	window.location.reload();
};
