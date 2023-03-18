import axiosClient from "../config/api/axios";
import wrapPromise from "../utils/wrapPromise";

const apiConfig = {
	baseUrl: "",
};

const client = axiosClient(apiConfig.baseUrl);

export function getUsers() {
	const promise = client
		.get("/users")
		.then((res) => res.data)
		.catch((err) => err);

	return wrapPromise(promise);
}

export function addUser(params) {
	const url = "/users";
	return client.post(url, { params });
}
