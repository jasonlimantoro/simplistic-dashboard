import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import { createReducer } from '../common/factories/reducers/resource.reducer';
import { accum } from '../utils/helpers';

export default combineReducers({
	confidentialities: createReducer('confidentialities'),
	doctypes: createReducer('doctypes'),
	languages: createReducer('languages'),
});

// Selectors
const createSelectData = resource => state => state[resource].data;
const createSelectError = resource => state => state[resource].error;
const createSelectStatus = resource => state => state[resource].status;
const createSelectAccumulatedTotalDocs = resource =>
	state => createSelectData(resource)(state).map(({ total_docs }) => total_docs);

export const selectConfidentialities = {
	accumulatedTotalDocs: (state) =>
		createSelector(
			createSelectAccumulatedTotalDocs('confidentialities'),
			subtotal => accum(subtotal)
		)(state),

	data: state =>
		createSelector(
			createSelectData('confidentialities'),
			confidentialities => confidentialities
		)(state),

	error: state =>
		createSelector(
			createSelectError('confidentialities'),
			error => error
		)(state),

	status: state =>
		createSelector(
			createSelectStatus('confidentialities'),
			status => status
		)(state),
};

export const selectDoctypes = {
	accumulatedTotalDocs: state =>
		createSelector(
			createSelectAccumulatedTotalDocs('doctypes'),
			subtotal => accum(subtotal)
		)(state),
	
	data: state =>
		createSelector(
			createSelectData('doctypes'),
			doctypes => doctypes
		)(state),
	
	status: state =>
		createSelector(
			createSelectStatus('doctypes'),
			status => status
		)(state),
	
	error: state =>
		createSelector(
			createSelectError('doctypes'),
			error => error
		)(state),
};
