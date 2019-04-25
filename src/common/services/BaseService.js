import UtilService from './UtilService';

export default class BaseService {
	constructor({ baseUrl = '', ServiceUtil = UtilService }) {
		this._baseUrl = baseUrl;
		this._util = new ServiceUtil({ baseUrl });
	}
}
