import BaseService from '../common/services/BaseService';

export default class LanguageService extends BaseService {
	get = async () => this._util.request('/languages');
}
