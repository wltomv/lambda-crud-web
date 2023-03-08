import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./Modal.module.css";

function Modal({ children, isOpen, closeModal, title }) {
	return (
		<article className={`${styles.modal} ${isOpen && styles.is_open}`}>
			<div className={styles.modal_container}>
				<div className={styles.modal_header}>
					<h3>{title}</h3>
				</div>
				<button
					type="button"
					className={styles.modal_close}
					onClick={closeModal}
				>
					<AiFillCloseCircle size={32} />
				</button>
				{children}
			</div>
		</article>
	);
}

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	title: PropTypes.string,
};

Modal.defaultProps = { title: "" };

export default Modal;
