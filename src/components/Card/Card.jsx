import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteUser } from "../../services/user.service";
import { toast } from "react-toastify";

import styles from "./Card.module.css";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { set } from "react-hook-form";

function Card({ user, newElement }) {
	const [onDelete, setOnDelete] = useState(false);
	const { name, profile, image } = user;

	const handleDelete = (id) => {
		setOnDelete(true);
		deleteUser(id)
			.then((res) => {
				if (res.status) toast.success(res.message);
				else toast.error(res.message);
				setOnDelete(false);
			})
			.finally(() => setOnDelete(false));
	};

	return (
		<>
			{onDelete && <Loader />}
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
					<button type="button" onClick={() => handleDelete(user.id)}>
						<AiFillDelete size={24} />
					</button>
				</div>
			</div>
		</>
	);
}

export default Card;
