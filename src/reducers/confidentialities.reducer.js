import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

import { createReducer } from '../common/factories/reducers/resource.reducer';
import { accum, includesIn } from '../utils/helpers';

const confidentialitiesReducer = createReducer('confidentialities', {
	data: [],
	status: '',
	response: {},
	error: '',
});

const filterReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.filter;
		default:
			return state;
	}
};


export default combineReducers({
	api: confidentialitiesReducer,
	filter: filterReducer,
});

const selectFilter = state => state.filter;

let selectData = state => state.api.data;
let selectStatus = state => state.api.status;
let selectError = state => state.api.error;

selectData = createSelector(
	selectFilter, selectData,
	(filter, data) => data.filter(({ name }) => includesIn(name, filter))
);
selectStatus = createSelector(selectStatus, status => status);
selectError = createSelector(selectError, error => error);

const selectAccumulatedTotalDocs = createSelector(
	selectData, (data) => {
		const selectTotalDocs = state => state.map(({ total_docs }) => total_docs);
		return accum(selectTotalDocs(data));
	}
);

export {
	selectData,
	selectStatus,
	selectError,
	selectAccumulatedTotalDocs,
};
