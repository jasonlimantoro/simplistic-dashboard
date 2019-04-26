import BaseService from '../common/services/BaseService';

export default class DoctypesService extends BaseService {
	get = async () => this._util.request('/doctypes');
}
