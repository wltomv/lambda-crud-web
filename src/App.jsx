import "./App.css";
import Grid from "./containers/Grid/Grid";
import { BsPersonFillAdd } from "react-icons/bs";
import Modal from "./containers/Modal/Modal";
import useModal from "./hooks/useModal";
import AddForm from "./components/AddForm/AddForm";

function App() {
	const [isOpen, openModal, closeModal] = useModal(false);

	return (
		<div className="App">
			<div className="add">
				<button type="button" onClick={openModal}>
					<BsPersonFillAdd /> Agregar
				</button>
			</div>
			<Grid />
			<Modal title="Nuevo usuario" isOpen={isOpen} closeModal={closeModal}>
				{" "}
				<AddForm />{" "}
			</Modal>
		</div>
	);
}

export default App;
