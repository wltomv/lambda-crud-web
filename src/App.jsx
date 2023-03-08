import "./App.css";
import Grid from "./containers/Grid/Grid";
import { BsPersonFillAdd } from "react-icons/bs";
import Modal from "./containers/Modal/Modal";
import useModal from "./hooks/useModal";

function App() {
	const [isOpen, openModal, closeModal] = useModal(true);

	return (
		<div className="App">
			<div className="add">
				<button type="button" onClick={openModal}>
					<BsPersonFillAdd /> Agregar
				</button>
			</div>
			<Grid />
			<Modal
				title="Nuevo usuario"
				isOpen={isOpen}
				closeModal={closeModal}
			></Modal>
		</div>
	);
}

export default App;
