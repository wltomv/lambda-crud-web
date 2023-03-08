import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import styles from "./Card.module.css";

function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.imgBx}>
				<img
					src="https://imagen.research.google/main_gallery_images/a-brain-riding-a-rocketship.jpg"
					alt=""
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.details}>
					<h2>
						Nombre <br />
						<span>Perfil</span>
					</h2>
				</div>
			</div>
			<div className={styles.options}>
				<button type="button">
					<AiFillEdit size={24} />
				</button>
				<button type="button">
					<AiFillDelete size={24} />
				</button>
			</div>
		</div>
	);
}

export default Card;
