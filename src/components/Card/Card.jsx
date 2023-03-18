import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import styles from "./Card.module.css";

function Card({ name, profile, image }) {
	return (
		<div className={styles.card}>
			<div className={styles.imgBx}>
				<img src={image} alt="" />
			</div>
			<div className={styles.content}>
				<div className={styles.details}>
					<h2>
						{name} <br />
						<span>{profile}</span>
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
