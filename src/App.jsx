import "./App.css";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

function App() {
	return (
		<div className="App">
			{!localStorage.getItem("start") ? <Home /> : <Dashboard />}
		</div>
	);
}

export default App;
