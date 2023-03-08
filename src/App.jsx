import "./App.css";
import Grid from "./containers/Grid/Grid";
import { BsPersonFillAdd } from "react-icons/bs";

function App() {
	return (
		<div className="App">
			<div className="add">
				<button type="button">
					<BsPersonFillAdd /> Agregar
				</button>
			</div>
			<Grid />
		</div>
	);
}

export default App;
