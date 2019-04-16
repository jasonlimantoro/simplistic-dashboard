import axios from 'axios';

const apiEndPoint = '/data';

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
	API_ENDPOINT: '/data',
};
