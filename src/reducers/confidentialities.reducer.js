import { createSelector } from 'reselect';

import { CONFIDENTIALITIES } from '../actions/types';

const	initialState = {
	data: [],
	status: '',
	response: {},
	error: '',
};

const confidentialitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONFIDENTIALITIES.FETCH.REQUEST:
			return {
				...state,
				status: 'loading',
				error: '',
			};
		case CONFIDENTIALITIES.FETCH.SUCCESS:
			return {
				...state,
				status: 'success',
				data: action.confidentialities,
				error: '',
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

const selectData = state => state.data;
export const selectConfidentialities = createSelector(selectData, confidentialities => confidentialities);

const selectTotalDocs = state => selectData(state).map(({ total_docs }) => total_docs);
export const selectAccumulatedTotalDocs = createSelector(
	selectTotalDocs, subtotal => subtotal.reduce((sum, i) => sum + i, 0)
);

export const selectError = createSelector(state => state.error, error => error);
export const selectStatus = createSelector(state => state.status, status => status);
