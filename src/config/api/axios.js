import axios from "axios";
import queryString from "query-string";

const axiosClient = (baseURL) =>
	axios.create({
		baseURL,
		headers: {
			"Content-type": "application/json",
		},
		paramsSerializer: {
			serialize: (params) =>
				queryString.stringify({
					...params,
				}),
		},
	});

export default axiosClient;
