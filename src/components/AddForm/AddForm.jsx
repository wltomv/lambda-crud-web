import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import readfile from "../../utils/readFile";
import Avatar from "../Avatar/Avatar";

import styles from "./AddForm.module.css";

function AddForm() {
	const [media, setMedia] = useState({});

	const changeInput = (e) => {
		const newImage = readfile(e);
		setMedia(newImage);
	};

	const { register, reset, handleSubmit } = useForm();
	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<div className={styles.container_form}>
			<div className={styles.media}>
				<Avatar imgSrc={media.url}></Avatar>
				<div className={styles.media_add}>
					<label htmlFor="add">
						<BiImageAdd size={32} className="icon" />
						<input
							id="add"
							type="file"
							accept="image/*"
							hidden
							multiple
							onChange={changeInput}
						/>
					</label>
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.inputBox}>
					<input
						type="text"
						required="required"
						{...register("fullName", {
							required: true,
						})}
					/>
					<span>Nombre</span>
				</div>
				<div className={styles.inputBox}>
					<input
						type="text"
						required="required"
						{...register("profile", {
							required: true,
						})}
					/>
					<span>Perfil</span>
				</div>
				<input type="submit" value="Guardar" />
			</form>
		</div>
	);
}

export default AddForm;
