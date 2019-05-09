import UtilService from '../common/services/UtilService';
import { wait } from '../common/utils/async';
import { randomInt } from '../common/utils/random';
import { confidentialities, doctypes, languages } from '../data';

export default class MockService extends UtilService {
	/**
	 * @override
	 * @param path
	 * @param method
	 * @param options
	 * @returns {Promise}
	 */
	// eslint-disable-next-line class-methods-use-this
	async request (path, method = 'GET', options = {}) {
		const delay = randomInt({ min: 1000, max: 3000 });
		await wait(delay);
		// if (delay > 2500) {
		// 	return Promise.reject({ message: 'Network Error' });
		// }
		switch (true) {
			case path.includes('/confidentialities'):
				if (method.toUpperCase() === 'GET') {
					return confidentialities;
				}
				return Promise.reject({ message: 'SERVER_ERROR' });
				
			case path.includes('/doctypes'):
				if (method.toUpperCase() === 'GET') {
					return doctypes;
				}
				throw new Error('SERVER_ERROR');
				
			case path.includes('/languages'):
				if (method.toUpperCase() === 'GET') {
					return languages;
				}
				throw new Error('SERVER_ERROR');
				
			default:
				return Promise.reject({ message: 'SERVER_ERROR', options });
		}
	}
}
