import { CONFIDENTIALITIES } from '../actions/types';

const confidentialitiesReducer = (state = {}, action) => {
	switch (action.type) {
		case CONFIDENTIALITIES.FETCH.REQUEST:
			return {
				...state,
				status: 'loading',
			};
		case CONFIDENTIALITIES.FETCH.SUCCESS:
			return {
				...state,
				status: 'success',
				data: action.confidentialities,
			};
		case CONFIDENTIALITIES.FETCH.ERROR:
			return {
				...state,
				status: 'error',
				error: action.error,
			};
		default:
			return state;
	}
};

export default confidentialitiesReducer;
