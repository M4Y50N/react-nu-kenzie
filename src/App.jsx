import "./App.css";
import { Home } from "./features/Home";
import { Dashboard } from "./features/Dashboard";

function App() {
	return (
		<div className="App">
			{!localStorage.getItem("start") ? <Home /> : <Dashboard />}
		</div>
	);
}

export default App;
