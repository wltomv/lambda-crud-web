import axiosClient from "../config/api/axios";
import wrapPromise from "../utils/wrapPromise";

const apiConfig = {
	baseUrl: "https://8ylk6alkd0.execute-api.us-east-1.amazonaws.com/dev/",
};

const client = axiosClient(apiConfig.baseUrl);

export function getUsers() {
	const promise = client
		.get("/users")
		.then((res) => res.data)
		.catch((err) => err);

	return wrapPromise(promise);
}

export function getData() {
	return client
		.get("/users")
		.then((res) => res.data)
		.catch((err) => err);
}

function getSignedURL(imageName) {
	const url = `/postUrl/${imageName}`;
	return client
		.get(url)
		.then((res) => res.data)
		.catch((err) => err);
}

function upload(url, file) {
	return client.put(url, file, {
		headers: {
			"Content-Type": file.type,
		},
	});
}

export async function addUser(data, file) {
	const signed = await getSignedURL(file.name);

	if (signed.url) {
		await upload(signed.url, file);
		const url = "/users";
		const newUser = {
			image: signed.url.split("?")[0],
			...data,
		};
		const res = await client.post(url, newUser);
		const status = res.status == 200 ? true : false;
		const message = status
			? "Usuario añadido con éxito"
			: "Ocurrio un error, por favor intentelo más tarde";

		return { status, message, data: res.data };
	}
	return {
		status: false,
		message: "Ocurrio un error, por favor intentelo más tarde",
	};
}

export async function deleteUser(id) {
	const url = `users/${id}`;
	const res = await client.delete(url);
	const status = res.status == 200 ? true : false;
	const message = status
		? "Usuario eliminado con éxito"
		: "Ocurrio un error, por favor intentelo más tarde";
	return { status, message };
}
