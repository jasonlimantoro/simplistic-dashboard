import { combineReducers } from 'redux';

import confidentialities, * as confidentialitiesReducer from './confidentialities.reducer';
import doctypes from './doctypes.reducer';
import languages from './languages.reducer';

export default combineReducers({
	confidentialities,
	doctypes,
	languages,
});

export const selectConfidentialities = {
	accumulatedTotalDocs: (state) =>
		confidentialitiesReducer.selectAccumulatedTotalDocs(state.confidentialities),

	data: state =>
		confidentialitiesReducer.selectConfidentialities(state.confidentialities),

	error: state =>
		confidentialitiesReducer.selectError(state.confidentialities),

	status: state =>
		confidentialitiesReducer.selectStatus(state.confidentialities),
};
