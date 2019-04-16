import { combineReducers } from 'redux';

import confidentialities from './confidentialitiesReducer';
import doctypes from './doctypesReducer';
import languages from './languagesReducer';

export default combineReducers({
	confidentialities,
	doctypes,
	languages,
});
