import { CONFIG } from '../utils/config';

export default class ConfidentialitiesService {
	get = async () => CONFIG.AXIOS.get('/confidentialities');
}
