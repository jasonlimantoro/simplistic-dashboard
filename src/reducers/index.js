import { combineReducers } from 'redux';

import { createReducer } from '../common/factories/reducers/resource.reducer';

import confidentialities, {
	selectConfidentialitiesData,
	selectConfidentialitiesStatus,
	selectConfidentialitiesError,
	selectConfidentialitiesAccumulatedTotalDocs,
} from './confidentialities.reducer';
import doctypes, {
	selectDoctypesData,
	selectDoctypesStatus,
	selectDoctypesError,
	selectDoctypesAccumulatedTotalDocs,
} from './doctypes.reducer';

export default combineReducers({
	confidentialities,
	doctypes,
	languages: createReducer('languages'),
});

// Selectors
export const selectConfidentialities = {
	accumulatedTotalDocs: state => selectConfidentialitiesAccumulatedTotalDocs(state.confidentialities),
	data: state => selectConfidentialitiesData(state.confidentialities),
	error: state => selectConfidentialitiesError(state.confidentialities),
	status: state => selectConfidentialitiesStatus(state.confidentialities),
};

export const selectDoctypes = {
	accumulatedTotalDocs: state => selectDoctypesAccumulatedTotalDocs(state.doctypes),
	data: state => selectDoctypesData(state.doctypes),
	status: state => selectDoctypesStatus(state.doctypes),
	error: state => selectDoctypesError(state.doctypes),
};
