import axios from 'axios';

const apiEndPoint = `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/api`;

const createAxios = () => {
	const defaultOptions = {
		baseURL: apiEndPoint,
		headers: {
			'Content-Type': 'application/json',
		},
	};
	return axios.create(defaultOptions);
};

export const CONFIG = {
	AXIOS: createAxios(),
};
