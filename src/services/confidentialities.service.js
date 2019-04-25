import BaseService from '../common/services/BaseService';

export default class ConfidentialitiesService extends BaseService {
	get = async () => this._util.request('/confidentialities');
}
