import { createSelector } from 'reselect';

import { createReducer } from '../common/factories/reducers/resource.reducer';
import { accum } from '../utils/helpers';

const confidentialitiesReducer = createReducer('confidentialities', {
	data: [],
	status: '',
	response: {},
	error: '',
});

export default confidentialitiesReducer;

const selectData = state => state.data;
const selectStatus = state => state.status;
const selectError = state => state.error;
const selectTotalDocs = state => selectData(state).map(({ total_docs }) => total_docs);

export const selectConfidentialitiesAccumulatedTotalDocs = createSelector(
	selectTotalDocs, subtotal => accum(subtotal)
);
export const selectConfidentialitiesData = createSelector(selectData, confidentialities => confidentialities);
export const selectConfidentialitiesError = createSelector(selectError, error => error);
export const selectConfidentialitiesStatus = createSelector(selectStatus, status => status);
