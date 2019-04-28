import { combineReducers } from 'redux';

import { createReducer } from '../common/factories/reducers/resource.reducer';

import confidentialities, {
	selectFilteredConfidentialities,
	selectConfidentialitiesStatus,
	selectConfidentialitiesError,
	selectConfidentialitiesAccumulatedTotalDocs,
} from './confidentialities.reducer';
import doctypes, {
	selectDoctypesFilteredData,
	selectDoctypesStatus,
	selectDoctypesError,
	selectDoctypesFilteredAccumulatedTotalDocs,
} from './doctypes.reducer';

export default combineReducers({
	confidentialities,
	doctypes,
	languages: createReducer('languages'),
});

// Selectors
export const selectConfidentialities = {
	accumulatedTotalDocs: state => selectConfidentialitiesAccumulatedTotalDocs(state.confidentialities),
	data: state => selectFilteredConfidentialities(state.confidentialities),
	error: state => selectConfidentialitiesError(state.confidentialities),
	status: state => selectConfidentialitiesStatus(state.confidentialities),
};

export const selectDoctypes = {
	accumulatedTotalDocs: state => selectDoctypesFilteredAccumulatedTotalDocs(state.doctypes),
	data: state => selectDoctypesFilteredData(state.doctypes),
	status: state => selectDoctypesStatus(state.doctypes),
	error: state => selectDoctypesError(state.doctypes),
};
