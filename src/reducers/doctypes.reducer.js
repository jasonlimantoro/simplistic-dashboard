import { createSelector } from 'reselect';

import { createReducer } from '../common/factories/reducers/resource.reducer';
import { accum } from '../utils/helpers';

const doctypesReducer = createReducer('doctypes', {
	data: [],
	status: '',
	response: {},
	error: '',
});

export default doctypesReducer;

const selectData = state => state.data;
const selectStatus = state => state.status;
const selectError = state => state.error;
const selectTotalDocs = state => selectData(state).map(({ total_docs }) => total_docs);

export const selectDoctypesAccumulatedTotalDocs = createSelector(
	selectTotalDocs, subtotal => accum(subtotal)
);
export const selectDoctypesData = createSelector(selectData, doctypes => doctypes);
export const selectDoctypesError = createSelector(selectError, error => error);
export const selectDoctypesStatus = createSelector(selectStatus, status => status);
