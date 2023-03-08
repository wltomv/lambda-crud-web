import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";

import styles from "./AddForm.module.css";

function AddForm() {
	const { register, reset, handleSubmit } = useForm();
	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<div className={styles.container_form}>
			<div className={styles.media}>
				<Avatar></Avatar>
				<button type="button">
					<BiImageAdd size={24} />
				</button>
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
