import ConfidentialitiesService from '../services/confidentialities.service';
import MockService from '../services/mock.service';

import { CONFIDENTIALITIES } from './types';

const service = new ConfidentialitiesService({
	baseUrl: '/data',
	ServiceUtil: MockService,
});

const fetchConfidentialitiesRequest = () => {
	return {
		type: CONFIDENTIALITIES.FETCH.REQUEST,
	};
};

const fetchConfidentialitiesSuccess = (confidentialities) => {
	return {
		type: CONFIDENTIALITIES.FETCH.SUCCESS,
		confidentialities,
	};
};
const fetchConfidentialitiesError = (error) => {
	return {
		type: CONFIDENTIALITIES.FETCH.ERROR,
		error,
	};
};

export const fetchConfidentialities = () => async dispatch => {
	dispatch(fetchConfidentialitiesRequest());
	try {
		const res = await service.get();
		const confidentialities = await res;
		dispatch(fetchConfidentialitiesSuccess(confidentialities));
	} catch (e) {
		dispatch(fetchConfidentialitiesError(e.message));
	}
};
