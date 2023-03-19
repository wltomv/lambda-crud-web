import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import { addUser } from "../../services/user.service";
import { toast } from "react-toastify";
import readfile from "../../utils/readFile";
import Avatar from "../Avatar/Avatar";

import styles from "./AddForm.module.css";

function AddForm() {
	const [media, setMedia] = useState({});

	const changeInput = (e) => {
		const newImage = readfile(e);
		setMedia(newImage);
	};

	const clearForm = () => {
		setMedia({});
		reset();
	};
	const { register, reset, handleSubmit } = useForm();
	const onSubmit = async (data) => {
		const res = await addUser(data, media.file);
		if (res.status) {
			toast.success(res.message);
			clearForm();
		} else toast.error(res.message);
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
						{...register("name", {
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
