import { CONFIG } from '../../utils/config';

export default class BaseService {
	request = (path, method = 'get') => {
		switch (method) {
			case 'get':
				return CONFIG.AXIOS.get(path);
			default:
				return Promise.reject(new Error('Method not allowed!'));
		}
	}
}
