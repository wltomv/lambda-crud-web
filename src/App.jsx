import "./App.css";
import Grid from "./containers/Grid/Grid";
import { BsPersonFillAdd } from "react-icons/bs";
import Modal from "./containers/Modal/Modal";
import useModal from "./hooks/useModal";
import AddForm from "./components/AddForm/AddForm";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
	const [isOpen, openModal, closeModal] = useModal(false);
	return (
		<>
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
			<ToastContainer
				position="top-center"
				autoClose={5000}
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
}

export default App;
